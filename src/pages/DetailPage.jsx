import React from 'react';
import { getNote, deleteNote, archiveNote } from '../utils/local-data.js';
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
    if (navigate) navigate('/archived');

    this.setState(() => ({
      note: getNote(this.props.id)
    }));
  }

  render() {
    if (this.state.note === null) {
      return <p>Note is not found!</p>;
    }

    return (
      <section>
        <NoteDetail {...this.state.note} />
        <NoteDetailButton id={this.props.id} onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler} />
      </section>
    );
  }
}

export default DetailPageWrapper;
