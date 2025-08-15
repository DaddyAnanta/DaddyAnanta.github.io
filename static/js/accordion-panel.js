const mainIcon = document.querySelector('.icon-hamberger');
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
}// ==================================================================
  // === 2. FUNGSI UNTUK MENUTUP ACCORDION SAAT LINK DIKLIK ===
  // ==================================================================
  function closeAccordionOnLinkClick(event) {
    if (hamburgerButton && accordionMenu && accordionMenu.classList.contains('active')) {
      const targetHref = event.currentTarget.getAttribute('href');
      
      // Hanya cegah aksi default jika link adalah anchor (#) untuk scroll halus
      if (targetHref && targetHref.startsWith('#')) {
        event.preventDefault();
      } else {
        // Jika link eksternal (misal: Github), biarkan browser berjalan
        return;
      }

      // Mulai proses penutupan menu
      hamburgerButton.classList.remove('active');
      accordionMenu.classList.remove('active');
      hamburgerButton.setAttribute('aria-expanded', 'false');
      
      // Tunggu animasi selesai, LALU scroll ke tujuan
      setTimeout(() => {
        const targetElement = document.querySelector(targetHref);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 400); // Sesuaikan dengan durasi transisi CSS Anda
    }
  }

  accordionLinks.forEach(link => {
    link.addEventListener('click', closeAccordionOnLinkClick);
  });

  // ==================================================================
  // === 3. FUNGSI UNTUK MEMBUKA/MENUTUP PANEL DI DALAM ACCORDION (PERBAIKAN) ===
  // ==================================================================
  function togglePanel(button) {
    const panel = button.nextElementSibling;
    const icon = button.querySelector('.accordion-icon');
    
    if (panel) {
      panel.classList.toggle('open');
      
      if (panel.classList.contains('open')) {
        if (icon) icon.style.transform = 'rotate(180deg)';
      } else {
        if (icon) icon.style.transform = 'rotate(0deg)';
      }
    }
  }

  // Menghubungkan fungsi togglePanel ke setiap tombol .accordion-button
  panelButtons.forEach(button => {
    button.addEventListener('click', function() {
      togglePanel(this);
    });
  });

