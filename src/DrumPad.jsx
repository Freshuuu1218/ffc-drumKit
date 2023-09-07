function DrumPad(props) {
  function playSound() {
    var audio = document.getElementById(props.letter);
    audio.play();
    props.getName(props.name);
  }

  return (
    <div className="drum-pad" onClick={playSound} id={props.name}>
      {props.letter}
      <audio
        src={props.sound}
        id={props.letter}
        volume="0.2"
        className="clip"
      />
    </div>
  );
}

export default DrumPad;
