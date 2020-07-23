const express  =  require("express")

const PORT  =  process.env.PORT || 8080

const app =  express()

app.listen(PORT, () => {
    console.log("The server is listening on port: " + PORT)
})