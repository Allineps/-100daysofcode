setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo2").innerHTML = d.toLocaleTimeString();
}