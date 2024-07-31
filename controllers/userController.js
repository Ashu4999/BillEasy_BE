const { DBModels } = require("../config/dbConn");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const getUser = async (req, res) => {
    try {
        const { uuids, names, emails } = req.query;
        let where = {};
        // if (uuids) {
        //     where["id"] = { [Op.in]: uuids.split(",") };
        // }

        // if (names) {
        //     where["name"] = { [Op.in]: names.split(",") };
        // }

        // if (emails) {
        //     where["email"] = { [Op.in]: emails.split(",") };
        // }

        const users = await DBModels.user.findAll({
            where,
            attributes: { exclude: ["password"] },
        });
        return res.send(users);
    } catch (Exception) {
        return res.send(Exception.toString());
    }
}

const createUser = async (req, res) => {
    try {
        let { name, email, password } = req.body;

        let where = {
            email
        };

        let foundUser = await DBModels.user.findOne({ where });
        if (foundUser) {
            throw { code: 409, message: "User Already Exists" };
        }

        const hashPwd = await bcrypt.hash(password, 10);

        await DBModels.user.create({
            name,
            email,
            password: hashPwd
        });

        return res.send({ message: `User ${name} created` });
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

module.exports = { getUser, createUser };

