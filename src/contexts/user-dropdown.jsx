import { createContext, useEffect, useState } from "react";

export const UserDropdownContext = createContext({
  isUserDropdownOpen: false,
  setIsUserDropdownOpen: () => false,
});


export const CategoriesProvider = ({children}) => {
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

    const value = {isUserDropdownOpen, setIsUserDropdownOpen};

    return <UserDropdownContext.Provider value={value} >{children}</UserDropdownContext.Provider>
}

