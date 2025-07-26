// src/components/App.js

import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import { blogName, about, image, posts } from "../data/blog"; // ✅ Make sure this path is correct

function App() {
  return (
    <div className="App">
      <Header name={blogName} />
      <About image={image} about={about} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;