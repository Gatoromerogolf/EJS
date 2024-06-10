
// Crear el canvas para el velocímetro
const opts = {
    angle: -0.3,
// The span of the gauge arc
    lineWidth: 0.2, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
        color: '#000000' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6F6EA0',   // Colors
    colorStop: '#C0C0DB',    // just experiment with them
    strokeColor: '#EEEEEE',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support

    // Custom segment colors
    staticZones: [
       {strokeStyle: "red", min: 0, max: 50}, // Red from 0 to 50
       {strokeStyle: "yellow", min: 50, max: 75}, // Yellow from 50 to 75
       {strokeStyle: "blue", min: 75, max: 100}  // Blue from 75 to 100
    ],

    staticLabels: {
        font: "10px sans-serif",  // Specifies font
        labels: [0, 50, 75, 100],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
    },
};

const target = document.getElementById('gaugeChart'); // your canvas element
const gauge = new Gauge(target).setOptions(opts); // create gauge!
gauge.maxValue = 100; // set max gauge value
gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 32; // set animation speed (32 is default value)
gauge.set(50); // set actual value

// Función para actualizar el valor del velocímetro
function updateGauge(value) {
    gauge.set(value);
}

// Ejemplo de actualización del valor del velocímetro a 80
updateGauge(80);
