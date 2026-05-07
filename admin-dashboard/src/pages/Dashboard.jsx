import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Mail,
  Trash2,
  MessageSquare,
  Users
} from "lucide-react";

export default function Dashboard() {
   const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);

  const [selectedEmail, setSelectedEmail] = useState("");

  const [subject, setSubject] = useState("");

  const [message, setMessage] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(false);


  // FETCH CONTACTS
  const fetchContacts = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/contact/all"
      );

      setContacts(res.data);

    } catch (err) {

      console.log(err);

    }

  };


  useEffect(() => {

    fetchContacts();

  }, []);


  // DELETE CONTACT
  const deleteContact = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this inquiry?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `http://localhost:5000/api/contact/${id}`
      );

      fetchContacts();

    } catch (err) {

      console.log(err);

    }

  };


  // SEND REPLY
  const sendReply = async () => {

    try {

      setLoading(true);

      await axios.post(
        "http://localhost:5000/api/reply",
        {
          to: selectedEmail,
          subject,
          message
        }
      );

      alert("Reply sent successfully ✅");

      setShowModal(false);

      setSubject("");

      setMessage("");

    } catch (err) {

      console.log(err);

      alert("Failed to send reply ");

    } finally {

      setLoading(false);

    }

  };

  // LOGOUT
const handleLogout = () => {

  localStorage.removeItem("adminToken");

  navigate("/admin");

};


  return (

    <div className="min-h-screen bg-slate-100 flex">

      {/* SIDEBAR */}
      <aside className="w-[260px] bg-slate-950 text-white p-8 hidden lg:block">

        <h1 className="text-3xl font-bold">

          Legal CRM

        </h1>

        <div className="mt-16 space-y-4">

          <div className="bg-blue-600 p-4 rounded-2xl text-lg font-medium">

            Dashboard

          </div>

          <div className="hover:bg-slate-800 p-4 rounded-2xl transition text-lg">

            Messages

          </div>

          <div className="hover:bg-slate-800 p-4 rounded-2xl transition text-lg">

            Clients

          </div>

          <div className="hover:bg-slate-800 p-4 rounded-2xl transition text-lg">

            Analytics

          </div>

        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 md:p-8">

        {/* HEADER */}
       {/* HEADER */}
<div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">

  {/* LEFT SIDE */}
  <div>

    <h1 className="text-3xl md:text-5xl font-bold text-slate-900">

      Admin Dashboard

    </h1>

    <p className="text-slate-500 mt-2 text-base md:text-lg">

      Manage legal consultation inquiries

    </p>

  </div>


  {/* LOGOUT BUTTON */}
  <button

    onClick={handleLogout}

    className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-2xl transition duration-300 shadow-lg"

  >

    Logout

  </button>

</div>


        {/* STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-slate-500 text-sm md:text-lg">

                  Total Inquiries

                </p>

                <h2 className="text-3xl md:text-5xl font-bold mt-3">

                  {contacts.length}

                </h2>

              </div>

              <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl">

                <Users size={30} />

              </div>

            </div>

          </div>


          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-slate-500 text-sm md:text-lg">

                  Pending Replies

                </p>

                <h2 className="text-3xl md:text-5xl font-bold mt-3">

                  {contacts.length}

                </h2>

              </div>

              <div className="bg-yellow-100 text-yellow-600 p-4 rounded-2xl">

                <MessageSquare size={30} />

              </div>

            </div>

          </div>


          {/* CARD 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-slate-500 text-sm md:text-lg">

                  Gmail Replies

                </p>

                <h2 className="text-3xl md:text-5xl font-bold mt-3">

                  Active

                </h2>

              </div>

              <div className="bg-green-100 text-green-600 p-4 rounded-2xl">

                <Mail size={30} />

              </div>

            </div>

          </div>

        </div>


        {/* TABLE */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* TABLE HEADER */}
          <div className="p-4 md:p-6 border-b">

            <h2 className="text-xl md:text-2xl font-bold text-slate-900">

              Client Inquiries

            </h2>

          </div>


          {/* RESPONSIVE TABLE */}
          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px]">

              {/* TABLE HEAD */}
              <thead className="bg-slate-900 text-white">

                <tr>

                  <th className="p-3 md:p-5 text-left text-sm md:text-base">
                    Name
                  </th>

                  <th className="p-3 md:p-5 text-left text-sm md:text-base">
                    Email
                  </th>

                  <th className="p-3 md:p-5 text-left text-sm md:text-base">
                    Mobile
                  </th>

                  <th className="p-3 md:p-5 text-left text-sm md:text-base">
                    Message
                  </th>

                  <th className="p-3 md:p-5 text-left text-sm md:text-base">
                    Date
                  </th>

                  <th className="p-3 md:p-5 text-center text-sm md:text-base">
                    Actions
                  </th>

                </tr>

              </thead>


              {/* TABLE BODY */}
              <tbody>

                {contacts.map((contact) => (

                  <tr
                    key={contact._id}
                    className="border-b hover:bg-slate-50 transition"
                  >

                    {/* NAME */}
                    <td className="p-3 md:p-5 font-semibold text-sm md:text-base whitespace-nowrap">

                      {contact.name}

                    </td>


                    {/* EMAIL */}
                    <td className="p-3 md:p-5 text-sm md:text-base break-all">

                      {contact.email}

                    </td>


                    {/* MOBILE */}
                    <td className="p-3 md:p-5 text-sm md:text-base whitespace-nowrap">

                      {contact.phone}

                    </td>


                    {/* MESSAGE */}
                    <td className="p-3 md:p-5 text-sm md:text-base max-w-[220px] md:max-w-[350px] break-words leading-relaxed">

                      {contact.message}

                    </td>


                    {/* DATE */}
                    <td className="p-3 md:p-5 text-sm md:text-base whitespace-nowrap">

                      {new Date(contact.createdAt)
                        .toLocaleDateString()}

                    </td>


                    {/* ACTIONS */}
                    <td className="p-3 md:p-5">

                      <div className="flex flex-col md:flex-row gap-2 justify-center">

                        {/* REPLY BUTTON */}
                        <button

                          onClick={() => {

                            setSelectedEmail(contact.email);

                            setShowModal(true);

                          }}

                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-5 py-2 rounded-xl flex items-center justify-center gap-2 transition text-sm md:text-base"
                        >

                          <Mail size={16} />

                          Reply

                        </button>


                        {/* DELETE BUTTON */}
                        <button

                          onClick={() => deleteContact(contact._id)}

                          className="bg-red-600 hover:bg-red-700 text-white px-3 md:px-5 py-2 rounded-xl flex items-center justify-center gap-2 transition text-sm md:text-base"
                        >

                          <Trash2 size={16} />

                          Delete

                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </main>


      {/* MODAL */}
      {showModal && (

        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-2xl shadow-2xl">

            <h2 className="text-2xl md:text-3xl font-bold mb-6">

              Send Gmail Reply

            </h2>


            {/* EMAIL */}
            <input
              type="text"
              value={selectedEmail}
              disabled
              className="w-full p-4 border rounded-2xl mb-5 bg-slate-100 text-sm md:text-base"
            />


            {/* SUBJECT */}
            <input
              type="text"
              placeholder="Email Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-4 border rounded-2xl mb-5 text-sm md:text-base"
            />


            {/* MESSAGE */}
            <textarea
              rows="7"
              placeholder="Write your reply..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 border rounded-2xl text-sm md:text-base"
            ></textarea>


            {/* BUTTONS */}
            <div className="flex flex-col md:flex-row justify-end gap-4 mt-6">

              <button

                onClick={() => setShowModal(false)}

                className="px-6 py-3 rounded-xl bg-gray-300 hover:bg-gray-400 transition"
              >

                Cancel

              </button>


              <button

                onClick={sendReply}

                disabled={loading}

                className={`px-6 py-3 rounded-xl text-white transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >

                {loading ? "Sending..." : "Send Reply"}

              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );
}