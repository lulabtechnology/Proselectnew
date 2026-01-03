export function telLink(e164: string) {
  return `tel:${e164}`;
}

export function mailLink(email: string) {
  return `mailto:${email}`;
}

// firma EXACTA: (digits, message)
export function waLink(digits: string, message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${text}`;
}
