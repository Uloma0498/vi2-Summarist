import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Selected = () => {
    const { id } = useParams();
    const [select, setSelect] = useState(null)

    useEffect(() => {
        const fetchSelect = async () => {
            try{
                const { data } = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected&id=${id}`)
                setSelect(data);
            } catch (error) {
                console.error("Error fetching book:", error);
            }
        }
        fetchSelect();
    }, [id]);

    return (
     <audio src=""> 
    </audio>
     <a className="selected__book" href="/">
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
                        <FontAwesomeIcon icon="circleplay" />
                      </div>
                      <div className="selected__book--duration">
                        {select.duration}
                      </div>
                    </div>
                   </div>
                 </div>
                </a>
    )
}

export default Selected;