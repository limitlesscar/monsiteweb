import { useEffect, useState } from 'react';

export default function Cookies() {
  // State to track if the cookie banner should be shown
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const userChoice = localStorage.getItem('cookieConsent');
    if (!userChoice) {
      // If no choice has been made, show the banner
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null; // Don't render anything if banner should not be shown

  return (
    <div className="fixed inset-x-0 top-0 flex flex-col justify-between gap-x-8 gap-y-4 bg-white p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8">
      <p className="max-w-4xl text-sm text-gray-900">
        Ce site utilise des cookies pour compléter un régime alimentaire équilibré et offrir une récompense bien méritée aux sens après avoir consommé des repas fades mais nutritifs. Accepter nos cookies est optionnel, mais recommandé, car ils sont délicieux. Consultez notre{' '}
        <a href="#" className="font-semibold text-black-600">
          politique de cookies
        </a>.
      </p>
      <div className="flex flex-none items-center gap-x-5">
        <button
          type="button"
          className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          onClick={handleAccept}
        >
          Accepter tout
        </button>
        <button
          type="button"
          className="text-sm font-semibold text-gray-900"
          onClick={handleReject}
        >
          Refuser tout
        </button>
      </div>
    </div>
  );
}
