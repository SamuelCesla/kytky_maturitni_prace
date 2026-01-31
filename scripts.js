document.addEventListener("DOMContentLoaded", () => {
    // ===== Pomocná funkce – z názvu souboru na Wikimedia Commons vytvoří přímou URL =====
    function commonsFile(fileName) {
        // Komentář: Přes Special:FilePath se dá použít obrázek přímo jako URL.
        return "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(fileName);
    }

    // ===================== DATA =====================
    // Komentář: Každá položka má img (Wikimedia Commons). Klidně si to později vyměň za vlastní fotky.
    const datasets = {
        "Letničky": [
            { en: "Petunia", cz: "Petúnie", genus: "Petunia", species: "Petunia × atkinsiana", img: commonsFile("Petunia ×atkinsiana.jpg") },
            { en: "Zinnia", cz: "Cínie", genus: "Zinnia", species: "Zinnia elegans", img: commonsFile("Zinnia elegans.jpg") },
            { en: "Marigold", cz: "Aksamitník", genus: "Tagetes", species: "Tagetes patula", img: commonsFile("Tagetes patula.jpg") },
            { en: "Cosmos", cz: "Krásenka", genus: "Cosmos", species: "Cosmos bipinnatus", img: commonsFile("Cosmos bipinnatus1.jpg") },
            { en: "Sunflower", cz: "Slunečnice", genus: "Helianthus", species: "Helianthus annuus", img: commonsFile("Helianthus annuus.jpg") },
            { en: "Impatiens", cz: "Netýkavka", genus: "Impatiens", species: "Impatiens walleriana", img: commonsFile("Impatiens walleriana.JPG") },
            { en: "Nasturtium", cz: "Lichořeřišnice", genus: "Tropaeolum", species: "Tropaeolum majus", img: commonsFile("Tropaeolum majus.JPG") },
            { en: "Snapdragon", cz: "Hledík", genus: "Antirrhinum", species: "Antirrhinum majus", img: commonsFile("Antirrhinum majus.jpg") }
        ],
        "Trvalky": [
            { en: "Peony", cz: "Pivoňka", genus: "Paeonia", species: "Paeonia lactiflora", img: commonsFile("Paeonia lactiflora.jpg") },
            { en: "Lavender", cz: "Levandule", genus: "Lavandula", species: "Lavandula angustifolia", img: commonsFile("Lavandula angustifolia.jpg") },
            { en: "Iris", cz: "Kosatec", genus: "Iris", species: "Iris germanica", img: commonsFile("Iris germanica.jpg") },
            { en: "Dahlia", cz: "Jiřina", genus: "Dahlia", species: "Dahlia pinnata", img: commonsFile("Dahlia pinnata.JPG") },
            { en: "Chrysanthemum", cz: "Chryzantéma", genus: "Chrysanthemum", species: "Chrysanthemum morifolium", img: commonsFile("Chrysanthemum morifolium.jpg") },
            { en: "Yarrow", cz: "Řebříček", genus: "Achillea", species: "Achillea millefolium", img: commonsFile("Achillea millefolium.jpg") },
            { en: "Foxglove", cz: "Náprstník", genus: "Digitalis", species: "Digitalis purpurea", img: commonsFile("Digitalis purpurea.jpg") },
            { en: "Hydrangea", cz: "Hortenzie", genus: "Hydrangea", species: "Hydrangea macrophylla", img: commonsFile("Hydrangea macrophylla 01.jpg") }
        ],
        "Ovocné stromy": [
            { en: "Apple tree", cz: "Jabloň", genus: "Malus", species: "Malus domestica", img: commonsFile("Malus domestica 001.jpg") },
            { en: "Pear tree", cz: "Hrušeň", genus: "Pyrus", species: "Pyrus communis", img: commonsFile("Pyrus communis.jpg") },
            { en: "Plum tree", cz: "Slivoň", genus: "Prunus", species: "Prunus domestica", img: commonsFile("Prunus domestica.jpg") },
            { en: "Cherry tree", cz: "Třešeň", genus: "Prunus", species: "Prunus avium", img: commonsFile("Prunus avium.jpg") },
            { en: "Sour cherry tree", cz: "Višeň", genus: "Prunus", species: "Prunus cerasus", img: commonsFile("Prunus cerasus.jpg") },
            { en: "Apricot tree", cz: "Meruňka", genus: "Prunus", species: "Prunus armeniaca", img: commonsFile("Prunus armeniaca.jpg") },
            { en: "Peach tree", cz: "Broskvoň", genus: "Prunus", species: "Prunus persica", img: commonsFile("Prunus persica.jpg") },
            { en: "Walnut tree", cz: "Ořešák vlašský", genus: "Juglans", species: "Juglans regia", img: commonsFile("Juglans regia.jpg") }
        ],
        "Jehličnaté stromy": [
            { en: "Norway spruce", cz: "Smrk ztepilý", genus: "Picea", species: "Picea abies", img: commonsFile("Picea abies.jpg") },
            { en: "Scots pine", cz: "Borovice lesní", genus: "Pinus", species: "Pinus sylvestris", img: commonsFile("Pinus sylvestris.jpg") },
            { en: "Silver fir", cz: "Jedle bělokorá", genus: "Abies", species: "Abies alba", img: commonsFile("Abies alba.jpg") },
            { en: "European larch", cz: "Modřín opadavý", genus: "Larix", species: "Larix decidua", img: commonsFile("Larix decidua.JPG") },
            { en: "Yew", cz: "Tis", genus: "Taxus", species: "Taxus baccata", img: commonsFile("Taxus baccata.jpg") },
            { en: "Juniper", cz: "Jalovec", genus: "Juniperus", species: "Juniperus communis", img: commonsFile("Juniperus communis.jpg") },
            { en: "Thuja", cz: "Túje (zerav)", genus: "Thuja", species: "Thuja occidentalis", img: commonsFile("Thuja occidentalis.jpg") }
        ],
        "Listnaté stromy": [
            { en: "Oak", cz: "Dub", genus: "Quercus", species: "Quercus robur", img: commonsFile("Quercus robur.jpg") },
            { en: "Beech", cz: "Buk", genus: "Fagus", species: "Fagus sylvatica", img: commonsFile("Fagus sylvatica.jpg") },
            { en: "Birch", cz: "Bříza", genus: "Betula", species: "Betula pendula", img: commonsFile("Betula pendula.JPG") },
            { en: "Maple", cz: "Javor", genus: "Acer", species: "Acer platanoides", img: commonsFile("Acer platanoides.jpg") },
            { en: "Linden", cz: "Lípa", genus: "Tilia", species: "Tilia cordata", img: commonsFile("Tilia cordata.jpg") },
            { en: "Ash", cz: "Jasan", genus: "Fraxinus", species: "Fraxinus excelsior", img: commonsFile("Fraxinus excelsior.jpg") },
            { en: "Elm", cz: "Jilm", genus: "Ulmus", species: "Ulmus glabra", img: commonsFile("Ulmus glabra.jpg") },
            { en: "Hornbeam", cz: "Habr", genus: "Carpinus", species: "Carpinus betulus", img: commonsFile("Carpinus betulus.jpg") },
            { en: "Poplar", cz: "Topol", genus: "Populus", species: "Populus tremula", img: commonsFile("Populus tremula.JPG") },
            { en: "Willow", cz: "Vrba", genus: "Salix", species: "Salix alba", img: commonsFile("Salix alba.jpg") }
        ]
    };

    // ====== DOM ======
    const categoryEl = document.getElementById("category");
    const quizTypeEl = document.getElementById("quizType");
    const modeClassicEl = document.getElementById("modeClassic");
    const resetBtnEl = document.getElementById("resetBtn");

    const setCountEl = document.getElementById("setCount");
    const setNameEl = document.getElementById("setName");
    const qTypeEl = document.getElementById("qType");
    const aTypeEl = document.getElementById("aType");

    const tabStudyEl = document.getElementById("tabStudy");
    const tabQuizEl = document.getElementById("tabQuiz");
    const studyViewEl = document.getElementById("studyView");
    const quizViewEl = document.getElementById("quizView");

    // Study DOM
    const prevCardBtn = document.getElementById("prevCardBtn");
    const nextCardBtn = document.getElementById("nextCardBtn");
    const flipBtn = document.getElementById("flipBtn");
    const studyTitleEl = document.getElementById("studyTitle");
    const studyIndexEl = document.getElementById("studyIndex");
    const studyTotalEl = document.getElementById("studyTotal");
    const studyImgEl = document.getElementById("studyImg");
    const studyGridEl = document.getElementById("studyGrid");
    const studyListEl = document.getElementById("studyList");
    const studyCardEl = document.getElementById("studyCard");

    // Quiz DOM
    const scoreEl = document.getElementById("score");
    const wrongEl = document.getElementById("wrong");
    const questionTextEl = document.getElementById("questionText");
    const optionsEl = document.getElementById("options");
    const resultEl = document.getElementById("result");
    const hintTextEl = document.getElementById("hintText");

    // ====== Stav ======

    // MODAL pro obrázek (index.html)
    const imgModal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    if (studyImgEl && imgModal && modalImg) {
        studyImgEl.style.cursor = "zoom-in";
        studyImgEl.onclick = function() {
            modalImg.src = studyImgEl.src;
            imgModal.style.display = "flex";
        };
        imgModal.onclick = function() {
            imgModal.style.display = "none";
        };
    }
    let correct = 0;
    let wrong = 0;
    let locked = false;

    let currentItem = null;
    let currentQKey = null;
    let currentAKey = null;

    let studyIndex = 0;
    let hideAnswers = false;

    const DELAY_MS = 3500;
    const KEYS = ["en", "cz", "genus", "species"];

    const LABELS = {
        en: "EN",
        cz: "CZ",
        genus: "Rod",
        species: "Druh",
        img: "Obrázek"
    };

    // ====== Helpers ======
    function shuffleInPlace(arr) {
        // Komentář: Spolehlivé míchání (Fisher–Yates).
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    function shuffledCopy(arr) {
        // Komentář: Vrátí novou promíchanou kopii pole.
        return shuffleInPlace([...arr]);
    }

    function initCategories() {
        categoryEl.innerHTML = "";

        const allOpt = document.createElement("option");
        allOpt.value = "__ALL__";
        allOpt.textContent = "Vše dohromady";
        categoryEl.appendChild(allOpt);

        Object.keys(datasets).forEach(name => {
            const opt = document.createElement("option");
            opt.value = name;
            opt.textContent = name;
            categoryEl.appendChild(opt);
        });

        categoryEl.value = "__ALL__";
    }

    function getAllWords() {
        return Object.values(datasets).flat();
    }

    function getActiveWords() {
        if (categoryEl.value === "__ALL__") return getAllWords();
        return datasets[categoryEl.value] || [];
    }

    function renderSetInfo(active) {
        setCountEl.textContent = active.length;
        setNameEl.textContent = (categoryEl.value === "__ALL__") ? "VŠE DOHROMADY" : categoryEl.value;
    }

    function setModeClassicVisibility() {
        // Komentář: Volba cíle odpovědi je relevantní jen pro "classic".
        modeClassicEl.style.display = (quizTypeEl.value === "classic") ? "" : "none";
    }

    function setActiveTab(tab) {
        // Komentář: Přepínání mezi učením a kvízem.
        const isStudy = tab === "study";
        if (typeof tabStudyEl !== 'undefined' && tabStudyEl) tabStudyEl.classList.toggle("active", isStudy);
        if (typeof tabQuizEl !== 'undefined' && tabQuizEl) tabQuizEl.classList.toggle("active", !isStudy);
        if (typeof studyViewEl !== 'undefined' && studyViewEl) studyViewEl.style.display = isStudy ? "" : "none";
        if (typeof quizViewEl !== 'undefined' && quizViewEl) quizViewEl.style.display = isStudy ? "none" : "";
    }

    // ====== STUDY MODE ======
    function buildStudyList(active) {
        // Komentář: Vykreslí seznam položek v sadě (kliknutím přejdeš na kartičku).
        studyListEl.innerHTML = "";
        active.forEach((item, idx) => {
            const el = document.createElement("div");
            el.className = "studyItem";
            el.dataset.idx = String(idx);

            const left = document.createElement("div");
            left.innerHTML = `<strong>${item.en}</strong><small>${item.cz}</small>`;
            left.style.cursor = "pointer";
            left.onclick = (e) => {
                e.stopPropagation();
                studyIndex = idx;
                renderStudyCard();
            };

            const right = document.createElement("div");
            right.innerHTML = `<small>${item.genus}</small>`;

            el.appendChild(left);
            el.appendChild(right);

            // Pro jistotu zachováme i kliknutí na celý řádek
            el.onclick = () => {
                studyIndex = idx;
                renderStudyCard();
            };

            studyListEl.appendChild(el);
        });
    }

    function renderStudyCard() {
        const active = getActiveWords();
        if (active.length === 0) {
            studyTitleEl.textContent = "Žádná data";
            studyImgEl.removeAttribute("src");
            studyGridEl.innerHTML = "";
            studyIndexEl.textContent = "0";
            studyTotalEl.textContent = "0";
            return;
        }

        // Komentář: Hlídání indexu.
        if (studyIndex < 0) studyIndex = 0;
        if (studyIndex > active.length - 1) studyIndex = active.length - 1;

        const item = active[studyIndex];

        // zvýraznění v seznamu
        [...studyListEl.children].forEach((node, idx) => {
            node.classList.toggle("active", idx === studyIndex);
        });

        studyTitleEl.textContent = `${item.en}  →  ${item.cz}`;
        studyIndexEl.textContent = String(studyIndex + 1);
        studyTotalEl.textContent = String(active.length);
        studyImgEl.src = item.img;

        // Komentář: Obsah kartičky – to je ten „obsah slovíček“ k učení.
        studyGridEl.innerHTML = `
		<div class="studyLabel">EN</div><div class="studyValue">${item.en}</div>
		<div class="studyLabel">CZ</div><div class="studyValue">${item.cz}</div>
		<div class="studyLabel">Rod</div><div class="studyValue">${item.genus}</div>
		<div class="studyLabel">Druh</div><div class="studyValue">${item.species}</div>
	`;

        // Skrytí/ukázání odpovědí (rozmazání hodnot)
        studyCardEl.classList.toggle("hiddenAnswer", hideAnswers);

        // info pilulky (necháme smysluplné i v učení)
        qTypeEl.textContent = "–";
        aTypeEl.textContent = "–";
    }

    function resetStudy() {
        // Komentář: Reset učení při změně sady – vrátí tě na první kartičku.
        studyIndex = 0;
        hideAnswers = false;
        const active = getActiveWords();
        buildStudyList(active);
        renderStudyCard();
    }

    // ====== QUIZ MODE ======
    function pickDifferentKey(fromKey) {
        const candidates = KEYS.filter(k => k !== fromKey);
        return candidates[Math.floor(Math.random() * candidates.length)];
    }

    function buildRound(active) {
        const quizType = quizTypeEl.value;
        currentItem = active[Math.floor(Math.random() * active.length)];

        if (quizType === "classic") {
            currentQKey = "en";
            currentAKey = modeClassicEl.value;
        } else if (quizType === "ultimate") {
            currentQKey = KEYS[Math.floor(Math.random() * KEYS.length)];
            currentAKey = pickDifferentKey(currentQKey);
        } else if (quizType === "images") {
            currentQKey = "en";
            currentAKey = "img";
        }
    }

    function renderQuestion() {
        questionTextEl.textContent = currentItem[currentQKey];

        qTypeEl.textContent = LABELS[currentQKey] || "–";
        aTypeEl.textContent = LABELS[currentAKey] || "–";

        if (quizTypeEl.value === "images") {
            hintTextEl.textContent = "Klikni na obrázek, který odpovídá anglickému názvu.";
        } else {
            hintTextEl.textContent = `Vyber správný ${LABELS[currentAKey]} pro zadaný ${LABELS[currentQKey]}.`;
        }
    }

    function buildOptionsText(active) {
        const correctAnswer = currentItem[currentAKey];
        const opts = [correctAnswer];

        const attemptsMax = 200;
        let attempts = 0;

        while (opts.length < 4 && attempts < attemptsMax) {
            attempts++;
            const candidate = active[Math.floor(Math.random() * active.length)]?.[currentAKey];
            if (candidate && !opts.includes(candidate)) opts.push(candidate);
        }

        const shuffled = shuffledCopy(opts);

        optionsEl.innerHTML = "";
        shuffled.forEach(text => {
            const btn = document.createElement("button");
            btn.className = "optionBtn";
            btn.textContent = text;
            btn.style.background = "";
            btn.disabled = false;
            btn.onclick = () => checkAnswerText(text);
            optionsEl.appendChild(btn);
        });
    }

    function buildOptionsImages(active) {
        const correctItem = currentItem;
        const picks = [correctItem];

        const attemptsMax = 300;
        let attempts = 0;

        while (picks.length < 4 && attempts < attemptsMax) {
            attempts++;
            const cand = active[Math.floor(Math.random() * active.length)];
            if (cand && !picks.includes(cand)) picks.push(cand);
        }

        const shuffled = shuffledCopy(picks);

        optionsEl.innerHTML = "";
        const grid = document.createElement("div");
        grid.className = "imgGrid";

        shuffled.forEach(item => {
            const btn = document.createElement("button");
            btn.className = "imgBtn";
            btn.dataset.key = item.en;

            const img = document.createElement("img");
            img.src = item.img;
            img.alt = item.cz || item.en || "Rostlina";

            const cap = document.createElement("div");
            cap.className = "imgCaption";
            cap.textContent = "Vybrat";

            btn.appendChild(img);
            btn.appendChild(cap);

            btn.onclick = () => checkAnswerImage(item);
            grid.appendChild(btn);
        });

        optionsEl.appendChild(grid);
    }

    function nextWord() {
        locked = false;
        resultEl.textContent = "";

        const active = getActiveWords();

        if (active.length < 4) {
            questionTextEl.textContent = "Vybraná sada má méně než 4 položky.";
            optionsEl.innerHTML = "";
            qTypeEl.textContent = "–";
            aTypeEl.textContent = "–";
            hintTextEl.textContent = "";
            renderSetInfo(active);
            return;
        }

        buildRound(active);
        renderQuestion();

        if (quizTypeEl.value === "images") {
            buildOptionsImages(active);
        } else {
            buildOptionsText(active);
        }

        renderSetInfo(active);
    }

    function checkAnswerText(answer) {
        if (locked) return;
        locked = true;

        const correctAnswer = currentItem[currentAKey];
        const buttons = document.querySelectorAll(".optionBtn");

        buttons.forEach(btn => {
            if (btn.textContent === correctAnswer) btn.style.background = "#2ecc71";
            else if (btn.textContent === answer) btn.style.background = "#e74c3c";
            btn.disabled = true;
        });

        if (answer === correctAnswer) {
            correct++;
            resultEl.textContent = "Správně ✅";
        } else {
            wrong++;
            resultEl.textContent = "Špatně ❌ Správně: " + correctAnswer;
        }

        scoreEl.textContent = correct;
        wrongEl.textContent = wrong;

        setTimeout(nextWord, DELAY_MS);
    }

    function checkAnswerImage(chosenItem) {
        if (locked) return;
        locked = true;

        const correctItem = currentItem;
        const buttons = document.querySelectorAll(".imgBtn");

        buttons.forEach(btn => {
            const isCorrect = btn.dataset.key === correctItem.en;
            const isChosen = btn.dataset.key === chosenItem.en;

            if (isCorrect) btn.style.background = "#2ecc71";
            else if (isChosen) btn.style.background = "#e74c3c";
            btn.disabled = true;
        });

        if (chosenItem === correctItem) {
            correct++;
            resultEl.textContent = "Správně ✅";
        } else {
            wrong++;
            resultEl.textContent = `Špatně ❌ Správně je: ${correctItem.cz} (${correctItem.en})`;
        }

        scoreEl.textContent = correct;
        wrongEl.textContent = wrong;

        setTimeout(nextWord, DELAY_MS);
    }

    function resetQuiz() {
        // Komentář: Reset skóre a začni znovu v kvízu.
        correct = 0;
        wrong = 0;
        scoreEl.textContent = 0;
        wrongEl.textContent = 0;
        nextWord();
    }

    function resetAll() {
        // Komentář: Resetuje učení i kvíz (když změníš sadu/režim).
        resetStudy();
        resetQuiz();
    }

    // ====== Events ======
   


    if (prevCardBtn) prevCardBtn.onclick = () => { studyIndex--; renderStudyCard(); };
    if (nextCardBtn) nextCardBtn.onclick = () => { studyIndex++; renderStudyCard(); };
    if (flipBtn) flipBtn.onclick = () => { hideAnswers = !hideAnswers; renderStudyCard(); };

    // Reset tlačítko: v index.html resetuje pouze studijní režim, v quiz.html vše
    if (resetBtnEl) {
        if (studyViewEl && !quizViewEl) {
            resetBtnEl.onclick = resetStudy;
        } else {
            resetBtnEl.onclick = resetAll;
        }
    }

    if (tabStudyEl) tabStudyEl.onclick = () => { setActiveTab("study"); resetStudy(); };
    if (tabQuizEl) tabQuizEl.onclick = () => { setActiveTab("quiz"); resetQuiz(); };

    if (categoryEl) categoryEl.onchange = () => { renderSetInfo(getActiveWords()); resetAll(); };
    if (quizTypeEl) quizTypeEl.onchange = () => { setModeClassicVisibility(); resetQuiz(); };
    if (modeClassicEl) modeClassicEl.onchange = () => { if (quizTypeEl.value === "classic") resetQuiz(); };

    // ====== Start ======
    initCategories();
    setModeClassicVisibility();
    renderSetInfo(getActiveWords());
    const hasQuiz = document.getElementById("quizView");
    const hasStudy = document.getElementById("studyView");
    if (hasQuiz) {
        // Jsme v quiz.html
        if (typeof setActiveTab === 'function') setActiveTab("quiz");
        if (typeof resetQuiz === 'function') resetQuiz();
        if (resetBtnEl) resetBtnEl.onclick = resetQuiz;
    } else if (hasStudy) {
        // Jsme v index.html
        if (typeof setActiveTab === 'function') setActiveTab("study");
        if (typeof resetAll === 'function') resetAll();
    }
});
