// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to handle the conversion and update the result
function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const resultElement = document.getElementById("result");

    if (celsiusInput.value === "") {
        resultElement.textContent = "Please enter a temperature.";
    } else {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = celsiusToFahrenheit(celsius);
        resultElement.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    }
}

// Attach the conversion function to the button click event
const convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", convertTemperature);
