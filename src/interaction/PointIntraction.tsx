import { fromLonLat } from "ol/proj";
import { toStringHDMS } from "ol/coordinate";
import { toLonLat } from "ol/proj";

import { useContext, useEffect } from "react";
import MapContext from "../context/mapContext";

interface Props {}

const PointIntraction = ({}: Props) => {
  const { map } = useContext(MapContext);
  useEffect(() => {
    if (!map) return () => {};
    console.log("map");
    map.on("singleclick", function (evt) {
      const coordinate = evt.coordinate;
      const x = map.getOverlays().getArray()[0];
      if (typeof x.getElement() !== "undefined") {
        x.getElement()!.querySelector("div#popup-content")!.innerHTML =
          "<p>شما در این نقطه کلیک کردید</p>";
        x.setPosition(coordinate);
      }
    });
  }, [map]);
  return <></>;
};

export default PointIntraction;
