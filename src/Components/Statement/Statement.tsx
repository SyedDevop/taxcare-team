import StatementImg from "../../Asset/img/statementImg.webp";
import "./Statement.scss";
interface Props {}

const Statement = (props: Props) => {
  return (
    <section id="statement" style={{ backgroundImage: `url(${StatementImg}` }}>
      <div className="container statementStyle">
        <div className="missionStatement">
          <h2>MISSION STATEMENT</h2>
          <p>
            We Strive to deliver value to our clients by taking care of their
            business Compliances & Accounting aspects, solving problems and
            helping Achieve excellence in their core business.
          </p>
        </div>
        <hr />
        <div className="vision">
          <h2>OUR VISION</h2>
          <p>
            To Cater to the Best needs of Clients at most affordable prices
            instituting Deligence, commitment & Responsibility in all work
            environment
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statement;
