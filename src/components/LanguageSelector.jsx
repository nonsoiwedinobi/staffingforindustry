import { useState, useEffect } from "react";
import axios from "axios";

const LanguageSelector = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [arrowIcon, setArrowIcon] = useState("▼");

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownVisible(!dropdownVisible);
    setArrowIcon(dropdownVisible ? "▼" : "▲");
  };

  const selectLanguage = async (language, text) => {
    setSelectedLanguage(text);
    setDropdownVisible(false);
    setArrowIcon("▼");
    await translatePage(language);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(".language-selector")) {
      setDropdownVisible(false);
      setArrowIcon("▼");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const translatePage = async (targetLanguage) => {
    const elementsToTranslate = document.querySelectorAll(
      "body *:not(script):not(style):not(meta):not(link):not(img)"
    );
    const textsToTranslate = [];

    elementsToTranslate.forEach((element) => {
      if (
        element.childNodes.length === 1 &&
        element.childNodes[0].nodeType === 3
      ) {
        textsToTranslate.push(element.innerText);
      }
    });

    try {
      const translations = await Promise.all(
        textsToTranslate.map(async (text) => {
          const response = await axios.post(
            `https://translation.googleapis.com/language/translate/v2?key=${config.GOOGLE_API_KEY}`,
            {
              q: text,
              target: targetLanguage,
            }
          );
          return response.data.data.translations[0].translatedText;
        })
      );

      elementsToTranslate.forEach((element, index) => {
        if (
          element.childNodes.length === 1 &&
          element.childNodes[0].nodeType === 3
        ) {
          element.innerText = translations[index];
        }
      });
    } catch (error) {
      console.error("Translation error: ", error);
    }
  };

  return (
    <div className="relative language-selector">
      <button
        className="lang-btn py-7 px-3 rounded-lg text-black text-lg"
        onClick={toggleDropdown}
      >
        {selectedLanguage} <span className="arrow-icon">{arrowIcon}</span>
      </button>
      {dropdownVisible && (
        <ul className="dropdown absolute right-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-lg z-20 text-lg">
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => selectLanguage("en", "English")}
          >
            English
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => selectLanguage("fr", "French")}
          >
            French
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => selectLanguage("nl", "Dutch")}
          >
            Dutch
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
