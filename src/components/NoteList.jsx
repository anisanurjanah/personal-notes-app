import React from 'react';
import PropTypes, { func } from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({notes}) {
    return (
        <div className="notes-list">
            {
                notes.length > 0 ? (
                    notes.map((note) => (
                        <NoteItem
                        key={note.id}
                        {...note} />
                    ))
                ) : (
                    <div className="notes-list-empty">
                        <p>Tidak ada catatan.</p>
                    </div>
                )
            }
        </div>
    );
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NoteList;