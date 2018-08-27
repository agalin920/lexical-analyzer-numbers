//q0 start state
//q1, q3, q6 accepted states
//q7 error state

var input = "32e4";

var currentState="q0";

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
        pont:"q7",
        plusOrMinus:"q5",
        other:"q7",
        isAccepted:false
    },

    q5:{
        digit:"q6",
        exponent:"q7",
        pont:"q7",
        plusOrMinus:"q7",
        other:"q7",
        isAccepted:false
    },

    q6:{
        digit:"q6",
        exponent:"q7",
        pont:"q7",
        plusOrMinus:"q7",
        other:"q7",
        isAccepted:true
    },

    q7:{
        digit:"q7",
        exponent:"q7",
        pont:"q7",
        plusOrMinus:"q7",
        other:"q7",
        isAccepted:false
    }

}

//Loop through every character
for(let i=0;i<input.length;i++){
    currentState = getNextState(currentState,input.charAt(i));
}

console.log(automata[currentState].isAccepted ? "Accepted" : "Rejected");

function getNextState(currentState, character){
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




