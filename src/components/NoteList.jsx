import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({ notes, isArchive }) {
    return (
        <div className="notes-list">
            {
                notes.length > 0 ? (
                    notes.map((note) => (
                        <NoteItem
                            key={note.id}
                            {...note}
                        />
                    ))
                ) : (
                    <div className="notes-list-empty">
                        <p>{isArchive ? "No Archive." : "Empty Notes."}</p>
                    </div>
                )
            }
        </div>
    );
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    isArchive: PropTypes.bool,
};

NoteList.defaultProps = {
    isArchive: false,
};

export default NoteList;