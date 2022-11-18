module.exports = {
name:"rehosting2",
type: "interaction",
prototype: "button",
 $if: "v4",
 code: `



$if[$getChannelVar[rhtab]==0] 
$setUserVar[rhcheck;1]

$interactionReply[;{newEmbed:{description:
<@$authorID> начал голосование за очистку очереди
Для очистки необходимо 6 голосов !

Проголосовало:
1/7}};;;;no]

$setChannelVar[rhtab;$sum[$getChannelVar[rhtab];1]]


$elseif[$getChannelVar[rhtab]==1] 
$setUserVar[rhcheck;1]

$interactionReply[;{newEmbed:{description:
<@$authorID> проголосовал

Проголосовало:
2/7}};;;;no]
$setChannelVar[rhtab;$sum[$getChannelVar[rhtab];1]]
$endelseIf

$elseif[$getChannelVar[rhtab]==2] 
$setUserVar[rhcheck;1]

$interactionReply[;{newEmbed:{description:
<@$authorID> проголосовал

Проголосовало:
3/7}};;;;no]
$setChannelVar[rhtab;$sum[$getChannelVar[rhtab];1]]
$endelseIf


$elseif[$getChannelVar[rhtab]==3] 
$setUserVar[rhcheck;1]

$interactionReply[;{newEmbed:{description:
<@$authorID> проголосовал

Проголосовало:
4/7}};;;;no]
$setChannelVar[rhtab;$sum[$getChannelVar[rhtab];1]]
$endelseIf

$elseif[$getChannelVar[rhtab]==4] 
$setUserVar[rhcheck;1]

$interactionReply[;{newEmbed:{description:
<@$authorID> проголосовал

Проголосовало:
5/7}};;;;no]
$setChannelVar[rhtab;$sum[$getChannelVar[rhtab];1]]
$endelseIf

$elseif[$getChannelVar[rhtab]==5] 
$setUserVar[rhcheck;1]

$interactionReply[;{newEmbed:{description:
<@$authorID> проголосовал

Проголосовало:
6/7}};;;;no]
$setChannelVar[rhtab;$sum[$getChannelVar[rhtab];1]]
$endelseIf




$elseif[$getChannelVar[rhtab]==6] 

$description[Очередь была успешно очищена]
$setChannelVar[rhstart;0]
$setChannelVar[p1;0]
$setChannelVar[p2;0]
$setChannelVar[p3;0]
$setChannelVar[p4;0]
$setChannelVar[p5;0]
$setChannelVar[p6;0]
$setChannelVar[p7;0]
$setChannelVar[p8;0]
$setChannelVar[p9;0]
$setChannelVar[p10;0]
$setChannelVar[rhtab;0]
$setChannelVar[sum;0]
$setChannelVar[rhcheck;0;$findUser[$getChannelVar[p10]]]
$setChannelVar[rhcheck;0;$findUser[$getChannelVar[p9]]]
$setChannelVar[rhcheck;0;$findUser[$getChannelVar[p8]]]
$setChannelVar[rhcheck;0;$findUser[$getChannelVar[p7]]]
$setChannelVar[rhcheck;0;$findUser[$getChannelVar[p6]]]
$setChannelVar[rhcheck;0;$findUser[$getChannelVar[p5]]]
$setChannelVar[rhcheck;0;$findUser[$getChannelVar[p4]]]
$setChannelVar[rhcheck;0;$findUser[$getChannelVar[p3]]]
$setChannelVar[rhcheck;0;$findUser[$getChannelVar[p2]]]
$setChannelVar[rhcheck;0;$findUser[$getChannelVar[p1]]]


$endelseIf
$endif

$onlyif[$getUserVar[rhcheck]==0;{"embeds": "{newEmbed:{color:FFFFFF}{description:Вы уже проголосовали за очистку лобби}}", "ephemeral" : true, "options" : { "interaction" : true}}]

$onlyif[$voiceid[$authorid]!=;{"embeds": "{newEmbed:{color:FFFFFF}{description:Что-бы проголосовать за очистку очереди вам необходимо зайти в голосовой канал}}", "ephemeral" : true, "options" : { "interaction" : true}}]



$onlyForChannels[916408087466889235;916408087689195554;916408087689195559;916408087840194584;]
`
}