const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    const Ticket = sequelize.define(
        "Ticket",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                unique: true,
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            venue: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            priority: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            dueDate: {
                type: DataTypes.DATE,
                allowNull: false,
            }
        },
        {
            indexes: [{ unique: true, fields: ["id"] }],
            underscored: true,
        }
    );

    Ticket.associate = (models) => {
        Ticket.belongsTo(models.User, {
            foreignKey: "created_by",
            as: "user",
        });
        
        Ticket.belongsToMany(models.User, { through: 'User_Tickets' });
    };

   
    return Ticket;
};