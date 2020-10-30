import React, {useState} from 'react';
import './App.css';
import Form from './Form.js';


function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  //setTeamMembers([...teamMembers, {name: "new"}])
  //<button onClick={() => setTeamMembers([...teamMembers, {name: "new"}])}>Add</button>
  function setTeam(newMember){
    setTeamMembers([...teamMembers, newMember]);
  }
  return (
    <div className="App">
      <Form setTeam={setTeam}/>
      <h3>Team Members : </h3>
      {
        teamMembers.map((curr) => {
        return <p>Name : {curr.name} | Email : {curr.email} | Role: {curr.role}</p>
        })
      }
    </div>
  );
}

export default App;
