import { useParams } from "react-router-dom";

const PeopleDetail = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default PeopleDetail;
