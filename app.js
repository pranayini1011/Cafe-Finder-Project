async function loadCafes() {
    try {
        const response = await fetch("cafes.json");
        const cafes = await response.json();

        const container = document.getElementById("cafes-container");
        container.innerHTML = "";

        cafes.forEach(cafe => {
            const card = document.createElement("div");
            card.className = "cafe-card";

            // Encode the address for URL
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafe.address)}`;

            card.innerHTML = `
        <a href="${mapsUrl}" target="_blank" style="text-decoration:none; color:inherit;">
          <img src="${cafe.photo}" alt="${cafe.name}">
          <h2>${cafe.name}</h2>
          <p>📍 ${cafe.address}</p>
          <p>⭐ Rating: ${cafe.rating}</p>
        </a>
      `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading cafes:", error);
    }
}

loadCafes();
