import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { FiTrash } from 'react-icons/fi';
import { HiOutlinePencil } from 'react-icons/hi';

import mapIcon from '../utils/mapIcon';
import '../styles/components/Card.css';

interface Card {
    latitude?: number;
    longitude?: number;
    
    title?: string;
}

function Card({ title, latitude, longitude }: Card) {
    return (
        <div className="card">
            <Map 
                center={[latitude as number, longitude as number]}
                zoom={16}
                style={{ width: '100%', height: '100%', borderRadius: 20, borderWidth: 2, borderStyle: "solid", borderColor: '#D3E2E5' }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
            >
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v4/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                <Marker interactive={false} icon={mapIcon} position={[latitude as number, longitude as number]}/>
            </Map>
                        
            <footer>
                <h2>{title}</h2>

                <div className="buttons">
                    <button className="edit">
                        <HiOutlinePencil size={24} color="#15C3D6"/>
                    </button>
                    <button className="delete">
                        <FiTrash size={24} color="#15C3D6" />
                    </button>
                </div>
            </footer>
        </div>    
        
    );
}
  
export default Card;