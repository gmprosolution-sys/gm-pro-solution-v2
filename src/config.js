const CONFIG = {
  ZAPIER_URL: "https://hooks.zapier.com/hooks/catch/25300476/usph5ce/",
  GETFORM_URL: "https://forminit.com/f/ajjrzeja",
};

export const isGetformConfigured = () =>
  Boolean(CONFIG.GETFORM_URL) && !CONFIG.GETFORM_URL.includes("YOUR_KEY");

export default CONFIG;
