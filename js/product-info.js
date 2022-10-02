const info_URL = "https://japceibal.github.io/emercado-api/products/" + localStorage.getItem("proID") + ".json"; 
const PRODUCTCOMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/" + localStorage.getItem("proID") + ".json";

let  infoit = [];
let coment = [];
let nuevoCom = [];
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
  let newcoment = { dato0 : dif, 
                    dato1 : document.getElementById("comentar").value,
                    dato2 : document.getElementById("estrella").value,
                    dato3 : user.dato1
                   
  
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
                       <small class="text-muted"></small>   
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

<h2>${infoit.name}</h2><br>
<p class="mb-1">${infoit.description}</p><br>
<hr>
<p ><strong>Precio</strong></p>
<p class="mb-1">${infoit.currency} ${infoit.cost}</p><br>
<p ><strong>Categoría</strong></p>
<p class="mb-1">${infoit.category}</p><br>
<p ><strong>Cantidad de vendidos</strong></p>
<p class="mb-1">${infoit.soldCount}</p><br>

<div class="row">


<img src="${infoit.images[0]}"  class="col-3 img-thumbnail">
<img src="${infoit.images[1]}"  class="col-3 img-thumbnail">
<img src="${infoit.images[2]}"  class="col-3 img-thumbnail">
<img src="${infoit.images[3]}"  class="col-3 img-thumbnail">




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
     
     
    

     
     