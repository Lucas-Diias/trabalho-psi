const express = require('express');
const app = express()
const port = 3001

app.use(express.json());

app.set( "view engine", "ejs");

app.get("/", (req, res) =>  {

    let msg = "A minha lista de compras é: ";
    let ListadeCompras = ["coca", "pepsi", "Coca-Cola"];



    res.render("index", {mensagem: msg, compras: ListadeCompras});
})

app.get("/lista", (req, res) =>  {

    let msg = "A minha lista de compras é: ";
    let ListadeCompras = ["coca", "pepsi", "Coca-Cola"];



    res.render("index", {mensagem: msg, compras: ListadeCompras});
})
app.get("/contactos", (req, res) =>  {

    let msg = "A minha lista de compras é: ";
    let ListadeCompras = ["coca", "pepsi", "Coca-Cola"];



    res.render("index", {mensagem: msg, compras: ListadeCompras});
})


app.get("/nova-compra", (req, res) => {

    res.render("formulario", {compras: produtos});
})


    const produtos = [{"Produto": "Goblin com Dardo",
                        "quantidade": 2}
    ]

app.post("/nova-compra", (req, res) => {

    const comprar = req.body;

    console.log(comprar);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})