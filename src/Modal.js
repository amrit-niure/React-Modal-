import React from 'react'
import './Modal.css'
function Modal({onClick}) {
    
    return (
        <div className='modal-container'>
            <div className="modal">
                <div className="top"> <p className='cross' onClick={onClick}>&times;</p></div>
                <div className="content">
                    <label htmlFor="input" className='label'>Add the Task</label>
                    <textarea rows={5} className='input' />
                </div>
                <div className="bottom"><button className='btn btn-add'  onClick={onClick}>Add</button>
                    <button className='btn btn-cancel'  onClick={onClick}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
