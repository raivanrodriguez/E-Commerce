
document.addEventListener("DOMContentLoaded", function () {

  htmlContentToAppend =
  `<nav class="navbar navbar-expand-lg navbar-dark bg-dark p-1">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav w-100 justify-content-between">
          <li class="nav-item">
            <a class="nav-link active fw-bold" href="showroom.html">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fw-bold" href="categories.html">Categorías</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fw-bold" href="sell.html">Vender</a>
            
          </li>
          
          <li > 
           
          </li>
        </ul><div class="btn-group">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <a class="nom fw-bold" id="mostr"></a>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
          <li><a class="dropdown-item" href="my-profile.html">Mi Perfil</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="index.html" id="rem">Cerrar sesión</a></li>
        </ul>
      </div>
      </div>
      </nav>`
      document.getElementById("barra").innerHTML = htmlContentToAppend;

 document.getElementById("rem").addEventListener("click", function(){
  if( localStorage.getItem("datos_ingresados") != null ){
    localStorage.removeItem("datos_ingresados")

  }

 })

  if (localStorage.getItem("datos_ingresados")) {

        dato_guardado = localStorage.getItem("datos_ingresados");
        datos_ingresados = JSON.parse(dato_guardado);
        document.getElementById("mostr").innerHTML =
        "" + datos_ingresados.dato1 + "" 

        
        
    }
    
})



