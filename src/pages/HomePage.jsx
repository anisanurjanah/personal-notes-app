import React from 'react';
import { useSearchParams } from 'react-router-dom';
// import { getAllNotes } from '../utils/local-data.js';
import { getActiveNotes } from '../utils/network-data.js';

import NoteAddButton from '../components/NoteAddButton.jsx';
import NoteList from '../components/NoteList.jsx';
import SearchBar from '../components/SearchBar';

function HomePageWrapper({ language }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} language={language} />
}

class HomePage extends React.Component {
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
    const { data } = await getActiveNotes();
    
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
    const { language } = this.props;

    if (loading) return <p>Loading...</p>;

    const filteredNotes = notes.filter((note) => {
      return note.title.toLowerCase().includes(keyword.toLowerCase());
    });

    return (
      <section>
        <h2>{language === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
        <SearchBar keyword={keyword} keywordChange={this.onKeywordChangeHandler} language={language} />
        <NoteList notes={filteredNotes} isArchive={false} />
        <NoteAddButton />
      </section>
    )
  }
}

export default HomePageWrapper;