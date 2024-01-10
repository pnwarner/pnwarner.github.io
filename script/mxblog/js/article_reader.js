class Article_Reader {
    constructor(display_object={}, json_object={}) { //Inlcude a reader_options_object={}
        self = this;
        this.json_object = json_object;
        this.display_object = display_object;
        this.reader_list = []; //For use with Single Article, and Blog
        this.article_list = []; //For use of loading single articles, in mix with blogs
        this.current_blog_list = []; //Either populated with this.blog_list, or mblog_list if multi-blog is open
        this.blog_list = []; //List of available LOADED BLOGS, seperate from multi-blog list
        this.mblog_list = []; //Multi-Blog to add all available BLOGS to this list
        this.multi_blog_list = []; //List of available multi blogs
        this.reader_media = ''; //Item from reader_list
        this.current_multi_blog = ''; //Set if multiblog selected
        this.current_blog = ''; //Set if blog selected 
        this.current_article = ''; //Set if article selected
        this.multi_blog_object = {}; //Set if multi-blog selected
        this.blog_object = {}; //Blog Object to Store here
        this.set_obj = {}; //Current article object to load in DOM
        this.dom_view = {
            options: {
                items: {
                    article_title: {
                        id: "checkbox-article-title",
                        section: "title_section",
                        enabled: true
                    },
                    title_author_name: {
                        id: "checkbox-article-title-author",
                        section: "title_section",
                        enabled: true
                    },
                    article_summary: {
                        id: "checkbox-article-summary",
                        section: "title_section",
                        enabled: true
                    },
                    article_rating: {
                        id: "checkbox-article-rating",
                        section: "article_warnings",
                        enabled: true
                    },
                    content_warning: {
                        id: "checkbox-article-content-warning",
                        section: "article_warnings",
                        enabled: true
                    },
                    content_trigger_warning: {
                        id: "checkbox-article-content-trigger-warning",
                        section: "article_warnings",
                        enabled: true
                    },
                    article_paragraphs: {
                        id: "checkbox-articles",
                        section: "article_body",
                        enabled: true
                    },
                    article_sources: {
                        id: "checkbox-article-sources",
                        section: "article_sources_list",
                        enabled: true
                    },
                    article_links: {
                        id: "checkbox-article-links",
                        section: "article_links_list",
                        enabled: true
                    },
                    article_date: {
                        id: "checkbox-article-date",
                        section: "article_information_list",
                        enabled: true
                    },
                    article_time: {
                        id: "checkbox-article-time",
                        section: "article_information_list",
                        enabled: true
                    },
                    article_location: {
                        id: "checkbox-article-location",
                        section: "article_information_list",
                        enabled: true
                    },
                    article_geo_tag: {
                        id: "checkbox-article-geo-location",
                        section: "article_information_list",
                        enabled: true
                    },
                    article_tags: {
                        id: "checkbox-article-tags",
                        section: "article_information_list",
                        enabled: true
                    },
                    article_categories: {
                        id: "checkbox-article-categories",
                        section: "article_information_list",
                        enabled: true
                    },
                    article_sub_categories: {
                        id: "checkbox-article-sub-categories",
                        section: "article_information_list",
                        enabled: true
                    },
                    article_niche_categories: {
                        id: "checkbox-article-niche-categories",
                        section: "article_information_list",
                        enabled: true
                    },
                    article_urls: {
                        id: "checkbox-article-urls",
                        section: "article_information_list",
                        enabled: true
                    },
                    author_name: {
                        id: "checkbox-author-name",
                        section: "author_information_list",
                        enabled: true
                    },
                    author_email: {
                        id: "checkbox-author-email",
                        section: "author_information_list",
                        enabled: true
                    },
                    author_social: {
                        id: "checkbox-author-social",
                        section: "author_information_list",
                        enabled: true
                    },
                    author_site: {
                        id: "checkbox-author-site",
                        section: "author_information_list",
                        enabled: true
                    },
                    author_summary: {
                        id: "checkbox-author-summary",
                        section: "author_information_list",
                        enabled: true
                    },
                    author_tags: {
                        id: "checkbox-author-tags",
                        section: "author_information_list",
                        enabled: true
                    },
                    affiliate_company: {
                        id: "checkbox-author-affiliate-company",
                        section: "affiliations",
                        enabled: true
                    },
                    affiliate_organization: {
                        id: "checkbox-author-affiliate-organization",
                        section: "affiliations",
                        enabled: true
                    },
                    affiliate_email: {
                        id: "checkbox-author-affiliate-email",
                        section: "affiliations",
                        enabled: true
                    },
                    affiliate_site: {
                        id: "checkbox-author-affiliate-site",
                        section: "affiliations",
                        enabled: true
                    },
                    affiliate_tags: {
                        id: "checkbox-author-affiliate-tags",
                        section: "affiliations",
                        enabled: true
                    }
                },
                sections: {
                    title_section: {
                        id: "checkbox-article-title-section",
                        items: [
                            "article_title",
                            "title_author_name",
                            "article_summary"
                        ],
                        last_enabled_items: [],
                        enabled: true
                    },
                    article_warnings: {
                        id: "checkbox-article-warnings-section",
                        items: [
                            "article_rating",
                            "content_warning",
                            "content_trigger_warning"
                        ],
                        last_enabled_items: [],
                        enabled: true
                    },
                    article_body: {
                        id: "checkbox-article-body-section",
                        items: [
                            "article_paragraphs"
                        ],
                        last_enabled_items: [],
                        enabled: true
                    },
                    article_sources_list: {
                        id: "checkbox-article-sources-section",
                        items: [
                            "article_sources"
                        ],
                        last_enabled_items: [],
                        enabled: true
                    },
                    article_links_list: {
                        id: "checkbox-article-links-section",
                        items: [
                            "article_links"
                        ],
                        last_enabled_items: [],
                        enabled: true
                    },
                    article_information_list: {
                        id: "checkbox-article-information-list-section",
                        items: [
                            "article_date",
                            "article_time",
                            "article_location",
                            "article_geo_tag",
                            "article_tags",
                            "article_categories",
                            "article_sub_categories",
                            "article_niche_categories",
                            "article_urls"
                        ],
                        last_enabled_items: [],
                        enabled: true
                    },
                    author_information_list: {
                        id: "checkbox-author-information-list-section",
                        items: [
                            "author_name",
                            "author_email",
                            "author_social",
                            "author_site",
                            "author_summary",
                            "author_tags"
                        ],
                        last_enabled_items: [],
                        enabled: true
                    },
                    affiliations: {
                        id: "checkbox-author-affiliation-list-section",
                        items: [
                            "affiliate_company",
                            "affiliate_organization",
                            "affiliate_site",
                            "affiliate_email",
                            "affiliate_tags"
                        ],
                        last_enabled_items: [],
                        enabled: true
                    }
                },
                menu: {
                    show_menu: false,
                    show_load_blog: true,
                    show_select_blog: true,
                    show_view_sections: true,
                    show_view_items: true,
                    show_blog_loader: false,
                    show_media_selector: false,
                    show_sections_selector: false,
                    show_items_selector: false
                },
                current_list_items: 0,
                hide_items: [],
                hide_sections: []
            },
            elements: {
                main: {},
                menu: {
                    checkbox_article_title: {
                        id: "checkbox-article-title",
                        name: "checkbox-article-title",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_article_title_author: {
                        id: "checkbox-article-title-author",
                        name: "checkbox-article-title-author",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', "checked"],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_article_summary: {
                        id: "checkbox-article-summary",
                        name: "checkbox-article-summary",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_article_rating: {
                        id: "checkbox-article-rating",
                        name: "checkbox-article-rating",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_article_content_warning: {
                        id: "checkbox-article-content-warning",
                        name: "checkbox-article-content-warning",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_article_content_trigger_warning: {
                        id: "checkbox-article-content-trigger-warning",
                        name: "checkbox-article-content-trigger-warning",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_articles: {
                        id: "checkbox-articles",
                        name: "checkbox-articles",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_article_sources: {
                        id: "checkbox-article-sources",
                        name: "checkbox-article-sources",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_article_links: {
                        id: "checkbox-article-links",
                        name: "checkbox-article-links",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', "checked"],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_article_date: {
                        id: "checkbox-article-date",
                        name: "checkbox-article-date",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', "checked"],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_article_time: {
                        id: "checkbox-article-time",
                        name: "checkbox-article-time",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_article_location: {
                        id: "checkbox-article-location",
                        name: "checkbox-article-location",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_article_geo_location: {
                        id: "checkbox-article-geo-location",
                        name: "checkbox-article-geo-location",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_article_tags: {
                        id: "checkbox-article-tags",
                        name: "checkbox-article-tags",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_article_categories: {
                        id: "checkbox-article-categories",
                        name: "checkbox-article-categories",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_article_sub_categories: {
                        id: "checkbox-article-sub-categories",
                        name: "checkbox-article-sub-categories",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_article_niche_categories: {
                        id: "checkbox-article-niche-categories",
                        name: "checkbox-article-niche-categories",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_article_urls: {
                        id: "checkbox-article-urls",
                        name: "checkbox-article-urls",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_author_name: {
                        id: "checkbox-author-name",
                        name: "checkbox-author-name",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"','checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_author_email: {
                        id: "checkbox-author-email",
                        name: "checkbox-author-email",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_author_social: {
                        id: "checkbox-author-social",
                        name: "checkbox-author-social",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_author_site: {
                        id: "checkbox-author-site",
                        name: "checkbox-author-site",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_author_summary: {
                        id: "checkbox-author-summary",
                        name: "checkbox-author-summary",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"','checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_author_tags: {
                        id: "checkbox-author-tags",
                        name: "checkbox-author-tags",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"','checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_author_affiliate_company: {
                        id: "checkbox-author-affiliate-company",
                        name: "checkbox-author-affiliate-company",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"','checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_author_affiliate_organization: {
                        id: "checkbox-author-affiliate-organization",
                        name: "checkbox-author-affiliate-organization",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"','checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_author_affiliate_email: {
                        id: "checkbox-author-affiliate-email",
                        name: "checkbox-author-affiliate-email",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"','checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_author_affiliate_site: {
                        id: "checkbox-author-affiliate-site",
                        name: "checkbox-author-affiliate-site",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_author_affiliate_tags: {
                        //Menu - Select Media
                        id: "checkbox-author-affiliate-tags",
                        name: "checkbox-author-affiliate-tags",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    checkbox_author_affiliation_list_section: {
                        id: "checkbox-author-affiliation-list-section",
                        name: "checkbox-author-affiliation-list-section",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "checkbox"
                    },
                    articles_selection_label: {
                        id: "articles-select-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="articles-select"'],
                        inner_html: "Choose a Article:",
                        el_type: "label"
                    },
                    articles_selection: {
                        id: "articles-select",
                        name: "articles-select",
                        enabled: false,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "select"
                    },
                    blogs_selection_label: {
                        id: "blogs-select-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="blogs-select"'],
                        inner_html: "Choose a Blog: ",
                        el_type: "label"
                    },
                    blogs_selection: {
                        id: "blogs-select",
                        name: "blogs-select",
                        enabled: false,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "select"
                    },
                    multi_blogs_selection_label: {
                        id: "multi-blogs-select-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="multi-blogs-select"'],
                        inner_html: "Choose a Multi-Blog: ",
                        el_type: "label"
                    },
                    multi_blogs_selection: {
                        id: "multi-blogs-select",
                        name: "multi-blogs-select",
                        enabled: false,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "select"
                    },
                    load_url_text_box: {
                        id: "txt-url",
                        name: "txt-url",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="text"', 'placeholder="Enter a URL to import."'],
                        inner_html: "",
                        el_type: "input"
                    },
                    load_url_button: {
                        id: "get-url-button",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Get URL",
                        el_type: "button"
                    },
                    article_file_upload: {
                        id: "article-file-upload",
                        name: "article-file-upload",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="file"'],
                        inner_html: "",
                        el_type: "input"
                    },
                    article_file_upload_label: {
                        id: "article-file-upload-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="article-file-upload"'],
                        inner_html: "Load local file:",
                        el_type: "label"
                    },
                    load_article_button: {
                        id: "load-article-button",
                        name: "",
                        enabled: false,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Load Article",
                        el_type: "button"
                    },
                    get_url_button: {
                        id: "get-url-button",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "button"
                    },
                    reset_article_button: {
                        id: "reset-article-button",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "button"
                    },
                    close_article_button: {
                        id: "close-article-button",
                        name: "",
                        enabled: false,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Close Article",
                        el_type: "button"
                    },
                    file_upload_button: {
                        id: "article-file-upload",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "button"
                    },
                    load_blog_button: {
                        id: "load-blog-button",
                        name: "",
                        enabled: false,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Load Blog",
                        el_type: "button"
                    },
                    close_blog_button: {
                        id: "close-blog-button",
                        name: "",
                        enabled: false,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Close Blog",
                        el_type: "button"
                    },
                    load_multi_blog_button: {
                        id: "load-multi-blog-button",
                        name: "",
                        enabled: false,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Load Multi-Blog",
                        el_type: "button"
                    },
                    close_multi_blog_button: {
                        id: "close-multi-blog-button",
                        name: "",
                        enabled: false,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Close Multi-Blog",
                        el_type: "button"
                    },
                    menu_button: {
                        id: "micro-blog-menu-button",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Menu",
                        el_type: "button"
                    },
                    menu_options: {
                        id: "micro-blog-menu-options",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    menu_load_blog: {
                        id: "menu-load-blog-button",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Load Blog",
                        el_type: "button"
                    },
                    menu_select_blog: {
                        id: "menu-select-blog",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Select Blog",
                        el_type: "button"
                    },
                    menu_view_sections: {
                        id: "menu-view-sections",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "View Sections",
                        el_type: "button"
                    },
                    menu_view_items: {
                        id: "menu-view-items",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "View Items",
                        el_type: "button"
                    },
                    menu_items: {
                        id: "micro-blog-menu-items",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    menu_main: {
                        id: "micro-blog-menu-main",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    menu_bar: {
                        id: "micro-blog-menu-bar",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['child-block'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    menu: {
                        id: "micro-blog-menu",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['parent-block'],
                        attributes: ['aria-hidden="true"'],
                        inner_html: "",
                        el_type: "section"
                    },
                    current_blog_name_label: {
                        id: "current-blog-name-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Current Blog: ",
                        el_type: "p"
                    },
                    current_blog_name: {
                        id: "current-blog-name",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    blog_local_loader: {
                        id: "blog-local-loader",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    blog_url_loader: {
                        id: "blog-url-loader",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    blog_loader: {
                        id: "blog-loader",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['child-block', 'micro-blog-menu-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_selector_buttons: {
                        id: "article-selector-buttons",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_selector: {
                        id: "menu-load-blog",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    blog_selector_buttons: {
                        id: "blog-selector-buttons",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    blog_selector: {
                        id: "blog-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    current_multi_blog_info: {
                        id: "current-multi-blog-info",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    multi_blog_selector_buttons: {
                        id: "multi-blog-selector-buttons",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    multi_blog_selector: {
                        id: "multi-blog-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    media_selector: {
                        id: "media-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['micro-blog-menu-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    media_selector_types: {
                        id: "media-selector-types",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['child-block'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    sections_selector: {
                        id: "blog-section-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['child-block', 'micro-blog-menu-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    items_selector: {
                        id: "blog-item-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['child-block', 'micro-blog-menu-items'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    current_multi_blog_name_label: {
                        id: "current-multi-blog-name-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Current Multi-Blog: ",
                        el_type: "p"
                    },
                    current_blog_info: {
                        id: "current-blog-info",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    current_article_info: {
                        id: "current-article-info",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    current_multi_blog_name: {
                        id: "current-multi-blog-name",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    current_article_name_label: {
                        id: "current-article-name-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Current Article: ",
                        el_type: "p"
                    },
                    current_article_name: {
                        id: "current-article-name",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    blog_sections_options: {
                        id: "blog-sections-options",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['options-box'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_title_section: {
                        id: "article-title-section",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_title_section_label: {
                        id: "checkbox-article-title-section-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-title-section"'],
                        inner_html: "Article Title",
                        el_type: "label"
                    },
                    checkbox_article_title_section: {
                        id: "checkbox-article-title-section",
                        name: "checkbox-article-title-section",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"','checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    article_warnings_section: {
                        id: "article-warnings-selection",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_warnings_label: {
                        id: "checkbox-article-warnings-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-warnings-section"'],
                        inner_html: "Article Warnings",
                        el_type: "label"
                    },
                    checkbox_article_warnings_section: {
                        id: "checkbox-article-warnings-section",
                        name: "checkbox-article-warnings-section",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"','checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    article_body_section: {
                        id: "article-body-selection",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_body_label: {
                        id: "checkbox-article-body-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-body-section"'],
                        inner_html: "Article Body",
                        el_type: "label"
                    },
                    checkbox_article_body_section: {
                        id: "checkbox-article-body-section",
                        name: "checkbox-article-body-section",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"','checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    article_sources_list_section: {
                        id: "article-sources-list-selection",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_sources_list_label: {
                        id: "checkbox-article-sources-list-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-sources-section"'],
                        inner_html: "Article Sources",
                        el_type: "label"
                    },
                    checkbox_article_sources_section: {
                        id: "checkbox-article-sources-section",
                        name: "checkbox-article-sources-section",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"','checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    article_links_list_section: {
                        id: "article-links-list-selection",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_links_list_label: {
                        id: "checkbox-article-links-list-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Article Links",
                        el_type: "label"
                    },
                    checkbox_article_links_section: {
                        id: "checkbox-article-links-section",
                        name: "checkbox-article-links-section",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    article_information_list_section: {
                        id: "article-information-list-selection",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_information_list_label: {
                        id: "checkbox-article-information-list-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-information-list-section"'],
                        inner_html: "Article Information",
                        el_type: "label"
                    },
                    checkbox_article_information_list_section: {
                        id: "checkbox-article-information-list-section",
                        name: "checkbox-article-information-list-section",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"','checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    author_information_section: {
                        id: "author-information-selection",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_author_information_list_label: {
                        id: "checkbox-author-information-list-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-author-information-list-section"'],
                        inner_html: "Author Information",
                        el_type: "label"
                    },
                    checkbox_author_information_list_section: {
                        id: "checkbox-author-information-list-section",
                        name: "checkbox-author-information-list-section",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    author_affiliation_section: {
                        id: "author-affiliation-selection",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_author_affiliation_list_label: {
                        id: "checkbox-author-affiliation-list-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-author-affiliation-list-section"'],
                        inner_html: "Author Affiliations",
                        el_type: "label"
                    },
                    checkbox_author_affiliation_list_section: {
                        id: "checkbox-author-affiliation-list-section",
                        name: "checkbox-author-affiliation-list-section",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['type="checkbox"', 'checked'],
                        inner_html: "",
                        el_type: "input"
                    },
                    blog_items_options: {
                        id: "blog-items-options",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    blog_items_selector: {
                        id: "blog-items-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['options-box'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_title_selector: {
                        id: "article-title-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_title_label: {
                        id: "checkbox-article-title-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-title"'],
                        inner_html: "Article Title",
                        el_type: "label"
                    },
                    article_title_author_selector: {
                        id: "article-title-author-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_title_author_label: {
                        id: "checkbox-article-title-author-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-title-author"'],
                        inner_html: "Display Author in Title",
                        el_type: "label"
                    },
                    article_summary_selector: {
                        id: "article-summary-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_summary_label: {
                        id: "checkbox-article-summary-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-summary"'],
                        inner_html: "Article Summary",
                        el_type: "label"
                    },
                    article_rating_selector: {
                        id: "article-rating-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_rating_label: {
                        id: "checkbox-article-rating-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-rating"'],
                        inner_html: "Article Rating",
                        el_type: "label"
                    },
                    article_content_warning_selector: {
                        id: "article-content-warning-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_content_warning_label: {
                        id: "checkbox-article-content-warning-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-content-warning"'],
                        inner_html: "Content Warning",
                        el_type: "label"
                    },
                    article_content_trigger_warning_selector: {
                        id: "article-content-trigger-warning-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_content_trigger_warning_label: {
                        id: "checkbox-article-content-trigger-warning-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-content-trigger-warning"'],
                        inner_html: "Content Trigger Warnings",
                        el_type: "label"
                    },
                    article_articles_selector: {
                        id: "article-articles-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_articles_label: {
                        id: "checkbox-articles-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-articles"'],
                        inner_html: "Articles",
                        el_type: "label"
                    },
                    article_sources_selector: {
                        id: "article-sources-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_sources_label: {
                        id: "checkbox-article-sources-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-sources"'],
                        inner_html: "Article Sources",
                        el_type: "label"
                    },
                    article_links_selector: {
                        id: "article-links-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_links_label: {
                        id: "checkbox-article-links-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [], 
                        attributes: ['for="checkbox-article-links"'],
                        inner_html: "Article Links",
                        el_type: "label"
                    },
                    checkbox_article_links_section_label: {
                        id: "checkbox-article-links-section-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-links-section"'],
                        inner_html: "Article Links",
                        el_type: "label"
                    },
                    article_date_selector: {
                        id: "article-date-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_date_label: {
                        id: "checkbox-article-date-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-date"'],
                        inner_html: "Article Date",
                        el_type: "label"
                    },
                    article_time_selector: {
                        id: "article-time-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_time_label: {
                        id: "checkbox-article-time-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-time"'],
                        inner_html: "Article Time",
                        el_type: "label"
                    },
                    article_location_selector: {
                        id: "article-location-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_location_label: {
                        id: "checkbox-article-location-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-location"'],
                        inner_html: "Article Location",
                        el_type: "label"
                    },
                    article_geo_location_selector: {
                        id: "article-geo-location-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_geo_location_label: {
                        id: "checkbox-article-geo-location-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-geo-location"'],
                        inner_html: "Article Geo Location",
                        el_type: "label"
                    },
                    article_tags_selector: {
                        id: "article-tags-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_tags_label: {
                        id: "checkbox-article-tags-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-tags"'],
                        inner_html: "Article Tags",
                        el_type: "label"
                    },
                    article_categories_selector: {
                        id: "article-categories-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_categories_label: {
                        id: "checkbox-article-categories-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-categories"'],
                        inner_html: "Article Categories",
                        el_type: "label"
                    },
                    article_sub_categories_selector: {
                        id: "article-sub-categories-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_sub_categories_label: {
                        id: "checkbox-article-sub-categories-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-sub-categories"'],
                        inner_html: "Article Sub-Categories",
                        el_type: "label"
                    },
                    article_niche_categories_selector: {
                        id: "article-niche-categories-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_niche_categories_label: {
                        id: "checkbox-article-niche-categories-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-niche-categories"'],
                        inner_html: "Article Niche-Categories",
                        el_type: "label"
                    },
                    article_urls_selector: {
                        id: "article-urls-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_article_urls_label: {
                        id: "checkbox-article-urls-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-article-urls"'],
                        inner_html: "Article URLs",
                        el_type: "label"
                    },
                    author_name_selector: {
                        id: "author-name-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_author_name_label: {
                        id: "checkbox-author-name-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-author-name"'],
                        inner_html: "Author Name",
                        el_type: "label"
                    },
                    author_email_selector: {
                        id: "author-email-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_author_email_label: {
                        id: "checkbox-author-email-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-author-email"'],
                        inner_html: "Author Email",
                        el_type: "label"
                    },
                    author_social_selector: {
                        id: "author-social-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_author_social_label: {
                        id: "checkbox-author-social-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-author-social"'],
                        inner_html: "Author Social Media",
                        el_type: "label"
                    },
                    author_site_selector: {
                        id: "author-site-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_author_site_label: {
                        id: "checkbox-author-site-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-author-site"'],
                        inner_html: "Author Website",
                        el_type: "label"
                    },
                    author_summary_selector: {
                        id: "author-summary-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_author_summary_label: {
                        id: "checkbox-author-summary-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-author-summary"'],
                        inner_html: "Author Bio",
                        el_type: "label"
                    },
                    author_tags_selector: {
                        id: "author-tags-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_author_tags_label: {
                        id: "checkbox-author-tags-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-author-tags"'],
                        inner_html: "Author Tags",
                        el_type: "label"
                    },
                    author_affiliate_company_selector: {
                        id: "author-affiliate-company-section",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_author_affiliate_company_label: {
                        id: "checkbox-author-affiliate-company-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-author-affiliate-company"'],
                        inner_html: "Author Affiliate Company",
                        el_type: "label"
                    },
                    author_affiliate_organization_selector: {
                        id: "author-affiliate-organization-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_author_affiliate_organization_label: {
                        id: "checkbox-author-affiliate-organization-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-author-affiliate-organization"'],
                        inner_html: "Author Affiliate Organization",
                        el_type: "label"
                    },
                    author_affiliate_email_selector: {
                        id: "author-affiliate-email-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_author_affiliate_email_label: {
                        id: "checkbox-author-affiliate-email-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-author-affiliate-email"'],
                        inner_html: "Author Affiliate Email",
                        el_type: "label"
                    },
                    author_affiliate_site_selector: {
                        id: "author-affiliate-site-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_author_affiliate_site_label: {
                        id: "checkbox-author-affiliate-site-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-author-affiliate-site"'],
                        inner_html: "Author Affiliate Website",
                        el_type: "label"
                    },
                    author_affiliate_tags_selector: {
                        id: "author-affiliate-tags-selector",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['option-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    checkbox_author_affiliate_tags_label: {
                        id: "checkbox-author-affiliate-tags-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: ['for="checkbox-author-affiliate-tags"'],
                        inner_html: "Author Affiliate Tags",
                        el_type: "label"
                    }
                },
                reader: {
                    micro_blog: {
                        id: "micro-blog",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['parent-block'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_main: {
                        id: "article-main",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['child-block', 'article-main'],
                        attributes: [],
                        inner_html: "",
                        el_type: "article"
                    },
                    article_header: {
                        id: "article-header",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    title_author: {
                        id: "title-author",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "",
                        el_type: "p"
                    },
                    written_by_label: {
                        id: "written-by-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Written By: ",
                        el_type: "span"
                    },
                    header_summary: {
                        id: "header-summary",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_short_summary: {
                        id: "article-short-summary",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "article"
                    },
                    article_rating_label: {
                        id: "article-rating-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "p"
                    },
                    article_rating_label_wrapper: {
                        id: "article-rating-label-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Article Rating:",
                        el_type: "span"
                    },
                    content_warning_label: {
                        id: "content-warning-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "p"
                    },
                    content_warning_text_wrapper: {
                        id: "content-warning-text-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Content Warnings:",
                        el_type: "span"
                    },
                    content_trigger_warning_label: {
                        id: "content-trigger-warning-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "p"
                    },
                    content_trigger_warnings_label_text: {
                        id: "content-trigger-warnings-label-text",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Content Trigger Warnings:",
                        el_type: "span"
                    },
                    article_data: {
                        id: "article-data",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_date_time_location_label: {
                        id: "article-date-time-location-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "p"
                    },
                    article_date_label: {
                        id: "article-date-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Date: ",
                        el_type: "span"
                    },
                    article_time_label: {
                        id: "article_time_label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Time: ",
                        el_type: "span"
                    },
                    article_location_label: {
                        id: "article-location-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Location: ",
                        el_type: "span"
                    },
                    article_geo_location_label: {
                        id: "article-geo-location-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "(",
                        el_type: "span"
                    },
                    article_information: {
                        id: "article-information",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_tags_wrapper: {
                        id: "article-tags-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_tags_label: {
                        id: "article-tags-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Article Tags:",
                        el_type: "p"
                    },
                    article_categories_wrapper: {
                        id: "article-categories-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_categories_label: {
                        id: "article-categories-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Article Categories:",
                        el_type: "p"
                    },
                    article_sub_categories_wrapper: {
                        id: "article-sub-categories-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_sub_categories_label: {
                        id: "article-sub-categories-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Article Sub-Categories:",
                        el_type: "p"
                    },
                    article_niche_categories_wrapper: {
                        id: "article-niche-categories-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_niche_categories_label: {
                        id: "article-niche-categories-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Article Niche-Categories:",
                        el_type: "p"
                    },
                    article_urls_wrapper: {
                        id: "article-urls-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_urls_label: {
                        id: "article-urls-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Article URLs:",
                        el_type: "p"
                    },
                    article_author_information_section: {
                        id: "author-information",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    author_name_label: {
                        id: "author-name-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "p"
                    },
                    author_name_wrapper: {
                        id: "author-name-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    author_email_wrapper: {
                        id: "author-email-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    author_email_label: {
                        id: "author-email-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Email: ",
                        el_type: "span"
                    },
                    author_site_wrapper: {
                        id: "author-website-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    author_website_label: {
                        id: "author-website-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Website: ",
                        el_type: "span"
                    },
                    author_social_links: {
                        id: "author-social-links",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    author_social_label_wrapper: {
                        id: "author-social-label-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "p"
                    },
                    author_social_label: {
                        id: "author-social-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Social Media:",
                        el_type: "span"
                    },
                    author_summary_wrapper: {
                        id: "author-summary-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    author_summary_label: {
                        id: "author-summary-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Bio:",
                        el_type: "p"
                    },
                    author_tags_wrapper: {
                        id: "author-tags-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    author_tags_label: {
                        id: "author-tags-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Author Tags:",
                        el_type: "p"
                    },
                    affiliate_text_wrapper: {
                        id: "affiliate-text-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "p"
                    },
                    affiliate_company_wrapper: {
                        id: "affiliate-company-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    affiliate_company_label: {
                        id: "affiliate-company-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Company: ",
                        el_type: "span"
                    },
                    affiliate_organization_wrapper: {
                        id: "affiliate-organization-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    affiliate_organization_label: {
                        id: "affiliate-organization-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Organization: ",
                        el_type: "span"
                    },
                    affiliate_website_wrapper: {
                        id: "affiliate-website-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    affiliate_website_label: {
                        id: "affiliate-website-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Website: ",
                        el_type: "span"
                    },
                    affiliate_email_wrapper: {
                        id: "affiliate-email-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    affiliate_email_label: {
                        id: "affiliate-email-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Email: ",
                        el_type: "span"
                    },
                    affiliate_tags_wrapper: {
                        id: "affiliate-tags-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    affiliate_tags_label: {
                        id: "affiliate-tags-label",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['item-label'],
                        attributes: [],
                        inner_html: "Company Tags:",
                        el_type: "span"
                    },
                },
                reader_items: {
                    article_title: {
                        id: "article-title",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['article-title'],
                        attributes: [],
                        inner_html: "",
                        el_type: "h1"
                    },
                    title_author_name: {
                        id: "title-author-name",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    article_date: {
                        id: "article-date",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    article_time: {
                        id: "article-time",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    article_location: {
                        id: "article-location",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    article_geo_tag: {
                        id: "article-geo-location",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    article_summary: {
                        id: "article-summary",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "blockquote"
                    },
                    article_rating: {
                        id: "article-rating",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    content_warning: {
                        id: "content-warning",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "ul"
                    },
                    content_trigger_warning: {
                        id: "content-trigger-warning",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "ul"
                    },
                    article_paragraphs: {
                        id: "article-paragraphs",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['article-paragraphs'],
                        attributes: [],
                        inner_html: "",
                        el_type: "article"
                    },
                    article_sources: {
                        id: "article-sources",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "ul"
                    },
                    article_links: {
                        id: "article-links",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "ul"
                    },
                    article_tags: {
                        id: "article-tags",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "ul"
                    },
                    article_categories: {
                        id: "article-categories",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "ul"
                    },
                    article_sub_categories: {
                        id: "article-sub-categories",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "ul"
                    },
                    article_niche_categories: {
                        id: "article-niche-categories",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "ul"
                    },
                    article_urls: {
                        id: "article-urls",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "ul"
                    },
                    author_name: {
                        id: "author-name",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    author_email: {
                        id: "author-email",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    author_social: {
                        id: "author_social",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "ul"
                    },
                    author_site: {
                        id: "author-site",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    author_summary: {
                        id: "author-summary",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "blockquote"
                    },
                    author_tags: {
                        id: "author-tags",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "ul"
                    },
                    affiliate_company: {
                        id: "affiliate-company",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    affiliate_organization: {
                        id: "affiliate-organization",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    affiliate_email: {
                        id: "affiliate-email",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    affiliate_site: {
                        id: "affiliate-site",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    affiliate_tags: {
                        id: "affiliate-tags",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "ul"
                    },
                },
                reader_sections: {
                    title_section: {
                        id: "title-section",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    content_warning_wrapper: {
                        id: "content-warning-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    content_trigger_warning_wrapper: {
                        id: "content-trigger-warning-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_warnings: {
                        id: "article-warnings",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_body: {
                        id: "article-body",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_footer: {
                        id: "article-footer",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_sources_list: {
                        id: "article-sources-list",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_links_list: {
                        id: "article-links-list",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_information_list: {
                        id: "article-information-list",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    author_information_list: {
                        id: "author-information-list",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    affiliations: {
                        id: "affiliations",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                },
                reader_nav: {
                    article_nav_section_wrapper: {
                        id: "article-nav-section-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['parent-block'],
                        attributes: [],
                        inner_html: "",
                        el_type: "div"
                    },
                    article_nav_section: {
                        id: "article-nav-section",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['child-block'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_nav_previous_article_section: {
                        id: "article-nav-previous-article-section",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['article-nav-prev-next-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_nav_previous_article_info: {
                        id: "article-nav-previous-article-info",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_nav_previous_article_name: {
                        id: "article-nav-previous-article-name",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "p"
                    },
                    article_nav_previous_article_button: {
                        id: "article-nav-previous-article-button",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Previous Article",
                        el_type: "button"
                    },
                    article_nav_articles_info: {
                        id: "article-nav-articles-info",
                        name: "",
                        enabled: true,
                        value: "",
                        //class: ['article-nav-prev-next-item'],
                        class: ['article-nav-articles-info'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_nav_articles_count: {
                        id: "article-nav-articles-count",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_nav_articles_count_paragraph: {
                        id: "nav-article-title",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "p"
                    },
                    current_article_number: {
                        id: "current-article-number",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    total_article_count: {
                        id: "total-article-count",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "span"
                    },
                    article_nav_next_article_section: {
                        id: "article-nav-next-article-section",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['article-nav-prev-next-item'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_nav_next_article_info: {
                        id: "article-nav-next-article-info",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_nav_next_article_name: {
                        id: "article-nav-next-article-name",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "p"
                    },
                    article_nav_next_article_button: {
                        id: "article-nav-next-article-button",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Next Article",
                        el_type: "button"
                    },
                    article_nav_selection: {
                        id: "article-nav-selection",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['article-nav-selection'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    },
                    article_nav_selector: {
                        id: "article-nav-selector",
                        name: "article-nav-selector",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "",
                        el_type: "select"
                    },
                    article_nav_selector_placeholder: {
                        id: "article-nav-selector-placeholder",
                        name: "placeholder",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Select an article",
                        el_type: "option"
                    },
                    article_nav_selector_load_article: {
                        id: "article-nav-selector-load-article",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Load Article",
                        el_type: "button"
                    },
                    article_nav_selector_close_article: {
                        id: "article-nav-selector-close-article",
                        name: "",
                        enabled: true,
                        value: "",
                        class: [],
                        attributes: [],
                        inner_html: "Close Article",
                        el_type: "button"
                    },
                    article_nav_prev_next_wrapper: {
                        id: "article-nav-prev-next-wrapper",
                        name: "",
                        enabled: true,
                        value: "",
                        class: ['article-nav-prev-next-wrapper'],
                        attributes: [],
                        inner_html: "",
                        el_type: "section"
                    }
                }
            }
        }
        this.init();
    }
 
    /* Generic functions */
    make_request = async function(method, url){
        return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(new Error({
                        status: this.status,
                        statusText: xhr.statusText
                    }));
                }
            };
            xhr.onerror = function () {
                reject(new Error({
                    status: this.status,
                    statusText: xhr.statusText
                }));
            };
            xhr.send();
        }).catch(function (error){
            return false
        });
    }

    auto_load_article = async function() {
        if (Object.keys(this.display_object).indexOf('auto_load_article') != -1) {
            if (this.display_object.auto_load_article.url != ''){
                let result = await this.load_url_data(this.display_object.auto_load_article.url);
                if (result == true) {
                    let string = this.article_list["0"];
                    this.current_article = string;
                    this.set_object(string);
                    return true
                } else {
                    console.log('Error occurred auto loading article.');
                    return false
                }
            }
        }
    }

    auto_load_blog = async function() {
        //Make this load a url string by default
        //Allow auto_load_multi_blog to use this function
        //should pass mxblog[blogs][blog_name][url] to this function
        let result = await this.load_remote_blog(this.display_object.auto_load_article.url);
        if (result == true){
            let blog_name = this.blog_list[0];
            this.blog_object = window[blog_name];
            this.current_blog = blog_name;
            this.display_blog_info();
            this.populate_reader_list();
            this.display_article_list();
            this.nav_display_article_list();
            let article_pos = this.display_object.auto_load_article.article_pos;
            if (article_pos <= this.reader_list.length) {
                let article_name = '';
                if (article_pos == 0 || article_pos == 1){
                    article_name = this.reader_list[0];
                } else {
                    article_name = this.reader_list[(article_pos - 1)];
                }
                this.load_article_by_selection_value(article_name);
            } else {
                console.log('The auto loading article number is invalid.');
                return false
            }
        }
    }

    auto_load_multi_blog = async function(){
        let result = await this.load_url_data(this.display_object.auto_load_article.url);
        if (result == true) {
            this.current_multi_blog = this.multi_blog_list[0];
            this.multi_blog_object = window[this.current_multi_blog];
            this.display_multi_blog_info();

            //This should become a function of its own:
            let blog_list = Object.keys(this.multi_blog_object['blog_list']);
            blog_list.forEach((blog) => {
                this.mblog_list.push(blog);
            });
            let blog_pos = this.display_object.auto_load_article.blog_pos;
            let blog_name = '';
            if (blog_pos == 0 || blog_pos == 1){
                blog_name = this.mblog_list[0];
            } else {
                blog_name = this.mblog_list[(article_pos - 1)];
            }
            let temp_string = this.current_multi_blog + '_blog_' + blog_name;
            this.current_blog = blog_name;
            let blog_result = await this.load_remote_multi_blog_blog(blog_name, temp_string);
            if (blog_result == true){
                let article_pos = this.display_object.auto_load_article.article_pos;
                let article_name = '';
                if (article_pos == 0 || article_pos == 1){
                    article_name = this.reader_list[0];
                } else {
                    article_name = this.reader_list[(article_pos - 1)];
                }
                let article_result = await this.load_article_by_selection_value(article_name);
                if (article_result == true){
                    this.enable_element_by_id(this.dom_view.elements.menu.close_multi_blog_button.id);
                    return true
                }
            } else {
                console.log('Error loading blog.');
                return false
            }
        } else {
            console.log('Error loading xblog');
            return false
        }
    }

    load_remote_article = async function(url, article_object_name='') {
        let result = await this.load_url_data(url, false, article_object_name);
        if (result == true){
            return true
        } else {
            return false
        }
    }

    load_article_by_selection_value = async function(article_value){
        let result = false;
        if (article_value != ''){
            if (this.current_blog != '' && this.current_multi_blog != ''){
                let article_string = this.current_multi_blog + '_blog_' + this.current_blog + '_article_' + article_value;
                result = await this.load_remote_blog_article(article_value, article_string);
                return result
            } else if (this.current_blog != '' && this.current_multi_blog == '') {
                let article_string = this.current_blog + '_article_' + article_value;
                result = await this.load_remote_blog_article(article_value, article_string);
                return result
            }
            if (this.current_blog == '' && this.current_multi_blog == ''){
                this.set_object(article_value);
                this.display_new_article();
                this.nav_display_article_list();
                result = true;
            } else {
                return result
            }
        }
    }

    load_remote_blog_article = async function(article_value, article_string) {
        let result = await this.load_remote_article(this.blog_object['blog']['article_list'][article_value]['url'],article_string);
        if (result == true){
            this.set_object(article_string);
            this.display_new_article();
            this.nav_display_article_list();
            return true
        } else {
            return false
        }
    }

    load_remote_blog = async function(url, article_object_name){
        let result = await this.load_url_data(url, false, article_object_name);
        if (result == true) {
            return true
        } else {
            return false
        }
    }

    load_remote_multi_blog_blog = async function(article_value, article_string) {
        let result = await this.load_remote_blog(this.multi_blog_object['blog_list'][article_value]['url'], article_string);
        if (result == true) {
            this.blog_object = window[article_string];
            this.display_new_blog_list();
            return true
        } else {
            return false
        }
    }

    load_url_data = async function(url, single_article=true, article_object_name='') {
        let get_data = await this.make_request("GET",url);
        if (get_data != false) {
            if (single_article){
                let result = await this.import_external_object(get_data);
                if (result == true) {
                    return true
                } else {
                    return false
                }
            } else {
                let result = await this.import_external_object(get_data, false, article_object_name);
                if (result == true) {
                    return true
                } else {
                    return false
                }
            }
        } else {
            console.log('Error loading url data.');
            return false;
        }
    }

    import_external_object = async function(data, single_article=true, article_object_name='') {
        let decoded_string = decodeURIComponent(data);
        let new_data;
        try {
            new_data = JSON.parse(decoded_string);
        } catch (e) {
            //return console.error(e);
            return false
        }
        let result = false;
        if(single_article){
            result = this.load_blog(new_data);
        } else {
            result = this.load_blog(new_data, false, article_object_name);
        }
        if (result == true) {
            return true;
        } else {
            return false;
        }
    }

    detect_object_type = function(object_array) {
        let obj_declaration = '';
        if(obj_declaration == '') {
            if (('blog_list' in object_array) && ('declaration' in object_array)) {
                if(object_array['declaration'] == 'JSON/MULTI-BLOG') {
                    obj_declaration = 'multi-blog';
                }
            }
            else if (('blog' in object_array) && ('declaration' in object_array)) {
                if(object_array['declaration'] == 'JSON/BLOG') {
                    obj_declaration = 'blog';
                }
            }
            else if (('article' in object_array) && ('declaration' in object_array)) {
                if(object_array['declaration'] == 'JSON/ARTICLE') {
                    obj_declaration = 'article';
                }
            }
            else {
                console.log('Invalid Object!')
            }
        }
        return obj_declaration;
    }
    
    create_new_object = function(object_declaration, object_array, single_article=true, article_object_name='') {
        if (object_declaration == 'multi-blog') {
            let multi_blog_num =  this.multi_blog_list.length + 1;
            window['mblog_multi_blog_' + multi_blog_num] = new Multi_Blog(object_array);
            this.multi_blog_list.push('mblog_multi_blog_' + multi_blog_num);
        } else if (object_declaration == 'blog') {
            if (this.current_multi_blog == ''){
                let blog_num = this.blog_list.length + 1;
                window['mblog_blog_' + blog_num] = new Blog(object_array);
                this.blog_list.push('mblog_blog_' + blog_num);
            } else {
                let temp_string = article_object_name;
                window[temp_string] = new Blog(object_array);
            }
        } else if (object_declaration == 'article') {
            if(single_article){
                let article_num = this.article_list.length + 1;
                window['mblog_article_' + article_num] = new Article(object_array);
                this.article_list.push('mblog_article_' + article_num);
            } else {
                if (this.current_blog != '' && this.current_multi_blog == ''){
                    let temp_string = article_object_name;
                    window[temp_string] = new Article(object_array);
                }
                if (this.current_blog != '' && this.current_multi_blog != ''){
                    let temp_string = article_object_name;
                    window[temp_string] = new Article(object_array);
                }
            }
        }
    }
    
    load_blog = function(blog_object=this.json_object, single_article=true, article_object_name='') {
        let obj_dec = this.detect_object_type(blog_object);
        let is_obj = true;
        let obj_name = '';
        if (obj_dec == 'multi-blog') {
            obj_name = blog_object['multi_blog_name'];
        } else if (obj_dec == 'blog') {
            obj_name = blog_object['blog']['blog_properties']['blog_name'];
        } else if (obj_dec == 'article') {
            obj_name = blog_object['article']['article_name'];
        } else {
            console.log('Error reading json format!');
            is_obj = false;
        }
        if (is_obj) {
            this.create_new_object(obj_dec, blog_object, single_article, article_object_name);
            if (obj_dec == 'article') {
                if(single_article){
                    this.populate_reader_list();
                    if (this.reader_list.length >= 1){
                        this.display_article_list();
                    }
                } 
            }
            if (obj_dec == 'blog') {
                this.display_blog_list();
            }
            if (obj_dec == 'multi-blog') {
                this.display_multi_blog_list();
            }
            return true;
        } else {
            return false;
        }
    }

    set_object = function(object_name) {
        this.current_article = object_name;
        this.set_obj = window[object_name];
    }

    check_if_object_set = function(object_name) {
        if(Object.keys(object_name).length === 0){
            return false;
        } else {
            return true;
        }
    }

    /* DOM HTML Functions */
    check_element_by_id = function(id) {
        let result = document.getElementById(id);
        if (typeof(result) != undefined && result != null) {
            return true;
        } else {
            return false;
        }
    }

    create_element_string = function(el_type='', id='', class_list=[], attributes=[]){
        let singleton_list = [
            "area",
            "base",
            "br",
            "col",
            "embed",
            "hr",
            "img",
            "input",
            "link",
            "meta",
            "param",
            "source",
            "track",
            "wbr"
        ];
        let valid_element = false;
        let string = '<';

        if (el_type != '') {
            valid_element = true;
            string += el_type;
        }

        if (id != '') {
            string += ' id="' + id + '"';
        }

        if (class_list.length >= 1) {
            string += ' class="';
            let i = 1;
            class_list.forEach((class_name) => {
                string += class_name;
                if (i < class_list.length) {
                    string += ' ';
                }
                i++;
            });
            string += '"'
        }

        if (attributes.length >= 1) {
            let i = 1;
            attributes.forEach((attribute_string) => {
                string += ' ' + attribute_string;
                if (i < attributes.length){
                    string += ' ';
                }
                i++;
            });
        }

        if (singleton_list.indexOf(el_type) == -1) {
            string += '></' + el_type + '>';
        } else {
            string += ' />';
        }

        if (valid_element == true){
            return string
        }else{
            return false
        }

    }

    create_element_object = function(el_type='', id='', class_list=[], attributes=[]){
        let new_element = {
            id: id,
            name: "",
            enabled: true,
            value: "",
            class: class_list,
            attributes: attributes,
            inner_html: "",
            el_type: el_type
        }
        return new_element
    }

    add_html_element = function(add_to_element_id='', element_object={}){
        /*
        let element = {
            id: "checkbox-article-title",
            name: "checkbox-article-title",
            enabled: true,
            value: "",
            class: [],
            attributes: ['type="checkbox"', 'checked'],
            inner_html: "",
            el_type: "input"
        }
        */
        let parent_element = document.getElementById(add_to_element_id);
        if (element_object.el_type != '') {
            let child_element = document.createElement(element_object.el_type);
            if (element_object.id != '') {child_element.setAttribute('id', element_object.id);}
            if (element_object.name != '') {child_element.setAttribute('name', element_object.name);}
            if (element_object.enabled == false) {child_element.disabled = true;}
            if (element_object.value != '') {child_element.setAttribute('value', element_object.value);}
            if (element_object.class.length >= 1){
                element_object.class.forEach((class_item) => {
                    child_element.classList.add(class_item);
                });
            }
            if (element_object.inner_html != ''){child_element.appendChild(document.createTextNode(element_object.inner_html));}    
            if (element_object.attributes.length >= 1) {
                element_object.attributes.forEach((attribute) => {
                    let pos_value = attribute.search('="');
                    if (pos_value == -1){
                        child_element.setAttribute(attribute, 'true');
                    } else {
                        let strings = attribute.split('=\"');
                        let string1 = strings[0];
                        let string2 = strings[1].slice(0,-1);
                        child_element.setAttribute(string1, string2);
                    }
                    
                });
            }
            parent_element.appendChild(child_element);
        }
    }

    old_add_html_element = function(add_to_element_id='', element_object={}) {
        let temp_id = '';
        let temp_attributes = element_object.attributes;
        if (element_object.id != '') {
            temp_id = element_object.id;
        }
        if (element_object.name != '') {
            temp_attributes.push('name="' + element_object.name + '"');
        }
        if (element_object.value != '') {
            temp_attributes.push('value="' + element_object.value + '"');
        }
        if (element_object.enabled == false) {
            temp_attributes.push('disabled="true"');
        }
        let string = this.create_element_string(element_object.el_type, temp_id, element_object.class, temp_attributes);
        this.add_html_by_id(add_to_element_id, string);
        if (element_object.inner_html != '' && temp_id != '') {
            this.add_html_by_id(temp_id, element_object.inner_html);
        }
    }

    add_generic_element = function(add_to_element_id='', element_type=''){
        new_object = {
            id: "",
            name: "",
            enabled: true,
            value: "",
            class: [],
            attributes: [],
            inner_html: "",
            el_type: ""
        }
        new_object['el_type'] = element_type;
        this.add_html_element(add_to_element_id, new_object);
    }

    add_html_by_id = function(id='', string='') {
        let result = this.check_element_by_id(id);
        if (result == true) {
            document.getElementById(id).appendChild(document.createTextNode(string));
        }
    }

    clear_inner_html_by_id = function(id) {
        let result = this.check_element_by_id(id);
        if (result == true) {
            //document.getElementById(id).innerHTML = '';
            let myNode = document.getElementById(id);
            myNode.textContent = '';
            if (myNode.hasChildNodes) {
                while (myNode.lastElementChild) {
                    myNode.removeChild(myNode.lastElementChild);
                }
            }
        }
    }

    enable_element_by_id = function(id) {
        let result = this.check_element_by_id(id);
        if (result == true) {
            document.getElementById(id).disabled = false;
        }
    }

    disable_element_by_id = function(id) {
        let result = this.check_element_by_id(id);
        if (result == true) {
            document.getElementById(id).disabled = true;
        }
    }

    hide_element_by_id = function(id) {
        let result = this.check_element_by_id(id);
        if (result == true) {
            document.getElementById(id).style.display = 'none';
        }
    }

    unhide_element_by_id = function(id, display_attr='block') {
        let result = this.check_element_by_id(id);
        if (result == true) {
            document.getElementById(id).style.display = display_attr;
        }
    }

    /* DOM HTML Elememts */
    add_div_element = function(add_to_element='', new_element_id='', new_element_classes = [], new_element_attributes=[]) {
        let new_object = this.create_element_object('div', new_element_id, new_element_classes, new_element_attributes);
        this.add_html_element(add_to_element, new_object);
    }
    add_section_element = function(add_to_element='', new_element_id='', new_element_classes = [], new_element_attributes=[]) {
        let new_object = this.create_element_object('section', new_element_id, new_element_classes, new_element_attributes);
        this.add_html_element(add_to_element, new_object);
    }
    add_article_element = function(add_to_element='', new_element_id='', new_element_classes = [], new_element_attributes=[]) {
        let new_object = this.create_element_object('article', new_element_id, new_element_classes, new_element_attributes);        
        this.add_html_element(add_to_element, new_object);
    }
    add_input_checkbox_element = function(add_to_element='', new_element_id='', new_element_classes=[], new_element_attributes=[], element_name='') {
        new_element_attributes.push('type="checkbox"');
        if (element_name != ''){
            new_element_attributes.push('name="' + element_name + '"');
        }
        let new_object = this.create_element_object('input', new_element_id, new_element_classes, new_element_attributes);        
        this.add_html_element(add_to_element, new_object);
    }
    add_input_text_element = function(add_to_element='', new_element_id='', new_element_classes=[], new_element_attributes=[], element_name='', element_value='', element_placeholder='') {
        if (element_name != ''){
            new_element_attributes.push('name="' + element_name + '"');
        }
        if (element_value != ''){
            new_element_attributes.push('value="' + element_value + '"');
        }
        if (element_placeholder != ''){
            new_element_attributes.push('placeholder="' + element_placeholder + '"');
        }
        new_element_attributes.push('type="text"');
        let new_object = this.create_element_object('input', new_element_id, new_element_classes, new_element_attributes);        
        this.add_html_element(add_to_element, new_object);
    }
    add_input_file_element = function(add_to_element='', new_element_id='', new_element_classes=[], new_element_attributes=[]) {
        new_element_attributes.push('type="file"');
        let new_object = this.create_element_object('input', new_element_id, new_element_classes, new_element_attributes);
        this.add_html_element(add_to_element, new_object);
    }
    add_select_element = function(add_to_element='', new_element_id='', new_element_classes = [], new_element_attributes=[]) {
        let new_object = this.create_element_object('select', new_element_id, new_element_classes, new_element_attributes);
        this.add_html_element(add_to_element, new_object);
    }
    add_option_element = function(add_to_element='', new_element_id='', new_element_classes = [], new_element_attributes=[], element_value='', element_text=''){
        new_element_attributes.push('value="' + element_value + '"');
        let new_object = this.create_element_object('option', new_element_id, new_element_classes, new_element_attributes);
        this.add_html_element(add_to_element, new_object);
        if (element_text != ''){
            this.add_html_by_id(new_element_id, element_text);
        }
    }
    add_button_element = function(add_to_element='', new_element_id='', new_element_classes=[], new_element_attributes=[], button_text='') {
        let new_object = this.create_element_object('button', new_element_id, new_element_classes, new_element_attributes);
        this.add_html_element(add_to_element, new_object);
        if(button_text != ''){
            this.add_html_by_id(new_element_id, button_text);
        }
    }
    add_a_element = function(add_to_element='', new_element_id='', new_element_classes=[], new_element_attributes=[], element_href='', element_text=''){
        new_element_attributes.push('href="' + element_href + '"');
        let new_object = this.create_element_object('a', new_element_id, new_element_classes, new_element_attributes);
        this.add_html_element(add_to_element, new_object);
        if(element_text != ''){
            this.add_html_by_id(new_element_id, element_text);
        }
    }
    add_p_element = function(add_to_element='', new_element_id='', new_element_classes=[], new_element_attributes=[], element_text=''){
        let new_object = this.create_element_object('p', new_element_id, new_element_classes, new_element_attributes);        
        this.add_html_element(add_to_element, new_object);
        if (element_text != '') {
            this.add_html_by_id(new_element_id, element_text);
        }
    }
    add_ul_element = function(add_to_element='', new_element_id='', new_element_classes=[], new_element_attributes=[]){
        let new_object = this.create_element_object('ul', new_element_id, new_element_classes, new_element_attributes);        
        this.add_html_element(add_to_element, new_object);
    }
    add_figure_element = function(add_to_element='', new_element_id='', new_element_classes=[], new_element_attributes=[]){
        let new_object = this.create_element_object('figure', new_element_id, new_element_classes, new_element_attributes);        
        this.add_html_element(add_to_element, new_object);
    }
    add_img_element = function(add_to_element='', new_element_id='', new_element_classes=[], new_element_attributes=[]){
        let new_object = this.create_element_object('img', new_element_id, new_element_classes, new_element_attributes);        
        this.add_html_element(add_to_element, new_object);
    }
    add_blockquote_element = function(add_to_element='', new_element_id='', new_element_classes = [], new_element_attributes=[]){
        let new_object = this.create_element_object('blockquote', new_element_id, new_element_classes, new_element_attributes);
        this.add_html_element(add_to_element, new_object);     
    }
    add_label_element = function(add_to_element='', new_element_id='', new_element_classes=[], new_element_attributes=[], label_for_id='', label_text='') {
        if(label_for_id != ''){
            new_element_attributes.push('for="' + label_for_id + '"');
        }
        let new_object = this.create_element_object('label', new_element_id, new_element_classes, new_element_attributes);
        this.add_html_element(add_to_element, new_object);
        if(label_text != '') {
            this.add_html_by_id(new_element_id, label_text);
        }
    }
    add_span_element = function(add_to_element='', new_element_id='', new_element_classes = [], new_element_attributes=[], element_text=''){
        let new_object = this.create_element_object('span', new_element_id, new_element_classes, new_element_attributes);
        this.add_html_element(add_to_element, new_object);
        if (element_text != '') {
            this.add_html_by_id(new_element_id, element_text);
        }
    }
    add_h1_element = function(add_to_element='', new_element_id='', new_element_classes = [], new_element_attributes=[]){
        let new_object = this.create_element_object('h1', new_element_id, new_element_classes, new_element_attributes);
        this.add_html_element(add_to_element, new_object);
    }
    add_hr_element = function(add_to_element='', new_element_id='', new_element_classes = [], new_element_attributes=[]) {
        let new_object = this.create_element_object('hr', new_element_id, new_element_classes, new_element_attributes);        
        this.add_html_element(add_to_element, new_object);
    }
    add_br_element = function(add_to_element='', new_element_id='', new_element_classes = [], new_element_attributes=[]) {
        let new_object = this.create_element_object('br', new_element_id, new_element_classes, new_element_attributes);
        this.add_html_element(add_to_element, new_object);
    }

    /* Article Terra-Form Functions */

    terraform_include_menu = function(element_id){
        function menu(){
            //element_id > micro-blog-menu
            self.add_html_element(element_id, self.dom_view.elements.menu.menu);
                menu_bar();
                menu_items();
        }
        function menu_bar(){
            function menu_main() {
                //element_id > micro-blog-menu > micro-blog-menu-bar > micro-blog-menu-main
                self.add_html_element(self.dom_view.elements.menu.menu_bar.id, self.dom_view.elements.menu.menu_main);
                    self.add_html_element(self.dom_view.elements.menu.menu_main.id, self.dom_view.elements.menu.menu_button);
            }
            function menu_options(){
                //element_id > micro-blog-menu > micro-blog-menu-bar > micro-blog-menu-options
                self.add_html_element(self.dom_view.elements.menu.menu_bar.id, self.dom_view.elements.menu.menu_options);
                    self.add_br_element(self.dom_view.elements.menu.menu_options.id);
                    self.add_hr_element(self.dom_view.elements.menu.menu_options.id);
                    self.add_html_element(self.dom_view.elements.menu.menu_options.id, self.dom_view.elements.menu.menu_load_blog);
                    self.add_html_element(self.dom_view.elements.menu.menu_options.id, self.dom_view.elements.menu.menu_select_blog);
                    self.add_html_element(self.dom_view.elements.menu.menu_options.id, self.dom_view.elements.menu.menu_view_sections);
                    self.add_html_element(self.dom_view.elements.menu.menu_options.id, self.dom_view.elements.menu.menu_view_items);
            }
            //element_id > micro-blog-menu > micro-blog-menu-bar
            self.add_html_element(self.dom_view.elements.menu.menu.id, self.dom_view.elements.menu.menu_bar);
                menu_main();
                menu_options();
        }
        function menu_items(){
            function load_resources(){
                function url_loader(){
                    //element_id > micro-blog-menu > micro-blog-menu-items > blog-loader > blog-url-loader
                    self.add_html_element(self.dom_view.elements.menu.blog_loader.id, self.dom_view.elements.menu.blog_url_loader);
                        self.add_html_element(self.dom_view.elements.menu.blog_url_loader.id, self.dom_view.elements.menu.load_url_text_box);
                        self.add_html_element(self.dom_view.elements.menu.blog_url_loader.id, self.dom_view.elements.menu.load_url_button);
                        self.add_br_element(self.dom_view.elements.menu.blog_url_loader.id);
                }
                function local_loader(){
                    //element_id > micro-blog-menu > micro-blog-menu-items > blog-loader > blog-local-loader
                    self.add_html_element(self.dom_view.elements.menu.blog_loader.id, self.dom_view.elements.menu.blog_local_loader);
                        self.add_html_element(self.dom_view.elements.menu.blog_local_loader.id, self.dom_view.elements.menu.article_file_upload_label);
                        self.add_html_element(self.dom_view.elements.menu.blog_local_loader.id, self.dom_view.elements.menu.article_file_upload);
                        self.add_br_element(self.dom_view.elements.menu.blog_local_loader.id);
                }
                //element_id > micro-blog-menu > micro-blog-menu-items > blog-loader
                self.add_html_element(self.dom_view.elements.menu.menu_items.id, self.dom_view.elements.menu.blog_loader);
                    url_loader();
                    self.add_br_element(self.dom_view.elements.menu.blog_loader.id);
                    self.add_hr_element(self.dom_view.elements.menu.blog_loader.id);
                    self.add_br_element(self.dom_view.elements.menu.blog_loader.id);
                    local_loader();
            }
            function select_media(){
                function media_selector_types(){
                    function multi_blog_selector(){
                        //element_id > micro-blog-menu > micro-blog-menu-items > media-selector > media-selector-types
                        self.add_html_element(self.dom_view.elements.menu.media_selector_types.id, self.dom_view.elements.menu.multi_blog_selector);
                            self.add_html_element(self.dom_view.elements.menu.multi_blog_selector.id, self.dom_view.elements.menu.current_multi_blog_info);
                                self.add_html_element(self.dom_view.elements.menu.current_multi_blog_info.id, self.dom_view.elements.menu.current_multi_blog_name_label);
                                    self.add_html_element(self.dom_view.elements.menu.current_multi_blog_name_label.id, self.dom_view.elements.menu.current_multi_blog_name);
                            self.add_html_element(self.dom_view.elements.menu.multi_blog_selector.id, self.dom_view.elements.menu.multi_blogs_selection_label);
                            self.add_html_element(self.dom_view.elements.menu.multi_blog_selector.id, self.dom_view.elements.menu.multi_blogs_selection);
                                self.add_option_element(self.dom_view.elements.menu.multi_blogs_selection.id, 'multi-blogs-select-placeholder', [], ['disabled', 'selected'], '', 'Choose Multi-blog');
                            self.add_html_element(self.dom_view.elements.menu.multi_blog_selector.id ,self.dom_view.elements.menu.multi_blog_selector_buttons);
                                self.add_html_element(self.dom_view.elements.menu.multi_blog_selector_buttons.id, self.dom_view.elements.menu.load_multi_blog_button);
                                self.add_html_element(self.dom_view.elements.menu.multi_blog_selector_buttons.id, self.dom_view.elements.menu.close_multi_blog_button);
                    }
                    function blog_selector(){
                        //element_id > micro-blog-menu > micro-blog-menu-items > media-selector > media-selector-types
                        self.add_html_element(self.dom_view.elements.menu.media_selector_types.id, self.dom_view.elements.menu.blog_selector);
                            self.add_html_element(self.dom_view.elements.menu.blog_selector.id, self.dom_view.elements.menu.current_blog_info);
                                self.add_html_element(self.dom_view.elements.menu.current_blog_info.id, self.dom_view.elements.menu.current_blog_name_label);
                                    self.add_html_element(self.dom_view.elements.menu.current_blog_name_label.id, self.dom_view.elements.menu.current_blog_name);
                                self.add_html_element(self.dom_view.elements.menu.blog_selector.id, self.dom_view.elements.menu.blogs_selection_label);
                                self.add_html_element(self.dom_view.elements.menu.blog_selector.id, self.dom_view.elements.menu.blogs_selection);
                                    self.add_option_element(self.dom_view.elements.menu.blogs_selection.id, 'blogs-select-placeholder',[],['disabled','selected'],'','Choose a blog');
                                self.add_html_element(self.dom_view.elements.menu.blog_selector.id, self.dom_view.elements.menu.blog_selector_buttons);
                                    self.add_html_element(self.dom_view.elements.menu.blog_selector_buttons.id, self.dom_view.elements.menu.load_blog_button);
                                    self.add_html_element(self.dom_view.elements.menu.blog_selector_buttons.id, self.dom_view.elements.menu.close_blog_button);
                    }
                    function article_selector(){
                        //element_id > micro-blog-menu > micro-blog-menu-items > media-selector > media-selector-types
                        self.add_html_element(self.dom_view.elements.menu.media_selector_types.id, self.dom_view.elements.menu.article_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_selector.id, self.dom_view.elements.menu.current_article_info);
                                self.add_html_element(self.dom_view.elements.menu.current_article_info.id, self.dom_view.elements.menu.current_article_name_label);
                                    self.add_html_element(self.dom_view.elements.menu.current_article_name_label.id ,self.dom_view.elements.menu.current_article_name);
                                self.add_html_element(self.dom_view.elements.menu.article_selector.id, self.dom_view.elements.menu.articles_selection_label);
                                self.add_html_element(self.dom_view.elements.menu.article_selector.id, self.dom_view.elements.menu.articles_selection);
                                    self.add_option_element(self.dom_view.elements.menu.articles_selection.id, 'articles-select-placeholder',[],['disabled','selected'],'','Choose a article');
                                self.add_html_element(self.dom_view.elements.menu.article_selector.id, self.dom_view.elements.menu.article_selector_buttons);
                                    self.add_html_element(self.dom_view.elements.menu.article_selector_buttons.id, self.dom_view.elements.menu.load_article_button);
                                    self.add_html_element(self.dom_view.elements.menu.article_selector_buttons.id, self.dom_view.elements.menu.close_article_button);
                    }
                    //element_id > micro-blog-menu > micro-blog-menu-items > media-selector > media-selector-types
                    self.add_html_element(self.dom_view.elements.menu.media_selector.id, self.dom_view.elements.menu.media_selector_types);
                        multi_blog_selector();
                        self.add_hr_element(self.dom_view.elements.menu.media_selector_types.id);
                        blog_selector();
                        self.add_hr_element(self.dom_view.elements.menu.media_selector_types.id);
                        article_selector();
                }
                //element_id > micro-blog-menu > micro-blog-menu-items > media-selector
                self.add_html_element(self.dom_view.elements.menu.menu_items.id, self.dom_view.elements.menu.media_selector);
                media_selector_types();
            }
            function article_view_options(){
                function article_section_options(){
                    //Section checkbox id's already exist in another object.  BACKTRACK
                    function add_article_title_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_sections_options.id, self.dom_view.elements.menu.article_title_section);
                            self.add_html_element(self.dom_view.elements.menu.article_title_section.id, self.dom_view.elements.menu.checkbox_article_title_section_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_title_section_label.id, self.dom_view.elements.menu.checkbox_article_title_section);
                    }
                    function add_article_warning_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_sections_options.id, self.dom_view.elements.menu.article_warnings_section);
                            self.add_html_element(self.dom_view.elements.menu.article_warnings_section.id, self.dom_view.elements.menu.checkbox_article_warnings_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_warnings_label.id, self.dom_view.elements.menu.checkbox_article_warnings_section);
                    }
                    function add_article_body_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_sections_options.id, self.dom_view.elements.menu.article_body_section);
                            self.add_html_element(self.dom_view.elements.menu.article_body_section.id, self.dom_view.elements.menu.checkbox_article_body_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_body_label.id, self.dom_view.elements.menu.checkbox_article_body_section);
                    }
                    function add_article_sources_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_sections_options.id, self.dom_view.elements.menu.article_sources_list_section);
                            self.add_html_element(self.dom_view.elements.menu.article_sources_list_section.id, self.dom_view.elements.menu.checkbox_article_sources_list_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_sources_list_label.id, self.dom_view.elements.menu.checkbox_article_sources_section);
                    }
                    function add_article_links_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_sections_options.id, self.dom_view.elements.menu.article_links_list_section);
                            self.add_html_element(self.dom_view.elements.menu.article_links_list_section.id, self.dom_view.elements.menu.checkbox_article_links_list_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_links_list_label.id, self.dom_view.elements.menu.checkbox_article_links_section);
                    }
                    function add_article_information_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_sections_options.id, self.dom_view.elements.menu.article_information_list_section);
                            self.add_html_element(self.dom_view.elements.menu.article_information_list_section.id, self.dom_view.elements.menu.checkbox_article_information_list_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_information_list_label.id, self.dom_view.elements.menu.checkbox_article_information_list_section);
                    }
                    function add_author_information_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_sections_options.id, self.dom_view.elements.menu.author_information_section);
                            self.add_html_element(self.dom_view.elements.menu.author_information_section.id, self.dom_view.elements.menu.checkbox_author_information_list_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_author_information_list_label.id, self.dom_view.elements.menu.checkbox_author_information_list_section);
                    }
                    function add_author_affiliation_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_sections_options.id, self.dom_view.elements.menu.author_affiliation_section);
                            self.add_html_element(self.dom_view.elements.menu.author_affiliation_section.id, self.dom_view.elements.menu.checkbox_author_affiliation_list_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_author_affiliation_list_label.id, self.dom_view.elements.menu.checkbox_author_affiliation_list_section);
                    }
                    //element_id > micro-blog-menu > micro-blog-menu-items
                    self.add_html_element(self.dom_view.elements.menu.menu_items.id, self.dom_view.elements.menu.sections_selector);
                        self.add_html_element(self.dom_view.elements.menu.sections_selector.id, self.dom_view.elements.menu.blog_sections_options);
                            add_article_title_section();
                            add_article_warning_section();
                            add_article_body_section();
                            add_article_sources_section();
                            add_article_links_section();
                            add_article_information_section();
                            add_author_information_section();
                            add_author_affiliation_section();
                }
                function article_item_options(){
                    //Be Sure to pull id's and names from proper dom_item_options_list
                    function add_article_title_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.article_title_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_title_selector.id, self.dom_view.elements.menu.checkbox_article_title_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_title_label.id, self.dom_view.elements.menu.checkbox_article_title);
                    }
                    function add_article_title_author_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.article_title_author_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_title_author_selector.id, self.dom_view.elements.menu.checkbox_article_title_author_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_title_author_label.id, self.dom_view.elements.menu.checkbox_article_title_author);
                    }
                    function add_article_summary_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.article_summary_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_summary_selector.id, self.dom_view.elements.menu.checkbox_article_summary_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_summary_label.id, self.dom_view.elements.menu.checkbox_article_summary);
                    }
                    function add_article_rating_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.article_rating_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_rating_selector.id, self.dom_view.elements.menu.checkbox_article_rating_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_rating_label.id, self.dom_view.elements.menu.checkbox_article_rating);
                    }
                    function add_article_content_warning_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.article_content_warning_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_content_warning_selector.id, self.dom_view.elements.menu.checkbox_article_content_warning_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_content_warning_label.id, self.dom_view.elements.menu.checkbox_article_content_warning);
                    }
                    function add_article_content_trigger_warning_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.article_content_trigger_warning_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_content_trigger_warning_selector.id, self.dom_view.elements.menu.checkbox_article_content_trigger_warning_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_content_trigger_warning_label.id, self.dom_view.elements.menu.checkbox_article_content_trigger_warning);
                    }
                    function add_article_articles_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.article_articles_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_articles_selector.id, self.dom_view.elements.menu.checkbox_articles_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_articles_label.id, self.dom_view.elements.menu.checkbox_articles);
                    }
                    function add_article_sources_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.article_sources_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_sources_selector.id, self.dom_view.elements.menu.checkbox_article_sources_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_sources_label.id, self.dom_view.elements.menu.checkbox_article_sources);
                    }
                    function add_article_links_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.article_links_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_links_selector.id, self.dom_view.elements.menu.checkbox_article_links_section_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_links_section_label.id, self.dom_view.elements.menu.checkbox_article_links);
                    }
                    function add_article_date_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.article_date_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_date_selector.id, self.dom_view.elements.menu.checkbox_article_date_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_date_label.id, self.dom_view.elements.menu.checkbox_article_date);
                    }
                    function add_article_time_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.article_time_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_time_selector.id, self.dom_view.elements.menu.checkbox_article_time_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_time_label.id, self.dom_view.elements.menu.checkbox_article_time);
                    }
                    function add_article_location_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.article_location_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_location_selector.id, self.dom_view.elements.menu.checkbox_article_location_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_location_label.id, self.dom_view.elements.menu.checkbox_article_location);
                    }
                    function add_article_geo_location_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.article_geo_location_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_geo_location_selector.id, self.dom_view.elements.menu.checkbox_article_geo_location_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_geo_location_label.id, self.dom_view.elements.menu.checkbox_article_geo_location);
                    }
                    function add_article_tags_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.article_tags_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_tags_selector.id, self.dom_view.elements.menu.checkbox_article_tags_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_tags_label.id, self.dom_view.elements.menu.checkbox_article_tags);
                    }
                    function add_article_categories_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.article_categories_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_categories_selector.id, self.dom_view.elements.menu.checkbox_article_categories_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_categories_label.id, self.dom_view.elements.menu.checkbox_article_categories);
                    }
                    function add_article_sub_categories_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.article_sub_categories_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_sub_categories_selector.id, self.dom_view.elements.menu.checkbox_article_sub_categories_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_sub_categories_label.id, self.dom_view.elements.menu.checkbox_article_sub_categories);
                    }
                    function add_article_niche_categories_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.article_niche_categories_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_niche_categories_selector.id, self.dom_view.elements.menu.checkbox_article_niche_categories_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_niche_categories_label.id, self.dom_view.elements.menu.checkbox_article_niche_categories);
                    }
                    function add_article_urls_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.article_urls_selector);
                            self.add_html_element(self.dom_view.elements.menu.article_urls_selector.id, self.dom_view.elements.menu.checkbox_article_urls_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_article_urls_label.id, self.dom_view.elements.menu.checkbox_article_urls);
                    }
                    function add_author_name_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.author_name_selector);
                            self.add_html_element(self.dom_view.elements.menu.author_name_selector.id, self.dom_view.elements.menu.checkbox_author_name_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_author_name_label.id, self.dom_view.elements.menu.checkbox_author_name);
                    }
                    function add_author_email_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.author_email_selector);
                            self.add_html_element(self.dom_view.elements.menu.author_email_selector.id, self.dom_view.elements.menu.checkbox_author_email_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_author_email_label.id, self.dom_view.elements.menu.checkbox_author_email);
                    }
                    function add_author_social_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.author_social_selector);
                            self.add_html_element(self.dom_view.elements.menu.author_social_selector.id, self.dom_view.elements.menu.checkbox_author_social_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_author_social_label.id, self.dom_view.elements.menu.checkbox_author_social);
                    }
                    function add_author_site_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.author_site_selector);
                            self.add_html_element(self.dom_view.elements.menu.author_site_selector.id, self.dom_view.elements.menu.checkbox_author_site_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_author_site_label.id, self.dom_view.elements.menu.checkbox_author_site);
                    }
                    function add_author_bio_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.author_summary_selector);
                            self.add_html_element(self.dom_view.elements.menu.author_summary_selector.id, self.dom_view.elements.menu.checkbox_author_summary_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_author_summary_label.id, self.dom_view.elements.menu.checkbox_author_summary);
                    }
                    function add_author_tags_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.author_tags_selector);
                            self.add_html_element(self.dom_view.elements.menu.author_tags_selector.id, self.dom_view.elements.menu.checkbox_author_tags_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_author_tags_label.id, self.dom_view.elements.menu.checkbox_author_tags);
                    }
                    function add_author_affiliate_company_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.author_affiliate_company_selector);
                            self.add_html_element(self.dom_view.elements.menu.author_affiliate_company_selector.id, self.dom_view.elements.menu.checkbox_author_affiliate_company_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_author_affiliate_company_label.id, self.dom_view.elements.menu.checkbox_author_affiliate_company);
                    }
                    function add_author_affiliate_organization_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.author_affiliate_organization_selector);
                            self.add_html_element(self.dom_view.elements.menu.author_affiliate_organization_selector.id, self.dom_view.elements.menu.checkbox_author_affiliate_organization_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_author_affiliate_organization_label.id, self.dom_view.elements.menu.checkbox_author_affiliate_organization);
                    }
                    function add_author_affiliate_email_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.author_affiliate_email_selector);
                            self.add_html_element(self.dom_view.elements.menu.author_affiliate_email_selector.id, self.dom_view.elements.menu.checkbox_author_affiliate_email_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_author_affiliate_email_label.id, self.dom_view.elements.menu.checkbox_author_affiliate_email);
                    }
                    function add_author_affiliate_site_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.author_affiliate_site_selector);
                            self.add_html_element(self.dom_view.elements.menu.author_affiliate_site_selector.id, self.dom_view.elements.menu.checkbox_author_affiliate_site_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_author_affiliate_site_label.id, self.dom_view.elements.menu.checkbox_author_affiliate_site);
                    }
                    function add_author_affiliate_tags_section(){
                        self.add_html_element(self.dom_view.elements.menu.blog_items_selector.id, self.dom_view.elements.menu.author_affiliate_tags_selector);
                            self.add_html_element(self.dom_view.elements.menu.author_affiliate_tags_selector.id, self.dom_view.elements.menu.checkbox_author_affiliate_tags_label);
                                self.add_html_element(self.dom_view.elements.menu.checkbox_author_affiliate_tags_label.id, self.dom_view.elements.menu.checkbox_author_affiliate_tags);
                    }
                    //element_id > micro-blog-menu > micro-blog-menu-items
                    self.add_html_element(self.dom_view.elements.menu.menu_items.id, self.dom_view.elements.menu.items_selector);
                        self.add_html_element(self.dom_view.elements.menu.items_selector.id, self.dom_view.elements.menu.blog_items_options);
                            self.add_html_element(self.dom_view.elements.menu.blog_items_options.id, self.dom_view.elements.menu.blog_items_selector);
                                add_article_title_section();
                                add_article_title_author_section();
                                add_article_summary_section();
                                add_article_rating_section();
                                add_article_content_warning_section();
                                add_article_content_trigger_warning_section();
                                add_article_articles_section();
                                add_article_sources_section();
                                add_article_links_section();
                                add_article_date_section();
                                add_article_time_section();
                                add_article_location_section();
                                add_article_geo_location_section();
                                add_article_tags_section();
                                add_article_categories_section();
                                add_article_sub_categories_section();
                                add_article_niche_categories_section();
                                add_article_urls_section();
                                add_author_name_section();
                                add_author_email_section();
                                add_author_social_section();
                                add_author_site_section();
                                add_author_bio_section();
                                add_author_tags_section();
                                add_author_affiliate_company_section();
                                add_author_affiliate_organization_section();
                                add_author_affiliate_email_section();
                                add_author_affiliate_site_section();
                                add_author_affiliate_tags_section();        
                }
                //element_id > micro-blog-menu > micro-blog-menu-items
                article_section_options();
                article_item_options();
            }
            //element_id > micro-blog-menu > micro-blog-menu-items
            self.add_html_element(self.dom_view.elements.menu.menu.id, self.dom_view.elements.menu.menu_items);
                load_resources();
                select_media();
                article_view_options();
        }
        menu();
    }

    terraform_include_reader = function(element_id){
        function blog_reader(){
            function article_main(){
                function article_header() {
                    function title_section(){
                        self.add_html_element(self.dom_view.elements.reader.article_header.id, self.dom_view.elements.reader_sections.title_section);
                            self.add_html_element(self.dom_view.elements.reader_sections.title_section.id, self.dom_view.elements.reader_items.article_title);
                            self.add_html_element(self.dom_view.elements.reader_sections.title_section.id, self.dom_view.elements.reader.title_author);
                                self.add_html_element(self.dom_view.elements.reader.title_author.id, self.dom_view.elements.reader.written_by_label);
                                self.add_html_element(self.dom_view.elements.reader.title_author.id, self.dom_view.elements.reader_items.title_author_name);
                            self.add_html_element(self.dom_view.elements.reader_sections.title_section.id, self.dom_view.elements.reader.header_summary);
                                self.add_html_element(self.dom_view.elements.reader.header_summary.id, self.dom_view.elements.reader.article_short_summary);
                                    self.add_html_element(self.dom_view.elements.reader.article_short_summary.id, self.dom_view.elements.reader_items.article_summary);
                            self.add_hr_element(self.dom_view.elements.reader_sections.title_section.id);
                    }
                    function article_warnings(){
                        self.add_html_element(self.dom_view.elements.reader.article_header.id, self.dom_view.elements.reader_sections.article_warnings);
                            self.add_html_element(self.dom_view.elements.reader_sections.article_warnings.id, self.dom_view.elements.reader.article_rating_label);
                                self.add_html_element(self.dom_view.elements.reader.article_rating_label.id, self.dom_view.elements.reader.article_rating_label_wrapper);
                                self.add_html_element(self.dom_view.elements.reader.article_rating_label.id, self.dom_view.elements.reader_items.article_rating);
                            self.add_html_element(self.dom_view.elements.reader_sections.article_warnings.id, self.dom_view.elements.reader_sections.content_warning_wrapper);
                                self.add_html_element(self.dom_view.elements.reader_sections.content_warning_wrapper.id, self.dom_view.elements.reader.content_warning_label);
                                    self.add_html_element(self.dom_view.elements.reader.content_warning_label.id, self.dom_view.elements.reader.content_warning_text_wrapper);
                                self.add_html_element(self.dom_view.elements.reader_sections.content_warning_wrapper.id, self.dom_view.elements.reader_items.content_warning);

                            self.add_html_element(self.dom_view.elements.reader_sections.article_warnings.id, self.dom_view.elements.reader_sections.content_trigger_warning_wrapper);
                                self.add_html_element(self.dom_view.elements.reader_sections.content_trigger_warning_wrapper.id, self.dom_view.elements.reader.content_trigger_warning_label);
                                    self.add_html_element(self.dom_view.elements.reader.content_trigger_warning_label.id, self.dom_view.elements.reader.content_trigger_warnings_label_text);
                                self.add_html_element(self.dom_view.elements.reader_sections.content_trigger_warning_wrapper.id, self.dom_view.elements.reader_items.content_trigger_warning);
                            self.add_hr_element(self.dom_view.elements.reader_sections.article_warnings.id);
                    }

                    self.add_html_element(self.dom_view.elements.reader.article_main.id, self.dom_view.elements.reader.article_header);
                    title_section();
                    article_warnings();
                }
                function article_body(){
                    self.add_html_element(self.dom_view.elements.reader.article_main.id, self.dom_view.elements.reader_sections.article_body);
                        self.add_html_element(self.dom_view.elements.reader_sections.article_body.id, self.dom_view.elements.reader_items.article_paragraphs);
                        self.add_hr_element(self.dom_view.elements.reader_sections.article_body.id);
                }
                function article_footer(){
                    function article_sources(){
                        self.add_html_element(self.dom_view.elements.reader_sections.article_footer.id, self.dom_view.elements.reader_sections.article_sources_list);
                            self.add_p_element(self.dom_view.elements.reader_sections.article_sources_list.id,'article-sources-label',['item-label'],[],'Article Sources:');
                            self.add_html_element(self.dom_view.elements.reader_sections.article_sources_list.id, self.dom_view.elements.reader_items.article_sources);
                            self.add_hr_element(self.dom_view.elements.reader_sections.article_sources_list.id);
                    }
                    function article_links(){
                        self.add_html_element(self.dom_view.elements.reader_sections.article_footer.id, self.dom_view.elements.reader_sections.article_links_list);
                            self.add_p_element(self.dom_view.elements.reader_sections.article_links_list.id, 'article-links-label',['item-label'],[],'Article Links:');
                            self.add_html_element(self.dom_view.elements.reader_sections.article_links_list.id, self.dom_view.elements.reader_items.article_links);
                            self.add_hr_element(self.dom_view.elements.reader_sections.article_links_list.id);
                    }
                    function article_information(){
                        function article_information_list(){
                            //'            <section id="article-information-list">' + '\n' +
                            self.add_html_element(self.dom_view.elements.reader.article_information.id, self.dom_view.elements.reader_sections.article_information_list);
                            //'                <!--<details>' + '\n' +
                            //'                    <summary>Article Information</summary>-->'
                                self.add_html_element(self.dom_view.elements.reader_sections.article_information_list.id, self.dom_view.elements.reader.article_data);

                                    self.add_html_element(self.dom_view.elements.reader.article_data.id, self.dom_view.elements.reader.article_date_time_location_label);
                                        self.add_html_element(self.dom_view.elements.reader.article_date_time_location_label.id, self.dom_view.elements.reader.article_date_label);
                                            self.add_html_element(self.dom_view.elements.reader.article_date_label.id, self.dom_view.elements.reader_items.article_date);
                                        self.add_html_element(self.dom_view.elements.reader.article_date_time_location_label.id, self.dom_view.elements.reader.article_time_label);
                                            self.add_html_element(self.dom_view.elements.reader.article_time_label.id, self.dom_view.elements.reader_items.article_time);
                                        self.add_br_element(self.dom_view.elements.reader.article_date_time_location_label.id);
                                        self.add_html_element(self.dom_view.elements.reader.article_date_time_location_label.id, self.dom_view.elements.reader.article_location_label);
                                            self.add_html_element(self.dom_view.elements.reader.article_location_label.id, self.dom_view.elements.reader_items.article_location);
                                        self.add_html_element(self.dom_view.elements.reader.article_date_time_location_label.id, self.dom_view.elements.reader.article_geo_location_label);
                                            self.add_html_element(self.dom_view.elements.reader.article_geo_location_label.id, self.dom_view.elements.reader_items.article_geo_tag);
                                            self.add_html_by_id(self.dom_view.elements.reader.article_geo_location_label.id,')');
                                        self.add_br_element(self.dom_view.elements.reader.article_date_time_location_label.id);

                                self.add_html_element(self.dom_view.elements.reader_sections.article_information_list.id, self.dom_view.elements.reader.article_tags_wrapper);
                                    self.add_html_element(self.dom_view.elements.reader.article_tags_wrapper.id, self.dom_view.elements.reader.article_tags_label);
                                    self.add_html_element(self.dom_view.elements.reader.article_tags_wrapper.id, self.dom_view.elements.reader_items.article_tags);

                                self.add_html_element(self.dom_view.elements.reader_sections.article_information_list.id, self.dom_view.elements.reader.article_categories_wrapper);
                                    self.add_html_element(self.dom_view.elements.reader.article_categories_wrapper.id, self.dom_view.elements.reader.article_categories_label);
                                    self.add_html_element(self.dom_view.elements.reader.article_categories_wrapper.id, self.dom_view.elements.reader_items.article_categories);

                                self.add_html_element(self.dom_view.elements.reader_sections.article_information_list.id, self.dom_view.elements.reader.article_sub_categories_wrapper);
                                    self.add_html_element(self.dom_view.elements.reader.article_sub_categories_wrapper.id, self.dom_view.elements.reader.article_sub_categories_label);
                                    self.add_html_element(self.dom_view.elements.reader.article_sub_categories_wrapper.id, self.dom_view.elements.reader_items.article_sub_categories);

                                self.add_html_element(self.dom_view.elements.reader_sections.article_information_list.id, self.dom_view.elements.reader.article_niche_categories_wrapper);
                                    self.add_html_element(self.dom_view.elements.reader.article_niche_categories_wrapper.id, self.dom_view.elements.reader.article_niche_categories_label);
                                    self.add_html_element(self.dom_view.elements.reader.article_niche_categories_wrapper.id, self.dom_view.elements.reader_items.article_niche_categories);

                                self.add_html_element(self.dom_view.elements.reader_sections.article_information_list.id, self.dom_view.elements.reader.article_urls_wrapper);
                                    self.add_html_element(self.dom_view.elements.reader.article_urls_wrapper.id, self.dom_view.elements.reader.article_urls_label);
                                    self.add_html_element(self.dom_view.elements.reader.article_urls_wrapper.id, self.dom_view.elements.reader_items.article_urls);
                            //'                <!--</details>-->'
                                self.add_hr_element(self.dom_view.elements.reader_sections.article_information_list.id);
                        }
                        function author_information(){
                            function author_info(){
                                //'                <section id="author-information-wrapper">' + '\n' +
                                self.add_html_element(self.dom_view.elements.reader.article_author_information_section.id, self.dom_view.elements.reader_sections.author_information_list);
                                //'                    <!--<details>' + '\n' +
                                //'                        <summary>Author</summary>-->'
                                    self.add_html_element(self.dom_view.elements.reader_sections.author_information_list.id, self.dom_view.elements.reader.author_name_label);
                                        self.add_html_element(self.dom_view.elements.reader.author_name_label.id, self.dom_view.elements.reader.author_name_wrapper);
                                            self.add_html_element(self.dom_view.elements.reader.author_name_wrapper.id, self.dom_view.elements.reader_items.author_name);
                                            self.add_br_element(self.dom_view.elements.reader.author_name_wrapper.id)

                                        self.add_html_element(self.dom_view.elements.reader.author_name_label.id, self.dom_view.elements.reader.author_email_wrapper);
                                            self.add_html_element(self.dom_view.elements.reader.author_email_wrapper.id, self.dom_view.elements.reader.author_email_label);
                                            self.add_html_element(self.dom_view.elements.reader.author_email_wrapper.id, self.dom_view.elements.reader_items.author_email);
                                            self.add_br_element(self.dom_view.elements.reader.author_email_wrapper.id);

                                        self.add_html_element(self.dom_view.elements.reader.author_name_label.id, self.dom_view.elements.reader.author_site_wrapper);
                                            self.add_html_element(self.dom_view.elements.reader.author_site_wrapper.id, self.dom_view.elements.reader.author_website_label);
                                            self.add_html_element(self.dom_view.elements.reader.author_site_wrapper.id, self.dom_view.elements.reader_items.author_site);
                                            self.add_br_element(self.dom_view.elements.reader.author_site_wrapper.id);

                                    self.add_html_element(self.dom_view.elements.reader_sections.author_information_list.id, self.dom_view.elements.reader.author_social_links);
                                        self.add_html_element(self.dom_view.elements.reader.author_social_links.id, self.dom_view.elements.reader.author_social_label_wrapper);
                                            self.add_html_element(self.dom_view.elements.reader.author_social_label_wrapper.id, self.dom_view.elements.reader.author_social_label);
                                        self.add_html_element(self.dom_view.elements.reader.author_social_links.id, self.dom_view.elements.reader_items.author_social);

                                    self.add_html_element(self.dom_view.elements.reader_sections.author_information_list.id, self.dom_view.elements.reader.author_summary_wrapper);
                                        self.add_html_element(self.dom_view.elements.reader.author_summary_wrapper.id, self.dom_view.elements.reader.author_summary_label);
                                        self.add_html_element(self.dom_view.elements.reader.author_summary_wrapper.id, self.dom_view.elements.reader_items.author_summary);

                                    self.add_html_element(self.dom_view.elements.reader_sections.author_information_list.id, self.dom_view.elements.reader.author_tags_wrapper);
                                        self.add_html_element(self.dom_view.elements.reader.author_tags_wrapper.id, self.dom_view.elements.reader.author_tags_label);
                                        self.add_html_element(self.dom_view.elements.reader.author_tags_wrapper.id, self.dom_view.elements.reader_items.author_tags);
                                //'                    <!--</details>-->' + '
                                    self.add_hr_element(self.dom_view.elements.reader_sections.author_information_list.id);
                            }
                            function author_affiliations(){
                                //'                <section id="affiliations">' + '\n' +
                                self.add_html_element(self.dom_view.elements.reader.article_author_information_section.id, self.dom_view.elements.reader_sections.affiliations);
                                //'                    <!--<details>' + '\n' +
                                //'                        <summary>Author affiliation</summary>-->' + '\n' +
                                    self.add_html_element(self.dom_view.elements.reader_sections.affiliations.id, self.dom_view.elements.reader.affiliate_text_wrapper);
                                        self.add_html_element(self.dom_view.elements.reader.affiliate_text_wrapper.id, self.dom_view.elements.reader.affiliate_company_wrapper);
                                            self.add_html_element(self.dom_view.elements.reader.affiliate_company_wrapper.id, self.dom_view.elements.reader.affiliate_company_label);
                                            self.add_html_element(self.dom_view.elements.reader.affiliate_company_wrapper.id, self.dom_view.elements.reader_items.affiliate_company);
                                            self.add_br_element(self.dom_view.elements.reader.affiliate_company_wrapper.id);

                                        self.add_html_element(self.dom_view.elements.reader.affiliate_text_wrapper.id, self.dom_view.elements.reader.affiliate_organization_wrapper);
                                            self.add_html_element(self.dom_view.elements.reader.affiliate_organization_wrapper.id, self.dom_view.elements.reader.affiliate_organization_label);
                                            self.add_html_element(self.dom_view.elements.reader.affiliate_organization_wrapper.id, self.dom_view.elements.reader_items.affiliate_organization);
                                            self.add_br_element(self.dom_view.elements.reader.affiliate_organization_wrapper.id);

                                        self.add_html_element(self.dom_view.elements.reader.affiliate_text_wrapper.id, self.dom_view.elements.reader.affiliate_website_wrapper);
                                            self.add_html_element(self.dom_view.elements.reader.affiliate_website_wrapper.id, self.dom_view.elements.reader.affiliate_website_label);
                                            self.add_html_element(self.dom_view.elements.reader.affiliate_website_wrapper.id, self.dom_view.elements.reader_items.affiliate_site);
                                            self.add_br_element(self.dom_view.elements.reader.affiliate_website_wrapper.id);

                                        self.add_html_element(self.dom_view.elements.reader.affiliate_text_wrapper.id, self.dom_view.elements.reader.affiliate_email_wrapper);
                                            self.add_html_element(self.dom_view.elements.reader.affiliate_email_wrapper.id, self.dom_view.elements.reader.affiliate_email_label);
                                            self.add_html_element(self.dom_view.elements.reader.affiliate_email_wrapper.id, self.dom_view.elements.reader_items.affiliate_email);
                                            self.add_br_element(self.dom_view.elements.reader.affiliate_email_wrapper.id);

                                    self.add_html_element(self.dom_view.elements.reader_sections.affiliations.id, self.dom_view.elements.reader.affiliate_tags_wrapper);
                                        self.add_html_element(self.dom_view.elements.reader.affiliate_tags_wrapper.id, self.dom_view.elements.reader.affiliate_tags_label);
                                        self.add_html_element(self.dom_view.elements.reader.affiliate_tags_wrapper.id, self.dom_view.elements.reader_items.affiliate_tags);
                                //'                    <!--</details>-->' + '\n' +
                            }
                            //'            <section id="author-information">' + '\n';
                            self.add_html_element(self.dom_view.elements.reader.article_information.id, self.dom_view.elements.reader.article_author_information_section);
                                author_info();
                                author_affiliations();
                        }
                        //'        <section id="article-information">' + '\n';
                        self.add_html_element(self.dom_view.elements.reader_sections.article_footer.id, self.dom_view.elements.reader.article_information);
                            article_information_list();
                            author_information();
                    }
                    //'    <section id="article-footer">' + '\n';
                    self.add_html_element(self.dom_view.elements.reader.article_main.id, self.dom_view.elements.reader_sections.article_footer);
                        article_sources();
                        article_links();
                        article_information();
                    //'    </section><!--article-footer-->' + '\n';
                }
                self.add_div_element(self.dom_view.elements.reader.micro_blog.id, "top-of-blog-article");
                self.add_html_element(self.dom_view.elements.reader.micro_blog.id, self.dom_view.elements.reader.article_main);
                article_header();
                article_body();
                article_footer();
            }
            //'<section id="micro-blog" class="parent-block"> <!--Blog Reader-->' + '\n';
            self.add_html_element(element_id, self.dom_view.elements.reader.micro_blog);
            article_main();
        }
        blog_reader();
    }

    terraform_include_reader_nav = function(element_id) {
        function nav_section(){
            function prev_next_selector(){
                function previous_article_section(){
                    self.add_html_element(self.dom_view.elements.reader_nav.article_nav_prev_next_wrapper.id, self.dom_view.elements.reader_nav.article_nav_previous_article_section);
                        self.add_html_element(self.dom_view.elements.reader_nav.article_nav_previous_article_section.id, self.dom_view.elements.reader_nav.article_nav_previous_article_info);
                            self.add_html_element(self.dom_view.elements.reader_nav.article_nav_previous_article_info.id, self.dom_view.elements.reader_nav.article_nav_previous_article_name);
                        self.add_html_element(self.dom_view.elements.reader_nav.article_nav_previous_article_section.id, self.dom_view.elements.reader_nav.article_nav_previous_article_button);
                }
                /*
                function article_info_section(){
                    self.add_html_element(self.dom_view.elements.reader_nav.article_nav_prev_next_wrapper.id, self.dom_view.elements.reader_nav.article_nav_articles_info);
                        self.add_html_element(self.dom_view.elements.reader_nav.article_nav_articles_info.id, self.dom_view.elements.reader_nav.article_nav_articles_count);
                            self.add_html_element(self.dom_view.elements.reader_nav.article_nav_articles_count.id, self.dom_view.elements.reader_nav.article_nav_articles_count_paragraph);
                                self.add_html_element(self.dom_view.elements.reader_nav.article_nav_articles_count_paragraph.id, self.dom_view.elements.reader_nav.current_article_number);
                                self.add_html_by_id(self.dom_view.elements.reader_nav.article_nav_articles_count_paragraph.id, " of ");
                                self.add_html_element(self.dom_view.elements.reader_nav.article_nav_articles_count_paragraph.id, self.dom_view.elements.reader_nav.total_article_count);
                                self.add_html_by_id(self.dom_view.elements.reader_nav.article_nav_articles_count_paragraph.id, " Articles.");
                }
                */
                function next_article_section(){
                    self.add_html_element(self.dom_view.elements.reader_nav.article_nav_prev_next_wrapper.id, self.dom_view.elements.reader_nav.article_nav_next_article_section);
                        self.add_html_element(self.dom_view.elements.reader_nav.article_nav_next_article_section.id, self.dom_view.elements.reader_nav.article_nav_next_article_info);
                            self.add_html_element(self.dom_view.elements.reader_nav.article_nav_next_article_info.id, self.dom_view.elements.reader_nav.article_nav_next_article_name);
                        self.add_html_element(self.dom_view.elements.reader_nav.article_nav_next_article_section.id, self.dom_view.elements.reader_nav.article_nav_next_article_button);
                }
                self.add_html_element(self.dom_view.elements.reader_nav.article_nav_section.id, self.dom_view.elements.reader_nav.article_nav_prev_next_wrapper);
                    previous_article_section();
                    //article_info_section();
                    next_article_section();
            }
            function article_selection(){
                self.add_html_element(self.dom_view.elements.reader_nav.article_nav_section.id, self.dom_view.elements.reader_nav.article_nav_selection);
                    self.add_html_element(self.dom_view.elements.reader_nav.article_nav_selection.id, self.dom_view.elements.reader_nav.article_nav_selector);
                        self.add_html_element(self.dom_view.elements.reader_nav.article_nav_selector.id, self.dom_view.elements.reader_nav.article_nav_selector_placeholder);
                    self.add_html_element(self.dom_view.elements.reader_nav.article_nav_selection.id, self.dom_view.elements.reader_nav.article_nav_selector_load_article);
                    self.add_html_element(self.dom_view.elements.reader_nav.article_nav_selection.id, self.dom_view.elements.reader_nav.article_nav_selector_close_article);
            }
            function article_info_section(){
                self.add_html_element(self.dom_view.elements.reader_nav.article_nav_section.id, self.dom_view.elements.reader_nav.article_nav_articles_info);
                    self.add_html_element(self.dom_view.elements.reader_nav.article_nav_articles_info.id, self.dom_view.elements.reader_nav.article_nav_articles_count);
                        self.add_html_element(self.dom_view.elements.reader_nav.article_nav_articles_count.id, self.dom_view.elements.reader_nav.article_nav_articles_count_paragraph);
                            self.add_html_element(self.dom_view.elements.reader_nav.article_nav_articles_count_paragraph.id, self.dom_view.elements.reader_nav.current_article_number);
                            self.add_html_by_id(self.dom_view.elements.reader_nav.article_nav_articles_count_paragraph.id, " of ");
                            self.add_html_element(self.dom_view.elements.reader_nav.article_nav_articles_count_paragraph.id, self.dom_view.elements.reader_nav.total_article_count);
                            self.add_html_by_id(self.dom_view.elements.reader_nav.article_nav_articles_count_paragraph.id, " Articles.");
            }
            self.add_html_element(self.dom_view.elements.reader_nav.article_nav_section_wrapper.id, self.dom_view.elements.reader_nav.article_nav_section);
                article_info_section();
                prev_next_selector();
                article_selection();
        }
        this.add_html_element(element_id, this.dom_view.elements.reader_nav.article_nav_section_wrapper);
            nav_section();
    }

    include_editor = function(){
        this.include_menu.menu_bar();
    }

    /* Article Specific Functions */

    display_single_item = function(article_data, article_id, display_id, alt_string='') {
        let item_displayed = false;
        if (article_data != ''){
            if (this.dom_view.options.hide_items.indexOf(article_id) == -1) {
                item_displayed = true;
                if (alt_string != '') {
                    item_displayed = true;
                } else {
                    this.add_html_by_id(article_id, article_data);
                }
                this.unhide_element_by_id(display_id);
            } else {
                this.hide_element_by_id(display_id);
            }
        } else {
            this.hide_element_by_id(display_id);
        }
        return item_displayed;
    }

    display_item_list = function(list_data, article_id, display_id){
        let item_displayed = false;
        if (this.dom_view.options.hide_sections.indexOf(display_id) == -1){
            let data_items = list_data;
            if(data_items.length >= 1) {
                if(this.dom_view.options.hide_items.indexOf(article_id) == -1) {
                    item_displayed = true;
                    data_items.forEach((item) =>{
                        this.dom_view.options.current_list_items++;
                        let new_object = this.create_element_object('li', 'list-gen-item-' + this.dom_view.options.current_list_items);
                        this.add_html_element(article_id, new_object);
                        this.add_html_by_id('list-gen-item-' + this.dom_view.options.current_list_items, item);
                    });
                    this.unhide_element_by_id(display_id);
                } else {
                    this.hide_element_by_id(display_id);
                }
            } else {
                this.hide_element_by_id(display_id);
            }
        } else {
            this.hide_element_by_id(display_id);
        }
        return item_displayed;
    }

    display_article_title_items = function() {
        //section id- title-section
        let section_name = 'title_section';
        if (this.dom_view.options.hide_sections.indexOf(this.dom_view.options.sections[section_name].id) == -1) {
            let hide_section = true;

            if(this.display_single_item(this.set_obj.article_title, this.dom_view.elements.reader_items.article_title.id, this.dom_view.elements.reader_items.article_title.id)) {
                hide_section = false;
            }

            if(this.display_single_item(this.set_obj.author, this.dom_view.elements.reader_items.title_author_name.id, 'title-author')){
                hide_section = false;
            }

            if(this.display_single_item(this.set_obj.article_summary, this.dom_view.elements.reader_items.article_summary.id, 'header-summary')){
                hide_section = false;
            }

            if (hide_section == true) {
                this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
            } else {
                this.unhide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
            }
        } else {
            this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
        }
    }

    display_article_warning_items = function() {
        //section id- article-warnings
        let section_name = 'article_warnings';
        if (this.dom_view.options.hide_sections.indexOf(this.dom_view.options.sections[section_name].id) == -1) {
            let hide_section = true;
            
            if(this.display_single_item(this.set_obj.article_rating, this.dom_view.elements.reader_items.article_rating.id, 'article-rating-label')){
                hide_section = false;
            }

            if (this.display_item_list(this.set_obj.content_warning, this.dom_view.elements.reader_items.content_warning.id, 'content-warning-wrapper')){
                hide_section = false;
            }

            if(this.display_item_list(this.set_obj.article_trigger_warning, this.dom_view.elements.reader_items.content_trigger_warning.id, 'content-trigger-warning-wrapper')){
                hide_section = false;
            }

            if (hide_section == true) {
                this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
            } else {
                this.unhide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
            }

        } else {
            this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
        }
    }

    display_article_body_items = function() {
        //section id- article-body
        let section_name = 'article_body';
        if (this.dom_view.options.hide_sections.indexOf(this.dom_view.elements.reader_sections[section_name].id) == -1) {
            let hide_section = true;
            let article_paragraphs = this.set_obj.article;
            let article_sections = Object.keys(article_paragraphs);
            
            if (article_sections.length >= 1){
                if(this.dom_view.options.hide_items.indexOf(this.dom_view.elements.reader_items.article_paragraphs.id) == -1) {
                    article_sections.forEach((article_section) => {
                        let temp_section = this.set_obj.article[article_section];
                        let temp_list = Object.keys(temp_section);
                        temp_list.forEach((list_item) => {
                            let temp_item = this.set_obj.article[article_section][list_item];
                            if (temp_item.type == 'image') {
                                hide_section = false;
                                let image_object = this.set_obj.article_media[temp_item.media_link];
                                let img_url = image_object['content'];
                                let img_alt = image_object['text'];
                                let el_figure = this.create_element_object('figure','fig-' + list_item, ['article-image']);
                                let el_img = this.create_element_object('img','img-' + list_item, [],['src="' + img_url + '"','alt="' + img_alt + '"']);
                                this.add_html_element(this.dom_view.elements.reader_items.article_paragraphs.id, el_figure);
                                this.add_html_element('fig-' + list_item, el_img);
                            } 
                            else if (temp_item.type == 'text') {
                                hide_section = false;
                                let el_article = this.create_element_object('article', 'article-' + list_item, ['article-paragraph']);
                                this.add_html_element(this.dom_view.elements.reader_items.article_paragraphs.id, el_article);
                                this.add_p_element('article-' + list_item,'p-' + list_item,[],[],temp_item.text);
                            }
                        });
                    });

                    if (hide_section == true) {
                        this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
                    } else {
                        this.unhide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
                    }
                } else {
                    this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
                }
            } else {
                this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
            }
        } else {
            //hide section
            this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
        }
    }

    display_article_source_items = function() {
        //section id- article-sources-list
        let section_name = 'article_sources_list';
        if (this.dom_view.options.hide_sections.indexOf(this.dom_view.options.sections[section_name].id) == -1) {
            let hide_section = true;        
            let sources_list = Object.keys(this.set_obj.article_sources);
            if (sources_list.length >= 1) {
                if(this.dom_view.options.hide_items.indexOf(this.dom_view.elements.reader_items.article_sources.id) == -1) {
                    sources_list.forEach((article_source) => {
                        hide_section = false;
                        let list_element = this.create_element_object('li', 'article-source-' + article_source);
                        this.add_html_element(this.dom_view.elements.reader_items.article_sources.id, list_element);
                            this.add_html_by_id('article-source-' + article_source, this.set_obj['article_sources'][article_source]['text']);
                            this.add_br_element('article-source-' + article_source);
                            this.add_a_element('article-source-' + article_source, 'article-source-' + article_source + '-link',[],[], this.set_obj['article_sources'][article_source]['url'], this.set_obj['article_sources'][article_source]['url']);
                    });
                }
                if (hide_section == true) {
                    this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
                } else {
                    this.unhide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
                }
            } else {
                this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
            }
        } else {
            this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
        }
    }

    display_article_link_items = function() {
        //section id- article-links-list
        let section_name = 'article_links_list';
        if (this.dom_view.options.hide_sections.indexOf(this.dom_view.options.sections[section_name].id) == -1) {
            let hide_section = true;  
            let links_list = Object.keys(this.set_obj.article_links);
            if (links_list.length >= 1) {
                if(this.dom_view.options.hide_items.indexOf(this.dom_view.elements.reader_items.article_links.id) == -1) {
                    links_list.forEach((article_link) => {
                        hide_section = false;
                        let list_element = this.create_element_object('li', 'article-link-' + article_link + '-item');
                        this.add_html_element(this.dom_view.elements.reader_items.article_links.id, list_element);
                            this.add_html_by_id('article-link-' + article_link + '-item', this.set_obj['article_links'][article_link]['name']);
                            this.add_br_element('article-link-' + article_link + '-item');
                            this.add_a_element('article-link-' + article_link + '-item', 'article-link-' + article_link + '-url', [], [], this.set_obj['article_links'][article_link]['url'], this.set_obj['article_links'][article_link]['url']);
                    });
                }
                if (hide_section == true) {
                    this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
                } else {
                    this.unhide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
                }
            } else {
                this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);    
            }
        } else {
            this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
        }
    }

    display_article_information_items = function() {
        //section id- article-information-list
        let section_name = 'article_information_list';
        if (this.dom_view.options.hide_sections.indexOf(this.dom_view.options.sections[section_name].id) == -1) {
            let hide_section = true;
            let show_dtl = false;
            //article-date-time-location-label

            if (this.display_single_item(this.set_obj.article_date, this.dom_view.elements.reader_items.article_date.id, 'article-date-label')){
                hide_section = false;
                show_dtl = true;
            }
            
            if(this.display_single_item(this.set_obj.article_time, this.dom_view.elements.reader_items.article_time.id, 'article-time-label')){
                hide_section = false;
                show_dtl = true;
            }
            
            if(this.display_single_item(this.set_obj.article_location, this.dom_view.elements.reader_items.article_location.id, 'article-location-label')){
                hide_section = false;
                show_dtl = true;
            }
            
            if(this.display_single_item(this.set_obj.article_geo_tag, this.dom_view.elements.reader_items.article_geo_tag.id, 'article-geo-location-label')){
                hide_section = false;
                show_dtl = true;
            }

            if (show_dtl == false) {
                this.hide_element_by_id('article-date-time-location-label');
            } else {
                this.unhide_element_by_id('article-date-time-location-label');
            }
            
            if(this.display_item_list(this.set_obj.article_tags, this.dom_view.elements.reader_items.article_tags.id, 'article-tags-wrapper')){
                hide_section = false;
            }
            
            if(this.display_item_list(this.set_obj.article_categories, this.dom_view.elements.reader_items.article_categories.id, 'article-categories-wrapper')){
                hide_section = false;
            }
            
            if(this.display_item_list(this.set_obj.article_sub_categories, this.dom_view.elements.reader_items.article_sub_categories.id, 'article-sub-categories-wrapper')){
                hide_section = false;
            }

            if(this.display_item_list(this.set_obj.article_niche_categories, this.dom_view.elements.reader_items.article_niche_categories.id, 'article-niche-categories-wrapper')){
                hide_section = false;
            }

            if (this.dom_view.options.hide_sections.indexOf('article-urls-wrapper') == -1) {
                let url_list = Object.keys(this.set_obj.article_urls);
                if (url_list.length >= 1) {
                    if (this.dom_view.options.hide_items.indexOf(this.dom_view.elements.reader_items.article_urls.id) == -1) {
                        hide_section = false;
                        let url_count = 0;
                        url_list.forEach((article_url) => {
                            url_count++;
                            let new_object = this.create_element_object('li', 'article-url-' + url_count);
                            this.add_html_element(this.dom_view.elements.reader_items.article_urls.id, new_object);
                                this.add_html_by_id('article-url-' + url_count, this.set_obj['article_urls'][article_url]['name']);
                                this.add_br_element('article-url-' + url_count);
                                this.add_a_element('article-url-' + url_count, 'article-url-' + url_count + '-link',[],[], this.set_obj['article_urls'][article_url]['url'], this.set_obj['article_urls'][article_url]['url']);
                        });
                        this.unhide_element_by_id('article-urls-wrapper');
                    } else {
                        this.hide_element_by_id('article-urls-wrapper');
                    }
                } else {
                    this.hide_element_by_id('article-urls-wrapper');
                }
            } else {
                this.hide_element_by_id('article-urls-wrapper');
            }

            if (hide_section == true) {
                this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
            } else {
                this.unhide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
            }            
        } else {
            this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
        }
    }

    display_author_information_items = function() {
        //Section id- author-information-wrapper
        let section_name = 'author_information_list';
        if(this.dom_view.options.hide_sections.indexOf(this.dom_view.options.sections[section_name].id) == -1) {
            let hide_section = true;
            
            if(this.display_single_item(this.set_obj.author, this.dom_view.elements.reader_items.author_name.id, 'author-name-wrapper')){
                hide_section = false;
            }
            
            if(this.display_single_item(this.set_obj.author_email, this.dom_view.elements.reader_items.author_email.id, 'author-email-wrapper', '<a href="mailto:' + this.set_obj.author_email + '">' + this.set_obj.author_email + '</a>')){
                this.add_a_element(this.dom_view.elements.reader_items.author_email.id, 'author-email-link',[],[],'mailto:' + this.set_obj.author_email, this.set_obj.author_email);
                hide_section = false;
            }

            if (this.dom_view.options.hide_sections.indexOf('author-social-links') == -1) {
                let social_list = Object.keys(this.set_obj.author_social);
                if(social_list.length >= 1) {
                    if(this.dom_view.options.hide_items.indexOf(this.dom_view.elements.reader_items.author_social.id) == -1) {
                        hide_section = false;
                        let social_links = 0;
                        social_list.forEach((social_link) => {
                            social_links++;
                            let new_object = this.create_element_object('li', 'author-social-item-' + social_links);
                            this.add_html_element(this.dom_view.elements.reader_items.author_social.id, new_object);
                                this.add_html_by_id('author-social-item-' + social_links, this.set_obj['author_social'][social_link]['name'] + ' - ');
                                this.add_a_element('author-social-item-' + social_links, 'author-social-item-' + social_links + '-link',[],[], this.set_obj['author_social'][social_link]['url'], this.set_obj['author_social'][social_link]['url']);
                        });
                        this.unhide_element_by_id('author-social-links');
                    } else {
                        this.hide_element_by_id('author-social-links');
                    }
                } else {
                    this.hide_element_by_id('author-social-links');
                }
            } else {
                this.hide_element_by_id('author-social-links');
            }
            
            if(this.display_single_item(this.set_obj.author_site, this.dom_view.elements.reader_items.author_site.id, 'author-website-wrapper', '<a href="' + this.set_obj.author_site + '">' + this.set_obj.author_site + '</a>')){
                this.add_a_element(this.dom_view.elements.reader_items.author_site.id, 'author-site-link', [], [],this.set_obj.author_site,this.set_obj.author_site);
                hide_section = false;
            }
            
            if(this.display_single_item(this.set_obj.author_summary, this.dom_view.elements.reader_items.author_summary.id, 'author-summary-wrapper')){
                hide_section = false;
            }
            
            if(this.display_item_list(this.set_obj.author_tags, this.dom_view.elements.reader_items.author_tags.id, 'author-tags-wrapper')){
                hide_section = false;
            }

            if (hide_section == true) {
                this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
            } else {
                this.unhide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
            }

        } else {
            this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
        }
    }

    display_affiliate_information_items = function() {
        //sections id- affliations
        let section_name = 'affiliations';
        if (this.dom_view.options.hide_sections.indexOf(this.dom_view.options.sections[section_name].id) == -1) {
            let hide_section = true;
            
            if(this.display_single_item(this.set_obj.author_affiliation.affiliate_company, this.dom_view.elements.reader_items.affiliate_company.id, 'affiliate-company-wrapper')){
                hide_section = false;
            }
            
            if(this.display_single_item(this.set_obj.author_affiliation.affiliate_organization, this.dom_view.elements.reader_items.affiliate_organization.id, 'affiliate-organization-wrapper')){
                hide_section = false;
            }
            
            if(this.display_single_item(this.set_obj.author_affiliation.affiliate_email, this.dom_view.elements.reader_items.affiliate_email.id, 'affiliate-email-wrapper', '<a href="mailto:' + this.set_obj.author_affiliation.affiliate_email + '">' + this.set_obj.author_affiliation.affiliate_email + '</a>')){
                this.add_a_element(this.dom_view.elements.reader_items.affiliate_email.id, 'affiliate-email-link', [], [], 'mailto:' + this.set_obj.author_affiliation.affiliate_email, this.set_obj.author_affiliation.affiliate_email);
                hide_section = false;
            }
            
            if(this.display_single_item(this.set_obj.author_affiliation.affiliate_site, this.dom_view.elements.reader_items.affiliate_site.id, 'affiliate-website-wrapper', '<a href="' + this.set_obj.author_affiliation.affiliate_site + '">' + this.set_obj.author_affiliation.affiliate_site + '</a>')){
                this.add_a_element(this.dom_view.elements.reader_items.affiliate_site.id, 'affiliate-site-link', [], [], this.set_obj.author_affiliation.affiliate_site, this.set_obj.author_affiliation.affiliate_site);
                hide_section = false;
            }
            
            if (this.display_item_list(this.set_obj.author_affiliation.affiliate_tags, this.dom_view.elements.reader_items.affiliate_tags.id, 'affiliate-tags-wrapper')){
                hide_section = false;
            }

            if(hide_section == true) {
                this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
            } else {
                this.unhide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
            }

        } else {
            this.hide_element_by_id(this.dom_view.elements.reader_sections[section_name].id);
        }
    }

    enable_display_item = function(item_name) {
        if(this.dom_view.options.items[item_name]['enabled'] == false){
            if(this.dom_view.options.hide_items.indexOf(this.dom_view.elements.reader_items[item_name].id) != -1) {
                this.dom_view.options.hide_items = this.remove_item_from_array(this.dom_view.elements.reader_items[item_name].id, this.dom_view.options.hide_items);
                this.dom_view.options.items[item_name]['enabled'] = true;
                let result = this.check_element_by_id(this.dom_view.options.items[item_name]['id']);
                if (result == true){
                    let item_element = document.getElementById(this.dom_view.options.items[item_name]['id']);
                    if (item_element.checked == false) {
                        item_element.checked = true;
                    }
                }
            }
        }
    }

    disable_display_item = function(item_name) {
        if(this.dom_view.options.items[item_name]['enabled'] == true){
            if(this.dom_view.options.hide_items.indexOf(this.dom_view.elements.reader_items[item_name].id) == -1) {
                this.dom_view.options.hide_items = this.add_item_to_array(this.dom_view.elements.reader_items[item_name].id, this.dom_view.options.hide_items);
                this.dom_view.options.items[item_name]['enabled'] = false;
                let result = this.check_element_by_id(this.dom_view.options.items[item_name].id);
                if (result == true){
                    let item_element = document.getElementById(this.dom_view.options.items[item_name].id);
                    if (item_element.checked == true) {
                        item_element.checked = false;
                    }
                }
            }
        }
    }

    check_display_item_enabled = function(item_object) {
        return item_object['enabled']
    }

    check_display_section_items = function(section_object) {
        let section_items = section_object['items'];
        let items_enabled = false;
        section_items.forEach((item) => {
            if (this.dom_view.options.items[item]['enabled'] == true) {
                items_enabled = true;
            }
        });
        return items_enabled;
    }

    enable_display_section = function(section_object) {
        let section_items = section_object['items'];
        let enable_items = [];
        enable_items = section_object['last_enabled_items'];
        let section_name = '';
        section_items.forEach((section_item) => {
            section_name = this.dom_view.options.items[section_item]['section'];
        });
        if (typeof(enable_items) != 'undefined'){
            enable_items.forEach((enable_item) => {
                this.enable_display_item(enable_item);
            });
        }
        section_object['last_enabled_items'] = [];
        let result = this.check_element_by_id(section_object['id']);
        if (result == true) {
            document.getElementById(section_object['id']).checked = true;
        }
        this.remove_item_from_array(section_name, this.dom_view.options.hide_sections);
    }

    disable_display_section = function(section_object) {
        let section_items = section_object['items'];
        let section_name = '';
        section_items.forEach((section_item) => {
            let item_enabled = this.check_display_item_enabled(this.dom_view.options.items[section_item]);
            section_name = item_enabled['section'];
            if (item_enabled == true){
                section_object['last_enabled_items'].push(section_item);
                this.disable_display_item(section_item);
            }
        });
        this.add_item_to_array(section_name, this.dom_view.options.hide_sections);
        document.getElementById(section_object['id']).checked = false;
        return section_object;
    }

    add_item_to_array = function(item_name, array_name) {
        array_name.push(item_name);
        return array_name;
    }

    remove_item_from_array = function(item_name, array_name){
        array_name = array_name.filter(e => e !== item_name);
        return array_name;
    }

    display_article = function() {
        this.display_article_title_items();
        this.display_article_warning_items();
        this.display_article_body_items();
        this.display_article_source_items();
        this.display_article_link_items();
        this.display_article_information_items();
        this.display_author_information_items();
        this.display_affiliate_information_items();
        this.unhide_element_by_id(this.dom_view.elements.reader.micro_blog.id);
        if (this.display_object.article_navigation == true) {
            this.unhide_element_by_id(this.dom_view.elements.reader_nav.article_nav_section_wrapper.id);
        }
    }

    display_new_article = function() {
        this.display_article_info();
        this.unset_article_display();
        this.display_article();
        this.enable_element_by_id(this.dom_view.elements.menu.close_article_button.id);
    }

    populate_reader_list = function() {
        this.reader_list = [];
        if (this.current_blog == '' && this.current_multi_blog == ''){
            /*Articles Only*/
            this.article_list.forEach((article_item) => {
                this.reader_list.push(article_item);
            });
            
        }
        if (this.current_blog != "" && this.current_multi_blog == '') {
            /*Blog file only*/ 
            let article_objects = Object.keys(this.blog_object['blog']['article_list']);
            article_objects.forEach((article_object) => {
                this.reader_list.push(article_object);
            });
        }
        if (this.current_multi_blog != "" && this.current_blog != ""){
            /*Multi-Blog*/
            let article_objects = Object.keys(this.blog_object['blog']['article_list']);
            article_objects.forEach((article_object) => {
                this.reader_list.push(article_object);
            });
        }
    }

    populate_blog_list = function() {
        this.current_blog_list = [];
        if (this.current_multi_blog != '') {
            this.current_blog_list = this.mblog_list;
        } else {
            this.current_blog_list = this.blog_list;
        }
    }

    display_article_list = function() {
        let result = this.check_element_by_id(this.dom_view.elements.menu.articles_selection.id);
        if (result == true){
            this.clear_inner_html_by_id(this.dom_view.elements.menu.articles_selection.id);
            this.add_option_element(this.dom_view.elements.menu.articles_selection.id, 'article-list-placeholder',[],['disabled','selected'],'','Choose an article');
            let article_count = 0;
            this.reader_list.forEach((reader_article) => {
                let string = '';
                article_count++;
                if (this.current_multi_blog != '' && this.current_blog != ''){
                    string = this.blog_object['blog']['article_list'][reader_article]['name'];
                } else if (this.current_blog != '' && this.current_multi_blog == '') {
                    string = this.blog_object['blog']['article_list'][reader_article]['name'];
                } else {
                    string = window[reader_article]['article_name'];
                }
                this.add_option_element(this.dom_view.elements.menu.articles_selection.id, 'menu-article-list-item-' + article_count, [],[], reader_article, string);
            });
            if (this.reader_list.length >= 1) {
                this.enable_element_by_id(this.dom_view.elements.menu.load_article_button.id);
                this.enable_element_by_id(this.dom_view.elements.menu.articles_selection.id);
            } else {
                this.disable_element_by_id(this.dom_view.elements.menu.load_article_button.id);
                this.disable_element_by_id(this.dom_view.elements.menu.articles_selection.id);
            }
        }
    }

    display_blog_list = function() {
        this.populate_blog_list();
        let result = this.check_element_by_id(this.dom_view.elements.menu.blogs_selection.id);
        if (result == true){
            this.clear_inner_html_by_id(this.dom_view.elements.menu.blogs_selection.id);
            this.add_option_element(this.dom_view.elements.menu.blogs_selection.id, 'blog-list-placeholder',[],['disabled','selected'],'','Choose a blog');
            let blog_count = 0;
            this.current_blog_list.forEach((reader_blog) => {
                blog_count++;
                let string = '';
                if (this.current_multi_blog == '') {
                    string = window[reader_blog]['blog']['blog_properties']['blog_name'];
                } else {
                    string = this.multi_blog_object['blog_list'][reader_blog]['name'];
                }
                this.add_option_element(this.dom_view.elements.menu.blogs_selection.id, 'menu-blog-list-item-' + blog_count, [], [], reader_blog, string);
            });
            if (this.current_blog_list.length >= 1) {
                this.enable_element_by_id(this.dom_view.elements.menu.blogs_selection.id);
                this.enable_element_by_id(this.dom_view.elements.menu.load_blog_button.id);
            } else {
                this.disable_element_by_id(this.dom_view.elements.menu.blogs_selection.id);
                this.disable_element_by_id(this.dom_view.elements.menu.load_blog_button.id);
            }
        }
    }

    display_new_blog_list = function(){
        this.display_blog_info();
        this.populate_reader_list();
        this.display_article_list();
    }

    display_multi_blog_list = function() {
        let result = this.check_element_by_id(this.dom_view.elements.menu.multi_blogs_selection.id);
        if (result == true) {
            this.clear_inner_html_by_id(this.dom_view.elements.menu.multi_blogs_selection.id);
            this.add_option_element(this.dom_view.elements.menu.multi_blogs_selection.id, 'xblog-list-placeholder',[],['disabled','selected'],'','Choose a Multi-blog');
            let string = '';
            let xblog_count = 0;
            this.multi_blog_list.forEach((multi_blog) => {
                xblog_count++;
                string = window[multi_blog]['multi_blog_name'];
                this.add_option_element(this.dom_view.elements.menu.multi_blogs_selection.id, 'menu-xblog-list-item' + xblog_count, [], [], multi_blog, string);
            });
            if (this.multi_blog_list.length >= 1) {
                this.enable_element_by_id(this.dom_view.elements.menu.multi_blogs_selection.id);
                this.enable_element_by_id(this.dom_view.elements.menu.load_multi_blog_button.id);
            } else {
                this.disable_element_by_id(this.dom_view.elements.menu.multi_blogs_selection.id);
                this.disable_element_by_id(this.dom_view.elements.menu.load_multi_blog_button.id);
            }
        }
    }

    display_article_info = function() {
        if (Object.keys(this.set_obj).length > 1){
            this.clear_inner_html_by_id(this.dom_view.elements.menu.current_article_name.id);
            this.add_html_by_id(this.dom_view.elements.menu.current_article_name.id, this.set_obj['article_name']);
            this.unhide_element_by_id(this.dom_view.elements.menu.current_article_info.id);
        } else {
            this.unset_article_info();
        }
    }

    unset_article_info = function() {
        this.clear_inner_html_by_id(this.dom_view.elements.menu.current_article_name.id);
        this.hide_element_by_id(this.dom_view.elements.menu.current_article_info.id);
    }

    display_blog_info = function() {
        let string = ''
        if (this.current_multi_blog != '' && this.current_blog != ''){
            string = this.blog_object['blog']['blog_properties']['blog_name'];
        } else if (this.current_blog != '' && this.current_multi_blog == '') {
            string = this.blog_object['blog']['blog_properties']['blog_name'];
        }
        if (this.current_blog != ''){
            this.clear_inner_html_by_id(this.dom_view.elements.menu.current_blog_name.id);
            this.add_html_by_id(this.dom_view.elements.menu.current_blog_name.id, string);
            this.unhide_element_by_id(this.dom_view.elements.menu.current_blog_info.id);
            this.enable_element_by_id(this.dom_view.elements.menu.close_blog_button.id);
        } else {
            this.clear_inner_html_by_id(this.dom_view.elements.menu.current_blog_name.id);
            this.hide_element_by_id(this.dom_view.elements.menu.current_blog_info.id);
            this.disable_element_by_id(this.dom_view.elements.menu.close_blog_button.id);
        }
    }

    display_multi_blog_info = function() {
        let string = ''
        if (this.current_multi_blog != ''){
            string = this.multi_blog_object['multi_blog_name']
        }
        if (this.current_multi_blog != ''){
            this.clear_inner_html_by_id(this.dom_view.elements.menu.current_multi_blog_name.id);
            this.add_html_by_id(this.dom_view.elements.menu.current_multi_blog_name.id, string);
            this.unhide_element_by_id(this.dom_view.elements.menu.current_multi_blog_info.id);
        } else {
            this.clear_inner_html_by_id(this.dom_view.elements.menu.current_multi_blog_name.id);
            this.hide_element_by_id(this.dom_view.elements.menu.current_multi_blog_info.id);
        }
    }

    unset_article_display = function() {
        this.dom_view.options.current_list_items = 0;
        let id_list = Object.keys(this.dom_view.elements.reader_items);
        id_list.forEach((id) => {
            this.clear_inner_html_by_id(this.dom_view.elements.reader_items[id].id);
        });
        let section_list = Object.keys(this.dom_view.elements.reader_sections);
        section_list.forEach((id) => {
            this.unhide_element_by_id(this.dom_view.elements.reader_sections[id].id);
        });
        if (this.display_object.article_navigation == true) {
            this.hide_element_by_id(this.dom_view.elements.reader_nav.article_nav_section_wrapper.id);
        }
    }

    reset_display = function() {
        this.unset_article_display();
        this.display_article();
    }

    close_article = function() {
        this.set_obj = {};
        this.current_article = '';
        this.unset_article_display();
        this.unset_article_info();
        this.hide_element_by_id(this.dom_view.elements.reader.micro_blog.id);
        this.disable_element_by_id(this.dom_view.elements.menu.close_article_button.id);
    }

    show_menu_options = function() {
        this.dom_view.options.menu['show_load_blog'] = true;
        this.dom_view.options.menu['show_select_blog'] = true;
        this.dom_view.options.menu['show_view_sections'] = true;
        this.dom_view.options.menu['show_view_items'] = true;
    }
    
    hide_menu_items = function() {
        this.dom_view.options.menu['show_blog_loader'] = false;
        this.dom_view.options.menu['show_media_selector'] = false;
        this.dom_view.options.menu['show_sections_selector'] = false;
        this.dom_view.options.menu['show_items_selector'] = false;
    }
    
    hide_menu_item = function(id){
        let result = this.check_element_by_id(id);
        if (result == true)
        {
            let id_obj = document.getElementById(id);
            id_obj.hidden = true;
        }
    }
    
    show_menu_item = function(id) {
        let result = this.check_element_by_id(id);
        if (result == true) {
            let id_obj = document.getElementById(id);
            id_obj.hidden = false;
        }
    }
    
    set_menu_item_display = function () {
        if (this.dom_view.options.menu['show_menu'] == false) {
            this.hide_menu_item(this.dom_view.elements.menu.menu_options.id);
        } else {
            this.show_menu_item(this.dom_view.elements.menu.menu_options.id);
        }
        if (this.dom_view.options.menu['show_load_blog'] == false) {
            this.hide_menu_item(this.dom_view.elements.menu.menu_load_blog.id);
        } else {
            this.show_menu_item(this.dom_view.elements.menu.menu_load_blog.id);
        }
        if (this.dom_view.options.menu['show_select_blog'] == false) {
            this.hide_menu_item(this.dom_view.elements.menu.menu_select_blog.id);
        } else {
            this.show_menu_item(this.dom_view.elements.menu.menu_select_blog.id);
        }
        if (this.dom_view.options.menu['show_view_sections'] == false) {
            this.hide_menu_item(this.dom_view.elements.menu.menu_view_sections.id);
        } else {
            this.show_menu_item(this.dom_view.elements.menu.menu_view_sections.id);
        }
        if (this.dom_view.options.menu['show_view_items'] == false) {
            this.hide_menu_item(this.dom_view.elements.menu.menu_view_items.id);
        } else {
            this.show_menu_item(this.dom_view.elements.menu.menu_view_items.id);
        }
        if (this.dom_view.options.menu['show_blog_loader'] == false) {
            this.hide_menu_item(this.dom_view.elements.menu.blog_loader.id);
        } else {
            this.show_menu_item(this.dom_view.elements.menu.blog_loader.id);
        }
        if (this.dom_view.options.menu['show_media_selector'] == false) {
            this.hide_menu_item(this.dom_view.elements.menu.media_selector.id);
        } else {
            this.show_menu_item(this.dom_view.elements.menu.media_selector.id);
        }
        if (this.dom_view.options.menu['show_sections_selector'] == false) {
            this.hide_menu_item(this.dom_view.elements.menu.sections_selector.id);
        } else {
            this.show_menu_item(this.dom_view.elements.menu.sections_selector.id);
        }
        if (this.dom_view.options.menu['show_items_selector'] == false) {
            this.hide_menu_item(this.dom_view.elements.menu.items_selector.id);
        } else {
            this.show_menu_item(this.dom_view.elements.menu.items_selector.id);
        }
    }

    get_articles_article_name = function(article_object) {
        return window[article_object]['article_name'];
    }

    get_blog_article_name = function(article_object) {
        return this.blog_object['blog']['article_list'][article_object]['name'];
    }

    nav_display_article_list = function() {
        let result = this.check_element_by_id(this.dom_view.elements.reader_nav.article_nav_selection.id);
        if (result == true){
            this.clear_inner_html_by_id(this.dom_view.elements.reader_nav.article_nav_selector.id);
            this.add_option_element(this.dom_view.elements.reader_nav.article_nav_selector.id, 'nav-article-list-placeholder',[],['disabled','selected'],'','Choose a article');
            let article_count = 0;
            this.reader_list.forEach((reader_article) => {
                article_count++;
                let string = '';
                let article_name = '';
                if (this.current_multi_blog != '' && this.current_blog != ''){
                    article_name = this.get_blog_article_name(reader_article);
                } else if (this.current_blog != '' && this.current_multi_blog == '') {
                    article_name = this.get_blog_article_name(reader_article);
                } else {
                    article_name = this.get_articles_article_name(reader_article);
                }
                this.add_option_element(this.dom_view.elements.reader_nav.article_nav_selector.id, 'nav-article-list-item-' + article_count, [], [], reader_article, article_name);
            });
            if (this.reader_list.length >= 1) {
                this.enable_element_by_id(this.dom_view.elements.reader_nav.article_nav_selector.id);
                this.nav_display_article_position();
                let current_pos = this.nav_get_article_position();
                let el_article_nav_selector = document.getElementById(this.dom_view.elements.reader_nav.article_nav_selector.id);
                el_article_nav_selector.value = this.reader_list[(current_pos - 1)];
                if ((current_pos - 1) <= 0) {
                    this.disable_element_by_id(this.dom_view.elements.reader_nav.article_nav_previous_article_button.id);
                    this.clear_inner_html_by_id(this.dom_view.elements.reader_nav.article_nav_previous_article_name.id);
                    this.hide_element_by_id(this.dom_view.elements.reader_nav.article_nav_previous_article_section.id);
                } else {
                    this.enable_element_by_id(this.dom_view.elements.reader_nav.article_nav_previous_article_button.id);
                    this.nav_display_previous_article_info();
                    this.unhide_element_by_id(this.dom_view.elements.reader_nav.article_nav_previous_article_section.id);
                }

                if ((current_pos + 1) <= this.reader_list.length){
                    this.enable_element_by_id(this.dom_view.elements.reader_nav.article_nav_next_article_button.id);
                    this.nav_display_next_article_info();
                    this.unhide_element_by_id(this.dom_view.elements.reader_nav.article_nav_next_article_section.id);
                } else {
                    this.disable_element_by_id(this.dom_view.elements.reader_nav.article_nav_next_article_button.id);
                    this.clear_inner_html_by_id(this.dom_view.elements.reader_nav.article_nav_next_article_name.id);
                    this.hide_element_by_id(this.dom_view.elements.reader_nav.article_nav_next_article_section.id);
                }
            } else {
                this.disable_element_by_id(this.dom_view.elements.reader_nav.article_nav_selector.id);
            }
        }
    }

    nav_get_article_position = function() {
        let current_article_num = 0;

        if (this.current_blog == '' && this.current_multi_blog == '') {
            current_article_num = this.reader_list.indexOf(this.current_article) + 1;
        }

        if (this.current_blog != '' && this.current_multi_blog == ''){
            let article_string = this.current_article.replace(this.current_blog + '_article_', '');
            current_article_num = this.reader_list.indexOf(article_string) + 1;
        }

        if (this.current_blog != '' && this.current_multi_blog != '') {
            let article_string = this.current_article.replace(this.current_multi_blog + '_blog_' + this.current_blog + '_article_', '');
            current_article_num = this.reader_list.indexOf(article_string) + 1;
        }

        return current_article_num
    }

    nav_display_article_position = function() {
        let current_article_pos = this.nav_get_article_position();
        if (current_article_pos > 0) {
            this.clear_inner_html_by_id(this.dom_view.elements.reader_nav.current_article_number.id);
            this.clear_inner_html_by_id(this.dom_view.elements.reader_nav.total_article_count.id);
            this.add_html_by_id(this.dom_view.elements.reader_nav.current_article_number.id, current_article_pos);
            this.add_html_by_id(this.dom_view.elements.reader_nav.total_article_count.id, this.reader_list.length);
        } 
    }

    nav_load_next_article = function() {
        let current_article_pos = this.nav_get_article_position();
        if ((current_article_pos + 1) <= this.reader_list.length){
            let next_article = this.reader_list[(current_article_pos)];
            this.load_article_by_selection_value(next_article);
        }
    }

    nav_load_previous_article = function() {
        let current_article_pos = this.nav_get_article_position();
        if ((current_article_pos - 2) >= 0){
            let next_article = this.reader_list[(current_article_pos - 2)];
            this.load_article_by_selection_value(next_article);
        }
    }

    nav_display_next_article_info = function() {
        let current_pos = this.nav_get_article_position();
        let next_article = this.reader_list[current_pos];
        let next_article_name = ''

        if (this.current_blog != '') {
            next_article_name = this.get_blog_article_name(next_article);
        } else {
            next_article_name = this.get_articles_article_name(next_article);
        }
        this.clear_inner_html_by_id(this.dom_view.elements.reader_nav.article_nav_next_article_name.id);
        this.add_html_by_id(this.dom_view.elements.reader_nav.article_nav_next_article_name.id, next_article_name);
    }

    nav_display_previous_article_info = function() {
        let current_pos = this.nav_get_article_position();
        let previous_article = this.reader_list[current_pos - 2];
        let previous_article_name = ''

        if (this.current_blog != '') {
            previous_article_name = this.get_blog_article_name(previous_article);
        } else {
            previous_article_name = this.get_articles_article_name(previous_article);
        }
        this.clear_inner_html_by_id(this.dom_view.elements.reader_nav.article_nav_previous_article_name.id);
        this.add_html_by_id(this.dom_view.elements.reader_nav.article_nav_previous_article_name.id, previous_article_name);
    }

    /* Init */

    init = async function() {
        //Events attached to DOM Elements need to happen in init().
        /* 
            Check if elements need to be terraformed into the DOM 
            Otherwise assume that HTML already exists.  - Only display this object if menu is enabled.
        */
        function terraform_functions(self) {
            let display_object_keys = Object.keys(self.display_object);
            if(display_object_keys.indexOf('add_menu_html') != -1){
                if (self.display_object.add_menu_html == true){
                    self.terraform_include_menu(self.display_object.add_menu_id);
                }
            }

            if(display_object_keys.indexOf('add_reader_html') != -1){
                if (self.display_object.add_reader_html == true){
                    //console.log('Including reader.');
                    self.terraform_include_reader(self.display_object.add_reader_id);
                }
                self.hide_element_by_id(self.dom_view.elements.reader.micro_blog.id);
            }

            if(display_object_keys.indexOf('article_navigation') != -1){
                if (self.display_object.article_navigation == true) {
                    self.terraform_include_reader_nav(self.display_object.add_article_nav_id);
                    self.hide_element_by_id(self.dom_view.elements.reader_nav.article_nav_section_wrapper.id);
                    if(self.display_object.display_template == 'update_blog') {
                        self.disable_element_by_id(self.dom_view.elements.reader_nav.article_nav_selector_close_article.id);
                        self.hide_element_by_id(self.dom_view.elements.reader_nav.article_nav_selector_close_article.id);
                    }
                }
            }
        }

        function menu_functions(self) {
            /*Load Display Object*/
            let display_keys = Object.keys(self.display_object);
            /*Display Sections*/
            if (display_keys.length >= 1) {
                if(display_keys.indexOf('display_sections') != -1) {
                    let display_sections_keys = Object.keys(self.display_object.display_sections);
                    if (display_sections_keys.indexOf('title_section') != -1){
                        if (self.display_object.display_sections.title_section == false) {
                            self.dom_view.options.sections.title_section.enabled = false;
                        }
                    }
                    if (display_sections_keys.indexOf('article_warnings') != -1){
                        if (self.display_object.display_sections.article_warnings == false) {
                            self.dom_view.options.sections.article_warnings.enabled = false;
                        }
                    }
                    if (display_sections_keys.indexOf('article_body') != -1){
                        if (self.display_object.display_sections.article_body == false) {
                            self.dom_view.options.sections.article_body.enabled = false;
                        }
                    }
                    if (display_sections_keys.indexOf('article_sources_list') != -1){
                        if (self.display_object.display_sections.article_sources_list == false) {
                            self.dom_view.options.sections.article_sources_list.enabled = false;
                        }
                    }
                    if (display_sections_keys.indexOf('article_links_list') != -1){
                        if (self.display_object.display_sections.article_links_list == false) {
                            self.dom_view.options.sections.article_links_list.enabled = false;
                        }
                    }
                    if (display_sections_keys.indexOf('article_information_list') != -1){
                        if (self.display_object.display_sections.article_information_list == false) {
                            self.dom_view.options.sections.article_information_list.enabled = false;
                        }
                    }
                    if (display_sections_keys.indexOf('author_information_list') != -1){
                        if (self.display_object.display_sections.author_information_list == false) {
                            self.dom_view.options.sections.author_information_list.enabled = false;
                        }
                    }
                    if (display_sections_keys.indexOf('affiliations') != -1){
                        if (self.display_object.display_sections.affiliations == false) {
                            self.dom_view.options.sections.affiliations.enabled = false;
                        }
                    }
                }
            }

            /*Display Items*/
            if (display_keys.length >= 1) {
                if (display_keys.indexOf('display_items') != -1) {
                    let display_item_keys = Object.keys(self.display_object.display_items);
                    //article_title
                    if (display_item_keys.indexOf('article_title') != -1){
                        if (self.display_object.display_items.article_title == false) {
                            self.dom_view.options.items.article_title.enabled = false;
                        }
                    }
                    //title_author_name
                    if (display_item_keys.indexOf('title_author_name') != -1){
                        if (self.display_object.display_items.title_author_name == false) {
                            self.dom_view.options.items.title_author_name.enabled = false;
                        }
                    }
                    //article_summary
                    if (display_item_keys.indexOf('article_summary') != -1){
                        if (self.display_object.display_items.article_summary == false) {
                            self.dom_view.options.items.article_summary.enabled = false;
                        }
                    }
                    //article_rating
                    if (display_item_keys.indexOf('article_rating') != -1){
                        if (self.display_object.display_items.article_rating == false) {
                            self.dom_view.options.items.article_rating.enabled = false;
                        }
                    }
                    //content_warning
                    if (display_item_keys.indexOf('content_warning') != -1){
                        if (self.display_object.display_items.content_warning == false) {
                            self.dom_view.options.items.content_warning.enabled = false;
                        }
                    }
                    //content_trigger_warning
                    if (display_item_keys.indexOf('content_trigger_warning') != -1){
                        if (self.display_object.display_items.content_trigger_warning == false) {
                            self.dom_view.options.items.content_trigger_warning.enabled = false;
                        }
                    }
                    //article_paragraph
                    if (display_item_keys.indexOf('article_paragraph') != -1){
                        if (self.display_object.display_items.article_paragraph == false) {
                            self.dom_view.options.items.article_paragraph.enabled = false;
                        }
                    }
                    //article_sources
                    if (display_item_keys.indexOf('article_sources') != -1){
                        if (self.display_object.display_items.article_sources == false) {
                            self.dom_view.options.items.article_sources.enabled = false;
                        }
                    }
                    //article_links
                    if (display_item_keys.indexOf('article_links') != -1){
                        if (self.display_object.display_items.article_links == false) {
                            self.dom_view.options.items.article_links.enabled = false;
                        }
                    }
                    //article_date
                    if (display_item_keys.indexOf('article_date') != -1){
                        if (self.display_object.display_items.article_date == false) {
                            self.dom_view.options.items.article_date.enabled = false;
                        }
                    }
                    //article_time
                    if (display_item_keys.indexOf('article_time') != -1){
                        if (self.display_object.display_items.article_time == false) {
                            self.dom_view.options.items.article_time.enabled = false;
                        }
                    }
                    //article_location
                    if (display_item_keys.indexOf('article_location') != -1){
                        if (self.display_object.display_items.article_location == false) {
                            self.dom_view.options.items.article_location.enabled = false;
                        }
                    }
                    //article_geo_tag
                    if (display_item_keys.indexOf('article_geo_tag') != -1){
                        if (self.display_object.display_items.article_geo_tag == false) {
                            self.dom_view.options.items.article_geo_tag.enabled = false;
                        }
                    }
                    //article_tags
                    if (display_item_keys.indexOf('article_tags') != -1){
                        if (self.display_object.display_items.article_tags == false) {
                            self.dom_view.options.items.article_tags.enabled = false;
                        }
                    }
                    //article_categories
                    if (display_item_keys.indexOf('article_categories') != -1){
                        if (self.display_object.display_items.article_categories == false) {
                            self.dom_view.options.items.article_categories.enabled = false;
                        }
                    }
                    //article_sub_categories
                    if (display_item_keys.indexOf('article_sub_categories') != -1){
                        if (self.display_object.display_items.article_sub_categories == false) {
                            self.dom_view.options.items.article_sub_categories.enabled = false;
                        }
                    }
                    //article_niche_categories
                    if (display_item_keys.indexOf('article_niche_categories') != -1){
                        if (self.display_object.display_items.article_niche_categories == false) {
                            self.dom_view.options.items.article_niche_categories.enabled = false;
                        }
                    }
                    //article_urls
                    if (display_item_keys.indexOf('article_urls') != -1){
                        if (self.display_object.display_items.article_urls == false) {
                            self.dom_view.options.items.article_urls.enabled = false;
                        }
                    }
                    //author_name
                    if (display_item_keys.indexOf('author_name') != -1){
                        if (self.display_object.display_items.author_name == false) {
                            self.dom_view.options.items.author_name.enabled = false;
                        }
                    }
                    //author_email
                    if (display_item_keys.indexOf('author_email') != -1){
                        if (self.display_object.display_items.author_email == false) {
                            self.dom_view.options.items.author_email.enabled = false;
                        }
                    }
                    //author_social
                    if (display_item_keys.indexOf('author_social') != -1){
                        if (self.display_object.display_items.author_social == false) {
                            self.dom_view.options.items.author_social.enabled = false;
                        }
                    }
                    //author_site
                    if (display_item_keys.indexOf('author_site') != -1){
                        if (self.display_object.display_items.author_site == false) {
                            self.dom_view.options.items.author_site.enabled = false;
                        }
                    }
                    //author_summary
                    if (display_item_keys.indexOf('author_summary') != -1){
                        if (self.display_object.display_items.author_summary == false) {
                            self.dom_view.options.items.author_summary.enabled = false;
                        }
                    }
                    //author_tags
                    if (display_item_keys.indexOf('author_tags') != -1){
                        if (self.display_object.display_items.author_tags == false) {
                            self.dom_view.options.items.author_tags.enabled = false;
                        }
                    }
                    //affiliate_company
                    if (display_item_keys.indexOf('affiliate_company') != -1){
                        if (self.display_object.display_items.affiliate_company == false) {
                            self.dom_view.options.items.affiliate_company.enabled = false;
                        }
                    }
                    //affiliate_organization
                    if (display_item_keys.indexOf('affiliate_organization') != -1){
                        if (self.display_object.display_items.affiliate_organization == false) {
                            self.dom_view.options.items.affiliate_organization.enabled = false;
                        }
                    }
                    //affiliate_site
                    if (display_item_keys.indexOf('affiliate_site') != -1){
                        if (self.display_object.display_items.affiliate_site == false) {
                            self.dom_view.options.items.affiliate_site.enabled = false;
                        }
                    }
                    //affiliate_email
                    if (display_item_keys.indexOf('affiliate_email') != -1){
                        if (self.display_object.display_items.affiliate_email == false) {
                            self.dom_view.options.items.affiliate_email.enabled = false;
                        }
                    }
                    //affiliate_tags
                    if (display_item_keys.indexOf('affiliate_tags') != -1){
                        if (self.display_object.display_items.affiliate_tags == false) {
                            self.dom_view.options.items.affiliate_tags.enabled = false;
                        }
                    }
                }
            }

            /*CHECK DOM FOR DISPLAY ELEMENTS*/

            /*Set Generic element events for items*/
            /*Hide/Display/Items*/
            let option_keys = Object.keys(self.dom_view.options.items);
            option_keys.forEach((key) => {
                //Populate Hide-List before document load
                if(self.dom_view.options.items[key]['enabled'] == false) {
                    self.add_item_to_array(self.dom_view.elements.reader_items[key]['id'], self.dom_view.options.hide_items);
                }
                let element_exists = self.check_element_by_id(self.dom_view.elements.reader_items[key].id);
                if (element_exists == true) {
                    let dom_element = document.getElementById(self.dom_view.options.items[key]['id']);
                    if(self.dom_view.options.items[key]['enabled'] == false) {
                        dom_element.checked = false;
                    } else {
                        dom_element.checked = true;
                    }
                    dom_element.onchange = () => {
                        if (dom_element.checked == false) {
                            self.disable_display_item(key);
                        } else {
                            self.enable_display_item(key);
                        }
                        let item_section_name = self.dom_view.options.items[key]['section'];
                        let item_section = document.getElementById(self.dom_view.elements.reader_sections[item_section_name]['id']);
                        let display_section_result = self.check_display_section_items(self.dom_view.options.sections[item_section_name]);
                        if (display_section_result == true){
                            self.enable_display_section(self.dom_view.options.sections[item_section_name])
                            item_section.checked = true;
                        } else {
                            self.disable_display_section(self.dom_view.options.sections[item_section_name]);
                            item_section.checked = false;
                        }
                        let object_set = self.check_if_object_set(self.set_obj);
                        if (object_set == true) {
                            self.reset_display();
                        }
                    };
                }
            });

            /*Hide/Display Sections*/
            let section_keys = Object.keys(self.dom_view.options.sections);
            section_keys.forEach((section_key) => {
                let element_exists = self.check_element_by_id(self.dom_view.elements.reader_sections[section_key]['id']);
                if (element_exists == true) {
                    let result = self.check_display_item_enabled(self.dom_view.options.sections[section_key]);
                    let current_section = document.getElementById(self.dom_view.options.sections[section_key].id);
                    if (result == false){
                        self.disable_display_section(self.dom_view.options.sections[section_key]);
                        current_section.checked = false;
                    } else {
                        let temp_obj = self.dom_view.options.sections[section_key];
                        self.enable_display_section(temp_obj);
                        current_section.checked = true;
                    }
                    current_section.onchange = () => {
                        if (current_section.checked == false){
                            self.disable_display_section(self.dom_view.options.sections[section_key]);
                        } else {
                            self.enable_display_section(self.dom_view.options.sections[section_key]);
                        }
                        let object_set = self.check_if_object_set(self.set_obj);
                        if (object_set == true) {
                            self.reset_display();
                        }
                    };
                }            
            });

            /* SET OBJECT EVENTS */

            /* Load file Button */
            let id_exists = self.check_element_by_id(self.dom_view.elements.menu.file_upload_button.id);
            if (id_exists == true) {
                let file_upload_button = document.getElementById(self.dom_view.elements.menu.file_upload_button.id);
                file_upload_button.onchange = () => {
                    const reader = new FileReader()
                    //reader.onload = (e) => console.log('file contents:', e.target.result)
                    let file_string = ''
                    reader.onload = async (e) => {
                        file_string = e.target.result;
                        let result = await self.import_external_object(file_string);
                        
                        if (result == true) {
                            file_upload_button.value = '';
                            self.hide_menu_items();
                            self.show_menu_options();
                            if (self.dom_view.options.menu['show_media_selector'] == false) {
                                self.dom_view.options.menu['show_media_selector'] = true;
                                self.dom_view.options.menu['show_select_blog'] = false;
                            }
                            self.set_menu_item_display();
                        } else {
                            console.log('It failed.');
                        }
                        
                    };
                    for (let file of file_upload_button.files) {
                        reader.readAsText(file)
                    }
                };
            }

            /*Get URL Button*/
            id_exists = self.check_element_by_id(self.dom_view.elements.menu.get_url_button.id);
            if (id_exists == true) {
                let get_url_button = document.getElementById(self.dom_view.elements.menu.get_url_button.id);
                get_url_button.onclick = async () => {
                    let text_box_value = document.getElementById(self.dom_view.elements.menu.load_url_text_box.id).value;
                    if (text_box_value != ''){
                        let result = await self.load_url_data(text_box_value);
                        if (result == true) {
                            self.hide_menu_items();
                            self.show_menu_options();
                            if (self.dom_view.options.menu['show_media_selector'] == false) {
                                self.dom_view.options.menu['show_media_selector'] = true;
                                self.dom_view.options.menu['show_select_blog'] = false;
                            }
                            document.getElementById(self.dom_view.elements.menu.load_url_text_box.id).value = '';
                            self.set_menu_item_display();
                        }
                        
                    }
                };
            }

            /*Load Article Button*/
            id_exists = self.check_element_by_id(self.dom_view.elements.menu.load_article_button.id);
            if (id_exists == true){
                let load_article_button = document.getElementById(self.dom_view.elements.menu.load_article_button.id);
                load_article_button.onclick = () => {
                    let article_value = document.getElementById(self.dom_view.elements.menu.articles_selection.id).value;
                    self.load_article_by_selection_value(article_value);
                    let article_top = document.getElementById('top-of-blog-article');
                    article_top.focus();
                    article_top.scrollIntoView();
                };
            }

            /*Reset View Button */
            id_exists = self.check_element_by_id(self.dom_view.elements.menu.reset_article_button.id);
            if (id_exists == true){
                let reset_article_button = document.getElementById(self.dom_view.elements.menu.reset_article_button.id);
                reset_article_button.onclick = () => {
                    self.reset_display();
                };
            }

            /*Close Article Button*/
            id_exists = self.check_element_by_id(self.dom_view.elements.menu.close_article_button.id);
            if (id_exists == true){
                let close_article_button = document.getElementById(self.dom_view.elements.menu.close_article_button.id);
                close_article_button.onclick = () => {
                    self.close_article();
                    self.display_article_info();
                    self.disable_element_by_id(self.dom_view.elements.menu.close_article_button.id);

                };
            }

            /*Load Blog Button*/
            id_exists = self.check_element_by_id(self.dom_view.elements.menu.load_blog_button.id);
            if (id_exists == true){
                let load_blog_button = document.getElementById(self.dom_view.elements.menu.load_blog_button.id);
                load_blog_button.onclick = () => {
                    self.current_blog = '';
                    self.blog_object = {};
                    self.reader_list = [];
                    let selection_value = document.getElementById(self.dom_view.elements.menu.blogs_selection.id).value;
                    if (selection_value != "") {
                        self.current_blog = selection_value;
                        if (self.current_multi_blog == '') {
                            self.blog_object = window[self.current_blog]; 
                            self.display_new_blog_list();
                        } else {
                            let temp_string = self.current_multi_blog + '_blog_' + selection_value;
                            self.load_remote_multi_blog_blog(selection_value, temp_string);
                        }
                        self.enable_element_by_id(self.dom_view.elements.menu.close_blog_button.id);
                    }
                }
            }

            /*Close Blog Button*/
            id_exists = self.check_element_by_id(self.dom_view.elements.menu.close_blog_button.id);
            if (id_exists == true){
                let close_blog_button = document.getElementById(self.dom_view.elements.menu.close_blog_button.id);
                close_blog_button.onclick = () => {
                    self.current_blog = '';
                    self.blog_object = {};
                    self.reader_list = [];
                    self.close_article();
                    self.display_blog_info();
                    self.populate_reader_list();
                    self.display_article_list();
                    self.disable_element_by_id(self.dom_view.elements.menu.close_blog_button.id);
                };
            }

            /*Load Multi-Blog button.*/
            id_exists = self.check_element_by_id(self.dom_view.elements.menu.load_multi_blog_button.id);
            if (id_exists == true){
                let load_multi_blog_button = document.getElementById(self.dom_view.elements.menu.load_multi_blog_button.id);
                load_multi_blog_button.onclick = () => {
                    self.current_multi_blog = '';
                    self.multi_blog_object = {};
                    self.mblog_list = [];
                    self.current_blog_list = [];
                    self.reader_list = [];
                    let selection_value = document.getElementById(self.dom_view.elements.menu.multi_blogs_selection.id).value;
                    if (selection_value != "") {
                        self.current_multi_blog = selection_value;
                        self.multi_blog_object = window[self.current_multi_blog];
                        
                        let blog_list = Object.keys(self.multi_blog_object['blog_list']);
                        blog_list.forEach((blog) => {
                            self.mblog_list.push(blog);
                        });
                        
                        let close_multi_blog_button = document.getElementById(self.dom_view.elements.menu.close_multi_blog_button.id);
                        if (close_multi_blog_button != ""){
                            self.enable_element_by_id(self.dom_view.elements.menu.close_multi_blog_button.id);
                        }
                        self.display_multi_blog_info();
                        self.display_blog_list();
                    }
                };
            }

            /*Close Multi-Blog Button*/
            id_exists = self.check_element_by_id(self.dom_view.elements.menu.close_multi_blog_button.id);
            if (id_exists == true) {
                let close_multi_blog_button = document.getElementById(self.dom_view.elements.menu.close_multi_blog_button.id);
                close_multi_blog_button.onclick = () => {
                    self.current_multi_blog = '';
                    self.current_blog = '';
                    self.mblog_list = [];
                    self.current_blog_list = [];
                    self.reader_list = [];
                    self.multi_blog_object = {};
                    self.blog_object = {};
                    self.close_article();
                    self.display_multi_blog_info();
                    self.populate_reader_list();
                    self.display_blog_list();
                    self.display_blog_info();
                    self.display_article_list();
                    self.disable_element_by_id(self.dom_view.elements.menu.close_multi_blog_button.id);
                };
            }

            /*Main Menu Button*/
            id_exists = self.check_element_by_id(self.dom_view.elements.menu.menu_button.id);
            if (id_exists == true) {
                let menu_button = document.getElementById(self.dom_view.elements.menu.menu_button.id);
                menu_button.onclick = () => {
                    self.hide_menu_items();
                    self.show_menu_options();
                    if(self.dom_view.options.menu['show_menu'] == false) {
                        self.dom_view.options.menu['show_menu'] = true;
                    } else {
                        self.dom_view.options.menu['show_menu'] = false;
                    }
                    self.set_menu_item_display();
                };
            }

            /*Menu - Load Blog Button*/
            id_exists = self.check_element_by_id(self.dom_view.elements.menu.menu_load_blog.id);
            if (id_exists == true) {
                let menu_load_blog = document.getElementById(self.dom_view.elements.menu.menu_load_blog.id);
                menu_load_blog.onclick = () => {
                    self.hide_menu_items();
                    self.show_menu_options();
                    if (self.dom_view.options.menu['show_blog_loader'] == false) {
                        self.dom_view.options.menu['show_blog_loader'] = true;
                        self.dom_view.options.menu['show_load_blog'] = false;
                    }
                    self.set_menu_item_display();
                };
            }

            /*Menu - Select Blog Button*/
            id_exists = self.check_element_by_id(self.dom_view.elements.menu.menu_select_blog.id);
            if (id_exists == true){
                let menu_select_blog = document.getElementById(self.dom_view.elements.menu.menu_select_blog.id);
                menu_select_blog.onclick = () => {
                    self.hide_menu_items();
                    self.show_menu_options();
                    if (self.dom_view.options.menu['show_media_selector'] == false) {
                        self.dom_view.options.menu['show_media_selector'] = true;
                        self.dom_view.options.menu['show_select_blog'] = false;
                    }
                    self.set_menu_item_display();
                };
            }
            
            /*Menu - View Sections Button*/
            id_exists = self.check_element_by_id(self.dom_view.elements.menu.menu_view_sections.id);
            if (id_exists == true){
                let menu_view_sections = document.getElementById(self.dom_view.elements.menu.menu_view_sections.id);
                menu_view_sections.onclick = () => {
                    self.hide_menu_items();
                    self.show_menu_options();
                    if (self.dom_view.options.menu['show_sections_selector'] == false) {
                        self.dom_view.options.menu['show_sections_selector'] = true;
                        self.dom_view.options.menu['show_view_sections'] = false;
                    }
                    self.set_menu_item_display();
                };
            }
            
            /*Menu - View Items Button*/
            id_exists = self.check_element_by_id(self.dom_view.elements.menu.menu_view_items.id);
            if (id_exists == true){
                let menu_view_items = document.getElementById(self.dom_view.elements.menu.menu_view_items.id);
                menu_view_items.onclick = () => {
                    self.hide_menu_items();
                    self.show_menu_options();
                    if (self.dom_view.options.menu['show_items_selector'] == false) {
                        self.dom_view.options.menu['show_items_selector'] = true;
                        self.dom_view.options.menu['show_view_items'] = false;
                    }
                    self.set_menu_item_display();
                };
            }

            /*Article NAV - Load Article Button*/
            id_exists = self.check_element_by_id(self.dom_view.elements.reader_nav.article_nav_selector_load_article.id);
            if (id_exists == true) {
                let nav_load_article_button = document.getElementById(self.dom_view.elements.reader_nav.article_nav_selector_load_article.id);
                nav_load_article_button.onclick = () => {
                    let article_value = document.getElementById(self.dom_view.elements.reader_nav.article_nav_selector.id).value;
                    self.load_article_by_selection_value(article_value);
                    let article_top = document.getElementById('top-of-blog-article');
                    article_top.focus();
                    article_top.scrollIntoView();
                };
            }

            /*Article NAV - Close Article Button*/
            id_exists = self.check_element_by_id(self.dom_view.elements.reader_nav.article_nav_selector_close_article.id);
            if (id_exists == true) {
                let nav_close_article_button = document.getElementById(self.dom_view.elements.reader_nav.article_nav_selector_close_article.id);
                nav_close_article_button.onclick = () => {
                    self.close_article();
                    self.display_article_info();
                    self.disable_element_by_id(self.dom_view.elements.menu.close_article_button.id);
                };
            }

            /*Article NAV - Next Article Button */
            id_exists = self.check_element_by_id(self.dom_view.elements.reader_nav.article_nav_next_article_button.id);
            if (id_exists == true) {
                let nav_load_next_article_button = document.getElementById(self.dom_view.elements.reader_nav.article_nav_next_article_button.id);
                nav_load_next_article_button.onclick = () => {
                    self.nav_load_next_article();
                    let article_top = document.getElementById('top-of-blog-article');
                    article_top.focus();
                    article_top.scrollIntoView();
                };
            }

            /*Article NAV - Previous Article Button */
            id_exists = self.check_element_by_id(self.dom_view.elements.reader_nav.article_nav_previous_article_button.id);
            if (id_exists == true) {
                let nav_load_previous_article_button = document.getElementById(self.dom_view.elements.reader_nav.article_nav_previous_article_button.id);
                nav_load_previous_article_button.onclick = () => {
                    self.nav_load_previous_article();
                    let article_top = document.getElementById('top-of-blog-article');
                    article_top.focus();
                    article_top.scrollIntoView();
                };
            }

            /*Hide Menu*/
            if (self.check_element_by_id(self.dom_view.elements.menu.menu_button.id) == true){
                self.hide_menu_items();
                self.set_menu_item_display();
            }
            /*Check if menu needs to be displayed. 
            This should kick-start the init_menu sequence*/
            if (Object.keys(self.display_object).indexOf('display_menu') != -1) {
                if (self.display_object.display_menu == true) {
                    self.unhide_element_by_id(self.dom_view.elements.menu.menu.id);
                } else {
                    self.hide_element_by_id(self.dom_view.elements.menu.menu.id);
                }
            }
            /*Populate Media lists (!)Keep as LAST*/
            if (self.check_element_by_id(self.dom_view.elements.menu.media_selector.id) == true){
                self.display_multi_blog_list();
                self.display_blog_list();
                self.display_article_list();
                self.display_article_info();
                self.display_blog_info();
                self.display_multi_blog_info();
            }
        }

        terraform_functions(this);
        menu_functions(this);

        /*Check if article is to be auto-loaded*/
        if (Object.keys(this.display_object).indexOf('auto_load_article') != -1) {
            if (this.display_object.auto_load_article.url != ''){
                if (this.display_object.auto_load_article.type == 'article'){
                    let result = await this.auto_load_article();
                    if (result == true){
                        this.display_article_info();
                        this.display_article();
                        this.nav_display_article_list();
                    } else {
                        //console.log('Init Auto Load Article failed.');
                    }
                }
                if (this.display_object.auto_load_article.type == 'blog'){
                    let result = await this.auto_load_blog();
                    if (result == true) {
                        //console.log('success!');
                    }
                }
                if (this.display_object.auto_load_article.type == 'mxblog'){
                    let result = await this.auto_load_multi_blog();
                    if (result == true){
                        //console.log('success!');
                    }
                }
            }
        }

        /*Check if Blog is to be auto-loaded*/
    }
}