
import './App.css';
import ClickCounters from './RenderProps/ClickCounters';
import Counter from './RenderProps/Counter';
import Hovercounters from './RenderProps/Hovercounters';
// import Clickcounter from './Hoc/Clickcounter';
// import OnMouseHover from './Hoc/OnMouseHover';
// import Calculator from './componentsR/Calculator';


// import ComButton from './components/ComButton';
// import Components from './components/Components';
// import Calculator from './componentsR/Calculator';


function App() {
  return (
    <div className="App">

      
      <Counter render={(count,increament)=>(<ClickCounters count={count} increament={increament}/>)}/>
      <Counter render={(count,increament)=>(<Hovercounters count={count} increament={increament}/>)}/>

      
      {/* <Clickcounter/>
      <OnMouseHover/> */}
        {/* <Calculator/> */}
      {/* <Components/> */}
     {/* <ComButton/> */}
    </div>
  );
}

export default App;
