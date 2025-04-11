
import "./LPSelect.scss";

const LPSelect = ({className, selectName, children}) => {
  return (
    <select className={className} name={selectName}>
        {children}
    </select>
  )
}

export default LPSelect;
