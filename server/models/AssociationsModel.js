/* eslint-disable import/extensions */
import RoomsModel from './RoomsModel.js';
import ColorsModel from './ColorsModel.js';
import PlayersModel from './PlayersModel.js';

RoomsModel.hasMany(PlayersModel);
PlayersModel.belongsTo(RoomsModel, {
  foreignKey: 'roomID',
  allowNull: false,
});

ColorsModel.hasMany(PlayersModel, {
  foreignKey: 'colorID',
});
PlayersModel.belongsTo(ColorsModel);
