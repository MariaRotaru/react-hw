import React from 'react'
import {useForm} from "react-hook-form";

function FirstHookForm() {
    const {register, handleSubmit, watch, formState: {errors}, formState} = useForm()
  return (
    <form onSubmit={handleSubmit(submitHandler) }>
        <button type="submit"></button>
    </form>
  )
}

export default FirstHookForm