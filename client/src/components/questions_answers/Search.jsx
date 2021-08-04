import React from 'react';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchPhrase: ''
    };
  }

  searchQuestions (e) {
    e.preventDefault();
    this.props.submitSearch(this.state.searchPhrase.toLowerCase());
  }

  searchInput (e) {
    this.setState({ searchPhrase: e.target.value });
  }

  render () {
    return (
      <form className='Qsearch'>
      <input id='searchbar' type='text' onChange={this.searchInput.bind(this)} placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'></input>
      <button type='submit' id='searchbtn' onClick={this.searchQuestions.bind(this)} >Search</button>
      </form>
    );
  };
}

export default Search;
