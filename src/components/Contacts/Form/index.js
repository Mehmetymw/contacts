import {useState,useEffect} from 'react'


const initialFormValues =  {fullname : "", phone_number : ''};
function Form({addContact, contacts}) {

  const [input,setInput] = useState(initialFormValues);

  useEffect(() => {
    setInput(initialFormValues);
  },[contacts])

  const onChangeInput= (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  };

const onSubmit = (e) => {
  e.preventDefault();
  
  if(input.fullname === '' || input.phone_number === ""){
    return false;
  }

  addContact([...contacts,input]);


  console.log(input);
}

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name = "fullname" value={input.fullname} placeholder='Fullname' onChange={onChangeInput}></input>
      </div>

      <div>
        <input name = "phone_number" value={input.phone_number} placeholder='Phone Number' onChange={onChangeInput}></input>
      </div>
      <div className='btn'>
        <button >Add</button>
      </div>
    </form>
  )
}

export default Form;
