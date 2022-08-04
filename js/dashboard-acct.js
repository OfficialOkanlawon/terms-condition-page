(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        const timm = h + ":" + m + ":" + s;
        document.querySelector(".time").innerHTML = timm
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
})();