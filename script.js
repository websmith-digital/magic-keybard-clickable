$(document).on("keypress", `[ws-keyboard-clickable="true"]`, function (e) {
    if (e.which == 13) {
        $(this).click();
    }
});
