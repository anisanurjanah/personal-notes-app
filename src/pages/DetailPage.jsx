import React from 'react';
import { getNote, deleteNote } from '../utils/local-data.js';
import { useParams } from 'react-router-dom';

import NoteDetail from '../components/NoteDetail.jsx';
import DetailButton from '../components/DetailButton.jsx';

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id)
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        note: getNote(props.id)
      }
    });
  }

  render() {
    if (this.state.note === null) {
      return <p>Note is not found!</p>;
    }

    return (
      <section>
        <NoteDetail {...this.state.note} />
        <DetailButton onDelete={this.onDeleteHandler} />
      </section>
    );
  }
}

export default DetailPageWrapper;
