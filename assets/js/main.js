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

  // إغلاق المودال عند الضغط خارج الصندوق
  document
    .getElementById("modalLoginOverlay")
    .addEventListener("click", closeModalLogin);

  //  زر الفتح
  document
    .getElementById("openModalLogin")
    .addEventListener("click", toggleModal);
}

// Modal Choose serv
if (document.getElementById("modalChooseservOverlay")) {
  function openModalChooseserv() {
    document.getElementById("modalChooseservOverlay").classList.add("active");
    closeModalserv();
    closModalservTimeBook();
  }

  function closeModalChooseserv() {
    document
      .getElementById("modalChooseservOverlay")
      .classList.remove("active");
  }

  function toggleModal() {
    let modalOverlay = document.getElementById("modalChooseservOverlay");

    if (modalOverlay.classList.contains("active")) {
      closeModalChooseserv();
    } else {
      openModalChooseserv();
    }
  }

  // إغلاق المودال عند الضغط خارج الصندوق
  document
    .getElementById("modalChooseservOverlay")
    .addEventListener("click", closeModalChooseserv);

  //  زر الفتح
  document.querySelectorAll("#openModalChooseserv").forEach((e) => {
    e.addEventListener("click", toggleModal);
  });
}
// Modal serv
if (document.getElementById("modalservOverlay")) {
  function openModalserv() {
    document.getElementById("modalservOverlay").classList.add("active");
    closeModalChooseserv();
  }

  function closeModalserv() {
    document.getElementById("modalservOverlay").classList.remove("active");
  }

  function toggleModal() {
    let modalOverlay = document.getElementById("modalservOverlay");

    if (modalOverlay.classList.contains("active")) {
      closeModalserv();
    } else {
      openModalserv();
    }
  }

  // إغلاق المودال عند الضغط خارج الصندوق
  document
    .getElementById("modalservOverlay")
    .addEventListener("click", closeModalserv);

  //  زر الفتح
  document.querySelectorAll("#openModalserv").forEach((e) => {
    e.addEventListener("click", toggleModal);
  });

  // التحقق من وجود ?modal=open في الرابط
  const params = new URLSearchParams(window.location.search);
  if (params.get("modal") === "open") {
    openModalserv();
    // بعد فتح المودال، إزالة ?modal=open من الرابط
    params.delete("modal");
    const newUrl =
      window.location.pathname +
      (params.toString() ? "?" + params.toString() : "");
    window.history.replaceState({}, document.title, newUrl);
  }
}
// Modal servTimeBook
if (document.getElementById("modalservTimeBookOverlay")) {
  function openModalservTimeBook() {
    document.getElementById("modalservTimeBookOverlay").classList.add("active");
    closeModalserv();
    closeModalChooseserv();
  }

  function closModalservTimeBook() {
    document
      .getElementById("modalservTimeBookOverlay")
      .classList.remove("active");
  }

  function toggleModal() {
    let modalOverlay = document.getElementById("modalservTimeBookOverlay");

    if (modalOverlay.classList.contains("active")) {
      closModalservTimeBook();
    } else {
      openModalservTimeBook();
    }
  }

  // إغلاق المودال عند الضغط خارج الصندوق
  document
    .getElementById("modalservTimeBookOverlay")
    .addEventListener("click", closModalservTimeBook);

  //  زر الفتح
  document.querySelectorAll("#openModalservTimeBook").forEach((e) => {
    e.addEventListener("click", toggleModal);
  });
}
// Modal privacyOverlay
if (document.getElementById("modalprivacyOverlay")) {
  function openModalprivacy() {
    document.getElementById("modalprivacyOverlay").classList.add("active");
  }

  function closeModalprivacy() {
    document.getElementById("modalprivacyOverlay").classList.remove("active");
  }

  function toggleModal() {
    let modalOverlay = document.getElementById("modalprivacyOverlay");

    if (modalOverlay.classList.contains("active")) {
      closeModalprivacy();
    } else {
      openModalprivacy();
    }
  }

  // إغلاق المودال عند الضغط خارج الصندوق
  document
    .getElementById("modalprivacyOverlay")
    .addEventListener("click", closeModalprivacy);

  //  زر الفتح
  document.querySelectorAll("#openModalprivacy").forEach((e) => {
    e.addEventListener("click", toggleModal);
  });

  const checkbox = document.querySelector(".checkForPrivacy");
  const button = document.querySelector(".payAfterPrivacy");

  // تحديث كلاس الزر عند تغيير حالة Checkbox
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      button.classList.remove("disabled");
    } else {
      button.classList.add("disabled");
    }
  });
}


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
    const openSidebar2 = document.getElementById("openSidebar2");
    const closeSidebar = document.getElementById("closeSidebar");
    const links = sidebar.querySelectorAll("a"); // كل اللينكات جوا السايدبار

    // فتح السايدبار
    openSidebar.addEventListener("click", function (event) {
      event.stopPropagation(); // عشان الضغط على الزرار نفسه ميقفلهاش
      sidebar.classList.toggle("open");
      document.body.classList.add("overflow-hidden");
    });

    openSidebar2.addEventListener("click", function (event) {
      event.stopPropagation(); // عشان الضغط على الزرار نفسه ميقفلهاش
      sidebar.classList.toggle("open");
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
        !openSidebar.contains(event.target) &&
        !openSidebar2.contains(event.target)
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

// payment - option;
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
// pdf
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
// .copy-btn
if (document.querySelector(".copy-btn")) {
  document.querySelector(".copy-btn").addEventListener("click", function () {
    const orderID = document.querySelector(".order-id").textContent;
    const copyMessage = document.querySelector(".copy-message");

    // نسخ النص إلى الحافظة
    navigator.clipboard.writeText(orderID).then(() => {
      copyMessage.textContent = "تم النسخ ✅"; // تعيين الرسالة
      copyMessage.classList.add("show"); // إضافة كلاس لتظهر الرسالة

      // إخفاء الرسالة بعد 5 ثواني
      setTimeout(() => {
        copyMessage.textContent = "";
        copyMessage.classList.remove("show");
      }, 5000);
    });
  });
}
// order - tracking;
if (document.querySelector(".order-tracking")) {
  function toggleDetails(element) {
    let icon = element.querySelector(".toggle-btn svg");
    let details = element.parentElement.nextElementSibling;
    if (details) {
      if (details.style.display === "block" || details.style.display === "") {
        details.style.display = "none";
        icon.classList.add("fa-chevron-up");
        icon.classList.remove("fa-chevron-down");
      } else {
        details.style.display = "block";
        icon.classList.add("fa-chevron-down");
        icon.classList.remove("fa-chevron-up");
      }
    }
  }
}

// add - rating;
if (document.querySelector(".add-rating")) {
  document.querySelectorAll(".add-rating").forEach((button) => {
    button.addEventListener("click", function () {
      let form = this.nextElementSibling;
      form.style.display = "flex";
      this.style.display = "none";
    });
  });

  document.querySelectorAll(".rating span").forEach((star) => {
    star.addEventListener("click", function () {
      let value = this.getAttribute("data-value");
      let allStars = this.parentElement.querySelectorAll("span");
      let form = this.closest(".rating-form");
      let ratingInput = form.querySelector(".rating-value");

      // تحديث hidden input بالقيمة المختارة
      ratingInput.value = value;

      // تلوين النجوم بناءً على التقييم المختار
      allStars.forEach((s) =>
        s.querySelector("svg").classList.remove("selected")
      );
      allStars.forEach((s) => {
        if (s.getAttribute("data-value") <= value) {
          s.querySelector("svg").classList.add("selected");
        }
      });
    });
  });
}

// schedule
if (document.querySelector(".schedule")) {
  // الأيام باللغة العربية
  const arabicDays = [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];

  // جلب اليوم الحالي
  const todayIndex = new Date().getDay();
  const todayName = arabicDays[todayIndex];

  // تحويل أسماء الأيام لـ ID مطابق
  const dayIdMap = {
    الأحد: "sunday",
    الاثنين: "monday",
    الثلاثاء: "tuesday",
    الأربعاء: "wednesday",
    الخميس: "thursday",
    الجمعة: "friday",
    السبت: "saturday",
  };

  // تحديد العنصر الذي يمثل اليوم الحالي
  const todayElement = document.getElementById(dayIdMap[todayName]);

  if (todayElement) {
    todayElement.querySelector(".dayOfweek").classList.add("today");
  }

  document.querySelectorAll(".closed-label").forEach((label) => {
    if (label.parentElement) {
      label.previousElementSibling.classList.add("closed");
      label.nextElementSibling.classList.add("d-none");
    }
  });
}
// checkCon
if (document.querySelector(".checkCon")) {
  document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      let label = document.querySelector(`label[for='${this.id}']`);
      label.textContent = this.checked ? "الغاء الاختيار" : "اختيار";
    });
  });
}



document.addEventListener("DOMContentLoaded", () => {
  // calender
  if (document.getElementById("calendar")) {
    import("./calender.js").then((module) => module.initcalender());
  }

  // maps
  if (document.getElementById("map")) {
    import("./maps.js").then((module) => module.initMaps());
  }

  // swiper
  if (document.querySelector(".swiper ")) {
    import("./myswiper.js").then((module) => module.initswiper());
  }
  // countrySelect
  if (document.getElementById("countrySelect")) {
    import("./countrySelect.js").then((module) => module.initcountry());
  }

  // phoneWithCode
  if (document.querySelector("#phoneWithCode")) {
    import("./intl-tel-input.js").then((module) => module.inittel());
  }

  // fileUpload
  if (document.querySelector(".upload-box")) {
    import("./fileUpload.js").then((module) => module.initfileUpload());
  }
});
