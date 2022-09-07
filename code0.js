gdjs.Title_32ScreenCode = {};
gdjs.Title_32ScreenCode.GDStartObjects2_1final = [];

gdjs.Title_32ScreenCode.GDTitle_95TextObjects1= [];
gdjs.Title_32ScreenCode.GDTitle_95TextObjects2= [];
gdjs.Title_32ScreenCode.GDTitle_95TextObjects3= [];
gdjs.Title_32ScreenCode.GDCreateObjects1= [];
gdjs.Title_32ScreenCode.GDCreateObjects2= [];
gdjs.Title_32ScreenCode.GDCreateObjects3= [];
gdjs.Title_32ScreenCode.GDJoinObjects1= [];
gdjs.Title_32ScreenCode.GDJoinObjects2= [];
gdjs.Title_32ScreenCode.GDJoinObjects3= [];
gdjs.Title_32ScreenCode.GDNameObjects1= [];
gdjs.Title_32ScreenCode.GDNameObjects2= [];
gdjs.Title_32ScreenCode.GDNameObjects3= [];
gdjs.Title_32ScreenCode.GDBackObjects1= [];
gdjs.Title_32ScreenCode.GDBackObjects2= [];
gdjs.Title_32ScreenCode.GDBackObjects3= [];
gdjs.Title_32ScreenCode.GDRoom_95IDObjects1= [];
gdjs.Title_32ScreenCode.GDRoom_95IDObjects2= [];
gdjs.Title_32ScreenCode.GDRoom_95IDObjects3= [];
gdjs.Title_32ScreenCode.GDStartObjects1= [];
gdjs.Title_32ScreenCode.GDStartObjects2= [];
gdjs.Title_32ScreenCode.GDStartObjects3= [];
gdjs.Title_32ScreenCode.GDGrayBackgroundObjects1= [];
gdjs.Title_32ScreenCode.GDGrayBackgroundObjects2= [];
gdjs.Title_32ScreenCode.GDGrayBackgroundObjects3= [];
gdjs.Title_32ScreenCode.GDName_95InputObjects1= [];
gdjs.Title_32ScreenCode.GDName_95InputObjects2= [];
gdjs.Title_32ScreenCode.GDName_95InputObjects3= [];
gdjs.Title_32ScreenCode.GDRoomID_95InputObjects1= [];
gdjs.Title_32ScreenCode.GDRoomID_95InputObjects2= [];
gdjs.Title_32ScreenCode.GDRoomID_95InputObjects3= [];

gdjs.Title_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.conditionTrue_1 = {val:false};
gdjs.Title_32ScreenCode.condition0IsTrue_1 = {val:false};
gdjs.Title_32ScreenCode.condition1IsTrue_1 = {val:false};
gdjs.Title_32ScreenCode.condition2IsTrue_1 = {val:false};
gdjs.Title_32ScreenCode.conditionTrue_2 = {val:false};
gdjs.Title_32ScreenCode.condition0IsTrue_2 = {val:false};
gdjs.Title_32ScreenCode.condition1IsTrue_2 = {val:false};
gdjs.Title_32ScreenCode.condition2IsTrue_2 = {val:false};


gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Title_32ScreenCode.GDBackObjects1});
gdjs.Title_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.Title_32ScreenCode.GDNameObjects2);
gdjs.copyArray(runtimeScene.getObjects("Name_Input"), gdjs.Title_32ScreenCode.GDName_95InputObjects2);
gdjs.copyArray(runtimeScene.getObjects("RoomID_Input"), gdjs.Title_32ScreenCode.GDRoomID_95InputObjects2);
gdjs.copyArray(runtimeScene.getObjects("Room_ID"), gdjs.Title_32ScreenCode.GDRoom_95IDObjects2);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDNameObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDNameObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDRoom_95IDObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDRoom_95IDObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDName_95InputObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDName_95InputObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDRoomID_95InputObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDRoomID_95InputObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Title_32ScreenCode.GDBackObjects1);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Title_32ScreenCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Create"), gdjs.Title_32ScreenCode.GDCreateObjects1);
gdjs.copyArray(runtimeScene.getObjects("Join"), gdjs.Title_32ScreenCode.GDJoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.Title_32ScreenCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name_Input"), gdjs.Title_32ScreenCode.GDName_95InputObjects1);
gdjs.copyArray(runtimeScene.getObjects("RoomID_Input"), gdjs.Title_32ScreenCode.GDRoomID_95InputObjects1);
gdjs.copyArray(runtimeScene.getObjects("Room_ID"), gdjs.Title_32ScreenCode.GDRoom_95IDObjects1);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDJoinObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDJoinObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDCreateObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDCreateObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDNameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDRoom_95IDObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDRoom_95IDObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDRoomID_95InputObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDRoomID_95InputObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDName_95InputObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDName_95InputObjects1[i].hide();
}
}}

}


};gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDCreateObjects2Objects = Hashtable.newFrom({"Create": gdjs.Title_32ScreenCode.GDCreateObjects2});
gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDJoinObjects1Objects = Hashtable.newFrom({"Join": gdjs.Title_32ScreenCode.GDJoinObjects1});
gdjs.Title_32ScreenCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Create"), gdjs.Title_32ScreenCode.GDCreateObjects2);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDCreateObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Title_32ScreenCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Title_32ScreenCode.GDCreateObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Join"), gdjs.Title_32ScreenCode.GDJoinObjects2);
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.Title_32ScreenCode.GDNameObjects2);
gdjs.copyArray(runtimeScene.getObjects("Name_Input"), gdjs.Title_32ScreenCode.GDName_95InputObjects2);
gdjs.copyArray(runtimeScene.getObjects("RoomID_Input"), gdjs.Title_32ScreenCode.GDRoomID_95InputObjects2);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDCreateObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDCreateObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDJoinObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDJoinObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDNameObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDNameObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDRoomID_95InputObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDRoomID_95InputObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDName_95InputObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDName_95InputObjects2[i].hide(false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Join"), gdjs.Title_32ScreenCode.GDJoinObjects1);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDJoinObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Title_32ScreenCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Create"), gdjs.Title_32ScreenCode.GDCreateObjects1);
/* Reuse gdjs.Title_32ScreenCode.GDJoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.Title_32ScreenCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name_Input"), gdjs.Title_32ScreenCode.GDName_95InputObjects1);
gdjs.copyArray(runtimeScene.getObjects("RoomID_Input"), gdjs.Title_32ScreenCode.GDRoomID_95InputObjects1);
gdjs.copyArray(runtimeScene.getObjects("Room_ID"), gdjs.Title_32ScreenCode.GDRoom_95IDObjects1);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDCreateObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDCreateObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDJoinObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDJoinObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDNameObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDRoom_95IDObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDRoom_95IDObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDRoomID_95InputObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDRoomID_95InputObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDName_95InputObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDName_95InputObjects1[i].hide(false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), false);
}}

}


};gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDStartObjects3Objects = Hashtable.newFrom({"Start": gdjs.Title_32ScreenCode.GDStartObjects3});
gdjs.Title_32ScreenCode.userFunc0x111b7d0 = function(runtimeScene) {
"use strict";
const game = runtimeScene.getGame()
var name = game.getVariables().get("Name").getAsString()
var roomId = game.getVariables().get("RoomID").getAsString()
game.player_objects = []
game.player_Id = []


let url = "wss://72e3iezkh0.execute-api.ap-northeast-1.amazonaws.com/production"
url += "?name=" + name
if (roomId.length == 6){
    url += "&RoomId=" + roomId
}

game.ws = new WebSocket(url)
game.ws.onopen = function(event){
    game.ws.send(JSON.stringify({"action":"GetRoomId"}))
    game.getVariables().get("StartGame").setString("true")
}
};
gdjs.Title_32ScreenCode.eventsList2 = function(runtimeScene) {

{


gdjs.Title_32ScreenCode.userFunc0x111b7d0(runtimeScene);

}


};gdjs.Title_32ScreenCode.eventsList3 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Name_Input"), gdjs.Title_32ScreenCode.GDName_95InputObjects2);
gdjs.copyArray(runtimeScene.getObjects("RoomID_Input"), gdjs.Title_32ScreenCode.GDRoomID_95InputObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.Title_32ScreenCode.GDRoomID_95InputObjects2.length === 0 ) ? "" :gdjs.Title_32ScreenCode.GDRoomID_95InputObjects2[0].getString()));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.Title_32ScreenCode.GDName_95InputObjects2.length === 0 ) ? "" :gdjs.Title_32ScreenCode.GDName_95InputObjects2[0].getString()));
}{runtimeScene.getGame().getVariables().getFromIndex(10).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{

gdjs.Title_32ScreenCode.GDStartObjects2.length = 0;


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
{
{gdjs.Title_32ScreenCode.conditionTrue_1 = gdjs.Title_32ScreenCode.condition0IsTrue_0;
gdjs.Title_32ScreenCode.GDStartObjects2_1final.length = 0;gdjs.Title_32ScreenCode.condition0IsTrue_1.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_1.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Title_32ScreenCode.condition0IsTrue_1.val ) {
    gdjs.Title_32ScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Title_32ScreenCode.GDStartObjects3);
{gdjs.Title_32ScreenCode.conditionTrue_2 = gdjs.Title_32ScreenCode.condition1IsTrue_1;
gdjs.Title_32ScreenCode.condition0IsTrue_2.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_2.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDStartObjects3Objects, runtimeScene, true, false);
}if ( gdjs.Title_32ScreenCode.condition0IsTrue_2.val ) {
{
gdjs.Title_32ScreenCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.Title_32ScreenCode.conditionTrue_2.val = true && gdjs.Title_32ScreenCode.condition0IsTrue_2.val && gdjs.Title_32ScreenCode.condition1IsTrue_2.val;
}
if( gdjs.Title_32ScreenCode.condition1IsTrue_1.val ) {
    gdjs.Title_32ScreenCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Title_32ScreenCode.GDStartObjects3.length;j<jLen;++j) {
        if ( gdjs.Title_32ScreenCode.GDStartObjects2_1final.indexOf(gdjs.Title_32ScreenCode.GDStartObjects3[j]) === -1 )
            gdjs.Title_32ScreenCode.GDStartObjects2_1final.push(gdjs.Title_32ScreenCode.GDStartObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Title_32ScreenCode.GDStartObjects2_1final, gdjs.Title_32ScreenCode.GDStartObjects2);
}
}
}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.Title_32ScreenCode.conditionTrue_1 = gdjs.Title_32ScreenCode.condition1IsTrue_0;
gdjs.Title_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12138284);
}
}}
if (gdjs.Title_32ScreenCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Title_32ScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "true";
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gaming", false);
}}

}


};gdjs.Title_32ScreenCode.eventsList4 = function(runtimeScene) {

{


gdjs.Title_32ScreenCode.eventsList0(runtimeScene);
}


{


gdjs.Title_32ScreenCode.eventsList1(runtimeScene);
}


{


gdjs.Title_32ScreenCode.eventsList3(runtimeScene);
}


};

gdjs.Title_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32ScreenCode.GDTitle_95TextObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTitle_95TextObjects2.length = 0;
gdjs.Title_32ScreenCode.GDTitle_95TextObjects3.length = 0;
gdjs.Title_32ScreenCode.GDCreateObjects1.length = 0;
gdjs.Title_32ScreenCode.GDCreateObjects2.length = 0;
gdjs.Title_32ScreenCode.GDCreateObjects3.length = 0;
gdjs.Title_32ScreenCode.GDJoinObjects1.length = 0;
gdjs.Title_32ScreenCode.GDJoinObjects2.length = 0;
gdjs.Title_32ScreenCode.GDJoinObjects3.length = 0;
gdjs.Title_32ScreenCode.GDNameObjects1.length = 0;
gdjs.Title_32ScreenCode.GDNameObjects2.length = 0;
gdjs.Title_32ScreenCode.GDNameObjects3.length = 0;
gdjs.Title_32ScreenCode.GDBackObjects1.length = 0;
gdjs.Title_32ScreenCode.GDBackObjects2.length = 0;
gdjs.Title_32ScreenCode.GDBackObjects3.length = 0;
gdjs.Title_32ScreenCode.GDRoom_95IDObjects1.length = 0;
gdjs.Title_32ScreenCode.GDRoom_95IDObjects2.length = 0;
gdjs.Title_32ScreenCode.GDRoom_95IDObjects3.length = 0;
gdjs.Title_32ScreenCode.GDStartObjects1.length = 0;
gdjs.Title_32ScreenCode.GDStartObjects2.length = 0;
gdjs.Title_32ScreenCode.GDStartObjects3.length = 0;
gdjs.Title_32ScreenCode.GDGrayBackgroundObjects1.length = 0;
gdjs.Title_32ScreenCode.GDGrayBackgroundObjects2.length = 0;
gdjs.Title_32ScreenCode.GDGrayBackgroundObjects3.length = 0;
gdjs.Title_32ScreenCode.GDName_95InputObjects1.length = 0;
gdjs.Title_32ScreenCode.GDName_95InputObjects2.length = 0;
gdjs.Title_32ScreenCode.GDName_95InputObjects3.length = 0;
gdjs.Title_32ScreenCode.GDRoomID_95InputObjects1.length = 0;
gdjs.Title_32ScreenCode.GDRoomID_95InputObjects2.length = 0;
gdjs.Title_32ScreenCode.GDRoomID_95InputObjects3.length = 0;

gdjs.Title_32ScreenCode.eventsList4(runtimeScene);
return;

}

gdjs['Title_32ScreenCode'] = gdjs.Title_32ScreenCode;
