'use client';
import React from 'react';
import CommentsSection from '../comments/page';

function Contact() {
  return (
    <>
      <div className="bg-white py-24">
        {/* Hero Section */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-green-600 font-bold text-center">Create a Blog Worth Sharing</h1>
        <p className="text-xl sm:text-2xl lg:text-3xl pt-6 text-black font-medium text-center ">
          Get a full suite of intuitive design features and powerful marketing tools to create a unique blog that leaves a lasting impression.
        </p>

{/* Contact Section */}
<div className="min-h-screen flex items-center justify-center bg-white py-12">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
      <div className="space-y-6 flex flex-col justify-center">
        <p className="text-xl font-semibold text-gray-700">We’d love to hear from you! Reach out using the form and share your thoughts or questions with us.</p>
      </div>

      {/* Right Section (Form) */}
      <div className="space-y-6">
        <div className="flex flex-col gap-4">
          <label htmlFor="name" className="text-xl sm:text-2xl font-semibold text-green-600">Name</label>
          <input
            type="text"
            id="name"
            className="h-12 sm:h-14 px-4 bg-gray-100 border border-gray-300 outline-none rounded-md focus:ring-2 focus:ring-green-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="email" className="text-xl sm:text-2xl font-semibold text-green-600">Email</label>
          <input
            type="email"
            id="email"
            className="h-12 sm:h-14 px-4 bg-gray-100 border border-gray-300 outline-none rounded-md focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="message" className="text-xl sm:text-2xl font-semibold text-green-600">Message</label>
          <textarea
            id="message"
            className="px-4 py-3 bg-gray-100 border border-gray-300 outline-none rounded-md focus:ring-2 focus:ring-green-500"
            rows={6}
            placeholder="Enter your message"
          />
        </div>

        <button
          className="w-full sm:w-auto bg-green-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          SEND
        </button>
      </div>
    </div>
  </div>
</div>

      {/* Comments Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800">Leave a Comment</h2>
          <div className="mt-12">
            <CommentsSection />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Contact;
