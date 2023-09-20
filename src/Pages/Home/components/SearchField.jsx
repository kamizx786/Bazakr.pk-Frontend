import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";

const libraries = ["places", "geocode", "geoLocation", "geospatial"];
const SearchField = ({ values, setValues }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google_map_autocomplete",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries,
  });

  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = React.useCallback(function callback(autocompleteInstance) {
    setAutocomplete(autocompleteInstance);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setAutocomplete(null);
  }, []);
  let location = {};
  const onPlaceChanged = () => {
    const place = autocomplete.getPlace();

    if (!place.geometry || !place.geometry.location) {
      return;
    }
    location = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
      formattedAddress: place.formatted_address,
    };
    setValues({
      mapAddress: location.formattedAddress,
      location: {
        lng: location.lng,
        lat: location.lat,
      },
    });
  };

  return (
    <Autocomplete
      onLoad={onLoad}
      onPlaceChanged={onPlaceChanged}
      onUnmount={onUnmount}
      fields={["address_components", "geometry.location", "formatted_address"]}
      className="cursor-pointer"
      options={{ componentRestrictions: { country: "pk" } }} // Restrict to Pakistan
    >
      <input
        type="search"
        placeholder="Enter Location From Map"
        className="my-2 focus:border-none text-[#248f59] font-semibold focus:outline-none focus:ring-2 font-sans focus:ring-green-600 h-16 w-[18.4375rem]  md:w-[23.4375rem] px-3 border-2 rounded-lg border-[#D9D9D9]"
      />
    </Autocomplete>
  );
};
export default SearchField;
