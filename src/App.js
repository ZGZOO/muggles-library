import React from "react";
import "./App.css";
import Layout from "./shared/Layout";
import Main from "./pages/Main/Main";

function App() {
  return (
    <div className="App">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
