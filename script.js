let count = 0;

// Load the count from local storage when the page loads
window.onload = function() {
    if (localStorage.getItem('clickCount')) {
        count = parseInt(localStorage.getItem('clickCount'));
        document.getElementById('count').textContent = count;
    }
};

function incrementCounter() {
    count++;
    document.getElementById('count').textContent = count;
    localStorage.setItem('clickCount', count);
}