import React, { Component } from 'react';
import './App.css';


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
    };

    this.handleChange=this.handleChange.bind(this);
    this.getNextState=this.getNextState.bind(this);
  }

  handleChange(event){
    //Initial state
    var currentState="q0";

    this.setState({inputText:event.target.value});
    for(let i=0;i<event.target.value.length;i++){
      currentState = this.getNextState(currentState,event.target.value.charAt(i));
      console.log(currentState);
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


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Análisis Léxico: Números Reales</h1>
          <h2 style={{fontSize:14}}> Andres Galindo </h2>
        </header>
        <body>
          <h1 className="input-stream" style={{color: this.state.isAccepted === true ? 'green' : 'red'}}>{this.state.inputText}</h1>
          <input type="text" placeholder="Introduzca una cadena" onChange={this.handleChange}/>
        </body>
      </div>
    );
  }
}

export default App;
