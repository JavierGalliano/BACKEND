const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const Products = require("./model/Products");

const PORT = 8080;

const app = express();
const products = new Products();

app.engine(
  "hbs",
  engine({
    extname: "hbs",
    defaultLayout: "main.hbs",
    layoutsDir: path.resolve(__dirname, "./views/layouts"),
    partialsDir: path.resolve(__dirname, "./views/partials"),
  })
);

app.set("views", "./views");
app.set("view engine", "hbs");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/productos", (req, res) => {
  res.render("index", { mostrarProductos: true, products: products.getAll() });
});
app.post("/productos", (req, res) => {
  let { title, price, thumbnail } = products.save(req.body);

  res.redirect("/productos");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});