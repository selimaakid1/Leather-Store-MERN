
import React, { Component } from 'react'
import { GoogleMap, Map, GoogleApiWrapper, withScriptjs, withGoogleMap, Marker } from "react-google-maps"


export const WrappedMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 35.829300, lng: 10.640630 }}
    >
        {/* {props.isMarkerShown &&  */}
        <Marker position={{ lat: 35.89239, lng: 10.59434 }} />
    </GoogleMap>
))