export const Container = ({
  as: Element = 'div',
  children,
  className,
  ...rest
}) => {
  return (
    <Element
      {...rest}
      className={`px-5 w-full m-auto ${className}`}
    >
      {children}
    </Element>
  )
}