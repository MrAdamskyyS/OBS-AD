document.addEventListener('DOMContentLoaded', function() {
    function startAnimations() {
        const animatedMail = document.querySelector('.animated-mail');
        const heartIcon = document.getElementById('serduszko');
        const letter = document.querySelector('.letter');

        // Animacja dla .animated-mail
        animatedMail.animate([
            { transform: 'scale(0)', visibility: 'visible' },
            { transform: 'scale(1.2)' },
            { transform: 'scale(1)', visibility: 'visible' }
        ], {
            duration: 800, // 0.8s
            easing: 'ease-out',
            delay: 3000, // 3s
            fill: 'forwards'
        }).onfinish = function() {
            heartIcon.src = 'heart.png'; // Zmiana obrazu po zakończeniu animacji
        };

        // Pierwsza część animacji
        const expandAnimation = heartIcon.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.2)' }
        ], {
            duration: 250, // 0.25s, połowa czasu całkowitego, ponieważ chcemy zmienić w połowie drogi
            easing: 'linear',
            delay: 8000, // 8s
            fill: 'forwards'
        });

        expandAnimation.onfinish = function() {
            heartIcon.src = 'heart_liked.png'; // Zmiana obrazu w momencie scale(1.4)

            // Druga część animacji, po zmianie ikony
            const shrinkAnimation = heartIcon.animate([
                { transform: 'scale(1.2)' },
                { transform: 'scale(1)' }
            ], {
                duration: 250, // 0.25s, reszta czasu animacji
                easing: 'linear',
                fill: 'forwards'
            });
        };

        // Animacja dla .letter
        letter.animate([
            { height: '60px' },
            { height: '460px' }
        ], {
            duration: 400, // 0.6s
            easing: 'linear',
            delay: 4300, // 4.3s
            fill: 'forwards'
        });
    

        // Animacja, która zmniejsza .letter z 460px do 60px
        letter.animate([
            { height: '460px' },
            { height: '60px' }
        ], {
            duration: 400, // Można dostosować czas trwania
            easing: 'linear',
            delay: 12000, // 10s
            fill: 'forwards'
        });


        // Animacja przeciwieństwo dla .animated-mail
        animatedMail.animate([
            { transform: 'scale(1)', visibility: 'visible' },
            { transform: 'scale(1.2)' },
            { transform: 'scale(0)', visibility: 'hidden' }
        ], {
            duration: 400, // Można dostosować czas trwania
            easing: 'ease-in', // Dla odmiany używam ease-in
            delay: 13000, // 11s
            fill: 'forwards'
        });
    }
    startAnimations();

    setInterval(startAnimations, 30000); // 30000ms = 30s
});