
'use client'
import React, { useState } from 'react';

const CommentsSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="comments-section text-center justify-center items-center">
      <h3 className="text-5xl text-green-600 font-semibold mb-4">Comments</h3>
      <input
        type="text"
        value={newComment}
        onChange={handleCommentChange}
        placeholder="Add a comment..."
        className="border p-5 rounded mb-4 w-72"
      />
      
      <button onClick={handleCommentSubmit} className="bg-green-600 text-white p-3 ml-3 rounded ">SUBMIT</button>

      <div className="comments-list mt-6">
        {comments.map((comment, index) => (
          <div key={index} className="comment mb-2 p-2 border-b bg-gray-100">
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;

