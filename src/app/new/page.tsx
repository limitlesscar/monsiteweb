"use client";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Team from "../team";
import Footer from "../components/footer";
import logo from "@/app/components/images/Logo - White.png";
import logoblack from "@/app/components/images/Logo - Black.png";
import Image from "next/image";
import IconApp from "../components/icons/icon";
import Cookies from "../components/cookies/Cookies";
import Boxone from "../components/box1/Boxone";
import Reviews from "../components/reviews/reviews";
import FAQSection from "../components/faq/faq";
import Cars from "../components/cars/carsbanner";
import BannerBusiness from "../components/cars/carsbannertwo";
import BoxSecond from "../components/box1/Boxsecond";
import FAQSectiontwo from "../components/faq/faqsecond";
import BannerHostBusinessTwo from "../components/cars/carsbannerthird";
import Numbers from "../Numbers/Numberd";
import SvgComponentTrois from "../icons/Icon";
import SvgComponentQuatre from "../icons/newicon";
import MenuIcon from "../components/menuIcon/MenuIcon";
const products = [
  {
    name: "Google Play",
    description: "Trouvez des voitures proches de chez vous",
    href: "#",
    icon: SvgComponentTrois,
  },
  {
    name: "App Store",
    description: "Discutez directement avec les locataires",
    href: "#",
    icon: SvgComponentQuatre,
  },

  
];


const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const backgroundImageStyle: React.CSSProperties = {
  backgroundImage:
    "url('https://media.istockphoto.com/id/1170825611/pt/foto/blue-and-green-blurred-motion-abstract-background.jpg?b=1&s=612x612&w=0&k=20&c=h3p0V8Q9BMMJJXiH4lOqM45KY6pItE1MRZ_4QHBOXL0=')", // Replace with your image URL
  backgroundSize: "cover",
  backgroundPosition: "center",
};








export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
     
      <header className="bg-transparent absolute mb-12 w-full">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image src={logo} alt="Logo" className="h-8 w-auto" width={52} height={52} />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
              <span className="sr-only">Open main menu</span>
              <MenuIcon/>
            </button>

          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                Location de voiture
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-white" />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                       <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#32bb78] group-hover:bg-[#32bb78]">
                        <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-black-600" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
            <a href="#" className="text-sm font-semibold leading-6 hover:underline hover:decoration-4 hover:decoration-white text-white">
              
              Devenir locataire</a>
<a href="/aide" className="text-sm font-semibold leading-6 hover:underline hover:decoration-4 hover:decoration-white text-white">Aide</a>
<a href="/aide" className="text-sm font-semibold leading-6 hover:underline hover:decoration-4 hover:decoration-white text-white">Légal</a>

          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">


          <a href="#" className="rounded-full  border border-white hover:border-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm 
             hover:bg-[#32bb78] hover:shadow-lg focus:ring-4 focus:ring-green-500 focus:outline-none 
             focus:ring-offset-2 focus:ring-offset-black active:shadow-xl active:scale-95 ">
              IOS
          </a>

              <a href="#" className="rounded-full ml-4 border border-white hover:border-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm 
             hover:bg-[#32bb78] hover:shadow-lg focus:ring-4 focus:ring-green-500 focus:outline-none 
             focus:ring-offset-2 focus:ring-offset-black active:shadow-xl active:scale-95 ">
       Android
              </a>
              
           
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image src={logoblack} alt="Logo" className="h-8 w-auto" width={52} height={52} />

              </a>
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
             



              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Télécharger
                      <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {products.map((item) => (
                        <DisclosureButton key={item.name} as="a" href={item.href} className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <a href="/new" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Devenir hôte</a>
                  <a href="/aide" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Aide</a>
                </div>
              
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="bg-blue-700" style={backgroundImageStyle}>
  <div className="px-6 py-24 sm:px-6 sm:py-52 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-white text-4xl font-semibold tracking-tight sm:text-5xl">
        <span className="typewriter">
          Gagner de l'argent 
        </span>
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg text-white">
      Avec limitless, louez votre voiture et transformez-la en une source de revenu supplémentaire. Gagnez votre salaire facilement en partageant votre véhicule. limitless est la solution idéale pour rentabiliser votre voiture en toute simplicité.







      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-6 sm:gap-x-6 sm:gap-y-0">
      <a
  href="#"
  className="rounded-full border border-[#32bb78] hover:border-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm 
             hover:bg-[#32bb78] hover:shadow-lg focus:ring-4 focus:ring-green-500 focus:outline-none 
             focus:ring-offset-2 focus:ring-offset-black active:shadow-xl active:scale-95 bg-[#32bb78]"
>
  Verifer vos documents et commencez à gagner de l'argent
</a>



      </div>
    </div>
  </div>
</div>





<Numbers/>
<BannerHostBusinessTwo/>

      <BoxSecond/>
      <FAQSectiontwo/>

      <Team />
      <Footer />
    </div>
  );
}
