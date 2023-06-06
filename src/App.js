import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [formData, setFormData] = useState(
    {firstName:"" , LastName:"", email:"" , country:"", street:"", city:"", state:"", pincode:"",comment:true, candidate:true, offer:true }
  );

  function changeHandler(event){
    const{name, value , type, checked}=event.target;

    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        [name]:type==="checkbox" ?checked:value
      }
    })

  }

  console.log(formData);

  return (
    <div className="App">
      

      <form>
        <label htmlFor='fName'>First Name</label>
        <br></br>
        <input
        type="text"
        placeholder="Priyanshu"
        onChange={changeHandler}
        id='fname'
        name='firstName'
        value={formData.firstName}>
        </input>

        <br></br>


        <label htmlFor='LName'>Last Name</label>
        <br></br>
        <input
        type="text"
        placeholder="Pandey"
        name='LastName'
        onChange={changeHandler}
        id='Lname'
        value={formData.LastName}>
        </input>


        <br></br>


      <label htmlFor='emailId'>Email address</label>
      <br></br>
      <input
      type="email"
      placeholder="abc@gmail.com"
      name='email'
      onChange={changeHandler}
      id='emailId'
      value={formData.email}>
      </input>


      <br>
      </br>

      <label htmlFor='country'>Country</label>
      <br></br>
      <select name='country'
      id='country'
      onChange={changeHandler}
      value={formData.country}>
        <option value="india">India</option>
        <option value="maxico">Maxico</option>
        <option value="norway">Norway</option>
        <option value="dubai">Dubai</option>
      </select>

      <br></br>

      <label htmlFor='streetName'>Street address</label>
      <br></br>
      <input
      type='text'
      placeholder='123 main street'
      name='street'
      onChange={changeHandler}
      value={formData.street}
      id='streetName'>
      </input>

      <br></br>

      <label htmlFor='cityName'>Street address</label>
      <br></br>
      <input
      type='text'
      placeholder='Bhopal'
      name='city'
      onChange={changeHandler}
      value={formData.city}
      id='cityName'>
      </input>


      <br></br>

      <label htmlFor='stateName'>Street address</label>
      <br></br>
      <input
      type='text'
      placeholder='Madhya Pradesh'
      name='state'
      onChange={changeHandler}
      value={formData.state}
      id='stateName'>
      </input>
      <br></br>

      <label htmlFor='pinC'>Postal Code/ZIP</label>

      <br></br>

      <input
      type='number'
      placeholder='466001'
      name='pincode'
      onChange={changeHandler}
      value={formData.pincode}
      id='pinC'>
      </input>


      <fieldset>
        <legend>By email</legend>

        
        <input type='checkbox'
        onChange={changeHandler}
        name='comment'
       
        id='comment'
        checked={formData.comment}>

        </input>
        
        <label htmlFor="comment">Comments</label>
        <p>Get notified when someones posts a comment on a posting.</p>

        <input type='checkbox'
        onChange={changeHandler}
        name='candidate'
        checked={formData.candidate}
        id='candidate'
        >

        </input>

        <label htmlFor='candidate'>Candidates</label>
        <p>Get notified when a candidate applies for a job</p>

        <input type='checkbox'
        onChange={changeHandler}
        name='offer'
        value="offers"
        id='offer'
        checked={formData.offer}>

        </input>

        <label htmlFor='offers'>Offers</label>
        <p>Get notified when a candidate accepts or rejects an offer.</p>
       </fieldset>


      </form>
    </div>
  );
}

export default App;
