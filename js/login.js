


document.addEventListener("DOMContentLoaded", function () {

document.getElementById("cosa").addEventListener("click", function () {

    const alert = document.getElementById("warning")
    let email = document.getElementById("email").value
    let contra = document.getElementById("contra").value
    let nocumpleCon = false;
    let warning = ""
    
    alert.innerHTML = ""
    if (email == "" ) {

        
        warning += `Ingrese E-mail <br>`;
        nocumpleCon = true;
        
        
    }

    if (contra == "" ) {
        
        nocumpleCon = true;
        warning += `Ingrese Contraseña `
    }

    if (nocumpleCon){
        
        alert.innerHTML= warning
        
    }
    else {
        window.location.replace("showroom.html")
    }
     
      
    

    
    

})
    
})