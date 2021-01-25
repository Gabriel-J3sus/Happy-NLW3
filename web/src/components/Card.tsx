import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { FiTrash } from 'react-icons/fi';
import { HiOutlinePencil } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';

import api from '../services/api';

import mapIcon from '../utils/mapIcon';
import '../styles/components/Card.css';
import { ArrowRightButton } from './Buttons';

interface Card {
    latitude: number;
    longitude: number;
    title: string;
    id: number;
    url: string;
}

function Card({ latitude, longitude, title, id, url }: Card) {
    const history = useHistory();

    async function handleDelete(id: number) {
        try {
            api.delete(`orphanage/${id}`);

            history.push(`/orphanages/delete/${url}`);
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente.');
        }
    }
   
    return (
        <div className="card">
            <Map 
                center={[latitude, longitude]}
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

                <Marker interactive={false} icon={mapIcon} position={[latitude, longitude]}/>
            </Map>
                        
            <footer>
                <h2>{title}</h2>

                <div className="buttons">
                    {url === "orphanages" ? (
                        <>
                            <button className="edit">
                                <HiOutlinePencil size={24} color="#15C3D6"/>
                            </button>
                        
                            <button className="delete" onClick={() => handleDelete(id)}>
                                <FiTrash size={24} color="#15C3D6" />
                            </button>
                        </>
                    ) : (
                        
                        <ArrowRightButton go="#" buttonClass="pending-details" color="#15C3D6" iconSize={24} />
                    )}


                </div>
            </footer>
        </div>    
        
    );
}
  
export default Card;