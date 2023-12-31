import {useState,useEffect} from 'react'
import Form from './Form'
import List from './List';
import './style.css'

function Contacts() {

  const [contacts,setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
  },[contacts ])


  return (
    <div id = "container">
      <h1>Contacts</h1>
    <List contacts= {contacts}></List>
    <Form addContact = {setContacts} contacts={contacts}></Form>    
    </div>

    
  )
}

export default Contacts;