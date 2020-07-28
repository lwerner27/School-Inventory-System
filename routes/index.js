const router = require("express").Router()


router.get("/", (req, res) => {
    res.render("index", {
        pageTitle: "HPS Inventory"
    })
})

router.use("/accounts", require("./Users"))

module.exports = router