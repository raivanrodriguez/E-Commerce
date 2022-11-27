let perfil = [];
let usuario = JSON.parse(localStorage.getItem("datos_ingresados"))
let file1 = document.getElementById("inputFile01")

//funcion que muestra la imagen si hay una cargada y sino mostrara una por default
function mostrarImagen(){
  if (localStorage.getItem("imagenPerfil") != null){
    const imper = localStorage.getItem("imagenPerfil");
    const img = new Image()

    img.src = imper;

    document.getElementById("imgPer").innerHTML = (`<img src="${img.src}" alt="img" class="im float-end"></img>`)
  }
  else{
    document.getElementById("imgPer").innerHTML = `<img src="img/img_perfil.png" alt="img" class="im float-end"></img>`
  }
}

document.addEventListener("DOMContentLoaded", () => {
   
     mostrarImagen();

    if (localStorage.getItem("perfil") == null){document.getElementById("email").value = usuario.dato1}

    if (localStorage.getItem("perfil") != "" 
    && localStorage.getItem("perfil") != undefined 
    && localStorage.getItem("perfil") != null) {
        let perfil = JSON.parse(localStorage.getItem("perfil"))
        
        document.getElementById("papell").value = perfil.profile.dato1
        document.getElementById("pname").value = perfil.profile.dato0
        document.getElementById("sname").value = perfil.profile.dato2
        document.getElementById("sape").value = perfil.profile.dato3
        document.getElementById("cel").value = perfil.profile.dato4
        document.getElementById("email").value = perfil.profile.dato5


     }
      let form = document.getElementById("form");
    
      let formFlag = false;
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopPropagation();

        let profile = { dato0 : document.getElementById("pname").value,
        dato1 : document.getElementById("papell").value,
        dato2 : document.getElementById("sname").value,
        dato3 : document.getElementById("sape").value,
        dato4 : document.getElementById("cel").value,
        dato5 : document.getElementById("email").value
        };  
    
        if (!formFlag) {
          form.classList.add("was-validated");
        }
        if (form.checkValidity()) {
            localStorage.setItem(
                "perfil",
                JSON.stringify({profile}))
            
            
            form.parentElement.innerHTML += `
              <div class="alert alert-success alert-dismissible start-50 translate-middle-x mt-4 fade show" role="alert">
                  ¡Datos guardados correctamente!
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            `;
            document.getElementById("form").classList.remove("was-validated");
            document
        .getElementById("botonDatos")
        .setAttribute("disabled", "true");
            
          } 
       
      })
      // desafio imagen

      
      file1.addEventListener("change", () =>{

        const fl = new FileReader();

        fl.readAsDataURL(file1.files[0]);
        fl.addEventListener("load", () =>{
         
          const url = fl.result;
          localStorage.setItem("imagenPerfil", url)

          
         mostrarImagen()
        })
        
      })
     
    })