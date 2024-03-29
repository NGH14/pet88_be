import { mongoDBConnectMessage } from './../constant/app.js';
import mongoose from 'mongoose';
import logger from '../utils/logger.ts';
import { Environment } from '../constant/environment.ts';
import { LogLevel } from '../constant/log.js';

export const connectDB = async () => {
	try {

		const dbOptions = {
			dbName: process.env.DB,
			serverSelectionTimeoutMS: 20000,
		};

		const mongo = await mongoose.connect(process.env.MONGO, dbOptions);
		if (process.env.NODE_ENV === Environment.Development) {
			logger.log({ level: LogLevel.Info, message: `${mongoDBConnectMessage} in PORT:${mongo.connection.port} DB: ${mongo.connection.name}`  });
		}
	} catch (error) {
		logger.log({
			level: LogLevel.Error,
			message: error,
		});
	}
};
