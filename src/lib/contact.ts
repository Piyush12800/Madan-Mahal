import { business } from '../data/site';

/** Build a WhatsApp deep link with the enquiry already typed out. */
export const whatsappLink = (message?: string): string => {
  const base = `https://wa.me/${business.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

/** Opening line for a general enquiry. */
export const generalEnquiry = () =>
  whatsappLink(
    `Hello ${business.brand}, I would like a quote for school notebooks.`,
  );

/** Opening line for a specific catalogue item. */
export const productEnquiry = (productName: string) =>
  whatsappLink(
    `Hello ${business.brand}, I would like a quote for the ${productName}. Please send sizes, rulings and rates.`,
  );

export const telLink = (e164: string) => `tel:+${e164}`;

export const mailLink = (subject?: string) =>
  `mailto:${business.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;

export const mapsLink = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${business.company}, ${business.addressOneLine}`,
  )}`;

/**
 * Web3Forms access key. Set VITE_WEB3FORMS_KEY in .env.local to switch the
 * enquiry form on. While it is absent the form stays disabled and points people
 * at WhatsApp and email instead — it never reports a message as sent when
 * nothing was sent.
 */
export const formsKey: string | undefined = import.meta.env
  .VITE_WEB3FORMS_KEY as string | undefined;

export const isFormLive = Boolean(formsKey && formsKey.length > 10);
