import { DataTypes } from "sequelize";

export const up = (queryInterface, Sequelize) => queryInterface.createTable('todo', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING(80),
  },
  description: {
    allowNull: false,
    type: Sequelize.TEXT,
  },
  author: {
    allowNull: false,
    type: Sequelize.STRING(50),
  },
  isComplete: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: DataTypes.NOW,
  },
  deletedAt: {
    allowNull: true,
    type: Sequelize.DATE,
  },
});

export const down = (queryInterface) => queryInterface.dropTable('todo');
