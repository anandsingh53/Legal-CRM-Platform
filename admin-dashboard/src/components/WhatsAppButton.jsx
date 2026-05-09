import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {

  const phoneNumber = "919695444200";

  const message =
    "Hello Sir,I would like to get legal consultation regarding my case. Please let me know a suitable time to connect . " ;


  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (

    <a
      href={whatsappURL}

      target="_blank"

      rel="noopener noreferrer"

      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition duration-300 hover:scale-110 animate-bounce"
    >

      <FaWhatsapp size={38} />

    </a>

  );
}