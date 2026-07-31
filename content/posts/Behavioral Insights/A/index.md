+++
title = 'Contoh'
date = 2025-02-01T21:37:16+07:00
draft = false
description = ""
image = "1.webp"
imageBig= "1.webp"
categories= ["Civil Engineering"]
tags = ["Heuristic Bias"]
authors= ["Daddy Ananta"]
avatar="/images/profil.jpeg"
+++

## Mengapa Player Judi Online Susah Berhenti? Jawabannya Ada di Otak Kita

<!-- Elemen Canvas dengan sedikit styling inline agar responsif -->
<canvas id="circuitCanvas" style="width: 100%; height: 400px; background-color: #0f172a; border-radius: 8px; cursor: crosshair; display: block; box-shadow: 0 4px 6px rgba(0,0,0,0.3);"></canvas>

<script>
// Membungkus dalam IIFE agar variabel tidak bocor ke global window
(function() {
  const canvas = document.getElementById('circuitCanvas');
  const ctx = canvas.getContext('2d');

  // Membuat ukuran canvas responsif mengikuti elemen parent
  function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas(); // Panggil sekali saat pertama load

  let particles = [];
  const numParticles = 60; // Jumlah titik sirkuit
  const maxDistance = 100; // Jarak maksimal antar titik untuk saling terhubung
  
  // Objek untuk melacak posisi mouse
  const mouse = { x: null, y: null, radius: 120 };

  // Event Listener Interaksi Mouse
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Kelas (Class) untuk membuat titik sirkuit (partikel)
  class Node {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      // Kecepatan gerak acak
      this.vx = (Math.random() - 0.5) * 1.5; 
      this.vy = (Math.random() - 0.5) * 1.5;
      this.radius = Math.random() * 2 + 1.5;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Pantulkan jika menyentuh dinding canvas
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#38bdf8'; // Warna titik (cyan/biru muda)
      ctx.fill();
    }
  }

  // Mengisi array partikel
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Node());
  }

  // Fungsi Animasi Utama
  function animate() {
    // Bersihkan frame sebelumnya
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      
      // Gambar garis sirkuit antar titik
      for (let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          // Opasitas garis menurun berdasarkan jarak
          const opacity = 1 - (distance / maxDistance);
          ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      
      // Interaksi dengan Mouse (Sambungan Laser)
      if (mouse.x !== null) {
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          const opacity = 1 - (distance / mouse.radius);
          // Warna garis ke mouse dibedakan (misal hijau/kuning neon)
          ctx.strokeStyle = `rgba(163, 230, 53, ${opacity})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }
    }
    // Loop animasi
    requestAnimationFrame(animate);
  }

  // Jalankan animasi
  animate();
})();
</script>
