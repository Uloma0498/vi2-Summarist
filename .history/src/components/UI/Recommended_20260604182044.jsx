import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import axios from 'axios';


const Recommended = () => {
    const [select, setSelect] = useState(null)

    useEffect(() => {
        const fetchSelect = async () => {
            try{
                const { data } = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected`)
                setSelect(data);
            } catch (error) {
                console.error("Error fetching book:", error);
            }
        }
        fetchSelect();
    }, []);

    if(!select) return <div>Loading.</div>;

    return (
     <div className="for-you__title">
        Recommended 
     </div>
    )
}

export default Recommended;