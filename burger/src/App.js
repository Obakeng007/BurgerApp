import logo from './logo.svg';
import './App.css';

//styling for the layers
const burger_top_layer_styling= {
  backgroundColor: '#f2a93b',
  width: '700px',
  marginTop: '100px',
  marginLeft: '900px',
  height: '150px',
  borderRadius: '50px 50px 10px 10px',
  textAlign: 'center'
}

const tomato_styling={
  backgroundColor: '#ea3323',
  width: '700px',
  marginTop: '5px',
  marginLeft: '900px',
  height: '100px',
  borderRadius: '10px 10px 10px 10px',
  textAlign: 'center',
  fontSize: '25px',
  color: 'White'
}

const meat_styling={
  backgroundColor: '#814133',
  width: '700px',
  marginTop: '5px',
  marginLeft: '900px',
  height: '100px',
  borderRadius: '10px 10px 10px 10px',
  textAlign: 'center',
  fontSize: '25px',
  color: 'White'
}


const lettuce_styling={
  backgroundColor: '#377e22',
  width: '700px',
  marginTop: '5px',
  marginLeft: '900px',
  height: '100px',
  borderRadius: '10px 10px 10px 10px',
  textAlign: 'center',
  fontSize: '25px',
  color: 'White'
}

const burger_bottom_layer_styling= {
  backgroundColor: '#f2a93b',
  width: '700px',
  marginTop: '5px',
  marginLeft: '900px',
  height: '150px',
  borderRadius: '10px 10px 50px 50px',
  textAlign: 'center'
}


//Creating functions

 
  export function Burger_top(){
    return <div style={ burger_top_layer_styling }></div>
  }
 

  function Tomato(){
    return <div style={ tomato_styling }>Tomato</div>;
  }
 
function Meat(){
  return <div style={ meat_styling }>Meat</div>;
}


function Lettuce(){
  return <div style={ lettuce_styling }>Lettuce</div>;
}

  
    function Burger_bottom(){
      return <div style={ burger_bottom_layer_styling }></div>;
    }
 
    //Calling functions
export default function Burger(){
  return(
    <section>
      <Burger_top/>
      <Tomato/>
      <Meat/>
      <Lettuce/>
      <Burger_bottom/>
    </section>
  );
}