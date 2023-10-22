function validateForm() {
    // Dapatkan nilai input
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');

    // Validasi input


    if(name.value == "") {
        alert("Nama harus diisi!");
        name.placeholder = "mohon isi nama"
        name.focus();
        return false;
    }

    if(email.value == "") {
        alert("Email harus diisi!");
        email.placeholder = "mohon isi email";
        email.focus();
        return false;
    }

    if(!isValidEmail(email.value)) {
        alert("Alamat Email tidak valid!");
        email.placeholder = "mohon isi alamat email dengan benar";
        email.focus();
        return false;
    }

    if(subject.value = "") {
        alert("Subjek harus diisi!");
        subject.placeholder = "mohon isi subjek"
        subject.focus();
        return false;
    }

    if(message == "") {
        alert("Pesan harus diisi!");
        message.focus();
        return false;
    }


}

function isValidEmail(email) {
    // Validasi email menggunakan ekspresi reguler
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

