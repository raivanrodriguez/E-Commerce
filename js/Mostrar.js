document.addEventListener("DOMContentLoaded", function () {


  if (localStorage.getItem("mis_datos")) {

        mis_datos_json = localStorage.getItem("mis_datos");
        mis_datos = JSON.parse(mis_datos_json);
        document.getElementById("mostr").innerHTML =
        "" + mis_datos.dato1 + "" 

        
        console.log(JSON.parse(mis_datos_json))
    }
else {}



    
})
