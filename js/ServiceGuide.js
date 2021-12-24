

var APLLICATION_TYPE ='Web-Html';
var APLLICATION_VERSION = "1";
var APLLICATION_COPYRIGHT = "<p class='printheader'>Service Guide CS 9600 Family v1 Copyright (c) Carestream Dental 2019-2021</p>";
var PRINTHEADER = '.printheader{position:fixed;font-size:10px;top:0;background-color:rgba(33, 183, 255, 0.25);}';

LinkType = {

    DOC   : 0,
    URL   : 1,
    MEDIA : 2
}

var selectable_color = "rgba(33, 183, 255, 0.1)";
var selected_color = "rgba(33, 183, 255, 0.25)";


//CHAPTER PAGE NUMBER HERE...
var chapters_beginpg = [0, 2, 9, 14, 16, 20, 75, 76, 99, 164, 185, 193, 206, 215, 239, 251, 264, 272, 280, 297, 329, 339, 348, 356, 364, 388, 390];
var chapters_npg = [2, 7, 5, 2, 4, 55, 1, 23, 65, 21, 8, 13, 9, 24, 12, 13, 8, 8, 17, 32, 10, 9, 8, 8, 24, 2, 1];
var chapters_names = ['ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7', 'ch8', 'ch9', 'ch10', 'ch11', 'ch12', 'ch13', 'ch14', 'ch15', 'ch16', 'ch17', 'ch18', 'ch19', 'ch20', 'ch21', 'ch22', 'ch23', 'ch24', 'ch25', 'ch26', 'ch27'];


//PRODUCT NAME LIST HERE ...
var productnames = ['CS 9600', 'CS 9600 with SC'];


//ERRORCODE LINK DATA HERE ...
var errcode_link = {
};


//EDIAGRAM LINK DATA HERE ...
var ediagram_link = {
	'  COLLIMATOR DRIVER BOARD CJ934/ CJ979       ' : [[13, 0], 0, 0],
	'          X-RAY SOURCE BOARD CJ939  ' : [[11, 0], 0, 0],
	'   POWER FACTOR CORRECTION BOARD JZ036    ' : [[16, 0], 0, 0],
	' COLUMN MOTOR BOARD CJ922         ' : [[9, 0], 0, 0],
	' TOUCH SCREEN INTERFACE BOARD CJ948      ' : [[14, 0], 0, 0],
	'         ROTATIVE ARM MOTOR BOARD CJ921      ' : [[18, 0], 0, 0],
	' COLUMN MOTOR BOARD CJ922           ' : [[9, 0], 0, 0],
	'   X-RAY SOURCE BOARD CJ939         ' : [[11, 0], 0, 0],
	' J3- GbE2 J1- PoE ETHERNET SWITCH BOARD CJ898 V3  J3- GbE1 ' : [[15, 0], 0, 0],
	'CPC01' : [[8, 47], 0, 0],
	'CPC03' : [[8, 15], 0, 0],
	'CN1 GENERAL POWER SUPPLY BOARD JZ038 CN2' : [[17, 0], 0, 0],
	'CPB71' : [[8, 31], 0, 0],
	'CPB70' : [[8, 2], 0, 0],
	'CPB73' : [[8, 43], 0, 0],
	'CPB75' : [[8, 21], 0, 0],
	'CPB74' : [[8, 6], 0, 0],
	'CPB77' : [[8, 23], 0, 0],
	'CPB76' : [[8, 22], 0, 0],
	'CPB79' : [[8, 8], 0, 0],
	'CPB78' : [[8, 7], 0, 0],
	'CPC17' : [[8, 60], 0, 0],
	'CPC14' : [[8, 62], 0, 0],
	'CPC15' : [[8, 61], 0, 0],
	'SENSOR FLIP BOARD CJ972 ' : [[24, 0], 0, 0],
	'CPC13' : [[8, 58], 0, 0],
	'CPC11' : [[8, 56], 0, 0],
	'     COLLIMATOR DRIVER BOARD CJ979/CJ934 J12/Stepper motor J14/DC motor  Note for Sensor flip motor: CJ934 is for stepper motor only   ' : [[13, 0], 0, 0],
	'  MICROPROCESSOR SENSOR BOARD CJ895    ' : [[23, 0], 0, 0],
	'          ROTATIVE ARM MOTOR BOARD CJ921     ' : [[18, 0], 0, 0],
	'TUBE HEAD CJ931 TUBE HEAD BOARD CJ953' : [[13, 0], 0, 0],
	'CPB62' : [[8, 12], 0, 0],
	'CPB63' : [[8, 13], 0, 0],
	'CPB60' : [[8, 41], 0, 0],
	'CPB61' : [[8, 30], 0, 0],
	'CPB66' : [[8, 16], 0, 0],
	'CPB67' : [[8, 1], 0, 0],
	'SENSOR CONTROL BOARD CJ879    ' : [[12, 0], 0, 0],
	'CPB65' : [[8, 4], 0, 0],
	'CPB68' : [[8, 17], 0, 0],
	'CPB69' : [[8, 18], 0, 0],
	'CPB59' : [[8, 40], 0, 0],
	'CPB58' : [[8, 39], 0, 0],
	'CPB57' : [[8, 37], 0, 0],
	'CPB56' : [[8, 36], 0, 0],
	'CPB55' : [[8, 35], 0, 0],
	'CPB54' : [[8, 34], 0, 0],
	'CPB50' : [[8, 46], 0, 0],
	'CPB30' : [[8, 53], 0, 0],
	'CPB18' : [[8, 52], 0, 0],
	'TOUCH SCREEN SPCG85' : [[10, 0], 0, 0],
	'CPB87' : [[8, 5], 0, 0],
	'CAN BUS CPB77' : [[8, 23], 0, 0],
	'CPB48' : [[8, 44], 0, 0],
	'CPB49' : [[8, 45], 0, 0],
	' TOUCH SCREEN INTERFACE BOARD CJ948     ' : [[14, 0], 0, 0],
	'CPB45' : [[8, 24], 0, 0],
	'CPB46' : [[8, 25], 0, 0],
	'CPB47' : [[8, 39], 0, 0],
	'CPC12' : [[8, 57], 0, 0],
	'CPB19' : [[8, 56], 0, 0],
	' CHIN REST LED BOARD CJ951  ' : [[21, 0], 0, 0],
	'CPB17' : [[8, 51], 0, 0],
	'CPB16' : [[8, 50], 0, 0],
	'CPB15' : [[8, 54], 0, 0],
	'CPB14' : [[8, 49], 0, 0],
	'CPB90' : [[8, 29], 0, 0],
	'CPB99' : [[8, 20], 0, 0],
	'SENSOR FLIP MOTOR' : [[24, 0], 0, 0],
	'CPB88' : [[8, 33], 0, 0],
	'CPB85' : [[8, 28], 0, 0],
	'CPB86' : [[8, 32], 0, 0],
	'CPC02' : [[8, 48], 0, 0],
	'CPB80' : [[8, 26], 0, 0],
	'CPB81' : [[8, 9], 0, 0],
	'CPB83' : [[8, 10], 0, 0]
};


//EPARTS LINK DATA HERE ...
var eparts_link = {
	'SPJPE08' : [[18, 13], 0, 0],
	'SPCGP55' : [[8, 19], 0, 0],
	'SPCGK04' : ['SPCGK04_SM991_CS_8100SC_Service_CGK04_Cephalostat_Drive_Motor.pdf', 2, 1],
	'SPCGP56' : [[8, 27], 0, 0],
	'SPCGP58' : [[10, 0], 0, 0],
	'SPCGN34' : [[12, 0], 0, 0],
	'SPCGR66' : [[4, 0], 0, 0],
	'SPCGR65' : [[4, 0], 0, 0],
	'SPCPB86' : [[8, 32], 0, 0],
	'SPCGU18' : [[13, 18], 0, 0],
	'SPCGP45' : [[8, 0], 0, 0],
	'SPCGR85' : [[4, 0], 0, 0],
	'SPCGR86' : [[4, 0], 0, 0],
	'SPCPB80' : [[8, 26], 0, 0],
	'SPCJ898P' : [[15, 0], 0, 0],
	'SPCPB88' : [[8, 33], 0, 0],
	'SPCGL28' : [[4, 3], 0, 0],
	'SPCGK06' : ['SPCGK06_SM991_CS_8100SC_Service_CGGK06_Cephalostat_Resistive_Track_Assembly.pdf', 2, 1],
	'SPCGR88C' : [[13, 0], 0, 0],
	'SPCGL29' : [[4, 3], 0, 0],
	'SPCGP39' : [[14, 0], 0, 0],
	'SPCGJ47' : [[22, 0], 0, 0],
	'SPCGL97' : [[18, 0], 0, 0],
	'SPCGL96' : [[11, 0], 0, 0],
	'SPCGL15' : ['SPCGL15_SM991_CS_8100SC_Service_CGL15_Cephalostat_Sensor_Cable_Kit.pdf', 2, 1],
	'SPJZ036' : [[16, 0], 0, 0],
	'SPJZ038' : [[17, 0], 0, 0],
	'SPHRC22' : [[9, 11], 0, 0],
	'SPCGJ74' : [[23, 0], 0, 0],
	'SPCGJ79' : ['SPCGJ79_SM991_CS_8100SC_Service_CGJ79_Cephalostat_Head_Poistioning_Mechanism.pdf', 2, 1],
	'SPME165' : [[8, 34], 0, 0],
	'SPCGT32' : [[24, 0], 0, 0],
	'SPCPB61' : [[8, 30], 0, 0],
	'SPHY645' : [[4, 0], 0, 0],
	'SPHY644' : [[4, 0], 0, 0],
	'SPHY646' : [[4, 0], 0, 0],
	'SPHY649' : [[4, 0], 0, 0],
	'SPHY648' : [[4, 0], 0, 0],
	'SPHY626' : [[4, 0], 0, 0],
	'SPHY623' : [[4, 0], 0, 0],
	'SPHY622' : [[4, 0], 0, 0],
	'SPCGL98C' : [[9, 0], 0, 0],
	'SPHY555' : ['SPHY555_SM991_CS_8100SC_Service_HY555_Plastic_Cable_Guide.pdf', 2, 1],
	'SPHY629' : [[4, 0], 0, 0],
	'SPHY556' : ['SPHY556_SM991_CS_8100SC_Service_HY556_Cephalostat_Collimator_Assembly.pdf', 2, 1],
	'SPCGT29' : [[8, 56], 0, 0],
	'SPCPB71' : [[8, 31], 0, 0],
	'SPHY652' : [[4, 0], 0, 0],
	'SPHY653' : [[4, 0], 0, 0],
	'SPHY650' : [[4, 0], 0, 0],
	'SPHY651' : [[4, 0], 0, 0],
	'SPHY656' : [[4, 0], 0, 0],
	'SPHY657' : [[4, 0], 0, 0],
	'SPHY654' : [[4, 0], 0, 0],
	'SPHY655' : [[4, 0], 0, 0],
	'SPHY658' : [[4, 0], 0, 0],
	'SPHY659' : [[4, 0], 0, 0],
	'SPCGP01' : [[8, 39], 0, 0],
	'SPJPC83' : [[18, 11], 0, 0],
	'SPJPE08C' : [[9, 14], 0, 0],
	'SPJR306' : ['SPJR306_SM991_CS_8100SC_Service_JR306_Cephalostat_Nasion_Support.pdf', 2, 1],
	'SPCPB45' : [[8, 24], 0, 0],
	'SPCPB47' : [[8, 38], 0, 0],
	'SPCPB46' : [[8, 25], 0, 0],
	'SPHY604' : [[19, 0], 0, 0],
	'SPCJ943' : [[20, 0], 0, 0],
	'SPCU264' : [[13, 0], 0, 0],
	'SPCGJ8X' : ['SPCGJ8X_SM991_CS_8100SC_Service_CGJ8X_Cephalostat_Head_Clamps_Set.pdf', 2, 1],
	'SPCGM96' : [[19, 0], 0, 0],
	'SPJPB43' : ['SPJPB43_SM991_CS_8100SC_Service_JPB43_Head_Poistioning_Resistive_Track.pdf', 2, 1],
	'SPHRB29' : [[4, 0], 0, 0],
	'SPCJ903' : ['SPCJ903_SM991_CS_8100SC_Service_CJ903_Resistive_Track_Connector_Board.pdf', 2, 1],
	'SPCGP80' : [[4, 0], 0, 0],
	'SPCGP84' : [[13, 0], 0, 0],
	'SPCJ972' : [[24, 0], 0, 0],
	'SPCGN04' : [[8, 3], 0, 0],
	'SPHRC17' : [[13, 0], 0, 0]
};






var winRef;
var opentab = false;
function OpenHtmlPage(page) {
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
                SetVariable("test",false);
                 //win.moveTo(0,0);
                var win = window.open(page, page, params);}}
        else {winRef.focus();}}
    return false;}

function OpenMediaFile(data,newtab){
    var urldest = "media/"+data;
    if(newtab == true){window.open(urldest);}
     else{window.open(urldest,"_self");}}

function GoToDocumentationPage(chapter, page) {
    var chapter = JSON.stringify(chapter);
    //integer as page number of the doc
    var page = JSON.stringify(page);
    localStorage.setItem("_doc_chapter_", chapter);
    localStorage.setItem("_doc_page_", page);
    OpenHtmlPage("Documentation.html")
}

function LinkManager(data,attr,newtab){
    if(attr == LinkType.DOC){//Documentation
        GoToDocumentationPage(data[0],data[1])
    }
    if(attr == LinkType.URL){//URL destination
        //string for url
        var urldest = data;
        if(newtab == true){window.open(urldest);}
        else{window.open(urldest,"_self");}
    }
    if(attr == LinkType.MEDIA){//Media file
        //string for media relative file path of the webapp
        OpenMediaFile(data,newtab);
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

function GetThumbDir(chapter){
    return chapter+"/Thumb/";
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
        BuildEpartsProductChoice(productnames[i]);}
    $(".EPARTS_PRODUCT_LIST").slideToggle("fast");
}

function ShowDiagramProductChoice() {
    $(".SEARCH_FORM").hide();
    $(".EPARTS_PRODUCT_LIST").hide();
    $(".submenu_responsivethumb").remove();
    for (var i = 0; i < productnames.length; i++) {
        BuildDiagramProductChoice(productnames[i]);}
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


/* function CheckChromeBrowser() {
	
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
} */
function CheckChromeBrowser() {
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
            return p.toString() === "[object SafariRemoteNotification]";
        })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;
    // Chrome 1 - 79
    //var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    // Edge (based on chromium) detection
    var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;
    isChrome =
        isFirefox == false &&
        isSafari == false &&
        isOpera == false &&
        isIE == false &&
        isEdge == false &&
        isEdgeChromium == false;
    if (isChrome) {
        $(".chromebrowser").hide();
        return true;
    }
    else {
        $(".chromebrowser").show();
        return false;
    }
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
            document.getElementById("imgfscreen").src = "media/fullscreen.png";
            closeFullscreen();}
    else{
        document.getElementById("imgfscreen").src = "media/exitfullscreen.png";
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