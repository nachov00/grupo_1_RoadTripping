window.addEventListener("load", function () {

    let nombre = document.querySelector("#Nombre");
    let campos = document.querySelectorAll("input");
    let form = document.querySelector(".register");


    let enteredPassword = "";
    const mailFormat = /\S+@\S+\.\S+/;
    const minusculas = /[a-z]/g;
    const mayusculas = /[A-Z]/g;
    const numeros = /[0-9]/g;
    const today = new Date();
    const year = today.getFullYear();


    nombre.focus();

    campos.forEach((campo) => {

        campo.addEventListener("blur", function () {
            // console.log( campo.value >= 0 )

            if ((campo.name == "Nombre") && ((campo.value.length < 2) || (campo.value.length > 21))) {
                campo.nextElementSibling.innerHTML = "El valor debe estar comprendido entre 2 y 21";
                // campo.classList.remove("is-valid")
                // campo.nextElementSibling.classList.add("is-invalid")
            } else {
                campo.nextElementSibling.innerHTML = "Ok"
                // campo.nextElementSibling.classList.remove("is-invalid")
                // campo.classList.add("is-valid");
                if ((campo.name == "usuario") && ((campo.value.length < 2) || (campo.value.length > 10))) {
                    campo.nextElementSibling.innerHTML = "El valor debe estar comprendido entre 2 y 10";
                    // campo.classList.remove("is-valid")
                    // campo.nextElementSibling.classList.add("is-invalid")
                } else {
                    campo.nextElementSibling.innerHTML = "Ok"
                    // campo.nextElementSibling.classList.remove("is-invalid")
                    // campo.classList.add("is-valid");
                    if ((campo.name == "cumpleaños") && ((campo.value.length <= 0) || (year - (Number(campo.value.slice(0, 4))) < 18 ) )) {
                        //console.log("Estamos en "+year);
                        //console.log("Naciste en "+Number(campo.value.slice(0, 4)));     D-E-B-U-G-I-N-G
                        //console.log("Tenes "+(year - Number(campo.value.slice(0, 4))) )
                        campo.nextElementSibling.innerHTML = "Usted debe ser mayor de edad para registrarse al sitio";
                        // campo.classList.remove("is-valid")
                        // campo.nextElementSibling.classList.add("is-invalid")
                    } else {
                        //console.log("Estamos en "+year);
                        //console.log("Naciste en "+Number(campo.value.slice(0, 4)));     D-E-B-U-G-I-N-G
                        //console.log("Tenes "+ (year - Number(campo.value.slice(0, 4))) )
                        campo.nextElementSibling.innerHTML = "Ok"
                        // campo.nextElementSibling.classList.remove("is-invalid")
                        // campo.classList.add("is-valid");
                        if ((campo.name == "email") && ((campo.value.lenght <= 0) || !(campo.value.match(mailFormat)))) {
                            campo.nextElementSibling.innerHTML = "Su Email no es valido";
                            // campo.classList.remove("is-valid")
                            // campo.nextElementSibling.classList.add("is-invalid")
                        } else {
                            campo.nextElementSibling.innerHTML = "Ok"
                            // campo.nextElementSibling.classList.remove("is-invalid")
                            // campo.classList.add("is-valid");
                            if ((campo.name == "password") && ((campo.value.length < 8) || !(campo.value.match(minusculas)) || !(campo.value.match(mayusculas)) || !(campo.value.match(numeros)))) {
                                campo.nextElementSibling.innerHTML = "Su contraseña debe contar con ocho caracteres, y al menos una minúscula, una mayuscula y un número";
                                // campo.classList.remove("is-valid")
                                // campo.nextElementSibling.classList.add("is-invalid")
                            } else {
                                if ((campo.name == "password") && ((campo.value.length > 7) && (campo.value.match(minusculas)) && (campo.value.match(mayusculas)) && (campo.value.match(numeros)))) 
                                { enteredPassword = campo.value }
                                campo.nextElementSibling.innerHTML = "Ok"
                                //console.log("Contraseña = " + enteredPassword)
                                // campo.nextElementSibling.classList.remove("is-invalid")     D-E-B-U-G-I-N-G
                                // campo.classList.add("is-valid");
                                if ((campo.name == "confirm-pass") && ((campo.value.length < 7) || !(campo.value.match(minusculas)) || !(campo.value.match(mayusculas)) || !(campo.value.match(numeros)) || (campo.value !== enteredPassword) )) {
                                    //console.log("Valor de Confirm-Pass = " + campo.value)
                                    //console.log("Contraseña guardada = " + enteredPassword)     D-E-B-U-G-I-N-G
                                    //console.log("Las contraseñas coinciden?")
                                    campo.nextElementSibling.innerHTML = "Las contraseñas no coinciden";
                                    // campo.classList.remove("is-valid")
                                    // campo.nextElementSibling.classList.add("is-invalid")
                                } else {
                                    campo.nextElementSibling.innerHTML = "Ok"
                                    // campo.nextElementSibling.classList.remove("is-invalid")
                                    // campo.classList.add("is-valid");
                                }
                            }
                        }
                    }
                }
            }

        })

    })

    form.addEventListener("submit", function (submit) {
        submit.preventDefault();
        let error = false;
        campos.forEach((campo) => {
            if (!campo.value) {
                error = true;
                campo.nextElementSibling.innerHTML = "El campo no debe quedar vacio."
                // campo.nextElementSibling.classList.add("is-invalid")            
            }
        })

        if (!error) {
            this.submit()
        }

    })


})