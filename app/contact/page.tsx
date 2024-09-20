"use client"
import React, { useRef, FormEvent } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp, BsMessenger } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_aou2du9', 'template_mkj6j54', form.current, 'Jw9B0qYMOy8tuS3JP')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

      e.currentTarget.reset();
    }
  };

  return (
    <section id='contact' className=" w-[100%] mt-10">
      <h5 className="text-center text-2xl mb-2 ml-[25%]">Get in Touch</h5>
      <h2 className="text-center text-4xl mb-8 ml-[25%]">Contact Me</h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[30%_58%] gap-8 md:gap-12">
        <div className="flex flex-col gap-5 mt-[-35%]">
          <article className='bg-variant p-5 rounded-xl text-center border border-transparent transition hover:bg-transparent hover:border-variant'>
            <AiOutlineMail className='text-3xl mb-2 mx-auto' />
            <h4 className="text-xl">Email</h4>
            <h5 className="text-sm">team@kuki.co.in</h5>
            <a href="mailto:team@kuki.co.in" target='_blank' rel='noopener noreferrer' className="mt-2 inline-block text-sm">Send a Message</a>
          </article>

          <article className='bg-variant p-5 rounded-xl text-center border border-transparent transition hover:bg-transparent hover:border-variant'>
            <BsMessenger className='text-3xl mb-2 mx-auto' />
            <h4 className="text-xl">Linkedin</h4>
            <h5 className="text-sm">Kuki Co.</h5>
            <a href="https://www.linkedin.com/company/kukico/" target='_blank' rel='noopener noreferrer' className="mt-2 inline-block text-sm">Send a Message</a>
          </article>

          <article className='bg-variant p-5 rounded-xl text-center border border-transparent transition hover:bg-transparent hover:border-variant'>
            <BsWhatsapp className='text-3xl mb-2 mx-auto' />
            <h4 className="text-xl">WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=9303609014" target='_blank' rel='noopener noreferrer' className="mt-2 inline-block text-sm">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 text-black">
          <input type="text" name='name' placeholder='Your Full Name' required className="w-full p-3 rounded-md bg-transparent border-2 border-primary-variant text-black" />
          <input type="email" name='email' placeholder='Your Email' required className="w-full p-3 rounded-md bg-transparent border-2 border-primary-variant text-black" />
          <textarea name="message" rows={7} placeholder='Your Message' required className="w-full p-6 rounded-md bg-transparent border-2 border-primary-variant text-black resize-none"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;