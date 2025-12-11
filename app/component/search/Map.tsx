"use client";
import { ListingCardItem, SearchResultData } from "@/@types";
import { useState } from "react";
import { getCenter } from "geolib";
import MapGL, { Marker, Popup } from "react-map-gl";
import { LocateIcon } from "lucide-react";
const Map = ({ searchResultData }: { searchResultData: SearchResultData }) => {
  const [selectedLocation, setSelectedLocation] =
    useState<ListingCardItem | null>(null);

  const coordiantes = searchResultData.map((listing) => ({
    longitude: listing.long,
    latitude: listing.lat,
  }));

  const center = getCenter(coordiantes) as {
    longitude: number;
    latitude: number;
  };

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    zoom: 11,
    longitude: center.longitude,
    latitude: center.latitude,
  });
  return (
    <MapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/standard"
      mapboxApiAccessToken="pk.eyJ1joia2FyZWVtMjAwMnNoaW1lcyIsImEiOiJjbDluYWkwMDAwMThqM3JuemUxn0a4dnYxIn0.x50lsqY7UshPMY1isILJZg"
      onMouseMove={(nextViewport) =>
        setViewport((prev) => {
          return {
            ...prev,
            longitude: nextViewport.clientX,
            latitude: nextViewport.clientY,
          };
        })
      }
    >
      {searchResultData.map((listing) => (
        <div key={listing.long}>
          <Marker longitude={listing.long} latitude={listing.lat}>
            <div
              onClick={() => setSelectedLocation(listing)}
              className="animate-bounce"
            >
              <LocateIcon />
            </div>
          </Marker>
          {selectedLocation?.long === listing.long ? (
            <Popup
              closeOnClick={false}
              onClose={() => setSelectedLocation(null)}
              longitude={listing.long}
              latitude={listing.lat}
            >
              {listing.title}
            </Popup>
          ) : null}
        </div>
      ))}
    </MapGL>
  );
};

export default Map;
