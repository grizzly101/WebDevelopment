// JavaScript source code
mkYellow = '#d8b72d';

mkLightGray = '#b5b4b4';

loadConfigBase();

function loadConfigBase() {
    var url = "./getConfiguration1.json";
    loadConfig(url);
}

function loadConfigBase1() {
    var url = "./getConfiguration.json";
    loadConfig(url);
}

function loadSavedSelections() {
    var url = "../loadSavedFile";
    loadConfig(url);
}

function loadConfig(url) {

    setup();
}

function setup() {

    setup_mainMenu();
    setup_topRightCard();
    setup_topLeftCard();
    setup_bottomCenterCard();
}

function fireSelection(ev) {
    id = ev.target.getAttribute("id");
    $('.tableItemHeader').css('background-color', 'grey');
    $('#' + id).css('background-color', 'green');
    switchBottomCenterCard(ev.target.getAttribute("value"));
}

function selectCounter(ev) {
    id = ev.target.getAttribute("id");
    var splitId = id.split("option");
    clicked = ev.target.getAttribute("clicked");
    var gindex = ev.target.getAttribute("gindex");
    var cindex = ev.target.getAttribute("cindex");
    if (clicked === "true") {
        subVarUntilDataBackend.bottomCenterCardItems[gindex].counters[cindex].clicked = false;
        $("[id^='"+splitId[0]+"']").css('background-color', 'lightgrey');
        $("[id^='"+splitId[0]+"']").attr('clicked', 'false');
    }
    else {
        subVarUntilDataBackend.bottomCenterCardItems[gindex].counters[cindex].clicked = true;
        $("[id^='"+splitId[0]+"']").css('background-color', 'green');
        $("[id^='" + splitId[0] + "']").attr('clicked', 'true');
    }
    var options = subVarUntilDataBackend.topRightCardItems[gindex].options;
    var optionIds = $('.bottomHeaderCenterItem');
    for (var jj = 0; jj < optionIds.length; jj++) {
        var oId = optionIds[jj].id;
        splitId = oId.split("bottomHeader");
        var clickedOn = $("[id$='coption" + splitId[1] + "']").map(function () { return $(this).attr('clicked'); }).get();
        var allClicked = false;
        if (options[jj].hasOwnProperty('clicked')) {
            if (options[jj].clicked) allClicked = true;
        }
        
        var numFalse = 0;
        for (var ii = 0; ii < clickedOn.length; ii++) {
            if (clickedOn[ii] === "false") {
                allClicked = false;
                numFalse++;
            }
        }
        if (allClicked) $('#bottomHeader' + splitId[1]).css('background-color', 'green');
        else if (numFalse < clickedOn.length) $('#bottomHeader' + splitId[1]).css('background-color', 'yellow');
        else $('#bottomHeader' + splitId[1]).css('background-color', 'lightgrey');
    }
}

function tableItemClick(ev) {
    id = ev.target.getAttribute("id");
    clicked = ev.target.getAttribute("clicked");
    var gindex = ev.target.getAttribute("gindex");
    var oindex = ev.target.getAttribute("oindex");
    if (clicked === "true") {
        subVarUntilDataBackend.topRightCardItems[gindex].options[oindex].clicked = false;
        $('#'+id).css('background-color', 'lightgrey');
        $('#' + id).attr('clicked', 'false');
    }
    else {
        subVarUntilDataBackend.topRightCardItems[gindex].options[oindex].clicked = true;
        $('#' + id).css('background-color', 'red');
        $('#' + id).attr('clicked', 'true');
    }
    if (parseInt(gindex) === activeGroup) switchBottomCenterCard(subVarUntilDataBackend.topRightCardItems[gindex].name);
}

function displayMenu() {
    $('#mainMenu').toggleClass("showMenu");
}

function saveCurrentSelections(){
    var xhr = new XMLHttpRequest();
    var saveUrl = "../saveFile";
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            window.alert("Saved Successfully");
        }
    }
    xhr.open('POST', saveUrl, true);		//send query to server
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(subVarUntilDataBackend));
}

