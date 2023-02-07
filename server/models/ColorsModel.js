// eslint-disable-next-line import/no-extraneous-dependencies
import DataTypes from 'sequelize';
// eslint-disable-next-line import/extensions
import db from '../dbconn.js';

const ColorsModel = db.define(
  'colors',
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    colorName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    colorCode: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default ColorsModel;
