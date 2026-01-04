export function telLink(e164: string) {
  const clean = e164.replace(/\s+/g, "");
  return `tel:${clean}`;
}

export function mailLink(email: string) {
  return `mailto:${encodeURIComponent(email)}`;
}

// ✅ Firma EXACTA: (digits, message)
export function waLink(digits: string, message: string) {
  const clean = digits.replace(/\D+/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${clean}?text=${text}`;
}
