


document.addEventListener("DOMContentLoaded", function () {

document.getElementById("cosa").addEventListener("click", function () {

    const alert = document.getElementById("warning")
    let email = document.getElementById("email").value
    let contra = document.getElementById("contra").value
    let cumpleCon = true;
    let warning = ""
    
    alert.innerHTML = ""
    if (email == "" ) {

        
        warning += `Ingrese E-mail <br>`;
        cumpleCon = false;
        
        
    }

    if (contra == "" ) {
        
        cumpleCon = false;
        warning += `Ingrese Contraseña `
    }

    if (cumpleCon){
        window.location.replace("showroom.html")
        
        
        
    }
    else {
        
        alert.innerHTML= warning
    }
     
      
    

    
    

})

    
})