"use client";
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const ContactForm = () => {
  const [ formData, setFormData ] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const jsonData = JSON.stringify(formData);
    console.log(formData, 'erroooooo');
    const { data, error } = await supabase.from("contacts").insert([formData]);
    // console.log(data);
    // console.log(error);
    if (error) 
      console.log(error);
    else alert("Message sent successfully");
  };

  return (
    <div>
      <section className='py-20 bg-gray-100 text-center'>
          <h2 className='text-3xl font-bold'>Contact Me</h2>
          <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
            <input name='name' placeholder='Your Name' onChange={handleChange} className='w-80 p-2 border rounded' required />
            <input type="email" name='email' placeholder='example@email.com' onChange={handleChange} className='w-80 p-2 border rounded' required />
            <textarea name="message" placeholder='Your Message' onChange={handleChange} className='w-80 p-2 border rounded h-32' required></textarea>
            <button type='submit' className='bg-blue-500 text-white px-6 py-2 rounded'>Send Message</button>
          </form>
      </section>
    </div>
  );
};

export default ContactForm;