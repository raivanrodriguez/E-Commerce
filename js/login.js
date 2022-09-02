


document.addEventListener("DOMContentLoaded", function () {

document.getElementById("cosa").addEventListener("click", function () {

   
    let email = document.getElementById("email").value
    let contra = document.getElementById("contra").value
    let alert = document.getElementById("warning")
    let warning = ""
    let cumpleCon = true;
    
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
document.getElementById("cosa").addEventListener("click", function () {

let mis_datos = {
    
    dato1: document.getElementById("email").value
};

let mis_datos_json = JSON.stringify(mis_datos);

localStorage.setItem("mis_datos", mis_datos_json);


})






    
})
