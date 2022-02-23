import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default class UserLocation extends Component {
  state = {
    lat: 5.7749,
    lng: -100.4194,
    zoom: -1,
  };

  render() {
    const { user } = this.props;
    return (
      <MapContainer
        center={[this.state.lat, this.state.lng]}
        zoom={this.state.zoom}
        style={{ width: "100%", height: "250px" }}
      >
        <TileLayer
          attribution='&copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[
            user?.address?.geo?.lat ? user?.address?.geo?.lat : 0,
            user?.address?.geo?.lng ? user?.address?.geo?.lng : 0,
          ]}
        >
          <Popup>
            <span>Name: {user.name}</span>
            <br />
            <span>
              Location: {user?.address?.street}, {user?.address?.city} -
              {user?.address?.zipcode}
            </span>
            <br />
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}
