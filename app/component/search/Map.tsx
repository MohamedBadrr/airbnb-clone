"use client";

import { useMemo, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

import { ListingCardItem, SearchResultData } from "@/@types";
import { LocateIcon } from "lucide-react";
import { getCenter } from "geolib";

type MapProps = {
  searchResultData: SearchResultData;
};

const SearchMap: React.FC<MapProps> = ({ searchResultData }) => {
  const [selectedLocation, setSelectedLocation] =
    useState<ListingCardItem | null>(null);

  const center = useMemo(() => {
    if (!searchResultData.length) {
      return {
        longitude: 31.2357,
        latitude: 30.0444,
      };
    }

    const coordinates = searchResultData.map((listing) => ({
      longitude: listing.long,
      latitude: listing.lat,
    }));

    const centerPoint = getCenter(coordinates);

    if (!centerPoint) {
      return {
        longitude: coordinates[0].longitude,
        latitude: coordinates[0].latitude,
      };
    }

    return {
      longitude: centerPoint.longitude,
      latitude: centerPoint.latitude,
    };
  }, [searchResultData]);

  return (
    <div className="h-[calc(100vh-80px)] w-full rounded-xl overflow-hidden">
      <Map
        initialViewState={{
          longitude: center.longitude,
          latitude: center.latitude,
          zoom: 11,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      >
        {searchResultData.map((listing) => (
          <Marker
            key={`${listing.long}-${listing.lat}-${listing.title}`}
            longitude={listing.long}
            latitude={listing.lat}
            anchor="bottom"
          >
            <button
              type="button"
              onClick={() => setSelectedLocation(listing)}
              className="flex items-center justify-center rounded-full bg-white shadow-md p-1 hover:scale-110 transition-transform"
            >
              <LocateIcon className="h-5 w-5" />
            </button>
          </Marker>
        ))}

        {selectedLocation && (
          <Popup
            longitude={selectedLocation.long}
            latitude={selectedLocation.lat}
            anchor="top"
            closeOnClick={false}
            onClose={() => setSelectedLocation(null)}
          >
            <div className="text-sm">
              <p className="font-semibold">{selectedLocation.title}</p>
              <p className="text-xs text-gray-500">
                {selectedLocation.location}
              </p>
              <p className="mt-1 text-xs">{selectedLocation.price}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default SearchMap;
