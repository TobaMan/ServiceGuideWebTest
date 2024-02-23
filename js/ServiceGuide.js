

var APLLICATION_TYPE ='Web-Html';
var APLLICATION_VERSION = "1";
var APLLICATION_COPYRIGHT = "<p class='printheader'>Service Guide MyProduct v1 Copyright (c) Carestream Dental 2019-2024</p>";
var PRINTHEADER = '.printheader{position:fixed;font-size:10px;top:0;background-color:rgba(33, 183, 255, 0.25);}';

LinkType = {

    DOC   : 0,
    URL   : 1,
    MEDIA : 2
}

var selectable_color = "rgba(33, 183, 255, 0.1)";
var selected_color = "rgba(33, 183, 255, 0.25)";

//LOGOLINK HERE ...
var logolink = "https://infotec.carestreamdental.com/";

//EDIAGRAM CONTENT HERE ...
var diagram_content = [0, 0];

//EPARTS CONTENT HERE ...
var epart_content = [];

//ERROR CODE CONTENT HERE ...
var errcode_content = 1;

//CHAPTER PAGE NUMBER HERE...
var chapters_beginpg = [0, 9, 11];
var chapters_npg = [9, 2, 2];
var chapters_names = ['ch1', 'ch2', 'ch3'];


//PRODUCT NAME LIST HERE ...
var productnames = ['8100', '8200'];


//ERRORCODE LINK DATA HERE ...
var errcode_link = {
};


//EDIAGRAM LINK DATA HERE ...
var ediagram_link = {
};


//EPARTS LINK DATA HERE ...
var eparts_link = {
};


//DOCUMENTATION BOOKMARKS HERE ...
var documentation_bookmarks = {
	'Notice' : [1, 0],
	'Test' : [2, 0],
	'MyLink' : [2, 1]
};


//MEDIABOX SETTINGS HERE ...
var mediabox_settings = {
	'size' : 3,
	'position' : 4,
	'behaviour' : 1
};


//PAGE URLS HERE ...
var page_urls = {
	'ediag' : 'media/GRN-0142_SPCGH13_Temple_support_motor_assembly_Rev_1.pdf',
	'epart' : 'https://testinfotec.carestreamdental.com/pub/ressourcestesting.php',
	'ecode' : 'https://eparts.carestreamdental.com/eParts/app?__bk_&__windowid=NDR74644680&__rid=HGX1707171223339#2VF2D59BB6A19D241BF39AB8ED9782EC2676FB7D71DEA3F1B037E8A2D71F8FA91E9E70B726A9C8E312AFE49D7762A6E60476BEBC713FA7FB2B155EB5CCD51A90D291C6798FCFE55699A76410CDE3B0446A5B504D3A8DCABCDD013D9914710A3BBCEC16B9477F538F011A91C9AA4E9AFEE346D2AB2727781C74481117D634D964C54A6F846E70DF1AB3A834077668352970B6355BE0B60D9EEDCBA72043D96AEA4FEC16B9477F538F011A91C9AA4E9AFEE3ED6C4064E85EE100C6ADCC59C9A025FDA834077668352970B6355BE0B60D9EED39CCEDC3EBAD804540FD0D31E517DED42703170CB95ABF211BD54D639AEA00B88BC802E2D3052B71156597039B4BD0DB1542FBA8BB471B582ECDA541E3E5513E33C3E3A1ED6B37C4CF4D68FE111B8393DBED54543E0F3DE13347F25646983F569ED4AAB8CED539D2BF045C62DC34A601013D9914710A3BBCF40817032D7C182BB980299C679222919493D0E05AB33A20FCBC6827F28BBE2FD0CA41A556AA8F9FBFB36F4A657F20A0ADC947249EC0430DF47FA1D0F67C5F4740FD0D31E517DED4D161239C4F766D2711E3BB35041F1DDA7CF0863DB9386F60C63C3CE8C0286522903EE875B85E9EB6AA4F1B4F6B97B93DC5E6E02C088D0027AFC26BF389B92A96'
};


//PAGE ANIMATION HERE ...
var page_animation = {
	'home' : 11,
	'doc' : 15,
	'stext' : 15,
	'ediag' : 15,
	'epart' : 15,
	'ecode' : 15,
	'url' : 14
};



var winRef;
var opentab = false;
var iframe = true;

function OpenNavigatorHtmlPage(page, tab){
    if (tab == false) {
        window.open(page, "_self");}
    else {
        var params = [
            'height=' + screen.height,
            'width=' + screen.width
        ].join(',');
        if (typeof(winRef) == 'undefined' || winRef.closed) {
            var winref = window.open("", page);
            if (winRef == null) {
                var win = window.open(page, page, params);}}
        else {winRef.focus();}}
}

function OpenHtmlPage(page) {
    if(iframe == true){
        SendCustomEventFromIframe('mframe_goto_'+page);}
    else{OpenNavigatorHtmlPage(page, opentab);}
    return false;}

function SendCustomEventToIframe(id, msgevent){
    document.getElementById(id).contentWindow.postMessage(msgevent);
}

function SendCustomEventFromIframe(msgevent){
    window.top.postMessage(msgevent, '*');
}

function ReceiveCustomEvent(msgevent, runfunc){
    window.onmessage = function (event) {
        if (event.data == msgevent) {
            runfunc();}  };
}

function OpenURL(data,newtab){
    sessionStorage.setItem("_url_src_", data);
    SendCustomEventFromIframe("url_src");}

function OpenMedia(data,newtab){
    var urldest = "media/"+data;
    OpenURL(urldest, newtab);}

function SaveDocChapterPage(chapter, page){
    var chapter = JSON.stringify(chapter);
    var page = JSON.stringify(page);
    sessionStorage.setItem("_doc_chapter_", chapter);
    sessionStorage.setItem("_doc_page_", page);
}

function GoToDocumentationPage(chapter, page) {
    SaveDocChapterPage(chapter, page);
    OpenHtmlPage("Documentation.html");
}

function LinkManager(data,attr,newtab){
    if(attr == LinkType.DOC){//Documentation
        GoToDocumentationPage(data[0],data[1])
    }
    if(attr == LinkType.URL){//URL destination
        //string for url
        OpenURL(data,newtab);
    }
    if(attr == LinkType.MEDIA){//Media file
        //string for media relative file path of the webapp
        OpenMedia(data,newtab);
    }
}

function GoToLink(link){
    var data = link[0];
    var attr = link[1];
    var ntab = link[2];
    LinkManager(data, attr, ntab);
}

function ErrorCodeLink(id) {
     if(id in errcode_link){
        GoToLink(errcode_link[id]);}
    return true;
}

function EPartsLink(id) {
    if(id in eparts_link){
        GoToLink(eparts_link[id]);}
    return true;
}

function EDiagramLink(id) {
    if(id in ediagram_link){
        GoToLink(ediagram_link[id]);}
    return true;
}

function OpenPreview(){
    SendCustomEventFromIframe("_open_preview_");
}

function GetThumbDir(chapter){
    return chapter+"/Thumb/";
}

function HasElectricalDiagram(){
    return diagram_content.includes(1) || page_urls['ediag'];
}

function HasEparts(){
    return epart_content.includes(1) || page_urls['epart'];
}

function HasErrorCode(){
    return (errcode_content == 1) || page_urls['ecode'];
}

function HasElectricalDiagramPage(){
    return diagram_content.includes(1) && !page_urls['ediag'];
}

function HasEpartsPage(){
    return epart_content.includes(1) && !page_urls['epart'];
}

function HasErrorCodePage(){
    return (errcode_content == 1) && !page_urls['ecode'];
}

function ePartsProductList(){
    var prodlist = [];
    for (var i = 0; i < productnames.length; i++) {
        if(epart_content[i]){
            prodlist.push(productnames[i]);}}
    return prodlist;
}

function ElectricalDiagramProductList(){
    var prodlist = [];
    for (var i = 0; i < productnames.length; i++) {
        if(diagram_content[i]){
            prodlist.push(productnames[i]);}}
    return prodlist;
}

function DiagramsActivity(){
    if(!HasElectricalDiagram()){
        $(".ELECDIAGRAM").css('opacity', '0.15');
        $(".ELECDIAGRAM").css('pointer-events', 'none');
    }
}

function EpartsActivity(){
    if(!HasEparts()){
        $(".EPARTS").css('opacity', '0.15');
        $(".EPARTS").css('pointer-events', 'none');
    }
}

function ErrCodeActivity(){
    if(!HasErrorCode()){
        $(".ERRORCODE").css('opacity', '0.15');
        $(".ERRORCODE").css('pointer-events', 'none');
    }
}

function SetTabButtonURLStatus(){
    var url = page_urls["ecode"];
    if(url){$(".ERRORCODE .icon").attr(
        "src", "media/errorcode_link.png");}
    var url = page_urls["ediag"];
    if(url){$(".ELECDIAGRAM .icon").attr(
        "src", "media/electricaldiagram_link.png");}
    var url = page_urls["epart"];
    if(url){$(".EPARTS .icon").attr(
        "src", "media/part_link.png");}
}

function BuildEpartsProductChoice(product) {
    var link = 'OpenHtmlPage("eParts_' + product + '.html")';
    var thumb = "<div class='submenu_responsivethumb'>";
    thumb += "<div class='submenu_gallery uistyle2' id=resp" + product + ">";
    thumb += "<div class='submenu_containerthumb'>";
    //thumb += "<a href='eParts_" + product + ".html'>";
    thumb += "<a onclick='"+link+"'>";
    thumb += "<img class='submenu_thumb' id=" + product + " src='media/prdpreview_" + product + ".png'/>";
    thumb += "<div class='submenu_desc' id=desc" + product + ">";
    thumb += "<div class='submenu_textthumb'  >" + product + "</div>";
    thumb += "</a></div></div></div></div>"
    $(".EPARTS_PRODUCT_LIST").append(thumb);
}

function BuildDiagramProductChoice(product) {
    var link = 'OpenHtmlPage("ElectricalDiagram_' + product + '.html")';
    var thumb = "<div class='submenu_responsivethumb'>";
    thumb += "<div class='submenu_gallery uistyle2' id=resp" + product + ">";
    thumb += "<div class='submenu_containerthumb'>";
    //thumb += "<a href='ElectricalDiagram_" + product + ".html'>";
    thumb += "<a onclick='"+link+"'>";
    thumb += "<img class='submenu_thumb' id=" + product + " src='media/" + product + "_electrical0.png'/>";
    thumb += "<div class='submenu_desc' id=desc" + product + ">";
    thumb += "<div class='submenu_textthumb'  >" + product + "</div>";
    thumb += "</a></div></div></div></div>"
    $(".DIAGRAM_PRODUCT_LIST").append(thumb);
}

function ShowEpartsProductChoice() {
    var url = page_urls["epart"];
    if(url){OpenURL(url, true);}
    else{
        $(".SEARCH_FORM").hide();
        $(".DIAGRAM_PRODUCT_LIST").hide();
        $(".submenu_responsivethumb").remove();
        for (var i = 0; i < productnames.length; i++) {
            if(epart_content[i]){
                BuildEpartsProductChoice(productnames[i]);}}
        $(".EPARTS_PRODUCT_LIST").slideToggle("fast");
    }
}

function ShowDiagramProductChoice() {
    var url = page_urls["ediag"];
    if(url){OpenURL(url, true);}
    else{
        $(".SEARCH_FORM").hide();
        $(".EPARTS_PRODUCT_LIST").hide();
        $(".submenu_responsivethumb").remove();
        for (var i = 0; i < productnames.length; i++) {
            if(diagram_content[i]){
                BuildDiagramProductChoice(productnames[i]);}}
        $(".DIAGRAM_PRODUCT_LIST").slideToggle("fast");
    }
}

function ShowSearchForm() {
    $(".EPARTS_PRODUCT_LIST").hide();
    $(".DIAGRAM_PRODUCT_LIST").hide();
    if(IsIOS()){
        $('.submenu_search').css({
            "position":"static",
            "border":"none"});
        if(IsVisible(".SEARCH_FORM")) {
            $(".SEARCH_FORM").fadeToggle("fast", function () {
                $(".tab").css({"margin-top": "0px"});
                $(".PRESENTATION").animate({opacity: "1"}, "fast");
                $(".DOCUMENTATION").animate({opacity: "1"}, "fast");
                $(".TEXTIMAGE").animate({opacity: "1"}, "fast");
                $(".ELECDIAGRAM").animate({opacity: "1"}, "fast");
                $(".EPARTS").animate({opacity: "1"}, "fast");
                $(".ERRORCODE").animate({opacity: "1"}, "fast");});}
        else{
            var height = $(".SEARCH_FORM").height()/1.5;
            $(".tab").css({"margin-top":"-"+height+"px"});
            $(".PRESENTATION").animate({opacity: "0"}, "fast");
            $(".DOCUMENTATION").animate({opacity: "0"}, "fast");
            $(".TEXTIMAGE").animate({opacity: "0"}, "fast");
            $(".ELECDIAGRAM").animate({opacity: "0"}, "fast");
            $(".EPARTS").animate({opacity: "0"}, "fast");
            $(".ERRORCODE").animate({opacity: "0"}, "fast",function(){
                $(".SEARCH_FORM").fadeToggle("fast");});}}
    else{$(".SEARCH_FORM").slideToggle("fast");}
}

$(window).click(function() {
    HideAllToolTip();
});

function InstallToolTip(orient, id, message) {
    if (IsOnMobile()) {
        $('.' + id).mouseover(function () {
            $.notiny({singleton:true, clickhide: false, text: message, position: 'fluid-bottom'});
        });
    }
    else {
        $('.' + id).darkTooltip({
            content: message,
            animation: 'fadeIn',
            gravity: orient,
            size: "large",
            theme: 'uistyle2'});}
}

function HideAllToolTip(){
    $(".dark-tooltip").hide();
}

function RemoveAllToolTip(){
    $(".dark-tooltip").remove();
}

function RemoveToolTipId(id){
    $("#darktooltip-"+id).remove();
}

$(document).ready(function() {

    InstallToolTip("west",'ZOOMIN', "Zoom inside the document ...");
    InstallToolTip("west",'ZOOMOUT', "Zoom outside the document ...");
    InstallToolTip("west",'RESET', "Return to the initial view ...");
    InstallToolTip("west",'MODALITY', "Switch between all modalities ...");

    InstallToolTip("north",'PRESENTATION', "Return to the first page ...");
    InstallToolTip("north",'PREVIEW', "Show all tabs as grid view ...");
    InstallToolTip("north",'DOCUMENTATION', "Documentation content ...");
    InstallToolTip("north",'DIAGRAM_PRODUCT_LIST', "Search by electrical diagram ...");
    InstallToolTip("north",'ERRORCODE', "Search by error code ...");
    InstallToolTip("north",'EPARTS_PRODUCT_LIST', "Search by product part ...");
    InstallToolTip("north",'TEXTIMAGE', "Search by text/image ...");

    InstallToolTip("east",'preview', "Return to the product page ...");

    InstallToolTip("west",'LOCALIZATION', "Localization ...");
    InstallToolTip("west",'TROUBLESHOOTING', "Troubleshooting ...");
    InstallToolTip("west",'REPLACEMENT', "Replacement ...");
    InstallToolTip("west",'DEPENDENCIES', "Dependencies ...");
    InstallToolTip("west",'FUNCTIONS', "Functions ...");

    InstallToolTip("west",'NEXTLOC', "Last/Next visited page ...");

    InstallToolTip("west",'LASTPAGE', "Last documentation page ...");
    InstallToolTip("west",'NEXTPAGE', "Next documentation page ...");

    InstallToolTip("north",'SEARCH', "Search ...");
    InstallToolTip("north",'PRINT', "Print ...");
    InstallToolTip("north",'FEEDBACK', "Feedback ...");
    InstallToolTip("north",'FULLSCREEN', "Fullscreen ...");

    DiagramsActivity();
    EpartsActivity();
    ErrCodeActivity();

});

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

function SetVariable(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

function GetVariable(name) {
    return JSON.parse(localStorage.getItem(name));
}

function ReloadPage(pagename){
    localStorage.removeItem(pagename);
    location.reload();
}

function SavePage(pagename){
    HideAllToolTip();
    var htmlContents = document.documentElement.innerHTML;
    localStorage.setItem(pagename, JSON.stringify(htmlContents ));
}

function RestorePage(pagename) {
    var pagestate = localStorage.getItem(pagename);
    if (pagestate !== null) {
        document.documentElement.innerHTML = JSON.parse(pagestate);
        return true;}
    return false;
}

function IsVisible(item){
    return $(item).is(":visible");
}

function Blurring(item,size){
    $(item).css({'-webkit-filter': 'blur('+size+'px)'});
}

//touch/mobile detection
function IsOnMobile() {
    return typeof window.orientation !== 'undefined';}


function GetTouchScreenOrientation() {
    if (window.innerHeight > window.innerWidth) {
        return "portrait";}
    if (window.innerWidth > window.innerHeight) {
        return "landscape";}
}
function IsLandscape() {
    if (GetTouchScreenOrientation() == "landscape") {
        return true;}
    else {return false;}
}
function IsPortrait() {
    if (GetTouchScreenOrientation() == "portrait") {
        return true;}
    else {return false;}
}

function DocPreviewHeight(){
    if(IsVisible(".thumbnail")){
        if(IsVisible(".navbar") || IsVisible(".sidebar")) {
            $(".thumbnail").css({'top': ''});
             $(".thumbnail").css({'height': ''});}
        else{
            $(".thumbnail").css({'top': '0'});
            $(".thumbnail").css({'height': '100%'});}}
}

function ShowNavBar(){
    $(".navbar").slideToggle(200,function(){
        DocPreviewHeight();
    });
}

function ShowSideBar() {
    $(".sidebar").slideToggle(200,function(){
        DocPreviewHeight();
    });
}

function ShowDocPreview(){
    $(".thumbnail").slideToggle(200,function(){
        DocPreviewHeight();
    });
}

function ShowLegend(){
    $(".eleclegend").slideToggle(200);
}

function CheckChromeBrowser() {
	
	var browserName = (function (agent) {
        switch (true) {
            case agent.indexOf("edge") > -1: return false; //"MS Edge"; 
            case agent.indexOf("edg/") > -1: return true; //"Edge ( chromium based)";
            case agent.indexOf("opr") > -1 && !!window.opr: return false;//"Opera";
            case agent.indexOf("chrome") > -1 && !!window.chrome: return true;//"Chrome";
            case agent.indexOf("trident") > -1: return false;//"MS IE";
            case agent.indexOf("firefox") > -1: return false;//"Mozilla Firefox";
            case agent.indexOf("safari") > -1: return false;//"Safari";
            default: return "other";
        }
    })(window.navigator.userAgent.toLowerCase());
	
	if (browserName == true) {
		$(".chromebrowser").hide();
		return true;
	}
	else{
		$(".chromebrowser").show();
		return false;
	}
}

function SendFullScreen(){
    SendCustomEventFromIframe("_fullscreen_");
}

function FullScreen() {
    /* Get the documentElement (<html>) to display the page in fullscreen */
    //var elem = document.getElementById("page-container");
    var elem = document.getElementsByTagName("html")[0];
    /* View in fullscreen */
    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();}}
    /* Close fullscreen */
    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();}}
    if ((window.fullScreen) ||
        (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
            // document.getElementById("imgfscreen").src = "media/fullscreen.png";
            closeFullscreen();}
    else{
        // document.getElementById("imgfscreen").src = "media/exitfullscreen.png";
        openFullscreen();
    }
}

function IsIOS() {
  var iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod',
    'MacIntel'
  ];
  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()){ return true; }}}
  return false;
}

$(document).ready(function () {

    SetTabButtonURLStatus();

})
