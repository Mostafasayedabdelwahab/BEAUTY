export function initcalender() {

    if (document.getElementById("calendar")) {
      const disabledDays = [6, 13, 14, 20, 25, 26, 28]; // الأيام المغلقة
      let currentMonth = moment().month() + 1; // الشهر الحالي (moment.js يبدأ من 0)
      let currentYear = moment().year(); // السنة الحالية

      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      function renderCalendar(month, year) {
        let selectedDate = moment(`${year}-${month}-01`, "YYYY-MM-DD"); // تعيين التاريخ المختار
        $("#monthYear").text(selectedDate.format("MMMM YYYY")); // تحديث العنوان
        $("#calendar").empty(); // تفريغ التقويم

        let firstDay = selectedDate.day(); // معرفة أول يوم في الشهر
        let daysInMonth = selectedDate.daysInMonth(); // عدد الأيام في الشهر

        // **إضافة أسماء أيام الأسبوع**
        let weekRow = $("<div class='week-row'></div>");
        daysOfWeek.forEach((day) => {
          weekRow.append(`<div class='week-day'>${day}</div>`);
        });
        $("#calendar").append(weekRow);

        // **إضافة الأيام مع مراعاة الفراغات في بداية الأسبوع**
        let calendarRow = $("<div class='days-row'></div>");
        let totalDaysDisplayed = 0;

        for (let i = 0; i < firstDay; i++) {
          calendarRow.append("<div class='day empty'></div>"); // إضافة فراغات
          totalDaysDisplayed++;
        }

        for (let day = 1; day <= daysInMonth; day++) {
          let btn = $(`<div class='day'>${day}</div>`);

          if (disabledDays.includes(day)) {
            btn.addClass("disabled").append("<br><small>مغلق</small>"); // تمييز الأيام المغلقة
          }

          btn.on("click", function () {
            if (!$(this).hasClass("disabled")) {
              // لا يسمح بتحديد يوم مغلق
              $(".day").removeClass("selected");
              $(this).addClass("selected");
              $("#selectedDate").val(`${year}-${month}-${day}`); // تحديث قيمة الحقل المخفي
            }
          });

          calendarRow.append(btn);
          totalDaysDisplayed++;

          // عند اكتمال الأسبوع (سبعة أيام)، يبدأ سطر جديد
          if (totalDaysDisplayed % 7 === 0) {
            $("#calendar").append(calendarRow);
            calendarRow = $("<div class='days-row'></div>");
          }
        }

        // **إضافة أيام فارغة في نهاية الصف الأخير لو لم يكتمل بـ 7 أيام**
        while (totalDaysDisplayed % 7 !== 0) {
          calendarRow.append("<div class='day empty'></div>");
          totalDaysDisplayed++;
        }

        // إضافة آخر صف لو لم يكن فارغًا
        if (calendarRow.children().length > 0) {
          $("#calendar").append(calendarRow);
        }
      }

      // زر الانتقال إلى الشهر السابق
      $("#prevMonth").on("click", function () {
        currentMonth -= 1;
        if (currentMonth < 1) {
          currentMonth = 12;
          currentYear -= 1;
        }
        renderCalendar(currentMonth, currentYear);
      });

      // زر الانتقال إلى الشهر التالي
      $("#nextMonth").on("click", function () {
        currentMonth += 1;
        if (currentMonth > 12) {
          currentMonth = 1;
          currentYear += 1;
        }
        renderCalendar(currentMonth, currentYear);
      });

      // عرض التقويم عند تحميل الصفحة
      renderCalendar(currentMonth, currentYear);

      // الحصول على الوقت
      $(document).ready(function () {
        $(".time-slot").on("click", function () {
          $(".time-slot").removeClass("selected"); // إزالة التحديد من كل الأزرار
          $(this).addClass("selected"); // إضافة التحديد للزر المختار

          let selectedTime = $(this).data("time"); // الحصول على الوقت
          $("#selectedTime").val(selectedTime); // تخزينه في الـ input المخفي
        });
      });
    }
}