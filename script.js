function validateForm() {
    // Dapatkan nilai input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Validasi input
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Semua kolom harus diisi.');
        return false; // Form tidak akan disubmit
    } else if (!isValidEmail(email)) {
        alert('Email tidak valid.');
        return false; // Form tidak akan disubmit
    } else {
        // Semua validasi terpenuhi, form akan disubmit
        return true;
    }
}

function isValidEmail(email) {
    // Validasi email menggunakan ekspresi reguler
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
