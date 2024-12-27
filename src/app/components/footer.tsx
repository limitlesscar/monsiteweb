import Image from "next/image";
import logo from '@/app/components/images/Logo - Black.png';

const navigation = {
  solutions: [
    { name: 'Comment ça marche ?', href: '/' },
    { name: 'Un service de confiance', href: '/new' },
    { name: 'Applis mobile', href: '/new' },
    { name: 'Contact', href: '/new' },
    { name: 'Blog', href: '/new' },
  ],

  
  legal: [
    { name: 'Ressources', href: '/aide' },
    { name: '  Assurance', href: '/aide' },
    { name: '    Loueurs professionnels', href: '/aide' },
    { name: 'Remboursement et Aide', href: '/aide' },
   
  ],
};




export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-white py-16">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo Section */}
          <div className="flex items-center mb-8 xl:mb-0">
            <Image src={logo} alt="limitless Logo" className="h-8 w-auto" width={52} height={52} />
          </div>

          {/* Main Footer Links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:col-span-2">
            {/* Solutions Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Solutions</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-all duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

           

            {/* Legal Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Légal</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-all duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

     {/* Footer Bottom */}
<div className="mt-16 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
  <p>&copy; 2024 limitless. Tous droits réservés.</p>
  <p>Le contenu de ce site est protégé par les lois françaises et internationales sur le droit d'auteur.</p>
  <p>Aucun texte, image, logo ou autre élément de ce site ne peut être copié, reproduit, distribué ou modifié sans autorisation préalable.</p>
  <p>Toute reproduction ou représentation, intégrale ou partielle, est strictement interdite sans le consentement écrit de limitless.</p>
  <p>Les marques et logos affichés sur ce site sont des marques déposées et protégées par le droit des marques.</p>
  <p>Le non-respect de ces droits de propriété intellectuelle pourra entraîner des poursuites judiciaires.</p>
  <p>Les utilisateurs s'engagent à ne pas utiliser le contenu à des fins commerciales ou illicites.</p>
  <p>limitless se réserve le droit de modifier les termes de cette politique de confidentialité à tout moment.</p>
  <p>En utilisant ce site, vous acceptez pleinement nos conditions d'utilisation et notre politique de confidentialité.</p>
  <p>Pour toute demande d'autorisation, veuillez nous contacter directement via notre formulaire de contact.</p>
</div>

      </div>
    </footer>
  );
}
