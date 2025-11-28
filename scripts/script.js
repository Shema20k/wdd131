const products = [
    { id: "p1", name: "Smartphones " },
    { id: "p2", name: "Laptops" },
    { id: "p3", name: "Headphones" },
    { id: "p4", name: "Smartwatches" },
    { id: "p5", name: "Tablets" },
    { id: "p6", name: "Cameras" },
    { id: "p7", name: "Printers" },
    { id: "p8", name: "Monitors" },
    { id: "p9", name: "Keyboards" },
    { id: "p10", name: "Mouse" }
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
