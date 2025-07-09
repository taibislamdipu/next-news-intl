import { getDictionary } from "@/app/[lang]/dictionaries";
import BroadcastIcon from "@/icons/BroadcastIcon";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default async function Header({ lang }) {
  const dictionary = await getDictionary(lang);
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              className="inline-block mr-2"
              width={32}
              height={32}
            />
            <h1 className="text-xl font-bold tracking-wider">
              The News Island
            </h1>
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          {/* <!-- Subscriber Button : Students don't have to do anything with it --> */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <BroadcastIcon />
            </div>
            <span className="text-sm font-medium">{dictionary.subscriber}</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#"
              className="text-sm hover:text-gray-600 transition-colors"
            >
              {dictionary.world}
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-gray-600 transition-colors"
            >
              {dictionary.business}
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-gray-600 transition-colors"
            >
              {dictionary.lifestyle}
            </Link>

            <LanguageSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
}
