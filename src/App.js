import React, { Component } from 'react';
import './App.css';
import Search from "./Suggestions.js"
import Display from "./Display.js"

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      search:false
    
    }
 
  }
  
  onChange=(value)=>{
    
    fetch("https://api.themoviedb.org/3/search/movie?api_key=b257b1d411526ff70ffd8d66bbfdfe8a&query="+value)
     .then(res=>{return res.json()})
     .then(data=>{this.setState({ list:data.results})})
     .catch(console.log)
      fetch("http://www.omdbapi.com/?t="+value+"&apikey=cda138e1")
       .then(res=>{return res.json()})
      .then(data=>{this.setState({output:data})})
  }

   ondisplay=(value)=>{
      console.log(this.state.output)
      this.setState({search:true})
   }



  render() {
    return (
      <div >
        <header className="App-header" >
           <img src="./logo.png" alt="logo" className="image"  height="55" width="55" /> 
           <a className="bar" ><Search Change={this.onChange}  select={this.ondisplay} list={this.state.list}  />
           </a>
        </header>
        <Display  search={this.state.search} output={this.state.output}  />
        
          
      </div>
    );
  }
}

export default App;
