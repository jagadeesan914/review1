import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import BackButton from '../components/BackButton';

const RecruiterMessages = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      recruiter: 'Priya Sharma',
      company: 'TechNova',
      message: 'We reviewed your profile and would like to invite you for an interview.',
      sentAt: 'July 24, 2025',
      reply: '',
      isReplying: false,
      status: 'Unread',
    },
    {
      id: 2,
      recruiter: 'Rahul Verma',
      company: 'Designify',
      message: 'We are impressed with your design portfolio. Let’s connect!',
      sentAt: 'July 22, 2025',
      reply: '',
      isReplying: false,
      status: 'Unread',
    },
    {
      id: 3,
      recruiter: 'Sneha Iyer',
      company: 'CodeCraft',
      message: 'We have a backend developer opening that matches your profile.',
      sentAt: 'July 20, 2025',
      reply: '',
      isReplying: false,
      status: 'Read',
    },
  ]);

  const handleReplyToggle = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id
          ? {
              ...msg,
              isReplying: !msg.isReplying,
              status: msg.status === 'Unread' ? 'Read' : msg.status,
            }
          : msg
      )
    );
  };

  const handleReplyChange = (id, value) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id
          ? {
              ...msg,
              reply: value,
              status: value.trim() !== '' ? 'Responded' : msg.status,
            }
          : msg
      )
    );
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this message?');
    if (confirmed) {
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-white border-r shadow-md">
        <Sidebar />
      </div>

      <main className="flex-1 p-6 bg-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Recruiter Messages</h1>
          <BackButton />
        </div>

        {messages.length === 0 ? (
          <p className="text-gray-600">No messages from recruiters at the moment.</p>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`bg-white border p-4 rounded shadow-sm hover:shadow-md transition relative ${
                  msg.status === 'Unread' ? 'border-blue-400' : 'border-gray-200'
                }`}
              >
                {msg.status === 'Unread' && (
                  <span className="absolute top-3 right-3 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
                )}

                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-blue-800">
                    {msg.recruiter}{' '}
                    <span className="text-sm text-gray-500">({msg.company})</span>
                  </h3>
                  <span className="text-sm text-gray-400">{msg.sentAt}</span>
                </div>

                <p className="text-gray-700 mb-3">{msg.message}</p>

                <p className="text-sm italic text-gray-500 mb-2">
                  Status:{' '}
                  <span
                    className={`font-semibold ${
                      msg.status === 'Unread'
                        ? 'text-red-600'
                        : msg.status === 'Read'
                        ? 'text-yellow-600'
                        : 'text-green-700'
                    }`}
                  >
                    {msg.status}
                  </span>
                </p>

                {msg.isReplying && (
                  <div className="mb-3">
                    <textarea
                      className="w-full border p-2 rounded"
                      rows={3}
                      placeholder="Type your reply here..."
                      value={msg.reply}
                      onChange={(e) => handleReplyChange(msg.id, e.target.value)}
                    />
                  </div>
                )}

                <div className="flex justify-end gap-2">
                  <button
                    className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    onClick={() => handleReplyToggle(msg.id)}
                  >
                    {msg.isReplying ? 'Cancel' : 'Reply'}
                  </button>
                  <button
                    className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    onClick={() => handleDelete(msg.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default RecruiterMessages;




