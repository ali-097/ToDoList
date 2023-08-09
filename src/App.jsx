import React, {useState, useRef, createContext, useReducer} from 'react'
import Button from './Components_1/Button'
import ThemeTest from './Components_1/ThemeTest';
import ThemeTest2 from './Components_1/ThemeTest2';

// function App() {
//   const [show, setShow] = useState(false)
  
//   const showText = () => setShow(true)
//   const hideText = () => setShow(false)

//   return (
//     <div className="main--branch">  
//       <div style={show ? {display:"block"}: {display:"none"}} className='overlay'>
//         <h1>Overlay Text</h1>
//         <button onClick={hideText}>Turn off text</button>
//       </div>
//       <h1>Example Heading</h1>
//       <p>Some random text to display on the screen that spans atleast two rows. More text because text has yet to
//         reach the second row. Font size can be adjusted but i want to style it so that the two rows can be further
//         expanded into more than 2 rows.
//       </p>
//       {/* <button>Show Text</button> */}
//       <Button showText={showText}/>
//     </div>
//   )
// }

// const App = () => {
//   const [start, setStart] = useState(null)
//   const [now, setNow] = useState(null)
//   const timeRef = useRef(null)

//   const startTime = () => {
//     if (!timeRef.current)
//     {  setStart(Date.now())
//       setNow(Date.now())
//       timeRef.current = setInterval(() => {
//         setNow(Date.now())
//       }, 10)
//     }
//   }

//   let timePassed = 0

//   if (start != null && now != null) {
//     timePassed = (now - start) / 1000
//   }

//   const stopTime = () => {
//     clearInterval(timeRef.current)
//     timeRef.current = null
//   }

//   const resetTimer = () => {
//     setStart(null)
//     setNow(null)
//     clearInterval(timeRef.current)
//     timeRef.current = null
//   }
 
//   return (
//     <div style={{textAlign:'center'}}>
//       <h2>Time Passed: {timePassed.toFixed(3)}</h2>
//       <button onClick={startTime}>Start</button>
//       <button onClick={stopTime}>Stop</button>
//       <button onClick={resetTimer}>Rest</button>
//     </div>
//   )
// }

// export const Theme = createContext()

// const App = () => {
//   const [darkTheme, setDarkTheme] = useState(false);
//   const toggleTheme = () => {
//     setDarkTheme(oldTheme => !oldTheme)
//   }

//   return (
//     <div style={{textAlign:"center"}}>
//       <Theme.Provider value={darkTheme}>
//         <button onClick={toggleTheme}>Click</button>
//         <ThemeTest />
//         <ThemeTest2 />
//       </Theme.Provider>
//     </div>
//   )
// }

const ACTIONS = {
  INC: 'increment',
  DEC: 'decrement'
}

const countDispatcher = (state, action) => {
  switch (action.type) {
    case ACTIONS.INC:
      return {count: state.count + 1}
    case ACTIONS.DEC:
      return {count : state.count === 0 ? state.count : state.count - 1}
    default:
      return state
  }

}

const App = () => {
  const [state, dispatch] = useReducer(countDispatcher, {count: 0})
  return (
    <div style={{display:'flex', gap:'50px', justifyContent:'center'}}>
      <button onClick={() => dispatch({type: ACTIONS.INC}, state)}>+</button>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type: ACTIONS.DEC}, state)}>-</button>
    </div>
  )
}

export default App;
