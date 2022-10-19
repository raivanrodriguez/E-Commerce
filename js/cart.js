document.addEventListener("DOMContentLoaded", () => {
 
  llenarCarrito();
  document.getElementById("carcom").addEventListener("input" , function (e){

        id = e.target.dataset.id
        moneda = e.target.dataset.moneda
        valor = e.target.value;
        costo = parseInt(e.target.dataset.costo)

        multi = valor*costo

        document.getElementById(id).innerHTML = `<p class="fw-semibold" id="${id}"> ${moneda} ${multi}</p>`
    
     })

    
});
const llenarCarrito = () => {
const contenedor = document.getElementById("carcom");
const carrito = JSON.parse(localStorage.getItem("carrito"));
console.log(carrito)
if (!carrito || carrito === {} || Object.keys(carrito) < 1) {
  contenedor.innerHTML = `
    <div class="row mt-4">
      <p class="text-center fs-2 fw-semibold">No tienes ningun artículo en tu carrito.</p>
    </div>
  `;
  return;
}
contenedor.innerHTML = "";

for (const key in carrito) {
  const element = carrito[key]
  ;

  contenedor.innerHTML += `
     
      <hr />
      <div class="list-group-item  ">
  <div class="row">
     
      <div class="col">
      <img class="img-fluid rounded w-50" src="${element.img[0]}" />
      </div>  
      <div class="col-sm">
      <p> ${element.name}</p>
    </div>
    <div class="col-sm">
    <p class="fw-semibold"> ${element.mon} ${element.costo}</p>
  </div>  <div class="col-sm">
  <input class="form-control" type="number"  data-id="${element.id}" 
  data-costo="${element.costo}" data-moneda="${element.mon}" id="semi" placeholder="">
 
</div>  <div class="col-sm">
<p class="fw-semibold" id="${element.id}"  > ${element.mon} ${element.costo}</p>
</div>
      </div>
  </div>`
  
}

}

