function generateInvoice() {
  let hourRate = document.getElementById("hourRate").value;
  let noHours = document.getElementById("noHours").value;
  let cost = document.getElementById("cost").value;

  hourRate = Number(hourRate);
  noHours = Number(noHours);
  cost = Number(cost);

  const statusContainer = document.getElementById("statusTier");

  if (hourRate <= 0 || noHours <= 0) {
    document.getElementById("gEarn").textContent = "LKR. 0";
    document.getElementById("nInc").textContent = "LKR. 0";
    document.getElementById("tEst").textContent = "LKR. 0";
    document.getElementById("fTHP").textContent = "LKR. 0";

    statusContainer.style.color = "red";
    statusContainer.textContent =
      "Invalid inputs. Hours and rates must be greater than zero.";
    return;
  }

  let grossEarnings = hourRate * noHours;
  let netIncome = grossEarnings - cost;
  let taxEstimate = netIncome * 0.15;
  let finalPay = netIncome - taxEstimate;

  document.getElementById("gEarn").innerHTML = `LKR. ${grossEarnings}`;
  document.getElementById("nInc").innerHTML = `LKR. ${netIncome}`;
  document.getElementById("tEst").innerHTML = `LKR. ${taxEstimate}`;
  document.getElementById("fTHP").innerHTML = `LKR. ${finalPay}`;

  if (finalPay >= 5000 && noHours >= 40) {
    statusContainer.style.color = "green";
    statusContainer.textContent = "Status: Elite Freelancer Tier Unlocked! 🚀";
  } else if (noHours === 100) {
    statusContainer.style.color = "orange";
    statusContainer.textContent = "Status: Hard Worker Milestone Unlocked! 🏅";
  } else {
    statusContainer.style.color = "black";
    statusContainer.textContent = "Status: Standard Tier";
  }
}
