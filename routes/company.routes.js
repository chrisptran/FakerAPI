
const CompanyController = require("../controllers/company.controller")

module.exports = (app) => {
    app.post("/api/companies", CompanyController.createNewCompany)
}