import logo from './logo.svg';
import './App.css';

//styling for the layers
const burger_top_layer_styling= {
  backgroundColor: 'brown',
  width: '700px',
  marginTop: '100px',
  marginLeft: '900px',
  height: '150px',
  borderRadius: '50px 50px 10px 10px',
  textAlign: 'center'
}

const tomato_styling={
  backgroundColor: 'Red',
  width: '700px',
  marginTop: '10px',
  marginLeft: '900px',
  height: '150px',
  borderRadius: '10px 10px 10px 10px',
  textAlign: 'center'
}

const meat_styling={
  backgroundColor: 'Brown',
  width: '700px',
  marginTop: 'px',
  marginLeft: '900px',
  height: '150px',
  borderRadius: '10px 10px 10px 10px',
  textAlign: 'center'
}


const lettuce_styling={
  backgroundColor: 'green',
  width: '700px',
  marginTop: '650px',
  marginLeft: '900px',
  height: '150px',
  borderRadius: '10px 10px 10px 10px',
  textAlign: 'center'
}

const burger_buttom_layer_styling= {
  backgroundColor: 'brown',
  width: '700px',
  marginTop: '900px',
  marginLeft: '900px',
  height: '150px',
  borderRadius: '10px 10px 50px 50px'
}


//Creating functions

 
  function burger_top(){
    return <div style={ burger_top_layer_styling }></div>
  }
 

  function Tomato(){
    return <div style={ tomato_styling }>Tomato</div>;
  }
 
function Meat(){
  return <div style={ meat_styling }>Meat</div>;
}

function burger(){
  return(
    function Lettuce(){
      return <div style={ lettuce_styling }>Lettuce</div>;
    }
  );

    function burger_buttom(){
      return <div style={ burger_buttom_layer_styling }></div>;
    }
 

}
 

  


 // Calling the functions 
export default  burger;
  