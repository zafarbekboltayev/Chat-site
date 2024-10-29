// Saqlangan ma'lumotlarni yuklash
window.onload = function() {
    const output = document.getElementById('output');
    const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    const savedLinks = JSON.parse(localStorage.getItem('links')) || [];

    savedMessages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        output.appendChild(messageDiv);
    });

    savedLinks.forEach(link => {
        const linkDiv = document.createElement('div');
        const a = document.createElement('a');
        a.href = link;
        a.textContent = link;
        a.target = "_blank";
        linkDiv.appendChild(a);
        output.appendChild(linkDiv);
    });
};

document.getElementById('uploadBtn').addEventListener('click', function() {
    const input = document.getElementById('fileInput');
    const output = document.getElementById('output');

    for (const file of input.files) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const media = document.createElement('div');
            if (file.type.startsWith('image/')) {
                media.innerHTML = `<img src="${e.target.result}" alt="${file.name}" style="max-width:100%; height:auto;">`;
            } else if (file.type.startsWith('video/')) {
                media.innerHTML = `<video controls style="max-width:100%; height:auto;"><source src="${e.target.result}" type="${file.type}">Videoni ko'rish mumkin emas.</video>`;
            }
            output.appendChild(media);

            // Rasm/video URLini saqlash
            const savedMedia = JSON.parse(localStorage.getItem('media')) || [];
            savedMedia.push(e.target.result);
            localStorage.setItem('media', JSON.stringify(savedMedia));
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('sendMessageBtn').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const output = document.getElementById('output');
    
    const messageDiv = document.createElement('div');
    messageDiv.textContent = messageInput.value;
    output.appendChild(messageDiv);
    
    // Xabarni saqlash
    const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    savedMessages.push(messageInput.value);
    localStorage.setItem('messages', JSON.stringify(savedMessages));

    messageInput.value = '';
});

// Havola qo'shish funksiyasi
document.getElementById('addLinkBtn').addEventListener('click', function() {
    const linkInput = document.getElementById('linkInput');
    const output = document.getElementById('output');
    
    const linkDiv = document.createElement('div');
    const link = document.createElement('a');
    link.href = linkInput.value;
    link.textContent = linkInput.value;
    link.target = "_blank"; // Havola yangi tabda ochiladi
    linkDiv.appendChild(link);
    output.appendChild(linkDiv);
    
    // Havolani saqlash
    const savedLinks = JSON.parse(localStorage.getItem('links')) || [];
    savedLinks.push(linkInput.value);
    localStorage.setItem('links', JSON.stringify(savedLinks));

    linkInput.value = '';
});
