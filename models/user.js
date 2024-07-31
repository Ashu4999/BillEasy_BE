const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      refreshToken: {
        type: DataTypes.STRING,
      },
    },
    {
      indexes: [{ unique: true, fields: ["id", "email"] }],
      underscored: true,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Ticket, {
      foreignKey: "created_by",
      as: "tickets",
    });
    
    User.belongsToMany(models.Ticket, { through: 'User_Tickets' });
  };

  return User;
};