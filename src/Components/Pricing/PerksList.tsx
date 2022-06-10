import { ReactComponent as Done } from "../../Asset/svg/done.svg";

const PerksList = ({ perksName }: { perksName: String }) => {
  return (
    <li>
      {perksName.startsWith("(") ? (
        <span>{perksName}</span>
      ) : (
        <>
          <Done /> {perksName}
        </>
      )}
    </li>
  );
};

export default PerksList;
