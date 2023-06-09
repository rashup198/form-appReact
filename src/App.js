import './index.css';

import './App.css';
import {useState} from 'react';

function App() {
  const [formData, setFormData] = useState(
    {firstName:"" , LastName:"", email:"" , country:"", street:"", city:"", state:"", pincode:"",comment:true, candidate:true, offer:true, notification_everytime:"", }
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
  function submitHandler(event){
    event.preventDefault();
    console.log("Printing all the data Collected from user");
    console.log(formData);
  }

  

  return (
    <div className="App flex flex-col items-center mt-2 ">
      

      <form onSubmit={submitHandler}>
        <label className='pan' htmlFor='fName'>First Name</label>
        <br></br>
        <input 
        type="text"
        placeholder="Priyanshu"
        onChange={changeHandler}
        id='fname'
        name='firstName'
        value={formData.firstName}
        className="outline">
        </input>

        <br></br>


        <label className='pan'  htmlFor='LName'>Last Name</label>
        <br></br>
        <input
        type="text"
        placeholder="Pandey"
        name='LastName'
        onChange={changeHandler}
        id='Lname'
        value={formData.LastName}
        className="outline">
        </input>


        <br></br>


      <label className='pan'  htmlFor='emailId'>Email address</label>
      <br></br>
      <input
      type="email"
      placeholder="abc@gmail.com"
      name='email'
      onChange={changeHandler}
      id='emailId'
      value={formData.email}
      className="outline">
      </input>


      <br>
      </br>

      <label className='pan'  htmlFor='country'>Country</label>
      <br></br>
      <select name='country'
      className="outline"
      id='country'
      onChange={changeHandler}
      value={formData.country}>
        <option value="india">India</option>
        <option value="maxico">Maxico</option>
        <option value="norway">Norway</option>
        <option value="dubai">Dubai</option>
      </select>

      <br></br>

      <label className='pan'  htmlFor='streetName'>Street address</label>
      <br></br>
      <input
      type='text'
      placeholder='123 main street'
      name='street'
      onChange={changeHandler}
      value={formData.street}
      className="outline"
      id='streetName'>
      </input>

      <br></br>

      <label className='pan'  htmlFor='cityName'>City</label>
      <br></br>
      <input
      type='text'
      placeholder='Bhopal'
      name='city'
      onChange={changeHandler}
      value={formData.city}
      className="outline"
      id='cityName'>
      </input>


      <br></br>

      <label className='pan'  htmlFor='stateName'>State/Province</label>
      <br></br>
      <input
      type='text'
      placeholder='Madhya Pradesh'
      name='state'
      onChange={changeHandler}
      value={formData.state}
      className="outline"
      id='stateName'>
      </input>
      <br></br>

      <label className='pan'  htmlFor='pinC'>Postal Code/ZIP</label>

      <br></br>

      <input
      type='number'
      placeholder='466001'
      name='pincode'
      onChange={changeHandler}
      value={formData.pincode}
      className="outline"
      id='pinC'>
      </input>

    
      <fieldset>
        <legend className='deep'>By email</legend>

        <div className='ras flex'>

        <input type='checkbox'
        onChange={changeHandler}
        name='comment'
       
        id='comment'
        checked={formData.comment}>

        </input>
        <div>
        <label htmlFor="comment">Comments</label>
        <p>Get notified when someones posts a comment on a posting.</p>
        </div>
        </div>


        <div className='ras flex'>
        <input type='checkbox'
        onChange={changeHandler}
        name='candidate'
        checked={formData.candidate}
        id='candidate'
        >
        </input>
        <div>
        <label htmlFor='candidate'>Candidates</label>
        <p>Get notified when a candidate applies for a job</p>
        </div>
        </div>

        <div className='ras flex '>
        <input type='checkbox'
        onChange={changeHandler}
        name='offer'
        value="offers"
        id='offer'
        checked={formData.offer}>

        </input>
        <div>
        <label htmlFor='offers'>Offers</label>
        <p>Get notified when a candidate accepts or rejects an offer.</p>
        </div>
        </div>
       </fieldset>

       

        <fieldset>
          <legend className='deep'>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input 
          type='radio'
          name="notification_everytime"
          onChange={changeHandler}
          value="Everytime"
          id='noti_eve'
          checked={formData.notification_everytime==="Everytime"}
          >
          </input>

          <label htmlFor='Everytime'>Everytime</label>

          <br></br>

          <input 
          type='radio'
          onChange={changeHandler}
          name="notification_everytime"
          value="same_as_mail"
          id='sameas'
          checked={formData.notification_everytime==="same_as_mail"}
          >
          </input>

          <label htmlFor='sameas'>Same as mail</label>


          <br></br>

          <input 
          type='radio'
          onChange={changeHandler}
          name="notification_everytime"
          value="push-notification"
          id='push'
          checked={formData.notification_everytime==="push-notification"}
          >
          </input>

          <label htmlFor='push'>Push notifications</label>

        </fieldset>
        <div className='btnh'>
        <button className='btn'>
              Save
        </button>
        </div>
      </form>
    </div>
  );
}

export default App;
