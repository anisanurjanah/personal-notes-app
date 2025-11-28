import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/network-data.js';

import NoteDetail from '../components/NoteDetail.jsx';
import NoteDetailButton from '../components/NoteDetailButton.jsx';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
      setLoading(false);
    });
  }, []);

  async function onDeleteHandler(id) {
    await deleteNote(id);
    navigate('/');
  }

  async function onArchiveHandler(id) {
    await archiveNote(id);
    navigate('/archives');
  }

  async function onUnarchiveHandler(id) {
    await unarchiveNote(id);
    const { data } = await getNote(id);
    setNote(data);
  }

  if (loading) return <p>Loading...</p>;
  if (!note) return <p>Note is not found!</p>;

  return (
    <section>
      <NoteDetail {...note} />
      <NoteDetailButton
        id={id}
        archived={note.archived}
        onArchive={onArchiveHandler}
        onUnarchive={onUnarchiveHandler}
        onDelete={onDeleteHandler}
      />
    </section>
  );
}

export default DetailPage;
