
import "./NewListModal.css"

export default function NewListModal ({ isModalOpen, onClose }) {

    if (isModalOpen !== true) {
        return null
    }

    return (
        <div className="modalContainer">
            <div className="modalContent">
                <div className="closeIcon" onClick={onClose}>
                    <p>X</p>
                </div>
                <div className="modalTitle">
                    <p>Lag ny handleliste</p>
                    <hr />
                </div>
                <p>Dette er en test</p>
                <button onClick={onClose}>
                    Lukk
                </button>
            </div>
        </div>
    )
}