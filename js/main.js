class Item {

    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }

const mochila = [];

const escoba = new Item("Scaloneta Nimbus'23", 500, 1);
const pocion = new Item("Polyjuice Potion", 60, 1);
const capa = new Item("Invisibility Cloak", 80, 1);
const varita = new Item("Magic Stick", 70, 1);
const mapa = new Item("hogwart's Map", 20, 1);
const rana = new Item("Chocolate Frog",5, 1);

let oro = 1000;
let olivanderOro = 0;

const elementoOro = document.querySelector("#oro span");
const elementoOli = document.querySelector("#orOlivander span")
elementoOro.innerText = oro;
elementoOli.innerText = olivanderOro;

const elementoMochila = document.querySelector("#mochila");

const CompraEscoba = document.querySelector("#botonComprar1");
const CompraPocion = document.querySelector("#botonComprar2");
const compraCapa = document.querySelector("#botonComprar3");
const CompraRana = document.querySelector("#botonComprar4");
const compraVarita = document.querySelector("#botonComprar5");
const compraMapa = document.querySelector("#botonComprar6");

const esconderBagEmpty = document.querySelector("#bagEmpty");
const comentarioH = document.querySelector("#comentarioH")


CompraEscoba.addEventListener("click", ()=>{comprar(escoba)})
CompraPocion.addEventListener("click", ()=>{comprar(pocion)})
compraCapa.addEventListener("click", ()=>{comprar(capa)})
CompraRana.addEventListener("click", ()=>{comprar(rana)})
compraVarita.addEventListener("click", ()=>{comprar(varita)})
compraMapa.addEventListener("click", ()=>{comprar(mapa)})


function comprar(item) {
    if (oro - item.precio <= 0) {
        esconderBagEmpty.innerText = "Harry you can't afford this costs...";
    } else if 
    (item.cantidad >= 4 || mochila.length >= 4 || item.cantidad+mochila.length === 6){
        esconderBagEmpty.innerText = "Harry your bag is fully...you might to sell some things";
    }else{
      let existe = mochila.find(el=>el.nombre === item.nombre);
      if(existe){
      let index = mochila.findIndex(el=>el.nombre === item.nombre);
      mochila[index].cantidad+=1
      }else{
        mochila.push(item);
        comentarioH.innerText=`woow!! ${item.nombre}, insane products!!`
      }
      oro -= item.precio;
      olivanderOro += item.precio;
      actualizarHTML();
      esconderBagEmpty.innerText = "Harry added:";
      
    }
  }
  
  function vender(indice) {
      let item = mochila[indice];
      if(item.cantidad === 1){
        mochila.splice(indice, 1);
        oro += item.precio;
        olivanderOro -= item.precio; 
      } else {
        item.cantidad -= 1
        oro += item.precio
        olivanderOro -= item.precio;
      }
        actualizarHTML(); 
        esconderBagEmpty.innerText = "Harry is selling out...";
        if(mochila.length===0){
            esconderBagEmpty.innerText = "Harry've already sold all your stuffs "}
      }


  function actualizarHTML() {
    elementoMochila.innerHTML = "";
    for (let item of mochila) {
      let indiceItem = mochila.indexOf(item);
      let elementoItem = 
          `<ul>
          <li class="item" onclick="vender(${indiceItem})">
              ${item.nombre}-/-${item.cantidad}u.
          </li>
          </ul>`;
      elementoMochila.innerHTML += elementoItem;
    }
      elementoOro.innerText = oro;
      elementoOli.innerText = olivanderOro
  }


