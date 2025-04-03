export function inittel() {
  // تفعيل مكتبة intl-tel-input
  if (document.querySelector("#phoneWithCode")) {
    let input = document.querySelector("#phoneWithCode");
    let iti = window.intlTelInput(input, {
      initialCountry: "sa",
      onlyCountries: ["sa", "qa", "ae", "bh", "kw"], // الدول المسموحة فقط
      separateDialCode: true,
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
    if (window.getComputedStyle(document.body).direction === "ltr") {
      document.querySelector(".phoneCon").classList.add("flagenglish");
      document.getElementById("phoneWithCode").classList.add("paddingInput");
    }
  }
}