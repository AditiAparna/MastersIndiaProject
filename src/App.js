
import './App.css';
import React from 'react';
import CodeList from './SnippetList';
import Header from './Components/header';

class App extends React.Component {
  constructor(props) {
    super(props);
  };
  render(){
  return (
    <div className="App">
      <Header/>
      <CodeList/>
    </div>
  );
  }
}

export default App;
