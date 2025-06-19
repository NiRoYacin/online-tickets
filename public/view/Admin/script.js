// show lists:
function navigateToSection(showId, hideIds = []) {
  const toShow = document.getElementById(showId) || document.querySelector('.' + showId);
  if (toShow) toShow.classList.remove('hidden');

  hideIds.forEach(id => {
    const toHide = document.getElementById(id) || document.querySelector('.' + id);
    if (toHide) toHide.classList.add('hidden');
  });
}
// إظهار popup مع overlay (لو استخدمته)
function showPopup() {
  busPopup.style.display = 'block';
  document.querySelector('.popup-overlay').style.display = 'block';
}

function hidePopup() {
  busPopup.style.display = 'none';
  document.querySelector('.popup-overlay').style.display = 'none';
}
// update page wep evry 5 secondes:
setInterval(() => {
  console.log("أنا أتحدث كل 5 ثوانٍ!");
}, 5000); // 5000 ملي ثانية = 5 ثوانٍ

const showListsCard = document.querySelector('.card:nth-child(1)');
const cardsSection = document.querySelector('.cards');
const container = document.querySelector('.container');
const goBackBtn = document.getElementById('goBackBtn');


// show div list :
showListsBtn.addEventListener('click', () => {
  navigateToSection('busListContainer', ['cardsSection']);
});
goBackBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navigateToSection('cardsSection', ['busListContainer']);
});

// edit bus info
document.addEventListener("DOMContentLoaded", function () {
  const nameField = document.getElementById("name");
  const teleField = document.getElementById("tele");
  const directionField = document.getElementById("direction");
  const timeField = document.getElementById("time");
  const returning = document.getElementById("returning");
  const popup = document.getElementById("busPopup");

  // الحقول المطلوب تعبئتها
  const fields = [nameField, teleField, directionField];

  const validBtn = document.getElementById("validBtn");
  const stationListDisplay = document.getElementById("stationListDisplay");

  if (validBtn) {
    validBtn.addEventListener("click", function () {
      let allValid = true;

      // تحقق من الحقول الفارغة
      fields.forEach(field => {
        if (field && field.value.trim() === "") {
          field.classList.add("error");
          allValid = false;
        } else if (field) {
          field.classList.remove("error");
        }
      });

      // تحقق من وجود محطات مضافة
      const stationItems = stationListDisplay.querySelectorAll("li");
      if (stationItems.length === 0) {
        alert("⚠️ الرجاء إضافة محطة واحدة على الأقل!");
        allValid = false;
      }

      if (allValid) {
        alert("✅ كل الحقول صالحة وتم إضافة محطات!");
        // يمكنك هنا تنفيذ الإرسال أو الإجراء المطلوب
      }
    });
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
//   showing edit bus info 

const busPopup = document.getElementById('busPopup');
const editButtons = document.querySelectorAll('.edit-button_form1');
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

// link bus info with edit bus info

// الحقول داخل نافذة التعديل
const inputName = document.getElementById('name');
const inputTele = document.getElementById('tele');
const inputDirection = document.getElementById('direction');
const inputTime = document.getElementById('time');
const inputStopStation = document.getElementById('stopStation');
const inputReturning = document.getElementById('returning');

function showPopup(popupId, overlayId = null) {
  const popup = document.getElementById(popupId);
  if (popup) popup.style.display = 'block';

  if (overlayId) {
    const overlay = document.querySelector(overlayId);
    if (overlay) overlay.style.display = 'block';
  }
}
function hidePopup(popupId, overlayId = null) {
  const popup = document.getElementById(popupId);
  if (popup) popup.style.display = 'none';

  if (overlayId) {
    const overlay = document.querySelector(overlayId);
    if (overlay) overlay.style.display = 'none';
  }
}

editButtons.forEach(button => {
  button.addEventListener('click', () => {
    const busItem = button.closest('.bus-item');
    if (!busItem) return;

    inputName.value = busItem.dataset.name || "";
    inputTele.value = busItem.dataset.tele || "";
    inputDirection.value = busItem.dataset.destination || "";
    inputTime.value = busItem.dataset.time || "10:15";
    inputStopStation.value = busItem.dataset.stopstation || "";
    inputReturning.checked = busItem.dataset.returning === 'true';

    showPopup('busPopup');
  });
});

// زر الإلغاء يخفي النافذة
cancelBtn.addEventListener('click', () => {
  hidePopup('busPopup');
});

function clearBusFormFields() {
  inputName.value = "";
  inputTele.value = "";
  inputDirection.value = "";
  inputStopStation.value = "";
  inputTime.value = "10:15";
  inputReturning.checked = false;

  const fields = [inputName, inputTele, inputDirection, inputStopStation];
  fields.forEach(f => f.classList.remove("error"));
}

document.getElementById("cleanBtn").addEventListener("click", clearBusFormFields);
document.getElementById("cancelBtn").addEventListener("click", () => {
  clearBusFormFields();
  hidePopup('busPopup');
});


// station list :
const openBtn = document.getElementById("openStationModalBtn");
const modal = document.getElementById("stationModal");
const stationInput = document.getElementById("stationInputField");
const stationList = document.getElementById("stationListDisplay");

openBtn.onclick = function () {
  modal.style.display = "flex";
  stationInput.focus();
};

function closeStationModal() {
  modal.style.display = "none";
}

// إغلاق النافذة إذا ضغط المستخدم خارجها
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function addStopStation() {
  const name = stationInput.value.trim();
  if (name === "") {
    alert("يرجى إدخال اسم المحطة.");
    return;
  }

  // إنشاء العنصر li
  const li = document.createElement("li");
  li.classList.add("station-item"); // للستايل لاحقاً إذا رغبت

  // إنشاء اسم المحطة
  const span = document.createElement("span");
  span.textContent = name;

  // زر الحذف
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.classList.add("delete-station-btn");
  deleteBtn.title = "حذف هذه المحطة";
  deleteBtn.style.marginRight = "10px";

  // عند الضغط على زر الحذف
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // تجميع العنصر
  li.appendChild(span);
  li.appendChild(deleteBtn);
  stationList.appendChild(li);

  // إعادة تهيئة الحقل
  stationInput.value = "";
  stationInput.focus();
}


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

  // show bus managment :
  const busManagementCard = document.getElementById('busManagementCard');
  const goBackFromBusMgmt = document.getElementById('goBackFromBusMgmt');

  if (busManagementCard && goBackFromBusMgmt) {
    busManagementCard.addEventListener('click', () => {
      navigateToSection('busMgmtPage', ['cards']);
      // ننتظر حتى يتم عرض العناصر
      setTimeout(() => {
        const addDriverBtn = document.querySelector('.bus-mgmt-add-driver-btn');
        const addBusBtn = document.querySelector('.bus-mgmt-add-bus-btn');
        const driverModal = document.getElementById('driverFormModal');
        const busModal = document.getElementById('busFormModal');
        const submitDriverBtn = document.getElementById('submitDriverBtn');
        const submitBusBtn = document.getElementById('submitBusBtn');
        const driverTableBody = document.querySelector('.bus-mgmt-driver-table tbody');
        const busTableBody = document.querySelector('.bus-mgmt-bus-table tbody');

        if (addDriverBtn) {
          addDriverBtn.addEventListener('click', () => {
            driverModal.classList.remove('hidden');
          });
        }

        if (addBusBtn) {
          addBusBtn.addEventListener('click', () => {
            busModal.classList.remove('hidden');
          });
        }

        if (submitDriverBtn) {
          submitDriverBtn.addEventListener('click', () => {
            const driverId = document.getElementById('driverIdInput').value.trim();
            const firstName = document.getElementById('firstNameInput').value.trim();
            const lastName = document.getElementById('lastNameInput').value.trim();
            // ✅ تفريغ الحقول
            driverIdInput.value = '';
            firstNameInput.value = '';
            lastNameInput.value = '';

            if (driverId && firstName && lastName) {
              // تحقق مما إذا كان السائق موجودًا مسبقًا
              const isDuplicate = Array.from(driverTableBody.querySelectorAll('tr')).some(row =>
                row.children[0].textContent === driverId
              );

              if (isDuplicate) {
                alert("سائق بهذا المعرف موجود بالفعل!");
                return;
              }
              const tr = document.createElement('tr');
              tr.innerHTML = `<td>${driverId}</td><td>${firstName}</td><td>${lastName}</td>`;
              tr.addEventListener('dblclick', () => {
                const confirmDelete = confirm("Delet the row?");
                if (confirmDelete) {
                  tr.remove();
                }
              });
              driverTableBody.appendChild(tr);
              driverModal.classList.add('hidden');
            } else {
              alert("Enter all information");
            }
          });
        }

        if (submitBusBtn) {
          submitBusBtn.addEventListener('click', () => {
            const busId = document.getElementById('busIdInput').value.trim();
            const matricule = document.getElementById('matriculeInput').value.trim();
            const seats = document.getElementById('seatsInput').value.trim();
            const company = document.getElementById('companyInput').value.trim();
            
            // ✅ تفريغ الحقول
            busIdInput.value = '';
            matriculeInput.value = '';
            seatsInput.value = '';
            companyInput.value = '';


            if (busId && matricule && seats && company) {
              // تحقق مما إذا كانت الحافلة موجودة مسبقًا
              const isDuplicate = Array.from(busTableBody.querySelectorAll('tr')).some(row =>
                row.children[0].textContent === busId
              );

              if (isDuplicate) {
                alert("حافلة بهذا المعرف موجودة بالفعل!");
                return;
              }
              const tr = document.createElement('tr');
              tr.innerHTML = `<td>${busId}</td><td>${matricule}</td><td>${seats}</td><td>${company}</td>`;
              tr.addEventListener('dblclick', () => {
                const confirmDelete = confirm("هل تريد حذف هذا السطر؟");
                if (confirmDelete) {
                  tr.remove();
                }
              });

              busTableBody.appendChild(tr);
              busModal.classList.add('hidden');
            } else {
              alert("يرجى ملء كل الحقول.");
            }
          });
        }

      }, 0);
    });



    goBackFromBusMgmt.addEventListener('click', () => {
      navigateToSection('cards', ['busMgmtPage']);
    });
  }
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
// show div order 
orderHistoryCard.addEventListener("click", () => {
  cardsContainer.classList.add("hidden");
  orderHistoryContainer.classList.remove("hidden");
});
goBackOrderBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cardsContainer.classList.remove("hidden");
  orderHistoryContainer.classList.add("hidden");
});

document.querySelector('.buy-btn2').addEventListener('click', function () {
  window.location.href = 'ticket.html'; // ينقلك إلى ticket.html
});


// bus managemnt side:

document.addEventListener("DOMContentLoaded", () => {
  // أزرار الفتح
  // const addDriverBtn = document.querySelector('.bus-mgmt-add-driver-btn');
  // const addBusBtn = document.querySelector('.bus-mgmt-add-bus-btn');

  // النوافذ المنبثقة
  const driverModal = document.getElementById('driverFormModal');
  const busModal = document.getElementById('busFormModal');

  // أزرار التأكيد
  const submitDriverBtn = document.getElementById('submitDriverBtn');
  const submitBusBtn = document.getElementById('submitBusBtn');

  // الجداول
  const driverTableBody = document.querySelector('.bus-mgmt-driver-table tbody');
  const busTableBody = document.querySelector('.bus-mgmt-bus-table tbody');

  // فتح نافذة إضافة سائق
  // addDriverBtn.addEventListener('click', () => {
  //   driverModal.classList.remove('hidden');
  // });

  // إضافة سائق جديد
  submitDriverBtn.addEventListener('click', () => {
    const driverIdInput = document.getElementById('driverIdInput');
    const firstNameInput = document.getElementById('firstNameInput');
    const lastNameInput = document.getElementById('lastNameInput');

    const driverId = driverIdInput.value.trim();
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    if (driverId && firstName && lastName) {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${driverId}</td><td>${firstName}</td><td>${lastName}</td>`;
      driverTableBody.appendChild(tr);

      // ✅ تفريغ الحقول
      // driverIdInput.value = '';
      // firstNameInput.value = '';
      // lastNameInput.value = '';

      // ✅ إغلاق النافذة
      driverModal.classList.add('hidden');
    } else {
      alert("الرجاء ملء كل الحقول.");
    }
  });


  // فتح نافذة إضافة حافلة
  // addBusBtn.addEventListener('click', () => {
  //   busModal.classList.remove('hidden');
  // });

  // إضافة حافلة جديدة
  submitBusBtn.addEventListener('click', () => {
    const busIdInput = document.getElementById('busIdInput');
    const matriculeInput = document.getElementById('matriculeInput');
    const seatsInput = document.getElementById('seatsInput');
    const companyInput = document.getElementById('companyInput');

    const busId = busIdInput.value.trim();
    const matricule = matriculeInput.value.trim();
    const seats = seatsInput.value.trim();
    const company = companyInput.value.trim();

    if (busId && matricule && seats && company) {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${busId}</td><td>${matricule}</td><td>${seats}</td><td>${company}</td>`;
      busTableBody.appendChild(tr);

      // ✅ تفريغ الحقول
      // busIdInput.value = '';
      // matriculeInput.value = '';
      // seatsInput.value = '';
      // companyInput.value = '';

      // ✅ إغلاق النافذة
      busModal.classList.add('hidden');
    } else {
      alert("يرجى ملء كل الحقول.");
    }
  });

});
