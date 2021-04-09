/* 1. Cuando se hace clic en el botón "Establecer alarma", obtenga el valor del campo de entrada
2. Cuando tenga el valor del campo de entrada, establezca el título en el valor correcto
3. Descubra cómo actualizar el título "Tiempo restante" cada segundo
4. Cuando el tiempo restante sea 0, reproduce el sonido de la alarma
 */

let alarma = 0


function setAlarm() {
  
  let segundos = document.getElementById("alarmSet").value;
  let time = document.getElementById("timeRemaining");
  clearInterval(alarma)


    
    alarma = setInterval(() => {
      if (segundos === 0) {
        time.innerText = "Time Remaining 00:0" + segundos
        playAlarm()
        clearInterval(alarma)
        segundos --
      } else if (segundos >= 10) {
        time.innerText = "Time Remaining 00:" + segundos
        segundos--
      } else {
        time.innerText = "Time Remaining 00:0" + segundos
        segundos--
      }
    }, 1000);
  
}




  // DO NOT EDIT BELOW HERE

  var audio = new Audio("alarmsound.mp3");

  function setup() {
    document.getElementById("set").addEventListener("click", () => {
      setAlarm();
    });

    document.getElementById("stop").addEventListener("click", () => {
      pauseAlarm();
    });
  }

  function playAlarm() {
    audio.play();
  }

  function pauseAlarm() {
    audio.pause();
  }

  window.onload = setup;