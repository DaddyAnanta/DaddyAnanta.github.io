document.addEventListener('DOMContentLoaded', () => {
    // Cari semua elemen <pre> yang memiliki anak <code> dengan class 'language-*'
    const codeBlocks = document.querySelectorAll('pre > code[class*="language-"]');

    codeBlocks.forEach((codeElement) => {
        const preElement = codeElement.parentElement;

        // 1. Lebih robust dalam mendeteksi bahasa
        const languageClass = Array.from(codeElement.classList).find(cls => cls.startsWith('language-')) || '';
        const languageName = languageClass.replace('language-', '');

        // Buat container untuk header
        const header = document.createElement('div');
        // Kita bisa langsung memberinya class jika sudah didefinisikan di CSS
        // header.className = 'code-header'; 

        // Buat label bahasa (hanya jika bahasa terdeteksi)
        if (languageName) {
            const languageLabel = document.createElement('span');
            languageLabel.className = 'language-label';
            languageLabel.textContent = languageName;
            header.appendChild(languageLabel);
        }

        // Buat tombol "Copy"
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'Copy';
        
        copyButton.addEventListener('click', () => {
            // Cek jika API clipboard didukung oleh browser
            if (!navigator.clipboard) {
                console.error('Clipboard API not available.');
                return;
            }
            navigator.clipboard.writeText(codeElement.textContent).then(() => {
                copyButton.textContent = 'Copied!';
                copyButton.classList.add('copied'); // Tambah class untuk styling (opsional)
                
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                    copyButton.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
        
        header.appendChild(copyButton);

        // 2. Cara yang lebih sederhana untuk menyisipkan header
        preElement.prepend(header);
    });
});

