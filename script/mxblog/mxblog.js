const app_script_list = [
    'https://pnwarner.github.io/script/mxblog/src/_article_class.js',
    'https://pnwarner.github.io/script/mxblog/src/_blog_class.js',
    'https://pnwarner.github.io/script/mxblog/src/_xblog_class.js',
    'https://pnwarner.github.io/script/mxblog/src/_article_reader.js',
    'https://pnwarner.github.io/script/mxblog/src/_article_editor.js',
    'https://pnwarner.github.io/script/mxblog/src/_article_reader_display_object.js',
    'https://pnwarner.github.io/script/mxblog/src/_article_editor_display_object.js',
    'https://pnwarner.github.io/script/mxblog/src/_start_app.js'
];

function add_script_element(script_addr){
    let new_script_element = document.createElement('script');
    new_script_element.type = 'text/javascript';
    new_script_element.src = script_addr;
    document.body.appendChild(new_script_element);
}

function init() {
    app_script_list.forEach((script_addr) =>  {
        add_script_element(script_addr);
    });
}

init();
