import {
  NotFoundError,
} from "../helpers/errorHandlers";
import { UserDocument } from "../models/user";
import  Users from "../models/user";
//POST
const createUser = async (userDocument: UserDocument) => {
  const createdUser = await userDocument.save();
  return createdUser;
};

//PUT to update
const updateUser = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> => {
  const foundUser = await Users.findByIdAndUpdate(userId, update, {
    new: true,
  });

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`);
  }

  return foundUser;
};

//GET
const findAllUser = async (): Promise<UserDocument[]> => {
  return Users.find();
};

//GET a user byId
const findUserById = async (userId: string): Promise<UserDocument> => {
  const foundUser = await Users.findById(userId);

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`);
  }

  return foundUser;
};

const deleteById = async (userId: string): Promise<UserDocument> => {
  const foundUser = await Users.findById(userId);

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`);
  }

  return foundUser;
};


export default {
  createUser,
  updateUser,
  deleteById,
  findUserById,
  findAllUser,
};

//i have a user one
//i have user 2

//user2 wants to schedule a meeting with user 1
//{check if the date is free, if free, schedule}
//{if not free, throw error message}

