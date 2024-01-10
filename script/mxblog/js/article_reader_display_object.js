class Article_Reader_Display_Object {
    /*load_url = ["path/to/file","file-type","article # to load", "blog # to load"] */
    /*terraform_ids = ["Single ID for all items", "Id for menu", "Id for article reader", "Id for article reader navigation"]*/
    constructor(display_template='', load_url=["","",0,0], terraform_ids=["","","",""]) {
        self = this;
        this.auto_load_article = {
            url: load_url[0],
            type: load_url[1], //article, blog, or mxblog
            article_pos: load_url[2],
            blog_pos: load_url[3]
        };
        this.display_sections = {
            title_section: true,
            article_warnings: true,
            article_body: true,
            article_sources_list: true,
            article_links_list: true,
            article_information_list: true,
            author_information_list: true,
            affiliations: true,
        };
        this.display_items = {
            article_title: true,
            title_author_name: true,
            article_summary: true,
            article_rating: true,
            content_warning: true,
            content_trigger_warning: true,
            article_paragraph: true,
            article_sources: true,
            article_links: true,
            article_date: true,
            article_time: true,
            article_location: true,
            article_geo_tag: true,
            article_tags: true,
            article_categories: true,
            article_sub_categories: true,
            article_niche_categories: true,
            article_urls: true,
            author_name: true,
            author_email: true,
            author_social: true,
            author_site: true,
            author_summary: true,
            author_tags: true,
            affiliate_company: true,
            affiliate_organization: true,
            affiliate_site: true,
            affiliate_email: true,
            affiliate_tags: true
        };

        this.add_menu_html = false;
        if (terraform_ids[0] != "" || terraform_ids[1] != ""){ 
            if (terraform_ids[0] != ""){
                this.add_menu_id = terraform_ids[0];
            }
            if (terraform_ids[1] != ""){
                this.add_menu_id = terraform_ids[1];
            }
            this.add_menu_html = true;
        }

        this.add_reader_html = false;
        if (terraform_ids[0] != "" || terraform_ids[2] != ""){
            if (terraform_ids[0] != "") {
                this.add_reader_id = terraform_ids[0];
            } else {
                this.add_reader_id = terraform_ids[2];
            }
            this.add_reader_html = true;        
        }

        this.article_navigation = false;
        if (terraform_ids[0] != "" || terraform_ids[3] != ""){
            if (terraform_ids[0] != "") {
                this.add_article_nav_id = terraform_ids[0];
            } else {
                this.add_article_nav_id = terraform_ids[3];
            }
            this.article_navigation = true;
        }

        this.display_menu = true;
        this.display_template = display_template;
        this.init();
    }

    init = function() {
        if (this.display_template != ''){
            if(this.display_template == 'update_blog') {
                this.display_sections.article_warnings = false;
                this.display_sections.article_sources_list = false;
                this.display_sections.article_links_list = false;
                this.display_sections.article_information_list = false;
                this.display_sections.author_information_list = false;
                this.display_sections.affiliations = false;
                this.display_items.article_summary = false;
                this.display_menu = false;
            }
        }
    }
}