import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import Header from './Header';
import './styles.css';

function App() {
  const { register, handleSubmit} = useForm();
  const [name, setName] = useState(null);

  const submitForm= ( data, e)=>{
      e.preventDefault();
      // alert(JSON.stringify(data));
      setName(`${data.firstName} ${data.lastName}`);
  }

  return (
    <div className="app">
      <Header name={name}/>
      <div className="box">
        <div className="menuLeft">
          <ul>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
            <li>Menu 4</li>
          </ul>
        </div>
        <div className="formContainer">
          <form onSubmit={handleSubmit(submitForm)} className="form">
            <input type="text" defaultValue="Katarzyna" name="firstName" ref={register}/>
            <input type="text" defaultValue="Pohl" name="lastName" ref={register}/>
            <button type='submit'>Wyślij</button>
          </form>
        </div>
      </div>
      <footer>
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
          <li>Menu 4</li>
        </ul>
        </footer>
    </div>
  );
}

export default App;
