import { Handler } from 'express';
import { StatusCodes } from 'http-status-codes';

export const getAllTasks: Handler = (req, res, next) => {
  res.status(StatusCodes.OK).json({ success: true });
};

export const createTask: Handler = (req, res, next) => {
  res.status(StatusCodes.CREATED).json({ success: true });
};

export const getTask: Handler = (req, res, next) => {
  res.status(StatusCodes.OK).json({
    success: true,
  });
};

export const updateTask: Handler = (req, res, next) => {
  res.status(StatusCodes.OK).json({ success: true });
};

export const deleteTask: Handler = (req, res, next) => {
  res.status(StatusCodes.OK).json({ success: true });
};
