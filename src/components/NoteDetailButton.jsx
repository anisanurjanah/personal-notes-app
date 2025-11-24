import React from 'react';
import PropTypes from 'prop-types';
import { FiArchive } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';

function NoteDetailButton({ id, onDelete, onArchive }) {
    return (
        <div className="detail-page__action">
            <div className="add-new-page__action">
                <button className='action' onClick={() => onArchive(id)}><FiArchive /></button>
                <button className='action' onClick={() => onDelete(id)}><FiTrash2 /></button>
            </div>
        </div>
    )
}

NoteDetailButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
}

export default NoteDetailButton;