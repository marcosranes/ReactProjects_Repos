import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

export default class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: "The Title 1",
        body: "The Body 1",
      },
      {
        id: 2,
        title: "The Title 2",
        body: "The Body 2",
      },
      {
        id: 3,
        title: "The Title 3",
        body: "The Body 3",
      },
    ],
  };

  timeContentUpdate = null;

  componentDidMount() {
    setTimeout(() => {
      this.handleContentUpdate();
    }, 100);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.handleContentUpdate();
    }, 100);
  }

  componentWillUnmount() {
    clearTimeout(this.timeContentUpdate);
  }

  handleContentUpdate() {
    this.timeContentUpdate = setTimeout(() => {
      this.setState({
        counter: this.state.counter + 1,
        posts: [
          {
            id: 1,
            title: "Title 1 has changed",
            body: "Body 1 as well",
          },
          {
            id: 2,
            title: "Title 2 has changed",
            body: "Body 2 as well",
          },
          {
            id: 3,
            title: "Title 3 has changed",
            body: "Body 3 as well",
          },
        ],
      });
    }, 500);
  };

  render() {
    const { posts, counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>{counter}</h1>
          {posts.map((values, _id) => (
            <div key={values.id}>
              <h1>{values.title}</h1>
              <p>{values.body}</p>
              {/* <h1>{(values.title = `Title ${_id + 1} has changed`)}</h1> */}
              {/* <p>{(values.body = `Body ${_id + 1} has changed`)}</p> */}
            </div>
          ))}
        </header>
        <footer>
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="App-link">
            <a
              href="https://pt-br.reactjs.org/docs/react-component.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>Learn about React.Component</code>
            </a>
          </h3>
        </footer>
      </div>
    );
  }
}