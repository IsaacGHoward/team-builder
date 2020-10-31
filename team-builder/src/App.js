import React, {useState} from 'react';
import './App.css';
import Form from './Form.js';


function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [editingMember, setEditingMember] = useState();

  function setTeam(newMember){
    setTeamMembers([...teamMembers, newMember]);
  }
  function updateTeam(whichMember){
    let members = teamMembers;
    members = members.map((member, i) => {
      if(i === editingMember)
        return whichMember;
      else 
        return member;
    })
    setTeamMembers(members);
    setEditingMember(undefined);
  }
  return (
    <div className="App">
      <Form setTeam={setTeam} editingMember={editingMember} updateTeam={updateTeam} teamMembers={teamMembers}/>
      <h3>Team Members : </h3>
      {
        teamMembers.map((curr, idx) => {
        return <p>Name : {curr.name} | Email : {curr.email} | Role: {curr.role} | <button onClick={() => setEditingMember(idx)}>EDIT</button></p>
        })
      }
    </div>
  );
}

export default App;
