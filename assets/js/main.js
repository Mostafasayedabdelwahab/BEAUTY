// البلاد
if (document.getElementById("countrySelect")) {
  $(document).ready(function () {
    let currentLang = document.documentElement.lang || "ar"; // تحديد لغة الموقع

    function loadCountries() {
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
          let countrySelect = $("#countrySelect");
          countrySelect.empty();

          data.forEach((country) => {
            let countryName =
              currentLang === "ar"
                ? country.translations.ara?.common || country.name.common
                : country.name.common;
            let flagUrl = country.flags.svg;
            let countryCode = country.cca2;

            let option = new Option(countryName, countryCode, false, false);
            $(option).attr("data-flag", flagUrl);
            countrySelect.append(option);
          });

          let selectedCountry = "SA"; // يمكنك تغيير القيمة من الباك اند  كود السعودية افتراضيًا
          $("#countrySelect").val(selectedCountry).trigger("change");

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
          });
        })
        .catch((error) => console.error("حدث خطأ أثناء جلب البيانات:", error));
    }

    loadCountries(); // تحميل الدول لأول مرة

    //  مراقبة تغيير لغة الموقع وتحديث القائمة تلقائيًا
    const observer = new MutationObserver(() => {
      let newLang = document.documentElement.lang;
      if (newLang !== currentLang) {
        currentLang = newLang;
        $("#countrySelect").empty();
        loadCountries();
      }
    });

    // مراقبة تغييرات
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
  });
}
//موبايل البلاد
if (document.getElementById("countrySelectMobile")) {
  $(document).ready(function () {
    let currentLang = document.documentElement.lang || "ar"; // تحديد لغة الموقع

    function loadCountries() {
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
          let countrySelect = $("#countrySelectMobile");
          countrySelect.empty();

          data.forEach((country) => {
            let countryName =
              currentLang === "ar"
                ? country.translations.ara?.common || country.name.common
                : country.name.common;
            let flagUrl = country.flags.svg;
            let countryCode = country.cca2;

            let option = new Option(countryName, countryCode, false, false);
            $(option).attr("data-flag", flagUrl);
            countrySelect.append(option);
          });

          let selectedCountry = "SA"; // يمكنك تغيير القيمة من الباك اند  كود السعودية افتراضيًا
          $("#countrySelectMobile").val(selectedCountry).trigger("change");

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
          });
        })
        .catch((error) => console.error("حدث خطأ أثناء جلب البيانات:", error));
    }

    loadCountries(); // تحميل الدول لأول مرة

    //  مراقبة تغيير لغة الموقع وتحديث القائمة تلقائيًا
    const observer = new MutationObserver(() => {
      let newLang = document.documentElement.lang;
      if (newLang !== currentLang) {
        currentLang = newLang;
        $("#countrySelectMobile").empty();
        loadCountries();
      }
    });

    // مراقبة تغييرات
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
  });
}
// scroll links
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".links ul li a");

  function changeActiveSection() {
    let scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        let sectionId = section.getAttribute("id");

        // إزالة الـ active من كل الروابط
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        // إضافة active للعنصر المناسب
        let active = document.querySelector(
          `.links ul li a[href="#${sectionId}"]`
        );
        if (active) {
          active.classList.add("active");
        }
      }
    });
  }

  window.addEventListener("scroll", changeActiveSection);
});
// scroll nav
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".links")) {
    const targetElement = document.querySelector(".links");
    const scrollTrigger = 50;

    window.addEventListener("scroll", () => {
      if (window.scrollY > scrollTrigger) {
        targetElement.style.top = "0";
        targetElement.classList.add("head-scroll");
      } else {
        targetElement.style.top = "115px";
        targetElement.classList.remove("head-scroll");
      }
    });
  }
});
// heart
document.addEventListener("DOMContentLoaded", function () {
  let hearts = document.querySelectorAll(".badge_heart");

  hearts.forEach((heart) => {
    heart.addEventListener("click", function () {
      this.querySelector(".redHeart").classList.toggle("addheart");
    });
  });
});
// Add to cart
document.addEventListener("DOMContentLoaded", function () {
  let hearts = document.querySelectorAll(".addToCart");

  hearts.forEach((heart) => {
    heart.addEventListener("click", function () {
      this.querySelector("svg").classList.toggle("addFillCart");
    });
  });
});
// Sidebar
if (document.getElementById("sidebar")) {
  document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const openSidebar = document.getElementById("openSidebar");
    const closeSidebar = document.getElementById("closeSidebar");
    const links = sidebar.querySelectorAll("a"); // كل اللينكات جوا السايدبار

    // فتح السايدبار
    openSidebar.addEventListener("click", function (event) {
      event.stopPropagation(); // عشان الضغط على الزرار نفسه ميقفلهاش
      sidebar.classList.toggle("open");
      document.body.classList.add("overflow-hidden");
    });

    // إغلاق السايدبار بالزرار
    closeSidebar.addEventListener("click", function () {
      sidebar.classList.remove("open");
      document.body.classList.remove("overflow-hidden");
    });

    // إغلاق السايدبار عند الضغط خارجها
    document.addEventListener("click", function (event) {
      if (
        !sidebar.contains(event.target) &&
        !openSidebar.contains(event.target)
      ) {
        sidebar.classList.remove("open");
        document.body.classList.remove("overflow-hidden");
      }
    });

    // منع إغلاقها لو ضغطت جواها
    sidebar.addEventListener("click", function (event) {
      event.stopPropagation();
    });

    links.forEach((link) => {
      link.addEventListener("click", function () {
        sidebar.classList.remove("open");
        document.body.classList.remove("overflow-hidden");
      });
    });
  });
}

// Filter
if (document.getElementById("filter")) {
  document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("filter");
    const openSidebar = document.getElementById("openFilter");
    const closeSidebar = document.getElementById("closeFilter");

    // فتح السايدبار
    openSidebar.addEventListener("click", function (event) {
      event.stopPropagation(); // عشان الضغط على الزرار نفسه ميقفلهاش
      sidebar.classList.toggle("open");
      document.body.classList.add("overflow-hidden");
    });

    // إغلاق السايدبار بالزرار
    closeSidebar.addEventListener("click", function () {
      sidebar.classList.remove("open");
      document.body.classList.remove("overflow-hidden");
    });

    // إغلاق السايدبار عند الضغط خارجها
    document.addEventListener("click", function (event) {
      if (
        !sidebar.contains(event.target) &&
        !openSidebar.contains(event.target)
      ) {
        sidebar.classList.remove("open");
        document.body.classList.remove("overflow-hidden");
      }
    });

    // منع إغلاقها لو ضغطت جواها
    sidebar.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
}

// footer
if (document.getElementById("Copy_year")) {
  document.getElementById("Copy_year").textContent = new Date().getFullYear();
}
// footer button
document.querySelectorAll(".faq-button").forEach((e) => {
  let data_color = e.getAttribute("data-color");
  e.addEventListener("mouseenter", () => {
    e.style.color = data_color;
    document.querySelectorAll(".tooltip").forEach((el) => {
      el.style.backgroundColor = data_color;
    });
  });
  e.addEventListener("mouseleave", () => {
    e.style.color = "#fff";
  });
});

// cart
function increaseQuantity(button) {
  let input = button.nextElementSibling;
  if (document.querySelector(".cartPrice")) {
    let price = button
      .closest(".cart-item")
      .querySelector(".cartPrice").innerText;
  }
  input.value = parseInt(input.value) + 1;
  if (document.querySelector(".cartPrice")) {
    updateTotal();
  }
}

// cart
function decreaseQuantity(button) {
  let input = button.previousElementSibling;
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
    if (document.querySelector(".cartPrice")) {
      updateTotal();
    }
  }
}

// cart
function updateTotal() {
  let total = 0;
  document.querySelectorAll(".cart-item").forEach((item) => {
    let price = parseFloat(item.querySelector(".cartPrice").innerText);
    let quantity = parseInt(item.querySelector("input").value);
    total += price * quantity;
  });
  document.getElementById("cart-price-Ofcarts").innerText = total;
  document.getElementById("cart-total-price").innerText =
    total +
    parseFloat(document.getElementById("cart-delivery-charges").textContent);
}

// cart
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".cart-item")) {
    updateTotal(); // احسب التوتال عند فتح الصفحة
  }
});

//togglePassword
if (document.querySelector(".togglePassword")) {
  document.querySelectorAll(".togglePassword").forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", function () {
      const passwordInput =
        this.closest(".position-relative").querySelector(".password");
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = type;
      this.querySelector(".eyePassword").classList.toggle("fa-eye");
      this.querySelector(".eyePassword").classList.toggle("fa-eye-slash");
    });
  });
}

//  easytimer
if (document.querySelector(".Offers")) {
  document.querySelectorAll(".card").forEach((card, index) => {
    const duration = parseInt(card.getAttribute("data-duration"), 10); // مدة التايمر بالثواني
    const timer = new easytimer.Timer();

    // بدء العد التنازلي
    timer.start({ countdown: true, startValues: { seconds: duration } });

    // تحديث العناصر في الكارد
    timer.addEventListener("secondsUpdated", function () {
      const values = timer.getTimeValues();
      card.querySelector(".days").textContent = values.days;
      card.querySelector(".hours").textContent = values.hours;
      card.querySelector(".minutes").textContent = values.minutes;
      card.querySelector(".seconds").textContent = values.seconds;
    });
    // // عند انتهاء التايمر
    // timer.addEventListener("targetAchieved", function () {
    //     card.querySelector(".timer").innerHTML = "انتهى الوقت!";
    // });
  });
}

//Swiper
if (document.querySelector(".mySwiper")) {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 5000, // يغير الصورة كل 5 ثواني
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mySwiper-swiper-pagination",
      clickable: true,
    },
  });
}

//Swiper
if (document.querySelector(".mySwiper-products")) {
  var swiper2 = new Swiper(".mySwiper-products", {
    loop: true,
    autoplay: {
      delay: 5000, // يغير الصورة كل 5 ثواني
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mySwiper-products-swiper-pagination",
      clickable: true,
    },
    slidesPerView: 4, // يعرض 4 كروت افتراضيًا
    spaceBetween: 20, // المسافة بين الكروت
    navigation: {
      // أزرار التنقل
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: { slidesPerView: 2 }, // موبايل: يعرض كارد 1 فقط
      768: { slidesPerView: 2 }, // تابلت: يعرض 2 كارد
      1024: { slidesPerView: 4 }, // ديسكتوب: يعرض 4 كروت أو أكثر
    },
  });
}

//Swiper
function setEqualHeightForEachSwiper() {
  document.querySelectorAll(".swiper").forEach((swiper) => {
    let maxHeight = 0;
    let slides = swiper.querySelectorAll(".swiper-slide .card");

    // إعادة تعيين الارتفاعات لحساب الطول الصحيح
    slides.forEach((card) => {
      card.style.height = "auto";
      maxHeight = Math.max(maxHeight, card.offsetHeight);
    });

    // تطبيق الطول الموحد لكل كروت هذا السوايبر فقط
    slides.forEach((card) => {
      card.style.height = maxHeight + "px";
    });
  });

  // تشغيل الدالة عند تحميل الصفحة وبعد تغيير السلايدر
  document.addEventListener("DOMContentLoaded", setEqualHeightForEachSwiper);
  window.addEventListener("resize", setEqualHeightForEachSwiper);
}

// prouduct mainImage
if (document.getElementById("mainImage")) {
  function changeImage(imageSrc, element) {
    document.getElementById("mainImage").src = imageSrc;
    document
      .querySelectorAll(".thumbnail")
      .forEach((img) => img.classList.remove("active"));
    element.classList.add("active");
  }
}

// more - text
if (document.querySelector(".show-more-btn")) {
  function toggleText() {
    let moreText = document.querySelector(".more-text");
    let btn = document.querySelector(".show-more-btn");

    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      btn.innerText = "عرض أقل";
    } else {
      moreText.style.display = "none";
      btn.innerText = "قراءة المزيد";
    }
  }
}

//progressPercentage
if (document.getElementById("remainingAmount")) {
  let totalAmount = document.getElementById(
    "productPriceForProgress"
  ).innerText; // الحد الأدنى للحصول على توصيل مجاني
  let currentAmount =
    totalAmount - document.getElementById("remainingAmount").innerText; // المبلغ الحالي للطلب
  let remainingAmount = totalAmount - currentAmount;

  // حساب نسبة التقدم
  let progressPercentage = (currentAmount / totalAmount) * 100;
  document.getElementById("progressBar").style.width = progressPercentage + "%";
}

// Modal Login
if (document.getElementById("modalLoginOverlay")) {
  function openModalLogin() {
    document.getElementById("modalLoginOverlay").classList.add("active");
  }

  function closeModalLogin() {
    document.getElementById("modalLoginOverlay").classList.remove("active");
  }

  function toggleModal() {
    let modalOverlay = document.getElementById("modalLoginOverlay");

    if (modalOverlay.classList.contains("active")) {
      closeModalLogin();
    } else {
      openModalLogin();
    }
  }

  function selectAccount(type, element) {
    let link = "";
    // تحديد الرابط بناءً على النوع المختار
    if (type === "engineer") {
      link = "register-engineer.html";
    } else if (type === "contractor") {
      link = "register-contractor.html";
    } else if (type === "individual") {
      link = "register-individual.html";
    }

    // تحديث رابط زر "إنشاء حساب"
    document.getElementById("createAccountBtn").href = link;

    // إزالة التحديد من جميع الأزرار ثم تفعيل الزر المختار
    document
      .querySelectorAll(".optionsAccount button")
      .forEach((btn) => btn.classList.remove("active"));
    element.classList.add("active");
  }

  // إغلاق المودال عند الضغط خارج الصندوق
  document
    .getElementById("modalLoginOverlay")
    .addEventListener("click", closeModalLogin);

  //  زر الفتح
  document
    .getElementById("openModalLogin")
    .addEventListener("click", toggleModal);
}

// تفعيل مكتبة intl-tel-input
if (document.querySelector("#phoneWithCode")) {
  let input = document.querySelector("#phoneWithCode");
  let iti = window.intlTelInput(input, {
    initialCountry: "sa",
    preferredCountries: [
      "sa",
      "eg",
      "ae",
      "dz",
      "ma",
      "iq",
      "jo",
      "sy",
      "kw",
      "qa",
      "bh",
      "om",
      "lb",
      "sd",
      "ly",
      "tn",
      "ye",
      "ps",
    ],

    separateDialCode: true,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

  if (window.getComputedStyle(document.body).direction === "ltr") {
    document.querySelector(".phoneCon").classList.add("flagenglish");
    document.getElementById("phoneWithCode").classList.add("paddingInput");
  }
}

// الخريطة
if (document.getElementById("map")) {
  // إنشاء الخريطة
  var map = L.map("map").setView([24.7136, 46.6753], 13); // مركز افتراضي (الرياض)
  var svgIcon = L.divIcon({
    className: "custom-svg-icon",
    html: `
    <svg width="35" height="40" viewBox="0 0 46 51" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M42.0802 14.8212C41.7565 12.0725 40.5661 9.43908 38.625 7.17732C36.6839 4.91556 34.0581 3.10256 31.0035 1.91485C27.9488 0.727149 24.5693 0.205224 21.194 0.399901C17.8188 0.594579 14.5628 1.49922 11.7432 3.02574C9.32083 4.34759 7.28728 6.09086 5.78862 8.13031C4.28996 10.1698 3.3634 12.4548 3.07548 14.8212C2.79305 17.1721 3.15541 19.5448 4.13629 21.7673C5.11716 23.9897 6.69194 26.0061 8.74637 27.6701L20.9642 37.6596C21.1785 37.8359 21.4334 37.9758 21.7143 38.0713C21.9952 38.1669 22.2966 38.216 22.6009 38.216C22.9052 38.216 23.2065 38.1669 23.4874 38.0713C23.7683 37.9758 24.0233 37.8359 24.2376 37.6596L36.4093 27.6701C38.4637 26.0061 40.0385 23.9897 41.0194 21.7673C42.0002 19.5448 42.3626 17.1721 42.0802 14.8212ZM33.1819 25.0176L22.5778 33.6713L11.9737 25.0176C10.411 23.7422 9.21388 22.2001 8.46852 20.5021C7.72316 18.8041 7.44803 16.9925 7.66291 15.1974C7.87919 13.3747 8.58907 11.614 9.74125 10.0425C10.8934 8.47107 12.4591 7.1282 14.3251 6.11099C16.7708 4.78516 19.6416 4.07792 22.5778 4.07792C25.514 4.07792 28.3848 4.78516 30.8306 6.11099C32.6909 7.12427 34.2531 8.4612 35.405 10.0258C36.5569 11.5903 37.2699 13.3437 37.4927 15.1598C37.7146 16.961 37.4429 18.7799 36.6974 20.4848C35.9518 22.1897 34.751 23.738 33.1819 25.0176ZM22.5778 7.99224C20.5261 7.99224 18.5205 8.48874 16.8146 9.41896C15.1086 10.3492 13.779 11.6713 12.9939 13.2182C12.2087 14.7651 12.0033 16.4673 12.4036 18.1094C12.8038 19.7516 13.7918 21.26 15.2426 22.444C16.6934 23.6279 18.5418 24.4342 20.554 24.7608C22.5663 25.0875 24.6521 24.9198 26.5476 24.2791C28.4431 23.6383 30.0633 22.5533 31.2031 21.1611C32.343 19.769 32.9514 18.1322 32.9514 16.4579C32.9453 14.2142 31.8504 12.0638 29.9063 10.4773C27.9622 8.89072 25.3272 7.99721 22.5778 7.99224ZM22.5778 21.161C21.438 21.161 20.3237 20.8852 19.376 20.3684C18.4283 19.8516 17.6896 19.1171 17.2534 18.2577C16.8172 17.3983 16.7031 16.4527 16.9255 15.5403C17.1478 14.628 17.6967 13.79 18.5027 13.1323C19.3087 12.4745 20.3356 12.0266 21.4535 11.8451C22.5714 11.6636 23.7302 11.7568 24.7833 12.1127C25.8363 12.4687 26.7364 13.0715 27.3697 13.845C28.0029 14.6184 28.3409 15.5277 28.3409 16.4579C28.3409 17.7052 27.7337 18.9015 26.6529 19.7835C25.5722 20.6655 24.1063 21.161 22.5778 21.161Z" fill="#72448D"/>
    <g filter="url(#filter0_f_92_23514)">
    <ellipse cx="22.5777" cy="44.1125" rx="18.4419" ry="2.2575" fill="#2A4293" fill-opacity="0.89"/>
    </g>
    <defs>
    <filter id="filter0_f_92_23514" x="0.135742" y="37.855" width="44.8838" height="12.5149" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_92_23514"/>
    </filter>
    </defs>
    </svg>
        `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  // إضافة طبقة OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  var marker;
  var latitudeInput = document.getElementById("latitude");
  var longitudeInput = document.getElementById("longitude");

  // التحقق من الموقع الحالي
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      map.setView([lat, lng], 13);
      addMarker([lat, lng]);
    });
  }

  // إضافة حدث النقر على الخريطة
  map.on("click", function (e) {
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
    addMarker([lat, lng]);
  });

  // إضافة وظيفة لوضع علامة على الخريطة
  function addMarker(latlng) {
    if (marker) {
      marker.setLatLng(latlng);
    } else {
      marker = L.marker(latlng, {
        draggable: true,
        icon: svgIcon,
      }).addTo(map);
      marker.on("dragend", function (e) {
        var position = marker.getLatLng();
        updateInputs(position.lat, position.lng);
      });
    }
    updateInputs(latlng[0], latlng[1]);
  }

  function updateInputs(lat, lng) {
    latitudeInput.value = lat;
    longitudeInput.value = lng;
  }
}

if (document.querySelector(".payment-option input")) {
  document.addEventListener("DOMContentLoaded", function () {
    const paymentOptions = document.querySelectorAll(".payment-option input");

    paymentOptions.forEach((input) => {
      input.addEventListener("change", function () {
        // إزالة التحديد من كل الليبلات
        document.querySelectorAll(".payment-option").forEach((label) => {
          label.classList.remove("selected");
        });

        // إضافة التحديد لليبل المرتبط بالـ input المختار
        if (this.checked) {
          this.closest(".payment-option").classList.add("selected");
        }
      });
    });
  });
}

if (document.getElementById("receipt")) {
  function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    html2canvas(document.getElementById("receipt")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 190;
      const imgHeight = 250;

      doc.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      doc.save("إيصال_دفع.pdf");
    });
  }
}
