import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Book from "./Book";


const Suggested = () => {
    const [suggested, setSuggested] = useState(null)

    useEffect(() => {
        const fetchSuggested = async () => {
            try{
                const { data } = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested`)
                setSuggested(data);
            } catch (error) {
                console.error("Error fetching book:", error);
            }
        }
        fetchSuggested();
    }, []);

    if(!suggested) return <div>Loading.</div>;

    return (
     <>
     <div className="for-you__title">
        Suggested Books
     </div>
     <div className="for-you__sub--title">
        Browse those books
     </div>
     <div className="for-you__recommended--books">
      {suggested.map((book) => (
        <div className="book" key={book.id}>
        <Book book={book} />
        {book.subscriptionRequired && (
         <span className="premium-pill">Premium</span> 
     )}
        </div>
      ))}
    </div>
     </>
    )
}

export default Suggested;