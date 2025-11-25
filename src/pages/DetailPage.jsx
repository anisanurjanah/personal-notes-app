import React from 'react';
// import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data.js';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/network-data.js';
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
      note: null,
      loading: true
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  async componentDidMount() {
    const response = await getNote(this.props.id);

    this.setState({
      note: response.data,
      loading: false
    });
  }

  async onDeleteHandler(id) {
    const { navigate } = this.props;

    await deleteNote(id);
    navigate('/');
  }

  async onArchiveHandler(id) {
    const { navigate } = this.props;

    await archiveNote(id);
    navigate('/archives');
  }

  async onUnarchiveHandler(id) {
    await unarchiveNote(id);

    const response = await getNote(this.props.id);

    this.setState({
      note: response.data
    });
  }

  render() {
    const { note, loading } = this.state;

    if (loading) return <p>Loading...</p>;
    if (!note) return <p>Note is not found!</p>;

    return (
      <section>
        <NoteDetail {...note} />
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
