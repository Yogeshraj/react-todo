import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './components/Todoinput/Todo';
import Tasklist from './components/Tasklist/Tasklist';


// function App() {
//   return (
    // <div className='main-content'>
    //   <h1>Todo list</h1>
    //   <Todo />
    //   <Tasklist />
    // </div>
//   );
// }
class App extends React.Component{

  state={
    data:'',
  }

  handleChange = (data) => {
    this.setState({data:data});
  }


  render(){
    const {data} = this.state;
    return(
      <div className='main-content'>
      <h1>Todo list</h1>
      <Todo handleChange={this.handleChange} />
      <Tasklist data={data} />
    </div>
    )
  }
}

export default App;
