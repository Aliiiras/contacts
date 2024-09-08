import styles from "./ContactItem.module.css";

function ContactItem({data : {id,fname,lname,email,phone},deleteHandler,editHandler,selectHandler,selectedContacts}) {
  console.log("select"+selectedContacts);
  return (
    <li>
                <input 
                        type="checkbox" 
                        checked={selectedContacts.includes(id)} 
                        onChange={() => selectHandler(id)} 
                    />
                <p><span>👤</span>{fname} {lname}</p>
                <p>
                    <span>📧</span> {email}
                </p>
                <p>
                    <span>📞</span> {phone}
                </p>
                <button id="edit" onClick={() => editHandler(id)}>📝</button>
                <button onClick={() => deleteHandler(id)}>🗑️</button>
                </li>
  )
}

export default ContactItem