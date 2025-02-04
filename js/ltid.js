function changeLTID() {
    let oldid = getCookie("ltid", document.cookie);
    let oldbook = getCookie("ltbook", document.cookie);
    let newid = prompt("LateinTrainerID eingeben:", oldid);
    let newbook = prompt("Buch eingeben (CURSUS oder PRIMA):", oldbook);
    if (newbook != "CURSUS") {
        if (newbook != "PRIMA") {
            alert("Invalides Buch!");
            newbook = prompt("Buch eingeben (CURSUS oder PRIMA):", oldbook);
        }
    }
    changeLTIDBackground(newid, newbook);
    document.getElementById("lttext__").textContent = "Einige Daten konnten eventuell noch nicht aktualisiert werden...";
    document.getElementById("ltid__").textContent = newid;
    document.getElementById("ltbook__").textContent = newbook;
}

async function changeLTIDBackground(newid, newbook) {
    let linkAdd = getCookie("username", document.cookie)+"&code="+getCookie("code", document.cookie)+"&newid="+newid+"&newbook="+newbook;
    let response = await fetch("https://lkunited.pythonanywhere.com/ltp/setConnectedID?name="+linkadd);
    let text = await response.text();
    alert("Änderung von Server beantwortet mit:"+text);
}

async function getLTID() {
    let response = await fetch("https://lkunited.pythonanywhere.com/ltp/getConnectedID?name="+getCookie("username", document.cookie)+"&code="+getCookie("code", document.cookie));
    let text = await response.text();
    if (text != "Authentification failed") {
        document.getElementById("ltid__").textContent = text.split("#*#")[0];
        document.getElementById("ltbook__").textContent = text.split("#*#")[1];
        setCookie("ltid", text.split("#*#")[0], 7);
        setCookie("ltbook", text.split("#*#")[1], 7);
    } else {
        alert("Authentifizierung gescheitert!");
        document.getElementById("lttext__").textContent = "Fehler beim Abrufen";
    }
}