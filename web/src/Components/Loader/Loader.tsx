import "./Loader.scss";
const colors = { secondary: "#091f2c", primaryBlue: "#44eaff" };
interface LoaderProps {
  loaderWidth?: string;
  loaderHeight?: string;
  color?: "secondary" | "primaryBlue";
}
const Loader = ({ loaderWidth, loaderHeight, color }: LoaderProps) => {
  return (
    <div
      id="circularLoader"
      style={{ width: loaderWidth, height: loaderHeight }}
    >
      <span style={{ borderTopColor: colors[color || "secondary"] }}></span>
      <span style={{ borderBottomColor: colors[color || "secondary"] }}></span>
    </div>
  );
};

Loader.defaultProps = {
  loaderWidth: "50px",
  loaderHeight: "50px",
};
export default Loader;
