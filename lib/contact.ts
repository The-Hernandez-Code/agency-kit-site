const FALLBACK_CALCOM_URL = "https://cal.com/centurion-studio";
const FALLBACK_CONTACT_EMAIL = "hello@centurionstudio.example";
const FALLBACK_EMAIL_SUBJECT = "Discovery call request";
const FALLBACK_EMAIL_BODY =
  "Hi,\n\nI'd like to discuss a Power Platform + M365 Copilot engagement.\n\nContext:\nTimeline:\nTeam size:\n\nThanks!";

const readEnv = (value: string | undefined, fallback: string) => {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : fallback;
};

export const contactConfig = {
  calComUrl: readEnv(process.env.NEXT_PUBLIC_CALCOM_URL, FALLBACK_CALCOM_URL),
  email: readEnv(process.env.NEXT_PUBLIC_CONTACT_EMAIL, FALLBACK_CONTACT_EMAIL),
  emailSubject: readEnv(process.env.NEXT_PUBLIC_CONTACT_EMAIL_SUBJECT, FALLBACK_EMAIL_SUBJECT),
  emailBody: readEnv(process.env.NEXT_PUBLIC_CONTACT_EMAIL_BODY, FALLBACK_EMAIL_BODY),
};

const decodePotentiallyEncodedBody = (value: string) => {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

export const contactLinks = {
  bookingUrl: contactConfig.calComUrl,
  emailAddress: contactConfig.email,
  mailtoHref: `mailto:${contactConfig.email}?subject=${encodeURIComponent(contactConfig.emailSubject)}&body=${encodeURIComponent(
    decodePotentiallyEncodedBody(contactConfig.emailBody)
  )}`,
};
