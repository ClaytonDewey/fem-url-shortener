import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  expanded?: 'true' | 'false';
};

const Button = ({ type = 'button', ...props }: ButtonProps) => {
  return <button type={type} {...props} />;
};
export default Button;
