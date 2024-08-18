import React, { useEffect, useState } from "react";
import { Howl, Howler } from "howler";

function RandomSound(props) {
  const [note, setNote] = useState(props.notePlayed);

  const makeNewSound = () => {
    let snd = new Howl({
      src: [`/sounds/${props.notePlayed}4.mp3`],
      volume: 0.5,
      playbackRate: 1,
      interrupt: true,
    });

    return snd;
  };

  useEffect(() => {
    const newSound = makeNewSound();
    newSound.play();
    setNote(newSound);
  }, []);

  return <div>RandomSound</div>;
}

export default RandomSound;
