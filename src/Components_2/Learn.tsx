import React, {useState, ChangeEvent, useEffect} from 'react'
import NotesArea from './NotesArea'
import './Learn.css'

interface Task {
    task: string;
    completed: boolean;
}

const Learn = () => {
    const [notes, setNotes] = useState<Task[]>([])
    const [currentNote, setCurrentNote] = useState("")

    function handleNoteText(event: ChangeEvent<HTMLTextAreaElement>) {
        setCurrentNote(event.target.value)
    }

    function addNote(): void {
        if (currentNote !== "")
            setNotes([...notes, {task: currentNote, completed: false}])
        setCurrentNote("")
    }

    function deleteNote(id: number): void {
        setNotes(oldNotes => {
            const updatedNotes = [...oldNotes];
            updatedNotes.splice(id, 1);
            return updatedNotes;
        });
    }

    function markComplete(id: number) {
        setNotes(oldNotes => oldNotes.map((note, index) => {
            return index === id ? {...note, completed: !note.completed} : note
        }))
    }
    console.log(notes)
    const notesElements = notes.map((note, index) => {
        return <NotesArea 
                    key={index}
                    id={index} 
                    note={note.task} 
                    completed={note.completed}
                    deleteNote={() => deleteNote(index)} 
                    markComplete={() => markComplete(index)}/>
    })

    return (
        <>
            <div className='header'>
                <h1 className='header--text'>To do List</h1>
            </div>
            <div className='note--adder'>
                <textarea 
                    className="note--text" 
                    onChange={event => handleNoteText(event)} 
                    value={currentNote}>
                </textarea>
                <button 
                    className='button-58' 
                    onClick={addNote} 
                >Add Note</button>
            </div>
            <div>{notesElements}</div>
        </>
    )
}

export default Learn;
