import "./ProcessSteps.scss";
export interface Props {
  cardData: { title: string; paragraph: string }[];
  processName:string;
}

export const ProcessSteps = ({ cardData,processName }: Props) => {
  return (
    <section id="processSteps">
      <div className="container">
        <h3>{processName}</h3>
        <h1>
          <span>Registration </span>Process
        </h1>
        <div className="stepsCard">
          {cardData.map(({ title, paragraph }, key) => {
            return (
              <div key={key} className="cards">
                <span className="circle">
                  <h2>{key <= 9 ? `0${key + 1}` : key + 1}</h2>
                </span>
                <div className="textBox">
                  <h2>{title}</h2>
                  <p>{paragraph}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
