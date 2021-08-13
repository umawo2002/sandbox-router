import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  // console.log(query);
  return (
    <div>
      <h1>UrlParameter!!!</h1>
      <p>param:{id}</p>
      <p>Query Param:{query.get("name")}</p>
    </div>
  );
};
