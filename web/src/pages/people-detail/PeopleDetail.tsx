import Container from "@/components/featured/Container/Container";
import PeoplePicture from "./components/PeoplePoster/PeoplePicture";
import PeopleInformation from "./components/PeopleInformation/PeopleInformation";
import usePeopleDetail from "./hooks/usePeopleDetail";

const PeopleDetail = () => {
  const { selectedPeople } = usePeopleDetail();

  return (
    <div className="min-h-screen py-24">
      <Container className="space-y-12">
        <div className="grid grid-cols-4 gap-12">
          {selectedPeople ? (
            <>
              <PeoplePicture />
              <PeopleInformation />
            </>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default PeopleDetail;
