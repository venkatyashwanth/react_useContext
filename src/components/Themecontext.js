
import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext();
const ThemeupdateContext = React.createContext();

export function useTheme(){
    return useContext(ThemeContext)
}

export function useThemeUpdate(){
    return useContext(ThemeupdateContext)
}

export function ThemeProvider({ children }) {
    const [darkTheme, setdarkTheme] = useState(true);

    function toggleTheme() {
        setdarkTheme(prevDarkTheme => !prevDarkTheme)
    }
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeupdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeupdateContext.Provider>
        </ThemeContext.Provider>
    )

}

