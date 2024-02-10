class Server_Item  {
    constructor(url, request, server_name, text_element, wrapper_id) {
        this.url = url;
        this.request = request;
        this.server_name = server_name;
        this.status = "";
        this.req_time = 0;
        this.text_element = text_element;
        this.wrapper_id = wrapper_id;
    }

    display_status = function() {
        let textbox = document.getElementById(this.text_element);
        textbox.innerHTML = '';
        if (this.status != this.server_name + " Timed out. [DOWN]"){
            textbox.innerHTML = '<a href="' + this.url + '"><span class="server-link">' + this.server_name + ' (</span> <span class="large-bold-white">' + this.req_time + '</span><span class="server-link">ms )</span> [UP]</a>';
        } else {
            textbox.innerHTML = this.status;
        }
    }
}

async function make_request(method, Server_Item){
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.timeout = 10000;
        xhr.open(method, Server_Item.url + Server_Item.request);
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
        xhr.ontimeout = (e) => {
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

async function time_site_response(Server_Item) {
    let start_time = new Date().getTime();
    try {
        let response = await make_request("GET", Server_Item);
        if (response != false) {
            let end_time = new Date().getTime() - start_time;
            /* Process Response String here, and assign Server_Item.status after */
            Server_Item.status = json.parse(response).status;
            Server_Item.req_time = end_time;
            return true
        } else {
            return false;
        }
    } catch(error) {
        return false;
    }
}

async function check_site(Server_Item) {
    let response = await time_site_response(Server_Item);
    if (response == false){
        Server_Item.status = Server_Item.server_name + " Timed out. [DOWN]";
        Server_Item.req_time = 0;
    }
    Server_Item.display_status();
    return true
}

function check_servers() {
    check_site(site1);
    check_site(site2);
    check_site(site3);
    check_site(site4);
}

const site1 = new Server_Item('https://s1.paradoxresearch.net/', '?status', 'Server 1', 'server-1-text', 'server-1-wrapper');
const site2 = new Server_Item('https://s2.paradoxresearch.net/', '?status', 'Server 2', 'server-2-text', 'server-2-wrapper');
const site3 = new Server_Item('https://s3.paradoxresearch.net/', '?status', 'Server 3', 'server-3-text', 'server-3-wrapper');
const site4 = new Server_Item('https://s4.paradoxresearch.net/', '?status', 'Server 4', 'server-4-text', 'server-4-wrapper');

function repeat_check(){
    check_servers();
    setTimeout(repeat_check, 10000);
}

repeat_check();

/*
<section id="server-demo-info" class="server-demo-info">
    <p class="large-bold-white">Project server status:</p>
    <div id="server-4-wrapper" class="server-demo-info-card">
        <div class="server-svg-image server-demo-info-card-icon"></div>
        <p id="server-4-text">Server 4</p>
    </div>
    <div id="server-3-wrapper" class="server-demo-info-card">
        <div class="server-svg-image server-demo-info-card-icon"></div>
        <p id="server-3-text">Server 3</p>
    </div>
    <div id="server-2-wrapper" class="server-demo-info-card">
        <div class="server-svg-image server-demo-info-card-icon"></div>
        <p id="server-2-text">Server 2</p>
    </div>
    <div id="server-1-wrapper" class="server-demo-info-card">
        <div class="server-svg-image server-demo-info-card-icon"></div>
        <p id="server-1-text">Server 1</p>
    </div>
</section>
*/