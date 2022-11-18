module.exports = {
  $if:"v4",

  
  name:"$alwaysExecute",
  code: `

$color[ff1919]
$if[$getChannelVar[p1]==$authorID]
$setChannelVar[p1;0] 
$setUserVar[userj;0]
$description[[$getChannelVar[sum]/10] <@$authorID> вышел из очереди]
$setChannelVar[sum;$sub[$getChannelVar[sum];1]]

$elseif[$getChannelVar[p2]==$authorID]
$setChannelVar[p2;0] 
$setUserVar[userj;0]
$description[[$getChannelVar[sum]/10] <@$authorID> вышел из очереди]
$setChannelVar[sum;$sub[$getChannelVar[sum];1]]
$endelseIf
$elseif[$getChannelVar[p3]==$authorID]
$setChannelVar[p3;0]
$setUserVar[userj;0]
$description[[$getChannelVar[sum]/10] <@$authorID> вышел из очереди]
$setChannelVar[sum;$sub[$getChannelVar[sum];1]]
$endelseIf
$elseif[$getChannelVar[p4]==$authorID]
$setChannelVar[p4;0]
$setUserVar[userj;0]
$description[[$getChannelVar[sum]/10] <@$authorID> вышел из очереди]
$setChannelVar[sum;$sub[$getChannelVar[sum];1]]
$endelseIf
$elseif[$getChannelVar[p5]==$authorID]
$setChannelVar[p5;0] 
$setUserVar[userj;0]
$description[[$getChannelVar[sum]/10] <@$authorID> вышел из очереди]
$setChannelVar[sum;$sub[$getChannelVar[sum];1]]
$endelseIf
$elseif[$getChannelVar[p6]==$authorID]
$setChannelVar[p6;0] 
$setUserVar[userj;0]
$description[[$getChannelVar[sum]/10] <@$authorID> вышел из очереди]
$setChannelVar[sum;$sub[$getChannelVar[sum];1]]
$endelseIf
$elseif[$getChannelVar[p7]==$authorID]
$setChannelVar[p7;0] 
$setUserVar[userj;0]
$description[[$getChannelVar[sum]/10] <@$authorID> вышел из очереди]
$setChannelVar[sum;$sub[$getChannelVar[sum];1]]
$endelseIf
$elseif[$getChannelVar[p8]==$authorID]
$setChannelVar[p8;0] 
$setUserVar[userj;0]
$description[[$getChannelVar[sum]/10] <@$authorID> вышел из очереди]
$setChannelVar[sum;$sub[$getChannelVar[sum];1]]
$endelseIf
$elseif[$getChannelVar[p9]==$authorID]
$setChannelVar[p9;0] 
$setUserVar[userj;0]
$description[[$getChannelVar[sum]/10] <@$authorID> вышел из очереди}};;;;yes]
$setChannelVar[sum;$sub[$getChannelVar[sum];1]]
$endelseIf
$elseif[$getChannelVar[p10]==$authorID]
$setChannelVar[p10;0] 
$setUserVar[userj;0]
$description[[$getChannelVar[sum]/10] <@$authorID> вышел из очереди}};;;;yes]
$setChannelVar[sum;$sub[$getChannelVar[sum];1]]
$endelseIf

$elseif[$getChannelVar[p10]!=0]
$color[FFFFF]
$title[Ошибка]
$description[Вы не можете покинуть игру во время распределения игроков/выбора карты.]
$endelseIf



$endif
$onlyIf[$getUserVar[userj]!=0;{"embeds": "{newEmbed:{color:FFFFFF}{description:Вы не находитесь в очереди.}}", "ephemeral" : true, "options" : { "interaction" : false}}]



$onlyif[$voiceid[$authorid]!=;{"embeds": "{newEmbed:{color:FFFFFF}{description:Зайдите в голосовой канал, чтобы отключиться.}}", "ephemeral" : true, "options" : { "interaction" : false}}]

$onlyIf[$message[1]==#EQUAL#l;]


$onlyForChannels[916408087466889235;916408087689195554;916408087689195559;916408087840194584;]
`


}