import { Request, Response, NextFunction } from 'express';

const ErrorHandler = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const status = err.statusCode || 500; 
	res.status(status).json({
		success: false,
		status,
		message: err.message || 'Something went wrong',
		// Just who to stack (file directory error) when development
		stack: process.env.NODE_ENV !== 'development' ? {} : err.stack,
	});
};

export default ErrorHandler;