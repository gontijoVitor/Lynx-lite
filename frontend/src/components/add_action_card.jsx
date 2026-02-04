import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AddActionCard({ icon, title, description }) {
    return (
        <button
            className="
                border border-solid-1 rounded
                bg-white
                p-4
                d-flex flex-column
                align-items-center
                text-center
                gap-2
                flex-fill
                hover-shadow
            "
            style={{
                minWidth: '220px',
                maxWidth: '260px'
            }}
        >
            <FontAwesomeIcon
                icon={icon}
                size="2x"
                className="text-secondary mb-1"
            />

            <div className="fw-semibold">
                {title}
            </div>

            <small className="text-muted">
                {description}
            </small>
        </button>
    );
}

export default AddActionCard;
