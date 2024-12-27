import screenOne from '@/app/components/imagesiphone/screenone.png';
import screenTwo from '@/app/components/imagesiphone/screentwo.png';
import screenThree from '@/app/components/imagesiphone/screenthree.png';
import screenFour from '@/app/components/imagesiphone/screenfour.png';
import screenFive from '@/app/components/imagesiphone/screenshotfive.png';
import screenSix from '@/app/components/imagesiphone/screensix.png';
import Image from 'next/image';
import { useEffect } from 'react';



export default function Boxone() {


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



  const featuresOne = [
    {
      description:
        'Gérez vos réservations et vos commandes. Consultez et modifiez vos réservations en toute simplicité depuis votre tableau de bord.',
    },
  ];

  const featuresTwo = [
    {
      description:
        'Réservez une voiture proche de chez vous. Trouvez des voitures à proximité et choisissez parmi les meilleurs modèles.',
    },
  ];

  const featuresThree = [
    {
      description: 'Trouvez des voitures autour de vous sur une carte interactive.',
    },
  ];

  const featuresFour = [
    {
      description:
        'Discutez facilement avec les propriétaires des voitures via notre système de messagerie intégré.',
    },
  ];

  const featuresFive = [
    {
      description:
        'Notez votre expérience et partagez vos retours pour aider la communauté limitless à s’améliorer.',
    },
  ];

  const featuresSix = [
    {
      description:
        'Modifiez et envoyez vos documents officiels, comme votre permis de conduire et votre pièce d’identité, en toute sécurité.',
    },
  ];

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        {/* Box One: screenOne */}
       

        {/* Box Two: screenTwo */}
        <div className="mx-auto max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-y-16 sm:gap-y-20">
          <div className="lg:order-2">
            <h2 className="text-base font-semibold text-black-600">
              Réservez une voiture proche de chez vous
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Trouvez des voitures à proximité et choisissez parmi les meilleurs modèles.
            </p>
            <dl className="mt-10 space-y-8 text-base text-gray-600">
              {featuresTwo.map((feature, index) => (
                <div key={index}>
                  <dd className="mb-12">{feature.description}</dd>
                  <a
                    href="#"
                    className="rounded-full bg-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                   Réservez une voiture 
                  </a>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex justify-center">
            <Image
              alt="Product screenshot"
              src={screenTwo}
              width={500}
              height={1000}
              className="w-auto max-w-full"
            />
          </div>
        </div>

        {/* Box Three: screenThree */}
        <div className="mx-auto max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-y-16 sm:gap-y-20">
          <div>
            <h2 className="text-base font-semibold text-black-600">
              Trouvez des voitures autour de vous sur la carte
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Visualisez les voitures disponibles autour de vous directement sur la carte.
            </p>
            <dl className="mt-10 space-y-8 text-base text-gray-600">
              {featuresThree.map((feature, index) => (
                <div key={index}>
                  <dd className="mb-12">{feature.description}</dd>
                  <a
                    href="#"
                    className="rounded-full bg-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm hover:opacity-70  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                   Ouvrir la carte
                  </a>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex justify-center">
            <Image
              alt="Product screenshot"
              src={screenThree}
              width={500}
              height={1000}
              className="w-auto max-w-full"
            />
          </div>
        </div>

        {/* Box Four: screenFour */}
        <div className="mx-auto max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-y-16 sm:gap-y-20">
          <div className="lg:order-2">
            <h2 className="text-base font-semibold text-black-600">
              Discutez avec les propriétaires des voitures
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Utilisez notre système de messagerie intégré pour échanger facilement avec les propriétaires des voitures.
            </p>
            <dl className="mt-10 space-y-8 text-base text-gray-600">
              {featuresFour.map((feature, index) => (
                <div key={index}>
                  <dd className="mb-12">{feature.description}</dd>
                  <a
  href="#"
  className="rounded-full bg-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm 
             hover:bg-white hover:text-[#32bb78] hover:border hover:border-[#32bb78] 
             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white 
             active:bg-blue-500 active:border active:border-blue-600"
>
  Discutez avec les propriétaires
</a>

                </div>
              ))}
            </dl>
          </div>
          <div className="flex justify-center">
            <Image
              alt="Product screenshot"
              src={screenFour}
              width={500}
              height={1000}
              className="w-auto max-w-full"
            />
          </div>
        </div>

        {/* Box Five: screenFive */}
        <div className="mx-auto max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-y-16 sm:gap-y-20">
          <div>
            <h2 className="text-base font-semibold text-black-600">
              Notez votre expérience
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Donnez votre avis pour aider notre communauté à grandir et à s'améliorer.
            </p>
            <dl className="mt-10 space-y-8 text-base text-gray-600">
              {featuresFive.map((feature, index) => (
              
                <div key={index}>
                  <dd className="mb-12">{feature.description}</dd>
                  <a
  href="#"
  className="rounded-full bg-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm 
             hover:bg-white hover:text-[#32bb78] hover:border hover:border-[#32bb78] 
             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white 
             active:bg-blue-500 active:border active:border-blue-600"
>
  Notez votre expérience
</a>

                </div>
              ))}
            </dl>
          </div>
          <div className="flex justify-center">
            <Image
              alt="Product screenshot"
              src={screenFive}
              width={500}
              height={1000}
              className="w-auto max-w-full"
            />
          </div>
        </div>

        {/* Box Six: screenSix */}
        <div className="mx-auto max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-y-16 sm:gap-y-20">
          <div className="lg:order-2">
            <h2 className="text-base font-semibold text-black-600">
              Modifiez et envoyez vos documents officiels
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Gérez vos documents comme votre permis de conduire et votre pièce d’identité en toute sécurité.
            </p>
            <dl className="mt-10 space-y-8 text-base text-gray-600">
              {featuresSix.map((feature, index) => (
                <div key={index}>
                  <dd className="mb-12">{feature.description}</dd>
                  <a
  href="#"
  className="rounded-full bg-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm 
             hover:bg-white hover:text-[#32bb78] hover:border hover:border-[#32bb78] 
             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white 
             active:bg-blue-500 active:border active:border-blue-600"
>
  envoyez vos documents officiels
</a>

                </div>
              ))}
            </dl>
          </div>
          <div className="flex justify-center">
            <Image
              alt="Product screenshot"
              src={screenSix}
              width={500}
              height={1000}
              className="w-auto max-w-full"
            />
          </div>
        </div>




        <div className="mx-auto max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-y-16 sm:gap-y-20">
  <div className="lg:order-2 flex justify-center">
    <Image
      alt="Product screenshot"
      src={screenOne}
      width={500}
      height={1000}
      className="w-auto max-w-full"
    />
  </div>
  <div className="lg:order-1">
    <h2 className="text-base font-semibold text-black-600">
      Gérez vos réservations et vos commandes
    </h2>
    <p className="mt-6 text-lg text-gray-600">
      Consultez et modifiez vos réservations en toute simplicité depuis votre tableau de bord.
    </p>
    <dl className="mt-10 space-y-8 text-base text-gray-600">
      {featuresOne.map((feature, index) => (
        <div key={index}>
          <dd className="mb-12">{feature.description}</dd>
          <a
  href="#"
  className="rounded-full bg-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm 
             hover:bg-white hover:text-[#32bb78] hover:border hover:border-[#32bb78] 
             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white 
             active:bg-blue-500 active:border active:border-blue-600"
>
  Gérez vos réservations
</a>

        </div>
      ))}
    </dl>
  </div>
</div>



      </div>
    </div>
  );
}
