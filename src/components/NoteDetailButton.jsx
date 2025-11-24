import React from 'react';
import PropTypes from 'prop-types';
import { FiArchive, FiTrash2, FiInbox } from 'react-icons/fi';

function NoteDetailButton({ id, archived, onDelete, onArchive, onUnarchive }) {
    return (
        <div className="detail-page__action">
            {archived ? (
                <button className="action" onClick={() => onUnarchive(id)}><FiInbox /></button>
            ) : (
                <button className="action" onClick={() => onArchive(id)}><FiArchive /></button>
            )}
            <button className="action" onClick={() => onDelete(id)}><FiTrash2 /></button>
        </div>
    )
}

NoteDetailButton.propTypes = {
    id: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired,
};

export default NoteDetailButton;