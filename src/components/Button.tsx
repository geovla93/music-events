import type { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

function Button({ children, className, variant = 'primary', ...props }: Props) {
  const rootClassName = cn(
    className,
    'rounded border-0 text-white transition focus:outline-none',
    {
      'inline-block bg-red-500 py-2.5 px-5 hover:bg-opacity-90':
        variant === 'primary',
      'bg-black py-1.5 px-4 text-sm hover:bg-opacity-80':
        variant === 'secondary',
    },
  );

  return (
    <button {...props} className={rootClassName}>
      {children}
    </button>
  );
}

export default Button;
