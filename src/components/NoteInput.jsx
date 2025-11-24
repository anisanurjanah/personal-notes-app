import React from 'react';
import PropTypes from 'prop-types';
import NoteAddButton from '../components/NoteAddButton.jsx';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
   return (
     <form id="note-form" className='add-new-page__input' onSubmit={this.onSubmitEventHandler}>
       <input type="text" className='add-new-page__input__title' placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
       <div className="add-new-page__input__body" data-placeholder="Start typing.." onInput={this.onBodyChangeEventHandler} contentEditable />
       <NoteAddButton />
     </form>
   )
 }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
 }

export default NoteInput;