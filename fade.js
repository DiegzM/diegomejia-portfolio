function fadeIn() {
    document.body.classList.add('fade-in');
}

document.addEventListener('DOMContentLoaded', fadeIn);

window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        window.location.reload();
    }
});

window.addEventListener('beforeunload', function (e) {
    document.body.classList.add('fade-out');
    
    setTimeout(function() {
       
    }, 500);  
});