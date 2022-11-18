module.exports = {
 name:"pick7",
$if:"v4",
type: "interaction", 
prototype: "button",
  code: `


$if[$getChannelVar[pickid]==$getChannelVar[p1]]

$setChannelVar[pT;$getChannelVar[pT] $getChannelVar[p8],]
$setChannelVar[voice7;$getChannelVar[p8]]
$color[1;00cc66]
<@$getChannelVar[pickid]>
$title[Игра #$sum[$getServerVar[numcheck];1]]
$description[1;
**COUNTER TERRORISTS**
👑<@$getChannelVar[p1]>
$getChannelVar[pick1]
**TERRORIST**
👑<@$getChannelVar[p10]>
$getChannelVar[pick2]
**Осталось**
1-<@$getChannelVar[p2]>|Elo:$getUserVar[elo;$getChannelVar[p2]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p2]];$getUserVar[deaths;$getChannelVar[p2]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p2]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p2]];$getUserVar[lose;$getChannelVar[p2]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p2]]];2]
2-<@$getChannelVar[p3]>|Elo:$getUserVar[elo;$getChannelVar[p3]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p3]];$getUserVar[deaths;$getChannelVar[p3]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p3]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p3]];$getUserVar[lose;$getChannelVar[p3]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p3]]];2]
3-<@$getChannelVar[p4]>|Elo:$getUserVar[elo;$getChannelVar[p4]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p4]];$getUserVar[deaths;$getChannelVar[p4]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p4]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p4]];$getUserVar[lose;$getChannelVar[p4]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p4]]];2]
4-<@$getChannelVar[p5]>|Elo:$getUserVar[elo;$getChannelVar[p5]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p5]];$getUserVar[deaths;$getChannelVar[p5]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p5]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p5]];$getUserVar[lose;$getChannelVar[p5]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p5]]];2]
5-<@$getChannelVar[p6]>|Elo:$getUserVar[elo;$getChannelVar[p6]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p6]];$getUserVar[deaths;$getChannelVar[p6]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p6]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p6]];$getUserVar[lose;$getChannelVar[p2]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p6]]];2]
6-<@$getChannelVar[p7]>|Elo:$getUserVar[elo;$getChannelVar[p7]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p7]];$getUserVar[deaths;$getChannelVar[p7]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p7]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p7]];$getUserVar[lose;$getChannelVar[p7]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p7]]];2]
7-<@$getChannelVar[p8]>|Elo:$getUserVar[elo;$getChannelVar[p8]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p8]];$getUserVar[deaths;$getChannelVar[p8]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p8]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p8]];$getUserVar[lose;$getChannelVar[p8]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p8]]];2]
8-<@$getChannelVar[p9]>|Elo:$getUserVar[elo;$getChannelVar[p9]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p9]];$getUserVar[deaths;$getChannelVar[p9]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p9]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p9]];$getUserVar[lose;$getChannelVar[p9]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p9]]];2]

]




$setChannelVar[pick1;$getChannelVar[pick1] <@$getChannelVar[p8]> \] 





$setChannelVar[pickplayer7;yes]
$setChannelVar[pickid;$getChannelVar[p10]]


$else

$setChannelVar[pCT;$getChannelVar[pCT] $getChannelVar[p8],]
$setChannelVar[pvoice7;$getChannelVar[p8]]
$color[1;00cc66]
<@$getChannelVar[pickid]>
$title[Игра #$sum[$getServerVar[numcheck];1]]
$description[1;
**TERRORIST**
👑<@$getChannelVar[p1]>
$getChannelVar[pick1]
**COUNTER TERRORISTS**
👑<@$getChannelVar[p10]>
   $getChannelVar[pick2]
**Осталось**
1-<@$getChannelVar[p2]>|Elo:$getUserVar[elo;$getChannelVar[p2]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p2]];$getUserVar[deaths;$getChannelVar[p2]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p2]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p2]];$getUserVar[lose;$getChannelVar[p2]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p2]]];2]
2-<@$getChannelVar[p3]>|Elo:$getUserVar[elo;$getChannelVar[p3]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p3]];$getUserVar[deaths;$getChannelVar[p3]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p3]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p3]];$getUserVar[lose;$getChannelVar[p3]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p3]]];2]
3-<@$getChannelVar[p4]>|Elo:$getUserVar[elo;$getChannelVar[p4]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p4]];$getUserVar[deaths;$getChannelVar[p4]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p4]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p4]];$getUserVar[lose;$getChannelVar[p4]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p4]]];2]
4-<@$getChannelVar[p5]>|Elo:$getUserVar[elo;$getChannelVar[p5]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p5]];$getUserVar[deaths;$getChannelVar[p5]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p5]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p5]];$getUserVar[lose;$getChannelVar[p5]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p5]]];2]
5-<@$getChannelVar[p6]>|Elo:$getUserVar[elo;$getChannelVar[p6]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p6]];$getUserVar[deaths;$getChannelVar[p6]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p6]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p6]];$getUserVar[lose;$getChannelVar[p2]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p6]]];2]
6-<@$getChannelVar[p7]>|Elo:$getUserVar[elo;$getChannelVar[p7]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p7]];$getUserVar[deaths;$getChannelVar[p7]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p7]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p7]];$getUserVar[lose;$getChannelVar[p7]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p7]]];2]
7-<@$getChannelVar[p8]>|Elo:$getUserVar[elo;$getChannelVar[p8]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p8]];$getUserVar[deaths;$getChannelVar[p8]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p8]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p8]];$getUserVar[lose;$getChannelVar[p8]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p8]]];2]
8-<@$getChannelVar[p9]>|Elo:$getUserVar[elo;$getChannelVar[p9]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p9]];$getUserVar[deaths;$getChannelVar[p9]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p9]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p9]];$getUserVar[lose;$getChannelVar[p9]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p9]]];2]

]



$setChannelVar[pick2;$getChannelVar[pick2] <@$getChannelVar[p8]> \] 


$setChannelVar[pickplayer7;yes]
$setChannelVar[pickid;$getChannelVar[p1]]


$endif

$addButton[1;4;primary;pick4;$getChannelVar[button1];]
$addButton[1;3;primary;pick3;$getChannelVar[button2];]
$addButton[1;2;primary;pick2;$getChannelVar[button3];]
$addButton[1;1;primary;pick1;$getChannelVar[button4];]
$addButton[2;8;primary;pick8;$getChannelVar[button5];]
$addButton[2;7;primary;pick7;$getChannelVar[button6];]
$addButton[2;6;primary;pick6;$getChannelVar[button7];]
$addButton[2;5;primary;pick5;$getChannelVar[button8];]
$setChannelVar[button6;yes]
$setChannelVar[sumRH;$sum[$getChannelVar[sumRH];1]]

$onlyIf[$getChannelVar[pickid]==$authorID;]
$onlyIf[$getChannelVar[pickplayer7]!=yes;]


` 
  
}
  
  
  

