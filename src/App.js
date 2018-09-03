import React, { Component } from 'react';
import './App.css';
import q12 from './assets/12.png';
import q13 from './assets/13.png';
import q14 from './assets/14.png';
import q15 from './assets/15.png';
import q16 from './assets/16.png';
import q17 from './assets/17.png';
import q18 from './assets/18.png';
import q19 from './assets/19.png';
import q20 from './assets/20.png';
import q21 from './assets/21.png';

//Automata description
const automata = {
    q0:{
        digit:"q1",
        exponent:"q7",
        point:"q7",
        other:"q7",
        plusOrMinus:"q7",
        isAccepted:false
    },

    q1:{
        digit:"q1",
        exponent:"q4",
        point:"q2",
        plusOrMinus:"q7",
        other:"q7",
        isAccepted:true
    },

    q2:{
        digit:"q3",
        exponent:"q7",
        point:"q7",
        plusOrMinus:"q7",
        other:"q7",
        isAccepted:false
    },

    q3:{
        digit:"q3",
        exponent:"q4",
        point:"q7",
        plusOrMinus:"q7",
        other:"q7",
        isAccepted:true
    },

    q4:{
        digit:"q6",
        exponent:"q7",
        point:"q7",
        plusOrMinus:"q5",
        other:"q7",
        isAccepted:false
    },

    q5:{
        digit:"q6",
        exponent:"q7",
        point:"q7",
        plusOrMinus:"q7",
        other:"q7",
        isAccepted:false
    },

    q6:{
        digit:"q6",
        exponent:"q7",
        point:"q7",
        plusOrMinus:"q7",
        other:"q7",
        isAccepted:true
    },

    q7:{
        digit:"q7",
        exponent:"q7",
        point:"q7",
        plusOrMinus:"q7",
        other:"q7",
        isAccepted:false
    }

}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputText:"",
      isAccepted:false,
      imgSrc:q12
    };

    this.handleChange=this.handleChange.bind(this);
    this.getNextState=this.getNextState.bind(this);
    this.getImage=this.getImage.bind(this);
  }

  handleChange(event){
    //Initial state
    var currentState="q0";

    this.setState({inputText:event.target.value});
    for(let i=0;i<event.target.value.length;i++){
      currentState = this.getNextState(currentState,event.target.value.charAt(i));
    }


    if(automata[currentState].isAccepted){
      this.setState({isAccepted:true});
    }
    else{
      this.setState({isAccepted:false});
    }

  }

  getNextState(currentState, character){
    let token;
    if(isNaN(character)) {
        switch(character){
            case "e":
                token="exponent"
                break;

            case "E":
                token="exponent"
                break;

            case ".":
                token="point"
                break;
            
            case "+":
                token="plusOrMinus"
                break;
            
            case "-":
                token="plusOrMinus"
                break;
            
            default:
                token="other"
                break;

        }
    }
    else{
        token="digit"
    }

    //return the state that the token leads to
    return automata[currentState][token];
 
}

getImage(){
    if((this.state.inputText.includes("e") || this.state.inputText.includes("E")) && !isNaN(this.state.inputText.charAt(this.state.inputText.length-1))&& !isNaN(this.state.inputText.charAt(0))){
            return q19;
        }
    else if((this.state.inputText.includes("e") || this.state.inputText.includes("E")) && (this.state.inputText.includes("+")||this.state.inputText.includes("-")) && !isNaN(this.state.inputText.charAt(0))){
        return q17;
    }
    else if((this.state.inputText.includes("e") || this.state.inputText.includes("E"))&& !isNaN(this.state.inputText.charAt(0))){
        return q16;
    }
    else if(this.state.inputText.includes(".") && !isNaN(this.state.inputText.charAt(0)) && !isNaN(this.state.inputText.charAt(this.state.inputText.length-1)) ){
        console.log("gsd",isNaN(this.state.inputText.charAt(this.state.inputText.length-1)))
        return q21;
    }
    else if(this.state.inputText.includes(".") && !isNaN(this.state.inputText.charAt(0))){
        return q14;
    }
    else if(!isNaN(this.state.inputText.charAt(0)) && this.state.inputText !== ""){
        return q20;
    }
    
    else{
        return q12;
    }
    
}

  render() {
    let currImage = this.getImage();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Análisis Léxico: Números Reales</h1>
          <h2 style={{fontSize:14}}> Andres Galindo </h2>
        </header>
        <body>
          <h1 className="input-stream" style={{color: this.state.isAccepted === true ? 'green' : 'red'}}>{this.state.inputText}</h1>
          <input type="text" placeholder="Introduzca una cadena" onChange={this.handleChange}/>
          <br/>
          <img src={currImage}/>
        </body>
      </div>
    );
  }
}

export default App;
