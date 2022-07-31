const express = require("express");
const app = express();

app.get('/', (req, res) => {
     
    db.query(sqlInsert, (err, result) => {
        res.send("Hello Pedro");
        res.sendFile("");
    })
})

app.listen(3001, () => {
    console.log("running on port 3001");
});