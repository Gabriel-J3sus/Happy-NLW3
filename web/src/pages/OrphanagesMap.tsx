import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

import { useAuth } from '../contexts/auth'; 
import '../styles/pages/orphanages-map.css';
import { ArrowLeftButton, ArrowRightButton, PlusButton } from '../components/Buttons';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap() {
    const { signed, user } = useAuth();

    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    
    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000
            }
        )
    }, [])

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map 
                center={[latitude, longitude]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v4/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            
                {orphanages.map(orphanage => {
                    return (
                        <Marker 
                            key={orphanage.id}
                            icon={mapIcon}
                            position={[orphanage.latitude,orphanage.longitude]}         
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {orphanage.name}
                                
                                <ArrowRightButton go={`/orphanages/${orphanage.id}`} buttonClass="" iconSize={20} color="#FFF"/>
                            </Popup>
                        </Marker>
                    );
                })}                
            </Map>
            
            {/*if user is signed*/}
            <ArrowLeftButton go={signed ? `/${user?.name}/orphanages` : "/"} buttonClass="return-to-landing" iconSize={32} color="#FFF"/>
            
            {/*if user is signed*/}
            <PlusButton go={signed ? "/orphanages/create" : "/login"} buttonClass="create-orphanage" iconSize={32} color="#FFF"/>
        </div>
    );
}

export default OrphanagesMap;