import { useEffect } from 'react'

const BMapGL: any = window.BMapGL;
const createMap = () => {
  const map = new BMapGL.Map("map-container");
  const centerPoint = new BMapGL.Point(116.404, 39.915);
  map.centerAndZoom(centerPoint, 15);
  return map;
}

const setMapControl = (map: any) => {
  let scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
  map.addControl(scaleCtrl);
  let zoomCtrl = new BMapGL.ZoomControl();  // 添加缩放控件
  map.addControl(zoomCtrl);
  // 添加城市列表控件
  let cityCtrl = new BMapGL.CityListControl({
    anchor: BMAP_ANCHOR_TOP_LEFT,
    offset: new BMapGL.Size(20, 10)
  });
  map.addControl(cityCtrl);
  let locationControl = new BMapGL.LocationControl({
    anchor: BMAP_ANCHOR_TOP_RIGHT,
    offset: new BMapGL.Size(20, 10)
  });
  map.addControl(locationControl);
}
const FootMarkMap = () => {
  // const mapHeight
  useEffect(() => {
    const map = createMap();
    setMapControl(map);
  });
  return (
    <div id='map-container' style={{ 'height': '85vh' }}></div>
  );
}


export { FootMarkMap }