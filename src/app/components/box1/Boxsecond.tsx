import screenOne from '@/app/components/imagesiphone/1rentyourcar.png';
import screenTwo from '@/app/components/imagesiphone/2rentyourcar.png';
import screenThree from '@/app/components/imagesiphone/screenthree.png';
import screenFour from '@/app/components/imagesiphone/screenfour.png';
import screenFive from '@/app/components/imagesiphone/screenshotfive.png';
import screenSix from '@/app/components/imagesiphone/screensix.png';
import Image from 'next/image';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function BoxSecond() {
  useEffect(() => {
    const elementsLeft = document.querySelectorAll('.animate-on-scroll-left');
    const elementsRight = document.querySelectorAll('.animate-on-scroll-right');

    const observerOptions = {
      root: null, // viewport
      threshold: 0.1, // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('animate-on-scroll-left')) {
            entry.target.classList.add('animate-left');
          } else if (entry.target.classList.contains('animate-on-scroll-right')) {
            entry.target.classList.add('animate-right');
          }
          observer.unobserve(entry.target); // Stop observing once animation is applied
        }
      });
    }, observerOptions);

    elementsLeft.forEach((el) => observer.observe(el));
    elementsRight.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup on component unmount
  }, []);

  const featuresHoster = [
    {
      title: 'Gérez vos annonces',
      description:
        'Ajoutez, modifiez ou supprimez vos annonces pour mieux gérer vos locations',
      buttonText: 'Gérez vos annonces',
      image: screenOne,
    },
    {
      title: 'Suivez vos réservations',
      description:
        'Consultez et gérez vos réservations avec un tableau de bord simple et intuitif',
      buttonText: 'Voir vos réservations',
      image: screenTwo,
    },
    {
      title: 'Communiquez avec vos clients',
      description:
        'Utilisez notre système de messagerie pour rester en contact avec vos clients',
      buttonText: 'Envoyez un message',
      image: screenThree,
    },
    {
      title: 'Recevez des avis',
      description:
        'Collectez des retours pour améliorer vos services et attirer plus de clients',
      buttonText: 'Voir les avis',
      image: screenFour,
    },
    {
      title: 'Gérez vos documents',
      description:
        'Téléchargez et organisez vos documents importants en toute sécurité',
      buttonText: 'Gérez vos documents',
      image: screenFive,
    },
  ];
const t = useTranslations('newPage')
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        {featuresHoster.map((feature, index) => (
          <div
            key={index}
            className={`mx-auto max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-y-16 sm:gap-y-20 ${
              index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''
            }`}
          >
            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} flex justify-center`}>
              <Image
                alt={feature.title}
                src={feature.image}
                width={500}
                height={1000}
                className="w-auto max-w-full"
              />
            </div>
            <div>
              <h2 className="text-base font-semibold text-black-600">{t(feature.title)}</h2>
              <p className="mt-6 text-lg text-gray-600">{t(feature.description)}</p>
              <a
                href="#"
                className="mt-10 inline-block rounded-full bg-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {t(feature.buttonText)}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

