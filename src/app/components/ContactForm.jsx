"use client";
import React, { useState, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useGSAP } from '../../hooks/useGSAP';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null;

const ContactForm = () => {
  const [ formData, setFormData ] = useState({ name: "", email: "", message: "" });
  const [ loading, setLoading ] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.from("contacts").insert([formData]);
    if (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    } else {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        inputRef.current.reset();
    }
    setLoading(false);
  };

  useGSAP(() => {
    gsap.fromTo(".contact-reveal",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, scrollTrigger: { trigger: containerRef.current, start: "top 70%" } }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="contact" className='py-20 md:py-28 px-2 bg-zinc-950 text-white border-t border-white/5'>
      <div className='container mx-auto max-w-4xl text-center'>
        
         <div className="contact-reveal mb-8 md:mb-12 w-full">
            <h2 className='text-xs sm:text-sm font-bold tracking-widest text-blue-500 uppercase mb-4'>Get In Touch</h2>
            <h1 className='text-2xl md:text-4xl font-bold'>Let's Build Something Awesome.</h1>
         </div>

         <div className="contact-reveal bg-zinc-900 border border-zinc-800 rounded-3xl p-5 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} ref={inputRef} className='space-y-6'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-left space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Your Name</label>
                         <input 
                            name='name' 
                            placeholder='John Doe' 
                            onChange={handleChange} 
                            className='w-full p-3 sm:p-4 bg-zinc-950 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors' 
                            required 
                        />
                    </div>
                     <div className="text-left space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Email Address</label>
                        <input 
                            type="email" 
                            name='email' 
                            placeholder='john@example.com' 
                            onChange={handleChange} 
                            className='w-full p-3 sm:p-4 bg-zinc-950 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors' 
                            required 
                        />
                    </div>
                </div>

                <div className="text-left space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Your Message</label>
                    <textarea 
                        name="message" 
                        placeholder='Tell me about your project...' 
                        onChange={handleChange} 
                        className='w-full p-3 sm:p-4 bg-zinc-950 border border-zinc-700 rounded-xl h-40 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none' 
                        required
                    ></textarea>
                </div>

                <button 
                    type='submit' 
                    disabled={loading}
                    className='w-full py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all transform hover:scale-[1.01] shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
         </div>

      </div>
    </section>
  );
};

export default ContactForm;