import HeroSkeleton from "@/components/skeletons/HeroSkeleton";
import HeroInfo from "./components/HeroInfo/HeroInfo";
import HeroMovieList from "./components/HeroMovieList/HeroMovieList";
import useHero from "./hooks/useHero";

const Hero = () => {
  const {
    loadingNowPlaying,
    selectedImageIndex,
    setIsAutoPlaying,
    imageURL,
    selectedMovie,
    setSelectedImageIndex,
    isAutoPlaying,
  } = useHero();

  return loadingNowPlaying ? (
    <HeroSkeleton />
  ) : (
    <div
      className={`min-h-screen w-full text-light-background flex flex-col justify-between`}
      style={{
        backgroundImage: `linear-gradient(275deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%, rgba(0,0,0,1) 100%),url('${imageURL}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HeroInfo selectedMovie={selectedMovie} />
      <HeroMovieList
        selectedImageIndex={selectedImageIndex}
        setSelectedImageIndex={setSelectedImageIndex}
        isAutoPlaying={isAutoPlaying}
        setIsAutoPlaying={setIsAutoPlaying}
      />
    </div>
  );
};

export default Hero;
