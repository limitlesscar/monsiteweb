import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";

function InfoModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Check if the modal has been shown before
  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenModal");

    if (!hasSeenModal) {
      setIsOpen(true);
      localStorage.setItem("hasSeenModal", "true"); // Mark as seen
    }
  }, []);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />

        <Dialog.Panel className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 relative">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
          >
            ✕
          </button>

          {/* Modal Title */}
          <Dialog.Title className="text-2xl font-semibold text-gray-800 mb-6">
            Annonce Officielle
          </Dialog.Title>

          {/* Modal Description */}
          <Dialog.Description className="text-gray-600 text-base">
            Nous sommes officiellement enregistrés en tant qu'entreprise par{" "}
            <span className="font-semibold text-blue-700">LegalPlace</span>.
            <br />
            Notre assurance est fièrement fournie par{" "}
            <span className="font-semibold text-blue-700">AXA Bank</span>.
          </Dialog.Description>
          

          {/* Footer Bottom */}
      <div className="mt-16 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
     
        <p>Ce site utilise de Cookies et le contenu de ce site est protégé par les lois françaises et internationales sur le droit d'auteur.</p>
        <p>Aucun texte, image, logo ou autre élément de ce site ne peut être copié, reproduit, distribué ou modifié sans autorisation préalable.</p>
        <p>Toute reproduction ou représentation, intégrale ou partielle, est strictement interdite sans le consentement écrit de limitless.</p>
       
      </div>
          {/* Optional action buttons */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={closeModal}
              className="bg-black font-bold text-white rounded-full px-6 py-3 text-sm hover:opacity-50 focus:outline-none focus:ring-4"
            >
              Fermer
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>

      
    </>
  );
}

export default InfoModal;
