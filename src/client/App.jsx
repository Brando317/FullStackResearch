import React, { Component } from "react";
import './scss/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.currentCategory = "";
    this.state = { articles: [] }
  }

  componentDidMount() {
    fetch("/api/articles")
      .then(res => { return res.json() })
      .then(data => {
        console.log(data)
        this.setState({ articles: data })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Research university </h1>
          <p>
            This is a resource that guides you directly to science-based news articles about the world. It's for reading, study, information, health, betterment, security, entertainment, life knowledge, and you guessed it, research, among other things. All of the articles here are by people who are interested in science, and there is no guarantee that they will be written by or have any connection to actual scientists. That is to say, as of yet, this is not a resource that leads to peer-reviewed journals, papers, or case studies; though some of these may be found through deeper research using this resource. It is a constant work-in-progress, so updates will come offten, and suggestions are being evaluated! Enjoy!
          </p>
          <ul>
            {this.state.articles.map((val, i) => {
              if (val.category != this.currentCategory) {
                this.currentCategory = val.category;
                return (<div key={i}>
                  <h6 className="category"> {val.category} </h6>
                  <li> <a href={val.href}> {val.title} </a></li>
                </div>)
              }
              return <li key={i}> <a href={val.href}> {val.title} </a></li>
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
