import MySubComponent from "./MySubComponent";

const MyComponent = ({ counter, counterChangeListener }) => {


    return (<div>
        <div>MyComponent counter: {counter}</div>
        <input type="button" value="MyComponent increment" onClick={()=>counterChangeListener(counter +1)}/>

        <div><MySubComponent fooNumber={counter}></MySubComponent></div>
        
        
        </div>)
}

export default MyComponent;