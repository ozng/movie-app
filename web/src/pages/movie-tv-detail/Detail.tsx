import Container from "@/components/Container";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <Container>
        <h2>{id}</h2>
      </Container>
    </div>
  );
};

export default Detail;
