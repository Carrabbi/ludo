// eslint-disable-next-line import/extensions
import ColorsModel from '../models/ColorsModel.js';

export const getColorsData = async (req, res) => {
  try {
    const response = await ColorsModel.findAll();
    res.status(200).json(response);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
  }
};

export const getColorById = async (req, res) => {
  try {
    const response = await ColorsModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.massage);
  }
};
