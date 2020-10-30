import React, {useState} from 'react';
import './App.css';

const handleSubmit = event => {
    event.preventDefault();
    
};
  
function Form(props) {
  const [newMember, setNewMember] = useState({name:'', email:'', role:''});
  return (
    <div className="App">
      <form>
          <label>
              Name:
              <input
                type="text"
                name="name"
              />
          </label><br/>
          <label>
              Email:
              <input
                type="email"
                name="email"
              />
          </label><br/>
          <label>
              Role:
              <select name='role'>
                <option value='Backend Engineer'>Backend Engineer</option>
                <option value='Frontend Engineer'>Frontend Engineer</option>
                <option value='UI Design'>UI Design</option>
                <option value='Management'>Management</option>
              </select>
          </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
