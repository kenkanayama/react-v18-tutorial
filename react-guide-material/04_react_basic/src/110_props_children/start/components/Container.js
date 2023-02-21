import "./Container.css";

const Container = ({ title, children, first, second, color }) => {

  return (
    <div className={`container ${color}`}>
      <h3>{title}</h3>
      <div>{children}</div>
      <div>{first}</div>
      <div>{second}</div>
    </div>
  );
};

export default Container;
