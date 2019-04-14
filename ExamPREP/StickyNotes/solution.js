function addSticker() {
    let $title = $('.title');
    let $content = $('.content');
    let $list = $('#sticker-list');

    if ($title.val() && $content.val()) {
        createNote();   
        reset();
    }
    
    function createNote() {
        let parsedHtml = $.parseHTML(`<li class="note-content"><a class="button">x</a><h2>${$title.val()}</h2><hr><p>${$content.val()}</p></li>`);
        let $el = $(parsedHtml);
        $el.find('.button').on('click', () => $el.remove());
        $list.append($el);
    }
    
    function reset() {
        $title.val('');
        $content.val('');
    }
}