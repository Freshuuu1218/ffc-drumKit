import DrumPad from "./DrumPad";
import drums from "./drums";
function playAudio(url, name) {
  let audio = new Audio(url).play();
  audio.volume = 0.1;
  document.getElementById("soundName").innerHTML = name;
}

document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "q":
      playAudio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        "Heater-1"
      );

      break;
    case "w":
      playAudio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        "Heater-2"
      );
      break;
    case "e":
      playAudio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        "Heater-3"
      );
      break;
    case "a":
      playAudio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        "Heater-4_1"
      );
      break;
    case "s":
      playAudio(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        "Heater-6"
      );
      break;
    case "d":
      playAudio(
        "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        "Dsc_Oh"
      );
      break;
    case "z":
      playAudio(
        "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        "Kick_n_Hat"
      );
      break;
    case "x":
      playAudio(
        "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        "RP4_KICK_1"
      );
      break;
    case "c":
      playAudio(
        "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        "Cev_H2"
      );
      break;
    default:
      break;
  }
});
function DrumPads(props) {
  const getName = (name) => props.finalName(name);
  return (
    <div id="display">
      {drums.map((drum) => {
        return (
          <DrumPad
            key={drum.id}
            letter={drum.letter}
            sound={drum.sound}
            getName={getName}
            name={drum.name}
          />
        );
      })}
    </div>
  );
}

export default DrumPads;
