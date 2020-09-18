import React, { useEffect, useRef } from 'react'
import NotesAppBar from './NotesAppBar'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../action/notes';

const NoteScreen = () => {

    const dispatch = useDispatch();
    const {active:note} = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);
    const {id, body,title} = formValues;

    const activeId = useRef(note.id);

    useEffect(() => {
        if( note.id !== activeId.current ){
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset])

    useEffect(() => {
        dispatch(activeNote(id, {...formValues}))
    }, [formValues, dispatch])

    const handleDelete = e => {
        dispatch(startDeleting( id ));
    }

    return (
        <div className="notes__main-content">
            
            <NotesAppBar />
            
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome"
                    name="body"
                    className="notes__title-input"
                    value={body}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    name="title"
                    className="notes__textarea"
                    value={title}
                    onChange={handleInputChange}
                >

                </textarea>
                {
                    note.url &&
                    <div className="notes__image">
                        <img 
                            src={note.url}
                            alt="imagen"
                            />
                    </div>
                }
            </div>

                <button
                    className="btn btn-danger"
                    onClick={handleDelete}
                >

                </button>

        </div>
    )
}

export default NoteScreen
