module.exports = {
  
name: "pick22",
  $if: "v4", 
type: "interaction", 
prototype: "button",
code:`

$if[$getChannelVar[pickid]==$getChannelVar[p1]]
$setChannelVar[voice2;$getChannelVar[p3]]
$setChannelVar[pT;$getChannelVar[pT] $getChannelVar[p3],]
$color[1;00cc66]
<@$getChannelVar[pickid]>
$title[Игра #$getServerVar[numbergame]]
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




$setChannelVar[pick1;$getChannelVar[pick1] <@$getChannelVar[p3]>,] 





$setChannelVar[pickplayer2;yes]
$setChannelVar[pickid;$getChannelVar[p4]]


$else
$setChannelVar[pvoice2;$getChannelVar[p3]]
$setChannelVar[pCT;$getChannelVar[pCT] $getChannelVar[p3],]
$color[1;00cc66]
<@$getChannelVar[pickid]>
$title[Игра #$getServerVar[numbergame]]
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




$setChannelVar[pick2;$getChannelVar[pick2] <@$getChannelVar[p3]>,] 


$setChannelVar[pickplayer2;yes]
$setChannelVar[pickid;$getChannelVar[p1]]



$endif

$addButton[1;2;primary;pick22;$getChannelVar[button3];]
$addButton[1;1;primary;pick11;$getChannelVar[button4];]




$setChannelVar[button3;yes]
$setChannelVar[sumRH;$sum[$getChannelVar[sumRH];1]]

$onlyIf[$getChannelVar[pickid]==$authorID;]
$onlyIf[$getChannelVar[pickplayer2]!=yes;]


` 
  
}