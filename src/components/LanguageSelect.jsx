import { useState, useRef, useEffect } from "react";

function LanguageSelect({ languages, language, setLanguage }) {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const ref = useRef(null);

    // Закрытие по клику вне
    useEffect(() => {
        function onClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, []);

    // Обработка клавиатуры
    const onKeyDown = (e) => {
        if (!isOpen) {
            if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsOpen(true);
            }
        } else {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setHighlightedIndex((h) => (h + 1) % languages.length);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setHighlightedIndex((h) => (h - 1 + languages.length) % languages.length);
            } else if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setLanguage(languages[highlightedIndex].code);
                setIsOpen(false);
            } else if (e.key === "Escape") {
                e.preventDefault();
                setIsOpen(false);
            }
        }
    };

    const currentLang = languages.find((l) => l.code === language);

    return (
        <div ref={ref} className="relative w-20 sm:w-40 md:w-40 lg:w-40 xl:w-40" tabIndex={0} onKeyDown={onKeyDown}
             aria-haspopup="listbox" aria-expanded={isOpen} role="combobox" aria-controls="lang-list"
             aria-activedescendant={`lang-option-${highlightedIndex}`}>
            <button
                type="button"
                onClick={() => setIsOpen((o) => !o)}
                className="flex items-center gap-2 border border-white rounded px-3 py-1 w-full cursor-pointer select-none bg-black text-white hover:bg-white hover:text-black transition"
                aria-label="Select language"
            >
                <currentLang.FlagIcon className="w-6 h-4 rounded-sm object-cover" />
                <span className="hidden sm:block md:block lg:block">{currentLang.label}</span>
                <svg
                    className={`w-4 h-4 ml-auto transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <ul
                    id="lang-list"
                    role="listbox"
                    className="absolute right-0 mt-1 w-full bg-black border border-white rounded shadow-lg z-20 max-h-48 overflow-auto"
                    tabIndex={-1}
                >
                    {languages.map(({ code, label, FlagIcon }, index) => (
                        <li
                            id={`lang-option-${index}`}
                            key={code}
                            role="option"
                            aria-selected={language === code}
                            onClick={() => {
                                setLanguage(code);
                                setIsOpen(false);
                            }}
                            onMouseEnter={() => setHighlightedIndex(index)}
                            className={`flex items-center gap-2 px-4 py-2 cursor-pointer select-none ${
                                highlightedIndex === index ? "bg-white text-black" : "text-white hover:bg-white hover:text-black"
                            }`}
                        >
                            <FlagIcon className="w-6 h-4 rounded-sm object-cover" />
                            {label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default LanguageSelect;
