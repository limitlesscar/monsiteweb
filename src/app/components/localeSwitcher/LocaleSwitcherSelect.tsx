'use client';

import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {type ChangeEvent, type ReactNode, useTransition} from 'react';
import {usePathname, useRouter , type Locale} from '@/i18n/routing';
import { CircleFlagLanguage } from 'react-circle-flags';

type Props = {
  currentLocale: string,
  allLocales: string[],
  isOpenDropdown: Boolean,
  setisOpenDropdown: any,
  languages: object
};

export default function LocaleSwitcherSelect({
  currentLocale,
  allLocales,
  setisOpenDropdown,
  languages
}: Readonly<Props>) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(locale: string) {
    const nextLocale = locale as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
    setisOpenDropdown(false)
  }

  return (
  <div className='flex flex-col items-center  bg-white rounded-md overflow-hidden'>
  {allLocales.map(locale => 
  
  {
    if(locale === currentLocale) return 
    return (
    <button
    className='w-full flex items-center gap-3 text-left px-2 py-[3px] duration-500 ease-in-out transition-colors hover:bg-[#f0eaea]'
    key={locale}
    type='button'
    onClick={() => onSelectChange(locale)}
    >
        <CircleFlagLanguage className='size-5' languageCode={locale} height="1"  />
      {/* {languages[locale as keyof typeof languages]} */}
      </button>
  )})}
  </div>
  );
}