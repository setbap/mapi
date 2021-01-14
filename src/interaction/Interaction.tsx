import { FC, useContext, useEffect } from "react";
import MapContext from "../context/mapContext";
import Draw from "ol/interaction/Draw";
import VectorSource from "ol/source/Vector";
import Geometry from "ol/geom/Geometry";

const PointInteraction: FC = ({ children }) => {
  return <>{children}</>;
};
export default PointInteraction;
