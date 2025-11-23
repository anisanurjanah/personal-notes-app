import React from 'react';
import PropType from 'prop-types';

function NoteItem({title, createdAt, body}) {
    return (
        <div className="note-item">
            <h2 className="note-item__title">{title}</h2>
            <p className="note-item__createdAt">{createdAt}</p>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

NoteItem.prototype = {
    title: PropType.string.isRequired,
    createdAt: PropType.string.isRequired,
    body: PropType.string.isRequired
};

export default NoteItem;
