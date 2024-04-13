// Define una clase genérica para alimentos
class Alimento {
    constructor(nombre, calorias, proteinas, carbohidratos, grasas) {
        this.nombre = nombre;
        this.calorias = calorias;
        this.proteinas = proteinas;
        this.carbohidratos = carbohidratos;
        this.grasas = grasas;
    }

    // Calcula los nutrientes totales según la cantidad
    calcularNutrientes(cantidad) {
        return {
            calorias: this.calorias * cantidad,
            proteinas: this.proteinas * cantidad,
            carbohidratos: this.carbohidratos * cantidad,
            grasas: this.grasas * cantidad
        };
    }
}

// Define subclases para diferentes tipos de alimentos
class Fruta extends Alimento {
    constructor(nombre, calorias, proteinas, carbohidratos, grasas) {
        super(nombre, calorias, proteinas, carbohidratos, grasas);
    }
}

class Verdura extends Alimento {
    constructor(nombre, calorias, proteinas, carbohidratos, grasas) {
        super(nombre, calorias, proteinas, carbohidratos, grasas);
    }
}

class Carne extends Alimento {
    constructor(nombre, calorias, proteinas, carbohidratos, grasas) {
        super(nombre, calorias, proteinas, carbohidratos, grasas);
    }
}

class Lacteo extends Alimento {
    constructor(nombre, calorias, proteinas, carbohidratos, grasas) {
        super(nombre, calorias, proteinas, carbohidratos, grasas);
    }
}

class Grano extends Alimento {
    constructor(nombre, calorias, proteinas, carbohidratos, grasas) {
        super(nombre, calorias, proteinas, carbohidratos, grasas);
    }
}

// Crea instancias de alimentos
const manzana = new Fruta("Manzana", 52, 0.26, 13.81, 0.17);
const platano = new Fruta("Plátano", 89, 1.09, 22.84, 0.33);
const pera = new Fruta("Pera", 82, 1.06, 22.82, 0.23);
const sandia = new Fruta("sandia", 89, 1.09, 22.84, 0.33);
const fresa = new Fruta("fresa", 89, 1.09, 22.84, 0.33);

const espinaca = new Verdura("Espinaca", 23, 2.86, 3.63, 0.39);
const zanahoria = new Verdura("Zanahoria", 41, 0.93, 9.58, 0.24);
const cebolla = new Verdura("Cebolla", 42, 0.92, 9.58, 0.24);
const puerro = new Verdura("Puerro", 23, 0.93, 9.57, 0.24);
const calabacin = new Verdura("Calabacín", 35, 0.93, 9.58, 0.23);

const pollo = new Carne("Pollo", 239, 27.6, 0, 14);
const carneRes = new Carne("Carne de Res", 250, 25, 0, 16);
const pescado = new Carne("Pescado", 220, 23, 0, 15);
const cerdo = new Carne("Cerdo", 210, 22, 0, 13);
const conejo = new Carne("Conejo", 150, 15, 0, 19);

const leche = new Lacteo("Leche", 42, 3.4, 5.0, 1.0);
const queso = new Lacteo("Queso", 302, 25.4, 1.3, 33.1);
const flan = new Lacteo("Flan", 202, 25.2, 1.4, 23.1);
const mozzarella = new Lacteo("Mozzarella", 350, 22.4, 1.3, 23.1);
const helados = new Lacteo("Helados", 150, 26.4, 1.3, 43.1);

const arroz = new Grano("Arroz", 130, 2.7, 28.2, 0.3);
const panIntegral = new Grano("Pan Integral", 247, 8.9, 49.7, 1.6);
const quinoa = new Grano("Quinoa", 147, 7.9, 39.7, 1.6);
const cebada = new Grano("Cebada", 220, 4.9, 39.7, 1.6);
const trigo = new Grano("Trigo", 300, 6.9, 39.7, 4.6);

// Función para mostrar resultados en la tabla
function mostrarResultados(nutrientes) {
    const cuerpoResultados = document.getElementById("cuerpo-resultados");
    cuerpoResultados.innerHTML = ""; // Borra resultados previos

    for (const nutriente in nutrientes) {
        const fila = document.createElement("tr");
        const celdaNutriente = document.createElement("td");
        celdaNutriente.textContent = nutriente.charAt(0).toUpperCase() + nutriente.slice(1); // Capitaliza la primera letra
        const celdaCantidad = document.createElement("td");
        celdaCantidad.textContent = nutrientes[nutriente].toFixed(2); // Muestra dos decimales
        fila.appendChild(celdaNutriente);
        fila.appendChild(celdaCantidad);
        cuerpoResultados.appendChild(fila);
    }

    document.getElementById("resultados").classList.remove("oculto");
}

// Función para calcular y mostrar la nutrición
function calcularNutricion() {
    const tipoAlimento = document.getElementById("tipo-alimento").value;
    const cantidad = parseFloat(document.getElementById("cantidad").value);

    let alimentoSeleccionado;
    switch (tipoAlimento) {
        case "manzana":
            alimentoSeleccionado = manzana;
            break;
        case "platano":
            alimentoSeleccionado = platano;
            break;
        case "pera":
            alimentoSeleccionado = pera;
            break;
        case "sandia":
            alimentoSeleccionado = sandia;
            break;
        case "fresa":
            alimentoSeleccionado = fresa;
            break;
        case "espinaca":
            alimentoSeleccionado = espinaca;
            break;
        case "zanahoria":
            alimentoSeleccionado = zanahoria;
            break;
        case "cebolla":
            alimentoSeleccionado = cebolla;
            break;
        case "puerro":
            alimentoSeleccionado = puerro;
            break;
        case "calabacin":
            alimentoSeleccionado = calabacin;
            break;
        case "pollo":
            alimentoSeleccionado = pollo;
            break;
        case "carneRes":
            alimentoSeleccionado = carneRes;
            break;
        case "pescado":
            alimentoSeleccionado = pescado;
            break;
        case "cerdo":
            alimentoSeleccionado = cerdo;
            break;
        case "conejo":
            alimentoSeleccionado = conejo;
            break;
        case "leche":
            alimentoSeleccionado = leche;
            break;
        case "queso":
            alimentoSeleccionado = queso;
            break;
        case "flan":
            alimentoSeleccionado = flan;
            break;
        case "mozzarella":
            alimentoSeleccionado = mozzarella;
            break;
        case "helados":
            alimentoSeleccionado = helados;
            break;
        case "arroz":
            alimentoSeleccionado = arroz;
            break;
        case "panIntegral":
            alimentoSeleccionado = panIntegral;
            break;
        case "quinoa":
            alimentoSeleccionado = quinoa;
            break;
        case "cebada":
            alimentoSeleccionado = cebada;
            break;
        case "trigo":
            alimentoSeleccionado = trigo;
            break;
        default:
            break;
    }

    if (alimentoSeleccionado) {
        const nutrientes = alimentoSeleccionado.calcularNutrientes(cantidad);
        mostrarResultados(nutrientes);
    }
     
    // Validar que la cantidad no supere los 400
     if (cantidad > 400) {
        alert("La cantidad ingresada no puede ser mayor a 400.");
        return; // Salir de la función si la cantidad es mayor a 400
    }
}

// Define los objetivos del usuario (en este ejemplo, se definen valores objetivos para cada nutriente)
const objetivosUsuario = {
    calorias: 2000,
    proteinas: 50,
    carbohidratos: 250,
    grasas: 70
};

// Función para comparar los nutrientes consumidos con los objetivos del usuario
function compararNutrientesConsumidos(nutrientesConsumidos) {
    const feedback = {};

    // Compara cada nutriente con el objetivo del usuario
    for (const nutriente in nutrientesConsumidos) {
        if (nutrientesConsumidos[nutriente] > objetivosUsuario[nutriente]) {
            feedback[nutriente] = "Estás excediendo el objetivo.";
        } else if (nutrientesConsumidos[nutriente] < objetivosUsuario[nutriente]) {
            feedback[nutriente] = "Te estás quedando corto del objetivo.";
        } else {
            feedback[nutriente] = "Estás dentro del rango deseado.";
        }
    }

    return feedback;
}

// Función para mostrar resultados en la tabla
function mostrarResultados(nutrientes) {
    const cuerpoResultados = document.getElementById("cuerpo-resultados");
    cuerpoResultados.innerHTML = ""; // Borra resultados previos

    for (const nutriente in nutrientes) {
        const fila = document.createElement("tr");
        const celdaNutriente = document.createElement("td");
        celdaNutriente.textContent = nutriente.charAt(0).toUpperCase() + nutriente.slice(1); // Capitaliza la primera letra
        const celdaCantidad = document.createElement("td");
        celdaCantidad.textContent = nutrientes[nutriente].toFixed(2); // Muestra dos decimales
        fila.appendChild(celdaNutriente);
        fila.appendChild(celdaCantidad);
        cuerpoResultados.appendChild(fila);
    }

    const feedbackNutrientes = compararNutrientesConsumidos(nutrientes);
    mostrarFeedback(feedbackNutrientes);

    document.getElementById("resultados").classList.remove("oculto");
}

// Función para mostrar el feedback en la interfaz
function mostrarFeedback(feedback) {
    const feedbackList = document.getElementById("feedback-list");
    feedbackList.innerHTML = ""; // Limpiar feedback previo

    for (const nutriente in feedback) {
        const item = document.createElement("li");
        item.textContent = `${nutriente.charAt(0).toUpperCase() + nutriente.slice(1)}: ${feedback[nutriente]}`;
        feedbackList.appendChild(item);
    }

    document.getElementById("feedback").classList.remove("oculto");
}

// Función para sugerir correcciones de URL rotas
function suggestCorrection() {
    const errorMessage = document.getElementById("error-message");
    const brokenLink = document.getElementById("broken-link");
    
    if (!brokenLink.href || brokenLink.href === window.location.href) {
        errorMessage.textContent = "El enlace está perdido. Por favor, corrige el enlace para evitar errores.";
    } 
  }

  document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("myVideo");
    var playPauseBtn = document.getElementById("playPauseBtn");
    var stopBtn = document.getElementById("stopBtn");
    var forwardBtn = document.getElementById("forwardBtn");
    var backwardBtn = document.getElementById("backwardBtn");

    playPauseBtn.addEventListener("click", function() {
        if (video.paused)
            video.play();
        else
            video.pause();
    });

    stopBtn.addEventListener("click", function() {
        video.pause();
        video.currentTime = 0;
    });

    forwardBtn.addEventListener("click", function() {
        video.currentTime += 10;
    });

    backwardBtn.addEventListener("click", function() {
        video.currentTime -= 10;
    });
});


