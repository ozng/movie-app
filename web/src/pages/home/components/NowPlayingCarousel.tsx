import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IMAGE_URL } from "@/constants/tmdb";

const NowPlayingCarousel = () => {
  const nowPlayingMoviesState = useSelector(
    (state: RootState) => state.movie.nowPlaying
  );

  const resolution = "/original";

  return (
    <Carousel className="">
      <CarouselContent>
        {nowPlayingMoviesState.map((item) => (
          <CarouselItem key={item.id} className="cursor-pointer group ">
            <div className="relative">
              <img
                src={`${IMAGE_URL}${resolution}${item.backdrop_path}`}
                alt="backdrop"
                style={{
                  maskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, transparent 100%)`,
                }}
                className="brightness-[.8] group-hover:brightness-100 duration-300"
              />
              <div className="absolute left-0 bottom-0 flex gap-2 min-w-[100%] bg-black/70 items-end">
                <img
                  src={`${IMAGE_URL}${resolution}${item.poster_path}`}
                  alt="poster"
                  className="w-20"
                />
                <div className=" flex flex-col gap-4 pb-4 pl-1">
                  <h2 className="text-3xl text-dark-title">{item.title}</h2>
                  <p className="text-xs tracking-tight font-medium text-dark-paragraph max-w-[90%] line-clamp-2">
                    {item.overview}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default NowPlayingCarousel;
