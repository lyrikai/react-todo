import React from 'react';
import { useState } from 'react';
import Showdown from 'showdown';

const converter = new Showdown.Converter();

let txt = converter.makeHtml(localStorage.getItem('txt'))
let title = converter.makeHtml(localStorage.getItem('title'))

function createMarkupT() {
    return {__html: txt};
  }

function createMarkup() {
    return {__html: title};
  }
  
const NoteDisplay = () => {
    
     return (
    <div className='h-50 p-5 border border-secondary'>
        <div dangerouslySetInnerHTML={createMarkup()} />
        <div dangerouslySetInnerHTML={createMarkupT()} />
    </div>
    );
}


export default NoteDisplay;