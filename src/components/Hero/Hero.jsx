import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero">
      <div className="Section_top">
        <div className="content">
          <h1 className="text-8xl text-white">Project de fin de formation</h1>
        </div>
      </div>
      <Link href="/Interview" className="btnNext">
        Suivant
      </Link>
    </section>
  );
};

export default Hero;
