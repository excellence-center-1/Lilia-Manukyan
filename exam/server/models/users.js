'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users', // The name of the corresponding table in the database
      timestamps: true, // Enable timestamps (createdAt and updatedAt)
      underscored: true, // Use underscored naming convention for attributes
    }
  );

  return User;
};



// const { DataTypes } = require('sequelize');

// module.exports = (sequelize) => {
//     const User = sequelize.define(
//         'User',
//         {
//             id: {
//                 type: DataTypes.INTEGER,
//                 autoIncrement: true,
//                 primaryKey: true,
//             },
//             name: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//             },
//             password: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//             },
//         },
//         {
//             tableName: 'users',
//             timestamps: false,
//         }
//     );

//     return User;
// };

