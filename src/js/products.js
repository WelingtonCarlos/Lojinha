let products = [
  {
    name: "JBL Quantum 400",
    image1: "./images/JBL_Quantum_400_Product Image_Hero 02.png",
    image2: "./images/JBL_Quantum_400_Product Image_Hero Mic Up.webp",
    old_price: "850,00",
    curr_price: "699,00",
  },
  {
    name: "JBL E55BT KEY BLACK",
    image1: "./images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png",
    image2: "./images/JBL_LIVE650BTNC_Product Image_Folded_Black.webp",
    old_price: "1230,00",
    curr_price: "990,90",
  },
  {
    name: "JBL JR 310BT",
    image1: "./images/JBL_JR 310BT_Product Image_Hero_Skyblue.png",
    image2: "./images/JBL_JR 310BT_Product Image_Detail_Skyblue.png",
    old_price: "760,00",
    curr_price: "600,90",
  },
  {
    name: "JBL TUNE 750BTNC",
    image1:
      "./images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png",
    image2: "./images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp",
    old_price: "1230,00",
    curr_price: "990,90",
  },
  {
    name: "JBL Horizon",
    image1: "./images/JBLHorizon_001_dvHAMaster.png",
    image2: "./images/JBLHorizon_BLK_002_dvHAMaster.webp",
    old_price: "350,00",
    curr_price: "290,90",
  },
  {
    name: "JBL Tune 220TWS",
    image1: "./images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png",
    image2: "./images/JBL_TUNE220TWS_ProductImage_Pink_Back.png",
    old_price: "400,00",
    curr_price: "300,00",
  },
  {
    name: "UA Project Rock",
    image1:
      "./images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png",
    image2:
      "./images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png",
    old_price: "240,00",
    curr_price: "210,00",
  },
  {
    name: "JBL Endurance SPRINT",
    image1:
      "./images/JBL_Endurance-SPRINT_Product-Image_Red_front-1605x1605px.webp",
    image2: "./images/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp",
    old_price: "190,00",
    curr_price: "130,00",
  },
];

let product_list = document.querySelector("#products");

renderProducts = (products) => {
  products.forEach((e) => {
    let prod = `
      <div class="col-3 col-md-6 col-sm-12">
        <div class="product-card">
          <div class="product-card-img">
              <img src="${e.image1}" alt="">
              <img src="${e.image2}" alt="">
          </div>
          <div class="product-card-info">
            <div class="product-card-name">${e.name}</div>
            <div class="product-card-price">
              <span><del>R$ ${e.old_price}</del></span>
              <span class="curr-price">R$ ${e.curr_price}</span>
            </div>
            <div class="product-btn">
              <div>
                <button class="btn-flat btn-hover btn-shop-now">
                  Comprar Agora
                </button>
              </div>
              <div>
                <button class="btn-flat btn-hover btn-cart-add">
                  <i class="bx bxs-cart-add"></i>
                </button>
                <button class="btn-flat btn-hover btn-cart-add">
                  <i class="bx bxs-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    product_list.insertAdjacentHTML("beforeend", prod);
  });
};

renderProducts(products);
renderProducts(products);

let filter_col = document.querySelector("#filter-col");

document
  .querySelector("#filter-toggle")
  .addEventListener("click", () => filter_col.classList.toggle("active"));

document
  .querySelector("#filter-close")
  .addEventListener("click", () => filter_col.classList.toggle("active"));
