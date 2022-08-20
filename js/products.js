const autos_url = "https://japceibal.github.io/emercado-api/cats_products/101.json"

document.addEventListener("DOMContentLoaded", function () {
   

fetch(autos_url) 
 .then(Response => Response.json()) 
 
 .then(datos =>{
   for (let leer of datos.products){
    
     let row= `
     
     <img style="float:left;height:10em;width:auto;margin-right:20px;" src="`+ leer.image +` "</img>
     
     <h4> ` + leer.name + " " + "-" + " "+ leer.currency + leer.cost +`  </h4>
     <p style="text-align:right;" <div class="text-muted"> </div> 
     ` + leer.soldCount + "    " + "Vendidos" +` <p/>
     
     <p style="margin-bottom:90px;"> ` + leer.description + `</p>
     
     
     






        `

   
     
    
    document.getElementById("nomaut").innerHTML += row;


   }



 })






 }) 