const info_URL = "https://japceibal.github.io/emercado-api/products/" + localStorage.getItem("proID") + ".json"; 
const PRODUCTCOMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/" + localStorage.getItem("proID") + ".json";

let  infoit = [];
let coment = [];
let nuevoCom = [];








function estrella(num){
    if (num != 0){
        return `<span  class="fa fa-star checked"></span>`.repeat(num) + 
        `<span  class="fa fa-star"></span>`.repeat(5-num)
    }

}

function mostrarInfo(infoit) {
    
    console.log(infoit)

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
          mostrarComent (coment);
      }else{
          alert("algo salio mal" + result.data);
        }
         })
     })
     
     
    

  
     