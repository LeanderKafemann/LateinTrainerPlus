async function getScores() {
    let linkAdd = getCookie("username", document.cookie) + "&code=" + getCookie("code", document.cookie);
    let response = await fetch("https://lkunited.pythonanywhere.com/ltp/getScoreData?name="+linkAdd);
    let text = await response.text();
    let text_ = text.split("#*#");
    document.getElementById("ltname__").textContent = text_[1];
    document.getElementById("ltpunkte__").textContent = text_[0];
    document.getElementById("ltstreak__").textContent = text_[2];
}