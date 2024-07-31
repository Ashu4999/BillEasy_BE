const express = require("express");
const router = express.Router();
const { login } = require("../controllers/authController");
const Joi = require("joi");
const { requestParamsValidate } = require("../middlewares");

const loginSchema = {
    body: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
    }),
};

router.post("/login", requestParamsValidate(loginSchema), login);

module.exports = router;