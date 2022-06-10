import ContactForm from "./ContactForm";
import Procedure from "./Procedure";
import "./Info.scss";

const Info = () => {
  return (
    <section id="info">
      <div className="container infoGroup">
        <ContactForm />
        <Procedure />
      </div>
    </section>
  );
};

export default Info;
