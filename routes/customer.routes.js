const { userProtected } = require("../middleware/Protected")
const customerController = require("../controller/customer.controller")

const router = require("express").Router()

router
    .post("/register-customer", userProtected, customerController.RegisterCustomer)
    .get("/fetch-customer/:id", customerController.FetchAllCustomers)
// .post("/admin-otp", authController.VerifyOTP)
// .post("/logout-admin", userProtected, authController.LogoutAdmin)

module.exports = router