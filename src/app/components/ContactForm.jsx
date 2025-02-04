"use client";
import React, { useState, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import * as motion from 'motion/react-client';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const ContactForm = () => {
  const [ formData, setFormData ] = useState({ name: "", email: "", message: "" });

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    inputRef.current.reset();

    const { data, error } = await supabase.from("contacts").insert([formData]);
    if (error) 
      console.log(error);
    else alert("Message sent successfully");

  };

  return (
    <div>
      <section className='py-20 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <div className='relative flex flex-col items-center mt-20 mb-20'>
              <div className='absolute text-center mt-5'>
                <h1 className='text-4xl font-intert font-extrabold text-blue-500 pb-4'>CONTACT ME</h1>
                <hr className=' border-blue-500 border-2 w-24 md:w-58 mx-auto'/>
              </div>

              <div>
                <h1 className='text-6xl md:text-9xl font-intert font-extrabold opacity-10'>CONTACT ME</h1>
              </div>
          </div>
        </motion.div>
                  

        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
          <form onSubmit={handleSubmit} ref={inputRef} className='container mt-6 space-y-6 flex flex-col justify-center items-center w-full md:w-1/2 px-4'>
              <input 
                name='name' 
                placeholder='Your Name' 
                onChange={handleChange} 
                className='w-full p-2 border rounded text-black placeholder:text-sm' 
                required 
              />
              

              <input 
                type="email" 
                name='email' 
                placeholder='example@email.com' 
                onChange={handleChange} 
                className='w-full p-2 border rounded text-black placeholder:text-sm' 
                required 
              />

              <textarea 
                name="message" 
                placeholder='Your Message' 
                onChange={handleChange} 
                className='w-full p-2 border rounded h-32 text-black placeholder:text-sm' 
                required
              ></textarea>

              <button type='submit' className='bg-blue-500 text-white px-6 py-2 rounded'>Send Message</button>
          </form>
        </motion.div>

      </section>
    </div>
  );
};

export default ContactForm;