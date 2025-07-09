"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Memoized language list
  const languages = useMemo(
    () => [
      { code: "en", label: "EN" },
      { code: "bn", label: "বাং" },
    ],
    []
  );

  const [selectedLang, setSelectedLang] = useState("en");

  useEffect(() => {
    const currentLang = languages.find((lang) =>
      pathname.startsWith(`/${lang.code}`)
    );
    if (currentLang) {
      setSelectedLang(currentLang.code);
    }
  }, [pathname, languages]);

  const handleChange = (lang) => {
    if (lang === selectedLang) return;
    const newPath = pathname.replace(`/${selectedLang}`, `/${lang}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-2 text-sm">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleChange(lang.code)}
          className={`px-2 py-1 rounded transition-colors ${
            selectedLang === lang.code
              ? "bg-black text-white"
              : "hover:bg-gray-100"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
