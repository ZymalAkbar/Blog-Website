'use client'
import React from 'react';
import CommentsSection from '../comments/page';

function Contact() {
    return (<>
        <div>
            <h1 className="text-6xl text-green-600 font-bold text-center pt-48" >Create a Blog worth sharing</h1>
            <p className="text-3xl pt-8 text-black font-bold text-center">
                Get a full suite of intuitive design features and powerful marketing tools to create a unique blog that leaves a lasting impression.
                </p>

            <div className="p-32 container">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-8 pt-56">
                
                    </div>
                    <div className="space-y-8">
                    <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-2xl font-bold text-green-600">Name </label>
                    <input type="text"  id="name" className="h-[50px] bg-gray-100 border outline-black "></input>
                    </div>
                    <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-2xl font-bold text-green-600">Email </label>
                    <input type="email"  id="email" className="h-[50px] bg-gray-100 border outline-black "></input>
                    </div>
                    <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-2xl font-bold text-green-600">Message </label>
                    <textarea id="message" className=" bg-gray-100 border outline-black " rows={7} ></textarea>
                    </div>
                    <button className="bg-green-600 text-white p-2 rounded">SEND</button>
                    </div>
                   
            </div>
        </div>
        <div><CommentsSection/></div>
        </div>
    </>
    )
}
export default Contact;