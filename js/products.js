const autos_url = "https://japceibal.github.io/emercado-api/cats_products/101.json"

document.addEventListener("DOMContentLoaded", function () {
   

fetch(autos_url) 
 .then(Response => Response.json()) 
 
 .then(datos =>{
   for (let leer of datos.products){
    
      let row= `
      <div class="list-group-item list-group-item-action cursor-active">
  
        <div class="row">
           <div class="col-3">
              <img src="` + leer.image + `" class="img-thumbnail">
            </div>
            <div class="col">
              <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1"> ` + leer.name + " " + "-" + " " +leer.currency + " " + leer.cost + ` </h4>
                <small class="text-muted"> `+ leer.soldCount +` artículos</small>
             
              </div>
              <p class="mb-1">`+ leer.description +`</p>
            </div>
        </div>
      </div>

        `

    document.getElementById("nomaut").innerHTML += row;


   }



 })






 }) 