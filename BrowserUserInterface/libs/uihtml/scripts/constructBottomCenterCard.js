var activeGroup = -1;
var newHtml = "<!DOCTYPE html><html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\"><head>"
    + "<meta charset=\"utf-8\" />"
    + "<title></title>"
    + "</head>"
    + "<body>"
    + "<div id=\"bottomCenterTopCard\"></div>"
    + "<div id=\"bottomCenterCenterCard\"></div>"
    + "<div id=\"bottomCenterBottomCard\"></div>"
    + "</body>"
    + "</html>"
function setup_bottomCenterCard() {
    var el = document.createElement('html');
    el.innerHTML = newHtml;
    $('#bottomCenterCard').empty().append(el.innerHTML);
}

function switchBottomCenterCard(group) {
    var index = -1;
    var items = subVarUntilDataBackend.bottomCenterCardItems;
    for (var ii = 0; ii < items.length; ii++) {
        if (items[ii].name === group) {
            index = ii;
            break;
        }
    }
    if (index < 0) return;
    activeGroup = index;
    var itemCounters = items[index].counters;
    var options = subVarUntilDataBackend.topRightCardItems[index].options;
    var centerDivHTML = '';
    for (var jj = 0; jj < options.length; jj++) {
        centerDivHTML += '<div class="optionsDiv">';
        centerDivHTML += '<div id="bottomHeader' + jj + '" class="bottomHeaderCenterItem">' + options[jj].name +
            '</div>';
        for (var ii = 0; ii < itemCounters.length; ii++) {
            var cOptions = itemCounters[ii].options;
            var validForOption = false;
            for (var kk = 0; kk < cOptions.length; kk++) {
                if (cOptions[kk] === options[jj].name) {
                    validForOption = true;
                    break;
                }
            }
            if (options[jj].hasOwnProperty('clicked')) {
                if (options[jj].clicked) validForOption = validForOption;
                else validForOption = false;
            }
            else validForOption = false;
            if (validForOption) {
                centerDivHTML += '<div id="bottomItem' + ii + 'coption' + jj + '" class="bottomCenterItem" onclick="selectCounter(event)" clicked="false" group="group" cindex="'+ ii +'" gindex="'+index+'">' +
                        itemCounters[ii].name + '</div>';
            }
            else {
                centerDivHTML += '<div id="blankBottomItem' + ii + '" class="blankBottomCenterItem"></div>';
            }
        }
        centerDivHTML += '</div>';
    }
    $('#bottomCenterCenterCard').empty().append(centerDivHTML);
    var optionsHeight = Math.min(Math.floor(90 / options.length),15);
    $('.optionsDiv').css('height', optionsHeight + '%');
    var optionsWidth = Math.min(Math.floor(80 / itemCounters.length), 10);
    $('.bottomCenterItem').css('width', optionsWidth + '%');
    $('.blankBottomCenterItem').css('width', optionsWidth + '%');
    for (var ii = 0; ii < itemCounters.length; ii++) {
        if (itemCounters[ii].hasOwnProperty('clicked')) {
            if (itemCounters[ii].clicked) {
                setPreviouslyClicked(ii, itemCounters[ii].clicked);
            }
        }
    }
}

function setPreviouslyClicked(index, clicked) {
    if (clicked) {
        $("[id^='bottomItem" + index + "']").css('background-color', 'green');
        $("[id^='bottomItem" + index + "']").attr('clicked', 'true');
    }
    else {
        $("[id^='bottomItem" + index + "']").attr('clicked', 'false');
    }
    var optionIds = $('.bottomHeaderCenterItem');
    for (var jj = 0; jj < optionIds.length; jj++) {
        var oId = optionIds[jj].id;
        splitId = oId.split("bottomHeader");
        var clickedOn = $("[id$='coption" + splitId[1] + "']").map(function () { return $(this).attr('clicked'); }).get();
        var allClicked = true;
        var numFalse = 0;
        for (var ii = 0; ii < clickedOn.length; ii++) {
            if (clickedOn[ii] === "false") {
                allClicked = false;
                numFalse++;
            }
        }
        if (allClicked && (clickedOn.length > 0)) $('#bottomHeader' + splitId[1]).css('background-color', 'green');
        else if (numFalse < clickedOn.length) $('#bottomHeader' + splitId[1]).css('background-color', 'yellow');
        else $('#bottomHeader' + splitId[1]).css('background-color', 'lightgrey');
    }
}