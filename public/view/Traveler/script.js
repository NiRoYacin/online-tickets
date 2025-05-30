document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.wrapper');
  const loginLink = document.querySelector('.login-link');
  const registeredLink = document.querySelector('.register-link');
  const btnPopup = document.querySelector('.btnlogin-popup');
  const iconClose = document.querySelector('.icon-close');



  registeredLink.addEventListener('click', () => {
    wrapper.classList.add('active');
  });

  loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
  });

  btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
  });

  iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
  });
});
const urlParams = new URLSearchParams(window.location.search);
const from = urlParams.get("from");
const to = urlParams.get("to");
const date = urlParams.get("date");
const time = urlParams.get("time");

document.querySelector('.register form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const username = this.querySelector('input[name="username"]').value;
  const email = this.querySelector('input[name="email"]').value;
  const password = this.querySelector('input[name="password"]').value;

  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nom_user: username,
        mot_de_passe: password,
        email: email
      })
    });

    const data = await response.json();

    if (response.ok) {
      alert("✅ تم إنشاء الحساب بنجاح!");
      document.querySelector('.wrapper').classList.remove('active');
    } else {
      alert(data.message || 'فشل في إنشاء الحساب!');
    }
  } catch (err) {
    console.error(err);
    alert('حدث خطأ أثناء إنشاء الحساب.');
  }
});
// longage 
document.querySelector('.language-btn').addEventListener('click', function (e) {
  e.stopPropagation(); // لمنع غلقها فورًا
  const dropdown = document.querySelector('.language-dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function () {
  const dropdown = document.querySelector('.language-dropdown');
  dropdown.style.display = 'none';
});
const languageLinks = document.querySelectorAll('.language-dropdown a');
const languageBtn = document.querySelector('.language-btn');

languageLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const selectedLang = this.getAttribute('data-lang');
    languageBtn.innerHTML = `${selectedLang} <i class="fas fa-chevron-down"></i>`;

    // إخفاء القائمة بعد التحديد
    document.querySelector('.language-dropdown').style.display = 'none';
  });
});

// time & date
window.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('date');
  const timeInput = document.getElementById('time');

  const now = new Date();

  // تحديد التاريخ بصيغة yyyy-mm-dd
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  dateInput.value = `${year}-${month}-${day}`;

  // تحديد الوقت بصيغة hh:mm
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  timeInput.value = `${hours}:${minutes}`;
});


// go 01

  document.addEventListener("DOMContentLoaded", () => {
    const goButton = document.getElementById("go-button");
    const bookingSection = document.getElementById("booking-section");
    const tripResults = document.getElementById("trip-results");

    goButton.addEventListener("click", function(event) {
      event.preventDefault(); // لمنع إعادة تحميل الصفحة
      bookingSection.style.display = "none";
      tripResults.style.display = "block";
    });
  });

  // goback 01
  
  document.addEventListener("DOMContentLoaded", () => {
    const goButton = document.getElementById("go-button");
    const goBack = document.getElementById("go-back");
    const bookingSection = document.getElementById("booking-section");
    const tripResults = document.getElementById("trip-results");

    goButton.addEventListener("click", function(event) {
      event.preventDefault();
      bookingSection.style.display = "none";
      tripResults.style.display = "block";
    });

    goBack.addEventListener("click", function(event) {
      event.preventDefault();
      tripResults.style.display = "none";
      bookingSection.style.display = "block";
    });
  });

  // detail

 document.addEventListener("DOMContentLoaded", () => {
    
    const tripDetailsLinks = document.querySelectorAll(".trip-links a");
    const containerDetail = document.querySelector(".container_ditil");
    const containerMain = document.querySelector(".container"); // العنصر الرئيسي عندك
    const backBtn = containerDetail.querySelector(".back-btn");

    // عند الضغط على Trip details
    tripDetailsLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        containerMain.style.display = "none"; // إخفاء العنصر الرئيسي
        containerDetail.style.display = "block"; // إظهار التفاصيل
      });
    });

    // عند الضغط على Go back داخل تفاصيل الرحلة
    backBtn.addEventListener("click", () => {
      containerDetail.style.display = "none"; // إخفاء التفاصيل
      containerMain.style.display = "block"; // إظهار العنصر الرئيسي
    });
  });

  // payment info 
    document.addEventListener("DOMContentLoaded", () => {
    const tripDetailsLinks = document.querySelectorAll(".trip-links a");
    const containerMain = document.querySelector(".container");      // الصفحة الرئيسية
    const containerDetail = document.querySelector(".container_ditil"); // تفاصيل الرحلة
    const paymentContainer = document.getElementById("paymentContainer"); // الدفع

    const backBtn = containerDetail.querySelector(".back-btn");
    const buyBtn = containerDetail.querySelector(".buy-btn");
    const paymentBackLink = paymentContainer.querySelector(".back-link");

    // عند الضغط على تفاصيل الرحلة
    tripDetailsLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        containerMain.style.display = "none";
        paymentContainer.style.display = "none";
        containerDetail.style.display = "block";
      });
    });

    // زر العودة من تفاصيل الرحلة
    backBtn.addEventListener("click", () => {
      containerDetail.style.display = "none";
      paymentContainer.style.display = "none";
      containerMain.style.display = "block";
    });

    // زر الشراء من تفاصيل الرحلة
    buyBtn.addEventListener("click", () => {
      containerDetail.style.display = "none";
      containerMain.style.display = "none";
      paymentContainer.style.display = "block";
    });

    // زر العودة من صفحة الدفع
    paymentBackLink.addEventListener("click", () => {
      paymentContainer.style.display = "none";
      containerDetail.style.display = "block";
    });
  });

 
// show risulta in next elements:



  // عندما يتم تغيير المدينة الحالية أو الوجهة
  document.getElementById('from').addEventListener('input', updateTripHeader);
  document.getElementById('to').addEventListener('input', updateTripHeader);

  function updateTripHeader() {
    const fromValue = document.getElementById('from').value;
    const toValue = document.getElementById('to').value;

    // إذا تم اختيار المدينتين، حدّث النص
    if (fromValue && toValue) {
      document.getElementById('selected-from').textContent = fromValue;
      document.getElementById('selected-to').textContent = toValue;

    }
  }
  
// open ticket page:
window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.buy-btn2').addEventListener('click', function () {
    window.location.href = 'ticket.html';
  });
});


  document.getElementById("detect-location").addEventListener("click", function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&accept-language=en`);
          const data = await res.json();

          const regionName =
            data.address.state || data.address.city || data.address.county || data.address.region || "منطقة غير معروفة";

          document.getElementById("from").value = regionName;
        } catch (error) {
          alert("حدث خطأ أثناء جلب بيانات الموقع.");
        }

      }, function (error) {
        alert("لم نتمكن من تحديد موقعك: " + error.message);
      });
    } else {
      alert("المتصفح لا يدعم تحديد الموقع.");
    }
  });


//////////////////// time //////////////////////
  // ضبط الحد الأدنى للتاريخ والوقت
  window.onload = function () {
    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("time");

    const now = new Date();

    // تنسيق التاريخ الحالي بصيغة YYYY-MM-DD
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const today = `${yyyy}-${mm}-${dd}`;
    dateInput.min = today;

    // تنسيق الوقت الحالي بصيغة HH:MM
    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const currentTime = `${hh}:${min}`;

    // عندما يختار المستخدم تاريخ اليوم، نمنع إدخال وقت أقل من الآن
    dateInput.addEventListener("change", function () {
      if (dateInput.value === today) {
        timeInput.min = currentTime;
      } else {
        timeInput.removeAttribute("min");
      }
    });
  };
  document.getElementById("buyButton").addEventListener("click", function() {
    window.location.href = "ticket.html";
  });
 
  // images:

  // const imageElement = document.getElementById('hero-img');

  // const images = [
  //   'view/Traveler/bus.jpg',
  //   'view/Traveler/bus2.jpg',
  //   'view/Traveler/bus3.jpg',
  //   'view/Traveler/bus4.jpg'
  // ];

  // let index = 0;

  // function changeImage() {
  //   imageElement.classList.add('fade-out');

  //   setTimeout(() => {
  //     index = (index + 1) % images.length;
  //     imageElement.src = images[index];

  //     imageElement.classList.remove('fade-out');
  //     imageElement.classList.add('fade-in');

  //     setTimeout(() => {
  //       imageElement.classList.remove('fade-in');
  //     }, 1000);
  //   }, 1000);
  // }

  // setInterval(changeImage, 10000); // كل 10 ثواني
  // window.onload = changeImage; // لبدء السلايدر فور تحميل الصفحة

//////////////////////////// ticket //////////////////
