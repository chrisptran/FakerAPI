const userModule = require("../models/user.model")
const companyModule = require("../models/company.model")

module.exports = {
    apiTest : (req, res) => {
        res.json({message: "hi friend"})
    },

    createNewUser : (req, res) => {
        const newUser = userModule.createUser()
        res.json({
            user: newUser
        })
    },

    createNewUserCompany : (req, res) => {
        const newUser = userModule.createUser();
        const newCompany = companyModule.createCompany();
        res.json({
            user: newUser,
            company: newCompany
        })
    }

}