import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import axios from 'axios';


const Recommended = () => {
    const [recommended, setRecommended] = useState(null)

    useEffect(() => {
        const fetchRecommended = async () => {
            try{
                const { data } = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended`)
                setRecommended(data);
            } catch (error) {
                console.error("Error fetching book:", error);
            }
        }
        fetchRecommended();
    }, []);

    if(!recommended) return <div>Loading.</div>;

    return (
        <>
     <div className="for-you__title">
        Recommended For You
     </div>
     <div className="for-you__sub--title">
        We think you'll like these
     </div>
     <div className="for-you__recommended--books">
        <a className="for-you__recommended--books-link" href="/">
        <audio></audio>
        <figure className="book__image--wrapper">
            <img className="book__image" src={recommended.imageLink} alt="book" />
        </figure>
        <div className="recommended__book--title">
            {
        </div>
        </a>
     </div>
        </>
    )
}

export default Recommended;