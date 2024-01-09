class Animation {

    constructor(id_img_in, id_img_out, transition_array){
        self = this;
        this.img_in = document.getElementById(id_img_in);
        this.img_out = document.getElementById(id_img_out);
        this.runLoop = false;
        this.fade_done = false;
        this.first_run = true;
        this.in_num = 0;
        this.out_num = 1;
        this.img_timeout = transition_array['img_timeout'];
        this.fade_timeout = transition_array['fade_timeout'];
        this.img_in_op = 1.00;
        this.img_out_op = 0.00;
        this.fade_transition = transition_array['fade_transition'];
        this.animFrames = transition_array['frames'];
        this.img_in_class = "";
        this.img_out_class = "";
        this.delay = ms => new Promise(res => setTimeout(res, ms));
    }
    
    addClassToElement = function(elementObject, className) {
        elementObject.classList.add(className);
    }

    removeClassFromElement = function(elementObject, className){
        elementObject.classList.remove(className);
    }

    setImgClasses = function() {
        this.img_in_class = this.animFrames[this.in_num];
        this.img_out_class = this.animFrames[this.out_num];
    }

    removeImages = function() {
        this.removeClassFromElement(this.img_in, this.img_in_class);
        this.removeClassFromElement(this.img_out, this.img_out_class);
    }

    addImages = function() {
        this.addClassToElement(this.img_in, this.img_in_class);
        this.addClassToElement(this.img_out, this.img_out_class);
    }

    startAnimation = function(){
        this.runLoop = true;
        this.swapElements();
    }

    clearFrames = function() {
        this.img_in.style.opacity = 0;
        this.img_out.style.opacity = 0;
    }

    stopAnimation = function() {
        this.runLoop = false;
        this.fade_done = true;
        
    }

    changeAnimation = async function(newTransition) {
        this.stopAnimation();
        await this.delay(this.img_timeout);
        this.animFrames = newTransition['frames'];
        this.img_timeout = newTransition['img_timeout'];
        this.fade_timeout = newTransition['fade_timeout'];
        this.fade_transition = newTransition['fade_transition'];
        this.in_num = 0;
        this.out_num = 1;
        this.first_run = true;
        this.startAnimation();
    }

    fadeElements = async function() {
        while (this.fade_done == false) {
            this.img_in_op = this.img_in_op - 0.01;
            this.img_out_op = this.img_out_op + 0.01; 
            if (this.img_out_op > 1 || this.img_in_op < 0) {
                this.img_out_op = 1;
                this.img_in_op = 0;
                this.fade_done = true;
            }
            this.img_in.style.opacity = this.img_in_op;
            this.img_out.style.opacity = this.img_out_op;
            await this.delay(this.fade_timeout);
        }
        if (this.runLoop == false) {
            this.clearFrames();
            clearTimeout(this.delay);
        }
    }

    swapElements = async function() {
        let $frameCount =  this.animFrames.length;
        this.setImgClasses();
        while (this.runLoop == true){
            if (this.first_run == true) {
                this.first_run = false;
            } else {
                this.removeImages();
                if ((this.in_num + 1) == $frameCount) {
                    this.in_num = 0;
                } else {
                    this.in_num = this.in_num + 1;
                }
                if ((this.out_num + 1) == $frameCount) {
                    this.out_num=0;
                } else {
                    this.out_num = this.out_num + 1;
                }
                this.setImgClasses();
            }
            this.img_in_op = 1.00;
            this.img_out_op = 0.00;
            this.img_in.style.opacity = this.img_in_op;
            this.img_out.style.opacity = this.img_out_op;
            this.addImages();
            if (this.fade_transition == true) {
                this.fade_done = false;
                this.fadeElements();
            }
            await this.delay(this.img_timeout);
        }
        if (this.runLoop == false) {
            this.clearFrames();
            clearTimeout(this.delay);
            this.removeImages();
        }
    }

}