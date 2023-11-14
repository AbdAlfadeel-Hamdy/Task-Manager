import { Handler } from 'express';

// const asyncWrapper =
//   (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
//     fn(req, res, next).catch(next);

const asyncWrapper =
  (fn: Handler): Handler =>
  async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export default asyncWrapper;
