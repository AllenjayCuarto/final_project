



document.querySelectorAll('.nav-links a').forEach(link => {
    link.style.transition = 'all 0.3s ease';
    link.addEventListener('mouseover', function() {
        this.style.color = '#60a5fa';
        this.style.textShadow = '0 0 12px #3b82f6';
    });
    link.addEventListener('mouseout', function() {
        this.style.color = '#cccccc';
        this.style.textShadow = 'none';
    });
});


document.querySelectorAll('.btn').forEach(btn => {
    btn.style.transition = 'all 0.3s ease';
    btn.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 5px 20px rgba(59, 130, 246, 0.4)';
    });
    btn.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
    btn.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.97)';
    });
});

