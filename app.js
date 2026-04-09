const DATA = {
  poojas: [
    {slug:"satyanarayan", name:"Satyanarayan Katha", cat:"Daily Pooja", level:"medium", rating:4.8, duration:"2-3 hours",
      desc:"A powerful pooja dedicated to Lord Vishnu for fulfillment of desires and peace."},
    {slug:"rudrabhishek", name:"Rudrabhishek", cat:"Daily Pooja", level:"advanced", rating:4.9, duration:"2-3 hours",
      desc:"Sacred abhishek of Lord Shiva for spiritual cleansing and blessings."},
    {slug:"navgraha", name:"Navgraha Shanti Pooja", cat:"Special Occasions", level:"advanced", rating:4.7, duration:"3-4 hours",
      desc:"Pooja for planetary peace and removing doshas."},
    {slug:"durga", name:"Durga Pooja", cat:"Festival Pooja", level:"medium", rating:4.6, duration:"1-1.5 hours",
      desc:"Worship Goddess Durga for strength, protection and victory over negativity."},
    {slug:"griha", name:"Griha Pravesh", cat:"Family Wellness", level:"medium", rating:4.7, duration:"2-3 hours",
      desc:"New home entry pooja for blessings, peace and prosperity."},
    {slug:"ganesh", name:"Ganesh Pooja", cat:"Daily Pooja", level:"easy", rating:4.8, duration:"30-45 min",
      desc:"Begin any work with Lord Ganesh. Removes obstacles and brings positivity."},
    {slug:"lakshmi", name:"Lakshmi Pooja", cat:"Festival Pooja", level:"easy", rating:4.8, duration:"45-60 min",
      desc:"Pooja for prosperity, gratitude and financial discipline."},
    {slug:"saraswati", name:"Saraswati Pooja", cat:"Family Wellness", level:"easy", rating:4.7, duration:"30-45 min",
      desc:"Pooja for students, learning, wisdom and focus."},
    {slug:"hanuman", name:"Hanuman Pooja", cat:"Daily Pooja", level:"easy", rating:4.8, duration:"20-40 min",
      desc:"Pooja for courage, discipline and protection."},
    {slug:"shiv", name:"Shiv Pooja (Daily)", cat:"Daily Pooja", level:"easy", rating:4.7, duration:"20-30 min",
      desc:"Daily Shiva worship for calm mind and inner strength."},
    {slug:"vishnu", name:"Vishnu Pooja", cat:"Daily Pooja", level:"easy", rating:4.7, duration:"30-45 min",
      desc:"Simple Vishnu pooja for stability and peace at home."},
    {slug:"vastu", name:"Vastu Shanti (Simple)", cat:"Special Occasions", level:"medium", rating:4.6, duration:"60-90 min",
      desc:"Simple home ritual for positivity and harmony."}
 ],
  samagriByPooja: {
    ganesh: [
      {name:"Diya (oil lamp)", qty:"1", price:25, required:true, available:true},
      {name:"Durva", qty:"1 bunch", price:30, required:true, available:true},
      {name:"Modak / sweets", qty:"250g", price:150, required:false, available:true},
      {name:"Red cloth", qty:"1", price:50, required:true, available:true},
    ],
    durga: [
      {name:"Kalash", qty:"1", price:120, required:true, available:true},
      {name:"Red flowers", qty:"20", price:60, required:true, available:true},
      {name:"Coconut", qty:"1", price:35, required:true, available:true},
      {name:"Sweets", qty:"250g", price:150, required:false, available:true},
    ],
    satyanarayan: [
      {name:"Panchamrit", qty:"1 set", price:180, required:true, available:true},
      {name:"Tulsi", qty:"1 bunch", price:25, required:true, available:true},
      {name:"Fruits", qty:"1 kg", price:120, required:false, available:true},
      {name:"Agarbatti", qty:"1 pack", price:25, required:true, available:true},
    ],
    navgraha: [
      {name:"Navgraha items", qty:"1 set", price:399, required:true, available:true},
      {name:"Havan samagri", qty:"1 pack", price:250, required:true, available:true},
      {name:"Rice", qty:"1 kg", price:60, required:true, available:true},
      {name:"Coins for offering", qty:"21", price:21, required:false, available:true},
    ],
    rudrabhishek: [
      {name:"Milk", qty:"1 L", price:70, required:true, available:true},
      {name:"Bilva leaves", qty:"1 bunch", price:35, required:true, available:true},
      {name:"Honey", qty:"250g", price:160, required:false, available:true},
      {name:"Diya", qty:"1", price:25, required:true, available:true},
    ],
    griha: [
      {name:"Kalash", qty:"1", price:120, required:true, available:true},
      {name:"Coconut", qty:"1", price:35, required:true, available:true},
      {name:"Mango leaves", qty:"1 bunch", price:50, required:true, available:true},
      {name:"Havan samagri", qty:"1 pack", price:250, required:false, available:true},
    ]
  },
  poojaGuides: {

  ganesh: {
    title:"Ganesh Pooja",
    meta:"Duration: 30–45 min • Best for new beginnings",
    mantra_hi:"ॐ गण गणपतये नमः",
    mantra_en:"Om Gan Ganapataye Namah",
    meaning:"I bow to Lord Ganesha, remover of obstacles.",
    chant:"Chant 11 or 21 times after lighting diya.",
    steps:[
      ["Preparation","Take bath and wear clean clothes. Clean pooja area and keep diya, agarbatti, flowers and sweets ready."],
      ["Setup","Place Ganesh idol/photo on clean cloth. Keep water bowl and spoon."],
      ["Sankalp","Light diya and take sankalp for successful beginning."],
      ["Offerings","Offer flowers, durva and sweets with devotion."],
      ["Prayer","Pray for removal of obstacles and positivity."],
      ["Aarti","Perform aarti and distribute prasad."]
    ]
  },

  lakshmi: {
    title:"Lakshmi Pooja",
    meta:"Duration: 45–60 min • For prosperity",
    mantra_hi:"ॐ श्रीं महालक्ष्म्यै नमः",
    mantra_en:"Om Shreem Mahalakshmyai Namah",
    meaning:"I bow to Goddess Lakshmi for prosperity and abundance.",
    chant:"Chant 21 times.",
    steps:[
      ["Preparation","Clean house and decorate pooja place."],
      ["Setup","Place Lakshmi photo and keep coins and sweets."],
      ["Light Diya","Light diya and incense."],
      ["Offerings","Offer flowers and sweets."],
      ["Prayer","Pray for prosperity and good financial discipline."],
      ["Aarti","Perform aarti and share prasad."]
    ]
  },

  saraswati: {
    title:"Saraswati Pooja",
    meta:"Duration: 30–45 min • For education",
    mantra_hi:"ॐ ऐं सरस्वत्यै नमः",
    mantra_en:"Om Aim Saraswatyai Namah",
    meaning:"I bow to Goddess Saraswati for wisdom and knowledge.",
    chant:"Chant 11 times.",
    steps:[
      ["Preparation","Keep books and pen near pooja place."],
      ["Setup","Place Saraswati photo."],
      ["Light Diya","Light diya and incense."],
      ["Offerings","Offer white flowers."],
      ["Prayer","Pray for focus and intelligence."],
      ["Aarti","Perform aarti."]
    ]
  },

  hanuman: {
    title:"Hanuman Pooja",
    meta:"Duration: 20–40 min • For courage",
    mantra_hi:"ॐ हं हनुमते नमः",
    mantra_en:"Om Hanumate Namah",
    meaning:"I bow to Lord Hanuman for strength and protection.",
    chant:"Chant 11 or 21 times.",
    steps:[
      ["Preparation","Keep diya and prasad like banana or jaggery."],
      ["Setup","Place Hanuman photo."],
      ["Light Diya","Light diya and incense."],
      ["Prayer","Pray for courage and discipline."],
      ["Offerings","Offer flowers and prasad."],
      ["Aarti","Perform aarti."]
    ]
  },

  shiv: {
    title:"Shiv Pooja",
    meta:"Duration: 20–30 min • For peace",
    mantra_hi:"ॐ नमः शिवाय",
    mantra_en:"Om Namah Shivaya",
    meaning:"I bow to Lord Shiva for inner peace.",
    chant:"Chant 108 times if possible.",
    steps:[
      ["Preparation","Keep water, bilva leaves and diya."],
      ["Setup","Place Shivling or photo."],
      ["Abhishek","Offer water slowly."],
      ["Offer Bilva","Offer bilva leaves."],
      ["Prayer","Pray calmly."],
      ["Aarti","Perform aarti."]
    ]
  },

  vishnu: {
    title:"Vishnu Pooja",
    meta:"Duration: 30–45 min",
    mantra_hi:"ॐ नमो नारायणाय",
    mantra_en:"Om Namo Narayanaya",
    meaning:"I bow to Lord Vishnu for stability and protection.",
    chant:"Chant 21 times.",
    steps:[
      ["Preparation","Keep tulsi leaves and diya."],
      ["Setup","Place Vishnu photo."],
      ["Light Diya","Light diya."],
      ["Offer Tulsi","Offer tulsi leaves."],
      ["Prayer","Pray for family stability."],
      ["Aarti","Perform aarti."]
    ]
  },

  durga: {
    title:"Durga Pooja",
    meta:"Duration: 60 min • For protection",
    mantra_hi:"ॐ दुं दुर्गायै नमः",
    mantra_en:"Om Dum Durgayai Namah",
    meaning:"I bow to Goddess Durga for protection and strength.",
    chant:"Chant 21 times.",
    steps:[
      ["Preparation","Keep red flowers and diya."],
      ["Setup","Place Durga photo."],
      ["Light Diya","Light diya."],
      ["Offerings","Offer red flowers."],
      ["Prayer","Pray for protection."],
      ["Aarti","Perform aarti."]
    ]
  },

  satyanarayan: {
    title:"Satyanarayan Katha",
    meta:"Duration: 2–3 hours",
    mantra_hi:"ॐ नमो नारायणाय",
    mantra_en:"Om Namo Narayanaya",
    meaning:"I bow to Lord Vishnu for peace and prosperity.",
    chant:"Chant 21 times.",
    steps:[
      ["Preparation","Keep fruits, tulsi and diya."],
      ["Setup","Place Vishnu photo."],
      ["Light Diya","Light diya."],
      ["Katha","Read Satyanarayan Katha."],
      ["Offerings","Offer prasad."],
      ["Aarti","Perform aarti."]
    ]
  },

  rudrabhishek: {
    title:"Rudrabhishek",
    meta:"Duration: 2 hours",
    mantra_hi:"ॐ नमः शिवाय",
    mantra_en:"Om Namah Shivaya",
    meaning:"I bow to Lord Shiva for purification.",
    chant:"Chant 108 times.",
    steps:[
      ["Preparation","Keep milk, water and bilva leaves."],
      ["Abhishek","Offer milk and water on Shivling."],
      ["Offer Bilva","Offer bilva leaves."],
      ["Prayer","Pray calmly."],
      ["Aarti","Perform aarti."]
    ]
  },

  navgraha: {
    title:"Navgraha Shanti",
    meta:"Duration: 60–90 min",
    mantra_hi:"ॐ नवग्रहाय नमः",
    mantra_en:"Om Navagrahaya Namah",
    meaning:"I bow to the nine planets for harmony.",
    chant:"Chant 9 times.",
    steps:[
      ["Preparation","Keep flowers and diya."],
      ["Setup","Place Navgraha image."],
      ["Light Diya","Light diya."],
      ["Offerings","Offer flowers to each planet."],
      ["Prayer","Pray for harmony."],
      ["Aarti","Perform aarti."]
    ]
  },

  griha: {
    title:"Griha Pravesh",
    meta:"Duration: 2 hours",
    mantra_hi:"ॐ शुभ लाभाय नमः",
    mantra_en:"Om Shubh Labhaya Namah",
    meaning:"Prayer for auspicious new home.",
    chant:"Chant 11 times.",
    steps:[
      ["Preparation","Clean house."],
      ["Kalash Setup","Place kalash at entrance."],
      ["Light Diya","Light diya."],
      ["Prayer","Pray for positivity."],
      ["Aarti","Perform aarti."]
    ]
  },

  vastu: {
    title:"Vastu Shanti",
    meta:"Duration: 60–90 min",
    mantra_hi:"ॐ शान्तिः शान्तिः शान्तिः",
    mantra_en:"Om Shanti Shanti Shanti",
    meaning:"Invocation for peace and harmony.",
    chant:"Chant 21 times.",
    steps:[
      ["Preparation","Open windows and clean home."],
      ["Light Diya","Light diya."],
      ["Salt Water","Keep salt water bowl in corner."],
      ["Prayer","Pray for harmony."],
      ["Aarti","Perform aarti."]
    ]
  }
}
};

function qs(sel){return document.querySelector(sel)}
function qsa(sel){return [...document.querySelectorAll(sel)]}

function loadCart(){ return JSON.parse(localStorage.getItem("ps_cart")||"[]"); }
function saveCart(cart){ localStorage.setItem("ps_cart", JSON.stringify(cart)); }

function updateCartBadge(){
  const cart = loadCart();
  const count = cart.length;
  const badge = qs("#cartCount");
  if(badge) badge.textContent = count;
}

function setActiveNav(){
  const file = location.pathname.split("/").pop();
  qsa("[data-nav]").forEach(a=>{
    if(a.getAttribute("href") === file) a.classList.add("active");
  });
}

/* ---------- POOJAS ---------- */
function renderTabs(){
  const tabsEl = qs("#tabs");
  if(!tabsEl) return;

  const cats = ["All Poojas", ...new Set(DATA.poojas.map(p=>p.cat))];
  const icon = (c)=>{
    if(c==="All Poojas") return "🧘";
    if(c==="Daily Pooja") return "🪔";
    if(c==="Special Occasions") return "✨";
    if(c==="Festival Pooja") return "🎉";
    return "👨‍👩‍👧‍👦";
  };

  tabsEl.innerHTML = cats.map((c,i)=>`
    <button class="tab ${i===0?"active":""}" data-cat="${c}">${icon(c)} ${c}</button>
  `).join("");

  tabsEl.addEventListener("click",(e)=>{
    const btn = e.target.closest(".tab");
    if(!btn) return;
    qsa(".tab").forEach(t=>t.classList.remove("active"));
    btn.classList.add("active");
    renderPoojaCards(btn.dataset.cat, qs("#searchInput")?.value || "");
  });
}

function levelClass(level){
  if(level==="advanced") return "hard";
  if(level==="medium") return "med";
  return "easy";
}

function renderPoojaCards(cat="All Poojas", searchText=""){
  const grid = qs("#poojaGrid");
  if(!grid) return;

  const query = (searchText||"").trim().toLowerCase();
  let list = (cat==="All Poojas") ? DATA.poojas : DATA.poojas.filter(p=>p.cat===cat);

  if(query){
    list = list.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.desc.toLowerCase().includes(query) ||
      p.cat.toLowerCase().includes(query)
    );
  }

  const countText = qs("#countText");
  if(countText) countText.textContent = `Showing ${list.length} poojas`;

  grid.innerHTML = list.map(p=>`
    <div class="card">
      <div class="card-top">
        <span class="pill ${levelClass(p.level)}">${p.level}</span>
        <span class="rating">⭐ ${p.rating}</span>
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="meta">
          <span>⏱ ${p.duration}</span>
          <span>📌 ${p.cat}</span>
        </div>
      </div>
      <div class="card-footer">
        <a class="btn ghost" href="samagri.html?pooja=${encodeURIComponent(p.slug)}">Samagri</a>
        <a class="btn primary" href="pooja-detail.html?pooja=${encodeURIComponent(p.slug)}">Start Pooja</a>
      </div>
    </div>
  `).join("") || `<div style="color:var(--muted);padding:12px">No poojas found.</div>`;
}

/* ---------- SAMAGRI ---------- */
function setProgress(items, cart){
  const totalReq = items.filter(i=>i.required).length || 1;
  const haveReq = items.filter(i=>i.required && cart.some(c=>c.name===i.name)).length;
  const pct = Math.round((haveReq/totalReq)*100);

  const bar = qs("#progBar");
  const txt = qs("#progText");
  if(bar) bar.style.width = pct + "%";
  if(txt) txt.textContent = `${haveReq}/${totalReq} required items added`;
}

function renderSamagri(){
  const select = qs("#poojaSelect");
  const listEl = qs("#samagriList");
  if(!select || !listEl) return;

  select.innerHTML = DATA.poojas.map(p=>`<option value="${p.slug}">${p.name}</option>`).join("");

  const url = new URLSearchParams(location.search);
  const pre = url.get("pooja");
  if(pre && DATA.samagriByPooja[pre]) select.value = pre;

  function paint(){
    const slug = select.value;
    const items = DATA.samagriByPooja[slug] || [];
    let cart = loadCart();

    listEl.innerHTML = items.map(it=>`
      <div class="item">
        <div>
          <b>${it.name} <span class="tag ${it.required?"req":"av"}">${it.required?"Required":"Optional"}</span></b>
          <small>${it.qty} • ${it.available?"Available at home":"Not available"}</small>
        </div>
        <div class="row" style="justify-content:flex-end">
          <div class="price">₹${it.price}</div>
          <button class="btn primary" data-add="${it.name}" style="padding:9px 12px">Add</button>
        </div>
      </div>
    `).join("");

    const sum = qs("#cartSummary");
    const total = cart.reduce((a,c)=>a+c.price,0);
    if(sum){
      if(cart.length===0){
        sum.innerHTML = `<div style="color:var(--muted);font-size:13px">Your cart is empty. Add items you don't have at home.</div>`;
      } else {
        sum.innerHTML = cart.map(c=>`
          <div class="item" style="padding:10px">
            <div>
              <b style="font-size:13px">${c.name}</b>
              <small>₹${c.price}</small>
            </div>
            <button class="btn ghost" data-rm="${c.name}" style="padding:9px 10px">Remove</button>
          </div>
        `).join("") + `<div style="margin-top:12px;font-weight:1000">Total: ₹${total}</div>`;
      }
    }

    setProgress(items, cart);
    updateCartBadge();

    listEl.onclick = (e)=>{
      const add = e.target.closest("[data-add]");
      if(!add) return;
      const name = add.dataset.add;
      const item = items.find(i=>i.name===name);
      if(!item) return;

      cart = loadCart();
      if(!cart.some(c=>c.name===name)){
        cart.push({name:item.name, price:item.price});
        saveCart(cart);
        paint();
      }
    };

    sum && (sum.onclick = (e)=>{
      const rm = e.target.closest("[data-rm]");
      if(!rm) return;
      const name = rm.dataset.rm;
      cart = loadCart().filter(c=>c.name!==name);
      saveCart(cart);
      paint();
    });
  }

  select.addEventListener("change", paint);
  paint();

  const clearBtn = qs("#clearCart");
  clearBtn && clearBtn.addEventListener("click", ()=>{
    localStorage.removeItem("ps_cart");
    updateCartBadge();
    renderSamagri();
  });
}

/* ---------- BOOKING ---------- */
function renderBooking(){
  const form = qs("#bookingForm");
  if(!form) return;

  const url = new URLSearchParams(location.search);
  const pre = url.get("pooja");
  const sel = qs("#bookPooja");
  if(sel){
    sel.innerHTML = DATA.poojas.map(p=>`<option value="${p.slug}">${p.name}</option>`).join("");
    if(pre) sel.value = pre;
  }

  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const data = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      date: form.date.value,
      time: form.time.value,
      pooja: form.pooja.value,
      address: form.address.value.trim()
    };
    if(!data.name || !data.phone || !data.date){
      alert("Please fill Name, Phone and Date.");
      return;
    }
    const old = JSON.parse(localStorage.getItem("ps_bookings")||"[]");
    old.push({...data, createdAt:new Date().toISOString()});
    localStorage.setItem("ps_bookings", JSON.stringify(old));
    alert("✅ Booking saved successfully (demo).");
    form.reset();
  });
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", ()=>{
  setActiveNav();
  updateCartBadge();

  // Search filter (works on home + poojas page)
  const searchInput = qs("#searchInput");
  if(searchInput){
    searchInput.addEventListener("input", ()=>{
      const activeCat = qs(".tab.active")?.dataset?.cat || "All Poojas";
      renderPoojaCards(activeCat, searchInput.value);
    });
  }

  renderTabs();
  renderPoojaCards("All Poojas", "");
  renderSamagri();
  renderBooking();
  renderPoojaDetail();
  const bg = document.querySelector("#bgAudio");
const vol = document.querySelector("#bgVol");
document.querySelector("#bgPlay")?.addEventListener("click", ()=> bg?.play());
document.querySelector("#bgPause")?.addEventListener("click", ()=> bg?.pause());
vol?.addEventListener("input", ()=> { if(bg) bg.volume = Number(vol.value); });
if(bg) bg.volume = 0.25;
});
function speak(text, lang="en-IN", onEnd=null){
  if(!("speechSynthesis" in window)){
    alert("Speech not supported on this browser.");
    return;
  }
  window.speechSynthesis.cancel();

  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.9;
  u.pitch = 1;
  u.lang = lang;

  if(onEnd) u.onend = onEnd;

  window.speechSynthesis.speak(u);
}
function renderPoojaDetail(){
  const titleEl = qs("#pdTitle");
  if(!titleEl) return; // only on pooja-detail page

  const url = new URLSearchParams(location.search);
  const slug = url.get("pooja") || "ganesh";

  const guide = DATA.poojaGuides?.[slug];
  if(!guide){
    titleEl.textContent = "Pooja Detail";
    qs("#pdMeta").textContent = "Guide not found.";
    return;
  }

  titleEl.textContent = guide.title;
  qs("#pdMeta").textContent = guide.meta;
  qs("#mantraHi").textContent = guide.mantra_hi || "";
  qs("#mantraEn").textContent = guide.mantra_en || "";
  qs("#mantraMeaning").textContent = guide.meaning ? ("Meaning: " + guide.meaning) : "";
  qs("#mantraChant").textContent = guide.chant ? ("How to chant: " + guide.chant) : "";

  qs("#playMantra").onclick = ()=>{
   const text = (currentLang==="en")
     ? `${guide.mantra_en || ""}. ${guide.meaning || ""}`
     : `${guide.mantra_hi || ""}. ${guide.meaning || ""}`;
   speak(text, currentLang==="en" ? "en-IN" : "hi-IN");
 };

  // buttons
  qs("#pdSamagriBtn").href = `samagri.html?pooja=${encodeURIComponent(slug)}`;
  qs("#pdBookBtn").href = `book-pandit.html?pooja=${encodeURIComponent(slug)}`;

  let idx = 0;
  let currentLang = "en"; // default English
  let autoNext = true; // auto next ON

  const stepTitle = qs("#stepTitle");
  const stepText = qs("#stepText");
  const counter = qs("#stepCounter");
  const allSteps = qs("#allSteps");

  function paint(){
    const [t, d] = guide.steps[idx];
    stepTitle.textContent = t;
    stepText.textContent = d;
    counter.textContent = `Step ${idx+1}/${guide.steps.length}`;

    allSteps.innerHTML = guide.steps.map((s,i)=>`
      <div class="item" style="cursor:pointer;${i===idx?"background:var(--pill);border-color:#ffd6bf":""}" data-i="${i}">
        <div>
          <b>Step ${i+1}: ${s[0]}</b>
          <small>${s[1]}</small>
        </div>
        <div class="tag av">Tap</div>
      </div>
    `).join("");
  }

  paint();

  qs("#prevStep").onclick = ()=>{
    idx = (idx-1 + guide.steps.length) % guide.steps.length;
    window.speechSynthesis?.cancel();
    paint();
  };
  qs("#nextStep").onclick = ()=>{
    idx = (idx+1) % guide.steps.length;
    window.speechSynthesis?.cancel();
    paint();
  };
  qs("#speakStep").onclick = ()=>{
  const [t,d] = guide.steps[idx];

  const say = () => {
    if(currentLang === "en"){
      return `${guide.title}. Step ${idx+1}. ${t}. ${d}`;
    } else {
      return `यह ${guide.title} है। चरण ${idx+1}. ${t}. ${d}`;
    }
  };

  speak(say(), currentLang==="en" ? "en-IN" : "hi-IN", ()=>{
    if(!autoNext) return;
    idx = (idx + 1) % guide.steps.length;
    paint();
    // auto play next step
    setTimeout(()=> qs("#speakStep").click(), 350);
  });
};
  qs("#pauseSpeech").onclick = ()=>{
    if(window.speechSynthesis?.speaking) window.speechSynthesis.pause();
  };
  qs("#stopSpeech").onclick = ()=>{
    window.speechSynthesis?.cancel();
  };
  qs("#toggleLang").onclick = ()=>{
  if(currentLang === "en"){
    currentLang = "hi";
    qs("#toggleLang").textContent = "🌐 English";
  } else {
    currentLang = "en";
    qs("#toggleLang").textContent = "🌐 Hindi";
  }
};

  allSteps.onclick = (e)=>{
    const card = e.target.closest("[data-i]");
    if(!card) return;
    idx = Number(card.dataset.i);
    window.speechSynthesis?.cancel();
    paint();
  };
}
// ===========================
// CART + SAMAGRI (ALL FIXES)
// ===========================

const CART_KEY = "ps_cart";

function getCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); }
  catch(e){ return []; }
}
function setCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function cartCount(cart){
  return cart.reduce((s,i)=> s + (i.qty || 1), 0);
}

function updateCartBadge(){
  const cart = getCart();
  document.querySelectorAll("#cartCount").forEach(el=>{
    el.textContent = cartCount(cart);
  });
}

// ✅ Add item: duplicate nahi banega, qty +1
function addToCart(item){
  const cart = getCart();
  const idx = cart.findIndex(x => x.id === item.id);

  if(idx >= 0){
    cart[idx].qty = (cart[idx].qty || 1) + 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  setCart(cart);
  updateCartBadge();
  renderCartSummary();   // ✅ live order summary
}

// ✅ Remove 1 qty (qty 0 => remove)
function removeOne(id){
  const cart = getCart();
  const idx = cart.findIndex(x=> x.id === id);
  if(idx === -1) return;

  cart[idx].qty = (cart[idx].qty || 1) - 1;
  if(cart[idx].qty <= 0) cart.splice(idx,1);

  setCart(cart);
  updateCartBadge();
  renderCartSummary();
}

// ✅ Remove item completely
function removeItem(id){
  const cart = getCart().filter(x=> x.id !== id);
  setCart(cart);
  updateCartBadge();
  renderCartSummary();
}

// ✅ Order Summary render into #cartSummary
function renderCartSummary(){
  const box = document.querySelector("#cartSummary");
  if(!box) return;

  const cart = getCart();
  if(!cart.length){
    box.innerHTML = `<div class="muted">Cart is empty. Add items from left.</div>`;
    return;
  }

  let total = 0;

  box.innerHTML = cart.map(it=>{
    const qty = it.qty || 1;
    const price = Number(it.price || 0);
    total += price * qty;

    return `
      <div class="row" style="justify-content:space-between;align-items:center;margin:10px 0">
        <div style="min-width:0">
          <b style="display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${it.name}</b>
          <div class="muted" style="font-size:13px;margin-top:2px">₹${price} × ${qty}</div>
        </div>
        <div class="row" style="gap:8px">
          <button class="btn ghost" data-dec="${it.id}">−</button>
          <span style="min-width:20px;text-align:center;font-weight:900">${qty}</span>
          <button class="btn ghost" data-inc="${it.id}">+</button>
          <button class="btn ghost" data-del="${it.id}" title="Remove">🗑</button>
        </div>
      </div>
    `;
  }).join("") + `
    <hr style="margin:12px 0">
    <div class="row" style="justify-content:space-between;font-weight:1000">
      <div>Total</div>
      <div>₹${total}</div>
    </div>
  `;
}

// ✅ Handle +/−/delete clicks in summary
document.addEventListener("click",(e)=>{
  const inc = e.target.getAttribute?.("data-inc");
  const dec = e.target.getAttribute?.("data-dec");
  const del = e.target.getAttribute?.("data-del");

  if(inc){
    const cart = getCart();
    const it = cart.find(x=> x.id === inc);
    if(it) addToCart({id: it.id, name: it.name, price: it.price});
  }
  if(dec) removeOne(dec);
  if(del) removeItem(del);
});

// ✅ Checkout: empty cart block
function setupCheckout(){
  const btn = document.querySelector("#checkoutBtn");
  if(!btn) return;

  btn.addEventListener("click", ()=>{
    const cart = getCart();
    if(!cart.length){
      alert("Cart is empty! Please add items first.");
      return;
    }
    window.location.href = "samagri-checkout.html";
  });
}

// ✅ Add button “Added ✅” effect (call this when you click add)
function markAdded(btn){
  if(!btn) return;
  const old = btn.textContent;
  btn.textContent = "Added ✅";
  btn.disabled = true;
  setTimeout(()=>{
    btn.textContent = old;
    btn.disabled = false;
  }, 900);
}

// ✅ IMPORTANT: Samagri list me Add button par ye use karo
// Agar tum already items render kar rahi ho app.js me,
// to Add button me data-id / data-name / data-price lagao
// and use this listener:

document.addEventListener("click",(e)=>{
  const btn = e.target.closest?.("[data-add]");
  if(!btn) return;

  const id = btn.getAttribute("data-id");
  const name = btn.getAttribute("data-name");
  const price = Number(btn.getAttribute("data-price") || 0);

  addToCart({id, name, price});
  markAdded(btn); // ✅ Added ✅
});

// init
document.addEventListener("DOMContentLoaded", ()=>{
  updateCartBadge();
  renderCartSummary();
  setupCheckout();
});
document.querySelector("#checkoutBtn")?.addEventListener("click", ()=>{
  const cart = JSON.parse(localStorage.getItem("ps_cart") || "[]");
  if(!cart.length){
    alert("Cart is empty! Please add items first.");
    return;
  }
  window.location.href = "samagri-checkout.html";
});



