import React from 'react'
import './NotesArea.css'

interface PropertiesStyle {
    id: number;
    note: string;
    completed: boolean;
    deleteNote: () => void;
    markComplete: () => void
}


const NotesArea = (props: PropertiesStyle) => {
  const color = props.completed === true ? '#DDDEE9' : '#088F8F'
  return (
    <div style={{display:"flex"}}>
      <div className='notes' onClick={props.markComplete} style={{backgroundColor: color}}>
        {props.note}
      </div>
      <button onClick={props.deleteNote} className='button-30'>Delete Note</button>
    </div>
  )
}

export default NotesArea