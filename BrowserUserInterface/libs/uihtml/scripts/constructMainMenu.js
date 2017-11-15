function setup_mainMenu() {
    var newHtml = "<!DOCTYPE html>"
    + "<html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\">"
    + "<head>"
    + "    <meta charset=\"utf-8\" />"
    + "</head>"
    + "<body>"
     + "   <span onclick=\"loadConfigBase()\">Load Base Config</span>"
    + "    <span onclick=\"loadConfigBase1()\">Load Alternate Config</span>"
    + "    <span onclick=\"saveCurrentSelections()\">Save Current Selections</span>"
    + "    <span onclick=\"loadSavedSelections()\">Load Saved Selections</span>"
    + "</body>"
    + "</html>"

    var el = document.createElement('html');
    el.innerHTML = newHtml;
    $('#mainMenu').empty().append(el.innerHTML);

}