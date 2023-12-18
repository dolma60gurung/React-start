import { useFormik } from 'formik'
import React from 'react'

const Contact = ({addSome}) => {
  const formik = useFormik({
    initialValues :{
      title :'',
      detail :''
    },
    onSubmit : (val, {resetForm}) => {
      console.log(val);
      addSome(val);
      resetForm();
    }
  });
  return (

    <div className='p-7'>

      <form onSubmit={formik.handleSubmit}>

        <p className='space-y-3'>
          <label htmlFor="title">Title</label>
        <br />
        <input
        name="title"
         id="title" 
         onChange={formik.handleChange}
         value={formik.values.title}
         className='border-2 border-orange-300 px-2 outline-none focus:ring-orange-400 focus:ring-4'type="text" placeholder='title'/>
         </p>

        <p>
          <label htmlFor="detail">Detail</label>
        <br />
        <textarea 
        name="detail"
        id="detail" 
        onChange={formik.handleChange}
        value={formik.values.detail}
        className='border-2 border-orange-700 px-2'cols="19" rows="10"></textarea>
        </p>

        <button 
        type='submit'
        className='mt-2 bg-green-500 text-white px-3 py-2 rounded-md'>Submit
        </button>

      </form>

    </div>
  )
}

export default Contact

