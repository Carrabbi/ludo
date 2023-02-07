import Sequelize from 'sequelize';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('colors', [{
      colorName: "red",
      colorCode: "#FF3737",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      colorName: "blue",
      colorCode: "#4A87FF",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    colorName: "yellow",
    colorCode: "#FFF200",
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    colorName: "green",
    colorCode: "#7FBC16",
    createdAt: new Date(),
    updatedAt: new Date()
    } 
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('colors', null, {});
  }
};