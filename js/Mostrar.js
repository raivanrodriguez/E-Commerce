document.addEventListener("DOMContentLoaded", function () {

  htmlContentToAppend =
  `<nav class="navbar navbar-expand-lg navbar-dark bg-primary p-1">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav w-100 justify-content-between">
          <li class="nav-item">
            <a class="nav-link active" href="showroom.html">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="categories.html">Categorías</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="sell.html">Vender</a>
            
          </li>
          
          <li > 
            <div><p class="nom" id="mostr"></p></div>
          </li>
        </ul>
      </div>
      </nav>`
      document.getElementById("barra").innerHTML = htmlContentToAppend;



  if (localStorage.getItem("datos_ingresados")) {

        dato_guardado = localStorage.getItem("datos_ingresados");
        datos_ingresados = JSON.parse(dato_guardado);
        document.getElementById("mostr").innerHTML =
        "" + datos_ingresados.dato1 + "" 

        
        
    }




    
})
