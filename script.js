// Product catalogue. Replace demo images and affiliate URLs with the correct item-specific details before publishing.
const productsData = [
  { name: "Car Vacuum Cleaner", category: "automotive", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Car Vacuum Cleaner", category: "automotive", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Car Vacuum Cleaner", category: "automotive", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Tire Pressure Gauge", category: "automotive", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Tire Pressure Gauge", category: "automotive", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Tire Pressure Gauge", category: "automotive", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Oraimo Earbuds", category: "electronics", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Oraimo Earbuds", category: "electronics", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Oraimo Earbuds", category: "electronics", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Bluetooth Speaker", category: "electronics", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Bluetooth Speaker", category: "electronics", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Bluetooth Speaker", category: "electronics", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Smart Fitness Watch", category: "health", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Smart Fitness Watch", category: "health", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Smart Fitness Watch", category: "health", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Portable Massager", category: "health", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Portable Massager", category: "health", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Portable Massager", category: "health", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Mini Blender", category: "home appliances", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Mini Blender", category: "home appliances", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Mini Blender", category: "home appliances", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Air Fryer", category: "home appliances", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Air Fryer", category: "home appliances", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Air Fryer", category: "home appliances", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Pet Grooming Kit", category: "pets", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Pet Grooming Kit", category: "pets", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Pet Grooming Kit", category: "pets", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Automatic Pet Feeder", category: "pets", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Automatic Pet Feeder", category: "pets", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
  { name: "Automatic Pet Feeder", category: "pets", image: "images/Echo-Dot-Max.jpg", link: "https://amzn.asia/d/0iRgKdVK" },
];

document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("productList");
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const resultsStatus = document.getElementById("resultsStatus");
  const categoryButtons = document.querySelectorAll("[data-category]");

  // The script is shared by every page, so only initialize store features on the store page.
  document.querySelectorAll(".copyright-year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
  if (!productList) return;

  let currentCategory = "all";
  let currentQuery = "";

  function renderProducts() {
    const filtered = productsData.filter((product) => {
      const matchesCategory = currentCategory === "all" || product.category === currentCategory;
      const matchesSearch = product.name.toLocaleLowerCase().includes(currentQuery);
      return matchesCategory && matchesSearch;
    });

    productList.replaceChildren();
    if (resultsStatus) {
      resultsStatus.textContent = `${filtered.length} product${filtered.length === 1 ? "" : "s"} found`;
    }

    if (filtered.length === 0) {
      const emptyMessage = document.createElement("p");
      emptyMessage.className = "empty-state";
      emptyMessage.textContent = "No products found. Try another search or category.";
      productList.appendChild(emptyMessage);
      return;
    }

    filtered.forEach((product) => {
      // Use the anchor itself as the grid card so the whole card is natively clickable.
      const card = document.createElement("a");
      card.className = "product-card product-link";
      card.href = product.link && product.link.trim() ? product.link : "#";
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.setAttribute("aria-label", `Open ${product.name}`);
      if (!product.link || !product.link.trim()) {
        card.addEventListener("click", (event) => event.preventDefault());
      }

      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name;
      image.loading = "lazy";
      image.onerror = () => {
        image.onerror = null;
        image.src = "icons/logo.svg";
        image.classList.add("image-fallback");
      };

      const title = document.createElement("p");
      title.textContent = product.name;

      card.append(image, title);
      productList.appendChild(card);
    });
  }

  function updateCategoryButtons() {
    categoryButtons.forEach((button) => {
      const isActive = button.dataset.category === currentCategory;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentCategory = button.dataset.category || "all";
      currentQuery = "";
      if (searchInput) searchInput.value = "";
      updateCategoryButtons();
      renderProducts();
    });
  });

  function searchProducts() {
    currentQuery = searchInput ? searchInput.value.trim().toLocaleLowerCase() : "";
    currentCategory = "all";
    updateCategoryButtons();
    renderProducts();
  }

  if (searchButton) searchButton.addEventListener("click", searchProducts);
  if (searchInput) {
    searchInput.addEventListener("input", searchProducts);
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") searchProducts();
    });
  }

  updateCategoryButtons();
  renderProducts();
});
