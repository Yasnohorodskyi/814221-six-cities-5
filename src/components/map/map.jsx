import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";

const icon = leaflet.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [30, 30],
});

const ACTIVE_ICON = {
  iconUrl: `/img/pin-active.svg`,
  iconSize: [27, 39],
};

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._markers = {};
  }

  componentDidMount() {
    const offer = this.props.offers[0];
    const city = offer.cityCoordinates;
    const zoom = offer.cityZoom;
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

    this._handleMapCenterSet();
    this._handleMarkersRender();
    this._handleActiveMarkerRender();
  }

  componentDidUpdate() {
    this._handleMarkersRemove();
    this._handleMapCenterSet();
    this._handleMarkersRender();
    this._handleActiveMarkerRender();
  }

  _handleMapCenterSet() {
    const offer = this.props.offers[0];
    const city = offer.cityCoordinates;
    const zoom = offer.cityZoom;

    this._map.setView(city, zoom);
  }

  _handleMarkersRender() {
    let markers = [];
    this.props.offers.forEach((elem) => {
      const marker = leaflet.marker(elem.locationCoordinates, {icon});
      this._markers[elem.id] = marker;
      markers.push(marker);

      this._markersLayer = leaflet.layerGroup(markers);
      this._markersLayer.addTo(this._map);
    });
  }

  _handleActiveMarkerRender() {
    const {activeItem} = this.props;
    if (!activeItem) {
      return;
    }
    if (this._markers[activeItem] !== undefined) {
      this._markers[activeItem].setIcon(leaflet.icon(ACTIVE_ICON));
    }
  }

  _handleMarkersRemove() {
    this._markersLayer.clearLayers();
    this._markersLayer = null;
    this._markers = {};
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
  activeItem: PropTypes.number,
};

export default Map;
