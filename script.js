// scroll to top
const scrollToTop = document.getElementsByClassName("scrollToTop")[0];
window.addEventListener("scroll", function () {
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  // Adjust this value to control when the element appears
  const triggerPoint = 650;

  if (scrollPosition > triggerPoint) {
    scrollToTop.classList.remove("hidden");
  } else {
    scrollToTop.classList.add("hidden");
  }
});

scrollToTop.addEventListener("click", () => {
  // console.log("top");
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling
  });
});

// slider
let showingDiv1 = true;
var slides = document.getElementsByClassName("slide");

function autoSlide() {
  const div1 = slides[0];
  const div2 = slides[1];

  if (showingDiv1) {
    div1.classList.remove("active");
    div1.classList.add("out");

    div2.classList.remove("out");
    div2.classList.add("active");
  } else {
    div2.classList.remove("active");
    div2.classList.add("out");

    div1.classList.remove("out");
    div1.classList.add("active");
  }

  showingDiv1 = !showingDiv1;
}

// Auto slide every 5 seconds
setInterval(autoSlide, 5000);

// filter data
function filterProucts(e) {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("activeFilter");
  });

  e.target.classList.add("activeFilter");

  displayProducts(e.target.innerHTML.trim().toLowerCase());
}

// load data

var products = [
  {
    pid: 1,
    pcategory: "speciality coffee",
    pname: "Watad Mountain",
    pdescription:
      "Hand-picked with meticulous care by passionate local farmers, the 100% Khawalni beans embody the spirit of Jazan.",
    pprice: 107,
    pImgPath: "images/p1.webp",
  },
  {
    pid: 2,
    pcategory: "speciality coffee",
    pname: "Faifa Mountain",
    pdescription:
      "Faifa Mountain blend is a combination of Saudi coffee beans grown in the highest peaks of Jazan mountains and Costa Rican coffee beans",
    pprice: 48,
    pImgPath: "images/p2.webp",
  },
  {
    pid: 3,
    pcategory: "speciality coffee",
    pname: "Al Areef Mountain",
    pdescription:
      "An exquisite blend of Saudi coffee beans from Jazan, and coffee beans from Papua New Guinea and Guatemala.",
    pprice: 48,
    pImgPath: "images/p3.webp",
  },
  {
    pid: 4,
    pcategory: "speciality coffee",
    pname: "Tallan Mountain",
    pdescription:
      "This exquisite blend combines the best of Saudi beans with those of the Agustino highlands in southern Colombia",
    pprice: 58,
    pImgPath: "images/p4.webp",
  },
  {
    pid: 5,
    pcategory: "speciality coffee",
    pname: "Al Majaz Mountain",
    pdescription:
      "Picked with care from the highest peaks of Jazan mountains and blended with beans from Guatemala and Ethiopia.",
    pprice: 92,
    pImgPath: "images/p5.webp",
  },
  {
    pid: 6,
    pcategory: "speciality coffee",
    pname: "Al Aswad Mountain",
    pdescription:
      "A spectacular blend from the Saudi beans of Jazan's mountains and the beans of Chelchele in Ethiopia.",
    pprice: 87,
    pImgPath: "images/p6.webp",
  },
  {
    pid: 7,
    pcategory: "speciality coffee",
    pname: "Al Ryith Mountain",
    pdescription:
      "This blend is sourced from Jazan's finest Saudi beans and Ethiopian beans",
    pprice: 52,
    pImgPath: "images/p7.webp",
  },
  {
    pid: 8,
    pcategory: "saudi coffee",
    pname: "Shaqra Mountain",
    pdescription:
      "Shaqra Mountain blend is a combination of Saudi beans carefully selected from Jazan, and Harari beans from Ethiopia.",
    pprice: 68,
    pImgPath: "images/p8.webp",
  },
  {
    pid: 9,
    pcategory: "saudi coffee",
    pname: "Khayalah Mountain",
    pdescription:
      "Saudi coffee, harvested from the heights of the Jazan mountains in the Kingdom of Saudi Arabia.",
    pprice: 107,
    pImgPath: "images/p9.webp",
  },
  {
    pid: 10,
    pcategory: "bundles",
    pname: "Peaks Collection (2)",
    pdescription: `Box contained mix of 3 Jazean blends : Al-Majaz Mountain Faifa Mountain Al-Arif Mountain`,
    pprice: 168,
    pImgPath: "images/p10.webp",
  },
  {
    pid: 11,
    pcategory: "bundles",
    pname: "Peaks Collection (1)",
    pdescription: `Box contained mix of 3 Jazean blends Tallan Mountain Al-Aswad Mountain Ryith Mountain`,
    pprice: 178,
    pImgPath: "images/p11.webp",
  },
  {
    pid: 12,
    pcategory: "preparation tools",
    pname: "Brewista Glass Server 400ml transparent",
    pdescription: `Designed intentionally to enhance aroma, the X Series Server takes impressive strides in the science and the style of coffee preparation. `,
    pprice: 80,
    pImgPath: "images/p12.webp",
  },
  {
    pid: 13,
    pcategory: "preparation tools",
    pname: "Brewista Kettle-Matt White",
    pdescription: `Mastering your morning coffee ritual starts with the right kettle. Brewista’s intelligent, in-house design allows for to-the-degree temperature control for a perfectly brewed bean.`,
    pprice: 480,
    pImgPath: "images/p13.webp",
  },
  {
    pid: 14,
    pcategory: "preparation tools",
    pname: "ZeroHero Electric Portable Handheld Grinder",
    pdescription:
      "Precision-crafted grinder with CNC stainless steel burrs for consistent, fine grinding, the ZereHero Portable grinder features an ergonomic aluminum alloy body, quiet 70dB operation, and long-lasting 800mAh battery for effortless coffee preparation.",
    pprice: 560,
    pImgPath: "images/p14.webp",
  },
  {
    pid: 15,
    pcategory: "preparation tools",
    pname: "Brewista Glass Dripper transparent",
    pdescription:
      "The award-winning Brewista Tornado Duo Dripper is our revolutionary, sealed, dual-wall glass dripper.",
    pprice: 85,
    pImgPath: "images/p15.webp",
  },
];

var cart = [];

var product_items_div = document.getElementsByClassName("products__items")[0];

function displayProducts(filter) {
  // console.log(filter);

  let productsWithFilter;
  if (filter && filter != "all") {
    productsWithFilter = products.filter((p) => p.pcategory == filter);
  }
  product_items_div.innerHTML = "";
  for (let p of productsWithFilter || products) {
    // console.log(p);
    product_items_div.innerHTML += `
    <div class="product_item p-3">
        <div class="product_item-img">
          <img src="${p.pImgPath}" alt="product" onclick="productDetails(${p.pid})"  />
        </div>
        <h3 class="product_item-name">${p.pname}</h3>
        <p class="product_item-descr">${p.pdescription}</p>
        <p class="product_item-price">${p.pprice} RS</p>
        <button class="btn btn-sm btn-addtocart" onclick="additemtocart(${p.pid})">
          Quick Add
        </button>
    </div>`;
  }
}

function additemtocart(pid, quantity = 1) {
  try {
    quantity = parseInt(document.getElementById("quantity").value);
    console.log(quantity);
  } catch {}
  //
  // console.log(quantity);

  // add to cart
  // console.log("add item to cart with id= ", pid);
  var product = products.find((p) => p.pid == pid);
  if (product != null) {
    var cp = cart.find((p) => p.product.pid == pid);

    if (cp != null) {
      cp.quantity += quantity;
    } else {
      cart.push({ product, quantity });
    }
  }

  showNotification("product added to cart.");
  // console.log(cart);
}

// let closeBtn = document.getElementById("closeBtn");
let product__details = document.getElementsByClassName("product__details")[0];

function productDetails(pid) {
  // console.log(pid);
  let p = products.find((x) => x.pid == pid);
  // console.log(p);
  product__details.innerHTML = "<h1>Product is not exist</h1>";
  if (p == null) return;

  product__details.innerHTML = `
  <button class="btn btn-close-white close-btn" onclick="closeDetails()">X</button>
        <div class="p_details-data">
          <div class="details-data-header">
            <h1>${p.pname}</h1>
            <p>${p.pdescription}</p>
          </div>
          <div class="details-data-form">
            <input
              type="number"
              id="quantity"
              value="1"
              min="1"
              max="10"
            />
            <button class="btn btn-success" id="addCartItem" onclick="additemtocart(${p.pid})">Add to Cart</button>
          </div>
        </div>
        <div class="p_details-img">
          <div class="p_details-imgs">
            <img class="details-img" src="${p.pImgPath}" alt="pimg" />
          </div>
        </div>`;

  product__details.style.display = "flex";
}

function closeDetails() {
  product__details.style.display = "none";
}

// onload
onload = () => displayProducts();
// start cart ---------------------------------------------------------------------------
var cartView = document.getElementsByClassName("cartview")[0];

var cartItems = document.getElementsByClassName("cart-items")[0];
var elmentWhichAddAfter = cartItems.children[0];

let totalAmountSpan = document.getElementById("totalAmount");

function closeCart() {
  cartView.style.display = "none";
}

function openCart() {
  let totalAmount = 0;
  // clear the old cart
  cartItems.innerHTML = "";
  // Create the new element
  cart.forEach((element) => {
    const newElement = document.createElement("div");
    newElement.classList.add(
      "cart-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    newElement.innerHTML = `<div>
              <h4>${element.product.pname}</h4>
              <p><span class="fs-5" id="elemPrice${element.product.pid}">${element.product.pprice}</span> Rs</p>
            </div>
            <div class="d-flex gap-2">
              <button class="btn btn-danger" onclick="minusElem(${element.product.pid})">
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="fw-medium fs-4 p-1" id="elemQuantity${element.product.pid}">${element.quantity}</span>
              <button class="btn btn-success" onclick="plusElem(${element.product.pid})">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>`;

    // Insert the new element before first child
    cartItems.insertBefore(newElement, elmentWhichAddAfter);

    totalAmount += element.product.pprice * element.quantity;
  });

  totalAmountSpan.innerHTML = totalAmount;
  cartView.style.display = "flex";
}

function buynow() {
  // alert shipping
  // alert("order will be shipped asap");
  cartItems.innerHTML = "";
  totalAmountSpan.innerHTML = 0;
  // console.log("buy now");
  cart = [];
  showNotification("order will be shipped asap");
  closeCart();
}

// add element and delete element
function plusElem(pId) {
  // console.log(pId);

  // get elemt price
  let elementPrice = parseInt(
    document.getElementById(`elemPrice${pId}`).innerHTML
  );
  // get element quantity
  let elemQuantity = parseInt(
    document.getElementById(`elemQuantity${pId}`).innerHTML
  );
  // increase elem quantity and write it
  document.getElementById(`elemQuantity${pId}`).innerHTML = ++elemQuantity;

  // add price to total amount
  totalAmountSpan.innerHTML =
    parseInt(totalAmountSpan.innerHTML) + elementPrice;
  // edit element in cart
  cart.find((p) => p.product.pid == pId).quantity++;
  // console.log(cart);
}

function minusElem(pId) {
  // console.log(pId);
  // get elemt price
  let elementPrice = parseInt(
    document.getElementById(`elemPrice${pId}`).innerHTML
  );
  // get element quantity
  let elemQuantity = parseInt(
    document.getElementById(`elemQuantity${pId}`).innerHTML
  );
  // check quantity greater than 0
  if (elemQuantity > 0) {
    // decrease elem quantity and write it
    document.getElementById(`elemQuantity${pId}`).innerHTML = --elemQuantity;

    // add price to total amount
    totalAmountSpan.innerHTML =
      parseInt(totalAmountSpan.innerHTML) - elementPrice;

    // edit element in cart
    cart.find((p) => p.product.pid == pId).quantity--;
    // console.log(cart);
    if (elemQuantity == 0) {
      cart.pop(cart.find((p) => p.product.pid == pId));
    }
  }
}

// End cart --------------------------------------------------------------------------
// start register --------------------------------------------------------------------------

const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const genderInputs = document.querySelectorAll('input[name="gender"]');

const errName = document.getElementById("err-name");
const errEmail = document.getElementById("err-email");
const errPass = document.getElementById("err-password");
const errGender = document.getElementById("err-gender");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let registerSection = document.getElementsByClassName("register_section")[0];
function closeRegister() {
  resetValuses();
  registerSection.style.display = "none";
}
function openRegister() {
  registerSection.style.display = "flex";
}
// ===== Cookie Helpers =====
function setCookie(name, value, days = 7) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(
    value
  )};expires=${d.toUTCString()};path=/`;
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// ===== Validation =====
function setError(el, errEl, msg) {
  el?.classList.remove("is-valid");
  el?.classList.add("is-invalid");
  if (errEl) errEl.textContent = msg || "";
}
function clearError(el, errEl) {
  el?.classList.remove("is-invalid");
  el?.classList.add("is-valid");
  if (errEl) errEl.textContent = "";
}

function validateName() {
  const val = nameInput.value.trim();
  if (!val) {
    setError(nameInput, errName, "Name is required.");
    return false;
  }
  clearError(nameInput, errName);
  return true;
}

function validateEmail() {
  const val = emailInput.value.trim();
  if (!emailRegex.test(val)) {
    setError(emailInput, errEmail, "Enter a valid email.");
    return false;
  }
  clearError(emailInput, errEmail);
  return true;
}

function validatePassword() {
  const val = passInput.value;
  if (val.length < 8) {
    setError(passInput, errPass, "Password must be at least 8 characters.");
    return false;
  }
  clearError(passInput, errPass);
  return true;
}

function validateGender() {
  const checked = document.querySelector('input[name="gender"]:checked');
  if (!checked) {
    errGender.textContent = "Please select your gender.";
    return false;
  }
  errGender.textContent = "";
  return true;
}

// ===== Save to Cookies =====
function saveToCookies() {
  setCookie("name", nameInput.value.trim());
  setCookie("email", emailInput.value.trim());
  setCookie("password", passInput.value); // ⚠️ للتجربة فقط
  const gender = document.querySelector('input[name="gender"]:checked');
  if (gender) setCookie("gender", gender.value);
}

// ===== Events =====
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const ok =
    validateName() & validateEmail() & validatePassword() & validateGender();

  if (ok) {
    saveToCookies();
    // alert("✅ Form submitted and data saved!");
    showNotification("New User is added");
    closeRegister();
  }
});

form.addEventListener("reset", () => {
  resetValuses();
  // clear cookies
  deleteCookie("name");
  deleteCookie("email");
  deleteCookie("password");
  deleteCookie("gender");
});

function resetValuses() {
  [nameInput, emailInput, passInput].forEach((i) =>
    i.classList.remove("is-valid", "is-invalid")
  );
  [errName, errEmail, errPass, errGender].forEach((e) => (e.textContent = ""));
}
// Live validation
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passInput.addEventListener("input", validatePassword);
genderInputs.forEach((r) => r.addEventListener("change", validateGender));
// End register --------------------------------------------------------------------------

// start login --------------------------------------------------------------------------
let authName = document.getElementById("auth");
let loginSection = document.getElementsByClassName("login_section")[0];
function closelogin() {
  loginSection.style.display = "none";
}
function openLogin() {
  loginSection.style.display = "flex";
}
// helper function to read cookie
function getCookie(name) {
  let value = `; ${document.cookie}`;
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const loginUsername = document.getElementById("loginUsername").value.trim();
  const loginPassword = document.getElementById("loginPassword").value;

  const savedUsername = getCookie("name"); // جاي من فورم التسجيل
  const savedPassword = getCookie("password");

  const errorDiv = document.getElementById("loginErrors");

  if (loginUsername === savedUsername && loginPassword === savedPassword) {
    errorDiv.style.display = "none";
    // alert("✅ Login successful! Welcome " + savedUsername);
    showNotification("Login successful! Welcome " + savedUsername);
    closelogin();
    authName.innerHTML = "";
    authName.innerHTML = savedUsername;
  } else {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "❌ Invalid username or password.";
  }
});

// End login --------------------------------------------------------------------------
// start notification --------------------------------------------------------------------------
// const showBtn = document.getElementById("showNotification");
const notification = document.getElementById("notification");
const closeBtn = document.getElementById("closeBtn");
const notificationMsg = document.getElementById("notificationMsg");

function showNotification(msg) {
  notification.classList.remove("hidden");
  notificationMsg.innerHTML = "";
  notificationMsg.innerHTML = msg;
  // Hide automatically after 3 seconds
  setTimeout(() => {
    notification.classList.add("hidden");
  }, 3000);
}
// showBtn.addEventListener("click", () => {
//   notification.classList.remove("hidden");

//   // Hide automatically after 3 seconds
//   setTimeout(() => {
//     notification.classList.add("hidden");
//   }, 3000);
// });

closeBtn.addEventListener("click", () => {
  notification.classList.add("hidden");
});
