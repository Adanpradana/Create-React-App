


const Welcome = (props) => {
  return (
    <div>
      <h1>{props.children}</h1>
      <button className="btn-danger">CLick Me!</button>
    </div>
  );
};
export default Welcome;
