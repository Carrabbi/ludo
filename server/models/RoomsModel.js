// eslint-disable-next-line import/no-extraneous-dependencies
import DataTypes from 'sequelize';
// eslint-disable-next-line import/no-extraneous-dependencies
import Math from 'math';

// eslint-disable-next-line import/extensions
import db from '../dbconn.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const generateMyPublicId = () => {
  const past = new Date(2023, 1, 1);
  const now = new Date();
  const random = getRandomInt(9999);
  let publicID = now.getTime() - past.getTime();
  publicID = publicID * 10000 + 9999 - random;
  return publicID;
};

const RoomsModel = db.define(
  'rooms',
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    publicID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      defaultValue() {
        return generateMyPublicId();
      },
    },
    roomName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Room name already is used',
      },
      validate: {
        is: /^[0-9a-zA-Z -]{3,64}$/,
        notNull: true,
        isCorrect() {
          if (this.roomName.length < 3) throw new Error('Name is too short.');

          if (this.roomName.length > 64) throw new Error('Name is too long.');
        },
      },
    },
    pswd: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[0-9a-zA-Z]{4,24}$/,
        notNull: true,
        isCorrect() {
          if (this.pswd.length < 4) throw new Error('Password is too short.');

          if (this.pswd.length > 24) throw new Error('Password is too long.');
        },
      },
    },
    hostName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Host name already is used',
      },
      validate: {
        is: /^[0-9a-zA-Z ]{3,24}$/,
        notNull: true,
        isCorrect() {
          if (this.hostName.length < 3) throw new Error('Name is too short.');

          if (this.hostName.length > 24) throw new Error('Name is too long.');
        },
      },
    },
    actualSize: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    freezeTableName: true,
  }
);

export default RoomsModel;

(async () => {
  await db.sync();
})();
