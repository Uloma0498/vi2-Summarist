import React, { createContext, useContext, useState } from 'react';

// Create the Subscription Context
const SubscriptionContext = createContext();


export const SubscriptionProvider = ({ children }) => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    return (
        <SubscriptionContext.Provider value={{ selectedPlan, setSelectedPlan }}>
            {children}
        </SubscriptionContext.Provider>
    );
};

// Create a custom hook to use the Subscription Context
export const useSubscription = () => useContext(SubscriptionContext);
