const express = require("express");                     // importing express framework
const { getWeatherByCity } = require("./routes/api");   // importing 'getWeatherByCity' function from 'routes/api.js'

// creating an instance of express app
const app = express();

// allows rendering of dynamic HTML pages
app.set("view engine", "ejs");
// defining 'public/' as the static directory for this project
app.use(express.static("public"));
// using express to parse url encoded data
app.use(express.urlencoded({ extended: true }));

// defining default app route to render 'views/index.ejs' as the initial page
app.get("/", (req, res) => {
    res.render("index", { weather: null, error: null });// 
});

// defining app route to be rendered when the user clicks on the 'submit' button
app.post("/weather", async (req, res) => {
    const city = req.body.city;
    try {
        const weather = await getWeatherByCity(city); // calling the imported function from 'routes/api.js' to fetch real time weather data
        res.render("index", { weather, error: null });
    } catch (err) {
        res.render("index", { weather: null, error: "Error, please try again..." });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});