import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes } from '../utils/local-data.js';

import NoteList from '../components/NoteList.jsx';
import SearchBar from '../components/SearchBar';

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || '',
    }

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      );
    });

    return (
      <section>
        <h2>Archive Notes</h2>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <NoteList notes={notes} isArchive={true} />
      </section>
    )
  }
}

export default ArchivePageWrapper;