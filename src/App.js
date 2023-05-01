import './App.css';
import React from 'react'

import Modal from './Modal';

function App() {

  const [open,setOpen] = React.useState(false)
  return (
    <div className="App">
      <button className="btn btn-open" onClick={()=> setOpen(true)}>Open</button>
     { open && <Modal onClick={()=> setOpen(false)}/>}
    </div>
  );
}

export default App;
