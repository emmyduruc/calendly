import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../helpers/errorHandlers";
import userModel from "../models/user";
import userServices from "../services/userService";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, meeting, date } = req.body;

    const user = new userModel({
      firstName,
      lastName,
      email,
      meeting,
      date,
    });

    const createdUser = await userServices.createUser(user);
    res.json(createdUser);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

export const findAllUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await userServices.findAllUser());
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await userServices.deleteById(req.params.userId);
    res.status(204).end();
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
