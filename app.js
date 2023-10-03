// Get references to the input fields and result display
const celsiusInput = document.getElementById('celsiusInput');
const fahrenheitInput = document.getElementById('fahrenheitInput');
const resultDisplay = document.getElementById('result');

// Function to convert Fahrenheit to Celsius
function convertToCelsius() {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        resultDisplay.innerText = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
    }
}

// Function to convert Celsius to Fahrenheit
function convertToFahrenheit() {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        resultDisplay.innerText = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    }
}

// Attach click event listeners to the conversion buttons
document.getElementById('convertToCelsiusBtn').addEventListener('click', convertToCelsius);
document.getElementById('convertToFahrenheitBtn').addEventListener('click', convertToFahrenheit);
