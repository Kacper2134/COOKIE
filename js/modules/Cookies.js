export class Cookies {

    constructor () {
        this.checkCookieEnabled();
    }
    checkCookieEnabled() {
        //console.log(navigator.cookieEnabled);
        if(!navigator.cookieEnabled) {
            alert("Masz wyłaczone pliki Cookie");
            return;
        }
    }
    setCookie(options) {
        //console.log(options);
        const cookieSettingsTab = [];

        cookieSettingsTab.push(`${options.name}=${options.value}`);

        if(typeof options.days === 'number') {
            const date = new Date();
            //console.log(date);
            date.setTime(date.getTime() + (options.days *24 *60*60*1000));
            cookieSettingsTab.push(`expires=${date.toGMTString()}`)
        }
        document.cookie = cookieSettingsTab.join(';');

        console.log(cookieSettingsTab);
    }

    getCookie(name){

        if(document.cookie != ''){

            const Cookies = document.cookie.split(/; */);

            for(let i=0; i<Cookies.length;i++) {

                const cookieName = Cookies[i].split('=')[0];
                const cookieVal = Cookies[i].split('=')[1];
                
                if(cookieName === name){
                    return cookieVal;
                }
            }
        }
    }

    removeCookie(name){
        this.setCookie({
            name:name,
            days: -1
        })
    }
}

