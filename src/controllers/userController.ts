import { Request, Response } from "express";
import { User, Thought } from "../models/index.js";

/**
 * GET All Courses /courses
 * @returns an array of Courses
 */
export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/**
 * GET Course based on id /course/:id
 * @param string id
 * @returns a single Course object
 */
export const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const thought = await User.findById(userId);
    if (thought) {
      res.json(thought);
    } else {
      res.status(404).json({
        message: "Volunteer not found",
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/**
 * POST Course /courses
 * @param object username
 * @returns a single Course object
 */
export const createUser = async (req: Request, res: Response) => {
  const { user } = req.body;
  try {
    const newUser = await User.create({
      user,
    });
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**
 * PUT Course based on id /courses/:id
 * @param object id, username
 * @returns a single Course object
 */
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!user) {
      res.status(404).json({ message: "No user with this id!" });
    }

    res.json(user);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**
 * DELETE Course based on id /courses/:id
 * @param string id
 * @returns string
 */
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.userId });

    if (!user) {
      res.status(404).json({
        message: "No user with that ID",
      });
    } else {
      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: "User and thoughts deleted!" });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
