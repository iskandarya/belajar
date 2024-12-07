// Menangani pengiriman formulir
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah reload halaman

  // Ambil elemen formulir
  const form = e.target;

  // Ambil data dari formulir
  const formData = new FormData(form);

  // Kirim data dengan fetch API
  fetch("contact.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text()) // Mengubah respons menjadi teks
    .then((data) => {
      // Tampilkan pesan sukses atau gagal
      const messageDiv = document.querySelector(".form-message");
      messageDiv.textContent = data; // Tampilkan pesan dari PHP
      messageDiv.style.display = "block"; // Tampilkan div pesan
      form.reset(); // Reset formulir jika berhasil
    })
    .catch((error) => {
      // Tangani jika terjadi kesalahan
      console.error("Terjadi kesalahan:", error);
      const messageDiv = document.querySelector(".form-message");
      messageDiv.textContent = "Terjadi kesalahan. Silakan coba lagi.";
      messageDiv.style.display = "block";
    });
});
