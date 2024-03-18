function convert(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('valorConvertido').textContent = 'Temperatura em Fahreinheit: ' + fahrenheit;
}

document.getElementById('convertButton').addEventListener('click', function() {
    var celsius = document.getElementById('celsiusInput').value;
    convert(celsius);
});