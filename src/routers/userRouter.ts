import express from "express";

import { createUser, findAllUser, deleteUser } from "../controllers/user";

const router = express.Router();

router.post("/", createUser);
router.get("/", findAllUser);
router.delete("/:userId", deleteUser);

export default router;
