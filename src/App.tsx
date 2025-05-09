import { useEffect } from "react";
import autofit from "autofit.js";
import MapScene from "./components/map-scene";

const App = () => {
  useEffect(() => {
    autofit.init({
      dh: 1080,
      dw: 1920,
      el: "#large-screen",
      resize: true,
    });
  }, []);
  return (
    <div id="large-screen">
      <MapScene />
    </div>
  );
};

export default App;
