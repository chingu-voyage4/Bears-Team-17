import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    ref           = {props.mapLoaded}
    defaultZoom   = {props.zoom}
    defaultCenter = {props.center}
    onClick       = {props.onClick}
    onDragEnd     = {props.onDragEnd}
    onZoomChanged = {props.onZoomChanged}

  >
    {<Marker position={{ lat:42.3140089,lng:-71.2504676 }} />}
</GoogleMap>
))

class MyGoogleMap extends React.Component {

  render () {
    return (
      <div className='mapstyle'>
      <MyMapComponent
         center    = {this.props.center}
         zoom      = {this.props.zoom}
         onClick   = {this.props.onClick}
         onDragEnd = {this.props.onDragEnd}
         mapLoaded = {this.props.mapLoaded}
         onZoomChanged = {this.props.onZoomChanged}


  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBij0qVsowrc-HUBsX_MZyy2nwCVmJkNvg&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}

         />
      </div>
    )
  }
}

export default MyGoogleMap;
