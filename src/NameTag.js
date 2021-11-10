
//One way to pass the argument
const NameTag = ({name,argummentTwo}) =>{
    let count = 0 
    let setCount = null
    const increment = () =>{
        console.log('incrementing!')
        setCount(count+1)
        
        
    }
    return (<div>
        <div>Hi! This is {name}</div>
        <div>Passing another argument: {argummentTwo}</div>
        <button onClick={increment}>Increment</button>
        <button>Decrement</button>
    </div>)
} 


//Other way to pass the argument
// const NameTag = (props) =>{
    
//     return (<div>Hi! This is {props.name}</div>)
// } 

//Other Way to write this
// function NameTag(){
// let name = "Pax"
// return (<div>Hi! This is {name}</div>)
// }
export default NameTag