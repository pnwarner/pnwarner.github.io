class Blog {
    constructor (blog_object) {
        self = this;
        if ('declaration' in blog_object) {
            this.declaration = blog_object['declaration'];
        }
        if ('blog_data' in blog_object){
            this.blog_data = blog_object['blog_data'];
        }
        if ('blog' in blog_object){
            this.blog = blog_object['blog'];
        }
    }
}