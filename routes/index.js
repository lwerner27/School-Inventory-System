const router = require("express").Router()


router.get("/", (req, res) => {
    res.send("Welcome")
})

router.use("/accounts", require("./Users"))

module.exports = router