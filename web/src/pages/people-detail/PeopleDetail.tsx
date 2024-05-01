import Container from "@/components/Container";
import { fetchPeopleDetails } from "@/services/redux/actions/people";
import { useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PeopleInfo from "./components/PeopleInfo";

const PeopleDetail = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchPeopleDetails(id));
    }
  }, [id, dispatch]);

  return (
    <div className="min-h-screen py-24">
      <Container>
        <PeopleInfo />
      </Container>
    </div>
  );
};

export default PeopleDetail;
