

document.getElementById('product-Dress').addEventListener('click', () => {
  const title = "Dress";
  const content = `
               
                <dl>
                    <dt>Long</dt>
                    <dd>Dry Clean-Rs.118/pc</dd>
                     <dd>Wash & Fold-Rs.35/pc</dd>
                     <dd>Wash & Iron-Rs.47/pc</dd>
                    <dd>Steam Press-Rs.17/pc</dd>
                </dl>
                  <dl>
                   <dt>Short</dt>
                    <dd>Dry Clean-Rs.59/pc</dd>
                     <dd>Wash & Fold-Rs.29/pc</dd>
                     <dd>Wash & Iron-Rs.35/pc</dd>
                    
                </dl>`;
  showModal(title, content);
});


const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  fade: true,
  grabCursor: true,
  spaceBetween: 0,
  centerSlide: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 1.7
    },
    800: {
      slidesPerView: 1.8
    },
    992: {
      slidesPerView: 2.1
    },
    1200: {
      slidesPerView: 2.2
    },
    1400: {
      slidesPerView: 2.9
    },
  }
});
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', function () {
  if (window.scrollY > 90) {
    backToTopButton.classList.add('show');
    backToTopButton.classList.remove('hide');
  } else {
    backToTopButton.classList.add('hide');
    backToTopButton.classList.remove('show');
  }
});
// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
const filterButtons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.item');
function filterItems(filter) {

  items.forEach(item => {

    if (filter === '*' || item.classList.contains(filter.slice(1))) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}
filterButtons.forEach(button => {
  button.addEventListener('click', function () {

    filterButtons.forEach(btn => btn.classList.remove('is-checked'));


    this.classList.add('is-checked');


    const filterValue = this.getAttribute('data-filter');


    filterItems(filterValue);
  });
});
function showModal(title, content) {
  const modal = document.getElementById('myModal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  // Set modal content
  modalTitle.textContent = title;
  modalBody.innerHTML = content;

  // Show the modal
  modal.style.display = 'flex';

  // Close modal when 'X' is clicked
  document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside the modal-content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}
// product-Blouse
document.getElementById('product-Blouse').addEventListener('click', () => {
  const title = "Blouse";
  const content = `
<table class="table table-bordered table-striped ">
<thead>
  <tr>
    <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
    <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
    <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Fancy - Dry Clean <br> Rs.135</td>
    <td style="text-align: center;">
      <input type="text" class="mx-auto quantity form-control" data-price="135" placeholder="0" min="0" maxlength="3" style="width: 50px;">
    </td>
    <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
  </tr>
  <tr>
    <td>Fancy - Steam Press <br> Rs.17</td>
    <td style="text-align: center;">
      <input type="text" class="mx-auto quantity form-control" data-price="17" placeholder="0" min="0" maxlength="3" style="width: 50px;">
    </td>
    <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
  </tr>
  <tr>
    <td>Fancy - Starching <br> Rs.23</td>
    <td style="text-align: center;">
      <input type="text" class="mx-auto quantity form-control" data-price="23" placeholder="0" min="0" maxlength="3" style="width: 50px;">
    </td>
    <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
  </tr>
</tbody>
</table>
<div class="text-right d-flex justify-content-between flex-md-row flex-column">
<p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1"> 0</span></p>
<div style="width: fit-content; align-self: center;">
  <a href="https://wa.me/8220362015" class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" style="background-color: #470365; color: white;">
    <span class="m-0">Book Now</span>
    <i class="fa-solid fa-chevron-right ps-3"></i>
  </a>
</div>
</div>

`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);

});
// product-Belt
document.getElementById('product-Belt').addEventListener('click', () => {
  const title = "Belt";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Size</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Big <br> Rs.94</td>
        <td style="text-align: center;">
          <input type="text" class="mx-auto quantity form-control" data-price="94" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td>Small <br> Rs.30 </td>
        <td style="text-align: center;">
          <input type="text" class="mx-auto quantity form-control" data-price="30" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1"> 0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Backpack
document.getElementById('product-Backpack').addEventListener('click', () => {
  const title = "Backpack";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dry Clean <br> Rs.413</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="413" placeholder="0" min="0" maxlength="3" style="width: 50px;" onchange="updateRowTotal(this)">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1"> 0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>

`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Bedsheet
document.getElementById('product-Bedsheet').addEventListener('click', () => {
  const title = "Bedsheet";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Double - Dry Clean <br> Rs.177</td>
        <td style="text-align: center;">
          <input type="text" class="mx-auto quantity form-control" data-price="177" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td>Double - Steam Press <br> Rs.41</td>
        <td style="text-align: center;">
          <input type="text" class="mx-auto quantity form-control" data-price="41" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td>Double - Premium Steam Press <br> Rs.53</td>
        <td style="text-align: center;">
          <input type="text" class="mx-auto quantity form-control" data-price="53" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td>Single - Dry Clean <br> Rs.94</td>
        <td style="text-align: center;">
          <input type="text" class="mx-auto quantity form-control" data-price="94" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td>Single - Steam Press <br> Rs.35</td>
        <td style="text-align: center;">
          <input type="text" class="mx-auto quantity form-control" data-price="35" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td>Single - Premium Steam Press <br> Rs.53</td>
        <td style="text-align: center;">
          <input type="text" class="mx-auto quantity form-control" data-price="53" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1"> 0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Bathrobe
document.getElementById('product-Bathrobe').addEventListener('click', () => {
  const title = "Bathrobe";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Dry Clean <br> Rs.200</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="200" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1"> 0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Cap
document.getElementById('product-Cap').addEventListener('click', () => {
  const title = "Cap";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Dry Clean <br> Rs.70</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="70" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1"> 0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Carpet
document.getElementById('product-Carpet').addEventListener('click', () => {
  const title = "Carpet";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Dry Clean <br> Rs.153</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="153" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1"> 0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Cushion
document.getElementById('product-Cushion').addEventListener('click', () => {
  const title = "Cushion";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">All <br> Rs.413</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="413" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Cover <br> Rs.53</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="53" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1"> 0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-CurtainPanel
document.getElementById('product-CurtainPanel').addEventListener('click', () => {
  const title = "CurtainPanel";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">RollDown <br> Rs.206</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="206" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <!-- Other rows similar to RollDown -->
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1"> 0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Dhoti
document.getElementById('product-Dhoti').addEventListener('click', () => {
  const title = "Dhoti / Lungi";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Dhoti / Lungi <br> Rs.177</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="177" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <!-- Other rows similar to Dhoti -->
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1"> 0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Dupatta
document.getElementById('product-Dupatta').addEventListener('click', () => {
  const title = "Dupatta";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Fancy <br> Rs.135</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="135" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <!-- Other rows similar to Fancy Dupatta -->
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1"> 0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Dress
document.getElementById('product-Dress').addEventListener('click', () => {
  const title = "Dress";
  const content = `
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
          <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
          <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="white-space: nowrap;">Long - Dry Clean<br> Rs.118</td>
          <td style="text-align: center;">
            <input type="text" class="form-control quantity mx-auto" data-price="118" placeholder="0" min="0" maxlength="3" style="width: 50px;">
          </td>
          <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
        </tr>
        <tr>
          <td style="white-space: nowrap;">Long - Wash & Fold<br> Rs.35</td>
          <td style="text-align: center;">
            <input type="text" class="form-control quantity mx-auto" data-price="35" placeholder="0" min="0" maxlength="3" style="width: 50px;">
          </td>
          <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
        </tr>
        <tr>
          <td style="white-space: nowrap;">Long - Wash & Iron<br> Rs.47</td>
          <td style="text-align: center;">
            <input type="text" class="form-control quantity mx-auto" data-price="47" placeholder="0" min="0" maxlength="3" style="width: 50px;">
          </td>
          <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
        </tr>
        <tr>
          <td style="white-space: nowrap;">Long - Steam Press<br> Rs.17</td>
          <td style="text-align: center;">
            <input type="text" class="form-control quantity mx-auto" data-price="17" placeholder="0" min="0" maxlength="3" style="width: 50px;">
          </td>
          <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
        </tr>
        <tr>
          <td style="white-space: nowrap;">Short - Dry Clean<br> Rs.59</td>
          <td style="text-align: center;">
            <input type="text" class="form-control quantity mx-auto" data-price="59" placeholder="0" min="0" maxlength="3" style="width: 50px;">
          </td>
          <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
        </tr>
        <tr>
          <td style="white-space: nowrap;">Short - Wash & Fold<br> Rs.29</td>
          <td style="text-align: center;">
            <input type="text" class="form-control quantity mx-auto" data-price="29" placeholder="0" min="0" maxlength="3" style="width: 50px;">
          </td>
          <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
        </tr>
        <tr>
          <td style="white-space: nowrap;">Short - Wash & Iron<br> Rs.35</td>
          <td style="text-align: center;">
            <input type="text" class="form-control quantity mx-auto" data-price="35" placeholder="0" min="0" maxlength="3" style="width: 50px;">
          </td>
          <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
        </tr>
      </tbody>
    </table>
    <div class="text-right d-flex justify-content-between flex-md-row flex-column">
      <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
      <div style="width: fit-content; align-self: center;">
        <a href="https://wa.me/8220362015" 
           class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
           style="background-color: #470365; color: white;">
          <span class="m-0">Book Now</span>
          <i class="fa-solid fa-chevron-right ps-3"></i>
        </a>
      </div>
    </div>`;
  showModal(title, content);
});
// product-Dari
document.getElementById('product-Dari').addEventListener('click', () => {
  const title = "Dari";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Dari <br> Rs.23</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="23" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1"> 0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Frock
document.getElementById('product-Frock').addEventListener('click', () => {
  const title = "Frock";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Heavy <br> Rs.200</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="200" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Light <br> Rs.106</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="106" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Steam Press <br> Rs.15</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="15" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Gown
document.getElementById('product-Gown').addEventListener('click', () => {
  const title = "Gown / Anarkali";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Dry Clean <br> Rs.1020</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="1020" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Steam Press <br> Rs.70</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="70" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Premium Steam Press <br> Rs.118</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="118" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Gloves
document.getElementById('product-Gloves').addEventListener('click', () => {
  const title = "Gloves";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Dry Clean <br> Rs.53</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="53" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Hood
document.getElementById('product-Hood').addEventListener('click', () => {
  const title = "Hood";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Heavy <br> Rs.118</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="118" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Light <br> Rs.82</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="82" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Hat
document.getElementById('product-Hat').addEventListener('click', () => {
  const title = "Hat";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Dry Clean <br> Rs.90</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="90" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Jacket
document.getElementById('product-Jacket').addEventListener('click', () => {
  const title = "Jacket / Blazer";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Full <br> Rs.295</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="295" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Half <br> Rs.177</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="177" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <!-- Add similar rows for Heavy, Nehru, Rexine, and Leather -->
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Jeans
document.getElementById('product-Jeans').addEventListener('click', () => {
  const title = "Jeans";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Heavy <br> Rs.110</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="110" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Light <br> Rs.85</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="85" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <!-- Add similar rows for Wash & Fold, Wash & Iron, Steam press, and Premium Steam Press -->
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Kurta
document.getElementById('product-Kurta').addEventListener('click', () => {
  const title = "Kurta";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Fancy <br> Rs.135</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="135" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Heavy <br> Rs.188</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="188" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Plain <br> Rs.118</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="118" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Anarkali <br> Rs.590</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="590" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Laundry
document.getElementById('product-Laundry').addEventListener('click', () => {
  const title = "Laundry";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Wash & Fold <br> Rs.116</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="116" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Wash & Iron <br> Rs.153</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="153" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Premium Laundry <br> Rs.234</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="234" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Lehenga
document.getElementById('product-Lehenga').addEventListener('click', () => {
  const title = "Lehenga";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Light <br> Rs.342</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="342" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Bridal <br> Rs.590</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="590" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">BridalHeavy <br> Rs.1003</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="1003" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Muffler
document.getElementById('product-Muffler').addEventListener('click', () => {
  const title = "Muffler";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Muffler <br> Rs.94</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="94" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Mat
document.getElementById('product-Mat').addEventListener('click', () => {
  const title = "Mat";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Big <br> Rs.135</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="135" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Small <br> Rs.82</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="82" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Table <br> Rs.88</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="88" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Overcoat
document.getElementById('product-Overcoat').addEventListener('click', () => {
  const title = "Overcoat";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Kid <br> Rs.135</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="135" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Heavy <br> Rs.295</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="295" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Light <br> Rs.236</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="236" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Waist <br> Rs.141</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="141" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Overcoat <br> Rs.230</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="230" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Overcoat Long <br> Rs.342</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="342" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Pajama
document.getElementById('product-Pajama').addEventListener('click', () => {
  const title = "Pajama";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Pajama <br> Rs.106</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="106" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Wash & Iron <br> Rs.47/Kg</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="47" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Steam press <br> Rs.17</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="17" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Starching <br> Rs.23</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="23" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Purse
document.getElementById('product-Purse').addEventListener('click', () => {
  const title = "Purse";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Purse <br> Rs.200</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="200" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Pillow
document.getElementById('product-Pillow').addEventListener('click', () => {
  const title = "Pillow/Cushion";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Cover <br> Rs.41</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="41" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Large <br> Rs.295</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="295" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Small <br> Rs.117</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="117" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Extra Large <br> Rs.354</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="354" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-banana
document.getElementById('product-banana').addEventListener('click', () => {
  const title = "Quilt";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Heavy <br> Rs.531</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="531" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Double <br> Rs.448</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="448" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Medium <br> Rs.389</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="389" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Single <br> Rs.330</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="330" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Cover Double <br> Rs.472</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="472" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Cover Single <br> Rs.472</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="472" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Shirt
document.getElementById('product-Shirt').addEventListener('click', () => {
  const title = "Shirt";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Dry Clean <br> Rs.82</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="82" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Wash & Fold <br> Rs.35</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="35" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Wash & Iron <br> Rs.47</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="47" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Steam Press <br> Rs.17</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="17" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Premium Steam Press <br> Rs.23</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="23" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Starching <br> Rs.70</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="70" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Sherwani
document.getElementById('product-Sherwani').addEventListener('click', () => {
  const title = "Sherwani";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Dry Clean <br> Rs.1020</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="1020" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Steam Press <br> Rs.106</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="106" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Premium Steam Press <br> Rs.117</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="117" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Sweater
document.getElementById('product-Sweater').addEventListener('click', () => {
  const title = "Sweater";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Heavy <br> Rs.206</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="206" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Light <br> Rs.118</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="118" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Medium <br> Rs.147</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="147" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Shorts
document.getElementById('product-Shorts').addEventListener('click', () => {
  const title = "Shorts / Halfpant";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Dry Clean <br> Rs.70</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="70" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Wash & Fold <br> Rs.29</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="29" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Wash & Iron <br> Rs.35</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="35" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Steam Press <br> Rs.17</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="17" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Saree
document.getElementById('product-Saree').addEventListener('click', () => {
  const title = "Saree";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Fancy <br> Rs.330</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="330" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Heavy <br> Rs.295</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="295" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Plain <br> Rs.117</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="117" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Medium <br> Rs.206</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="206" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Stole
document.getElementById('product-Stole').addEventListener('click', () => {
  const title = "Stole";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Stole <br> Rs.94</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="94" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Salwar
document.getElementById('product-Salwar').addEventListener('click', () => {
  const title = "Salwar";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Dry Clean <br> Rs.118</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="118" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Wash & Iron <br> Rs.88</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="88" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Premium Steam Press <br> Rs.35</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="35" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Skirt
document.getElementById('product-Skirt').addEventListener('click', () => {
  const title = "Skirt";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Long <br> Rs.177</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="177" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Short <br> Rs.106</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="106" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Shawl
document.getElementById('product-Shawl').addEventListener('click', () => {
  const title = "Shawl";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Heavy <br> Rs.206</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="206" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Light <br> Rs.112</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="112" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Pashmina <br> Rs.324</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="324" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>
`;

  const titleColor = "#a10de0";
  showModal(title, content, titleColor);
});
// product-Sandal
document.getElementById('product-Sandal').addEventListener('click', () => {
  const title = "Sandal";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Fancy <br> Rs.330</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="330" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Normal <br> Rs.271</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="271" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>`;
  showModal(title, content);
});
// product-Shoes
document.getElementById('product-Shoes').addEventListener('click', () => {
  const title = "Shoes";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Boots <br> Rs.590</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="590" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Suede <br> Rs.590</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="590" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <!-- Add more rows as needed -->
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>`;
  showModal(title, content);
});
// product-Shirt+Trouser
document.getElementById('product-Shirt+Trouser').addEventListener('click', () => {
  const title = "Shirt & Trouser";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Shirt & Trouser <br> Rs.177</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="177" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>`;
  showModal(title, content);
});
// product-ShirtX5
document.getElementById('product-ShirtX5').addEventListener('click', () => {
  const title = "Shirt x 5";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Shirt x 5 <br> Rs.413</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="413" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>`;
  showModal(title, content);
});
// product-T-Shirt
document.getElementById('product-T-Shirt').addEventListener('click', () => {
  const title = "T-Shirt";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">T-Shirt <br> Rs.413</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="413" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>`;
  showModal(title, content);
});
// product-Trouser
document.getElementById('product-Trouser').addEventListener('click', () => {
  const title = "Trouser & Jeans";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Trouser & Jeans <br> Rs.177</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="177" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>`;
  showModal(title, content);
});
// product-Top
document.getElementById('product-Top').addEventListener('click', () => {
  const title = "Top / Kurti";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Top / Kurti <br> Rs.106</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="106" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Steam Press <br> Rs.17</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="17" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>`;
  showModal(title, content);
});
// product-Trolley
document.getElementById('product-Trolley').addEventListener('click', () => {
  const title = "Trolley";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Large <br> Rs.1014</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="1014" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Small <br> Rs.472</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="472" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Medium <br> Rs.743</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="743" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>`;
  showModal(title, content);
});
// product-Tie
document.getElementById('product-Tie').addEventListener('click', () => {
  const title = "Tie";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Tie <br> Rs.118</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="118" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>`;
  showModal(title, content);
});
// product-Toy
document.getElementById('product-Toy').addEventListener('click', () => {
  const title = "Toy";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Large <br> Rs.542</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="542" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Small <br> Rs.141</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="141" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Medium <br> Rs.271</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="271" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Extra Large <br> Rs.1062</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="1062" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>`;
  showModal(title, content);
});
// product-Towel
document.getElementById('product-Towel').addEventListener('click', () => {
  const title = "Towel";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Bath (Dry Clean)<br> Rs.135</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="135" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Bath (Steam Press)<br> Rs.10</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="10" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Hand (Dry Clean)<br> Rs.70</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="70" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>`;
  showModal(title, content);
});
// product-Table
document.getElementById('product-Table').addEventListener('click', () => {
  const title = "Table Cloth";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Table Cloth<br> Rs.118</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="118" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>`;
  showModal(title, content);
});
// product-Umbrella
document.getElementById('product-Umbrella').addEventListener('click', () => {
  const title = "Umbrella";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Umbrella<br> Rs.118</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="118" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>`;
  showModal(title, content);
});
// product-Vest
document.getElementById('product-Vest').addEventListener('click', () => {
  const title = "Vest";
  const content = `
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap;">Service</th>
        <th scope="col" class="text-white" style="width:10%; text-align: center;">Qty</th>
        <th scope="col" class="text-white" style="width:10%; white-space: nowrap; text-align: right;">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="white-space: nowrap;">Cotton<br> Rs.47</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="47" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;">Steam Press<br> Rs.17</td>
        <td style="text-align: center;">
          <input type="text" class="form-control quantity mx-auto" data-price="17" placeholder="0" min="0" maxlength="3" style="width: 50px;">
        </td>
        <td class="row-total" style="white-space: nowrap; text-align: right;">0</td>
      </tr>
    </tbody>
  </table>
  <div class="text-right d-flex justify-content-between flex-md-row flex-column">
    <p class="px-4 py-2 mb-0">Grand Total: Rs.<span id="grand-total" class="px-lg-1 mx-1">0</span></p>
    <div style="width: fit-content; align-self: center;">
      <a href="https://wa.me/8220362015" 
         class="text-decoration-none btn rounded-5 d-flex justify-content-around align-items-center book_now_btn px-4 py-2" 
         style="background-color: #470365; color: white;">
        <span class="m-0">Book Now</span>
        <i class="fa-solid fa-chevron-right ps-3"></i>
      </a>
    </div>
  </div>`;
  showModal(title, content);
});
function updateTotals(quantityInputs, rowTotals, grandTotalElement) {
  quantityInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      const price = parseFloat(input.dataset.price);
      const quantity = parseInt(input.value) || 0;

      // Update row total
      const rowTotal = price * quantity;
      rowTotals[index].textContent = rowTotal.toFixed(2);

      // Update grand total
      let grandTotal = 0;
      rowTotals.forEach(row => {
        grandTotal += parseFloat(row.textContent) || 0;
      });
      grandTotalElement.textContent = grandTotal.toFixed(2);

      // Highlight row and grand total if quantity input is active
      if (input.value > 0) {
        rowTotals[index].classList.add('highlight');
        grandTotalElement.classList.add('highlight');
      } else {
        rowTotals[index].classList.remove('highlight');
        grandTotalElement.classList.remove('highlight');
      }
    });
  });
}
function initializeProductEvent(productId, tableClass) {
  document.getElementById(productId).addEventListener('click', () => {
    const quantityInputs = document.querySelectorAll(`${tableClass} .quantity`);
    const rowTotals = document.querySelectorAll(`${tableClass} .row-total`);
    const grandTotalElement = document.getElementById('grand-total');

    updateTotals(quantityInputs, rowTotals, grandTotalElement);
  });
}
function updateTotals(quantityInputs, rowTotals, grandTotalElement) {
  quantityInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      const price = parseFloat(input.dataset.price);
      const quantity = parseInt(input.value) || 0;
      const rowTotal = price * quantity;
      rowTotals[index].textContent = rowTotal.toFixed(2);
      let grandTotal = 0;
      rowTotals.forEach(row => {
        grandTotal += parseFloat(row.textContent) || 0;
      });
      grandTotalElement.textContent = grandTotal.toFixed(2);
      if (input.value > 0) {
        rowTotals[index].classList.add('highlight');
        grandTotalElement.classList.add('highlight');
      } else {
        rowTotals[index].classList.remove('highlight');
        grandTotalElement.classList.remove('highlight');
      }
    });
  });
}
// Initialize products
initializeProductEvent('product-Blouse', '.table.table-bordered');
initializeProductEvent('product-Belt', '.table.table-bordered');
initializeProductEvent('product-Backpack', '.table.table-bordered');
initializeProductEvent('product-Bedsheet', '.table.table-bordered');
initializeProductEvent('product-Bathrobe', '.table.table-bordered');
initializeProductEvent('product-Cap', '.table.table-bordered');
initializeProductEvent('product-Carpet', '.table.table-bordered');
initializeProductEvent('product-Cushion', '.table.table-bordered');
initializeProductEvent('product-CurtainPanel', 'table.table-bordered');
initializeProductEvent('product-Dhoti', 'table.table-bordered');
initializeProductEvent('product-Dress', 'table.table-bordered');
initializeProductEvent('product-Dupatta', 'table.table-bordered');
initializeProductEvent('product-Dari', 'table.table-bordered');
initializeProductEvent('product-Frock', 'table.table-bordered');
initializeProductEvent('product-Gown', 'table.table-bordered');
initializeProductEvent('product-Gloves', 'table.table-bordered');
initializeProductEvent('product-Hood', 'table.table-bordered');
initializeProductEvent('product-Hat', 'table.table-bordered');
initializeProductEvent('product-Jacket', 'table.table-bordered');
initializeProductEvent('product-Jeans', 'table.table-bordered');
initializeProductEvent('product-Kurta', 'table.table-bordered');
initializeProductEvent('product-Laundry', 'table.table-bordered');
initializeProductEvent('product-Lehenga', 'table.table-bordered');
initializeProductEvent('product-Muffler', 'table.table-bordered');
initializeProductEvent('product-Mat', 'table.table-bordered');
initializeProductEvent('product-Overcoat', 'table.table-bordered');
initializeProductEvent('product-Pajama', 'table.table-bordered');
initializeProductEvent('product-Purse', 'table.table-bordered');
initializeProductEvent('product-Pillow', 'table.table-bordered');
initializeProductEvent('product-banana', 'table.table-bordered');
initializeProductEvent('product-Shirt', 'table.table-bordered');
initializeProductEvent('product-Sherwani', 'table.table-bordered');
initializeProductEvent('product-Sweater', 'table.table-bordered');
initializeProductEvent('product-Shorts', 'table.table-bordered');
initializeProductEvent('product-Saree', 'table.table-bordered');
initializeProductEvent('product-Stole', 'table.table-bordered');
initializeProductEvent('product-Salwar', 'table.table-bordered');
initializeProductEvent('product-Skirt', 'table.table-bordered');
initializeProductEvent('product-Shawl', 'table.table-bordered');
initializeProductEvent('product-Sandal', 'table.table-bordered');
initializeProductEvent('product-Shoes', 'table.table-bordered');
initializeProductEvent('product-Shirt+Trouser', 'table.table-bordered');
initializeProductEvent('product-ShirtX5', 'table.table-bordered');
initializeProductEvent('product-T-Shirt', 'table.table-bordered');
initializeProductEvent('product-Trouser', 'table.table-bordered');
initializeProductEvent('product-Top', 'table.table-bordered');
initializeProductEvent('product-Trolley', 'table.table-bordered');
initializeProductEvent('product-Tie', 'table.table-bordered');
initializeProductEvent('product-Toy', 'table.table-bordered');
initializeProductEvent('product-Towel', 'table.table-bordered');
initializeProductEvent('product-Table', 'table.table-bordered');
initializeProductEvent('product-Umbrella', 'table.table-bordered');
initializeProductEvent('product-Vest', 'table.table-bordered');

