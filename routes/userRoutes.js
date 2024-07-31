const express = require("express");
const router = express.Router();
const { getUser, createUser } = require("../controllers/userController");
const { requestParamsValidate } = require("../middlewares");
const Joi = require("joi");

const userCreateSchema = {
    body: Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email(),
        password: Joi.string()
            .pattern(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            )
            .required()
            .messages({
                "string.pattern.base":
                    "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
            }),
    }),
};

const getUserSchema = {
    query: Joi.object({
      uuids: Joi.string(),
      names: Joi.string(),
      emails: Joi.string(),
    }),
  };

router.get("/", getUser).post("/", requestParamsValidate(userCreateSchema), createUser);

module.exports = router;