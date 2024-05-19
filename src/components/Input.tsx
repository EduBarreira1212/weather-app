import { useRef, useState } from "react";
import getGeoCoding from "../services/getGeoCoding";

const Input = () => {

    const cityRef = useRef<HTMLInputElement>(null)

    const [city, setCity] = useState("");

    const handleClick = async () => {
        setCity(cityRef.current?.value || "");
        const cityGeoCode = await getGeoCoding(city);
    }
    return(
        <div>
            <label>Insert a city</label>
            <input ref={cityRef} type='text' placeholder='Ex: London'/>
            <button onClick={handleClick}>Search</button>
        </div>
    );
}

export default Input;