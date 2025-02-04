function changeLTID() {
    let oldid = getCookie("ltid", document.cookie);
    let newid = prompt("LateinTrainerID eingeben:", oldid);
    changeLTIDBackground(newid);
    document.getElementById("lttext__").textContent = "Einige Daten konnten eventuell noch nicht aktualisiert werden...";
    document.getElementById("lttext__").textContent = newid;
}

async function changeLTIDBackground(newid) {
    let response = await fetch("https://lkunited.pythonanywhere.com/ltp/setConnectedID?name="+getCookie("username", document.cookie)+"&code="+getCookie("code", document.cookie)+"&newid="+newid);
    alert("Änderung von Server beantwortet mit:"+response.text());
}

async function getLTID() {
    let response = await fetch("https://lkunited.pythonanywhere.com/ltp/getConnectedID?name="+getCookie("username", document.cookie)+"&code="+getCookie("code", document.cookie));
    let text = response.text()
    if (text != "Authentification failed") {
        document.getElementById("ltid__").textContent = text;
        setCookie("ltid", text, 7);
    } else {
        alert("Authentifizierung gescheitert!");
        document.getElementById("lttext__").textContent = "Fehler beim Abrufen";
    }
}