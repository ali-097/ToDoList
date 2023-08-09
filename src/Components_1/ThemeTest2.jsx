import React, {useContext} from "react"
// import { Theme } from "./App"

const ThemeTest2 = () => {
    const darkTheme = useContext(Theme)
    const styles = {
        backgroundColor: darkTheme ? 'Green': 'blue',
        color: 'Red'
    }
    return (
        <div style={styles}>
            <h1>Background should also change here</h1>
        </div>
    )
}

export default ThemeTest2;