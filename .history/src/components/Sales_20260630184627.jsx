import React from "react";
import pricing from "../assets/pricing-top.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sales = () => {
    return (
        <div className="wrapper wrapper__full">
         <div className="plan">
          <div className="plan__header--wrapper">
            <div className="plan__header">
              <div className="plan__title">
                Get unlimited access to many amazing books to read
              </div>
              <div className="plan__sub--title">
                Turn ordinary moments into amazing learning opportunities
              </div>
              <figure className="plan__img--mask">
                <img src={pricing} alt="pricing" />
              </figure>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="plan__features--wrapper">
                <div className="plan__features">
                 <figure className="plan__features--icon">
                  <FontAwesomeIcon icon="file" />
                 </figure>
                 <div className="plan__features--text">
                  <b>Key ideas in a few minutes</b> with many books to read
                 </div>
                </div>
                <div className="plan__features">
                 <figure className="plan__features--icon">
                  <FontAwesomeIcon icon="leaf" />
                 </figure>
                 <div className="plan__features--text">
                  <b>3 million</b> people growing with Summarist everyday
                 </div>
                </div>
                <div className="plan__features">
                 <figure className="plan__features--icon">
                  <FontAwesomeIcon icon="Handshake" />
                 </figure>
                 <div className="plan__features--text">
                  <b>Precise recommendations</b> collections curated by experts
                 </div>
                </div>
              </div>
              <div className="section__title">
                Choose the plan that fits you
              </div>
              <div className="plan__card">
               <div className="plan__card--circle"></div>
               
              </div>
            </div>
          </div>
         </div>
        </div>
    )
}