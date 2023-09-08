import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
      
  };

    
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.value)
    this.setState({
      value: '',
    });
   
    };
    
    

  render() {
    const { value } = this.state;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            name="name"
            value={value}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
