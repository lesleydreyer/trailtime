import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
//import { GOOGLE_API_KEY } from '../../../config';
const myKey = `${process.env.REACT_APP_GOOGLE_API_KEY}`;

const mapStyles = {
    width: '100%',
    height: '100%',
    background: 'yellow'
};

export class TrailMap extends Component {
    state = {
        lat: null,//40.7128,
        lng: null,//-74.0060,
        isLoading: false,
        error: null,
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };
    /*
        componentDidMount() {
            this.setState({ isLoading: true });
            const { trail } = this.props;
            const location = JSON.stringify(trail.trailLocation);//console.log(location.type);//object, use JSON.stringify() to convert it into a string serialisation first, then apply .replace, then convert back using JSON.parse() if sending back
            const geoLocation = location.replace(' ', '+');//replace spaces with + to look like address=123+Main+Street,+New York,+NY
            this.setState({ selectedPlace: { name: trail.trailName } })
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${geoLocation}&key=${GOOGLE_API_KEY}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong');
                    }
                })
                .then(data => this.setState({
                    lat: data.results[0].geometry.location.lat,
                    lng: data.results[0].geometry.location.lng,
                    isLoading: false
                }))
                .catch(error => this.setState({ error, isLoading: false }));
        }*/

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        const { lat, lng, isLoading, error, selectedPlace, activeMarker, showingInfoWindow, onClose } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (<h3 style={mapStyles}>map off temporarily to limit api calls</h3>)

        /*return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{ lat: lat, lng: lng }}>
                    <Marker
                        onClick={this.onMarkerClick}
                        name={selectedPlace.name}
                    />
                    <InfoWindow
                        marker={activeMarker}
                        visible={showingInfoWindow}
                        onClose={onClose}
                    >
                        <div>
                            <h4>{selectedPlace.name}</h4>
                        </div>
                    </InfoWindow>
                </ Map>
            </div>
        );*/
    }
}

export default GoogleApiWrapper({
    apiKey: myKey
})(TrailMap);