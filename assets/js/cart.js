document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // 渲染購物車
    function renderCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const subtotal = item.price * item.quantity;
            total += subtotal;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.size}</td>
                <td>
                    <button class="decrement" data-index="${index}">-</button>
                    ${item.quantity}
                    <button class="increment" data-index="${index}">+</button>
                </td>
                <td>${item.price}$</td>
                <td>${subtotal}$</td>
                <td><button class="remove" data-index="${index}">移除</button></td>
            `;
            cartItemsContainer.appendChild(row);
        });

        totalPriceElement.textContent = `${total}$`;
    }

    // 刪除資料
    cartItemsContainer.addEventListener('click', (e) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (e.target.classList.contains('increment')) {
            const index = e.target.dataset.index;
            cart[index].quantity += 1;
        } else if (e.target.classList.contains('decrement')) {
            const index = e.target.dataset.index;
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            }
        } else if (e.target.classList.contains('remove')) {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    });

    renderCart();
});