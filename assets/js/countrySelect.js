export function initcountry() {
  // البلاد
  if (document.getElementById("countrySelect")) {
    const countries = [
      { code: "SA", name: "السعودية", flag: "https://flagcdn.com/w320/sa.png" },
      { code: "QA", name: "قطر", flag: "https://flagcdn.com/w320/qa.png" },
      { code: "AE", name: "الإمارات", flag: "https://flagcdn.com/w320/ae.png" },
      { code: "BH", name: "البحرين", flag: "https://flagcdn.com/w320/bh.png" },
      { code: "KW", name: "الكويت", flag: "https://flagcdn.com/w320/kw.png" },
    ];

    let countrySelect = $("#countrySelect");
    countrySelect.empty();

    countries.forEach((country) => {
      let option = new Option(country.name, country.code, false, false);
      $(option).attr("data-flag", country.flag);
      countrySelect.append(option);
    });

    function formatCountry(country) {
      if (!country.id) return country.text;
      let flagUrl = $(country.element).attr("data-flag");
      return $(
        '<span><img src="' +
          flagUrl +
          '" class="flag-icon"/> ' +
          country.text +
          "</span>"
      );
    }

    countrySelect.select2({
      templateResult: formatCountry,
      templateSelection: formatCountry,
      minimumResultsForSearch: -1, // 🚀 إزالة البحث
    });
  }
}