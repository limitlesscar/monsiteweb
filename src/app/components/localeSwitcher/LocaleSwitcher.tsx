'use client'
import { routing } from '@/i18n/routing'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useLocale } from 'next-intl'
import { useState } from 'react'
import LocaleSwitcherSelect from './LocaleSwitcherSelect'
import { CircleFlagLanguage } from 'react-circle-flags'

export default function LocaleSwitcher({removePadding = false , removeMargin= false}) {
  const languages = {
    en: "English",
    fr: "French",
    pt: "Portuguese",
  };
  const locale = useLocale()
  const [isOpenDropdown, setisOpenDropdown] = useState(false)
  const handleToggleDropdoen = () => {
    setisOpenDropdown(!isOpenDropdown)
  }
  return (
    <div className={`${removeMargin ? 'ml-0' : ' ml-2'} ${removePadding ? 'py-0' : ' py-3'}`}>
      <div
        onClick={handleToggleDropdoen}
        className=" relative size-9 "
      >
        <div className='bg-transparent hover:bg-[#32bb78] hover:shadow-lg  cursor-pointer text-white border-white border flex items-center justify-between duration-500 ease-in-out transition-colors   rounded-full  px-2 py-[5px]'>

        <CircleFlagLanguage className='size-5' languageCode={locale} height="1"  />
        {/* <p>{locale}</p> */}
        {/* <ChevronDownIcon className="size-4 fill-white" /> */}
        </div>
        {isOpenDropdown &&
        <div className="absolute w-full top-full mt-2 left-1/2 -translate-x-1/2">
          <LocaleSwitcherSelect
            currentLocale={locale}
            allLocales={Array.from(routing.locales)}
            isOpenDropdown={isOpenDropdown}
            setisOpenDropdown={setisOpenDropdown}
            languages={languages}
            />
            </div>
}
      </div>
    </div>
  )
}
