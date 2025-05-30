// show lists:
const showListsCard = document.querySelector('.card:nth-child(1)');
const cardsSection = document.querySelector('.cards');
const container = document.querySelector('.container');
const goBackBtn = document.getElementById('goBackBtn');

showListsCard.addEventListener('click', () => {
  cardsSection.style.display = 'none';
  container.style.display = 'block';
});

goBackBtn.addEventListener('click', (e) => {
  e.preventDefault();
  container.style.display = 'none';
  cardsSection.style.display = 'flex';
});
// go back 
showListsBtn.addEventListener('click', () => {
  cardsSection.style.display = 'none';
  busListContainer.style.display = 'block';
});

goBackBtn.addEventListener('click', (e) => {
  e.preventDefault(); // منع إعادة تحميل الصفحة عند الضغط على الرابط
  busListContainer.style.display = 'none';
  cardsSection.style.display = 'flex';  // أو 'block' حسب طريقة العرض الأصلية
});

showListsBtn.addEventListener('click', () => {
  cardsSection.classList.add('hidden');
  busListContainer.classList.remove('hidden');
});

goBackBtn.addEventListener('click', (e) => {
  e.preventDefault(); // يمنع السلوك الافتراضي للرابط
  busListContainer.classList.add('hidden');
  cardsSection.classList.remove('hidden');
});
// edit bus info
document.addEventListener("DOMContentLoaded", function () {
    const nameField = document.getElementById("name");
    const teleField = document.getElementById("tele");
    const directionField = document.getElementById("direction");
    const timeField = document.getElementById("time");
    const stopField = document.getElementById("stopStation");
    const returning = document.getElementById("returning");
    const popup = document.getElementById("busPopup");

    const fields = [nameField, teleField, directionField, stopField];

    document.getElementById("validBtn").addEventListener("click", function () {
      let allValid = true;
      fields.forEach(field => {
        if (field.value.trim() === "") {
          field.classList.add("error");
          allValid = false;
        } else {
          field.classList.remove("error");
        }
      });
      if (allValid) {
        alert("✅ All fields are valid!");
      } else {
        alert("⚠️ Please fill all required fields!");
      }
    });

    function clearFields() {
      nameField.value = "";
      teleField.value = "";
      directionField.value = "";
      stopField.value = "";
      timeField.value = "10:15";
      returning.checked = false;
      fields.forEach(field => field.classList.remove("error"));
    }

    document.getElementById("cleanBtn").addEventListener("click", clearFields);

    document.getElementById("cancelBtn").addEventListener("click", function () {
      clearFields();
      popup.classList.add("hidden");
    });

    document.getElementById("goBack").addEventListener("click", function () {
      popup.classList.add("hidden");
    });
  });
//   showing edit bus info 

const busPopup = document.getElementById('busPopup');
const editButtons = document.querySelectorAll('.edit-button');
const cancelBtn = document.getElementById('cancelBtn');

// إظهار لائحة الحافلات
showListsBtn.addEventListener('click', () => {
  cardsSection.classList.add('hidden');
  busListContainer.classList.remove('hidden');
});

// زر العودة من اللائحة للبطاقات
goBackBtn.addEventListener('click', (e) => {
  e.preventDefault();
  busListContainer.classList.add('hidden');
  cardsSection.classList.remove('hidden');
});

// إظهار نافذة التعديل عند الضغط على أي زر "Edit"
editButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    busPopup.style.display = 'block'; // إظهار البوب أب
  });
});

// إخفاء نافذة التعديل عند الضغط على زر إلغاء
cancelBtn.addEventListener('click', () => {
  busPopup.style.display = 'none'; // إخفاء البوب أب
});
// إظهار popup مع overlay (لو استخدمته)
function showPopup() {
  busPopup.style.display = 'block';
  document.querySelector('.popup-overlay').style.display = 'block';
}

function hidePopup() {
  busPopup.style.display = 'none';
  document.querySelector('.popup-overlay').style.display = 'none';
}

// link bus info with edit bus info

// الحقول داخل نافذة التعديل
const inputName = document.getElementById('name');
const inputTele = document.getElementById('tele');
const inputDirection = document.getElementById('direction');
const inputTime = document.getElementById('time');
const inputStopStation = document.getElementById('stopStation');
const inputReturning = document.getElementById('returning');

editButtons.forEach(button => {
  button.addEventListener('click', () => {
    // العنصر الأب للحافلة (bus-item)
    const busItem = button.closest('.bus-item');

    // جلب البيانات من data-attributes
    const name = busItem.dataset.name || "";
    const tele = busItem.dataset.tele || "";
    const direction = busItem.dataset.destination || "";
    const time = busItem.dataset.time || "10:15";
    const stopStation = busItem.dataset.stopstation || "";
    const returning = busItem.dataset.returning === 'true';

    // ملء الحقول
    inputName.value = name;
    inputTele.value = tele;
    inputDirection.value = direction;
    inputTime.value = time;
    inputStopStation.value = stopStation;
    inputReturning.checked = returning;

    // إظهار النافذة
    busPopup.style.display = 'block';
  });
});

// زر الإلغاء يخفي النافذة

cancelBtn.addEventListener('click', () => {
  busPopup.style.display = 'none';
});
// show sitting


//   close sitting

  // إظهار نافذة الإعدادات عند الضغط على زر الترس
  document.getElementById("settingsBtn").addEventListener("click", function () {
    document.getElementById("popup2").classList.remove("hidden");
  });

  // إخفاء نافذة الإعدادات عند الضغط على Go Back
  document.getElementById("goBackSettings").addEventListener("click", function () {
    document.getElementById("popup2").classList.add("hidden");
  });

//   switch in setting
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        contents.forEach(c => c.classList.remove('active'));
        document.getElementById(tab.dataset.tab).classList.add('active');
      });
    });

// notification
document.addEventListener('DOMContentLoaded', () => {
  const notificationsBtn = document.getElementById('notificationsBtn');
  const notifi = document.querySelector('.notifi');
  const goBackNotifi = document.getElementById('goBackNotifi');

  notificationsBtn.addEventListener('click', () => {
    notifi.classList.remove('hidden');
  });

  goBackNotifi.addEventListener('click', () => {
    notifi.classList.add('hidden');
  });
});
// order history
const orderHistoryCard = document.querySelector(".card:nth-child(3)");
const orderHistoryContainer = document.querySelector(".order-history-container");
const cardsContainer = document.querySelector(".cards");
const goBackOrderBtn = document.querySelector(".go-back_order");

orderHistoryCard.addEventListener("click", () => {
  // اخفاء البطاقات
  cardsContainer.classList.add("hidden");
  // اظهار order history
  orderHistoryContainer.classList.remove("hidden");
});

goBackOrderBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // اظهار البطاقات
  cardsContainer.classList.remove("hidden");
  // اخفاء order history
  orderHistoryContainer.classList.add("hidden");
});

    document.querySelector('.buy-btn2').addEventListener('click', function () {
      window.location.href = 'ticket.html'; // ينقلك إلى ticket.html
    });



