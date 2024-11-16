function showModal(imageId) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalDescription = document.getElementById('modal-description');

    // Изменяем картинку и описание в зависимости от выбранного изображения
    if (imageId === 'img1') {
        modalImg.src = "https://via.placeholder.com/600x400/FFB6C1/000000?text=Любовь+1";
        modalDescription.innerText = "Я тебя люблю очень сильно!";
    } else if (imageId === 'img2') {
        modalImg.src = "https://via.placeholder.com/600x400/FF69B4/000000?text=Любовь+2";
        modalDescription.innerText = "Ты как новый смысл жизни!";
    } else if (imageId === 'img3') {
        modalImg.src = "https://via.placeholder.com/600x400/FF1493/000000?text=Любовь+3";
        modalDescription.innerText = "Я хуй знает че тут писать, но я люблю тебя <3";
    } else if (imageId === 'img4') {
        modalImg.src = "https://via.placeholder.com/600x400/FFC0CB/000000?text=Любовь+4";
        modalDescription.innerText = "Ты самый теплый солнечный свет в эти зимние дни!";
    }

    // Показываем модальное окно с эффектом
    modal.style.display = 'flex';
    modal.style.opacity = 1;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    modal.style.opacity = 0;
}
