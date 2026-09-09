// =========================================
// KISANQ - STEP 1: FARMER REQUEST
// =========================================

// Get form elements
const form = document.getElementById("requestForm");
const successCard = document.getElementById("successCard");
const requestId = document.getElementById("requestId");


// =========================================
// PREVENT PAST DATES
// =========================================

const dateInput = document.getElementById("date");

const today = new Date();

const yyyy = today.getFullYear();

const mm = String(today.getMonth() + 1).padStart(2, "0");

const dd = String(today.getDate()).padStart(2, "0");

dateInput.min = `${yyyy}-${mm}-${dd}`;


// =========================================
// STEP 1 - SUBMIT FARMER REQUEST
// =========================================

form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Collect form data
    const data = new FormData(form);

    const farmerName = data.get("name");


    // =========================================
    // GENERATE PROTOTYPE REQUEST ID
    // =========================================

    const randomNumber =
        Math.floor(1000 + Math.random() * 9000);

    requestId.textContent =
        `REQUEST-${randomNumber}`;


    // =========================================
    // SHOW REQUEST SUCCESS
    // =========================================

    successCard.classList.remove("hidden");


    // =========================================
    // MOVE AUTOMATICALLY TO STEP 2
    // =========================================

    document
        .getElementById("verification")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });


    // =========================================
    // DISPLAY DATA IN CONSOLE
    // =========================================

    console.log(
        "Prototype procurement request:",
        {
            farmer: farmerName,

            mobile: data.get("mobile"),

            state: data.get("state"),

            district: data.get("district"),

            crop: data.get("crop"),

            quantity: data.get("quantity"),

            mandi: data.get("mandi"),

            preferredDate: data.get("date")
        }
    );

});


// =========================================
// STEP 2 - FARMER VERIFICATION
// =========================================

function verifyFarmer() {

    // Get Step 2 elements
    const verifyBtn =
        document.getElementById("verifyBtn");

    const identityStatus =
        document.getElementById("identityStatus");

    const landStatus =
        document.getElementById("landStatus");

    const success =
        document.getElementById("verificationSuccess");

    const continueBtn =
        document.getElementById("continueCropBtn");


    // =========================================
    // SHOW VERIFYING STATUS
    // =========================================

    verifyBtn.innerHTML =
        "⏳ Verifying...";

    verifyBtn.disabled = true;


    identityStatus.innerHTML =
        "Checking...";

    landStatus.innerHTML =
        "Checking...";


    // =========================================
    // SIMULATE GOVERNMENT VERIFICATION
    // =========================================

    setTimeout(function () {


        // -----------------------------------------
        // FARMER ID VERIFIED
        // -----------------------------------------

        identityStatus.innerHTML =
            "✓ Verified";

        identityStatus.classList.remove(
            "pending"
        );

        identityStatus.classList.add(
            "verified"
        );


        // -----------------------------------------
        // LAND RECORD VERIFIED
        // -----------------------------------------

        landStatus.innerHTML =
            "✓ Verified";

        landStatus.classList.remove(
            "pending"
        );

        landStatus.classList.add(
            "verified"
        );


        // =========================================
        // SHOW SUCCESS MESSAGE
        // =========================================

        success.classList.remove("hidden");


        // =========================================
        // SHOW CONTINUE BUTTON
        // =========================================

        continueBtn.classList.remove("hidden");


        // =========================================
        // HIDE VERIFY BUTTON
        // =========================================

        verifyBtn.style.display = "none";


    }, 2000);

}


// =========================================
// STEP 2 → STEP 3
// =========================================

function goToCropDetails() {

    const cropSection =
        document.getElementById("cropDetails");

    cropSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}
// =========================================
// STEP 3 - CROP DETAILS
// =========================================

const cropForm = document.getElementById("cropForm");

const cropType = document.getElementById("cropType");

const cropQuantity =
    document.getElementById("cropQuantity");

const preferredMandi =
    document.getElementById("preferredMandi");

const cropDate =
    document.getElementById("cropDate");


// Prevent past dates

if (cropDate) {

    cropDate.min = `${yyyy}-${mm}-${dd}`;

}


// =========================================
// LIVE SUMMARY
// =========================================

cropType.addEventListener("change", function () {

    document.getElementById("summaryCrop")
        .textContent = this.value || "—";

});


cropQuantity.addEventListener("input", function () {

    document.getElementById("summaryQuantity")
        .textContent =
        this.value ? `${this.value} Q` : "—";

});


preferredMandi.addEventListener("change", function () {

    document.getElementById("summaryMandi")
        .textContent = this.value || "—";

});


// =========================================
// SUBMIT CROP DETAILS
// =========================================

cropForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const cropSuccess =
        document.getElementById("cropSuccess");

    const smartCheckBtn =
        document.getElementById("smartCheckBtn");


    cropSuccess.classList.remove("hidden");

    smartCheckBtn.classList.remove("hidden");


    console.log("Crop details:", {

        crop: cropType.value,

        quantity: cropQuantity.value,

        mandi: preferredMandi.value,

        date: cropDate.value

    });


    smartCheckBtn.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

});


// =========================================
// STEP 3 → STEP 4
// =========================================

function goToSmartCheck() {

    const smartSection =
        document.getElementById("smartCheck");


    smartSection.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });


    // Start smart analysis

    startSmartCheck();

}
// =========================================
// STEP 4 - SMART CHECK
// =========================================

function startSmartCheck() {

    const checkingArea =
        document.getElementById("checkingArea");

    const smartResults =
        document.getElementById("smartResults");


    if (!checkingArea || !smartResults) {
        return;
    }


    // Show checking animation

    checkingArea.classList.remove("hidden");

    smartResults.classList.add("hidden");


    // Simulate smart analysis

    setTimeout(function () {

        checkingArea.classList.add("hidden");

        smartResults.classList.remove("hidden");

    }, 2500);

}


// =========================================
// ACCEPT SLOT
// =========================================


// =========================================
// STEP 5 - TOKEN GENERATION
// =========================================

function acceptSlot() {

  alert(
    "🎉 Slot accepted successfully!\n\n" +
    "Date: 12 September 2026\n" +
    "Time: 10:00 AM – 12:00 PM\n\n" +
    "Procurement token will now be generated."
  );

  const tokenSection = document.getElementById("tokenSection");

  tokenSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  generateToken();
}


// =========================================
// GENERATE PROCUREMENT TOKEN
// =========================================

function generateToken() {

    // Generate token number
    const randomToken =
        Math.floor(1000 + Math.random() * 9000);

    document.getElementById("tokenNumber").textContent =
        `KQ-2026-${randomToken}`;


    // Get values from Step 3
    const selectedCrop =
        document.getElementById("cropType").value;

    const selectedQuantity =
        document.getElementById("cropQuantity").value;

    const selectedMandi =
        document.getElementById("preferredMandi").value;

    const selectedDate =
        document.getElementById("cropDate").value;


    // Show crop
    document.getElementById("tokenCrop").textContent =
        selectedCrop || "—";


    // Show quantity
    document.getElementById("tokenQuantity").textContent =
        selectedQuantity
            ? `${selectedQuantity} Q`
            : "—";

    // Show booked quantity in Step 6
    document.getElementById("bookedWeight").textContent =
        selectedQuantity
            ? `${selectedQuantity} Q`
            : "—";


    // Show mandi
    document.getElementById("tokenMandi").textContent =
        selectedMandi || "—";


    // Show date
    if (selectedDate) {

        const dateObject = new Date(selectedDate);

        const formattedDate =
            dateObject.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric"
            });

        document.getElementById("tokenDate").textContent =
            formattedDate;

    } else {

        document.getElementById("tokenDate").textContent =
            "—";

    }


    console.log("Procurement token generated:", {
        token: `KQ-2026-${randomToken}`,
        crop: selectedCrop,
        quantity: selectedQuantity,
        mandi: selectedMandi,
        date: selectedDate
    });
}


// =========================================
// PRINT TOKEN
// =========================================

function printToken() {

  window.print();

}


// =========================================
// STEP 5 → STEP 6
// =========================================

function continueToWeighment() {

  alert(
    "✅ Procurement token confirmed!\n\n" +
    "Next step: Mandi Arrival & Weighment."
  );

}
// =========================================
// STEP 6 - MANDI ARRIVAL
// =========================================

function checkInFarmer() {

    const checkInBtn =
        document.getElementById("checkInBtn");

    const weighmentForm =
        document.getElementById("weighmentForm");


    // Change button

    checkInBtn.innerHTML =
        "✓ Arrival Confirmed";

    checkInBtn.disabled = true;


    // Show weighment section

    weighmentForm.classList.remove("hidden");

}


// =========================================
// STEP 6 - WEIGHMENT
// =========================================

function submitWeighment() {

    const actualWeight =
        document.getElementById("actualWeight");

    const actualWeightDisplay =
        document.getElementById("actualWeightDisplay");

    const weighmentSuccess =
        document.getElementById("weighmentSuccess");

    const continuePaymentBtn =
        document.getElementById("continuePaymentBtn");


    // Validate weight

    if (
        !actualWeight.value ||
        Number(actualWeight.value) <= 0
    ) {

        alert("Please enter a valid crop weight.");

        return;

    }


    // Display actual weight

    actualWeightDisplay.textContent =
        `${actualWeight.value} Q`;


    // Show success

    weighmentSuccess.classList.remove("hidden");


    // Show next button

    continuePaymentBtn.classList.remove("hidden");


    console.log(
        "Actual crop weight:",
        actualWeight.value,
        "Quintals"
    );

}


// =========================================
// STEP 6 → STEP 7
// =========================================

// =========================================
// STEP 6 → STEP 7
// =========================================

function continueToPayment() {

    // -----------------------------------------
    // GET DATA FROM STEP 3
    // -----------------------------------------

    const selectedCrop =
        document.getElementById("cropType").value;

    const selectedQuantity =
        document.getElementById("cropQuantity").value;

    const selectedMandi =
        document.getElementById("preferredMandi").value;


    // -----------------------------------------
    // GET ACTUAL WEIGHT FROM STEP 6
    // -----------------------------------------

    const actualWeight =
        document.getElementById("actualWeight").value;


    // -----------------------------------------
    // DISPLAY FARMER DETAILS
    // -----------------------------------------

    document.getElementById("paymentCrop").textContent =
        selectedCrop || "—";


    document.getElementById("paymentQuantity").textContent =
        selectedQuantity
            ? `${selectedQuantity} Q`
            : "—";


    document.getElementById("paymentMandi").textContent =
        selectedMandi || "—";


    document.getElementById("paymentWeight").textContent =
        actualWeight
            ? `${actualWeight} Q`
            : "—";


    // -----------------------------------------
    // GET MSP FOR SELECTED CROP
    // -----------------------------------------

    const mspRate =
        mspRates[selectedCrop];


    if (mspRate) {

        // Show MSP
        document.getElementById("paymentMSP").textContent =
            `₹${mspRate.toLocaleString("en-IN")} / Quintal`;


        // Calculate procurement amount
        if (actualWeight) {

            const amount =
                Number(actualWeight) * mspRate;


            document.getElementById("paymentAmount").textContent =
                `₹${amount.toLocaleString("en-IN")}`;

        }

    } else {

        document.getElementById("paymentMSP").textContent =
            "Not available";

        document.getElementById("paymentAmount").textContent =
            "—";

    }


    // -----------------------------------------
    // MOVE TO STEP 7
    // -----------------------------------------

    const paymentSection =
        document.getElementById("payment");


    paymentSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}
// =========================================
// STEP 7 - PAYMENT
// =========================================

function finishProcurement() {

    alert(
        "🎉 Procurement process completed!\n\n" +
        "Your crop has been successfully processed.\n" +
        "Payment status: Processing.\n\n" +
        "Thank you for using KisanQ 🌾"
    );

    console.log(
        "KisanQ procurement workflow completed."
    );

}
// =========================================
// MSP RATES BY CROP
// =========================================

const mspRates = {

    Rice: 2300,

    Wheat: 2425,

    Maize: 2400,

    Cotton: 7710,

    Groundnut: 7263,

    Paddy: 2300

};