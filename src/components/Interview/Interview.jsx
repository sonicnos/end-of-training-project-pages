import Image from "next/image";
import personaImg from "../../../public/images/personna.png";

const Interview = () => {
  return (
    <section className="interview-section">
      <div className="personna">
        <div className="photo">
          <Image src={personaImg} className="avatar-photo" />
        </div>
        <div className="interview-description">
          <div className="avatar-details">
            <p>Eli</p>
            <p>Talpalariu</p>
          </div>
          <div className="avatar-details">
            <p>VALKUREN</p>
            <p>Full Stack Web Developer</p>
          </div>
        </div>
      </div>
      <div className="description-job-section">
        <div className="description-job ">
          Je suis Eli, D&eacute;veloppeur Full Stack chez Valkuren, une
          soci&eacute;t&eacute; sp&eacute;cialis&eacute;e dans le
          d&eacute;veloppement de solutions Big Data. Nos activit&eacute;s
          principales incluent la gestion et l&apos;analyse de donn&eacute;es,
          l&apos;intelligence artificielle et le machine learning dans trois
          domaines : manufacturing, mobilit&eacute; et marketing.
        </div>
      </div>
    </section>
  );
};

export default Interview;
