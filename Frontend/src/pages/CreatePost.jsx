
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const navigate=useNavigate();

const handlesubmit=async(e)=>{
     e.preventDefault();
    // collect all form data image file caption send it to database and database store it showit is on the feed page

    const formdata= new FormData(e.target);
    axios.post("http://localhost:3000/post-file",formdata).then
    ((res)=>{
       navigate("/feed");
    }).catch((err)=>{
        console.log(err);
    })
} 
    

  return (
    <section className='create-post'>
        <form onSubmit={handlesubmit}>
            <input type='file' name='image' accept='image/*'></input>
            <input  type='text' name='caption' required placeholder='Enter Your Caption'></input>
            <button>Submit</button>
        </form>
    </section>
  )
}

export default CreatePost
