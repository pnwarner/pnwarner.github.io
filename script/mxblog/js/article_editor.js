class Article_Editor {
    constructor() {
        self = this;
        this.dom_view = {
            options: {},
            elements: {}
        };
        this.init();
    }
    
    terraform_include_editor = function(){
        /*
        <section id="blog-editor">
        <section id="blog-editor-import-export">
            <button>Import Blog</button>
            <button>Preview Blog</button>
            <button>Save Article</button>
        </section>
        <section id="blog-editor-items"><!--Blog Editor Items-->
            <!--Article Object to Add to BLOG -> MUTLI-BLOG-->
            <section id="blog-editor-items-selector">
                <section id="input-article-title-selector" class="child-block"><!--Article Title Editor-->
                    <label for="input-article-title">Article Title
                        <section id="input-article-title">
                            <label for="input-new-article-title-text">Title
                                <input type="text" name="input-new-article-title-text" id="input-article-title">
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-article-summary-selector" class="child-block"><!--Article Summary Editor-->
                    <label for="input-article-summary">Article Summary
                        <section id="input-article-summary">
                            <label for="input-new-article-summary-textarea">Summary
                                <textarea name="input-new-article-summary-textarea" id="input-new-article-summary-textarea"></textarea>
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-article-rating-selector" class="child-block"><!--Article Rating Editor-->
                    <label for="input-article-rating">Article Rating
                        <section id="input-article-rating">
                            <label for="input-new-aricle-rating-text">Rating
                                <input type="text" name="input-new-article-rating-text" id="input-new-article-rating-text">
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-article-content-warning-selector" class="child-block"><!--Article Content Warning Editor-->
                    <label for="input-article-content-warning">Content Warning
                        <section id="input-article-content-warning">
                            <label for="input-new-article-content-warning">Add Item
                                <section id="input-new-article-content-warning">
                                    <label for="input-new-article-content-warning-text">New Warning:
                                        <input type="text" name="input-new-article-content-warning-text" id="input-new-article-content-warning-text">
                                    </label>
                                    <button id="input-new-article-content-warning-add-item-button">Add Item</button>
                                </section>
                            </label>
                            <label for="input-new-article-content-warning-items-section">Saved Items
                                <section id="input-new-article-content-warning-items-section">
                                    <select name="input-article-content-warning-items" id="input-article-content-warning-items" size="5">
                                        <option name="placeholder">Placeholder</option>
                                    </select>
                                    <button id="input-new-article-content-warning-remove-item-button">Remove Item</button>
                                    <button id="input-new-article-content-warning-edit-item-button">Edit Item</button>
                                </section>
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-content-trigger-warning-selector" class="child-block"><!--Article Content trigger warning editor-->
                    <label for="input-article-content-trigger-warning">Content Trigger Warning
                        <section id="input-article-content-trigger-warning">
                            <label for="input-new-article-content-trigger-warning">Add Item
                                <section id="input-new-article-content-trigger-warning">
                                    <label for="input-new-article-content-trigger-warning-text">New Trigger Warning
                                        <input type="text" name="input-new-article-content-trigger-warning-text" id="input-new-article-content-trigger-warning-text">
                                    </label>
                                    <button id="input-article-content-trigger-warning-add-item-button">Add Item</button>
                                </section>
                            </label>
                            <label for="input-new-article-content-trigger-warning-items-section">Saved Items
                                <section id="input-new-article-content-trigger-warning-items-section">
                                    <select name="input-article-content-warning-trigger-items" id="input-article-content-warning-trigger-items" size="5">
                                        <option name="placeholder">Placeholder</option>
                                    </select>
                                    <button id="input-new-article-content-trigger-warning-remove-item-button">Remove Item</button>
                                    <button id="input-new-article-content-trigger-warning-edit-item-button">Edit Item</button>
                                </section>
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-article-articles-selector" class="child-block"><!--Article Paragraphs editor-->
                    <label for="input-articles">Articles
                        <section id="input-articles">
                            <label for="input-articles-text-area">Add some text
                                <section id="input-articles-text-area">
                                    <textarea name="input-articles-text" id="input-articles"></textarea>
                                </section>
                            </label>
                            <button>Add Paragraph</button>
                        </section>
                    </label>
                    <label for="input-article-media">Include Media
                        <section id="input-article-media">
                            <select name="input-article-media-items" id="input-article-media-items" size="5">
                                <option name="placeholder">Placeholder</option>
                            </select>
                            <button>Include Media</button>
                        </section>
                    </label>
                    <label for="edit-article-paragraphs">Edit Paragraphs
                        <section id="edit-article-paragraphs">
                            <select name="input-article-paragraphs" id="input-article-paragraphs" size="5">
                                <option name="placeholder">Placeholder</option>
                            </select>
                            <button>Edit Item</button>
                            <button>Remove Item</button>
                        </section>
                    </label>
                </section>
                <section id="input-article-media-sources-selector" class="child-block"><!--Article Media Sources-->
                    <label for="input-article-media-sources">Media Sources
                        <section id="input-article-media-sources">
                            <label for="input-new-article-media-source">Add Media Source
                                <section id="input-new-article-media-source">
                                    <label for="input-new-article-media-source-name-text">Link Name
                                        <input type="text" name="input-new-article-media-source-name-text" id="input-new-article-media-source-name-text">
                                    </label>
                                    <label for="input-new-article-media-source-address-text">URL
                                        <input type="text" name="input-new-article-media-source-address-text" id="input-new-article-media-source-address-text">
                                    </label>
                                    <button id="input-new-article-media-source-button-add-item">Add Source</button>
                                </section>
                            </label>
                            <label for="edit-article-media-sources">Edit Media Sources
                                <section id="edit-article-media-sources">
                                    <select name="edit-article-media-sources-list" size="5">
                                        <option name="placeholder">Placeholder</option>
                                    </select>
                                    <button id="edit-article-media-sources-list-remove-item">Remove Source</button>
                                    <button id="edit-article-media-sources-list-edit-item">Edit Source</button>
                                </section>
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-article-sources-selector" class="child-block"><!--Article Sources Editor-->
                    <label for="input-article-sources">Article Sources
                        <section id="input-article-sources">
                            <label for="input-new-article-source">Add Source
                                <section id="input-new-article-source">
                                    <label for="input-new-article-source-reference-text">Reference
                                        <input type="text" name="input-new-article-source-reference-text" id="input-new-article-source-reference-text">
                                    </label>
                                    <label for="input-new-article-source-reference-address-text">Source
                                        <input type="text" name="input-new-article-source-reference-address-text" id="input-new-article-source-reference-address-text">
                                    </label>
                                    <button id="input-new-article-source-button-add-source">Add Source</button>
                                </section>
                            </label>
                            <label for="edit-article-sources">Edit Sources
                                <section id="edit-article-sources">
                                    <select name="edit-article-sources-list" size="5">
                                        <option name="placeholder">Placeholder</option>
                                    </select>
                                    <button id="edit-article-sources-list-remove-item">Remove Item</button>
                                    <button id="edit-article-sources-list-edit-item">Edit Item</button>
                                </section>
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-article-links-selector" class="child-block"><!--Article Links Editor-->
                    <label for="input-article-links">Article Links
                        <section id="input-article-links">
                            <label for="input-new-article-link">Add Link
                                <section id="input-new-article-link">
                                    <label for="input-new-article-link-name-text">Link Name
                                        <input type="text" name="input-new-article-link-name-text" id="input-new-article-link-name-text">
                                    </label>
                                    <label for="input-new-article-link-address-text">URL
                                        <input type="text" name="input-new-article-link-address-text" id="input-new-article-link-address-text">
                                    </label>
                                    <button id="input-new-article-link-button-add-link">Add Link</button>
                                </section>
                            </label>
                            <label for="edit-article-links">Edit Links
                                <section id="edit-article-links">
                                    <select name="edit-article-links-list" size="5">
                                        <option name="placeholder">Placeholder</option>
                                    </select>
                                    <button id="edit-article-link-list-remove-item">Remove Item</button>
                                    <button id="edit-article-link-list-edit-item">Edit Item</button>
                                </section>
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-article-date-selector" class="child-block"><!--Article Date Editor-->
                    <label for="input-article-date">Article Date
                        <section id="input-article-date">
                            <label for="input-new-article-date">
                                <input type="date" name="input-new-article-date" id="input-new-article-date">
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-article-time-selector" class="child-block"><!--Article Time Editor-->
                    <label for="input-article-time">Article Time
                        <section id="input-article-time">
                            <label for="input-new-article-time">
                                <input type="time" name="input-new-article-time" id="input-new-article-time">
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-article-location-selector" class="child-block"><!--Article Location Editor-->
                    <label for="input-article-location">Article Location
                        <section id="input-article-location">
                            <label for="input-article-location-text">Location
                                <input type="text" name="input-article-location-text" id="input-article-location-text">
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-article-geo-location-selector" class="child-block"><!--Article Geo-Location Editor-->
                    <label for="input-article-geo-location">Article Geo Location
                        <section id="input-article-geo-location">
                            <label for="input-article-geo-location-text">Geo Location
                                <input type="text" name="input-article-geo-location-text" id="input-article-geo-location-text">
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-article-tags-selector" class="child-block"><!--Article Tags Editor-->
                    <label for="input-article-tags">Article Tags
                        <section id="input-article-tags">
                            <label for="input-new-article-tag">Add Tag
                                <section id="input-new-article-tag">
                                    <label for="input-new-article-tag-text">New Tag:
                                        <input type="text" name="input-new-article-tag-text" id="input-new-article-tag-text">
                                    </label>
                                    <button id="input-new-article-tag-add-item-button">Add Tag</button>
                                </section>
                            </label>
                            <label for="input-new-article-tag-items-section">Saved Tags
                                <section id="input-new-article-tag-items-section">
                                    <select name="input-new-article-tag-items" id="input-new-article-tag-items" size="5">
                                        <option name="placeholder">Placeholder</option>
                                    </select>
                                    <button id="input-new-article-tag-remove-item-button">Remove Tag</button>
                                    <button id="input-new-article-tag-edit-item-button">Edit Tag</button>
                                </section>
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-article-categories-selector" class="child-block"><!--Article Categories Editor-->
                    <label for="input-article-categories">Article Categories
                        <section id="input-article-categories">
                            <label for="input-new-article-category">Add Category
                                <section id="input-new-article-category">
                                    <label for="input-new-article-category-text">New Category:
                                        <input type="text" name="input-new-article-category-text" id="input-new-article-category-text">
                                    </label>
                                    <button id="input-new-article-category-add-item-button">Add Category</button>
                                </section>
                            </label>
                            <label for="input-new-article-category-items-section">Saved Categories
                                <section id="input-new-article-categories-items-section">
                                    <select name="input-article-category-items" id="input-article-category-items" size="5">
                                        <option name="placeholder">Placeholder</option>
                                    </select>
                                    <button id="input-new-article-category-remove-item-button">Remove Category</button>
                                    <button id="input-new-article-category-edit-item-button">Edit Category</button>
                                </section>
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-article-sub-categories-selector" class="child-block"><!--Article Sub Categories Editor-->
                    <label for="input-article-sub-categories">Article Sub-Categories
                        <section id="input-article-sub-categories">
                            <label for="input-new-article-sub-category">Add Sub-Category
                                <section id="input-new-article-sub-category">
                                    <label for="input-new-article-sub-category-text">New Sub-Category:
                                        <input type="text" name="input-new-article-sub-category-text" id="input-new-article-sub-category-text">
                                    </label>
                                    <button id="input-new-article-sub-category-add-item-button">Add Sub-Category</button>
                                </section>
                            </label>
                            <label for="input-new-article-sub-category-items-section">Saved Sub-Categories
                                <section id="input-new-article-sub-categories-items-section">
                                    <select name="input-article-sub-category-items" id="input-article-sub-category-items" size="5">
                                        <option name="placeholder">Placeholder</option>
                                    </select>
                                    <button id="input-new-article-sub-category-remove-item-button">Remove Sub-Category</button>
                                    <button id="input-new-article-sub-category-edit-item-button">Edit Sub-Category</button>
                                </section>
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-article-niche-categories-selector" class="child-block"><!--Article Niche Categories Editor-->
                    <label for="input-article-niche-categories">Article Niche-Categories
                        <section id="input-article-niche-categories">
                            <label for="input-new-article-niche-category">Add Niche-Category
                                <section id="input-new-article-niche-category">
                                    <label for="input-new-article-niche-category-text">New Niche-Category:
                                        <input type="text" name="input-new-article-niche-category-text" id="input-new-article-niche-category-text">
                                    </label>
                                    <button id="input-new-article-niche-category-add-item-button">Add Niche-Category</button>
                                </section>
                            </label>
                            <label for="input-new-article-niche-category-items-section">Saved Niche-Categories
                                <section id="input-new-article-niche-categories-items-section">
                                    <select name="input-article-niche-category-items" id="input-article-niche-category-items" size="5">
                                        <option name="placeholder">Placeholder</option>
                                    </select>
                                    <button id="input-new-article-niche-category-remove-item-button">Remove Niche-Category</button>
                                    <button id="input-new-article-niche-category-edit-item-button">Edit Niche-Category</button>
                                </section>
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-article-urls-selector" class="child-block"><!--Article URLs Editor-->
                    <label for="input-article-urls">Article URLs
                        <section id="input-article-urls">
                            <label for="input-new-article-url">Add URL
                                <section id="input-new-article-url">
                                    <label for="input-new-article-link-name-text">Name
                                        <input type="text" name="input-new-article-url-name-text" id="input-new-article-url-name-text">
                                    </label>
                                    <label for="input-new-article-url-address-text">URL
                                        <input type="text" name="input-new-article-url-address-text" id="input-new-article-url-address-text">
                                    </label>
                                    <button id="input-new-article-url-button-add-item">Add URL</button>
                                </section>
                            </label>
                            <label for="edit-article-urls">Edit URLs
                                <section id="edit-article-urls">
                                    <select name="edit-article-urls-list" size="5">
                                        <option name="placeholder">Placeholder</option>
                                    </select>
                                    <button id="edit-article-urls-list-remove-item">Remove URL</button>
                                    <button id="edit-article-urls-list-edit-item">Edit URL</button>
                                </section>
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-author-name-selector" class="child-block"><!--Author Editor-->
                    <label for="input-author-name">Author Name
                        <section id="input-author-name">
                            <label for="input-new-author-name-text">Name
                                <input type="text" name="input-new-author-name-text" id="input-new-author-name-text">
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-author-email-selector" class="child-block"><!--Author Email-->
                    <label for="input-author-email">Author Email
                        <section id="input-author-email">Email Address
                            <label for="input-new-author-email-text">
                                <input type="text" name="input-new-author-email-text" id="input-new-author-email-text">
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-author-social-selector" class="child-block"><!--Author Social-->
                    <label for="input-author-social">Author Social Media
                        <section id="input-author-social">
                            <label for="input-new-author-social">Add Social Media
                                <section id="input-new-author-social">
                                    <label for="input-new-author-social-name-text">Network
                                        <input type="text" name="input-new-author-social-name-text" id="input-new-author-social-name-text">
                                    </label>
                                    <label for="input-new-author-social-address-text">URL
                                        <input type="text" name="input-new-author-social-address-text" id="input-new-author-social-address-text">
                                    </label>
                                    <button id="input-new-author-social-button-add-item">Add Network</button>
                                </section>
                            </label>
                            <label for="edit-author-social">Edit Networks
                                <section id="edit-author-social">
                                    <select name="edit-author-social-list" size="5">
                                        <option name="placeholder">Placeholder</option>
                                    </select>
                                    <button id="edit-author-social-list-remove-item">Remove Network</button>
                                    <button id="edit-author-social-list-edit-item">Edit Network</button>
                                </section>
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-author-site-selector" class="child-block"><!--Author Site-->
                    <label for="input-author-site">Author Website
                        <section id="input-author-site">
                            <label for="input-new-author-site-text">URL
                                <input type="text" name="input-new-author-site-text" id="input-new-author-site-text">
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-author-summary-selector" class="child-block"><!--Author BIO-->
                    <label for="input-author-summary">Author Bio
                        <section id="input-author-summary">Summary
                            <label for="input-new-author-summary-textarea">
                                <textarea name="input-new-author-summary-textarea" id="input-new-author-summary-textarea"></textarea>
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-author-tags-selector" class="child-block"><!--Author Tags-->
                    <label for="input-author-tags">Author Tags
                        <section id="input-author-tags">
                            <label for="input-new-author-tag">Add Tag
                                <section id="input-new-author-tag">
                                    <label for="input-new-author-tag-text">New Tag:
                                        <input type="text" name="input-new-author-tag-text" id="input-new-author-tag-text">
                                    </label>
                                    <button id="input-new-author-tag-add-item-button">Add Tag</button>
                                </section>
                            </label>
                            <label for="input-new-author-tag-items-section">Saved Tags
                                <section id="input-new-author-tag-items-section">
                                    <select name="input-new-author-tag-items" id="input-new-author-tag-items" size="5">
                                        <option name="placeholder">Placeholder</option>
                                    </select>
                                    <button id="input-new-author-tag-remove-item-button">Remove Tag</button>
                                    <button id="input-new-author-tag-edit-item-button">Edit Tag</button>
                                </section>
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-author-affiliate-company-selector" class="child-block"><!--Affiliate Company-->
                    <label for="input-author-affiliate-company">Author - Affiliate Company
                        <section id="input-author-affiliate-company">
                            <label for="input-new-author-affiliate-company-text">Company Name
                                <input type="text" name="input-new-author-affiliate-company-text" id="input-new-author-affiliate-company-text">
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-author-affiliate-organization-selector" class="child-block"><!--Affiliate Organization-->
                    <label for="input-author-affiliate-organization">Author - Affiliate Organization
                        <section id="input-author-affiliate-organization">Organization Name
                            <label for="input-new-author-affiliate-organization-text">
                                <input type="text" name="input-new-author-affiliate-organization-text" id="input-new-author-affiliate-organization-text">
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-author-affiliate-email-selector" class="child-block"><!--Affiliate Email-->
                    <label for="input-author-affiliate-email">Author - Affiliate Email
                        <section id="input-author-affiliate-email">
                            <label for="input-new-author-affiliate-email-text">Email
                                <input type="email" name="input-new-author-affiliate-email-text" id="input-new-author-affiliate-email-text">
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-author-affiliate-site-selector" class="child-block"><!--Affiliate Site-->
                    <label for="input-author-affiliate-site">Author - Affiliate Website
                        <section id="input-author-affiliate-site">
                            <label for="input-new-author-affiliate-site-text">URL
                                <input type="text" name="input-new-author-affiliate-site-text" id="input-new-author-affiliate-site-text">
                            </label>
                        </section>
                    </label>
                </section>
                <section id="input-author-affiliate-tags-selector" class="child-block"><!--Affiliate Tags-->
                    <label for="input-author-affiliate-tags">Affiliate Tags
                        <section id="input-author-affiliate-tags">
                            <label for="input-new-author-affiliate-tag">Add Tag
                                <section id="input-new-author-affiliate-tag">
                                    <label for="input-new-author-affiliate-tag-text">New Tag:
                                        <input type="text" name="input-new-author-affiliate-tag-text" id="input-new-author-affiliate-tag-text">
                                    </label>
                                    <button id="input-new-author-affiliate-tag-add-item-button">Add Tag</button>
                                </section>
                            </label>
                            <label for="input-new-author-affiliate-tag-items-section">Saved Tags
                                <section id="input-new-author-affiliate-tag-items-section">
                                    <select name="input-new-author-affiliate-tag-items" id="input-new-author-affiliate-tag-items" size="5">
                                        <option name="placeholder">Placeholder</option>
                                    </select>
                                    <button id="input-new-author-affiliate-tag-remove-item-button">Remove Tag</button>
                                    <button id="input-new-author-affiliate-tag-edit-item-button">Edit Tag</button>
                                </section>
                            </label>
                        </section>
                    </label>
                </section>
            </section>
        </section>
        <section><!--Blog Reader Settings-->

        </section>
        <section><!--Edit/Save/Output-->
            <!--
                Output Article to Object
            -->
        </section>
    </section>
    */
    }
    init = function(){}
}