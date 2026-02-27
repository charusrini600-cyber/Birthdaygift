const birthdayDate = new Date(2026, 2, 9);

const now = new Date();

if (now.getDate() !== birthdayDate.getDate() ||
    now.getMonth() !== birthdayDate.getMonth() ||
    now.getFullYear() !== birthdayDate.getFullYear()) {
  alert("🎁 Surprises will unlock on March 9!");
}
function openGift(page) {
  alert("⏳ This gift is still locked. Come back at the unlock time!");
}
function checkUnlocks() {
  const now = new Date();

  // Birthday date: March 9
  const year = now.getFullYear();
  const birthday = new Date(year, 1, 9); // month is 2 = March

  // Times on birthday
  const spellTime = new Date(year, 2, 9, 8, 0);   // 8:00 AM
  const promiseTime = new Date(year, 2, 9, 12, 0); // 12:00 PM
  const cakeTime = new Date(year, 2, 9, 16, 0);  // 4:00 PM
  const letterTime = new Date(year, 2, 9, 20, 0); // 8:00 PM
  const evilTime = new Date(year, 2, 9, 23, 0);  // 11:00 PM

  unlockIfReady("spell", spellTime);
  unlockIfReady("promise", promiseTime);
  unlockIfReady("cake", cakeTime);
  unlockIfReady("letter", letterTime);
  unlockIfReady("evil", evilTime);
}

function unlockIfReady(id, time) {
  const box = document.getElementById(id);

  if (new Date() >= time) {
    box.classList.remove("locked");
    box.classList.add("unlocked");
    box.dataset.unlocked = "true";
  }
}

function openGift(page) {
  event.preventDefault();

  if (event.currentTarget.dataset.unlocked === "true") {
    window.location.href = page;
  } else {
    alert("⏳ This gift is still locked. Come back at the right time!");
  }
}

// Run every second
setInterval(checkUnlocks, 1000);
