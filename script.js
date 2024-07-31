document.addEventListener('DOMContentLoaded', () => {
    const moviesContainer = document.getElementById('movies-container');
    const searchInput = document.getElementById('search');
    const noMatch = document.getElementById('no-match');
    const modal = document.getElementById('movie-modal');
    const modalContent = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close');
    const howToDownloadImg = document.getElementById('how-to-download-img');
    const howToDownloadModal = document.getElementById('how-to-download-modal');
    const howToDownloadClose = howToDownloadModal.querySelector('.close');

    const movies = [
        {
            name: "mr. & mrs. mahi",
            embed: "https://www.youtube.com/embed/vB7OiVfmEDM?si=d_Wl2Bx9-zR-Eer9",
            download: "https://hubcloud.lol/drive/1jmvzms8fub8jz9",
            image: "mr.$mrs.mahi.jpg"
        },
        {
            name: "naa saami ranga",
            embed: "https://www.youtube.com/embed/9UGStW2RSYE?si=2_kHwQUpCw6vI2OV",
            download: "https://hubcloud.lol/drive/1qhml4zdnfwr5qq",
            image: "naa sammi ranga.jpg"
        },
        {
            name: "maidaan",
            embed: "https://www.youtube.com/embed/pKaTkIx3VYY?si=iWon3oLeX6WiVcI0",
            download: "https://hubcloud.lol/drive/5azemz6zrnearoa",
            image: "maidaan.jpg"
        },
        {
            name: "antony",
            embed: "https://www.youtube.com/embed/ZE8OIPadmGA?si=Jz__RyzmGYR3mnX-",
            download: "https://hubcloud.lol/drive/yzskzgkztysyisg",
            image: "antony.jpg"
        },
        {
            name: "chandu champion",
            embed: "https://www.youtube.com/embed/IHQQK_Wn5DM?si=15CH9exTYM2igiBa",
            download: "https://hubcloud.lol/drive/vcuvdakr5t5uukz",
            image: "chandu champion.jpg"
        },
        {
            name: "the family star",
            embed: "https://www.youtube.com/embed/jWVbxd80oyc?si=cvVqH_u2F2Djfxov",
            download: "https://hubcloud.lol/drive/h1zoevxuz08z4o5",
            image: "family star.jpg"
        },
        {
            name: "sarfira",
            embed: "https://www.youtube.com/embed/8Iy2geJD8HY?si=IsBHuonCMTR3QTay",
            download: "https://hubcloud.lol/drive/fy2gl3grsstp22a",
            image: "sarfira.jpg"
        },
        {
            name: "savi",
            embed: "https://www.youtube.com/embed/rfXW2Sk67WE?si=eGbsAUu2tFpSvYcN",
            download: "https://hubcloud.lol/drive/7xg9xjj5bcsibxx",
            image: "savi.jpg"
        },
        {
            name: "the garfield movie",
            embed: "https://www.youtube.com/embed/S3XjsSvwSuU?si=Tey8_s9Ke8_4U3sX",
            download: "https://hubcloud.lol/drive/iycop05xvv5mcqp",
            image: "garfield.jpg"
        },
        {
            name: "kill",
            embed: "https://www.youtube.com/embed/y2HZqeVeBNc?si=IZEahIclsdZ38J-Y",
            download: "https://hubcloud.lol/drive/e6orzro6sh3na36",
            image: "kill.jpg"
        },
        {
            name: "Aavesham",
            embed: "https://www.youtube.com/embed/UttccYQXpTM?si=HUmXTDZLH5PGnUU-",
            download: "https://hubcloud.lol/drive/0mpfyjazk9qg0lu",
            image: "Aavesham.jpg"
        },
        {
            name: "Dange",
            embed: "https://www.youtube.com/embed/Q6gY245rQ0Y?si=hrVLkKJYzGCJi6H-",
            download: "https://hubcloud.lol/drive/hhhwj2ktmuybzjs",
            image: "dange.jpg"
        },
        {
            name: "Kaalki",
            embed: "https://www.youtube.com/embed/BfCIPsEGAS8?si=oExavc7wUejjyfAu",
            download: "https://hubcloud.lol/drive/91bghodrlhr0tj7",
            image: "kalki.jpg"
        },
        {
            name: "Naadu",
            embed: "https://www.youtube.com/embed/5SdLbTaUErU?si=Hb-aFB0uxOvoxMyV",
            download: "https://hubcloud.lol/drive/sxvbrxmjm1qxhxb",
            image: "naadu.jpg"
        },
        {
            name: "Saindhav",
            embed: "https://www.youtube.com/embed/SMmY5TjoEQ0?si=NBNj8m5yDMWAEH4Z",
            download: "https://hubcloud.lol/drive/4dg_sdqtg_tywfd",
            image: "saindhav.jpg"
        },
        {
            name: "Shaitaan",
            embed: "https://www.youtube.com/embed/A_HQdwRDRrw?si=h_yGK_31s-nlKHik",
            download: "https://hubcloud.lol/drive/eqoo1sfqqncyjvq",
            image: "shaitaan.jpg"
        },
        {
            name: "Srikanth",
            embed: "https://www.youtube.com/embed/7Zt2hvMKBBk?si=hnXSGZ4CIPxoS7nI",
            download: "https://hubcloud.lol/drive/38iwf3hyir0xkkp",
            image: "srikanth.jpg"
        },
        
        // Add more movie objects as needed
    ];

    const displayMovies = (moviesToShow) => {
        moviesContainer.innerHTML = '';
        if (moviesToShow.length === 0) {
            noMatch.style.display = 'block';
        } else {
            noMatch.style.display = 'none';
            moviesToShow.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');

                movieCard.innerHTML = `
                    <img src="${movie.image}" alt="${movie.name}">
                    <div class="movie-info">
                        <h2>${movie.name}</h2>
                    </div>
                `;
                movieCard.addEventListener('click', () => {
                    openModal(movie);
                });
                moviesContainer.appendChild(movieCard);
            });
        }
    };

    const openModal = (movie) => {
        modalContent.innerHTML = `
            <h2>${movie.name}</h2>
            <iframe src="${movie.embed}" allowfullscreen></iframe>
            <div class="links">
                <a href="${movie.download}" download>Download this Movie</a>
            </div>
        `;
        modal.style.display = 'block';
    };

    const closeModalHandler = (modalElement) => {
        modalElement.style.display = 'none';
    };

    closeModal.addEventListener('click', () => closeModalHandler(modal));
    howToDownloadClose.addEventListener('click', () => closeModalHandler(howToDownloadModal));

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModalHandler(modal);
        } else if (event.target == howToDownloadModal) {
            closeModalHandler(howToDownloadModal);
        }
    });

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(searchTerm));
        displayMovies(filteredMovies);
    });

    howToDownloadImg.addEventListener('click', () => {
        howToDownloadModal.style.display = 'block';
    });

    displayMovies(movies);
});

