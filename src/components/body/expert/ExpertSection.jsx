import Card from "./Card";

function ExpertSection() {
  return (
    <section className="w-full h-auto flex justify-center items-center">

      {/* MAIN CONTAINER */}
      <div className="w-10/12 h-full flex flex-col justify-center items-center gap-7 ">

        {/*  TOP ROW */}
        <div className="w-full   flex flex-row gap-5 justify-center items-center">

          {/* left spacer */}
          <div className="w-2/12"></div>

          {/* card 1 */}
          <div className="w-4/12 aspect-[4.128]">
            <Card
              icon="src/assets/Frame 41.png"
              topic="Expert Instructors"
              para="Learn from professional musicians with years of teaching experience"
            />
          </div>

          {/* card 2 */}
          <div className="w-4/12 aspect-[4.128]">
            <Card
              icon="src/assets/Frame 41.png"
              topic="Expert Instructors"
              para="Learn from professional musicians with years of teaching experience"
            />
          </div>

          {/* right spacer */}
          <div className="w-2/12"></div>
        </div>

        {/* BOTTOM ROW */}
        <div className="w-12/12 flex gap-5 flex flex-row ">
          <div className="w-4/12 aspect-[4.128]">
            <Card
              icon="src/assets/Frame 41.png"
              topic="Expert Instructors"
              para="Learn from professional musicians with years of teaching experience"
            />
          </div>

          <div className="w-4/12 aspect-[4.128]">
            <Card
              icon="src/assets/Frame 41.png"
              topic="Expert Instructors"
              para="Learn from professional musicians with years of teaching experience"
            />
          </div>

          <div className="w-4/12 aspect-[4.128]">
            <Card
              icon="src/assets/Frame 41.png"
              topic="Expert Instructors"
              para="Learn from professional musicians with years of teaching experience"
            />
          </div>
        </div>

      </div>
    </section>
   
  );
}

export default ExpertSection;
