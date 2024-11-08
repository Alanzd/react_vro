import React, {useState} from 'react';

const FormComponent = () => {
  const [user, setUser] = useState({});
  const getFormData = e => {
    e.preventDefault();
    e.stopPropagation();
    
    let data = e.target;
    let user = {
      name: data.name.value,
      lastname: data.lastname.value,
      gender: data.gender.value,
      bio: data.bio.value,
      send: data.send.value,
    }
    setUser(user)
  }

  const changeData = e => {
   let inputName = e.target.name;
   
   setUser(prev_status => ({
      ...prev_status,
      [inputName]: e.target.value
    })
   )
   
  }
  return (
    <div>
      <h1>Forms with React</h1>
      {user.bio && user.name && user.name.length > 0 && user.bio.length > 0 &&
      (<div className='info_user'>
        <div> {user.name} {user.lastname} it´s a {user.gender}</div>
        <div>Bio: {user.bio}</div>          
      </div>)
      }
      <form onSubmit={getFormData}>
        <input type="text" 
          name="name" 
          placeholder='name' id=""
          onChange={changeData} 
          />
        <input type="text" 
          name="lastname" 
           placeholder='lastname' 
           id="" 
           onChange={changeData}
           />
        <select name="gender" id="" onChange={changeData}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <textarea name="bio" placeholder="biography" id="" cols="30" rows="10" onChange={changeData}></textarea>
        <input type="submit" value="Send" name="send"/>
      </form>
    </div>
  );
}

export default FormComponent;
