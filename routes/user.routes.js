
const UserController = require("../controllers/user.controller")

module.exports = (app) => {
app.get("/api/testing", UserController.apiTest)
app.post("/api/users", UserController.createNewUser)
app.post("/api/users/companies", UserController.createNewUserCompany)
}

