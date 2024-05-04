import Container from "@/components/Container";
import { fetchPeopleDetails } from "@/services/redux/actions/people";
import { useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PeopleInfo from "./components/PeopleInfo";
import { resetPeople } from "@/services/redux/slices/peopleSlice";

const PeopleDetail = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchPeopleDetails(id));
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => {
      dispatch(resetPeople());
    };
  }, [id, dispatch]);

  return (
    <div className="min-h-screen py-24">
      <Container className="space-y-12">
        <PeopleInfo />
      </Container>
    </div>
  );
};

export default PeopleDetail;
