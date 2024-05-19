import { useRef } from "react";
import getGeoCoding from "../services/getGeoCoding";

const Input = () => {

    const cityRef = useRef<HTMLInputElement>(null)

    const handleClick = async () => {
        const cityGeoCode = await getGeoCoding(cityRef.current?.value || "");
        console.log(cityGeoCode);
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