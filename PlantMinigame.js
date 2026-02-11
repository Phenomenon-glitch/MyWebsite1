// Dies ist ein minigame wo es um eine pflanze geht die gegossen wird. Es basiert darauf, 
//dass wenn man ein element mit der id "slime" clickt, das idle gif kurz auf ein action gif wechselt.
//Das muss drei mal gemacht werden um die nächste entwicklungsphase zu erreichen 
//(insgesamt geht das zwei mal). Danach ist das spiel beendet, man kann noch immer eine aktion ausführen,
//jedoch kommt es zu keiner entwicklung mehr.


// Element das angeklickt wird deklarieren
const slime = document.getElementById("slime");

// Jede entwicklungsphase hat ein idle und ein action attribut
const stages = [
  { idle: "Image/Plant1.gif", action: "Image/Plant2.gif" },
  { idle: "Image/Plant3.gif", action: "Image/Plant4.gif" },
  { idle: "Image/Slime1.gif", action: "Image/Slime2.gif" },
];

let stage = 0; 				//weiviele entwicklungsphase es gibt
let waterCount = 0;			//weioft eine aktion ausgeführt wurde
let isAnimating = false; 	//vermeide spam click mit bool
const duration = 2600;		//animation länge

//sicherstellen dass das richtige gif angezeigt wird
function updateSlime(src) 
{
  slime.src = src;
}

//image clickable
slime.addEventListener("click", () => 
{
  if (isAnimating) return;
  isAnimating = true; 

  // spiele action gif ab
  updateSlime(stages[stage].action);

  setTimeout(() => 
  {
    waterCount++;

    // Check ob es evolvieren soll
    if (waterCount >= 3) 
	{
	// neue entwicklungsphase
      waterCount = 0;
      stage++;

      if (stage < stages.length) {
        updateSlime(stages[stage].idle);
      } else {
        // letzte entwicklungsphase
        stage = stages.length - 1;
        updateSlime(stages[stage].idle);
      }
    } else {
      updateSlime(stages[stage].idle);
    }

    isAnimating = false;
  }, duration);
});

