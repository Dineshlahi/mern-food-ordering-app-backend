import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());
const regRoute = require("./routes/Registration");
app.use(regRoute);

const PORT = 8080;
const URL =
    "mongodb+srv://dnshlahiru:<password>@cluster0.m7d9c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(URL).then(() => {
    console.log("Connescted").catch((err) => console.log("DB error", err))
    app.listen(PORT, () => {
        console.log("app is running on")
    })
})
