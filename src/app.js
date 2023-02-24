const express = require("express");
const path = require("path");

require("./db/connection");

const User = require("./models/user");

const hbs = require("hbs");

const PORT = process.env.PORT || 3000;
const app = express();

// setting path
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

// middleware
// include bootstrap i.e instead of writing ../node_modules/bootstrap directly write /css
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/jquery/dist"))
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(staticPath));

// set view engine
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

// routing routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/contact", async function (req, res) {
  const newData = req.body;
  const userData = new User(newData);
  await userData.save(function (err) {
    if (err) {
      res.json({ success: false, error: err });
      return;
    }
    res.status(201).render("index");
  });
});
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
