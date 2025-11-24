import React from 'react';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data.js';
import { useParams, useNavigate } from 'react-router-dom';

import NoteDetail from '../components/NoteDetail.jsx';
import NoteDetailButton from '../components/NoteDetailButton.jsx';

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id)
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const { navigate } = this.props;

    deleteNote(id);
    if (navigate) navigate('/');

    this.setState(() => {
      return {
        note: getNote(this.props.id)
      }
    });
  }

  onArchiveHandler(id) {
    const { navigate } = this.props;

    archiveNote(id);
    if (navigate) navigate('/archives');

    this.setState(() => ({
      note: getNote(this.props.id)
    }));
  }

  onUnarchiveHandler(id) {
    unarchiveNote(id);

    this.setState(() => ({
      note: getNote(this.props.id)
    }));
  }

  render() {
    const note = this.state.note;

    if (!note) return <p>Note is not found!</p>;

    return (
      <section>
        <NoteDetail {...this.state.note} />
        <NoteDetailButton
          id={this.props.id}
          archived={note.archived}
          onArchive={this.onArchiveHandler}
          onUnarchive={this.onUnarchiveHandler}
          onDelete={this.onDeleteHandler}
        />
      </section>
    );
  }
}

export default DetailPageWrapper;
