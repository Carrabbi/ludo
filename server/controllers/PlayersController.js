// eslint-disable-next-line import/extensions
import PlayersModel from '../models/PlayersModel.js';

export const getPlayersData = async (req, res) => {
  try {
    const response = await PlayersModel.findAll();
    res.status(200).json(response);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
  }
};

export const getPlayerById = async (req, res) => {
  try {
    const response = await PlayersModel.findOne({
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.massage);
  }
};

export const getHostById = async (req, res) => {
  try {
    const response = await PlayersModel.findAll({
      where: {
        publicID: req.params.publicID,
        isHost: 1,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.massage);
  }
};

export const createPlayer = async (req, res) => {
  try {
    await PlayersModel.create(req.body);
    res.status(201).json({ msg: 'player created' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
  }
};

export const deletePlayer = async (req, res) => {
  try {
    await PlayersModel.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json({ msg: 'player deleted' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
  }
};
