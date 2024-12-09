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
        <div className="description-job ">Description job</div>
      </div>
    </section>
  );
};

export default Interview;
