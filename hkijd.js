function mainSection() {
    document
      .getElementById("main-section")
      .scrollIntoView({ behavior: "smooth" });
  }
  
  let totalPrice = 0;
  let gradTotal = 0;
  let seatBooked = false;
  let totalBookedSeat;
  
  const seatNumber = document.getElementById("seat-number");
  
  seatNumber.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const seatBtn = event.target;
  
      seatBooked = true;
  
      // showing booked seat details
      const addSeatEl = document.getElementById("add-seat");
      totalBookedSeat = parseInt(addSeatEl.innerText);
      totalBookedSeat++;
      if (totalBookedSeat == 4) {
        document.getElementById("btn-apply").disabled = false;
      }
      if (totalBookedSeat > 4) {
        alert("You can not book more than 4 seats");
        return;
      }
      addSeatEl.innerText = totalBookedSeat;
  
      // disable and change the button color
      seatBtn.classList.add("disabled:bg-lime-300");
      seatBtn.disabled = true;
  
      // Show remaiing seats
      const availableSeatEl = document.getElementById("seat-available");
      const remainingSeat = availableSeatEl.innerText - 1;
      availableSeatEl.innerText = remainingSeat;
  
      const classSeat = "Economic class";
      const price = parseInt(550);
      // td related info
      const seatDetails = document.querySelector("#table tbody");
      const tr = document.createElement("tr");
      const td0 = document.createElement("td");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
  
      td1.innerText = seatBtn.innerText;
      td2.innerText = classSeat;
      td3.innerText = price;
      tr.appendChild(td0);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      seatDetails.prepend(tr);
  
      // calculate price
      totalPrice += price;
      gradTotal += price;
  
      document.getElementById("total-price").innerText = totalPrice;
      document.getElementById("grand-price").innerText = gradTotal;
    }
  });
  
  document.getElementById("phone-number").addEventListener("keyup", (event) => {
    if (seatBooked && event.target.value.length > 4) {
      document.getElementById("nextBtn").disabled = false;
    } else {
      document.getElementById("nextBtn").disabled = true;
    }
  });
  
  const applyBtn = document.getElementById("btn-apply");
  applyBtn.addEventListener("click", function () {
    const cuponElement = document.getElementById("cupon-field").value;
  
    if (cuponElement === "NEW15") {
      const discountAmount = totalPrice * 0.15;
      const grandPrice = document.getElementById("grand-price");
      const discountPrice = document.getElementById("discount-price");
      const totalAmount = totalPrice - discountAmount;
      grandPrice.innerText = totalAmount;
      discountPrice.innerText = discountAmount;
      document.getElementById("cupon-field").value = "";
  
      const cuponSection = document.getElementById("cupon-section");
      cuponSection.classList.add("hidden");
    } else if (cuponElement === "Couple 20") {
      const discountAmount = totalPrice * 0.2;
      const grandPrice = document.getElementById("grand-price");
      const discountPrice = document.getElementById("discount-price");
      const totalAmount = totalPrice - discountAmount;
      grandPrice.innerText = totalAmount;
      discountPrice.innerText = discountAmount;
      document.getElementById("cupon-field").value = "";
  
      const cuponSection = document.getElementById("cupon-section");
      cuponSection.classList.add("hidden");
    } else {
      alert("Invaild cupon");
      document.getElementById("cupon-field").value = "";
      const cuponSection = document.getElementById("cupon-section");
      cuponSection.classList.add("hidden");
    }
  });
  
  const nextBtn = document.getElementById("nextBtn");
  nextBtn.addEventListener("click", () => {
    document.getElementById("my_modal_1").showModal();
  });
