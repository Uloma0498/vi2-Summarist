import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useRef } from "react";
import Navlogo from "../assets/logo.png";
import Selected from "../components/UI/Selected";
import Recommended from "../components/UI/Recommended";
import Suggested from "../components/UI/Suggested";
import SidebarDesktop from "../components/UI/SidebarDesktop";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom'
import SearchInput from "../components/UI/SearchInput";
import SignIn from "../components/UI/SignIn";



const BookDetails = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [bookDetails, setBookDetails] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const sidebarRef = useRef(null);


  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get (`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${bookId}`);
        setBookDetails(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    }
    if (bookId) {
      fetchBookDetails();
    }
  }, [bookId]);

  const handleReadClick = () => {
    if (isLoggedIn) {
      navigate(`/player/${bookId}`);
    } else {
      setShowAuthModal(true);
    }
  };

  const handleListenClick = () => {
    if (isLoggedIn) {
      navigate(`/player/${bookId}`);
    } else {
      setShowAuthModal(true);
    }
  }

  const closeModal = () => {
    setShowAuthModal(false);
  }

  const toggleMenu =() => {
    setSidebarOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section id="_next">
      <div className="wrapper">
        <SidebarDesktop />
        <div className="search__background">
          <div className="search__wrapper">
            <div className="search__content">
              <SearchInput />
              <button className="sidebar__toggle--btn" onClick={toggleMenu}>
                <FontAwesomeIcon icon="bars" />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`sidebar__overlay ${isSidebarOpen ? "sidebar__overlay--visible" : "sidebar__overlay--hidden"}`}
        >
          <div
            className={`sidebar sidebar-mobile ${isSidebarOpen ? "sidebar--open" : "sidebar--closed"}`}
            ref={sidebarRef}
          >
            <div className="sidebar__logo">
              <img
                src={Navlogo}
                alt="Logo"
                className="nav__img nav__img--mask"
              />
            </div>
            <div className="sidebar__wrapper">
              <div className="sidebar__top">
                <a className="sidebar__link--wrapper" href="/for-you">
                  <div className="sidebar__link--line active--tab"></div>
                  <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon icon="house" />
                  </div>
                  <div className="sidebar__link--text">For you</div>
                </a>
                <a className="sidebar__link--wrapper" href="/library">
                  <div className="sidebar__link--line"></div>
                  <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon icon="bookmark" />
                  </div>
                  <div className="sidebar__link--text">My Library</div>
                </a>
                <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                  <div className="sidebar__link--line active--tab"></div>
                  <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon icon="pen-clip" />
                  </div>
                  <div className="sidebar__link--text">Highlights</div>
                </div>
                <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                  <div className="sidebar__link--line"></div>
                  <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon icon="magnifying-glass" />
                  </div>
                  <div className="sidebar__link--text">Search</div>
                </div>
              </div>
              <div className="sidebar__bottom">
                <a className="sidebar__link--wrapper" href="/settings">
                  <div className="sidebar__link--line"></div>
                  <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon icon="gear" />
                  </div>
                  <div className="sidebar__link--text">Settings</div>
                </a>
                <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                  <div className="sidebar__link--line"></div>
                  <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon icon="circle-question" />
                  </div>
                  <div className="sidebar__link--text">Help & Support</div>
                </div>
                <div className="sidebar__link--wrapper">
                  <div className="sidebar__link--line"></div>
                  <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon icon="arrow-right-from-bracket" />
                  </div>
                  <div className="sidebar__link--text">Logout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="container">
            {bookDetails ? (
                <div className="inner__wrapper">
                 <div className="inner__book">
                  <div className="inner-book__title">
                    {bookDetails.title} {bookDetails.subscriptionRequired && (
         <div>(Premium)</div>)}
                  </div>
                  <div className="inner-book__author">
                    {bookDetails.author}
              </div>
              <div className="inner-book__sub--title">
                {bookDetails.subTitle}
              </div>
              <div className="inner-book__wrapper">
                <div className="inner-book__description--wrapper">
                 <div className="inner-book__description">
                  <div className="inner-book__icon">
                    <FontAwesomeIcon icon="star" />
                    <div className="inner-book__overall--rating">
                     {bookDetails.averageRating}
                    </div>
                    <div className="inner-book__total--rating">
                     ({bookDetails.totalRating} ratings)
                   </div>
                  </div>
                 </div>
                 <div className="inner-book__description">
                  <div className="inner-book__icon">
                    <FontAwesomeIcon icon="clock" />
                    <div className="inner-book__duration">
                     03:24
                    </div>
                  </div>
                 </div>
                 <div className="inner-book__description">
                  <div className="inner-book__icon">
                    <FontAwesomeIcon icon="microphone" />
                    <div className="inner-book__type">
                     {bookDetails.type}
                    </div>
                  </div>
                 </div>
                 <div className="inner-book__description">
                  <div className="inner-book__icon">
                    <FontAwesomeIcon icon="lightbulb" />
                    <div className="inner-book__key--ideas">
                     ({bookDetails.keyIdeas} Key Ideas)
                    </div>
                  </div>
                 </div>
                </div>
              </div>
            <div className="inner-book__read--btn-wrapper">
             <button className="inner-book__read--btn" onClick={handleReadClick}>
             <div className="inner-book__read--icon">
                <FontAwesomeIcon icon="bookopen" />
             </div>
             <div className="inner-book__read--text">Read</div>
             </button>
             <button className="inner-book__read--btn" onClick={handleListenClick}>
             <div className="inner-book__read--icon">
                <FontAwesomeIcon icon="microphone" />
             </div>
             <div className="inner-book__read--text">Listen</div>
             </button>
            </div>
            <div className="inner-book__bookmark">
             <div className="inner-book__bookmark--icon">
                <FontAwesomeIcon icon="bookmark" />
             </div>
             <div className="inner-book__bookmark--text">
              Add title to My Library
             </div>
            </div>
            <div className="inner-book__secondary--title">
             What's it about?
            </div>
            <div className="inner-book__tags--wrapper">
             <div className="inner-book__tag">
              Communication Skills
             </div>
             <div className="inner-book__tag">
              Technology & the Future
             </div>
            </div>
            <div className="inner-book__book--description">
             {bookDetails.bookDescription}
            </div>
            <h2 className="inner-book__secondary--title">
             About the author
            </h2>
            <div className="inner-book__author--description">
             {bookDetails.authorDescription}
            </div>
          </div>
          <div className="inner-book--image-wrapper">
            <figure height={200} width={200} minWidth={200}>
             <img className="book__image" src={bookDetails.imageLink} alt="Book Cover" />
            </figure>
          </div>
        </div>
            ) : (
              <div>Loading...</div>
            )} 
        </div>
      </div>
      </div>
      {showAuthModal && (
        <div className="auth-modal-overlay">
          <SignIn  />
        </div>
      )}
    </section>
  );
};

export default BookDetails;