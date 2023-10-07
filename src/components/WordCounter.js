import { Component } from 'react';

class WordCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      wordCount: 0,
    };
  }

  handleTextChange = (event) => {
    const newText = event.target.value;
    const wordCount = newText.split(/\s+/).filter(Boolean).length;
    this.setState({ text: newText, wordCount: wordCount });
  };

  render() {
    return (
      <div>
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea
          placeholder="Type your text here..."
          onChange={this.handleTextChange}
          value={this.state.text}
        />
        <p>Word Count: {this.state.wordCount}</p>
      </div>
    );
  }
}

export default WordCounter;
