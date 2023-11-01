import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"))

app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log("Server is running from port 3000");
})