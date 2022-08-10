/**
 * Clase que modela la informacion de un producto.
 */
class Producto{    

    constructor (codProd, item, descripcion, cantMin, precio, imgProd, prodActiv){

        this.codProd = codProd ;
        this.item = item;
        this.descripcion = descripcion;
        this.cantMin = cantMin;
        this.precio = precio;
        this.imgProd = imgProd;
        this.prodActiv = prodActiv;
    }

    /**
     * Obtiene el estado de activo o inactivo del producto
     * @returns el valor de la propiedad estado
     */
    getEstadoProd(){

        return this.prodActiv;
    }
    /**
     * funcion para setear un nuevo estado
     * @param nuevo_estado el nuevo estado a setear
     */
    setEstadoProd(nuevo_estado){
        
        this.prodActiv = nuevo_estado;
    }
}