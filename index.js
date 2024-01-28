

//1ER ENTREGA

//CREACIÓN DE UNA CLASE CONSTRUCTORA CON EL FIN DE PODER LISTAR TODOS LOS PRODUCTOS OFRECIDOS, AGREGAR Y TOMAR DATOS PARA 
//CALCULAR COSTOS 

const IVA= 1.21
const GAN=  1.45

class Producto {
   constructor (id, nombre, costo, stock) {
   
    this.id= id
    this.nombre= nombre
    this.costo= costo
    this.stock= stock
    this.precioConIva= (this.costo*IVA);
    this.precioUnitario= (this.precioConIva*GAN);
    }
   
}

const PRODUCTO_UNO= new Producto (1, "Queso Vegano Verde", 700, 10);
const PRODUCTO_DOS= new Producto (2, "Queso Vegano Azul", 700, 10);
const PRODUCTO_TRES= new Producto (3, "Queso Vegano Rosa", 700, 10);
const PRODUCTO_CUATRO= new Producto (4, "Hamburguesa Arroz Yamani", 900, 10);
const PRODUCTO_CINCO= new Producto (5, "Hamburguesa Lentejas", 1100, 10);
const PRODUCTO_SEIS= new Producto (6, "Hamburguesa Garbanzos", 1200, 10);
const PRODUCTO_SIETE= new Producto (7, "Nueces", 1700, 10);
const PRODUCTO_OCHO= new Producto (8, "Almendras", 1700, 10);
const PRODUCTO_NUEVE= new Producto (9, "Avellanas", 1800, 10);
const PRODUCTO_DIEZ= new Producto (10, "Mani", 800, 10);


function Listado()

 {
    console.log (PRODUCTO_UNO);
    console.log (PRODUCTO_DOS);
    console.log (PRODUCTO_TRES);
    console.log (PRODUCTO_CUATRO);
    console.log (PRODUCTO_CINCO);
    console.log (PRODUCTO_SEIS);
    console.log (PRODUCTO_SIETE);
    console.log (PRODUCTO_OCHO);
    console.log (PRODUCTO_NUEVE);
    console.log (PRODUCTO_DIEZ);
}


//LLAMADA A LA FUNCION PARA LISTAR LOS PRODUCTOS 


Listado();


// BLOQUE QU PERMITE AL USUARIO SELECCIONAR UN ID Y LUEGO VISUALIZAR LA INFORMACIÓN SOBRE EL PRODUCTO 


    const SELECCIONADO= parseFloat(prompt("Indique el ID del producto a visualizar: se encuentra al lado de la imagen"));

    switch (SELECCIONADO){

        case 1:
        console.log (PRODUCTO_UNO);
        break;

        case 2:
        console.log (PRODUCTO_DOS);
        break;

        case 3:
        console.log (PRODUCTO_TRES);
        break;

        case 4:
        console.log (PRODUCTO_CUATRO);
        break; 
                
        case 5:
        console.log (PRODUCTO_CINCO);
        break; 
                
        case 6:
        console.log (PRODUCTO_SEIS);
        break;
        
        case 7:
        console.log (PRODUCTO_SIETE);
        breack; 
        
        case 8:
        console.log (PRODUCTO_OCHO);
        break; 
             
        case 9:
        console.log (PRODUCTO_NUEVE); 
        breack; 
                    
        case 10:
        console.log (PRODUCTO_DIEZ);
        break; 
                    
        default:
            console.log ("no existe el Id de producto!!! Muchas gracias por navegar nuestra app")
    
    }
 
  
    //BLOQUE QUE PERMITE AL USUARIO CALCULAR EL TOTAL DE UNA COMPRA 
   
    
    let compra= 0
    let continuar;
    
    do{
    const CANTI= parseFloat(prompt("ingrese la cantidad de productos que quiere llevar"))
    
    if (!isNaN (CANTI))
    {
        compra+= CANTI
        continuar= prompt ("desea sumar otro producto (si-no)").toLowerCase()
    }
    
    else
    {
        alert ("Ingrese un numero valido");
        continuar= "si"
    }
    
    }
    
    
    while (continuar=== "si")
    {
    console.log ("El total de la compra es :" +  compra*(PRODUCTO_CINCO.precioUnitario));

    }
    
