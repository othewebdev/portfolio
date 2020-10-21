function dispDate() {

    var year = new Date().getFullYear();

    var date = `&copy; Odis Barnett ${year}. All Rights Reserved`

    document.getElementsByTagName("footer")[0].innerHTML = date;

}

dispDate();