export const generateWhatsAppLink = (phoneNumber, encodedMessage) => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

