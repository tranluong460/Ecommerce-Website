type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="px-5 max-w-[1280px] mx-auto">{children}</div>;
};

export default Container;
