
let datosUsuario = new Array();

let alerts = document.getElementById("alerts");
let ctnRespuesta = document.getElementById("ctnRespuesta");
let btnCrearDatos = document.getElementById("btnCrearDatos");

const anioActual = 2022;

btnCrearDatos.addEventListener("click", ()=>{

    if (validarDatos()){

        crearDatos();
    }

});

function validarDatos(){

    alerts.innerHTML = "";

    let input_nombre = document.getElementById("nombre").value;
    let input_diaNac = document.getElementById("diaNac").value;
    let input_mesNac = document.getElementById("mesNac").value;
    let input_anioNac = document.getElementById("anioNac").value;

    let mensaje = new Array();

    if (!nombre){
        alerts.push("Ingrese su nombre por favor");
    }

    if (!diaNac || diaNac <=0 || diaNac == isNaN ){
        alerts.push("Ingrese su fecha de nacimiento por favor");
    }

    if (!mesNac || mesNac <=0 || mesNac == isNaN ){
        alerts.push("Ingrese su mes de nacimiento por favor");
    }

    if (!anioNac || anioNac <=0 || anioNac == isNaN ){
        alerts.push("Ingrese su año de nacimiento por favor");
    }

    if (alerts.length > 0){

        let lista = document.createElement("ul");
        lista.textContent = "No podemos procesar sus datos: ";
        
        alerts.forEach(mensaje => {
            lista.appendChild(crear_li(mensaje));
        })

        alerts.appendChild(lista);
        return false;
    
    }else{

        return true
    }

}

function crear_li (mensaje){

    let li = document.createElement ("li");
    li.textContent = mensaje;
    return li;

}

function crearDatos(){

    let nombre = document.getElementById("nombre").value;
    let diaNac = document.getElementById("diaNac").value;
    let mesNac = document.getElementById("mesNac").value;
    let anioNac = document.getElementById("anioNac").value;

    let dato = new Datos(nombre, diaNac, mesNac, anioNac);

    datosUsuario.push(dato);

    generarDatos(dato);

}

function generarDatos(dato){

    let new_div = document.createElement("div")
    let new_h2 = document.createElement("h2")
    new_div.id = "div"+ dato.nombre + dato.signo();
    new_h2.textContent = dato.nombre;

    let contenedor = document.getElementById("ctnRespuesta");

    contenedor.appendChild(new_div);

    resetForm();

}

function resetForm(){
    document.getElementById("nombre").value = "";
    document.getElementById("diaNac").value = "";
    document.getElementById("mesNac").value = "";
    document.getElementById("anioNac").value = "";

}

function signoZodiaco(diaNac, mesNac){

    let signo = ""

    if ((diaNac >=23 && mesNac ==12) || (diaNac <=20 && mesNac ==1))
    signo = "Capricornio";

    if ((diaNac >=21 && mesNac ==1) || (diaNac <= 19 && mesNac ==2))
    signo = "Acuario";

    if ((diaNac >=20 && mesNac ==2) || (diaNac <=20 && mesNac ==3))
    signo = "Piscis";

    if ((diaNac >=21 && mesNac ==3) || (diaNac <=20 && mesNac ==4))
    signo = "Aries";

    if ((diaNac >=21 && mesNac ==4) || (diaNac <=21 && mesNac ==5))
    signo = "Tauro";

    if ((diaNac >=22 && mesNac ==5) || (diaNac <=21 && mesNac ==6))
    signo = "Geminis";

    if ((diaNac >=22 && mesNac ==6) || (diaNac <= 23 && mesNac ==7))
    signo = "Cancer";

    if ((diaNac >=24 && mesNac ==7) || (diaNac <=23 && mesNac ==8))
    signo = "Leo";

    if ((diaNac >=24 && mesNac ==8) || (diaNac <=23 && mesNac ==9))
    signo = "Virgo";

    if ((diaNac >=24 && mesNac ==9) || (diaNac <=23 && mesNac ==10))
    signo = "Libra";

    if ((diaNac >=24 && mesNac ==10) || (diaNac <=22 && mesNac ==11))
    signo = "Escorpio";

    if ((diaNac >=23 && mesNac ==11) || (diaNac <=22 && mesNac ==12))
    signo = "Sagitario";

    return signo
}