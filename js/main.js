//Generamos arreglo vacio para guardar los datos.

let nuevoProducto = new Array();

let alerts = document.getElementById("alerts"); // Alerta por cargar mal o no cargar un dato.
let prodCtn = document.getElementById("prodCtn"); // Ventana donde aparece el nuevo producto cargado con sus datos y foto.
let nuevo_prod = document.getElementById("nuevo_prod"); // Boton para cargar datos.

nuevo_prod.addEventListener("click", ()=>{ //Se pasan dos parametros, el evento y que quiero hacer cuando aprieto el boton que en este caso es validar los datos y generar el nuevo producto con la funcion.

    if (validar_datos()){ //Funcion validar datos sirve para validar la info ingresada por el usuario. Esta creada mas abajo.

        crearProducto(); //Si los datos son validos se genera un nuevo producto que se guardan en generar producto nuevo.

    }   
});

// Llamamos a validar los datos del formulario.

function validar_datos(){

    alerts.innerHTML = ""; // Resetea los alertas que le damos al usuario cuando no carga como corresponde la info para que no se acumulen en la pagina los alertas de los datos corregidos.

    let input_codProd = (document.getElementById("codProd").value);
    let input_item = document.getElementById("item").value;
    let input_descripcion = document.getElementById("descripcion").value;
    let input_cant_min = document.getElementById("cant_min").value;
    let input_precio = (document.getElementById("precio").value);
    let input_imgProd = document.getElementById("imgProd").value;

    let alerts_mensajes = new Array();
    
    switch(validar_datos){

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

    let producto = new producto(codProd, item, descripcion, cant_min, precio, imgProd);

    nuevoProducto.push(producto);

    generar_nuevo_producto(producto);

}

function generar_nuevo_producto(producto){

    let new_div = document.createElement("div")
    let new_h2 = document.createElement("h2");
    new_div.id ="div"+ producto.nombre + producto.imgProd; 
    new_h2.textContent = producto.nombre;

    let new_img = document.createElement("img");
    new_img.src = producto.imgProd;

    new_div.appendChild(new_h2);
    new_div.appendChild(new_img);

    let productoActiv = document.createElement("h4");
    productoActiv.textContent = producto.productoActiv;
    new_div.appendChild(productoActiv);

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


