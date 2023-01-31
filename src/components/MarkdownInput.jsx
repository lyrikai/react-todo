import React from 'react';
import { useState } from 'react';

const MarkdownInput = (props) => {

    let i = 0
    const [state, setState] = useState("")
    const [texte, setTexte] = useState("")

    const handle = (e) => {
        setState(e.target.value) 
        i = i + 1 
    }
    const text = (e) => {
        setTexte(e.target.value)
        props.callbackFromParent(e.target.value);
    }

    const handleSave = (e) => {
        localStorage.setItem('txt', texte);
        localStorage.setItem('title', state);
      };

    return (
    <div className="">
        <form className='d-flex flex-column  p-5'>
            <input  className=' mb-5 p-2' type="text" placeholder="Titre" onChange={handle}></input>
            <textarea  rows="8" className=' mb-5 p-2' id="" name="" placeholder="Texte" onChange={text}></textarea>
            <button className='w-25' onClick={handleSave}>Save</button>
        </form>
        
    </div>
    );
};


export default MarkdownInput;