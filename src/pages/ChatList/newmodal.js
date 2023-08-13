
function NewModal({ isOpen, children, closeModal }) {
    return (
        <div
            style={{
                display: isOpen ? "block" : "none",
            }}
        >
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(17,1,1,0.35)",
                }}
            ></div>
            <div
                // 여기가 모달폼 자체 화면
                style={{

                    borderRadius:'30px',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: 100,
                    width: 400,
                    maxWidth: "100%",
                    maxHeight: "90%",
                    overflowY: "auto",
                    backgroundColor: "white",
                }}
            >
                <div style={{textAlign:'center'}}>{children}</div>
            </div>
        </div>
    );
}

export default NewModal;