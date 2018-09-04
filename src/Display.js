import React, { Component } from 'react';
import "./Display.css"

class Display extends Component{
	constructor(props){
		super(props);
	  
	}

render(){
	console.log(this.props.output)
	if(this.props.search){
		return(
            <div className="display" id="result" style >
        <article className="bt bb b--black-10" >
    <a className="db pv4 ph3 ph0-l no-underline black " >
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img src={this.props.output.Poster} className="db" alt="Poster"/>
        </div>
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f3 fw3 baskerville mt0 lh-title">{this.props.output.Title}</h1>
          <p className="f6 f5-l lh-copy">
            {this.props.output.Plot}
          </p>
          <p>
          <a>
          	<img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" id="logo" alt="imdb" hight="45" width="45"/>
             :{this.props.output.Ratings[0].Value}</a>
             <a><img src="http://static.tvtropes.org/pmwiki/pub/images/rotten_tomatoes_8290.jpg" id="logo" alt="rotten" hight="25" width="25"/>
              :{this.props.output.Ratings[1].Value}</a>
             <a><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/2000px-Metacritic.svg.png" id="meta" alt="imdb" hight="45" width="45"/>
              :{this.props.output.Ratings[2].Value}</a>
          </p>
        </div>
      </div>
    </a>
  </article>
         </div>

		);
	}
		else{ return <h1>SEARCH OF A MOVIE NAME</h1>}
	
}


  }

  export default Display;