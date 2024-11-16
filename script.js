function showModal(imageId) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalDescription = document.getElementById('modal-description');

    // Изменяем картинку и описание в зависимости от выбранного изображения
    if (imageId === 'img1') {
        modalImg.src = "https://via.placeholder.com/600x400/FFB6C1/000000?text=Любовь+1";
        modalDescription.innerText = "Нежность и забота — главные составляющие любви.";
    } else if (imageId === 'img2') {
        modalImg.src = "https://via.placeholder.com/600x400/FF69B4/000000?text=Любовь+2";
        modalDescription.innerText = "Взаимная поддержка и доверие — важные элементы настоящих отношений.";
    } else if (imageId === 'img3') {
        modalImg.src = "https://via.placeholder.com/600x400/FF1493/000000?text=Любовь+3";
        modalDescription.innerText = "Любовь — это когда два сердца бьются в унисон.";
    } else if (imageId === 'img4') {
        modalImg.src = "https://via.placeholder.com/600x400/FFC0CB/000000?text=Любовь+4";
        modalDescription.innerText = "Любовь — это свет, который согревает в самые холодные дни.";
    }

    // Показываем модальное окно
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
