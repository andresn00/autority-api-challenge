import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {
  class Todo extends Model {
  }

  Todo.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING(80),
      validate: {
        is: /^[a-zA-Z0-9 -]*$/
      },
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        is: /^[a-zA-Z0-9 -]*$/
      },
    },
    author: {
      allowNull: false,
      type: DataTypes.STRING(50),
      validate: {
        is: /^[a-zA-Z0-9 -]*$/
      },
    },
    isComplete: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      validate: {
        isBoolean: (value) => {
          if (typeof value !== 'boolean') {
            throw new Error("Not boolean")
          }
          return true
        }
      },
    },
  }, {
    modelName: 'todo',
    sequelize,
    tableName: 'todo'
  });

  return Todo;
}
