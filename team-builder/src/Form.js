import React, {useState, useEffect} from 'react';
import './App.css';

function Form(props) {
  const [newMember, setNewMember] = useState({name:'', email:'', role:'Backend Engineer'});
  useEffect(() => {
      console.log(props.teamMembers[props.editingMember]);
    if(props.editingMember != null)
        setNewMember(props.teamMembers[props.editingMember]);
  }, [props.editingMember]);
  const handleChange = event => {
    setNewMember({ ...newMember, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    if(props.editingMember == null)
        props.setTeam(newMember);
    else
        props.updateTeam(newMember); 
    setNewMember({name:'', email:'', role:'Backend Engineer'});
  };

  return (
    <div className="App">
      <form onSubmit={event => handleSubmit(event)}>
          <label>
              Name:
              <input
                type="text"
                name="name"
                value={newMember.name}
                onChange={event => handleChange(event)}
              />
          </label><br/>
          <label>
              Email:
              <input
                type="email"
                name="email"
                value={newMember.email}
                onChange={event => handleChange(event)}
              />
          </label><br/>
          <label>
              Role:
              <select name='role' onChange={event => handleChange(event)} value={newMember.role}> 
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
