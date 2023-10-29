import React from 'react'
import { useState } from 'react'

function List({contacts}) {
  const [filterText, setFilterText] = useState('');

const filtered = contacts.filter((item) => {
  return Object.keys(item).some((k) =>
    item[k].toString().toLowerCase().includes(filterText.toLowerCase()))
});
console.log(filtered);
  return (
    <div id='list'>
      <input value={filterText} onChange={(e) => setFilterText(e.target.value)} placeholder='Filter Contact'></input>
    <ul className='list'>
      {filtered.map((c,i) => (
        <li key={i}>
          <span>{c.fullname}</span>
          <span>{c.phone_number}</span>
        </li>
      ))}
    </ul>
    <div>Total Contacts : ({contacts.length})</div>
    </div>
    )
}

export default List