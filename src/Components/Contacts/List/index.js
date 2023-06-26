import {useState} from 'react'

function List({ contacts }) {
  const [filterText, setFilterText] = useState('');

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
       item[key]
       .toString()
       .toLowerCase()
       .includes(filterText.toLowerCase())
    );
  });

  console.log(filtered);

  return (
    <div>
      <input 
        placeholder='Filter'
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
       />
      <ul>
        {
          filtered.map((contact, index)=>{
            return(
            <li key={index}><span>{contact.fullname} </span> <span> {contact.phone_number}</span></li>
            )
          })
        }
      </ul>
      {
        <h2>Total Contacts ({filtered.length})</h2>
      }
    </div>
  )
}

export default List
