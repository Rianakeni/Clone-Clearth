import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { HiMagnifyingGlass, HiMapPin, HiUser } from "react-icons/hi2";
import { DivIcon } from "leaflet";
import * as ReactDOMServer from "react-dom/server";
import { Link, useNavigate } from "react-router-dom";
// import Header from "../../components/layouts/Header";

export default function Map() {
    const [industry, setIndustry] = useState([]);
    const [currentLocation, setCurrentLocation] = useState({
        lat: 0,
        lon: 0
    });
    const mapRef = useRef(null);
    const navigate = useNavigate();

    const ResizeMap = () => {
        const map = useMap();
        map._onResize();
        return null;
    };

    const distance = (
        lat1,
        lon1, 
        lat2, 
        lon2
    ) => {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) *
                Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distance in km
        return d;
    };

    const deg2rad = (deg) => {
        return deg * (Math.PI / 180);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrentLocation({
                lat: position.coords.latitude,
                lon: position.coords.longitude
            });
        });
        try {
            // api.get("/industri").then(async (res) => {
            //     const sorted = res.data.data.sort((a, b) => {
            //         const distanceA = distance(
            //             currentLocation.lat,
            //             currentLocation.lon,
            //             a.coordinate.lat,
            //             a.coordinate.long
            //         );
            //         const distanceB = distance(
            //             currentLocation.lat,
            //             currentLocation.lon,
            //             b.coordinate.lat,
            //             b.coordinate.long
            //         );
            //         return distanceA - distanceB;
            //     });
            //     setIndustry(sorted);
            // });
        } catch (err) {
            console.log(err);
        }
    }, []);

    console.log(industry);

    const marker = new DivIcon({
        className: "marker",
        html: ReactDOMServer.renderToString(
            <HiMapPin className="text-4xl text-dark" />
        ),
        iconAnchor: [24, 24]
    });

    const getDistance = (
        lat1,
        lon1,
        lat2,
        lon2
    ) => {
        const distanceGap = distance(lat1, lon1, lat2, lon2);

        if (distanceGap > 99) {
            return ">99";
        }
        return distanceGap.toFixed(1);
    };

    return (
        <div className="w-screen h-screen">
            <MapContainer
                className="z-0 w-full h-full"
                center={[1.34693, 124.774998]}
                zoom={11}
                scrollWheelZoom={true}
                attributionControl={false}
                ref={mapRef}
            >
                <ResizeMap />
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {industry.map((item, index) => (
                    <Marker
                        key={index}
                        position={[
                            item.coordinate.lat,
                            item.coordinate.long
                        ]}
                        icon={marker}
                    >
                        <Popup>
                            <div
                                className="flex flex-col gap-1 cursor-pointer hover:scale-105 hover:text-blue-700 text-dark"
                                onClick={() =>
                                    navigate(`/industri/${item._id}`)
                                }
                            >
                                <div className="text-lg font-bold">
                                    {item.nama}
                                </div>
                                <div className="flex items-center">
                                    <HiUser className="text-lg" />
                                    <span className="ml-2">
                                        {item.pemilik}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <HiMapPin className="text-lg " />
                                    <span className="ml-2">
                                        {item.alamat}
                                    </span>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
            {/* <div className="absolute left-0 w-full -top-6">
                <Header />
            </div> */}
            <div className="absolute top-0 right-0 h-full p-8 w-[400px] pt-24">
                <div className="h-full p-4 bg-white rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-40">
                    <div className="flex flex-col gap-2 mt-4">
                        {industry.map((item, index) => (
                            <Link
                                to={`/industri/${item._id}`}
                                key={index}
                                className="flex items-center p-2 space-x-4 transition duration-300 ease-in-out cursor-pointer rounded-xl hover:bg-gray-300 hover:bg-opacity-25"
                            >
                                <div className="flex flex-col items-center justify-center rounded-full">
                                    <HiMapPin className="text-2xl text-dark" />
                                    <span>
                                        {getDistance(
                                            currentLocation.lat,
                                            currentLocation.lon,
                                            item.coordinate.lat,
                                            item.coordinate.long
                                        )}
                                        km
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-bold text-primary-500">
                                        {item.nama || "Null"}
                                    </div>
                                    <div className="text-sm">
                                        {item.alamat || "Null"}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}