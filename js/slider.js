$(document).ready(function () {
    var items = $(".slider .item");
    items.filter(function (index) {
        var centerIndex = items.length / 2;
        return index == parseInt(centerIndex);
    }).addClass('active');
    items.hover(function () {
        for (var i = 0; i < items.length; ++i) {
            items[i].classList.remove('active');
        }
        this.classList.add('active');
    });
});