
const express = require("express");
const app = express();
const port = 8000;

const userModule = require("./models/user.model")
const companyModule = require("./models/company.model")

const newUserInfo = userModule.createUser();
const newCompanyInfo = companyModule.createCompany()


//2. Configuration
// make sure these lines are above any app.get or app.post codes
app.use(express.json());
// recognize JSON object
app.use(express.urlencoded({extended: true}) );
// to recognize the incoming Request object as strings or arrays

const Routes = require("./routes/user.routes")
Routes(app)
const CompanyRoutes = require("./routes/company.routes")
CompanyRoutes(app)

//4. Listen to the port
app.listen(port, () => console.log("listening on port 8000"));

module.exports = {newUserInfo, newCompanyInfo}

