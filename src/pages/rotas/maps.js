import React, { useRef, useEffect, useState } from 'react'
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
// import './maps.css';

export default function Map() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng] = useState(-46.625290)
  const [lat] = useState(-23.533773)
  const [zoom] = useState(7)
  const [API_KEY] = useState('tJWZz9FTXVwqutKaBfmz')

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-48.625290,-24.533773])
      .addTo(map.current);
      new maplibregl.Marker({color: "#FFF000"})
      .setLngLat([-46.625290,-23.533773])
      .addTo(map.current);
      new maplibregl.Marker({color: "#000"})
      .setLngLat([-47.625290,-23.833773])
      .addTo(map.current);
  });

  return (
    <div className='map-wrap' style={{ position: 'relative', width: '90%', height: 'calc(80vh)', display: 'flex', margin: '0 auto', marginBottom:'5%' }}>
      <div ref={mapContainer} className='map' style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '8px' }} />
    </div>
  )
}
