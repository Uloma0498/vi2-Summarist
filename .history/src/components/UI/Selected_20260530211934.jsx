import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Selected = () => {
    const [selectId, setSelectId] = useState()

    useEffect(() => {
        const fetchSelectId = async () => {
            try{
                const { data } = await axios.get()
            }
        }
    })
    return (
     <a className="selected__book" href="/">
                 <div className="selected__book--sub-title">
                    How Constant Innovation Creates Radically Successful Businesses
                 </div>
                 <div className="selected__book--line"></div>
                 <div className="selected__book--content">
                   <figure className="book__image--wrapper">
                    <img className="book__image" src="" alt="book">
                    </img>
                   </figure>
                   <div className="selected__book--text">
                    <div className="selected__book--title">
                        The Lean Startup
                    </div>
                    <div className="selected__book--author">
                        Eric Ries
                    </div>
                    <div className="selected__book--duration-wrapper">
                      <div className="selected__book--icon">
                        <FontAwesomeIcon icon="circleplay" />
                      </div>
                      <div className="selected__book--duration">
                        3 mins 23 secs
                      </div>
                    </div>
                   </div>
                 </div>
                </a>
    )
}

export default Selected;