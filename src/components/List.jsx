import ContactItem from "./ContactItem";
import { useState } from 'react'
import styles from './List.module.css'; 

export default function List({contacts,deleteHandler,editHandler,setContacts}) {
  const [selectedContacts, setSelectedContacts] = useState([]);

  const selectHandler = (id) => {
    setSelectedContacts(SelectedContacts =>
      SelectedContacts.includes(id)
        ? SelectedContacts.filter(contactId => contactId !== id)
        : [...SelectedContacts, id]
        );
    };

    const deleteSelectedHandler = () => {
        const newContacts = contacts.filter(contact => !selectedContacts.includes(contact.id));
        setContacts(newContacts);
        setSelectedContacts([]); // Clear selection after deleting
    };
  return (
    <div className={styles.containerL}>
        <h4>Your Contacts</h4>
        {contacts.length
         ? 
         (<>
         <ul>
            {contacts.map((contact)=>( 
                <ContactItem key={contact.id} data={contact} deleteHandler={deleteHandler} editHandler={editHandler} selectHandler={selectHandler} selectedContacts={selectedContacts}/>
            ))}
        </ul>
        <button className={styles.delGroup} onClick={deleteSelectedHandler} disabled={selectedContacts.length === 0}>Delete Selected</button>
        </>    
      )
         : 
         <p>will be show here </p> }
        
    </div>
  );
}

