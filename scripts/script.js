const products = [
    { id: "p1", name: "Smartphone X" },
    { id: "p2", name: "Laptop Y" },
    { id: "p3", name: "Headphones Z" },
    { id: "p4", name: "Smartwatch W" }
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
