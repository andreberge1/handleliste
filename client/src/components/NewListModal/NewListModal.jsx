
import "./NewListModal.css"

export default function NewListModal ({ show }) {

    const onClose = (e) => {
        onClose && onclose(e)
    }

    return (
        <>
        {
            show && (
                <div className="modalContainer">
                    <p>This is a test</p>
                    <button onClose={e => onClose(e)}>
                        Lukk
                    </button>
                </div>
            )
        }
        </>
    )
}