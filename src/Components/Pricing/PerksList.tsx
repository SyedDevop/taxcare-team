import Done from "../../Asset/svg/done.svg?react";

const PerksList = ({ perksName }: { perksName: string }) => {
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
