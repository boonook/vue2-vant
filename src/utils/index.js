export function getIsIphonex() {
    let u = navigator.userAgent;
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isIOS) {
        if (screen.height == 812 && screen.width == 375) {
            return true;
        }
        else {
            return false;
        }
    }
}
