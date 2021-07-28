
import './App.css';
import React from 'react';
import CodeList from './SnippetList';

class App extends React.Component {
  constructor(props) {
    super(props);
  };
  render(){
  return (
    <div className="App">
      <CodeList/>
    </div>
  );
  }
}

export default App;
