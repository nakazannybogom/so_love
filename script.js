function showModal(imageId) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalDescription = document.getElementById('modal-description');

    // Изменяем картинку и описание в зависимости от выбранного изображения
    if (imageId === 'img1') {
        modalImg.src = "photo_2024-11-17_00-14-52.jpg";
        modalDescription.innerText = "Я тебя люблю очень сильно!";
    } else if (imageId === 'img2') {
        modalImg.src = "photo_2024-11-17_00-14-54.jpg";
        modalDescription.innerText = "Ты как новый смысл жизни!";
    } else if (imageId === 'img3') {
        modalImg.src = "photo_2024-11-17_00-14-55.jpg";
        modalDescription.innerText = "Я хуй знает че тут писать, но я люблю тебя <3";
    } else if (imageId === 'img4') {
        modalImg.src = "photo_2024-11-17_00-14-56.jpg";
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
