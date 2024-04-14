interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <div className="px-24">
      <div {...props}>{children}</div>
    </div>
  );
};

export default Container;
