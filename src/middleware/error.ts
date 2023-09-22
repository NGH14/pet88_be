import { Request, Response, NextFunction } from 'express';

const ErrorHandler = (
	error: any,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (process.env.NODE_ENV === "test") return ;
	const status = error.status || 500;
	
	res.status(status).json({
		success: false,
		status,
		message: error.message || 'Something went wrong',
		// Just show to stack (file directory got error) when development
		stack: process.env.NODE_ENV !== 'development' ? {} : error.stack,
	});
};

export default ErrorHandler;
