import { useContext, createContext } from "react";
import { forumData } from "../data/forumData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{ forumData }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);