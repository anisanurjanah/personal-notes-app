import React from 'react';
import { useSearchParams } from 'react-router-dom';
// import { getArchivedNotes } from '../utils/local-data.js';
import { getArchivedNotes } from '../utils/network-data.js';

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
      notes: [],
      keyword: props.defaultKeyword || '',
      loading: true,
    }

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getArchivedNotes();
    
    this.setState(() => {
      return {
        notes: data,
        loading: false,
      }
    })
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
    const { notes, keyword, loading } = this.state;
    if (loading) return <p>Loading...</p>;

    const filteredNotes = notes.filter((note) => {
      return note.title.toLowerCase().includes(keyword.toLowerCase());
    });

    return (
      <section>
        <h2>Archive Notes</h2>
        <SearchBar keyword={keyword} keywordChange={this.onKeywordChangeHandler} />
        <NoteList notes={filteredNotes} isArchive={true} />
      </section>
    )
  }
}

export default ArchivePageWrapper;