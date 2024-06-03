import { fetchPeopleDetails } from "@/services/redux/actions/people";
import { resetPeople } from "@/services/redux/slices/peopleSlice";
import { RootState, useAppDispatch } from "@/services/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const usePeopleDetail = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { selectedPeople } = useSelector((state: RootState) => state.people);

  useEffect(() => {
    if (id) {
      dispatch(fetchPeopleDetails(id));
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => {
      dispatch(resetPeople());
    };
  }, [id, dispatch]);
  return { selectedPeople };
};

export default usePeopleDetail;
