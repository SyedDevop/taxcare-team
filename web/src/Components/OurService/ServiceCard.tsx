interface Props {
  title: string;
  price: string;
  description: string;
  viewLink: string;
  svg: React.ReactNode;
}
const ServiceCard = (props: Props) => {
  return (
    <div className={"card"}>
      {props.svg}
      <h1>{props.title}</h1>
      <h4>{props.price}</h4>
      <p>{props.description}</p>
      <div className="corner">
        <div className="arrow">
          <a href={props.viewLink}>View More → </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
