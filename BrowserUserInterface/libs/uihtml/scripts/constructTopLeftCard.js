function setup_topLeftCard() {
    var newHtml = "<!DOCTYPE html>"
    + "<html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\">"
    + "<head>"
    + "    <meta charset=\"utf-8\" />"
    + "    <title></title>"
    + "</head>"
    + "<body>"
    + "    <div id=\"topLeftC1\">C1</div>"
    + "    <div id=\"topLeftC2\">C2</div>"
    + "    <div id=\"topLeftC34\">"
    + "        <div id=\"topLeftC3\">C3</div>"
    + "        <div id=\"topLeftC4\">C4</div>"
    + "    </div>"
    + "    <div id=\"topLeftC5\">C5</div>"
    + "</body>"
    + "</html>"
    var el = document.createElement('html');
    el.innerHTML = newHtml;
    $('#topLeftCard').empty().append(el.innerHTML);

}
