// eslint-disable-next-line import/no-extraneous-dependencies
import DataTypes from 'sequelize';
// eslint-disable-next-line import/extensions
import db from '../dbconn.js';

const PlayersModel = db.define(
  'players',
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    isHost: {
      type: DataTypes.BOOLEAN,
    },
    playerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[0-9a-zA-Z ]{3,24}$/,
        notNull: true,
        isCorrect() {
          if (this.playerName.length < 3) throw new Error('Name is too short.');

          if (this.playerName.length > 24) throw new Error('Name is too long.');
        },
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default PlayersModel;

(async () => {
  await db.sync();
})();
