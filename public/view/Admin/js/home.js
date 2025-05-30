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