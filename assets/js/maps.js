export function initMaps() {
  // للتوصيل الخريطة
  if (document.querySelector(".sea_product #map")) {
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

  //للصالون الخريطة
  if (document.querySelector(".mapSalon")) {
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

    addMarker([latitudeInput.value, longitudeInput.value]);

    // إضافة وظيفة لوضع علامة على الخريطة
    function addMarker(latlng) {
      if (marker) {
        marker.setLatLng(latlng);
      } else {
        marker = L.marker(latlng, {
          draggable: true,
          icon: svgIcon,
        }).addTo(map);
      }
    }
  }
}