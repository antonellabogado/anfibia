$(document).ready(() => {
    console.log("JQuery Cargado");

    // Abrir popup
    $('.cta').click(() => {
        openPopup();
    });

    // Cerrar popup
    $('.close-popup').click(() => {
        closePopup();
    });

    // Abrir paso 2 
    $('.step1').on('submit', (e) => {
        e.preventDefault();
        openSecondStep();
    });

    // Abrir feedback
    $('.step2').on('submit', (e) => {
        e.preventDefault();
        openFeedback();
        formToFeedback();
    });
});

function openPopup() {
    $('.popup-container.step1').removeClass('d-none');
    setProgressBar(50);
}

function closePopup() {
    $('.popup-container.step1').addClass('d-none');
    $('.popup-container.step2').addClass('d-none');
    $('.popup-container.feedback').addClass('d-none');
    setProgressBar(0);
}

function openSecondStep() {
    $('.popup-container.step1').addClass('d-none');
    $('.popup-container.step2').removeClass('d-none');
    setProgressBar(100);
}

function openFeedback() {
    $('.popup-container.step1').addClass('d-none');
    $('.popup-container.step2').addClass('d-none');
    $('.popup-container.feedback').removeClass('d-none');
    setProgressBar(0);
}

function formToFeedback() {
    const name = $('#name').val();
    const email = $('#email').val();

    $('#nameData').html(name);
    $('#emailData').html(email);
}

function setProgressBar(width) {
    $('.progress-bar').width(width + '%');
}