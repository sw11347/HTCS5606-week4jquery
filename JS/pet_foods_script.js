function add_to_cart(e) {
    cart = document.getElementById("cart_div");
    switch (e.id) {
        case "add_dog_food":
            qty = document.getElementById("dog_food_quantity").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Dog Food:<input type="number" class="cart_input" id = "cart_dog" pName = "dog_Food" price="6.50" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 6.5)
                    + '</p>');
            break;
        case "add_saddle":
            qty = document.getElementById("saddle_quantity").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Saddle:<input type="number" class="cart_input" id = "cart_saddle" pName = "saddle" price="49.99" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 49.99)
                    + '</p>');
            break;
        case "add_toys":
            qty = document.getElementById("toys_quantity").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Toys:<input type="number" class="cart_input" id = "cart_toys" pName = "pet_toys" price="14.99" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 14.99)
                    + '</p>');
            break;
        // code block
    }

}