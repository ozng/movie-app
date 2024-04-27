import Rate from "@/components/Rate";
import { Title } from "@/components/ui/typography/title";
import { Type } from "@/components/ui/typography/type";
import { RootState } from "@/services/redux/store";
import { convertMinutesToHour } from "@/utils/format";
import moment from "moment";
import { useSelector } from "react-redux";

const TitleDateRate = () => {
  const { movieDetail } = useSelector((state: RootState) => state.movie);

  return (
    <div className="flex justify-between items-center">
      <div>
        <Title size={"2xl"} thickness={"bold"}>
          {movieDetail?.title}
        </Title>
        {movieDetail?.title !== movieDetail?.original_title ? (
          <Title variant={"fade-1"}>{movieDetail?.original_title}</Title>
        ) : null}
        <div className="flex">
          {movieDetail?.release_date ? (
            <div className="space-x-2">
              <Type size={"sm"} variant={"fade-1"}>
                {moment(movieDetail.release_date).format("D MMMM YYYY")}
              </Type>
              <Type size={"default"} variant={"fade-1"}>
                |
              </Type>
              <Type size={"sm"} variant={"fade-1"}>
                {convertMinutesToHour(movieDetail.runtime)}
              </Type>
            </div>
          ) : null}
        </div>
      </div>
      {movieDetail?.vote_average ? (
        <Rate
          avarage={movieDetail?.vote_average}
          count={movieDetail.vote_count}
        />
      ) : null}
    </div>
  );
};

export default TitleDateRate;
