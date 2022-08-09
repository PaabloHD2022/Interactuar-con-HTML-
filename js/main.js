let productos = new Array();

let alerts = document.getElementById("alerts");
let prodCtn = document.getElementById("prodCtn");
let btn_crear_prod = document.getElementById("btn_crear_prod");

btn_crear_prod.addEventListener("click",()=>{

    if (validar_datos_formulario()){

        crearProducto();

    }   
});

function validar_datos_formulario(){

    alerts.innerHTML = "";

    let input_codProd = (document.getElementById("codProd").value).parseInt;
    let input_item = document.getElementById("item").value;
    let input_descripcion = document.getElementById("descripcion").value;
    let input_cant_min = document.getElementById("cant_min").value;
    let input_precio = (document.getElementById("precio").value).parseInt;
    let input_imgProd = document.getElementById("imgProd").value;

    let alerts_mensajes = new Array();
    
    switch(validadacion()){

        case "input_codProd":
            input_codProd < 0 || isNaN || !input_codProd;
            alerts_mensajes.push("Ingrese un codigo de producto");
            break;
        
        case "input_item":
            input_item ="";
            alerts_mensajes.push("ingrese una item");
            break;

        case "input_descripcion":
            input_descripcion ="";
            alerts_mensajes.push("Inrese una descripcion del producto a ingresar");
            break;

        case "input_cant_min":
            input_cant_min < 0 || isNaN || !input_cant_min;
            alerts_mensajes.push("Ingrese cantidad de venta minima de este producto");
            break;

        case "input_precio":
            input_precio < 0 || isNaN || !input_precio;
            alerts_mensajes.push("Ingrese precio del producto");
            break;

        case "input_imgProd":
            input_imgProd ="";
            alerts_mensajes.push("Ingrese la foto del producto");
            break;
    }

    if (alerts_mensajes.length > 0){

    let lista_errores = document.createElement("ul");
    lista_errores.textContent = "Error en la carga de datos: ";

    alerts_mensajes.forEach(mensaje =>{
        lista_errores.appendChild(crear_li(mensaje));
    })

    alerts.appendChild(lista_errores);
    
        return false;
        

    }else{

        return true;
    }
}

function crear_li(mensaje){

    let li = document.createElement("li");
    li.textContent = mensaje;
    return li;
}

function crearProducto(){

    let codProd = document.getElementById("codProd").value;
    let item = document.getElementById("item").value;
    let descripcion = document.getElementById("descripcion").value;
    let cant_min = document.getElementById("cant_min").value;
    let precio = document.getElementById("precio").value;
    let imgProd = document.getElementById("imgProd").value;

    let productos = new productos(codProd, item, descripcion, cant_min, precio, imgProd);

    productos.push(productos);

    generar_producto_cargado(productos);

}

function generar_producto_cargado(productos){

    let new_div = document.createElement("div")
    let new_h2 = document.createElement("h2");
    new_div.id ="div"+ productos.nombre + productos.foto; 
    new_h2.textContent = productos.nombre;

    let new_img = document.createElement("img");
    new_img.src = productos.foto;

    new_div.appendChild(new_h3);
    new_div.appendChild(new_img);

    let estado = document.createElement("h4");
    estado.textContent = productos.estado;
    new_div.appendChild(estado);

    let contenedor = document.getElementById("prodCtn");

    contenedor.appendChild(new_div);

    resetear_form();

}

function resetear_form(){

    document.getElementById("codProd").value = "";
    document.getElementById("item").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("cant_min").value = "";    
    document.getElementById("precio").value = "";
    document.getElementById("imgProd").value = "";
}