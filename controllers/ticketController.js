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

const assignTicket = async (req, res) => {
    try {
        const { ticketId } = req.params;
        const { userID } = req.body;
        let where = { id: ticketId };

        let foundTicket = await DBModels.ticket.findOne({ where });

        if (!foundTicket)
            throw { code: 409, message: "Ticket not found" };

        if (foundTicket?.dataValues?.status?.toLowerCase() === "closed") {
            throw { code: 409, message: "Cannot assign users to a closed ticket" };
        }

        let foundUser = await DBModels.user.findOne({ where: { id: userID } });

        if (!foundUser)
            throw { code: 409, message: "User does not exist" };

        let ticketUserCountQuery = `select * from "User_Tickets" ut where ut.ticket_id = '${ticketId}';`;
        let [ticketUserCountResult, ticketUserCountMetaData] = await sequelize.query(ticketUserCountQuery);

        if (ticketUserCountMetaData.rowCount > 5) {
            throw { code: 403, message: `User assignment limit reached to ${ticketId} ticket` };
        }

        let foundUserTicketQuery =
            `select * from users u , tickets t , "User_Tickets" ut 
            where u.id = ut.user_id and t.id = ut.ticket_id 
            and t.id = '${ticketId}' 
            and u.id = '${userID}' 
        ;`;
        let [foundUserTicketResult, foundUserTicketMetaData] = await sequelize.query(foundUserTicketQuery);

        if (foundUserTicketResult.length) {
            throw { code: 403, message: "Ticket already assgnied to user" };
        }

        await foundUser.addTicket(foundTicket);
        await foundTicket.addUser(foundUser);

        return res.send({ message: `${foundTicket.id} ticket assined to ${foundUser.id}` });
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