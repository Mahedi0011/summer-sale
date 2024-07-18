

// console.log('js file is ready');



function accessories() {
  addToCard("Accessories");
  TotalPrice(39.0);
}

function Magic_Making() {
  addToCard("Magic Making")
  TotalPrice(25.0)
}

function Home_Cooker() {
  addToCard('Home Cooker')
  TotalPrice(49.0)
}

function Sports_Back_Cap() {
  addToCard('Sports Back Cap')
  TotalPrice(49.0)
}

function Full_Jersey_Set() {
  addToCard('Full Jersey Set')
  TotalPrice(69.0)
}

function Sports_cates() {
  addToCard('Sports cates')
  TotalPrice(159.0)
}

function addToCard(itemName) {
  const input_items = document.getElementById("input_items");
  const li = document.createElement("li");
  li.innerText = itemName;
  input_items.appendChild(li);
}


function TotalPrice(price) {
  const total_price = document.getElementById("total_price");
  const applyBtn = document.getElementById('apply');
  let current_total_price = parseFloat(total_price.innerText) || 0;
  let new_total_price = current_total_price + price;

  if (new_total_price > 200) {
      applyBtn.disabled = false;
    //  discount(new_total_price)
  }
  total_price.innerText = new_total_price.toFixed(2);

}

const couponNum = Math.floor((Math.random() * 10000));
function couponCode() {
  const useCoupon = document.getElementById('useCoupon');
  useCoupon.value = couponNum;
}



function couponCodeCalculated() {
  // const total_tk = document.getElementById('total_tk');
  // total_tk.innerText = disCount;
  const couponCodeUse = document.getElementById('couponCodeUse');
  const couponCodeUseValue = couponCodeUse.value;
  const total_price = document.getElementById("total_price");
  let current_total_price = total_price.innerText;
  const total_tk = document.getElementById('total_tk');
  const disCountTk = document.getElementById('disCountTk');
    if(couponCodeUseValue == couponNum ){
        const totalDisCount = current_total_price / 100 * 20;
        disCountTk.innerText = totalDisCount
        const disTk = current_total_price - totalDisCount;
        total_tk.innerText = disTk.toFixed(2)
  }
 
}



// function discount(dis) {
//   const discount = dis / 20;
//   const total_tk = document.getElementById('total_tk');
//   return total_tk.innerText = discount;
 
// }


// li.appendChild = input_items;
// const total_price = document.getElementById(price);
// input_items.innerText = name;
// total_price.innerText = items_1_price;

// function TotalPrice(total_price,price){
//  const total_price = document.getElementById(price);
//  total_price.innerText=items_1_price;

// }

