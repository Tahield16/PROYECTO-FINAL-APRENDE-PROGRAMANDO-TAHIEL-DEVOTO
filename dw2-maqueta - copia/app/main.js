const botonesAgregar = document.getElementsByClassName("agregar");
const carrito = document.getElementById("lista");
const titulo = document.getElementsByClassName("card-titulo");
const precio = document.getElementsByClassName("card-precio");
const imagen = document.getElementsByClassName("card-imagen");
for (let i = 0; i < botonesAgregar.length; i++) {
    botonesAgregar[i].addEventListener("click", () => {
        let carritoLi = document.createElement("li");
        let carritoCard = document.createElement("div");
        let cardTitulo = document.createElement("h1");
        let cardImagen = document.createElement("img");
        let cardPrecio = document.createElement("p");
        cardTitulo = titulo[i];
        cardImagen = imagen[i];
        cardPrecio = precio[i]
        carritoCard.setAttribute("class", "producto");
        carritoCard.appendChild(cardImagen);
        carritoCard.appendChild(cardTitulo);
        carritoCard.appendChild(cardPrecio);
        carritoLi.appendChild(carritoCard);
        carrito.appendChild(carritoLi);
    });
}