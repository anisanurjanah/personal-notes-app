import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes } from '../utils/network-data.js';
import LocaleContext from '../contexts/LocaleContext';

import NoteAddButton from '../components/NoteAddButton.jsx';
import NoteList from '../components/NoteList.jsx';
import SearchBar from '../components/SearchBar';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || ''
  });
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
      setLoading(false);
    });
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  });

  if (loading) return <p>Loading...</p>;

  return (
    <section>
      <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler}/>
      <NoteList notes={filteredNotes} isArchive={false} />
      <NoteAddButton />
    </section>
  )
}

export default HomePage;
