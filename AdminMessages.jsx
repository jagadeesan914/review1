import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import BackButton from "../components/BackButton";

const AdminMessages = () => {
  const [toUserId, setToUserId] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([]);

  const handleSend = () => {
    if (!toUserId || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const newMessage = {
      id: Date.now(),
      toUserId,
      subject,
      message,
      sentAt: new Date().toLocaleString(),
    };

    setSentMessages((prev) => [newMessage, ...prev]);
    setToUserId("");
    setSubject("");
    setMessage("");
    alert("Message sent (stored locally)");
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-64 border-r">
        <AdminSidebar />
      </div>

      <main className="flex-1 p-6 bg-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Send Message to User</h1>
          <BackButton />
        </div>

        <div className="max-w-lg bg-white p-6 rounded shadow">
          <input
            type="text"
            placeholder="Enter User ID"
            value={toUserId}
            onChange={(e) => setToUserId(e.target.value)}
            className="border p-2 w-full mb-3 rounded"
          />
          <input
            type="text"
            placeholder="Subject (optional)"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border p-2 w-full mb-3 rounded"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 w-full mb-3 rounded"
            rows={4}
          />
          <button
            onClick={handleSend}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Send
          </button>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Sent Messages</h2>
          {sentMessages.length === 0 ? (
            <p className="text-gray-500">No messages sent yet.</p>
          ) : (
            <ul className="space-y-3">
              {sentMessages.map((msg) => (
                <li
                  key={msg.id}
                  className="border bg-white p-4 rounded shadow-sm"
                >
                  <p>
                    <strong>To:</strong> {msg.toUserId}
                  </p>
                  <p>
                    <strong>Subject:</strong> {msg.subject || "(No Subject)"}
                  </p>
                  <p>
                    <strong>Message:</strong> {msg.message}
                  </p>
                  <p className="text-sm text-gray-500">
                    Sent At: {msg.sentAt}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminMessages;



