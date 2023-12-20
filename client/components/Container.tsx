import "@/styles/other/components.css";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="cr-div">{children}</div>;
};

export default Container;
