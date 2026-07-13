import React, { useState, useContext, createContext } from "react";
import pricing from "../assets/pricing-top.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
import { useAuth } from "../AuthContext";
import SignIn from "../components/UI/SignIn";
import { useSubscription } from './path/to/SubscriptionContext'

const Sales = () => {
  const { login, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedPlan, setSelectedPlan } = useSubscription();
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleLogin = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
    }

  const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

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
                  <FontAwesomeIcon icon="handshake" />
                 </figure>
                 <div className="plan__features--text">
                  <b>Precise recommendations</b> collections curated by experts
                 </div>
                </div>
              </div>
              <div className="section__title">
                Choose the plan that fits you
              </div>
              <div className="plan__card" onClick={() => handlePlanSelect("premiumPlus")}>
               <div className="plan__card--circle"></div>
               <div className="plan__card--content">
                <div className="plan__card--title">
                 Premium Plus Yearly
                </div>
                <div className="plan__card--price">
                 $99.99/year
                </div>
                <div className="plan__card--text">
                  7-day free trial included
                </div>
               </div>
              </div>
              <div className="plan__card--separator">
                <div className="plan__separator">
                or
                </div>
              </div>
              <div className="plan__card" onClick={() => handlePlanSelect("premiumMonthly")}>
               <div className="plan__card--circle"></div>
               <div className="plan__card--content">
                <div className="plan__card--title">
                 Premium Monthly
                </div>
                <div className="plan__card--price">
                 $9.99/month
                </div>
                <div className="plan__card--text">
                  No trial included
                </div>
               </div>
              </div>
              <div className="plan__card--cta">
                <span className="btn--wrapper">
                 <button className="btn" onClick={handleLogin}>
                  <span>{selectedPlan === "premiumPlus" ? "Start your free 7-day trial" : 
                                 selectedPlan === "premiumMonthly" ? "Start your first month" : 
                                 "Select a plan"}</span>
                 </button>
                 {isModalOpen && (
                     <SignIn onClose={closeModal} setIsOpen={setIsModalOpen} />
                   )}
                </span>
                <div className="plan__disclaimer">
                 {selectedPlan === "premiumPlus" ? "Cancel your trial at any time before it ends, and you won’t be charged." : selectedPlan === "premiumMonthly" ? "30-day money back guarantee, no questions asked." : ""}
                </div>
              </div>
              <div className="faq__wrapper">
                {[
                     {
                       question: "How does the free 7-day trial work?",
                       answer: "Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial.",
                     },
                     {
                       question: "Can I switch subscriptions from monthly to yearly, or yearly to monthly?",
                       answer: "While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.",
                     },
                    {
                       question: "What's included in the Premium plan?",
                       answer: "Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle.",
                     },
                     {
                       question: "Can I cancel during my trial or subscription?",
                       answer: "You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day.",
                     }].map((faq, index) => (
               <div className="accordion__card" key={index}>
                <div className="accordion__header" onClick={() => toggleAccordion(index)}>
                  <div className="accordion__title">
                    {faq.question}
                  </div>
                  <FontAwesomeIcon icon={openAccordion === index ? "angle-up" : "angle-down"} />
                </div>
                {openAccordion === index && ( // Conditional rendering for open accordion
                <div className="collapse show">
                 <div className="accordion__body">
                  {faq.answer}
                 </div>
                </div>
                )}
               </div>
                ))}
               </div>
              </div>
            </div>
          </div>
          <Footer />
         </div>
    )
}

export default Sales;