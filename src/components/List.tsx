import {
  ComponentPropsWithoutRef,
  ElementType,
  Fragment,
  ReactNode,
} from 'react';

type ListProps<T, C extends ElementType> = {
  as?: C;
  data: T[];
  keyExtractor: (item: T) => string;
  renderItem: (item: T) => ReactNode;
  className?: string;
  childClassName?: string;
} & ComponentPropsWithoutRef<C>;

function List<T, C extends ElementType = 'ul'>({
  data,
  keyExtractor,
  renderItem,
  as,
  childClassName,

  className,
}: ListProps<T, C>) {
  const Component = as ?? 'ul';
  const isUnorderedList = Component.toString() === 'ul';
  const ItemWrapper = isUnorderedList ? 'li' : Fragment;

  return (
    <Component className={className}>
      {data.map((item) => (
        <ItemWrapper key={keyExtractor(item)} className={childClassName}>
          {renderItem(item)}
        </ItemWrapper>
      ))}
    </Component>
  );
}
export default List;
