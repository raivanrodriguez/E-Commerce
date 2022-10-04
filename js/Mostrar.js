
document.addEventListener("DOMContentLoaded", function () {

  htmlContentToAppend =
  `<nav class="navbar navbar-expand-lg navbar-dark bg-dark p-2" >
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav w-100 justify-content-between">
        <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><img style= 'width:4em' src="img/ceibal-logo-blanco.png" alt="imagen" ></button>

        <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
          <div class="offcanvas-header bg-dark text-white">
            <h5 class="fw-bold" id="offcanvasTopLabel">Bienvenidos al E-commerce de Ceibal</h5>
            <button type="button" class="btn-close text-reset btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body bg-dark text-white p-10">
            ...
          </div>
        </div>
          <li class="nav-item">
            <a class="nav-link active fw-bolder" href="showroom.html">Inicio</a>
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
        <ul class="dropdown-menu dropdown-menu-dark ">
          <li><a class="dropdown-item text-white" href="cart.html">Mi carrito</a></li>
          <li><a class="dropdown-item text-white" href="my-profile.html">Mi Perfil</a></li>
          <li><hr class="dropdown-divider text-white"></li>
          <li><a class="dropdown-item text-white" href="index.html" id="rem">Cerrar sesión</a></li>
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



