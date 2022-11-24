let perfil = [];
let usuario = JSON.parse(localStorage.getItem("datos_ingresados"))

document.addEventListener("DOMContentLoaded", () => {
   

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
      
    
    })