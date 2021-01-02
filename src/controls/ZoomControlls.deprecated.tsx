import { useContext } from "react";
import MapContext from "../context/mapContext";

interface Props {}

const ZoomControlls = ({}: Props) => {
  const { map } = useContext(MapContext);

  const zoomOut = (zoomType: "zoomOut" | "zoomIn") => () => {
    console.log("zooom", map);
    if (map === null) return;
    var view = map.getView();
    console.log("zoom out");
    var zoom = view.getZoom();
    if (zoomType === "zoomIn") {
      view.setZoom(zoom! + 1);
    } else {
      view.setZoom(zoom! - 1);
    }
  };
  return (
    <div>
      <button onClick={zoomOut("zoomOut")}> zoomOut</button>
      <button onClick={zoomOut("zoomIn")}> zoomIn</button>
    </div>
  );
};

export default ZoomControlls;
