module.exports = {
name: "pick11",
  $if: "v4", 
type: "interaction", 
prototype: "button",
code:`


$if[$getChannelVar[pickid]==$getChannelVar[p1]]
$setChannelVar[voice1;$getChannelVar[p2]]
$setChannelVar[pT;$getChannelVar[pT] $getChannelVar[p2],]
$color[1;00cc66]
<@$getChannelVar[pickid]>
$title[Игра #$sum[$getServerVar[numcheck];1]]
$description[1;
**COUNTER TERRORISTS**
👑<@$getChannelVar[p1]>
$getChannelVar[pick1]
**TERRORIST**
👑<@$getChannelVar[p4]>
$getChannelVar[pick2]
**Осталось**
1-<@$getChannelVar[p2]>|Elo:$getUserVar[elo;$getChannelVar[p2]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p2]];$getUserVar[deaths;$getChannelVar[p2]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p2]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p2]];$getUserVar[lose;$getChannelVar[p2]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p2]]];2]
2-<@$getChannelVar[p3]>|Elo:$getUserVar[elo;$getChannelVar[p3]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p3]];$getUserVar[deaths;$getChannelVar[p3]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p3]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p3]];$getUserVar[lose;$getChannelVar[p3]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p3]]];2]

]






$setChannelVar[pick1;$getChannelVar[pick1] <@$getChannelVar[p2]>,] 






$setChannelVar[pickplayer1;yes]
$setChannelVar[pickid;$getChannelVar[p4]]

$else
$setChannelVar[pvoice1;$getChannelVar[p2]]
$setChannelVar[pCT;$getChannelVar[pCT] $getChannelVar[p2],]
$color[1;00cc66]
<@$getChannelVar[pickid]>
$title[Игра #$sum[$getServerVar[numcheck];1]]
$description[1;
**TERRORIST**
👑<@$getChannelVar[p1]>
$getChannelVar[pick1]
**COUNTER TERRORISTS**
👑<@$getChannelVar[p4]>
$getChannelVar[pick2]
**Осталось**
1-<@$getChannelVar[p2]>|Elo:$getUserVar[elo;$getChannelVar[p2]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p2]];$getUserVar[deaths;$getChannelVar[p2]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p2]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p2]];$getUserVar[lose;$getChannelVar[p2]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p2]]];2]
2-<@$getChannelVar[p3]>|Elo:$getUserVar[elo;$getChannelVar[p3]]|K/D:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[kills;$getChannelVar[p3]];$getUserVar[deaths;$getChannelVar[p3]]];NaN;0];Infinity;$getUserVar[kills;$getChannelVar[p3]]];2]|W/L:$roundTenth[$replaceText[$replaceText[$divide[$getUserVar[win;$getChannelVar[p3]];$getUserVar[lose;$getChannelVar[p3]]];NaN;0];Infinity;$getUserVar[win;$getChannelVar[p3]]];2]


]




$setChannelVar[pick2;$getChannelVar[pick2] <@$getChannelVar[p2]>,] 



$setChannelVar[pickplayer1;yes]
$setChannelVar[pickid;$getChannelVar[p1]]



$endif


$addButton[1;2;primary;pick22;$getChannelVar[button3];]
$addButton[1;1;primary;pick11;$getChannelVar[button4];]



$setChannelVar[button4;yes]
$setChannelVar[sumRH;$sum[$getChannelVar[sumRH];1]]

$onlyIf[$getChannelVar[pickid]==$authorID;]
$onlyIf[$getChannelVar[pickplayer1]!=yes;]


`
}