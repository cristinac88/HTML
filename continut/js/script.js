window.setInterval(myTimer, 1000);

function Section01() {
  var url_add=window.location.href;
  document.getElementById("url").innerHTML="Locatia fisierului: " +url_add.toString();
  var location=window.navigator.geolocation;
 
  document.getElementById("browser_name").innerHTML = "Numele browser-ului: " + navigator.appName;
  document.getElementById("browser_version").innerHTML ="Versiunea browser-ului: "+ navigator.appVersion;
}

 function myTimer() {
    var d = new Date();
    document.getElementById("ora").innerHTML ="Ora: " +d.toLocaleTimeString();
    document.getElementById("data").innerHTML ="Data: " + d.toLocaleDateString();
  }

  function schimbaContinut(resursa, jsFisier, jsFunctie)
  {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById('continut').innerHTML = xhttp.responseText;
      if (jsFisier) {
        console.log(jsFisier);
        var elementScript = document.createElement('script');
        elementScript.onload = function () {
          console.log("hello");
          if (jsFunctie) {
            window[jsFunctie]();
          }
        };
        elementScript.src = jsFisier;
        document.head.appendChild(elementScript);
      } else {
        if (jsFunctie) {
          window[jsFunctie]();
        }
      }
      }
    };
    xhttp.open("GET", resursa+".html", true);
    xhttp.send();
    xhttp.setRequestHeader();
  }
