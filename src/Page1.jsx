import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arry = [...Array(100).keys()];

  const history = useHistory();

  const onClickDetailA = () => history.push("/page1/detailA");

  console.log(history);
  return (
    <div>
      <h1>Page1!</h1>
      <Link
        to={{
          pathname: "/page1/detailA",
          state: arry
        }}
      >
        DetaiA
      </Link>
      <br />
      <Link to="/page1/detailB">DetaiB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
