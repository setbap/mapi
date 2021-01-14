import React, { useState } from "react";
// import "./App.css";
import "ol/ol.css";
import TileLayer from "../../layers/TileLayer";
import VectorLayer from "../../layers/VectorLayer";
import Layers from "../../layers/Layers";
// import { osm, vector } from "./Source";
import Controls from "../../controls/Controls";
import * as olSource from "ol/source";
// import { Vector } from "ol/source";
import ZoomControlls from "../../controls/ZoomControlls";
import DistanceControl from "../../controls/DistanceControl";
import { AnimatePresence, motion } from "framer-motion";
import Interaction from "../../interaction/Interaction";
import PointIntraction from "../../interaction/PointIntraction";
const bing = new olSource.BingMaps({
  key: "As5lCJ8HFDctXz0rIwzvRo8UEQMxXgJQICk4_1FdR6VWhCV9vxx27Mx4tCLFjxLn",
  imagerySet: "AerialWithLabelsOnDemand",
  // use maxZoom 19 to see stretched tiles instead of the BingMaps
  // "no photos at this zoom level" tiles
  // maxZoom: 19
});
const osm = new olSource.OSM({});

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);
// const vectorSource = new Vector();

const Content = () => {
  const [showLayer1, setShowLayer1] = useState(false);
  const [showLayer2, setShowLayer2] = useState(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [mapType, setMapType] = useState<{ type: "osm" | "bing" }>({
    type: "osm",
  });
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <>
      <Layers>
        <Layers>
          {mapType.type === "osm" && <TileLayer source={osm} zIndex={0} />}
          {mapType.type === "bing" && <TileLayer source={bing} zIndex={0} />}
          {showLayer2 && (
            <TileLayer
              source={
                new olSource.TileWMS({
                  url: "http://10.18.8.12:8080/geoserver/Mazandaran/wms",
                  params: {
                    LAYERS: "Mazandaran:landfills",
                    TILED: true,
                  },
                  serverType: "geoserver",
                  transition: 0,
                })
              }
              zIndex={0}
            />
          )}
          {showLayer1 && (
            <TileLayer
              source={
                new olSource.TileWMS({
                  url: "http://10.18.8.12:8080/geoserver/Mazandaran/wms",
                  params: {
                    LAYERS:
                      "Mazandaran:tabaghebandiMahdoodeMojazMahdoodiatHIGH",
                    TILED: true,
                  },
                  serverType: "geoserver",
                  transition: 0,
                })
              }
              zIndex={0}
            />
          )}

          {/* <VectorLayer
              source={
                new Vector({
                  features: new GeoJSON().readFeatures(geojsonObject2, {
                    featureProjection: get("EPSG:3857"),
                  }),
                })
              }
              style={styles.MultiPolygon}
            />
           */}
        </Layers>
        <Controls>
          {/* <FullScreenControl /> */}
          <DistanceControl />
          <ZoomControlls />
          {/* <MousePositionControl /> */}
        </Controls>
        <Interaction>
          <PointIntraction />
        </Interaction>
      </Layers>

      <motion.div
        initial={{
          borderRadius: 10,
          clipPath: "circle(140.7% at 88% 90%)",
          scale: 1,
          transformOrigin: "bottom right",
        }}
        animate={menuOpen ? "open" : "closed"}
        variants={{
          closed: {
            clipPath: "circle(10% at 85% 87.5%)",
            scale: 1.3,
            transformOrigin: "bottom right",
          },
          open: { clipPath: "circle(140.7% at 88% 90%)", scale: 1 },
        }}
        transition={{ type: "tween" }}
        style={{ direction: "rtl" }}
        className="absolute bottom-4 z-50 overflow-hidden  w-48 bg-white right-4 border-2 border-orange-400 rounded-lg"
      >
        {/* <AnimatePresence>
          {menuOpen && ( */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <div>
            <label className="flex justify-between m-4 items-center">
              <span>سختگیرانه</span>
              <input
                type="checkbox"
                checked={showLayer1}
                onChange={(event) => setShowLayer1(event.target.checked)}
              />
            </label>
          </div>
          <div>
            <label className="flex justify-between m-4 items-center">
              <span>لنفیلد</span>
              <input
                type="checkbox"
                checked={showLayer2}
                onChange={(event) => setShowLayer2(event.target.checked)}
              />
            </label>
          </div>
          <div className="flex flex-row ">
            <motion.div
              layout
              onClick={() => {
                setMapType({ type: "osm" });
              }}
              className={`relative flex-1 p-2 m-1 rounded-2xl text-center`}
            >
              osm
              {mapType.type === "osm" && (
                <motion.div
                  className="absolute top-0 left-0 w-full h-full border-2 rounded-2xl"
                  layoutId="outline"
                  animate={{
                    borderColor: "orange",
                    backgroundColor: "#aa540030",
                  }}
                  initial={false}
                />
              )}
            </motion.div>
            <motion.div
              layout
              onClick={() => {
                setMapType({ type: "bing" });
              }}
              className={`flex-1 p-2 m-1 rounded-2xl text-center relative`}
            >
              bing
              {mapType.type === "bing" && (
                <motion.div
                  className="absolute top-0 left-0 w-full h-full border-2 rounded-2xl"
                  layoutId="outline"
                  animate={{
                    borderColor: "green",
                    backgroundColor: "#00f00030",
                  }}
                  initial={false}
                />
              )}
            </motion.div>
          </div>
          <div className="flex flex-row text-center border-b border-orange-400">
            <div>لایه ها</div>
          </div>
        </motion.div>
        {/* )}
        </AnimatePresence> */}
        <motion.div
          onClick={() => {
            setMenuOpen((v) => !v);
          }}
          variants={{
            open: { width: "100%", margin: "0.8 rem" },
            closed: { width: 40, margin: "0.5 rem" },
          }}
          className="p-3 m-1 text-center w-full"
        >
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
              initial={{ d: "M 3 16.5 L 17 2.5" }}
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              initial={{ opacity: 1 }}
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={transition}
            />
            <Path
              initial={{ d: "M 3 2.5 L 17 16.346" }}
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
};
export default Content;
