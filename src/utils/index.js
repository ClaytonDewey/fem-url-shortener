export const generateLink = () => {
  const validChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

  let generatedLink = '';

  for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * validChars.length);
    generatedLink += validChars[index];
  }
  return generatedLink;
};
