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
        Bro
     </div>
     <div className="for-you__recommended--books">
      {suggested.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </div>
     </>
    )
}

export default Suggested;