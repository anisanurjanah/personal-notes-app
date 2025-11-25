import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllNotes } from '../utils/local-data.js';

import NoteAddButton from '../components/NoteAddButton.jsx';
import NoteList from '../components/NoteList.jsx';
import SearchBar from '../components/SearchBar';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      keyword: props.defaultKeyword || '',
    }

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  componentDidMount() {
    const notes = getAllNotes();
    this.setState({ notes });
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
        <h2>Active Notes</h2>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <NoteList notes={notes} isArchive={false} />
        <NoteAddButton />
      </section>
    )
  }
}

export default HomePageWrapper;