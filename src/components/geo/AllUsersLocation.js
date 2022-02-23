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

export default class AllUsersLocation extends Component {
  state = {
    lat: 9.7749,
    lng: -122.4194,
    zoom: 2,
  };
  render() {
    return this.props.users ? (
      <MapContainer
        center={[this.state.lat, this.state.lng]}
        zoom={this.state.zoom}
        style={{ width: "100%", height: "900px" }}
      >
        <TileLayer
          attribution='&copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {this.props.users.map((user) => {
          const point = [user?.address?.geo?.lat, user?.address?.geo?.lng];

          return (
            <Marker position={point} key={user.phone}>
              <Popup>
                <span>Name: {user.name}</span>
                <br />
                <span>Email: {user.email}</span>
                <br />
                <span>Phone: {user.phone}</span>
                <br />
                <span>City: {user?.address?.city} </span>
                <br />
                <span>
                  Addres: {user?.address?.street}, {user?.address?.city} -
                  {user?.address?.zipcode}
                </span>
                <br />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    ) : (
      "Data is loading..."
    );
  }
}
