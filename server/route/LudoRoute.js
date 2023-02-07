import express from 'express';
import {
  getColorsData,
  getColorById,
  // eslint-disable-next-line import/extensions
} from '../controllers/ColorsController.js';
import {
  createRoom,
  getRoomsData,
  getRoomById,
  updateRoom,
  deleteRoom,
  // eslint-disable-next-line import/extensions
} from '../controllers/RoomsController.js';
import {
  createPlayer,
  getPlayerById,
  getPlayersData,
  deletePlayer,
  getHostById,
  // eslint-disable-next-line import/extensions
} from '../controllers/PlayersController.js';
// eslint-disable-next-line import/extensions
import '../models/AssociationsModel.js';

const router = express.Router();

router.post('/ludoplayers', createPlayer);
router.post('/ludorooms', createRoom);

router.get('/ludorooms', getRoomsData);
router.get('/ludoplayers', getPlayersData);
router.get('/ludocolors', getColorsData);
router.get('/ludorooms/:id', getRoomById);
router.get('/ludoplayers/:id', getPlayerById);
router.get('/ludohosts/:id', getHostById);
router.get('/ludocolors/:id', getColorById);

router.patch('/ludorooms/:id', updateRoom);

router.delete('/ludorooms/:id', deleteRoom);
router.delete('/ludoplayers/:id', deletePlayer);

export default router;
