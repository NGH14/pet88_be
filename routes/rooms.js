const express = require('express');

const router = express.Router();
const { Hotel } = require('../models/hotel.js');
const { Room } = require('../models/room.js');

router.post('/:id', async (req, res) => {
	const hotelId = req.params.id;
	const newRoom = new Room(req.body);
	// res.status(200).json({ hotelId, newRoom });

	try {
		const savedRoom = await newRoom.save();
		try {
			await Hotel.findByIdAndUpdate(hotelId, {
				$push: { rooms: savedRoom._id },
			});
		} catch (err) {
			res.status(500).json(err);
		}
		res.status(200).json(savedRoom);
	} catch (err) {
		res.json(err);
	}
});

router.put('/:id', async (req, res) => {
	try {
		const updatedRoom = await Room.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true },
		);
		res.status(200).json(updatedRoom);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		await Room.findByIdAndDelete(req.params.id);
		res.status(200).json('Room has been deleted.');
		res.status(200).json(updatedRoom);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const room = await Room.findById(req.params.id);
		res.status(200).json(room);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/', async (req, res) => {
	try {
		const rooms = await Room.find();
		res.status(200).json(rooms);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
