import { FC, useContext, useEffect } from "react";
import MapContext from "../context/mapContext";
import Draw from "ol/interaction/Draw";
import VectorSource from "ol/source/Vector";
import Geometry from "ol/geom/Geometry";
import GeometryType from "ol/geom/GeometryType";

const PointInteraction: FC<{ source: VectorSource<Geometry> }> = ({
  children,
  source,
}) => {
  const { map } = useContext(MapContext);
  useEffect(() => {
    if (!map) return () => {};
    const pointIntract = new Draw({
      source: source,
      type: GeometryType.CIRCLE,
    });
    map.getInteractions().on("add", (x) => {
      console.log(x);
    });
    map.addInteraction(pointIntract);
    return () => map.removeInteraction(pointIntract);
  }, [map]);
  return <>{children}</>;
};
export default PointInteraction;
