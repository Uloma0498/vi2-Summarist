import React from "react";
import pricing from "../assets/pricing-top.png"

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
              <figure className="">
                <img src={pricing} alt="pricing" />
              </figure>
            </div>
          </div>
         </div>
        </div>
    )
}