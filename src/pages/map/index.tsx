import React, { useState } from "react";
// import "./App.css";
import "ol/ol.css";
import Map from "../../context/Map";
import TileLayer from "../../layers/TileLayer";
import VectorLayer from "../../layers/VectorLayer";
import Layers from "../../layers/Layers";
import { Fill, Stroke, Style } from "ol/style";
// import { osm, vector } from "./Source";
import { fromLonLat, get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import Controls from "../../controls/Controls";
import FullScreenControl from "../../controls/FullScreenControl";
import * as olSource from "ol/source";
import { Vector } from "ol/source";
import ZoomControlls from "../../controls/ZoomControlls";
import DistanceControl from "../../controls/DistanceControl";
import MousePositionControl from "../../controls/MousePositionControlls";
import Interaction from "../../interaction/Interaction";
import PointIntraction from "../../interaction/PointIntraction";
import { motion } from "framer-motion";

const osm = new olSource.OSM({
  attributions: `© <a href="https://www.openstreetmap.org/copyright">`,
});
let styles = {
  MultiPolygon: new Style({
    stroke: new Stroke({
      color: "blue",
      width: 1,
    }),
    fill: new Fill({
      color: "rgba(0, 0, 255, 0.1)",
    }),
  }),
};
const geojsonObject = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        kind: "county",
        name: "Wyandotte",
        state: "KS",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [-94.8627, 39.202],
              [-94.901, 39.202],
              [-94.9065, 38.9884],
              [-94.8682, 39.0596],
              [-94.6053, 39.0432],
              [-94.6053, 39.1144],
              [-94.5998, 39.1582],
              [-94.7422, 39.1691],
              [-94.7751, 39.202],
              [-94.8627, 39.202],
            ],
          ],
        ],
      },
    },
  ],
};
const geojsonObject2 = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        kind: "county",
        name: "Johnson",
        state: "KS",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [-94.9065, 38.9884],
              [-95.0544, 38.9829],
              [-95.0544, 38.7365],
              [-94.9668, 38.7365],
              [-94.6108, 38.7365],
              [-94.6108, 38.846],
              [-94.6053, 39.0432],
              [-94.8682, 39.0596],
              [-94.9065, 38.9884],
            ],
          ],
        ],
      },
    },
  ],
};
const vectorSource = new Vector();

const App = () => {
  const [center] = useState([-94.9065, 38.9884]);
  const [zoom] = useState(9);
  const [showLayer1, setShowLayer1] = useState(true);
  const [showLayer2, setShowLayer2] = useState(true);
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.85,
      opacity: 0,
      transition: { ...transition, duration: 0.3 },
    },
  };
  return (
    <motion.div
      variants={thumbnailVariants}
      className="flex relative flex-1"
      initial="exit"
      animate="enter"
      exit="exit"
    >
      <Map center={fromLonLat(center)} zoom={zoom}>
        <Layers>
          <TileLayer source={osm} zIndex={0} />
          <VectorLayer
            source={vectorSource}
            style={styles.MultiPolygon}
            zIndex={1}
          />
          {showLayer1 && (
            <VectorLayer
              source={
                new Vector({
                  features: new GeoJSON().readFeatures(geojsonObject, {
                    featureProjection: get("EPSG:3857"),
                  }),
                })
              }
              style={styles.MultiPolygon}
            />
          )}
          {showLayer2 && (
            <VectorLayer
              source={
                new Vector({
                  features: new GeoJSON().readFeatures(geojsonObject2, {
                    featureProjection: get("EPSG:3857"),
                  }),
                })
              }
              style={styles.MultiPolygon}
            />
          )}
        </Layers>
        <Controls>
          <FullScreenControl />
          <DistanceControl />
          <ZoomControlls />
          <MousePositionControl />
        </Controls>
        <Interaction source={vectorSource}>
          <PointIntraction />
        </Interaction>
      </Map>
      <div className="absolute">
        <div>
          <input
            type="checkbox"
            checked={showLayer1}
            onChange={(event) => setShowLayer1(event.target.checked)}
          />{" "}
          Johnson County
        </div>
        <div>
          <input
            type="checkbox"
            checked={showLayer2}
            onChange={(event) => setShowLayer2(event.target.checked)}
          />{" "}
          Wyandotte County
        </div>
      </div>
    </motion.div>
  );
};
export default App;
