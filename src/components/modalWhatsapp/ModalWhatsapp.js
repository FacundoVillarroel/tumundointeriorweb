import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
const phoneNumber = process.env.REACT_APP_PHONE_NUMBER

const WhatsAppModal = ({isModalOpen,setIsModalOpen, message}) => {

  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappLink, "_blank")
    setIsModalOpen(false)
  }

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">
              Envía confirmacion al centro 'Tu mundo interior'.
            </h2>
            <p className="modal-description">
              Presiona el botton para enviar un mensaje de whatsapp.
            </p>
            <div className="button-container">
              <button className="whatsapp-button" onClick={handleWhatsAppClick}>
                Enviar Mensaje{" "}
                <RiWhatsappFill color="green" fontSize={"1.6rem"} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WhatsAppModal