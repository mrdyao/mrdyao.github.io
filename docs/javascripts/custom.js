document.addEventListener('DOMContentLoaded', function() {
    const logoLink = document.querySelector('.md-header__button.md-logo');
    // 点击LOGO不跳转链接
    if (logoLink) {
        logoLink.addEventListener('click', function(event) {
            event.preventDefault();
        });
    }
});

