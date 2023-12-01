import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {
  class Todo extends Model {
  }

  Todo.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING(80),
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    author: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    isComplete: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },

  }, {
    modelName: 'todo',
    sequelize,
    tableName: 'todo'
  });

  return Todo;
}
