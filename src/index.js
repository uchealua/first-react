import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import './style.css'

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("root"))
