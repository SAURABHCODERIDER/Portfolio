const SuccessModal = ({ isOpen, onClose }:{isOpen:boolean,onClose:()=>void}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-gray-800 rounded-lg p-8 shadow-2xl text-center max-w-sm mx-auto" onClick={e => e.stopPropagation()}>
                <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                <p className="text-gray-300 mb-6">Your message has been sent. I'll get back to you shortly.</p>
                <button onClick={onClose} className="btn btn-primary">Close</button>
            </div>
        </div>
    );
};

export default SuccessModal
