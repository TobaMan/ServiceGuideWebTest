

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

//EDIAGRAM CONTENT HERE ...
var diagram_content = [0];

//EPARTS CONTENT HERE ...
var epart_content = [];

//ERROR CODE CONTENT HERE ...
var errcode_content = 1;

//CHAPTER PAGE NUMBER HERE...
var chapters_beginpg = [0, 9, 11];
var chapters_npg = [9, 2, 2];
var chapters_names = ['ch1', 'ch2', 'ch3'];


//PRODUCT NAME LIST HERE ...
var productnames = ['8100'];


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




var winRef;
var opentab = false;
var iframe = true;
function OpenHtmlPage(page) {
    if(iframe == true){
        SendCustomEventFromIframe('mframe_goto_'+page);
        return false;
    }
    if (opentab == false) {
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
    var urldest = data;
    if(iframe == true){
        sessionStorage.setItem("_media_src_", urldest);
        SendCustomEventFromIframe("media_src");
        return false;}
    if(newtab == true){window.open(urldest);}
    else{window.open(urldest,"_self");}}

function OpenMedia(data,newtab){
    var urldest = "media/"+data;
    OpenURL(urldest, newtab);}

function GoToDocumentationPage(chapter, page) {
    var chapter = JSON.stringify(chapter);
    //integer as page number of the doc
    var page = JSON.stringify(page);
    sessionStorage.setItem("_doc_chapter_", chapter);
    sessionStorage.setItem("_doc_page_", page);
    OpenHtmlPage("Documentation.html");
}

function LinkManager(data,attr,newtab){
    if(attr == LinkType.DOC){//Documentation
        GoToDocumentationPage(data[0],data[1])
    }
    if(attr == LinkType.URL){//URL destination
        //string for url
        // var urldest = data;
        // if(newtab == true){window.open(urldest);}
        // else{window.open(urldest,"_self");}
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
    return diagram_content.includes(1);
}

function HasEparts(){
    return epart_content.includes(1);
}

function HasErrorCode(){
    return errcode_content != 0;
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
    if(HasErrorCode()){
        $(".ERRORCODE").css('opacity', '0.15');
        $(".ERRORCODE").css('pointer-events', 'none');
    }
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
    $(".SEARCH_FORM").hide();
    $(".DIAGRAM_PRODUCT_LIST").hide();
    $(".submenu_responsivethumb").remove();
    for (var i = 0; i < productnames.length; i++) {
        if(epart_content[i]){
            BuildEpartsProductChoice(productnames[i]);}}
    $(".EPARTS_PRODUCT_LIST").slideToggle("fast");
}

function ShowDiagramProductChoice() {
    $(".SEARCH_FORM").hide();
    $(".EPARTS_PRODUCT_LIST").hide();
    $(".submenu_responsivethumb").remove();
    for (var i = 0; i < productnames.length; i++) {
        if(diagram_content[i]){
            BuildDiagramProductChoice(productnames[i]);}}
    $(".DIAGRAM_PRODUCT_LIST").slideToggle("fast");
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