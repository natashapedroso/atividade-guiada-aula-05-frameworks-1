import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = ({ coordinates }) => {
  if (!coordinates) {
    return null;
  }

  const position = [
    Number(coordinates.lat),
    Number(coordinates.lng),
  ];

  if (
    !Number.isFinite(position[0]) ||
    !Number.isFinite(position[1])
  ) {
    return (
      <p>
        Não foi possível localizar o endereço no mapa.
      </p>
    );
  }

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={true}
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "12px",
        marginTop: "20px",
      }}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
        attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
      />

      <Marker position={position}>
        <Popup>
          Endereço encontrado
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;