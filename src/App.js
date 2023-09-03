import React, {useState} from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

//were going to use an external library here for the colors
// install 
//npm install values.js --save

function App() {
  const [color,setColor]=useState("");
  const [error, setError] = useState(false);
  const [list,setList] =useState(new Values('#00ffff').all(5));

  const handleSubmit=(e)=>{
    e.preventDefault();
    //working with the installed library
    try{
     let colors= new Values(color).all(5); // divides our data by 10
     setError(false);
     setList(colors);

    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
  return (
    <>
    <section className='container'>
      <h3> color generator</h3>

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='#f15025' value={color} onChange={(e)=>setColor(e.target.value)} className={`${error? 'error': null}`} />
     
      <button type='submit' className='btn'>Submit</button>
      </form>
    </section>

    <section className='colors'>
        {list.map((color,index)=>{
          
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
        })}
    </section>
   </>
  );
}

export default App;
