const companyModule = require("../models/company.model")

module.exports = {
    createNewCompany : (req, res) => {
        const newCompany = companyModule.createCompany()
        res.json({
            company: newCompany
        })
    }
}