import React, { Component } from "react";
import Posts from "./components/Posts";
class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        { id: "abc1", name: "JS Basics" },
        { id: "abc2", name: "JS Advanced" },
        { id: "abc3", name: "React  JS" },
      ],
    };
  }
  removePost = (id) => {
    this.setState({ posts: this.state.posts.filter((post) => post.id !== id) });
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="app">
        <Posts posts={posts} removePost={this.removePost} />
      </div>
    );
  }
}
export default App;
