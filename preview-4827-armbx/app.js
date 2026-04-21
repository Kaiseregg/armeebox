
async function saveProducts() {
  const products = [];

  document.querySelectorAll(".slot").forEach(slot => {
    products.push({
      id: slot.dataset.id,
      name: slot.querySelector(".name").value,
      price: parseFloat(slot.querySelector(".price").value),
      active: slot.querySelector(".active").checked
    });
  });

  const res = await fetch("/.netlify/functions/admin-api", {
    method: "POST",
    body: JSON.stringify({ action: "products-save", payload: products })
  });

  alert("Gespeichert!");
}
