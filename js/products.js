const items_URL = "https://japceibal.github.io/emercado-api/cats_products/" + localStorage.getItem("catID") + ".json"; 

let items = [];
let min = undefined;
let max = undefined;


function mostrarItems(itemsr) {
  document.getElementById("nomaut").innerHTML= "";

 for (const item of itemsr) {
  item.cost = parseInt(item.cost);
  if ((min == undefined && max == undefined) || (item.cost >= min && item.cost <= max  )|| 
  (item.cost >= min && max == undefined )|| (item.cost <= max && min == undefined )){
    console.log(typeof max);
    console.log(typeof item.cost)
  let contenido = `
  <div class="list-group-item list-group-item-action cursor-active">
      <div class="row">
          <div class="col-3">
              <img src="${item.image}" alt="${item.description}" class="img-thumbnail">
          </div>
          <div class="col">
              <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1">${item.name} - ${item.currency} ${item.cost}</h4>
                  <small class="text-muted">${item.soldCount} artículos</small>
              </div>
              <p class="mb-1">${item.description}</p>
          </div>
      </div>
  </div>


  `;
document.getElementById("nomaut").innerHTML += contenido
}
}
  

}

   










 document.addEventListener("DOMContentLoaded", function () {
  getJSONData(items_URL).then(result => {
    if (result.status == "ok") {
     items = result.data.products;
      mostrarItems (items);
    }else{
      alert("algo salio mal" + result.data.products);
    }
  })



 })

 document.getElementById("Filtrar").addEventListener("click", function(){


  if (document.getElementById("rangeMin").value != "" ) {
    min = parseInt(document.getElementById("rangeMin").value);
  }else {
    min = undefined;
  }
  if (document.getElementById("rangeMax").value != "" ) {
    max = parseInt(document.getElementById("rangeMax").value);
  }else {
    max = undefined;
  }
  mostrarItems(items);
 })
 
 document.getElementById("Limpiar").addEventListener("click", function() {

  min = undefined;
  max = undefined;
  document.getElementById("rangeMin").value = "";
  document.getElementById("rangeMax").value = "";
  mostrarItems(items);
 })