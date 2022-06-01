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

            if ((campo.name == "username") && ((campo.value.length < 2) || (campo.value.length > 21))) {
                campo.nextElementSibling.innerHTML = "El valor debe estar comprendido entre 2 y 21";
                // campo.classList.remove("is-valid")
                // campo.nextElementSibling.classList.add("is-invalid")
            } else {
                if ((campo.name == "password") && ((campo.value.length > 7) && (campo.value.match(minusculas)) && (campo.value.match(mayusculas)) && (campo.value.match(numeros)))) { enteredPassword = campo.value }
                campo.nextElementSibling.innerHTML = "Ok"
                //console.log("Contraseña = " + enteredPassword)
                // campo.nextElementSibling.classList.remove("is-invalid")     D-E-B-U-G-I-N-G
                // campo.classList.add("is-valid");

            }
        }
        )

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