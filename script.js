document.addEventListener('DOMContentLoaded', function () {
    // Fungsi untuk menutup post
    const closeButtons = document.querySelectorAll('.close-post');
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const post = this.closest('.post');
            post.style.display = 'none';
        });
    });

    // Fungsi pencarian
    const searchSection = document.querySelector('.search-bar input');
    searchSection.addEventListener('input', function () {
        console.log(`Kata kunci pencarian: ${this.value}`);
    });

    // Fungsi untuk "Ikuti" klik
    const followButtons = document.querySelectorAll('.follow');
    followButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Anda mengklik Ikuti');
        });
    });
});


// message

