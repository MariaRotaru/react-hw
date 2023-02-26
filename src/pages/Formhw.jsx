import React, {useEffect} from 'react';
import { useForm } from "react-hook-form";



function Formhw() {
    const { register, handleSubmit, watch, formState: { errors }, formState } 
    = useForm({
    mode:"onChange",
    }
    );

useEffect(() => {
    console.log('formState', formState);
    console.log('errors', errors);
}
)

 const submitHandler = (values) => console.log(values);
 
    return (
        
        <div style={{left:'50%', top: '50%', position:'absolute', transform:'translate(-50%, -50%)'}}>
    <h1>Form</h1>
    <form onSubmit={handleSubmit(submitHandler)} style={{ left:'flex', flexDirection: 'column', gap: '50px 50px', width:'30rem' }}>
        <div>
        <label>Username</label><br/>
        <input type="string" {...register('username', {required:true}, {
          validate: (value) => 20 > value.length > 2 
        }, )}/>
        {errors.username && errors.username.type === 'required' && <span>This field is required</span>}
        </div>
        <div>
        <label>Email</label><br/>
        <input type="string" {...register('email', {required:true}, {
          validate: (value) => value.length < 50
        })}/>
        {errors.email && errors.email.type === 'required' && <span>This field is required</span>}
        </div>
        <div>
        <label>Age</label><br/>
        <input type="string" {...register('age', {
          validate: {
            positiveNumber: (value) => parseFloat(value) > 0,
          }
        }, {required:true})}/> 
        {errors.age && errors.age.type === 'positiveNumber' && <span>Your age should be a positive number</span>}
        </div><br/>
        <button type="submit">Submit</button>
    </form>
    <a href="/"><h2>Back to Home</h2></a>
    <a href="/time"><h2>Time</h2></a>
    </div>
  )
}

export default Formhw