import React from 'react';

const WhatsAppButton = ({phoneNumber, message}) => {
  
  // Codificamos el mensaje en URL
  const encodedMessage = encodeURIComponent(message);

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button>
          Enviar mensaje a WhatsApp
        </button>
      </a>
    </div>
  );
};

export default WhatsAppButton;