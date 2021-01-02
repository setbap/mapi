import { useRef, useState, useEffect, FC } from "react";
// import "./Map.css";
import MapContext from "./mapContext";
import * as ol from "ol";

const Map: FC<{ zoom: number; center: any }> = ({ children, zoom, center }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<ol.Map | null>(null);
  // on component mount
  useEffect(() => {
    let options = {
      view: new ol.View({ zoom, center }),
      layers: [],
      controls: [],
      overlays: [],
    };
    let mapObject = new ol.Map(options);
    // @ts-ignore
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);
    return () => mapObject.setTarget(undefined);
  }, [zoom]);
  // zoom change handler
  useEffect(() => {
    if (map === null) return;
    else map.getView().setZoom(zoom);
  }, [zoom]);
  // center change handler
  useEffect(() => {
    if (!map) return;
    map.getView().setCenter(center);
  }, [center]);
  return (
    <MapContext.Provider value={{ map }}>
      <div ref={mapRef} className="absolute top-0 bottom-0 left-0 right-0">
        {children}
      </div>
    </MapContext.Provider>
  );
};
export default Map;
