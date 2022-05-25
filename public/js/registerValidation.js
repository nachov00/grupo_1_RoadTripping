window.addEventListener ("load", function(){

    let nombre = document.querySelector("#Nombre");
    let campos = document.querySelectorAll("input");
    let form = document.querySelector(".register");

    
    const mailFormat = /\S+@\S+\.\S+/ ;
    const minusculas = /[a-z]/g ;
    const mayusculas = /[A-Z]/g ;
    const numeros = /[0-9]/g ;
    
    nombre.focus(); 

    campos.forEach( (campo) => console.log(campo.value))

    campos.forEach( (campo) => {
        
        campo.addEventListener("blur", function() { 
            // console.log( campo.value >= 0 )
        
        if ( (campo.name == "Nombre") && (Number(campo.value <= 2) || Number(campo.value > 21)) ) {
            campo.nextElementSibling.innerHTML = "El valor debe estar comprendido entre 2 y 21";
            // campo.classList.remove("is-valid")
            // campo.nextElementSibling.classList.add("is-invalid")
        }
        else if ( (campo.name == "usuario") && (Number(campo.value <= 2) || Number(campo.value > 10)) ){ 
        campo.nextElementSibling.innerHTML = "El valor debe estar comprendido entre 2 y 10";
        // campo.classList.remove("is-valid")
        // campo.nextElementSibling.classList.add("is-invalid")
        }
        else if ( (campo.name == "cumpleaños") && (Number(campo.value <= 0) || Number( (campo.value.getFullYear() - Date().getFullYear() < 18) )) ) {
            campo.nextElementSibling.innerHTML = "Usted debe ser mayor de edad para registrarse al sitio";
            // campo.classList.remove("is-valid")
            // campo.nextElementSibling.classList.add("is-invalid")
        }
        else if ( (campo.name == "email") && (Number(campo.value <= 0) || Number(campo.value.match(mailFormat)) ) ) {
            campo.nextElementSibling.innerHTML = "Su Email no es valido";
            // campo.classList.remove("is-valid")
            // campo.nextElementSibling.classList.add("is-invalid")
        }
        else if ( (campo.name == "password") && (Number(campo.value <= 8) || Number( !(campo.value.match(minusculas) || campo.value.match(mayusculas) || campo.value.match(numeros)))) )  {
            campo.nextElementSibling.innerHTML = "Su contraseña debe contar con ocho caracteres, y al menos una minúscula, una mayuscula y un número";
            // campo.classList.remove("is-valid")
            // campo.nextElementSibling.classList.add("is-invalid")
        }
        else{
            campo.nextElementSibling.innerHTML = "Ok"
            // campo.nextElementSibling.classList.remove("is-invalid")
            // campo.classList.add("is-valid");
        }

        })

    })

    form.addEventListener("submit", function(submit) {
        submit.preventDefault();
        let error = false;
        campos.forEach( (campo) => {
            if (!campo.value){
                error = true;
                campo.nextElementSibling.innerHTML = "El campo no debe quedar vacio."
                // campo.nextElementSibling.classList.add("is-invalid")            
            }
        } )

        if(!error){
            this.submit()
        }

    })


})