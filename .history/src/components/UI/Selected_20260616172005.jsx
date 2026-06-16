import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import axios from 'axios';


const Selected = () => {
    const [select, setSelect] = useState(null)

    useEffect(() => {
        const fetchSelect = async () => {
            try{
                const { data } = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected`)
                setSelect(Array.isArray(data) ? data[0] : data);
            } catch (error) {
                console.error("Error fetching book:", error);
            }
        }
        fetchSelect();
    }, []);

    if(!select) return <div>Loading.</div>;

    return (
        <>
     <audio src={select.audioLink}></audio>
     <Link to={`/book/${book.id}`} className="selected__book">
                 <div className="selected__book--sub-title">
                    {select.subTitle}
                 </div>
                 <div className="selected__book--line"></div>
                 <div className="selected__book--content">
                   <figure className="book__image--wrapper">
                    <img className="book__image" src={select.imageLink} alt="book" />
                   </figure>
                   <div className="selected__book--text">
                    <div className="selected__book--title">
                        {select.title}
                    </div>
                    <div className="selected__book--author">
                        {select.author}
                    </div>
                    <div className="selected__book--duration-wrapper">
                      <div className="selected__book--icon">
                        <FontAwesomeIcon icon="circle-play" />
                      </div>
                      <div className="selected__book--duration">
                        3 mins 23 secs
                      </div>
                    </div>
                   </div>
                 </div>
                </Link>
                </>
    )
}

export default Selected;