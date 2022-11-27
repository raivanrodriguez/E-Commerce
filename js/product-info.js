const info_URL = "https://japceibal.github.io/emercado-api/products/" + localStorage.getItem("proID") + ".json"; 
const PRODUCTCOMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/" + localStorage.getItem("proID") + ".json";

let  infoit = [];
let coment = [];
let nuevoCom = [];
let carrito = [];

//aqui creo un parrafo con id variable en mi html, lo que hago es tomar del localstorage el id que guardo al cargar la pagina y guardarlo en una variable
//luego en un parrafo con un id "a"  genero un nuevo div en el cual va a ir contenido un id que es la variable
//de esta forma en cada producto voy a tener un parrafo con un id que va a coincidir con el id del producto
let dif = localStorage.getItem("proID")
document.getElementById('a').innerHTML = ` <div  id="${dif}"></div>`
let contenedor =  document.getElementById(dif)
//
console.log(document.getElementById(dif))
let dato_guardado = localStorage.getItem("datos_ingresados");
 user = JSON.parse(dato_guardado);
 console.log(user.dato1)

 
 let parsecar = JSON.parse(localStorage.getItem("datos_cart"));
 if (parsecar != null) {
     carrito = JSON.parse(localStorage.getItem("datos_cart"));
     }
     

function setCatID(id) {

    localStorage.setItem("proID", id);
    window.location = "product-info.html"
    
  }

function estrella(num){
    if (num != 0){
        return `<span  class="fa fa-star checked"></span>`.repeat(num) + 
        `<span  class="fa fa-star"></span>`.repeat(5-num)
    }

}

let parseName = JSON.parse(localStorage.getItem("comnew"));
    if (parseName != null) {
        nuevoCom = JSON.parse(localStorage.getItem("comnew"));
        showList();}

//al hacer click voy a guardar todos los comentarios en una especie de objeto biblioteca en la cual
// el dato0 sera la variable dif por lo tanto sera igual al id del producto y quiero usarlo como indice

document.getElementById("agrcom").addEventListener("click", function () {

 let now = new Date();
 let segu = `0${now.getSeconds()}`
 
 let seg = segu.slice(-2)
 console.log(seg)
 let minu = `0${now.getMinutes()}`
 let min = minu.slice(-2)
 console.log(minu)
 console.log(min)
 let hora = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDay()}`;
     hora +=  `${now.getHours()}:${min}:${seg}`

   console.log(hora)
  let newcoment = { dato0 : dif, 
                    dato1 : document.getElementById("comentar").value,
                    dato2 : document.getElementById("estrella").value,
                    dato3 : user.dato1,
                    dato4 : hora
                   
  
  };
  
  if (newcoment != "") {
      contenedor.innerHTML = "";
      if (JSON.parse(localStorage.getItem("comnew")) != null) {
          nuevoCom = JSON.parse(localStorage.getItem("comnew"));
      } else {
          nuevoCom = [];
      }

      nuevoCom.push(newcoment);
      localStorage.setItem("comnew", JSON.stringify(nuevoCom));
      showList();
      document.getElementById("comentar").value = "";
  }          
})

//funcion para mostrar comentarios nuevos solo en el id determinado
function showList() {
  if (nuevoCom != null && nuevoCom != [] && nuevoCom != "") {
      for (let ncom of nuevoCom) {//en este for voy a recorrer el objeto 
        console.log(ncom.dato0)
        if(ncom.dato0 == dif){ //aqui es cuando uso como indice y filtro el dato0
          // para que al recorrerlo solo muestre los que el id coincida con el dif que a su vez también es el id del producto
        
          
      console.log()
          contenedor.innerHTML += `<div class="list-group-item list-group-item-action ">
          <div class="row">
             
              <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                      <p class="my-0"><strong>  ${ncom.dato3}</strong> - ${estrella(ncom.dato2)}

                     </p>
                       <small class="text-muted">${ncom.dato4}</small>   
                  </div>
                  <p class="mb-1">${ncom.dato1}</p>
              </div>
          </div>
          
        `;
      }
      nuevoCom = []
    } 
  }
}

  

function mostrarInfo(infoit) {
    
    console.log(infoit.relatedProducts[0].image)

let = contenido = `

<h2>${infoit.name}</h2> 

</div><br>
<p class="mb-1">${infoit.description}</p><br>

<hr>
<div class="row">
<div class="col-md mb-2 me-3">
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img  src="${infoit.images[0]}" class="d-block w-100 mx-auto">
      <div  class="carousel-caption d-none d-md-block">
        
       
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="10000">
    <img  src="${infoit.images[1]}" class="d-block w-100 mx-auto">
    <div  class="carousel-caption d-none d-md-block">
      
     
    </div>
  </div>
  <div class="carousel-item" data-bs-interval="10000">
  <img  src="${infoit.images[2]}" class="d-block w-100 mx-auto">
  <div  class="carousel-caption d-none d-md-block">
    
   
  </div>
</div>
<div class="carousel-item" data-bs-interval="10000">
<img  src="${infoit.images[3]}" class="d-block w-100 mx-auto">
<div  class="carousel-caption d-none d-md-block">
  
 
</div>
</div>

    

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<div class="col-md-5 col-sm-9">
<p ><strong>Precio</strong></p>
<p class="mb-1">${infoit.currency} ${infoit.cost}</p><br>
<p ><strong>Categoría</strong></p>
<p class="mb-1">${infoit.category}</p><br>
<p ><strong>Cantidad de vendidos</strong></p>
<p class="mb-1">${infoit.soldCount}</p><br>
<br>

<div class="d-grid gap-2 d-md-flex justify-content-md-end">
<button class="btn btn-success me-md-2" type="button" id="btnDir" >Comprar</button>

</div>


</div>



`
    document.getElementById("infopro").innerHTML += contenido
    let rel= 
    `
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img onclick="setCatID(${infoit.relatedProducts[0].id})" src="${infoit.relatedProducts[0].image}" class="d-block w-100 cursor-active" alt="${infoit.relatedProducts[0].id}">
      <div  class="carousel-caption d-none d-md-block">
        
       
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img onclick="setCatID(${infoit.relatedProducts[1].id})" src="${infoit.relatedProducts[1].image}" class="d-block w-100 cursor-active" alt="${infoit.relatedProducts[1].id}">
      <div class="carousel-caption d-none d-md-block">

      </div>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
` 
    
document.getElementById("rela").innerHTML = rel
}

    
 function mostrarComent(comentario){ 
    document.getElementById("coment").innerHTML= "";
  for ( const com of comentario){ 
    

  let comentario =
  ` 
  <div class="list-group-item list-group-item-action ">
  <div class="row">
     
      <div class="col">
      
          <div class="d-flex w-100 justify-content-between">
              <p class="my-0"><strong>${com.user} </strong> - 
               ${estrella(com.score)} </p>
               <small class="text-muted">${com.dateTime}</small>   
          </div>
          <p class="mb-1">${com.description}</p>
      </div>
  </div>
  
</div>
  `
  
  document.getElementById("coment").innerHTML += comentario
   }
}



document.addEventListener("DOMContentLoaded", function () {
  
  
  
    getJSONData(info_URL).then(result => {
      if (result.status == "ok") {
       infoit = result.data;
        mostrarInfo (infoit);
        document.getElementById("btnDir").addEventListener("click", function(){
        
          const carrito = JSON.parse(localStorage.getItem("carrito"));
          
          
          
          if (carrito) {
            console.log(carrito[dif])
            if (carrito[dif]) {
              alert("Este articulo ya esta en tu carrito");
              return;
            }
            localStorage.setItem(
              "carrito",
              JSON.stringify({
                ...carrito,
                [dif]: {
                  id : infoit.id, 
                  name : infoit.name, 
                  des : infoit.description,
                  costo : infoit.cost,
                  mon : infoit.currency,
                  img : infoit.images
                },
              })
            );} else {
              localStorage.setItem(
                "carrito",
                JSON.stringify({
                  [dif]: {id : infoit.id, 
                    name : infoit.name, 
                    des : infoit.description,
                    costo : infoit.cost,
                    mon : infoit.currency,
                    img : infoit.images
                   
                  },
                })
              );
            }
        
          
        
         
          window.location = "cart.html"
        console.log(localStorage.getItem("datos_cart"))
        })
        
    }else{
        alert("algo salio mal" + result.data);
      }
       })
       getJSONData(PRODUCTCOMMENTS_URL).then(result => {
        if (result.status == "ok") {
         coment = result.data;
          mostrarComent(coment);
          
          
      }else{
          alert("algo salio mal" + result.data);
        }
         })
      
     })
     
     
    

     
     