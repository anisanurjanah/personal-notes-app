import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { addNote } from '../utils/local-data.js';
import { addNote } from '../utils/network-data.js';
import NoteInput from '../components/NoteInput.jsx';

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate('/');
  }

  return (
    <section>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}

export default AddPage;