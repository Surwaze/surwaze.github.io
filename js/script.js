$(function() {
	
});

function SelectNav(tag) {
    $(".navigation-item").removeClass("selected");
    $(".navigation-" + tag).addClass("selected");
    console.log(tag);
}

function addBorder(tag) {
    console.log("foused");
    $('.newForm').removeClass("newFormFocused");
    $('.' + tag).addClass("newFormFocused");
}
