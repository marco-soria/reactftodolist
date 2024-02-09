import CheckSVG  from './check.svg'
import DeleteSVG from './delete.svg'
import AccessSVG from './accessibility.svg'
import CloudSVG from './cloud-fog.svg'
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";


const iconTypes = {
    check: <FaCheck />,
    delete: <FaXmark />,
}

function TodoIcon({ type }) {
    const IconComponent = iconTypes[type];
    return (
        <span className={`Icon Icon-svg Icon-${type}`}>
            {IconComponent}
            <FaXmark />
        </span>
    );
}

export { TodoIcon }