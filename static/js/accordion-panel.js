const mainIcon = document.querySelector('.icon');
    const accordion = document.getElementById('cart-accordion');

    function toggleInfo() {
      if (!mainIcon || !accordion) return;
      mainIcon.classList.toggle('active');
      accordion.classList.toggle('active');
      const isExpanded = mainIcon.classList.contains('active');
      mainIcon.setAttribute('aria-expanded', isExpanded);
    }

    function closeAccordion(event) {
      event.preventDefault();
      if (mainIcon && accordion && accordion.classList.contains('active')) {
        mainIcon.classList.remove('active');
        accordion.classList.remove('active');
        mainIcon.setAttribute('aria-expanded', 'false');
      }
      setTimeout(() => {
        const targetId = event.currentTarget.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 400);
    }

function closeAccordion(event) {
    event.preventDefault(); // Mencegah aksi default (navigasi langsung)
    const accordion = document.getElementById('cart-accordion');

    // Hapus class "active" untuk menutup accordion
    if (accordion.classList.contains('active')) {
        accordion.classList.remove('active');
    }

    // Tunggu transisi selesai sebelum menggulir
    setTimeout(() => {
        const target = document.querySelector('#list_h1');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 400); // Sesuai dengan durasi transisi di CSS (0.4s)
}


function togglePanel(button) {
    const panel = button.nextElementSibling;
    panel.classList.toggle('open');
}


function togglePanel(button) {
    const panel = button.nextElementSibling;
    panel.classList.toggle('open'); // Mengubah kelas panel

    const icon = button.querySelector('.accordion-icon');
    if (panel.classList.contains('open')) {
        icon.style.transform = 'rotate(180deg)'; // Rotasi panah ke atas
    } else {
        icon.style.transform = 'rotate(0deg)'; // Kembali ke posisi default
    }
}
