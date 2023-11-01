import express from "express";
import mongoose from "mongoose";
import _ from "lodash";
import fs from "fs";
import formidableMiddleware from "express-formidable";
import mongodb from "mongodb";
import path from "path";
import crypto from "crypto";
import bcrypt from "bcrypt";


const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));



app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.get("/form", (req,res) => {
    res.render("form.ejs");
})

app.listen(port, () => {
    console.log("Server is running from port 3000");
})