import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />
            
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome"
                    className="notes__title-input"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                >

                </textarea>

                <div className="notes__image">
                    <img 
                        src="https://avatars0.githubusercontent.com/u/22355035?s=80"
                        alt="imagen"
                    />
                </div>
            </div>


        </div>
    )
}

export default NoteScreen
