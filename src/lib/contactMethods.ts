export const contactMethodsMap = {
  discord: (username: string) => `https://discord.com/users/${username}`,
  whatsapp: (username: string, text?: string) =>
    `https://wa.me/${username}?text=${text || ""}`,
  telegram: (username: string) => `https://t.me/${username}`,
  twitter: (username: string, text?: string) =>
    `https://twitter.com/messages/compose?recipient_id=${username}&text=${
      text || ""
    }`,
};

export const contactMethods = Object.keys(contactMethodsMap);

export type contactMethodsType = keyof typeof contactMethodsMap;
// "discord" | "email" | "whatsapp" | "telegram" | "twitter"
