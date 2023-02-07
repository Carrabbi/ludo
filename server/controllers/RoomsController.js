// eslint-disable-next-line import/extensions
import RoomsModel from '../models/RoomsModel.js';

export const getRoomsData = async (req, res) => {
  try {
    const response = await RoomsModel.findAll();
    res.status(200).json(response);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
  }
};

export const getRoomById = async (req, res) => {
  try {
    const response = await RoomsModel.findOne({
      where: {
        ID: req.body.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.massage);
  }
};

export const createRoom = async (req, res) => {
  try {
    await RoomsModel.create(req.body);
    const response = await RoomsModel.findOne({
      where: {
        roomName: req.body.roomName,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
  }
};

export const updateRoom = async (req, res) => {
  try {
    await RoomsModel.update(req.params, {
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json({ msg: 'room updated' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
  }
};

export const deleteRoom = async (req, res) => {
  try {
    await RoomsModel.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json({ msg: 'room deleted' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
  }
};
