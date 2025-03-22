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
  let price = button
    .closest(".cart-item")
    .querySelector(".cartPrice").innerText;
  input.value = parseInt(input.value) + 1;
  updateTotal();
}
// cart
function decreaseQuantity(button) {
  let input = button.previousElementSibling;
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
    updateTotal();
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
      delay: 50000000, // يغير الصورة كل 5 ثواني
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
  document.querySelectorAll('.swiper').forEach(swiper => {
    let maxHeight = 0;
    let slides = swiper.querySelectorAll('.swiper-slide .card');

    // إعادة تعيين الارتفاعات لحساب الطول الصحيح
    slides.forEach(card => {
      card.style.height = 'auto';
      maxHeight = Math.max(maxHeight, card.offsetHeight);
    });

    // تطبيق الطول الموحد لكل كروت هذا السوايبر فقط
    slides.forEach(card => {
      card.style.height = maxHeight + 'px';
    });
  });
}
// تشغيل الدالة عند تحميل الصفحة وبعد تغيير السلايدر
document.addEventListener("DOMContentLoaded", setEqualHeightForEachSwiper);
window.addEventListener("resize", setEqualHeightForEachSwiper);
