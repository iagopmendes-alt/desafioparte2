function celsiusParaFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

let temps = [0, 25, 100];

temps.forEach(function(c) {
  alert(c + " °C = " + celsiusParaFahrenheit(c) + " °F");
});
