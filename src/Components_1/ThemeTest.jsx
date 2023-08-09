import React, {useContext} from "react"
// import { Theme } from "./App"

const ThemeTest = () => {
    const darkTheme = useContext(Theme)
    const styles = {
        backgroundColor: darkTheme ? 'black': 'white',
        color: 'Blue'
    }
    return (
        <div style={styles}>
            <h1>Background should change here</h1>
        </div>
    )
}

export default ThemeTest;