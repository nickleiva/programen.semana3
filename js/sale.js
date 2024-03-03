
// Definimos una variable para almacenar las compras
let compras = [];

// Lista de productos con sus detalles
const cafes = [
  {
    id: 1,
    nombre: "Café Americano",
    precio: 500,
    cantidad: 0
  },
  {
    id: 2,
    nombre: "Café Latte",
    precio: 900,
    cantidad: 0
  },
  {
    id: 3,
    nombre: "Café Mocha",
    precio: 700,
    cantidad: 0
  },
  {
    id: 4,
    nombre: "Cappuccino",
    precio: 1200,
    cantidad: 0
  }
];

// Función principal para calcular el total y mostrar el resumen
function calc() {
    // Calculamos el total de la orden
    let total = 0;
    for (const compra of compras) {
      total += compra.precio * compra.cantidad;
    }

    // Calculamos el costo de envío
    const envioValue = envio(total);
    //Elementos comprados por el usuario
    let mensaje = "";
    for (const compra of compras) {
        mensaje += `${compra.nombre} - ${compra.cantidad}\n`;
    }

    // Mostramos la alerta con el total y el costo de envío
    alert(`${mensaje} Subtotal de la orden: ${total}. Envío: ${envioValue} \nTotal: ${total + envioValue}`);

    // Reiniciamos las compras después de realizar la orden
    compras = [];
}

// Función para calcular el total de la orden
function resultado() {
    return compras.reduce((prev, compra) => prev + compra.precio * compra.cantidad, 0);
}

// Función para calcular el costo de envío
function envio(result) {
    let envio;

    if (result < 2000) {
        envio = 500;
    } else if (result >= 2000 && result < 3000) {
        envio = 250;
    } else {
        envio = 0;
    }

    return envio;
}


// Función para agregar productos al carrito
function add() {
    // Obtenemos el id y la cantidad desde los elementos del formulario
    const id = parseInt(document.getElementById("product").value);
    const cant = parseInt(document.getElementById("number").value);

    // Buscamos el producto en la lista
    const producto = cafes.find((cafe) => cafe.id === id);
    console.log(producto)

    // Buscamos el producto en las compras existentes
    const productoExistente = compras.find((compra) => compra.id === id);

    // Si el producto ya está en las compras, actualizamos la cantidad
    if (productoExistente) {
        productoExistente.cantidad += cant;
    } else {
        // Si no está en las compras, agregamos el producto con su cantidad
        producto.cantidad = cant;
        compras.push(producto);
    }

    // Mostramos el subtotal y el total actual
    mostrar();
}


// Función para mostrar los productos y sus cantidades en el carrito
//function mostrar() {
  //return compras.map(compra => `${compra.nombre} - ${compra.cantidad}`).join("\n");
//}
function mostrar() {
    let mensaje = "";
    for (const compra of compras) {
        mensaje += `${compra.nombre} - ${compra.cantidad}\n`;
    }
    alert(mensaje)
}
