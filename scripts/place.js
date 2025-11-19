document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

const temp = 15;
const wind = 12;

document.getElementById("temp").textContent = temp;
document.getElementById("wind").textContent = wind;

function calculateWindChill(t, w) {

  if (t <= 10 && w > 4.8) {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(w, 0.16) + 0.3965 * t * Math.pow(w, 0.16);
  } else {
    return null;
  }
}

const windChill = calculateWindChill(temp, wind);
document.getElementById("windchill").textContent = windChill ? windChill.toFixed(1) + " °C" : "N/A";