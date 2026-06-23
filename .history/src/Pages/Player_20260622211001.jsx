
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useRef } from "react";
import Navlogo from "../assets/logo.png";
import Selected from "../components/UI/Selected";
import Recommended from "../components/UI/Recommended";
import Suggested from "../components/UI/Suggested";
import SidebarDesktop from "../components/UI/SidebarDesktop";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/init'
import SearchInput from "../components/UI/SearchInput";
import SignIn from "../components/UI/SignIn";
    

const Player = () => {
      const { bookId } = useParams();
      const navigate = useNavigate();
      const [isSidebarOpen, setSidebarOpen] = useState(false);
      const [bookDetails, setBookDetails] = useState(null);
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [showAuthModal, setShowAuthModal] = useState(false);
      const sidebarRef = useRef(null);
    
    
      useEffect(() => {
        // listen for firebase auth state changes so we know if user is logged in
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setIsLoggedIn(!!user);
        });
    
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
    
        return () => unsubscribe();
      }, [bookId]);

    
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
            <div className="summary">
              <div className="audio__book--summary">
             {bookDetails ? (
                  <div className="audio__book--summary-title">{bookDetails.title}</div>
                  <div className="audio__book--summary-text">{bookDetails.summary}</div>

                        ) : (
                          <div>Loading...</div>
                        )}
              </div>
              <div className="audio__wrapper">
                <audio controls>
                  <source src={bookDetails.audioUrl} type="audio/mpeg" />
                </audio>
                <div className="audio__track--wrapper">
                 <figure className="audio__"
                </div>
              </div>
            </div>
            </div>
            </section>
            )
}

export default Player;
