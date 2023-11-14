import { StatusCodes } from 'http-status-codes';
import Task from '../models/Task.js';
import asyncWrapper from '../middlewares/asyncWrapper.js';
import createAppError from '../utils/appError.js';

export const getAllTasks = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find();
  res.status(StatusCodes.OK).json({ tasks });
});

export const createTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.create(req.body);
  res.status(StatusCodes.CREATED).json({ task });
});

export const getTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  if (!task)
    throw createAppError(
      `No Task with ID: ${req.params.id}`,
      StatusCodes.NOT_FOUND
    );
  res.status(StatusCodes.OK).json({
    task,
  });
});

export const updateTask = asyncWrapper(async (req, res, next) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updatedTask)
    throw createAppError(
      `No Task with ID: ${req.params.id}`,
      StatusCodes.NOT_FOUND
    );
  res.status(StatusCodes.OK).json({ task: updatedTask });
});

export const deleteTask = asyncWrapper(async (req, res, next) => {
  const deletedTask = await Task.findByIdAndDelete(req.params.id);
  if (!deletedTask)
    throw createAppError(
      `No Task with ID: ${req.params.id}`,
      StatusCodes.NOT_FOUND
    );
  res.status(StatusCodes.OK).json();
});
