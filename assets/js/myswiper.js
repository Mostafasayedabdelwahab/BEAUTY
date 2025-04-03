export function initswiper() {
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
}