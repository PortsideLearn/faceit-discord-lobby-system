module.exports = {
 name:"$alwaysExecute",
$if:"v4",

  code: `

$if[$getChannelVar[sum]==0]
$description[Очередь пуста]
$elseif[$getChannelVar[sum]==1]
$description[Очередь:
<@$getChannelVar[p1]>]
$endelseIf
$elseif[$getChannelVar[sum]==2]
$description[Очередь:
<@$getChannelVar[p1]>
<@$getChannelVar[p2]>
$endelseIf
$elseif[$getChannelVar[sum]==3]
$description[Очередь:
<@$getChannelVar[p1]>
<@$getChannelVar[p2]>
<@$getChannelVar[p3]>]
$endelseIf
$elseif[$getChannelVar[sum]==4]
$description[Очередь:
<@$getChannelVar[p1]>
<@$getChannelVar[p2]>
<@$getChannelVar[p3]>
<@$getChannelVar[p4]>]
$endelseIf
$elseif[$getChannelVar[sum]==5]
$description[Очередь:
<@$getChannelVar[p1]>
<@$getChannelVar[p2]>
<@$getChannelVar[p3]>
<@$getChannelVar[p4]>
<@$getChannelVar[p5]>]
$endelseIf
$elseif[$getChannelVar[sum]==6]
$description[Очередь:
<@$getChannelVar[p1]>
<@$getChannelVar[p2]>
<@$getChannelVar[p3]>
<@$getChannelVar[p4]>
<@$getChannelVar[p5]>
<@$getChannelVar[p6]>]
$endelseIf
$elseif[$getChannelVar[sum]==7]
$description[Очередь:
<@$getChannelVar[p1]>
<@$getChannelVar[p2]>
<@$getChannelVar[p3]>
<@$getChannelVar[p4]>
<@$getChannelVar[p5]>
<@$getChannelVar[p6]>
<@$getChannelVar[p7]>]
$endelseIf
$elseif[$getChannelVar[sum]==8]
$description[Очередь:
<@$getChannelVar[p1]>
<@$getChannelVar[p2]>
<@$getChannelVar[p3]>
<@$getChannelVar[p4]>
<@$getChannelVar[p5]>
<@$getChannelVar[p6]>
<@$getChannelVar[p7]>
<@$getChannelVar[p8]>]
$endelseIf
$elseif[$getChannelVar[sum]==9]
$description[Очередь:
<@$getChannelVar[p1]>
<@$getChannelVar[p2]>
<@$getChannelVar[p3]>
<@$getChannelVar[p4]>
<@$getChannelVar[p5]>
<@$getChannelVar[p6]>
<@$getChannelVar[p7]>
<@$getChannelVar[p8]>
<@$getChannelVar[p10]>]
$endelseIf

$endif


   

$onlyif[$voiceid[$authorid]!=;{"embeds": "{newEmbed:{color:FFFFFF}{description:Что-бы просмотреть очередь вам необходимо зайти в голосовой канал}}", "ephemeral" : true, "options" : { "interaction" : false}}]


$onlyIf[$message[1]==#EQUAL#q;]

$onlyForChannels[916408087466889235;916408087689195554;916408087689195559;916408087840194584;]


`
}