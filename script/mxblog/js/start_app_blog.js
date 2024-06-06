document.body.onload = function() {
    //const blog_display_object = new Article_Reader_Display_Object("",["","",0,0],["terraform","","",""]);
    const blog_display_object = new Article_Reader_Display_Object("update_blog",["https://pnwarner.github.io/media/json/mxblog/test-mxblog/test-blog/pr-dev-blog.json","blog",0,0],["terraform","","",""]);
    const new_blog = new Article_Reader(blog_display_object, {});
}