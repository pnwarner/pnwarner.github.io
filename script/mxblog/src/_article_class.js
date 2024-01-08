class Article {
    constructor (article_object) {
        self = this;
        if ('declaration' in article_object) {
            this.declaration = article_object['declaration'];
        }
        if ('blog_path' in article_object) {
            this.blog_path = article_object['blog_path'];
        }
        if ('blog_name' in article_object) {
            this.blog_name = article_object['blog_name'];
        }
        if ('multi_blog_path' in article_object) {
            this.multi_blog_path = article_object['multi_blog_path'];
        }
        if ('multi_blog_name' in article_object) {
            this.multi_blog_name = article_object['multi_blog_name'];
        }
        if ('snapshot' in article_object) {
            this.snapshot = article_object['snapshot'];
            /*image, name, author, summary*/
            /*If these are blank, populate from existing article information*/
        }
        this.article_name = article_object['article']['article_name'];
        this.article_date = article_object['article']['article_date'];
        this.article_time = article_object['article']['article_time'];
        this.last_revision_date = article_object['article']['last_revision_date'];
        this.last_revision_time = article_object['article']['last_revision_time'];
        this.article_location = article_object['article']['article_location'];
        this.article_geo_tag = article_object['article']['article_geo_tag'];
        this.article_title = article_object['article']['article_title'];
        this.article_summary = article_object['article']['article_summary'];
        this.article_categories = article_object['article']['article_categories'];
        this.article_sub_categories = article_object['article']['article_sub_categories'];
        this.article_niche_categories = article_object['article']['article_niche_categories'];
        this.article_rating = article_object['article']['article_rating'];
        this.content_warning = article_object['article']['content_warning'];
        this.article_trigger_warning = article_object['article']['article_trigger_warning'];
        this.article_urls = article_object['article']['article_urls'];
        this.article_tags = article_object['article']['article_tags'];
        this.article_hash_key = article_object['article']['article_hash_key'];
        this.article_hash_method = article_object['article']['article_hash_method'];
        this.article_fingerprints = article_object['article']['article_fingerprints'];
        this.article_media = article_object['article']['article_media'];
        this.article_links = article_object['article']['article_links'];
        this.article_script = article_object['article']['article_script'];
        this.article_sources = article_object['article']['article_sources'];
        this.author = article_object['article']['author'];
        this.author_affiliation = article_object['article']['author_affiliation'];
        this.author_id = article_object['article']['author_id'];
        this.author_email = article_object['article']['author_email'];
        this.author_site = article_object['article']['author_site'];
        this.author_social = article_object['article']['author_social'];
        this.author_summary = article_object['article']['author_summary'];
        this.author_tags = article_object['article']['author_tags'];
        this.article_properties = article_object['article']['article_properties'];
        this.article = article_object['article']['article'];
        this.custom_fields = article_object['article']['custom_fields'];
        this.article_edits = article_object['article']['article_edits'];
        this.article_events = article_object['article']['article_events'];
        
    }
}