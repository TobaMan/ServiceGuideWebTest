

var APLLICATION_TYPE ='Web-Html';
var APLLICATION_VERSION = "2";
var APLLICATION_COPYRIGHT = "<p class='printheader'>Service Guide CS 8x00 Family v2 Copyright (c) Carestream Dental 2019-2022</p>";
var PRINTHEADER = '.printheader{position:fixed;font-size:10px;top:0;background-color:rgba(33, 183, 255, 0.25);}';

LinkType = {

    DOC   : 0,
    URL   : 1,
    MEDIA : 2
}

var selectable_color = "rgba(33, 183, 255, 0.1)";
var selected_color = "rgba(33, 183, 255, 0.25)";

//EDIAGRAM CONTENT HERE ...
var diagram_content = [1, 1, 1, 1, 1, 1];

//EPARTS CONTENT HERE ...
var epart_content = [1, 1, 1, 1, 1, 1];

//ERROR CODE CONTENT HERE ...
var errcode_content = 1;

//CHAPTER PAGE NUMBER HERE...
var chapters_beginpg = [0, 2, 9, 56, 60, 74, 83, 90, 102, 111, 118, 125, 132, 143, 154, 163, 168, 175, 184, 211, 212, 228];
var chapters_npg = [2, 7, 47, 4, 14, 9, 7, 12, 9, 7, 7, 7, 11, 11, 9, 5, 7, 9, 27, 1, 16, 1];
var chapters_names = ['ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7', 'ch8', 'ch9', 'ch10', 'ch11', 'ch12', 'ch13', 'ch14', 'ch15', 'ch16', 'ch17', 'ch18', 'ch19', 'ch20', 'ch21', 'ch22'];


//PRODUCT NAME LIST HERE ...
var productnames = ['CS 8100', 'CS 8100 3D', 'CS 8100SC', 'CS 8100SC 3D', 'CS 8200 3D', 'CS 8200 3D with SC'];


//ERRORCODE LINK DATA HERE ...
var errcode_link = {
	'MOT_65300' : [[14, 3], 0, 0],
	'MOT_65312' : [[14, 4], 0, 0],
	'MOT_65313' : [[14, 5], 0, 0],
	'MOT_65314' : [[14, 5], 0, 0],
	'MOT_65315' : [[14, 5], 0, 0],
	'MOT_65316' : [[14, 3], 0, 0],
	'MOT_65317' : [[14, 4], 0, 0],
	'Pse_27' : [[18, 13], 0, 0],
	'Pse_29' : [[18, 13], 0, 0]
};


//EDIAGRAM LINK DATA HERE ...
var ediagram_link = {
	'CN1 GENERAL POWER SUPPLY BOARD JZ038 CN2' : [[10, 0], 0, 0],
	'GENERATOR POWER BOARD CJ855      ' : [[4, 0], 0, 0],
	'      MOTOR BOARD CJ856          ' : [[13, 0], 0, 0],
	'POWER FACTOR CORRECTION BOARD JZ036       ' : [[9, 0], 0, 0],
	'CPA47' : [[2, 16], 0, 0],
	' TEMPLE SUPPORT DRIVER BOARD CJ894     ' : [[7, 0], 0, 0],
	'               MOTOR BOARD CJ856 ' : [[13, 0], 0, 0],
	'    COLLIMATOR BOARD CJ889   ' : [[11, 0], 0, 0],
	'CPA90' : [[2, 22], 0, 0],
	'CPA91' : [[2, 21], 0, 0],
	'CPA98' : [[2, 31], 0, 0],
	'GENERATOR POWER BOARD CJ855       ' : [[4, 0], 0, 0],
	'     GENERATOR POWER BOARD CJ855  ' : [[4, 0], 0, 0],
	'CPA48' : [[2, 8], 0, 0],
	'CPA43' : [[2, 12], 0, 0],
	'CPA41' : [[2, 7], 0, 0],
	'       MOTOR BOARD CJ856         ' : [[13, 0], 0, 0],
	'SWITCH ETHERNET BOARD CJ898    ' : [[12, 0], 0, 0],
	'SENSOR CONTROL BOARD CJ852    ' : [[16, 0], 0, 0],
	'       POWER FACTOR CORRECTION BOARD JZ036' : [[9, 0], 0, 0],
	'SENSOR BOARD 8100 C CJ896 ' : [[6, 0], 0, 0],
	' 8100 C MICROPROCESSOR SENSOR BOARD CJ895     ' : [[17, 0], 0, 0],
	'SENSOR CONTROL BOARD CJ879    ' : [[17, 0], 0, 0],
	'CPA92-2' : [[2, 44], 0, 0],
	'MOTOR BOARD CJ856                ' : [[13, 0], 0, 0],
	'CPA42' : [[2, 0], 0, 0],
	'CPA40' : [[2, 6], 0, 0],
	'CPA46' : [[2, 15], 0, 0],
	'CPA45' : [[2, 14], 0, 0],
	'CPA44' : [[2, 13], 0, 0],
	'      GENERATOR POWER BOARD CJ855   ' : [[4, 0], 0, 0],
	'    SWITCH ETHERNET BOARD CJ898' : [[12, 0], 0, 0],
	'CPA49' : [[2, 17], 0, 0],
	'  COLLIMATOR BOARD CJ889   ' : [[11, 0], 0, 0],
	'CPA56' : [[2, 9], 0, 0],
	'  SLIDING BOARD CJ902   ' : [[8, 0], 0, 0],
	'CPB39' : [[2, 5], 0, 0],
	'CPB38' : [[2, 4], 0, 0],
	'CPB35' : [[2, 26], 0, 0],
	'CPB37' : [[2, 28], 0, 0],
	'CPB36' : [[2, 25], 0, 0],
	'CPB30' : [[2, 41], 0, 0],
	'GENERAL POWER SUPPLY BOARD JZ038 CN1 CN2' : [[10, 0], 0, 0],
	'CPA93' : [[2, 20], 0, 0],
	'CPB13' : [[2, 34], 0, 0],
	' MICROPROCESSOR SENSOR BOARD CJ895     ' : [[6, 0], 0, 0],
	'CPB40' : [[2, 29], 0, 0],
	'CPB41' : [[2, 19], 0, 0],
	'CPB42' : [[2, 24], 0, 0],
	'CPB43' : [[2, 11], 0, 0],
	'CPB20' : [[2, 35], 0, 0],
	'CPB21' : [[2, 36], 0, 0],
	'CPA36' : [[2, 2], 0, 0],
	'CPA37' : [[2, 4], 0, 0],
	'  SENSOR CONTROL BOARD CJ879  ' : [[17, 0], 0, 0],
	'CPA35' : [[2, 1], 0, 0],
	'CPA38' : [[2, 4], 0, 0],
	'CPA39' : [[2, 5], 0, 0],
	'CPB19' : [[2, 43], 0, 0],
	'CPB18' : [[2, 45], 0, 0],
	'CPA94' : [[2, 30], 0, 0],
	'CPB12' : [[2, 33], 0, 0],
	'CPB11' : [[2, 32], 0, 0],
	'CPB17' : [[2, 39], 0, 0],
	'CPB16' : [[2, 38], 0, 0],
	'CPB15' : [[2, 42], 0, 0],
	'CPB14' : [[2, 37], 0, 0],
	'SENSOR BOARD CJ896 ' : [[6, 0], 0, 0],
	'   POWER FACTOR CORRECTION BOARD JZ036    ' : [[9, 0], 0, 0]
};


//EPARTS LINK DATA HERE ...
var eparts_link = {
	'SPCGC95' : [[16, 0], 0, 0],
	'SPCU236B' : ['SPCU236_SM787_CU236_X-ray_Generator.pdf', 2, 1],
	'SPCGC90' : ['GRN-0170_SPCGC90_Secondary_Collimator_Assembly_Rev_1.pdf', 2, 1],
	'SPCGK51' : ['SPCGK51_SM787_CS_8100_3D_Service_CGH63_X-ray_Generator_and_Secondary_Collimator_Assembly.pdf', 2, 1],
	'SPCGL47' : ['SPCGL47_SM787_CS_8100_Service_CGD45_Head_Chin_Rest.pdf', 2, 1],
	'SPCGD40' : ['GRN-0169_SPCGD40_Head_Cable_Kit_Rev_1.pdf', 2, 1],
	'SPCGD41' : ['GRN-0168_SPCGD41_Rotative_Arm_Cable_Kit_Rev_1.pdf', 2, 1],
	'SPCGF44' : ['GRN-0171_SPCGF44_3D_Secondary_Collimator_Assembly_Rev_1.pdf', 2, 1],
	'SPCGF83' : ['SPCGF83_SM845_CS_8100_3D_CGF83_Rotative_Arm_Cable_Kit.pdf', 2, 1],
	'SPHY574' : [[7, 0], 0, 0],
	'SPCGH63' : ['GRN-0174_SPCGH63_X_ray_Source_and_Secondary_Collimator_Ass_(for_units_SN#xxIDxxx\uffff\uffff)_Rev1.pdf', 2, 1],
	'SPCGL92' : [[7, 0], 0, 0],
	'SPCGF81' : [[17, 0], 0, 0],
	'SPCGD83B' : ['GRN-0117_SPCGD83B_Motor_Board_Rev_1.pdf', 2, 1],
	'SPHY459' : ['GRN-0140_SPHY459_Head_and_chin_rest_collar_Rev_1.pdf', 2, 1],
	'SPCGF4X' : ['GRN-0136_SPCGF4X_Front_motors_for_the_secondary_collimator_Rev_1.pdf', 2, 1],
	'SPCPA38' : ['GRN-0125_SPCPA38_Stop_switch_Rev_1.pdf', 2, 1],
	'SPLZ066' : ['SPLZ066_SM787_LZ066_Y_Motor_Assembly.pdf', 2, 1],
	'SPCGM44' : [[17, 0], 0, 0],
	'SPCGH14' : ['GRN-0145_SPCGH14_Temple_support_mechanism_Rev_1.pdf', 2, 1],
	'SPCGH13' : ['GRN-0142_SPCGH13_Temple_support_motor_assembly_Rev_1.pdf', 2, 1],
	'SPCGK61' : [[8, 0], 0, 0],
	'SPLF445' : ['GRN-0119_SPLF445_Line_filter_Rev_1.pdf', 2, 1],
	'SPJZ036' : ['GRN-0121_SPJZ036_PFC_board_Rev_1.pdf', 2, 1],
	'SPCGM50' : ['GRN-0127_SPCGM50_SPCGF82_Head_cable_kit_Rev_2.pdf', 2, 1],
	'SPJZ038' : ['GRN-0120_SPJZ038_General_power_board_Rev_1.pdf', 2, 1],
	'SPCJ917' : ['GRN-0124_SPCJ857B_or_SPCJ917_Movement_detector_board_Rev_1.pdf', 2, 1],
	'SPCGM65' : ['GRN-0134_SPCGM65_Secondary_collimator_assembly_Rev_1.pdf', 2, 1],
	'SPCU252' : ['GRN-0133_SPCU252_X-ray_generator_Rev_1.pdf', 2, 1],
	'SPCGM69' : ['GRN-0132_SPCGM69_X-ray_generator_and_secondary_collimator_assembly_Rev_1.pdf', 2, 1],
	'SPCJ857B' : ['GRN-0124_SPCJ857B_or_SPCJ917_Movement_detector_board_Rev_1.pdf', 2, 1],
	'SPCGK42' : ['GRN-0135_SPCGK42_Cable_kit_for_secondary_collimator_assembly_Rev_1.pdf', 2, 1],
	'SPCJ858B' : ['GRN-0122_SPCJ858B_Rotation_and_Y_movement_detector_board_Rev_1.pdf', 2, 1],
	'SPCJ889' : [[11, 0], 0, 0],
	'SPCGH74' : ['GRN-0141_SPCGH74_Potentiometer_Rev_1.pdf', 2, 1],
	'SPCGH73' : [[7, 0], 0, 0],
	'SPCGD82B' : ['GRN-0131_SPCGD82B_Generator_power_board_Rev_1.pdf', 2, 1],
	'SPCJ898' : [[12, 0], 0, 0],
	'SPCJ894' : ['GRN-0116_SPCJ894_Temple_Support_Driver_Board_Rev_1.pdf', 2, 1],
	'SPHR992' : [[7, 0], 0, 0],
	'SPCGD32B' : [[14, 0], 0, 0],
	'SPCGT86' : ['GRN-0139_SPCGT86-SPCGT87_Head_and_chin_rest_Rev_1.pdf', 2, 1],
	'SPCGT87' : ['GRN-0139_SPCGT86-SPCGT87_Head_and_chin_rest_Rev_1.pdf', 2, 1],
	'SPCGF82' : ['GRN-0127_SPCGM50_SPCGF82_Head_cable_kit_Rev_2.pdf', 2, 1],
	'SPCGK04' : ['SPCGK04_SM991_CS_8100SC_Service_CGK04_Cephalostat_Drive_Motor.pdf', 2, 1],
	'SPCGK06' : ['SPCGK06_SM991_CS_8100SC_Service_CGGK06_Cephalostat_Resistive_Track_Assembly.pdf', 2, 1],
	'SPCGJ47' : ['GRN-0177_SPCGJ47_Ceph_Motor_Board_Rev_1.pdf', 2, 1],
	'SPCGL15' : ['SPCGL15_SM991_CS_8100SC_Service_CGL15_Cephalostat_Sensor_Cable_Kit.pdf', 2, 1],
	'SPCGJ74' : ['GRN-0178_SPCGJ74_Cephalostat_Sensor_Assembly_Rev_1.pdf', 2, 1],
	'SPCGJ79' : ['SPCGJ79_SM991_CS_8100SC_Service_CGJ79_Cephalostat_Head_Poistioning_Mechanism.pdf', 2, 1],
	'SPCJ903' : ['SPCJ903_SM991_CS_8100SC_Service_CJ903_Resistive_Track_Connector_Board.pdf', 2, 1],
	'SPHY555' : ['SPHY555_SM991_CS_8100SC_Service_HY555_Plastic_Cable_Guide.pdf', 2, 1],
	'SPHY556' : ['SPHY556_SM991_CS_8100SC_Service_HY556_Cephalostat_Collimator_Assembly.pdf', 2, 1],
	'SPJPB43' : ['SPJPB43_SM991_CS_8100SC_Service_JPB43_Head_Poistioning_Resistive_Track.pdf', 2, 1],
	'SPJR306' : ['SPJR306_SM991_CS_8100SC_Service_JR306_Cephalostat_Nasion_Support.pdf', 2, 1]
};



// Register service worker to control making site work offline

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/ServiceWorker.js')
      .then(() => { console.log('Service Worker Registered'); });
  }


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



    // <!--HTML LINK HERE ...-->
	// 	<a target="_blank" rel="noopener noreferrer" class="l"
	// 		href="https://infotec.carestreamdental.com/videos/tv003-cs-8100-resistive-track-y/index.html"> // sans media !!!
	// 		<div class="d" style="position:absolute;left:388px;bottom:511px;width:165px;height:15px;"></div>
	// 	</a>
	// 	<a target="_blank" rel="noopener noreferrer" class="l"
	// 		href="media/tv003-01-cs8100-resistive-track-y-4.1vdc-test.mp4">
	// 		<div class="d" style="position:absolute;left:108px;bottom:261px;width:138px;height:123px;"></div>
	// 	</a>
	// 	<a target="_blank" rel="noopener noreferrer" class="l"
	// 		href="media/tv003-02-cs8100-resistive-track-y-voltage-consitency-test.mp4">
	// 		<div class="d" style="position:absolute;left:360px;bottom:261px;width:138px;height:123px;"></div>
	// 	</a>
	// 	<a target="_blank" rel="noopener noreferrer" class="l"
	// 		onclick="OpenMediaFile('tv003-03-cs8100-resistive-track-y-resistance-test.mp4', false);"> /!\ sans media/ => var urldest = "media/"+data;
	// 		<div class="d" style="position:absolute;left:612px;bottom:261px;width:138px;height:123px;"></div>
	// 	</a>

function OpenMediaFile(data,newtab){
    var urldest = "media/"+data;
    if(iframe == true){//ServiceGuide line 960 "GenerateDocLinks"
        sessionStorage.setItem("_media_src_", urldest);
        SendCustomEventFromIframe("media_src");
        return false;
    }
    if(newtab == true){window.open(urldest);}
    else{window.open(urldest,"_self");}}

function GoToDocumentationPage(chapter, page) {
    var chapter = JSON.stringify(chapter);
    //integer as page number of the doc
    var page = JSON.stringify(page);
    sessionStorage.setItem("_doc_chapter_", chapter);
    sessionStorage.setItem("_doc_page_", page);
    // console.log(chapter, page);
    OpenHtmlPage("Documentation.html")
}

function PrevPageHistory(){
    SendCustomEventFromIframe("_prev_page_history_");
}

function NextPageHistory(){
    SendCustomEventFromIframe("_next_page_history_");
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
        OpenMediaFile(data,newtab);
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

function DiagramsActivity(){
    if(!diagram_content.includes(1)){
        $(".ELECDIAGRAM").css('opacity', '0.15');
        $(".ELECDIAGRAM").css('pointer-events', 'none');
    }
}

function EpartsActivity(){
    if(!epart_content.includes(1)){
        $(".EPARTS").css('opacity', '0.15');
        $(".EPARTS").css('pointer-events', 'none');
    }
}

function ErrCodeActivity(){
    if(errcode_content == 0){
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

function SendCustomEventToIframe(id, msgevent){
    document.getElementById(id).contentWindow.postMessage(msgevent);
}

function SendCustomEventFromIframe(msgevent){
    window.top.postMessage(msgevent, '*');
}

function ReceiveCustomEvent(msgevent, runfunc){
    window.onmessage = function (event) {
        if (event.data == msgevent) {
            runfunc();
        }  
    };
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

// function FullScreen() {
//     /* Get the documentElement (<html>) to display the page in fullscreen */
//     // var elem = document.getElementById("page-container");
//     var elem = document.getElementsByTagName("html")[0];
//     // var elem = window.parent.document.getElementsByTagName("html")[0];
//     /* View in fullscreen */
//     function openFullscreen() {
//         if (elem.requestFullscreen) {
//             elem.requestFullscreen();
//         } else if (elem.mozRequestFullScreen) { /* Firefox */
//             elem.mozRequestFullScreen();
//         } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
//             elem.webkitRequestFullscreen();
//         } else if (elem.msRequestFullscreen) { /* IE/Edge */
//             elem.msRequestFullscreen();}}
//     /* Close fullscreen */
//     function closeFullscreen() {
//         if (document.exitFullscreen) {
//             document.exitFullscreen();
//         } else if (document.mozCancelFullScreen) { /* Firefox */
//             document.mozCancelFullScreen();
//         } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
//             document.webkitExitFullscreen();
//         } else if (document.msExitFullscreen) { /* IE/Edge */
//             document.msExitFullscreen();}}
//     if ((window.fullScreen) ||
//         (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
//             document.getElementById("imgfscreen").src = "media/fullscreen.png";
//             closeFullscreen();}
//     else{
//         document.getElementById("imgfscreen").src = "media/exitfullscreen.png";
//         openFullscreen();
//     }
// }

function IsFullScreen(){
    if((window.fullScreen) || 
    ((window.innerWidth == screen.width) && 
    (window.innerHeight == screen.height))) {
        return true;
    } 
    else {
        return false;
    }
}

function FullScreen() {
    /* Get the documentElement (<html>) to display the page in fullscreen */
    // var elem = document.getElementById("page-container");
    var elem = document.getElementsByTagName("html")[0];
    // var elem = window.parent.document.getElementsByTagName("html")[0];
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
    if (IsFullScreen()) {
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