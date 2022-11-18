module.exports = {
name:"$alwaysExecute" ,
$if:"v4",

  code: `

$color[00cc66]
$if[$getChannelVar[p1]==0] 

$description[[1/10] <@$authorID> присоединился к очереди]

$setUserVar[userj;1]

$setChannelVar[p1;$authorID] 


$setChannelVar[sum;$sum[$getChannelVar[sum];1]]

$elseif[$getChannelVar[p2]==0] 
$setChannelVar[p2;$authorID] 
$setUserVar[userj;1]
$description[[2/10] <@$authorID> присоединился к очереди]
$setChannelVar[sum;$sum[$getChannelVar[sum];1]]
$endelseIf
$elseif[$getChannelVar[p3]==0] 
$setChannelVar[p3;$authorID] 
$setUserVar[userj;1]
$description[[3/10] <@$authorID> присоединился к очереди]
$setChannelVar[sum;$sum[$getChannelVar[sum];1]]
$endelseIf

$elseif[$getChannelVar[p4]==0] 

$description[[4/10] <@$authorID> присоединился к очереди]

$setUserVar[userj;1]

$setChannelVar[p4;$authorID] 


$setChannelVar[sum;$sum[$getChannelVar[sum];1]]
$endelseIf

$elseif[$getChannelVar[p5]==0] 
$setChannelVar[p5;$authorID] 
$setUserVar[userj;1]
$description[[5/10] <@$authorID> присоединился к очереди]
$setChannelVar[sum;$sum[$getChannelVar[sum];1]]
$endelseIf
$elseif[$getChannelVar[p6]==0] 
$setChannelVar[p6;$authorID] 
$setUserVar[userj;1]
$description[[6/10] <@$authorID> присоединился к очереди]
$setChannelVar[sum;$sum[$getChannelVar[sum];1]]
$endelseIf

$elseif[$getChannelVar[p7]==0] 
$setChannelVar[p7;$authorID] 
$setUserVar[userj;1]
$description[[7/10] <@$authorID> присоединился к очереди]
$setChannelVar[sum;$sum[$getChannelVar[sum];1]]
$endelseIf

$elseif[$getChannelVar[p8]==0] 
$setChannelVar[p8;$authorID] 
$setUserVar[userj;1]
$description[[8/10] <@$authorID> присоединился к очереди]
$setChannelVar[sum;$sum[$getChannelVar[sum];1]]
$endelseIf

$elseif[$getChannelVar[p9]==0] 
$setChannelVar[p9;$authorID] 
$setUserVar[userj;1]
$description[[9/10] <@$authorID> присоединился к очереди]
$setChannelVar[sum;$sum[$getChannelVar[sum];1]]
$endelseIf


$elseif[$getChannelVar[p10]==0] 
$setChannelVar[p10;$authorID]
$color[1;00cc66]
<@$getChannelVar[pickid]>
$title[Игра #$sum[$getServerVar[numcheck];1]]
$description[1;
**COUNTER TERRORISTS**
👑<@$getChannelVar[p1]>
**TERRORIST**
👑<@$authorID>
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
$setChannelVar[pickid;$getChannelVar[p1]]

$addButton[1;4;primary;pick4;no;]
$addButton[1;3;primary;pick3;no;]
$addButton[1;2;primary;pick2;no;]
$addButton[1;1;primary;pick1;no;]
$addButton[2;8;primary;pick8;no;]
$addButton[2;7;primary;pick7;no;]
$addButton[2;6;primary;pick6;no;]
$addButton[2;5;primary;pick5;no;]



$setServerVar[sumGame;$sum[$getServerVar[sumGame];1]]

$setChannelVar[sum;$sum[$getChannelVar[sum];1]]
$endelseIf


$elseif[$getChannelVar[p10]!=0]
$color[FFFFF]
$title[Ошибка]
$description[Очередь заполнена,дождитесь окончания распределения игроков по командам и выбора карты.]
$endelseIf
$endif







$onlyif[$voiceid[$authorid]!=;{"embeds": "{newEmbed:{color:FFFFFF}{description:Зайдите в голосовой канал, чтобы подключиться.}}", "ephemeral" : true, "options" : { "interaction" : false}}]
  

$onlyIf[$getUserVar[userj]==0;{"embeds": "{newEmbed:{color:FFFFFF}{description:Вы уже находитесь в очереди.}}", "ephemeral" : true, "options" : { "interaction" : false}}]

$onlyIf[$message[1]==#EQUAL#j;]



$onlyForChannels[916408087466889235;916408087689195554;916408087689195559;916408087840194584;]
`
                  
  
}



    
