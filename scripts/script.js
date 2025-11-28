const products = [
    { id: "p1", name: "Smartphones" },
    { id: "p2", name: "Laptops" },
    { id: "p3", name: "Headphones" },
    { id: "p4", name: "Smartwatches" }
];

window.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});
