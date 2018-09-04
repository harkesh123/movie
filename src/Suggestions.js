import React, { Component } from 'react';
import './Suggestions.css';
import Autosuggest from 'react-autosuggest';


function getSuggestions(value,list) {
     if(list.length>4){
       const list1=[list[0],list[1],list[2],list[3],list[4]]        
         return list1
       }
    else{
    return list
   }
   

  }



function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.title}</span>
  );

}

class Suggestions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: []
   
    };    
  }


  getSuggestionValue=(suggestion)=>{
  this.props.select(suggestion.title);
  return suggestion.title;
}

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
    this.props.Change(newValue);
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    if(value.length>1 ){
  this.setState({
      suggestions: getSuggestions(value,this.props.list)
    });

    }
    
    else{this.setState({suggestions:[]})}
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onclick=()=>{
    this.props.select(this.state.value);
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Movie name",
      value,
      onChange: this.onChange
    };

    return (
      <div>
      <Autosuggest 
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} />
        <a className="f6 link grow br1 ph4 pv3 mb2 dib white bg-orange" id="button" onClick={this.onclick} >Search</a>
       </div>
    );
  }
}

export default Suggestions;
