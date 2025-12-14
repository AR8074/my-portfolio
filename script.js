document.addEventListener('DOMContentLoaded', () => {
    const pages = [
        document.querySelector('.page1'),
        document.querySelector('.page2'),
        document.querySelector('.page3')
    ];
    let current = 0;

    function showPage(idx) {
        pages.forEach((pg, i) => {
            if (i === idx) {
                pg.classList.add('active');
            } else {
                pg.classList.remove('active');
            }
        });
    }

    // Initial page
    showPage(0);

    // Navigation
    document.getElementById('nextBtn1').onclick = () => { current = 1; showPage(current); };
    document.getElementById('prevBtn2').onclick = () => { current = 0; showPage(current); };
    document.getElementById('nextBtn2').onclick = () => { current = 2; showPage(current); };
    document.getElementById('prevBtn3').onclick = () => { current = 1; showPage(current); };
});