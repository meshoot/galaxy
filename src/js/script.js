function containerCalculateHeight() {
    var header = $('.nav')[0];
    var footer = $('.page-footer')[0];
    var container = $('.main-content')[0];

    if (header && footer && container) {
        container.style.minHeight = document.documentElement.clientHeight - (header.offsetHeight + footer.offsetHeight) + 'px';
    }
}