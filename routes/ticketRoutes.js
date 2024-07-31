const express = require("express");
const router = express.Router();
const Joi = require("joi");
const { requestParamsValidate } = require("../middlewares");
const { createTicket, getTickets, assignTicket } = require("../controllers/ticketController");

const createTicketSchema = {
    body: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().allow(""),
        type: Joi.string().valid("concert", "conference", "sports").required(),
        venue: Joi.string().required(),
        status: Joi.string().valid("open", "in-progress", "closed").required(),
        priority: Joi.string().valid("low", "medium", "high").required(),
        dueDate: Joi.date().greater('now').required(),
    }),
};

// router.post("/register", requestParamsValidate(registerSchema), register);
router
    .post("/", requestParamsValidate(createTicketSchema), createTicket)
    .get("/", getTickets)
    .put("/:ticketId/assign", assignTicket);

module.exports = router;