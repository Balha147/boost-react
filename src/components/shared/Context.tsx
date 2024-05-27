import React, { createContext, useContext, useState, ReactNode } from 'react';

// Créer le contexte
interface AppContextType {
    showStockedOnly: boolean;
    setShowStockedOnly: (value: boolean) => void;
    search: string;
    setSearch: (value: string) => void;
    price: number;
    setPrice: (value: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}

// Créer le fournisseur du contexte
interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [showStockedOnly, setShowStockedOnly] = useState(false);
    const [search, setSearch] = useState("");
    const [price, setPrice] = useState(0);

    return (
        <AppContext.Provider value={{ showStockedOnly,
        setShowStockedOnly,
        search,
        setSearch,
        price,
        setPrice }}>
            {children}
        </AppContext.Provider>
    );
}
