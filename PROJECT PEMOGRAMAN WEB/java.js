document.getElementById("kontakForm").onsubmit = function(e) {
  e.preventDefault(); 

  let nama = document.querySelector("[name='nama']").value;
  let email = document.querySelector("[name='email']").value;
  let kampus = document.querySelector("[name='kampus']").value;
  let alasan = document.querySelector("[name='alasan']").value;

  if (!nama || !email || !kampus || !alasan) {
    alert("Harap isi semua kolom!");
  } else {
    alert("Formulir berhasil dikirim!");
    document.getElementById("kontakForm").reset();
  }
};
