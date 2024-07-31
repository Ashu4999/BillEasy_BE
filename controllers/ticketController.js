const { DBModels, sequelize } = require("../config/dbConn");

const getTickets = async (req, res) => {
    try {
        const { uuids } = req.query;
        let where = {};

        const tickets = await DBModels.ticket.findAll({
            where,
            attributes: { exclude: ["password"] },
        });
        return res.send(tickets);
    } catch (Exception) {
        return res.send(Exception.toString());
    }
}

const createTicket = async (req, res) => {
    try {
        let { title, description, type, venue, status, priority, dueDate } = req.body;

        let newTicket = {
            title, 
            description, 
            type, 
            venue, 
            status, 
            priority, 
            dueDate, 
            created_by: req.id
        };

        let result = await DBModels.ticket.create(newTicket);
        
        return res.send(result);
    } catch (Exception) {
        let customeError = null;
        if (Exception.name === "SequelizeUniqueConstraintError") {
            customeError = Exception.errors[0].message;
        }
        return res.status(Exception.code || 500).json({
            message: customeError || Exception.message || Exception.toString(),
        });
    }
}

// assign ticket incomplete
const assignTicket = async (req, res) => {
    try {
        const { ticketId } = req.params;
        const { userID } = req.body;
        let where = { id: ticketId };

        let foundTicket = await DBModels.ticket.findOne({ where, raw: true });
        
        if (!foundTicket)
            throw { code: 409, message: "Ticket not found." };

        let foundUser = await DBModels.user.findOne({ where: { id: userID } });

        if (!foundUser)
            throw { code: 409, message: "User not found." };

        let query = ``;
        sequelize.query(query);
        
        return res.send(ticketEntry);   
    } catch (Exception) {
        let customeError = null;
        if (Exception.name === "SequelizeUniqueConstraintError") {
            customeError = Exception.errors[0].message;
        }
        return res.status(Exception.code || 500).json({
            message: customeError || Exception.message || Exception.toString(),
        });
    }
}


module.exports = { createTicket, getTickets, assignTicket };