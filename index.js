require('dotenv').config('');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
var bodyParser = require('body-parser');
const cors = require('cors');

const middleware = require('./middleware/index');
const userRoute = require('./routes/users');
const hotelRoute = require('./routes/hotels');
const roomRoute = require('./routes/rooms');
const stripe = require('stripe')(process.env.STRIPE);

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.json({ limit: '10mb', extended: true }));
app.use(
	express.urlencoded({
		limit: '10mb',
		extended: true,
		parameterLimit: 50000,
	}),
);
app.use(
	bodyParser.json({
		limit: '50mb',
	}),
);

app.use(
	bodyParser.urlencoded({
		limit: '50mb',
		parameterLimit: 100000,
		extended: true,
	}),
);
// app.use(middleware.decodeToken);

const PORT = process.env.LOCAL_PORT || 5000;
const DOMAIN = 'http://localhost:3000';

mongoose.connection.on('disconnected', () => {
	console.log('MongoDB disconnected!');
});

app.listen(PORT, () => {
	const connectdb = async () => {
		try {
			await mongoose.connect(process.env.MONGO);
			console.log('MongoDB Connected');
		} catch (error) {
			console.log(error);
		}
	};
	connectdb();
	console.log(`Server listening on ${PORT}`);
});

app.get('/api', (req, res) => {
	res.json({ message: 'Hello from server!' });
});

app.use('/api/user', userRoute);
app.use('/api/hotel', hotelRoute);
app.use('/api/hotel-room', roomRoute);

app.post('/create-checkout-session', async (req, res) => {
	const newHotel = req.body;
	res.json(newHotel);

	// const session = await stripe.checkout.sessions.create({
	// 	customer_email: 'vunghia@gmail.com',
	// 	line_items: [
	// 		{
	// 			price_data: {
	// 				currency: 'usd',
	// 				product_data: {
	// 					name: 'T-shirt',
	// 				},
	// 				unit_amount: 200,
	// 			},
	// 			quantity: 1,
	// 		},
	// 	],
	// 	mode: 'payment',
	// 	success_url: 'http://localhost:3000/success',
	// 	cancel_url: 'http://localhost:3000/',
	// });
	// res.json({ url: session.url });
});
