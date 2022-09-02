import type {
  ElementType,
  PropsWithChildren,
  ComponentPropsWithoutRef,
} from 'react';
import cn from 'classnames';

type Props<C extends ElementType> = PropsWithChildren<{
  as?: C;
  clean?: boolean;
  className?: string;
}> &
  ComponentPropsWithoutRef<C>;

function Container<C extends ElementType = 'div'>({
  children,
  className,
  clean = false,
  as,
}: Props<C>) {
  const rootClassName = cn(className, {
    'mx-auto max-w-7xl px-6 w-full': !clean,
  });

  const Component = as ?? 'div';

  return <Component className={rootClassName}>{children}</Component>;
}

export default Container;
