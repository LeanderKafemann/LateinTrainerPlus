async function getScores() {
    //currently only for testing purposes
    let linkAdd = getCookie("ltid", document.cookie)+"&lehrbuch="+getCookie("ltbook", document.cookie);
    let response = await fetch("https://latein.lernen.creativecouple.de/LateinTrainer/user/login?name="+linkAdd);
    let response_text = await response.text();
    let x = "";
    let y = "";
    let z = a.find("Gesamtpunkte:") + 21;
    while (x != "<") {
        y = y + x;
        z = z + 1;
        x = a[z];
    }
    let b = "";
    x = "";
    z = a.find("em")+2
    while (x != "<") {
        b = b + x;
        z = z + 1;
        x = a[z];
    }
    let c = "";
    x = "";
    z = a.find("Streak:")+15;
    while (x != "<") {
        c = c + x;
        z = z + 1;
        x = a[z];
    }
    alert(y);
    alert(b);
    alert(c);
    //return y, b, c
}