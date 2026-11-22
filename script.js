// ============================================================
//  YO'L HARAKATI QOIDALARI – TEST SAYTI  |  script.js
// ============================================================

// ── SAVOLLAR MA'LUMOTLARI ────────────────────────────────────
let allQuestions = [
  // ── BOSQICH 1 (1–10) ──────────────────────────────────────
  {
    q: "1. Svetoforning qizil signali nimani bildiradi?",
    opts: [
      "Ehtiyotkorlik bilan o'tish mumkin",
      "Harakatlanish taqiqlanadi",
      "Faqat chapga burilish mumkin"
    ],
    ans: 1   // 0=a, 1=b, 2=c  (indeks asosida)
  },
  {
    q: "2. Svetoforning yashil signali nimani bildiradi?",
    opts: ["Harakatlanish mumkin", "Harakatlanish taqiqlanadi", "Faqat to'xtash mumkin"],
    ans: 0
  },
  {
    q: "3. Yashil signal miltillasa, bu nimani bildiradi?",
    opts: [
      "Tezlikni oshirish kerak",
      "Yo'lni to'xtamasdan kesib o'tish shart",
      "Tez orada signal almashishidan ogohlantiradi"
    ],
    ans: 2
  },
  {
    q: "4. Sariq signal yonganda haydovchi nima qilishi kerak?",
    opts: [
      "Tezlikni oshirib o'tib ketishi",
      "To'xtash chizig'i oldida to'xtashi (signal almashishidan ogohlantiradi)",
      "Faqat piyodalar o'tishini kutishi"
    ],
    ans: 1
  },
  {
    q: "5. Tartibga soluvchining ishorasi svetofor signaliga zid bo'lsa, qaysi biriga amal qilinadi?",
    opts: ["Tartibga soluvchining ishorasiga", "Svetofor signaliga", "Yo'l belgisiga"],
    ans: 0
  },
  {
    q: "6. Xavfsizlik kamarini taqish kimlar uchun majburiy?",
    opts: [
      "Faqat shahar tashqarisida harakatlanganda",
      "Faqat haydovchi uchun",
      "Haydovchi va yo'lovchilar uchun"
    ],
    ans: 2
  },
  {
    q: "7. Mototsikl haydovchisi uchun dubulg'a:",
    opts: ["Faqat shahar tashqarisida kiyiladi", "Majburiy", "Ixtiyoriy"],
    ans: 1
  },
  {
    q: "8. Piyoda yo'lni piyodalar o'tish joyida kesib o'tayotgan bo'lsa, haydovchi nima qilishi kerak?",
    opts: ["Signal berib o'tib ketishi", "Tezlikni oshirishi", "To'xtab, piyodaga yo'l berishi"],
    ans: 2
  },
  {
    q: "9. Quvib o'tish qayerda taqiqlanadi?",
    opts: ["Keng, ko'rinishi yaxshi yo'lda", "Piyodalar o'tish joyida", "Kunduzi"],
    ans: 1
  },
  {
    q: "10. Ko'k mayoqcha va sirena yoqilgan maxsus transport yaqinlashsa, nima qilish kerak?",
    opts: ["Tezlikni oshirish", "Uni quvib o'tish", "Unga yo'l berish"],
    ans: 2
  },

  // ── BOSQICH 2 (11–20) ─────────────────────────────────────
  {
    q: "11. Pastga qaragan uchburchak shaklidagi \"Yo'l bering\" belgisi nimani bildiradi?",
    opts: [
      "Asosiy yo'ldagi transportga yo'l berish kerak",
      "Majburiy to'xtash kerak",
      "Harakatlanish taqiqlangan"
    ],
    ans: 0
  },
  {
    q: "12. \"STOP\" belgisi nimani bildiradi?",
    opts: [
      "Sekinlashtirib o'tib ketish mumkin",
      "To'xtash chizig'i oldida majburiy to'xtash kerak",
      "Faqat kechasi to'xtash kerak"
    ],
    ans: 1
  },
  {
    q: "13. Qizil hoshiyali doira shaklidagi belgilar qaysi guruhga kiradi?",
    opts: ["Ogohlantiruvchi", "Axborot-ko'rsatkich", "Taqiqlovchi"],
    ans: 2
  },
  {
    q: "14. Qizil hoshiyali uchburchak shaklidagi belgilar qaysi guruhga kiradi?",
    opts: ["Ogohlantiruvchi", "Majburiy", "Servis belgilari"],
    ans: 0
  },
  {
    q: "15. Ko'k rangli doira shaklidagi belgilar qaysi guruhga kiradi?",
    opts: ["Taqiqlovchi", "Buyuruvchi (majburiy)", "Servis belgilari"],
    ans: 1
  },
  {
    q: "16. Qarama-qarshi oqimlarni ajratuvchi uzluksiz chiziqni kesib o'tish:",
    opts: ["Ruxsat etiladi", "Faqat kechasi mumkin", "Taqiqlanadi"],
    ans: 2
  },
  {
    q: "17. Teng ahamiyatli yo'llar kesishmasida kimga yo'l beriladi?",
    opts: ["Chapdan kelayotgan transportga", "O'ngdan kelayotgan transportga", "Kattaroq transportga"],
    ans: 1
  },
  {
    q: "18. Burilishdan oldin burilish ko'rsatkichi qachon yoqiladi?",
    opts: ["Faqat burilish paytida", "Oldindan, manevr boshlanishidan avval", "Yoqish shart emas"],
    ans: 1
  },
  {
    q: "19. Avariya to'xtash belgisi (uchburchak) qachon o'rnatiladi?",
    opts: [
      "Har qanday to'xtashda",
      "Faqat tunda",
      "Yo'l-transport hodisasida yoki majburiy to'xtashda"
    ],
    ans: 2
  },
  {
    q: "20. Tuman yoki yomg'ir paytida qaysi chiroqlar yoqiladi?",
    opts: [
      "Faqat gabarit chiroqlari",
      "Hech qanday chiroq yoqilmaydi",
      "Yaqin yorug'lik yoki tumanga qarshi faralar"
    ],
    ans: 2
  },

  // ── BOSQICH 3 (21–30) ─────────────────────────────────────
  {
    q: "21. Kechasi qarshidan transport kelganda uzoq yorug'lik bilan nima qilish kerak?",
    opts: ["O'chirib, yaqin yorug'likka o'tish", "Yoqilgan holda qoldirish", "Avariya signalini yoqish"],
    ans: 0
  },
  {
    q: "22. Haydovchi charchoq yoki uyquchanlik sezsa, nima qilishi kerak?",
    opts: ["Radio ovozini balandlatishi", "Tezlikni oshirishi", "To'xtab, dam olishi"],
    ans: 2
  },
  {
    q: "23. Spirtli ichimlik ichgan holda transport boshqarish:",
    opts: ["Ozgina bo'lsa, mumkin", "Taqiqlanadi", "Faqat shahar tashqarisida mumkin"],
    ans: 1
  },
  {
    q: "24. Haydovchining harakatlanish paytida telefon ishlatishi haqida qaysi javob to'g'ri?",
    opts: ["Telefonni qo'lda ushlab gaplashish taqiqlanadi", "Ruxsat etiladi", "Faqat kunduzi mumkin"],
    ans: 0
  },
  {
    q: "25. Transport vositasini boshqarish huquqini tasdiqlovchi asosiy hujjat qaysi?",
    opts: ["Haydovchilik guvohnomasi", "Pasport", "Mehnat daftarchasi"],
    ans: 0
  },
  {
    q: "26. Haydovchi o'zi bilan qaysi hujjatlarni olib yurishi shart?",
    opts: [
      "Faqat haydovchilik guvohnomasini",
      "Haydovchilik guvohnomasi, transport vositasi hujjati va sug'urta polisini",
      "Faqat sug'urta polisini"
    ],
    ans: 1
  },
  {
    q: "27. Yo'l-transport hodisasi sodir bo'lganda birinchi navbatda nima qilinadi?",
    opts: ["Joyni tark etiladi", "Darhol to'xtab, avariya signali yoqiladi", "Tezlik oshiriladi"],
    ans: 1
  },
  {
    q: "28. Hodisada jabrlanganlarga nisbatan haydovchining burchi nima?",
    opts: [
      "Faqat politsiyaga xabar berish",
      "Hech narsa qilmaslik",
      "Birinchi yordam ko'rsatish va tez yordam chaqirish"
    ],
    ans: 2
  },
  {
    q: "29. Tezlikni tanlashda haydovchi nimalarni hisobga olishi kerak?",
    opts: [
      "Faqat yo'l belgisini",
      "Yo'l, transport, ob-havo sharoiti va ko'rinishni",
      "Faqat o'z xohishini"
    ],
    ans: 1
  },
  {
    q: "30. Oldinda ketayotgan transport bilan masofa qanday bo'lishi kerak?",
    opts: ["Xavfsiz, to'xtashga yetarli masofa", "Iloji boricha yaqin", "Masofa ahamiyatga ega emas"],
    ans: 0
  },

  // ── BOSQICH 4 (31–40) ─────────────────────────────────────
  {
    q: "31. Burilayotgan haydovchi o'tayotgan piyodalarga nisbatan nima qiladi?",
    opts: ["Tezroq o'tib ketadi", "Hech kimga yo'l bermaydi", "Piyodalarga yo'l beradi"],
    ans: 2
  },
  {
    q: "32. Ko'prik va tunnellarda transportni to'xtatish va to'xtab turish:",
    opts: ["Ruxsat etiladi", "Taqiqlanadi", "Faqat tunda mumkin"],
    ans: 1
  },
  {
    q: "33. Temir yo'l o'tish joyida shlagbaum tushirilgan bo'lsa, haydovchi nima qiladi?",
    opts: ["Shoshilmay o'tib ketadi", "Shlagbaumni aylanib o'tadi", "Shlagbaum oldida to'xtab kutadi"],
    ans: 2
  },
  {
    q: "34. \"Maksimal tezlik chegaralangan\" belgisi nimani bildiradi?",
    opts: [
      "Ko'rsatilgan tezlikdan oshmaslik kerak",
      "Bu faqat tavsiya",
      "Faqat yuk mashinalariga tegishli"
    ],
    ans: 0
  },
  {
    q: "35. Chapga burilayotgan haydovchi qarshidan to'g'ri ketayotgan transportga nisbatan nima qiladi?",
    opts: ["Yo'l bermaydi", "Yo'l beradi", "Signal bersa, yetarli"],
    ans: 1
  },
  {
    q: "36. Kichik yoshdagi bolalarni avtomobilda xavfsiz tashish uchun nima ishlatiladi?",
    opts: [
      "Old o'rindiqda quchoqda ushlab o'tiriladi",
      "Bagajga joylashtiriladi",
      "Maxsus bolalar o'rindig'i"
    ],
    ans: 2
  },
  {
    q: "37. Tormoz tizimi nosoz bo'lsa, nima qilish kerak?",
    opts: ["Ehtiyotkorlik bilan davom ettirish", "Harakatlanish taqiqlanadi", "Faqat kunduzi harakatlanish"],
    ans: 1
  },
  {
    q: "38. Muz va qor bosgan yo'lda haydovchi qanday harakatlanadi?",
    opts: ["Keskin tormoz beradi", "Tezlikni oshiradi", "Tezlikni pasaytirib, silliq harakatlanadi"],
    ans: 2
  },
  {
    q: "39. Yomg'irli yo'lda tormoz yo'li qanday o'zgaradi?",
    opts: ["Uzayadi", "Qisqaradi", "O'zgarmaydi"],
    ans: 0
  },
  {
    q: "40. Piyodalar yo'lning qatnov qismini qayerdan kesib o'tishi kerak?",
    opts: ["Istalgan joydan", "Piyodalar o'tish joylaridan", "Faqat tunda"],
    ans: 1
  },

  // ── BOSQICH 5 (41–50) ─────────────────────────────────────
  {
    q: "41. Kechasi piyodalarning ko'rinishini yaxshilash uchun nima tavsiya etiladi?",
    opts: ["Qora kiyim kiyish", "Hech narsa kerak emas", "Yorug'lik qaytaruvchi elementlar taqish"],
    ans: 2
  },
  {
    q: "42. Transportni orqaga yurgizishdan oldin nima qilish kerak?",
    opts: [
      "Orqada to'siq va odam yo'qligiga ishonch hosil qilish",
      "Ko'zgularga qaramaslik",
      "Faqat signal berish"
    ],
    ans: 0
  },
  {
    q: "43. Harakatni boshlashdan oldin nima sozlanishi kerak?",
    opts: ["O'rindiq, ko'zgular va kamar", "Faqat radio", "Faqat o'rindiq"],
    ans: 0
  },
  {
    q: "44. Quvib o'tishdan oldin nimaga ishonch hosil qilish kerak?",
    opts: [
      "Faqat signal berilganiga",
      "Qarshi tomon bo'sh va manevr xavfsizligiga",
      "Tezlik pasayganiga"
    ],
    ans: 1
  },
  {
    q: "45. ABS tizimi nima vazifani bajaradi?",
    opts: [
      "Tormozlashda g'ildiraklar qulflanishini oldini oladi",
      "Yonilg'ini tejaydi",
      "Salonni isitadi"
    ],
    ans: 0
  },
  {
    q: "46. Texnik ko'rikdan o'tish haqida qaysi javob to'g'ri?",
    opts: ["Ixtiyoriy", "Belgilangan hollarda va muddatlarda majburiy", "Faqat yuk mashinalari uchun"],
    ans: 1
  },
  {
    q: "47. Shinalardagi havo bosimi qanday bo'lishi kerak?",
    opts: ["Ishlab chiqaruvchi tavsiyasiga mos", "Iloji boricha maksimal", "Ahamiyatga ega emas"],
    ans: 0
  },
  {
    q: "48. Sariq miltillovchi svetofor signali nimani bildiradi?",
    opts: [
      "Faqat avtobuslar uchun mo'ljallangan",
      "Harakatlanish taqiqlangan",
      "Tartibga solinmaydigan joy, ehtiyotkorlik bilan harakatlanish kerak"
    ],
    ans: 2
  },
  {
    q: "49. Boshqa haydovchi xato qilsa, sen nima qilishing kerak?",
    opts: [
      "Tinch qolib, xavfsiz masofa saqlashing",
      "Signal berib, quvib ketishing",
      "Jazolash uchun yo'lni to'sishing"
    ],
    ans: 0
  },
  {
    q: "50. Haydovchi qayerda ayniqsa hushyor bo'lishi kerak?",
    opts: ["Bo'sh avtomagistralda", "Maktab va bog'cha yaqinida", "Hech qayerda alohida talab yo'q"],
    ans: 1
  }
];

// ── BOSQICH MA'LUMOTLARI ─────────────────────────────────────
let stageTitles = [
  "Bosqich 1 – Svetofor va Asosiy Qoidalar",
  "Bosqich 2 – Yo'l Belgilari va Chiziqlar",
  "Bosqich 3 – Haydovchi Mas'uliyati",
  "Bosqich 4 – Yo'l Sharoiti va Maxsus Hollar",
  "Bosqich 5 – Piyoda va Texnik Xavfsizlik"
];

let stageIcons = ["🚦", "🚧", "🚗", "⚠️", "🏁"];

// ── HOLAT O'ZGARUVCHILARI ────────────────────────────────────
let currentStage = 1;
let stageScores  = [null, null, null, null, null];
let stageChecked = [false, false, false, false, false];
// userAnswers[globalIdx] = tanlangan indeks (0/1/2) yoki null
let userAnswers  = new Array(50).fill(null);
let totalCorrect = 0;
let totalWrong   = 0;

// ── BOSQICHNI RENDER QILISH ──────────────────────────────────
function renderStage(stage) {
  let container = document.getElementById("questions-container");
  container.innerHTML = "";

  let startIdx  = (stage - 1) * 10;
  let questions = allQuestions.slice(startIdx, startIdx + 10);

  questions.forEach(function(qObj, i) {
    let globalIdx  = startIdx + i;
    let letters    = ["A", "B", "C"];
    let optionsHtml = "";

    qObj.opts.forEach(function(optText, j) {
      optionsHtml +=
        '<label class="option-label" id="lbl-' + globalIdx + '-' + j + '">' +
          '<input type="radio" name="q' + globalIdx + '" value="' + j + '" ' +
                 'onchange="onSelect(' + globalIdx + ',' + j + ')"' +
                 (userAnswers[globalIdx] === j ? ' checked' : '') + '/>' +
          '<span><strong>' + letters[j] + ')</strong> ' + optText + '</span>' +
        '</label>';
    });

    let card = document.createElement("div");
    card.className = "question-card";
    card.id = "card-" + globalIdx;
    card.innerHTML =
      '<div class="q-number">' + (globalIdx + 1) + '</div>' +
      '<div class="q-text">'   + qObj.q           + '</div>' +
      '<div class="options">'  + optionsHtml       + '</div>' +
      '<div class="feedback-msg" id="fb-' + globalIdx + '"></div>';

    container.appendChild(card);
  });

  // Bosqich sarlavhasi
  document.getElementById("stage-title").textContent = stageTitles[stage - 1];
  document.getElementById("stage-sub").textContent   =
    (startIdx + 1) + "–" + (startIdx + 10) + "-savollar · Har bir to'g'ri javob 1 ball";
  document.getElementById("stage-num-badge").textContent = stageIcons[stage - 1];

  // Tablarni yangilash
  updateTabs(stage);

  // Progress yangilash
  updateProgress();

  // Score card va final natijani yashirish
  document.getElementById("score-card").classList.remove("visible");
  document.getElementById("final-result").classList.remove("visible");

  // Agar bu bosqich avval tekshirilgan bo'lsa — natijalarni ko'rsat
  if (stageChecked[stage - 1]) {
    applyCheckedStyles(stage);
    showScoreCard(stage);
  }

  // Oldin tanlangan variantlarni belgilab qo'yish (selected class)
  for (let i = startIdx; i < startIdx + 10; i++) {
    let ans = userAnswers[i];
    if (ans !== null) {
      let lbl = document.getElementById("lbl-" + i + "-" + ans);
      if (lbl) lbl.classList.add("selected");
    }
  }
}

// ── VARIANT TANLANGANDA ──────────────────────────────────────
function onSelect(globalIdx, chosenIdx) {
  // Avvalgi "selected" classini olib tashlash
  for (let j = 0; j < 3; j++) {
    let lbl = document.getElementById("lbl-" + globalIdx + "-" + j);
    if (lbl) lbl.classList.remove("selected");
  }
  // Yangi tanlangan label ga "selected" qo'shish
  let selectedLbl = document.getElementById("lbl-" + globalIdx + "-" + chosenIdx);
  if (selectedLbl) selectedLbl.classList.add("selected");

  // Javobni saqlash
  userAnswers[globalIdx] = chosenIdx;
}

// ── JAVOBLARNI TEKSHIRISH ────────────────────────────────────
function checkStage() {
  // 1) Agar bu bosqich allaqachon tekshirilgan bo'lsa
  if (stageChecked[currentStage - 1]) {
    alert("⚠️ Bu bosqich allaqachon tekshirilgan!\n\"Qayta urinish\" tugmasini bosing.");
    return;
  }

  let startIdx  = (currentStage - 1) * 10;
  let questions = allQuestions.slice(startIdx, startIdx + 10);

  // 2) Barcha savollarga javob berilganini tekshirish
  let unanswered = [];
  questions.forEach(function(qObj, i) {
    let globalIdx = startIdx + i;
    if (userAnswers[globalIdx] === null) {
      unanswered.push(globalIdx + 1);
    }
  });

  if (unanswered.length > 0) {
    alert(
      "⚠️ Diqqat!\n\n" +
      unanswered.length + " ta savol javobsiz qoldi:\n" +
      "Savol raqamlari: " + unanswered.join(", ") + "\n\n" +
      "Iltimos, barcha savollarga javob bering!"
    );
    return;
  }

  // 3) Har bir savolni tekshirish
  let correct = 0;
  let wrong   = 0;

  questions.forEach(function(qObj, i) {
    let globalIdx  = startIdx + i;
    let chosen     = userAnswers[globalIdx];   // foydalanuvchi tanlagan indeks
    let rightIdx   = qObj.ans;                 // to'g'ri indeks
    let letters    = ["A", "B", "C"];

    let card = document.getElementById("card-" + globalIdx);
    let fb   = document.getElementById("fb-" + globalIdx);

    // Radio inputlarni o'chirib qo'yish
    let radios = document.querySelectorAll('input[name="q' + globalIdx + '"]');
    radios.forEach(function(r) { r.disabled = true; });

    // Barcha label class larini tozalash
    for (let j = 0; j < 3; j++) {
      let lbl = document.getElementById("lbl-" + globalIdx + "-" + j);
      if (lbl) lbl.classList.remove("selected", "correct-ans", "wrong-ans", "show-ans");
    }

    if (chosen === rightIdx) {
      // ✅ To'g'ri javob
      correct++;
      card.classList.add("correct-card");
      card.classList.remove("wrong-card");

      let correctLbl = document.getElementById("lbl-" + globalIdx + "-" + rightIdx);
      if (correctLbl) {
        correctLbl.classList.add("correct-ans");
        // ✅ belgisi qo'shish
        let badge = document.createElement("span");
        badge.textContent = " ✅";
        badge.style.marginLeft = "auto";
        badge.style.flexShrink = "0";
        correctLbl.appendChild(badge);
      }

      fb.textContent = "✅ To'g'ri javob!";
      fb.className   = "feedback-msg show-correct";

    } else {
      // ❌ Noto'g'ri javob
      wrong++;
      card.classList.add("wrong-card");
      card.classList.remove("correct-card");

      // Foydalanuvchi tanlagan — qizil
      let chosenLbl = document.getElementById("lbl-" + globalIdx + "-" + chosen);
      if (chosenLbl) {
        chosenLbl.classList.add("wrong-ans");
        let badge = document.createElement("span");
        badge.textContent = " ❌";
        badge.style.marginLeft = "auto";
        badge.style.flexShrink = "0";
        chosenLbl.appendChild(badge);
      }

      // To'g'ri javob — yashil
      let rightLbl = document.getElementById("lbl-" + globalIdx + "-" + rightIdx);
      if (rightLbl) {
        rightLbl.classList.add("show-ans");
        let badge = document.createElement("span");
        badge.textContent = " ✅";
        badge.style.marginLeft = "auto";
        badge.style.flexShrink = "0";
        rightLbl.appendChild(badge);
      }

      fb.textContent = "❌ Noto'g'ri! To'g'ri javob: " + letters[rightIdx] + ") " + qObj.opts[rightIdx];
      fb.className   = "feedback-msg show-wrong";
    }
  });

  // 4) Holatni yangilash
  stageScores[currentStage - 1]  = correct;
  stageChecked[currentStage - 1] = true;

  recalcTotals();
  updateProgress();
  updateTabs(currentStage);
  updateHeaderScore();

  // 5) Alert — natija
  let pct = Math.round((correct / 10) * 100);
  let msg = "";

  if (pct === 100) {
    msg = "🏆 MUKAMMAL! Barcha " + correct + "/10 savol to'g'ri!";
  } else if (pct >= 80) {
    msg = "🌟 A'LO! " + correct + "/10 to'g'ri (" + pct + "%). Zo'r natija!";
  } else if (pct >= 60) {
    msg = "👍 YAXSHI! " + correct + "/10 to'g'ri (" + pct + "%). Davom eting!";
  } else if (pct >= 40) {
    msg = "⚠️ O'RTACHA. " + correct + "/10 to'g'ri (" + pct + "%). Ko'proq o'rganish kerak!";
  } else {
    msg = "❌ KAM BALL. " + correct + "/10 to'g'ri (" + pct + "%). Qayta o'rganib chiqing!";
  }

  alert("📊 Bosqich " + currentStage + " natijasi:\n\n" + msg);

  // 6) Score card ko'rsatish
  showScoreCard(currentStage);

  // 7) Oxirgi bosqich bo'lsa — final natija
  if (currentStage === 5) {
    let allDone = true;
    for (let s = 0; s < 5; s++) {
      if (!stageChecked[s]) { allDone = false; break; }
    }
    if (allDone) showFinalResult();
  }
}

// ── TEKSHIRILGAN BOSQICH STILLARINI QAYTA QO'LLASH ──────────
function applyCheckedStyles(stage) {
  let startIdx  = (stage - 1) * 10;
  let questions = allQuestions.slice(startIdx, startIdx + 10);
  let letters   = ["A", "B", "C"];

  questions.forEach(function(qObj, i) {
    let globalIdx = startIdx + i;
    let chosen    = userAnswers[globalIdx];
    let rightIdx  = qObj.ans;

    let card = document.getElementById("card-" + globalIdx);
    let fb   = document.getElementById("fb-" + globalIdx);

    let radios = document.querySelectorAll('input[name="q' + globalIdx + '"]');
    radios.forEach(function(r) { r.disabled = true; });

    for (let j = 0; j < 3; j++) {
      let lbl = document.getElementById("lbl-" + globalIdx + "-" + j);
      if (lbl) lbl.classList.remove("selected", "correct-ans", "wrong-ans", "show-ans");
    }

    if (chosen === rightIdx) {
      card.classList.add("correct-card");
      let cLbl = document.getElementById("lbl-" + globalIdx + "-" + rightIdx);
      if (cLbl) {
        cLbl.classList.add("correct-ans");
        let badge = document.createElement("span");
        badge.textContent = " ✅";
        badge.style.marginLeft = "auto";
        badge.style.flexShrink = "0";
        cLbl.appendChild(badge);
      }
      fb.textContent = "✅ To'g'ri javob!";
      fb.className   = "feedback-msg show-correct";
    } else {
      card.classList.add("wrong-card");
      let chosenLbl = document.getElementById("lbl-" + globalIdx + "-" + chosen);
      if (chosenLbl) {
        chosenLbl.classList.add("wrong-ans");
        let b1 = document.createElement("span");
        b1.textContent = " ❌";
        b1.style.marginLeft = "auto";
        b1.style.flexShrink = "0";
        chosenLbl.appendChild(b1);
      }
      let rightLbl = document.getElementById("lbl-" + globalIdx + "-" + rightIdx);
      if (rightLbl) {
        rightLbl.classList.add("show-ans");
        let b2 = document.createElement("span");
        b2.textContent = " ✅";
        b2.style.marginLeft = "auto";
        b2.style.flexShrink = "0";
        rightLbl.appendChild(b2);
      }
      fb.textContent = "❌ Noto'g'ri! To'g'ri javob: " + letters[rightIdx] + ") " + qObj.opts[rightIdx];
      fb.className   = "feedback-msg show-wrong";
    }
  });
}

// ── BOSQICH NATIJA KARTASINI KO'RSATISH ─────────────────────
function showScoreCard(stage) {
  let correct = stageScores[stage - 1];
  if (correct === null) return;

  let wrong = 10 - correct;
  let pct   = Math.round((correct / 10) * 100);

  let circle = document.getElementById("sc-circle");
  circle.textContent = correct + " / 10";
  circle.className   = "score-circle " + (pct >= 60 ? "pass" : "fail");

  document.getElementById("sc-correct").textContent = correct;
  document.getElementById("sc-wrong").textContent   = wrong;
  document.getElementById("sc-pct").textContent     = pct + "%";

  let title = "";
  let desc  = "";

  if (pct === 100) {
    title = "🏆 Mukammal natija!";
    desc  = "Barcha savollar to'g'ri javoblandi. Siz bu bo'limni a'lo bilasiz!";
  } else if (pct >= 80) {
    title = "🌟 A'lo natija!";
    desc  = "Juda zo'r! Bir necha noto'g'ri javob bor, lekin natija a'lo.";
  } else if (pct >= 60) {
    title = "👍 Yaxshi natija!";
    desc  = "O'rtadan yuqori. Davom eting va yanada yaxshilang!";
  } else if (pct >= 40) {
    title = "⚠️ O'rtacha natija";
    desc  = "Yetarli emas. Ko'proq o'rganib, qayta urinib ko'ring.";
  } else {
    title = "❌ Kam ball";
    desc  = "Bu bo'limni qayta o'rganib chiqing. Siz bajaralaolasiz!";
  }

  document.getElementById("sc-title").textContent = title;
  document.getElementById("sc-desc").textContent  = desc;

  let nextBtn = document.getElementById("next-stage-btn");
  if (stage < 5) {
    nextBtn.style.display  = "inline-flex";
    nextBtn.textContent    = "Bosqich " + (stage + 1) + " ➜";
  } else {
    nextBtn.style.display  = "none";
  }

  document.getElementById("score-card").classList.add("visible");
  document.getElementById("score-card").scrollIntoView({ behavior: "smooth", block: "center" });
}

// ── YAKUNIY NATIJA ───────────────────────────────────────────
function showFinalResult() {
  recalcTotals();

  let pct = Math.round((totalCorrect / 50) * 100);
  document.getElementById("fr-ring").textContent      = pct + "%";
  document.getElementById("fr-total-c").textContent   = totalCorrect;
  document.getElementById("fr-total-w").textContent   = totalWrong;
  document.getElementById("fr-total-pct").textContent = pct + "%";

  let title = "";
  let sub   = "";

  if (pct >= 90) {
    title = "🏆 Mukammal Bilim!";
    sub   = "Siz YHQ bo'yicha mukammal bilimga egasiz! " + totalCorrect + "/50 to'g'ri javob!";
  } else if (pct >= 70) {
    title = "🌟 Zo'r Natija!";
    sub   = "Juda yaxshi! " + totalCorrect + "/50 to'g'ri. Imtihonga tayyorsiz!";
  } else if (pct >= 50) {
    title = "👍 O'rtacha Natija";
    sub   = "Yaxshi urinish! " + totalCorrect + "/50. Ko'proq mashq qiling!";
  } else {
    title = "📚 Ko'proq O'qish Kerak";
    sub   = "Hali bilim yetarli emas. " + totalCorrect + "/50. Qayta urinib ko'ring!";
  }

  document.getElementById("fr-title").textContent = title;
  document.getElementById("fr-sub").textContent   = sub;

  document.getElementById("final-result").classList.add("visible");

  setTimeout(function() {
    document.getElementById("final-result").scrollIntoView({ behavior: "smooth", block: "center" });
  }, 350);

  alert(
    "🎉 Barcha bosqichlar tugadi!\n\n" +
    "📊 Yakuniy natija: " + totalCorrect + "/50 (" + pct + "%)\n" +
    "✅ To'g'ri: " + totalCorrect + "\n" +
    "❌ Noto'g'ri: " + totalWrong
  );
}

// ── YORDAMCHI FUNKSIYALAR ────────────────────────────────────
function recalcTotals() {
  totalCorrect = 0;
  totalWrong   = 0;
  stageScores.forEach(function(s) {
    if (s !== null) {
      totalCorrect += s;
      totalWrong   += (10 - s);
    }
  });
}

function updateHeaderScore() {
  document.getElementById("hdr-score").textContent = totalCorrect + " / " +
    (stageChecked.filter(function(c) { return c; }).length * 10);
}

function updateProgress() {
  let done = stageChecked.filter(function(c) { return c; }).length;
  let pct  = done * 20;
  document.getElementById("prog-fill").style.width  = pct + "%";
  document.getElementById("prog-pct").textContent   = pct + "%";
  document.getElementById("prog-label").textContent =
    "Bosqich " + currentStage + " / 5  |  " + done + " ta tekshirildi";
}

function updateTabs(activeStage) {
  let tabs = document.querySelectorAll(".stage-tab");
  tabs.forEach(function(tab, idx) {
    tab.classList.remove("active", "done");
    if (stageChecked[idx]) tab.classList.add("done");
  });
  if (tabs[activeStage - 1]) tabs[activeStage - 1].classList.add("active");
}

// ── BOSQICHGA O'TISH ─────────────────────────────────────────
function goStage(stage) {
  currentStage = stage;
  renderStage(stage);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function nextStage() {
  if (currentStage < 5) {
    currentStage++;
    renderStage(currentStage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ── TOZALASH ─────────────────────────────────────────────────
function clearStage() {
  if (stageChecked[currentStage - 1]) {
    alert("⚠️ Bu bosqich allaqachon tekshirilgan.\n\"Qayta urinish\" tugmasini bosing.");
    return;
  }

  let startIdx = (currentStage - 1) * 10;
  for (let i = startIdx; i < startIdx + 10; i++) {
    userAnswers[i] = null;

    let radios = document.querySelectorAll('input[name="q' + i + '"]');
    radios.forEach(function(r) { r.checked = false; });

    for (let j = 0; j < 3; j++) {
      let lbl = document.getElementById("lbl-" + i + "-" + j);
      if (lbl) lbl.classList.remove("selected", "correct-ans", "wrong-ans", "show-ans");
    }

    let card = document.getElementById("card-" + i);
    if (card) card.className = "question-card";

    let fb = document.getElementById("fb-" + i);
    if (fb) { fb.textContent = ""; fb.className = "feedback-msg"; }
  }
  alert("🗑️ Bosqich " + currentStage + " ning barcha javoblari tozalandi.");
}

// ── QAYTA URINISH ────────────────────────────────────────────
function retryStage() {
  let stage = currentStage;
  stageChecked[stage - 1] = false;
  stageScores[stage - 1]  = null;

  let startIdx = (stage - 1) * 10;
  for (let i = startIdx; i < startIdx + 10; i++) {
    userAnswers[i] = null;
  }

  recalcTotals();
  updateHeaderScore();
  updateProgress();
  updateTabs(stage);

  document.getElementById("score-card").classList.remove("visible");
  document.getElementById("final-result").classList.remove("visible");

  renderStage(stage);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ── BOSHIDAN BOSHLASH ────────────────────────────────────────
function restartAll() {
  let confirmed = confirm(
    "⚠️ Barcha natijalar o'chiriladi va test boshidan boshlanadi.\nDavom etasizmi?"
  );

  if (confirmed) {
    stageScores  = [null, null, null, null, null];
    stageChecked = [false, false, false, false, false];
    userAnswers  = new Array(50).fill(null);
    totalCorrect = 0;
    totalWrong   = 0;
    currentStage = 1;

    document.getElementById("hdr-score").textContent = "0 / 50";
    document.getElementById("score-card").classList.remove("visible");
    document.getElementById("final-result").classList.remove("visible");

    renderStage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ── SAHIFA YUKLANGANDA ───────────────────────────────────────
document.addEventListener("DOMContentLoaded", function() {
  renderStage(1);
  updateProgress();
});
