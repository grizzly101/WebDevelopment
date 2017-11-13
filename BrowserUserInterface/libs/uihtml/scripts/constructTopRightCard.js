function setup_topRightCard() {
    var newHtml = "<!DOCTYPE html>"
    + "<html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\">"
    + "<head>"
    + "    <meta charset=\"utf-8\" />"
    + "    <title></title>"
    + "</head>"
    + "<body>"
    + "    <div id=\"controlItems\">"
    + "        <ul id=\"topRightCardControl\">"
    + "            <li class=\"cardControlItem\"><input type=\"button\" name=\"load\" class=\"noToggleButton\""
    + "                                               id=\"topRightCardLoadButton\" value=\"Load Data\"/></li>"
    + "            <li class=\"cardControlItem\"><input type=\"button\" name=\"save\" class=\"noToggleButton\""
    + "                                               id=\"topRightCardSaveButton\" value=\"Save Data\"/></li>"
    + "            <li class=\"cardControlItem\"><input type=\"text\" name=\"texttext\" class=\"inputText\""
    + "                                               id=\"topRightTextData\" placeholder=\"Some name\"/></li>"
    + "        </ul>"
    + "    </div>"
    + "    <div id=\"tableItems\">"
    + "    </div>"
    + "</body>"
    + "</html>"
    var el = document.createElement('html');
    el.innerHTML = newHtml;
    $('#topRightCard').empty().append(el.innerHTML);
    //add color to objects
    $('.noToggleButton').css('background-color', mkYellow);
    $('.lightGrayObject').css('background-color', mkLightGray);
    createTable();
    setTableColors();

}

function createTable() {
    var tableItemsHtml = '';
    var tableItemsArray = [];

    var maxOptions = 0;
    for (var ii = 0; ii < subVarUntilDataBackend.topRightCardItems.length; ii++) {
        if (maxOptions < subVarUntilDataBackend.topRightCardItems[ii].options.length) {
            maxOptions = subVarUntilDataBackend.topRightCardItems[ii].options.length;
        }
    }

    for (var ii = 0; ii < subVarUntilDataBackend.topRightCardItems.length; ii++) {
        tableItemsArray[ii] = new topRightCardItem(subVarUntilDataBackend.topRightCardItems[ii], ii, maxOptions)
        tableItemsHtml += tableItemsArray[ii].constructItemHtml();
    }

    $('#tableItems').append(tableItemsHtml)
    var tableItemsDivWidth = Math.floor(100 / subVarUntilDataBackend.topRightCardItems.length);
    $('.tableItemsDiv').css('width', tableItemsDivWidth + '%');
    var tableItemHeight = Math.floor(100 / (maxOptions + 1));
    $('.tableItem').css('height', tableItemHeight + '%');
}

function topRightCardItem(tableItemObject, id, maxOptions) {
    //properties
    this.object = tableItemObject;
    this.id = id;
    this.maxOptions = maxOptions;
    //methods
    this.constructItemHtml = function () {

        tableItemHtml = '<div class="tableItemsDiv">';
        tableItemHtml += '<ul class=topRightTableItem>';
        tableItemHtml += '<li class=tableItem><div id="tableItemHeader' + this.object.name +
            '" name=test class="tableItemHeader" onclick="fireSelection(event)" value="'+ this.object.name +
            '">' + this.object.name +
            '</div></li>';
        var optionArray = this.object.options;
        for (var ii = 0; ii < optionArray.length; ii++) {
            tableItemHtml += '<li class=tableItem clicked="false" id="tableItem' + this.object.name + ii +
                '" onclick="tableItemClick(event)" oindex="' + ii + '" gindex="' + this.id + '">' + optionArray[ii].name +
            '</li>';
        }
        for (var ii = 0; ii < (this.maxOptions - optionArray.length) ; ii++) {
            tableItemHtml += '<li class=tableItem id="emptyTableItem' + this.object.name + ii + '"></li>';
        }
        tableItemHtml += '</ul></div>';
        return tableItemHtml;
    }
}

function setTableColors() {
    for (var ii=0; ii < subVarUntilDataBackend.topRightCardItems.length; ii++){
        var options = subVarUntilDataBackend.topRightCardItems[ii].options;
        for (var jj = 0; jj < options.length; jj++) {
            if (options[jj].hasOwnProperty('clicked')) {
                if (options[jj].clicked) {
                    var id = 'tableItem' + subVarUntilDataBackend.topRightCardItems[ii].name + jj;
                    $('#' + id).css('background-color', 'red');
                    $('#' + id).attr('clicked', 'true');
                }
            }
        }
    }
}
