import CheckSVG  from './check.svg'
import DeleteSVG from './delete.svg'
import AccessSVG from './accessibility.svg'
import CloudSVG from './cloud-fog.svg'

const iconTypes = {
    check: <CheckSVG />,
    delete: <DeleteSVG />,
}

function TodoIcon({ type }) {
    const IconComponent = iconTypes[type];
    return (
        <span className={`Icon Icon-svg Icon-${type}`}>
            <img src={IconComponent} alt={type} />
        </span>
    );
}

export { TodoIcon }