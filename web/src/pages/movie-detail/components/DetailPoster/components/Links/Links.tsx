import ExternalLink from "@/components/featured/ExternalLink/ExternalLink";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const Links = () => {
  const { movieDetail } = useSelector((state: RootState) => state.movie);

  return movieDetail ? (
    <div className="grid grid-cols-2">
      <ExternalLink
        link={`https://www.imdb.com/title/${movieDetail.imdb_id}/`}
        text="IMDB"
      />
      <ExternalLink link={movieDetail.homepage} text="Offical Site" />
    </div>
  ) : null;
};

export default Links;
