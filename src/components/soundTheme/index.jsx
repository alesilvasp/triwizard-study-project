import { useEffect, useRef } from "react";
import themeHarry from "../../sounds/Harry-Potter.ogg";
import "./styles.css";

function ThemeSound() {
  let audio = useRef();

  useEffect(() => {
    audio.current = new Audio(themeHarry);
    audio.current.play();
    audio.current.loop = true;
  }, []);

  useEffect(() => {
    return () => {
      audio.current.pause();
    };
  }, []);

  return (
    <div className="musicControl">
      <button onClick={() => audio.current.play()}>Play</button>
      <button onClick={() => audio.current.pause()}>Pause</button>
    </div>
  );
}

export default ThemeSound;
