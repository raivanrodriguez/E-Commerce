let tipoenvio = [];
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
    data-costo="${element.costo}" data-moneda="${element.mon}" id="semi" placeholder="" required="">
   
  </div>  <div class="col-sm">
  <p class="fw-semibold" id="${element.id}"  > ${element.mon} ${element.costo}</p>
  </div>
        </div>
    </div>`
    
  }
  
  }
 
 function gananciaTotal(total) {
   let sumatoria = 0;
   for (const key in total) {
     const suma = total[key]
     sumatoria = sumatoria + parseInt(suma.valor);
    
     
   }
   return sumatoria;
   
 }
 //funcion que detecta que envio esta seleccionado y realiza los calculos segun cual sea
 function envio(){
  let tipoenvio = JSON.parse(localStorage.getItem("total"))
  
   if (document.getElementById("standardradio").checked){  
    sumatoria = 0.15*tipoenvio.dato1; 
  return sumatoria
     }
     else if(document.getElementById("premiumradio").checked){
      sumatoria = 0.07*tipoenvio.dato1;
  
      return sumatoria}
      else if(document.getElementById("goldradio").checked){
        sumatoria = 0.05*tipoenvio.dato1;

        return sumatoria}
  }
 

document.addEventListener("DOMContentLoaded", () => {
  localStorage.removeItem("subtotal")
  localStorage.removeItem("total")

    const form = document.getElementById("formulario");
  
    let formFlag = false;
    let transferencia = document.getElementById("trans")
    let tarjeta = document.getElementById("tarjeta")
// desactivar opciones de pago modal
    tarjeta.addEventListener("click", () => {
    
      modalboton.classList.remove("text-danger");
      terminosInvalidos.classList.add("d-none");
     document.getElementById("numcuent").setAttribute("disabled", "true");
     document.getElementById("venc").removeAttribute("disabled");
      document.getElementById("numtarj").removeAttribute("disabled");
      document.getElementById("codseg").removeAttribute("disabled");
    })
    transferencia.addEventListener("click", () => {
      
      modalboton.classList.remove("text-danger");
      terminosInvalidos.classList.add("d-none");
      document.getElementById("numcuent").removeAttribute("disabled");
      document.getElementById("venc").setAttribute("disabled", "true");
      document.getElementById("numtarj").setAttribute("disabled", "true");
      document.getElementById("codseg").setAttribute("disabled", "true");
     })

     // check formulario
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();
      
  console.log(document.getElementById("venc").value)
      if (!formFlag) {
        form.classList.add("was-validated");
      }
      if(tarjeta.checked == false && transferencia.checked == false){
        modalboton.classList.add("text-danger");
            terminosInvalidos.classList.remove("d-none");
            camposInvalidos.classList.remove("d-none");

      }
      if(tarjeta.checked && (document.getElementById("venc").value != "" && 
      document.getElementById("numtarj").value != "" && document.getElementById("codseg").value != "")){
        
            camposInvalidos.classList.add("d-none");
        
      }
      if(transferencia.checked && (document.getElementById("numcuent").value != "")
      ){
        
            camposInvalidos.classList.add("d-none");
        
      }
      if (form.checkValidity()) {
        form.parentElement.innerHTML += `
          <div class="alert alert-success alert-dismissible start-50 translate-middle-x mt-4 fade show" role="alert">
              ¡Su compra ha sido realizada correctamente!
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
        document.getElementById("formulario").classList.remove("was-validated");
       
        
        document
        .getElementById("botonComp")
        .setAttribute("disabled", "true");
       
        
      } 
      
    })
  
  llenarCarrito();
  // input target a cada producto
  document.getElementById("carcom").addEventListener("input" , function (e){

      let id = e.target.dataset.id
      let  moneda = e.target.dataset.moneda
      let  valor = e.target.value;
      let  costo = parseInt(e.target.dataset.costo)
        
        multi = valor*costo
        let conversion = [];
        if ( moneda == `UYU`)
        { conversion = multi/40}
        else if (moneda == `USD`)
        { conversion = multi}
        
        let subtotal = JSON.parse(localStorage.getItem("subtotal"));
        localStorage.setItem(
          "subtotal",
          JSON.stringify({
            ...subtotal,
            [id]: {
              valor : conversion, 
            
            },
          })
        )
        let total = JSON.parse(localStorage.getItem("subtotal"))
        let final = gananciaTotal(total)
        localStorage.setItem(
          "total",
          JSON.stringify({
            dato1 : final
             
          }) 
        )
        console.log(subtotal)
        console.log(envio())
        document.getElementById(id).innerHTML = `<p  id="${id}"> ${moneda} ${multi}</p>`
        document.getElementById("total").innerHTML = `<p >USD  ${gananciaTotal(total)}</p>`
        document.getElementById("descuento").innerHTML = `<p >USD ${envio()}</p>`
        document.getElementById("final").innerHTML = `<p >USD ${envio()+gananciaTotal(total)}</p>`
     })
     
     // calcular y mostrar el envio cuando seleccione otro
    document.getElementById("block").addEventListener("click", function(e){
      if(localStorage.getItem("total") != null){
      let fin = JSON.parse(localStorage.getItem("subtotal"))
      document.getElementById("total").innerHTML = `<p >USD ${gananciaTotal(fin)}</p>`
      document.getElementById("descuento").innerHTML = `<p >USD ${envio()}</p>`
      document.getElementById("final").innerHTML = `<p >USD  ${envio()+gananciaTotal(fin)}</p>`}
    })
});


