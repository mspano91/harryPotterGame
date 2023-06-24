

    class Productos{
        constructor(nombre,cantidad,precio,imagen){
            this.nombre=nombre;
            this.cantidad=cantidad;
            this.precio=precio;
            this.imagen=imagen
        }
    }

    const canasta = [];

const manzana = new Productos("Manzana",1, 4,"galeon.png");
const banana = new Productos("Banana",1,3,);
const durazno = new Productos("Durazno",1,2,);
const naranja = new Productos("Naranja",1,1,);


const elementoCanasta = document.querySelector(".canasta");

const textoComprar = document.querySelector(".texto1")
const unidadVendida= document.querySelectorAll("#numerito")

const CompraManzana = document.querySelector(".prod1");
const CompraBanana = document.querySelector(".prod2");
const CompraDurazno = document.querySelector(".prod3");
const CompraNaranja = document.querySelector(".prod4");

CompraManzana.addEventListener("click", ()=>{comprar(manzana)})
CompraBanana.addEventListener("click", ()=>{comprar(banana)})
CompraDurazno.addEventListener("click", ()=>{comprar(durazno)})
CompraNaranja.addEventListener("click", ()=>{comprar(naranja)})


function comprar(Productos) {
    //esta variable se crea para saber si existe el producto donde hago click y que me traiga el producto
      let existe = canasta.find(el=>el.nombre === Productos.nombre);
      if(existe){
      let index = canasta.findIndex(el=>el.nombre === Productos.nombre);
      canasta[index].cantidad+=1;
      }else{
        canasta.push(Productos);
      }
      actualizar();
      textoComprar.innerText = "Estas comprando.."
    }

    function actualizar() {
        elementoCanasta.innerHTML = "";
        for (let Productos of canasta) {
          let indiceItem = canasta.indexOf(Productos);
           let elementoItem = 
              `<ul>
              <li class="item" onclick="vender(${indiceItem})">
                  ${Productos.nombre}-/-${Productos.cantidad}u.
                   </li>
                   <img src="../img/${Productos.imagen}" />
              </ul>`;
          elementoCanasta.innerHTML += elementoItem;
        }
      }
    
      function vender(indice) {
        let vende =  canasta[indice];
        if(vende.cantidad === 1){
          canasta.splice(indice,1);
        }else{
          vende.cantidad -= 1
        }
        actualizar();
        textoComprar.innerText = "Estas vendiendo.."

        }