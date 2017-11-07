import React, {Component} from 'react';
import Header from "./Header/Header";
import Search from "./Search/Search";
import Results from "./Results/Results";
import API from "./../utils/API";

class App extends Component {
  state = {
    search: "",
    result: [],
    saved: false,
    title: "",
    date: "",
    url: ""
  }

  componentDidMount() {
    this.loadArticles();
  };

  loadArticles = () => {
    API.getArticles().then((res) => {
      this.setState({result: res, title: "", date: "", url: ""});
    }).catch((err) => {
      console.log(err);
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  handleInputChange = (event) => {
    this.setState({search: event.target.value});
  };

  handleButtonClick = () => {
    if (this.state.search !== "") {
      API.getData(this.state.search).then((res) => {
        this.setState({result: res.data.response.docs})
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <Search handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} handleButtonClick={this.handleButtonClick}/>
        <Results result={this.state.result}/>
      </div>
    );
  }
}

export default App;
