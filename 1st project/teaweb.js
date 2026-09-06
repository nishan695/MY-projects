/* =========================================
   CHAAYAA SHOPPING CART
========================================= */

let cart = [];


/* ================= ELEMENTS ================= */

const cartButton = document.getElementById("cart-button");

const closeCartButton =
    document.getElementById("close-cart");

const cartDrawer =
    document.getElementById("cart-drawer");

const cartOverlay =
    document.getElementById("cart-overlay");

const cartItems =
    document.getElementById("cart-items");

const cartCount =
    document.getElementById("cart-count");

const cartTotal =
    document.getElementById("cart-total");

const addButtons =
    document.querySelectorAll(".add-button");


/* ================= OPEN CART ================= */

function openCart() {

    cartDrawer.classList.add("open");

    cartOverlay.classList.add("open");

    document.body.classList.add("no-scroll");
}


/* ================= CLOSE CART ================= */

function closeCart() {

    cartDrawer.classList.remove("open");

    cartOverlay.classList.remove("open");

    document.body.classList.remove("no-scroll");
}


/* ================= ADD TO CART ================= */

function addToCart(name, price) {

    const existingProduct =
        cart.find(product => product.name === name);


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            name: name,

            price: price,

            quantity: 1

        });

    }


    updateCart();

    openCart();
}


/* ================= UPDATE CART ================= */

function updateCart() {

    cartItems.innerHTML = "";

    let totalItems = 0;

    let totalPrice = 0;


    /* EMPTY CART */

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add some delicious tea to get started.
                </p>

            </div>

        `;

        cartCount.textContent = "0";

        cartTotal.textContent = "Rs. 0";

        return;
    }


    /* CART PRODUCTS */

    cart.forEach((product, index) => {

        totalItems += product.quantity;

        totalPrice +=
            product.price * product.quantity;


        cartItems.innerHTML += `

            <div class="cart-item">

                <div class="cart-item-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                </div>


                <div class="cart-item-info">

                    <h4>
                        ${product.name}
                    </h4>

                    <p>
                        Rs. ${product.price}
                    </p>


                    <div class="quantity">

                        <button
                            onclick="decreaseQuantity(${index})"
                        >
                            −
                        </button>


                        <span>
                            ${product.quantity}
                        </span>


                        <button
                            onclick="increaseQuantity(${index})"
                        >
                            +
                        </button>

                    </div>

                </div>


                <button
                    class="remove-item"
                    onclick="removeProduct(${index})"
                >
                    ×
                </button>

            </div>

        `;
    });


    cartCount.textContent = totalItems;

    cartTotal.textContent =
        "Rs. " + totalPrice;
}


/* ================= INCREASE ================= */

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();
}


/* ================= DECREASE ================= */

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    updateCart();
}


/* ================= REMOVE ================= */

function removeProduct(index) {

    cart.splice(index, 1);

    updateCart();
}


/* ================= ADD BUTTONS ================= */

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        const name =
            button.dataset.name;

        const price =
            Number(button.dataset.price);


        /* FIND PRODUCT IMAGE */

        const productCard =
            button.closest(".product-card");

        const image =
            productCard.querySelector("img").src;


        /* CHECK EXISTING */

        const existingProduct =
            cart.find(product => product.name === name);


        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push({

                name: name,

                price: price,

                quantity: 1,

                image: image

            });

        }


        updateCart();

        openCart();

    });

});


/* ================= CART EVENTS ================= */

cartButton.addEventListener(
    "click",
    openCart
);


closeCartButton.addEventListener(
    "click",
    closeCart
);
cartOverlay.addEventListener(
    "click",
    closeCart
);
/* ================= ESC KEY ================= */
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeCart();
    }
});
/*SEARCH*/
const searchInput =
    document.getElementById("search-input");

const productCards =
    document.querySelectorAll(".product-card");


searchInput.addEventListener("input", () => {
    const search = searchInput.value.toLowerCase();
    productCards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        if (name.includes(search)) {

            card.classList.remove("hidden");

        } else {

            card.classList.add("hidden");

        }

    });

});
/*CATEGORY FILTER*/
const filterButtons =
    document.querySelectorAll(".filter");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* REMOVE ACTIVE */

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        /* ADD ACTIVE */

        button.classList.add("active");
        const category = button.dataset.category;
        productCards.forEach(card => {
            const productCategory =
                card.dataset.category;
            if (
                category === "all" ||
                productCategory === category
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    });
});
/* WISHLIST */
const wishlistButtons =
    document.querySelectorAll(".wishlist");

wishlistButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "♡") {
            button.textContent = "♥";
            button.style.color = "#b98b3e";
        } else {
            button.textContent = "♡";
            button.style.color = "";
        }
    });
});
/*INITIALIZE*/
updateCart();