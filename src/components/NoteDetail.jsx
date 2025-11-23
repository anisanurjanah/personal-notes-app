import React from 'react';
import PropType from 'prop-types';
import { showFormattedDate } from '../utils/index.js';

function NoteDetail({ title, createdAt, body }) {
  return (
    <div className="detail-page">
        <h2 className="detail-page__title">{title}</h2>
        <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
        <p className="detail-page__body">{body}</p>
    </div>
  );
}

NoteDetail.prototype = {
    title: PropType.string.isRequired,
    createdAt: PropType.string.isRequired,
    body: PropType.string.isRequired
};

export default NoteDetail;
