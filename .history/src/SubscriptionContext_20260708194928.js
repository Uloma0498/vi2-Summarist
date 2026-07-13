import React, { createContext, useContext, useState } from 'react';

const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    return (
        <SubscriptionContext.Provider value={{ selectedPlan, setSelectedPlan }}>
            {children}
        </SubscriptionContext.Provider>
    );
};


export const useSubscription = () => useContext(SubscriptionContext);
