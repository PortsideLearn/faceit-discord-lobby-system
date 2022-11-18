module.exports = {
 name:"$alwaysExecute",
$if:"v4",

  code: `
$onlyif[$voiceid[$authorID]!=;{"embeds": "{newEmbed:{color:FFFFFF}{description:Что-бы начать голосование за очистку очереди вам необходимо зайти в голосовой канал}}", "ephemeral" : true, "options" : { "interaction" : false}}]

$onlyif[$getUserVar[rhstart]==0;{"embeds": "{newEmbed:{color:FFFFFF}{description:Голосование уже начато}}", "ephemeral" : true, "options" : { "interaction" : false}}]

$onlyIf[$argsCount>1;Укажите причину рехоста]

$setChannelVar[rhstart;1]
$color[00cc66]
$description[
<@$authorID> начал голосование за очистку очереди
Причина: $message
Для очистки необходимо 6 голосов !

]
$addButton[1;✔;success;rehosting2;no;]

$onlyif[$getChannelVar[rhstart]!=1;{"embeds": "{newEmbed:{color:FFFFFF}{description:Голосование уже начато}}", "ephemeral" : true, "options" : { "interaction" : false}}]





$onlyIf[$message[1]==#EQUAL#rh;]

$onlyForChannels[916408087466889235;916408087689195554;916408087689195559;916408087840194584;]
`
}