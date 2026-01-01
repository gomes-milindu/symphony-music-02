import OurstorySection from "../components/body/ourstory/OurstorySection";
import Student from "../components/body/topStudent/student";
import UpCommingCard from "../components/body/upCommingEvents/UpComingCard";
import Header from "../components/header/headerContent/Header";
import UpComingSlide from "../section/homepage/UpComingSlide";
import UpCommingSection from "../section/homepage/UpCommingSection";
import ExpertSection from "../components/body/expert/ExpertSection";

export default function HomePage() {
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <Header />
        <OurstorySection />
        <ExpertSection />
        <Student />

        <div className="hidden md:flex">
          <UpCommingSection />
        </div>
      </div>
    </>
  );
}
