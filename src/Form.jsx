import React, { useState } from 'react'
import { TextField } from '@mui/material';
import validation from './validation';
import './App.css'

const Form = () => {

    const [values,setValues] = useState({
        name : '',
        email: '',
        mobile: '',
        password: ''
    })


    const [errors,setError] = useState({})

    const handleFormSubmit = (event)=>{

        event.preventDefault();
        setError(validation(values))
        console.log(errors);
    }
    const handleChange  = (event)=>{
        setValues({
            ...values,
            [event.target.name] : event.target.value ,
        })
        
        
    }
  return (
    <>
    <div className="form vh-100 w-100 m-0 p-0">
        <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
           <div className="row w-75 position-relative">
              <div className="col-lg-6">
              <h1><span className='ani'>R</span>egister</h1>
                <div className='h-100 w-50  bg rounded'>
                 
                  </div>
              </div>
              <div className="col-lg-6 form-column bg-light rounded">
                <form className='d-flex flex-column m-0 px-5 py-5'>
                  <TextField name='name' value={values.name} onChange={(e)=>handleChange(e)}
                   id="standard-basic" label="Enter your username" variant="standard" className='mb-3'/>
                   
                    {errors.name && <p className='error'>{errors.name}</p>}

                  <TextField name='mobile' value={values.mobile} onChange={handleChange}
                   id="standard-basic" label="Enter your mobile number" variant="standard" className='mb-3' />
                  
                  {errors.mobile && <p className='error'>{errors.mobile}</p>}


                  <TextField name='email' value={values.email} onChange={handleChange}
                  id="standard-basic" label="Enter your email address" variant="standard" className='mb-3'/>
                  
                  {errors.email && <p className='error'>{errors.email}</p>}

                  
                  <TextField name='password' value={values.password} onChange={handleChange}
                  id="standard-basic" label="Enter your password" variant="standard" className='mb-3'/>
                  
                  {errors.password && <p className='error'>{errors.password}</p>}

                  
                  <div className='d-flex justify-content-center'>
                    <button type='submit' onClick={handleFormSubmit} className='btn-grad w-75'>Register</button> 
                  </div>
                </form>
              </div>
           </div>
        </div>
    </div>
  </>
  )
}

export default Form