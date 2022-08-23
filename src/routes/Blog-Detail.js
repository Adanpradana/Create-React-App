import { useParams } from "react-router-dom";

const Blogdetail = () => {
  const paramUse = useParams();
  return (
    <>
      <h1>BLOG {paramUse.slug}</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, quisquam vitae laboriosam a assumenda itaque nihil optio distinctio at animi.</p>
    </>
  );
};
export default Blogdetail;
