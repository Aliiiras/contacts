import { useState } from 'react'
import {v4} from "uuid";
import List from './List';
import styles from './Create.module.css';

export default function Create() {
    const [contact,setContact] = useState({
        id: "",
        fname : "",
        lname : "",
        email : "",
        phone : "",
    }
    );
    const [contacts,setContacts] = useState([]);
    const [alert,setAlert] = useState("");
    const [edit, setEdit] = useState(null);

    const changeHandler=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setContact((contact) =>({...contact,[name]:value}));
    }
    const addHandler=()=>{
        if(!contact.fname || !contact.lname || !contact.email || !contact.phone){
            setAlert("* Please enter valid data");
            return;
        }
        setAlert("");
        if(edit!==null){
            const update = contacts.map(editcontact=>
                editcontact.id === edit ? {...editcontact, ... contact} : editcontact);
            setContacts(update);
            setEdit(null);
        }
        else{
        const newContact = {...contact,id:v4()};
        setContacts((contacts)=>[...contacts,newContact]);
        }setContact({
            fname : "",
            lname : "",
            email : "",
            phone : "",
        });
    };

    const editHandler = (id) => {
        const editContact = contacts.find(contact => contact.id === id);
        if (editContact) {
            setContact(editContact);
            setEdit(id);
        }
      };

    const deleteHandler = (id) => {
        const newContacts = contacts.filter(contact =>contact.id !== id);
        setContacts(newContacts);
    };


  return (
    <>
    <h3 className={styles.title}>Contacts mini-Project <span>📞</span></h3>
    <div className={styles.container}>
        <div className={styles.inputs}>
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="fname" value={contact.fname} onChange={changeHandler}/>
            </div>
            <div className={styles.inputs}>
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" id="lname" value={contact.lname} onChange={changeHandler}/>
            </div>
            <div className={styles.inputs}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='  Ex : mamad@qol.net' value={contact.email} onChange={changeHandler}/>
            </div>
            <div className={styles.inputs}>
            <label htmlFor="phone">Phone</label>
            <input type="number" name="phone" id="phone" value={contact.phone} onChange={changeHandler}/>
            </div>
            <button onClick={addHandler}>Register</button>
    </div>
    <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
    <List contacts={contacts} deleteHandler={deleteHandler} editHandler={editHandler} setContacts={setContacts}/>
    </>
  )
}
// }