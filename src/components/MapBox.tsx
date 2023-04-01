import 'mapbox-gl/dist/mapbox-gl.css';
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { ProductDataType } from '@/redux-toolkit/types';

mapboxgl.accessToken = import.meta.env.VITE_MapBox_AccessToken;

function MapBox({ address }: { address: ProductDataType["company"]["address"] }) {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const [lng, setLng] = useState(+address.longitude);
    const [lat, setLat] = useState(+address.latitude);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        const coords = [lng, lat]
        map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: coords as any,
            zoom: zoom
        });

        new mapboxgl.Marker().setLngLat(coords as any).addTo(map.current);
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(+map.current!.getCenter().lng.toFixed(4));
            setLat(+map.current!.getCenter().lat.toFixed(4));
            setZoom(+map.current!.getZoom().toFixed(2));
        });
    });
    return (
        <div ref={mapContainer} className="h-[300px]" />
    )
}

export default MapBox