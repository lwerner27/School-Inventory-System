const accountRouter = require("./routers/AccountRouter");
const router = require("express").Router();

router.use("/account", accountRouter);

router.get("/", (req, res) => {
    res.status(200).render("login", {
        pageTitle: "Inventory Login",
        loginJs: true,
    });
});

module.exports = router;
