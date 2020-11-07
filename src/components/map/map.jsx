import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";

const icon = leaflet.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [30, 30],
});

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const city = [52.38333, 4.9];
    const zoom = 12;
    this._map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true,
    });

    this._map.setView(city, zoom);
    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
          }
      )
      .addTo(this._map);

    let markers = [];
    this.props.offers.forEach((elem) => {
      const marker = leaflet.marker(elem.coordinates, {icon});
      markers.push(marker);

      this._markersLayer = leaflet.layerGroup(markers);
      this._markersLayer.addTo(this._map);
    });
  }

  componentDidUpdate() {
    this._markersLayer.clearLayers();
    this._markersLayer = null;

    let markers = [];
    this.props.offers.forEach((elem) => {
      const marker = leaflet.marker(elem.coordinates, {icon});
      markers.push(marker);

      this._markersLayer = leaflet.layerGroup(markers);
      this._markersLayer.addTo(this._map);
    });
  }
  render() {
    return (
      <React.Fragment>
        <div id="map" style={{width: `100%`, height: `100%`}}></div>
      </React.Fragment>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default Map;
