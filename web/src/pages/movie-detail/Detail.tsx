import Container from "@/components/featured/Container/Container";
import useMovieDetail from "./hooks/useMovieDetail";
import DetailPoster from "./components/DetailPoster/DetailPoster";
import DetailInformation from "./components/DetailInformation/DetailInformation";
import Collection from "./components/Collection/Collection";
import Similar from "./components/Similar/Similar";

const Detail = () => {
  useMovieDetail();
  return (
    <div className="min-h-screen py-24">
      <Container className="space-y-24">
        <div className="grid grid-cols-4 gap-12">
          <DetailPoster />
          <DetailInformation />
        </div>
        <Collection />
        <Similar />
      </Container>
    </div>
  );
};

export default Detail;
