const express = require('express')
const app = express()
const port = 3000

app.get('/' , (req, res) => {

    function getKgToLbs() {
        return {teste:"olá"}
    }

    res.send(getKgToLbs())
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})