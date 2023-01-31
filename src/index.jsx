import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarkdownInput from 'components/MarkdownInput.jsx'
import NoteDisplay from 'components/NoteDisplay.jsx'
import LocalList from 'components/localList.jsx'

const App = () => (

<>
<div className='d-flex flex-row vw-100 vh-100 bg-black '>
  <div className='text-white bg-dark border border-secondary w-25 h-100 border border-white p-3 MarkdownInput '>
        <h3 class="text-center">Todo List</h3>
        <hr></hr>
        <LocalList />
    </div>
    <div className='text-white bg-dark border border-secondary w-75 h-100 '>
        <NoteDisplay/>
        <MarkdownInput callbackFromParent={(value) => console.log(value)} />
    </div>
</div>
</>


);

ReactDOM.render(<App />, document.getElementById('root'));
