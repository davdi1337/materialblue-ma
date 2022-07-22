if (window.location.pathname != "/felhasznalo/customcss/") {
    window.location.pathname = "/felhasznalo/customcss/"
} else {
    setBG()
}
function setBG() {
    var textarea = document.getElementsByName("custom_css")[0]
    var body = "body"
    var html = "html"
    var product = document.querySelector(".product").classList[0]
    var error = "Nem adtál meg URL-t"
    let bgValue = prompt("Írd be a képhez tartozó URL-t")
    if (!bgValue) {
        alert(error)
    } else if (bgValue.includes("http")) {
        var bgImage = bgValue
        var params = `background-image: url("${bgImage}");\nbackground-size: cover;\nbackground-position: center;\nbackground-repeat: no-repeat;`
        var values = `${body},\n${html},\n.${product}\n{\n${params}\n}`
        textarea.value = `${values}`
        document.getElementsByClassName("site-btn")[0].click()
    } else {
        alert(error)
    }
}
