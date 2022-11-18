module.exports = {
  
  name:"$alwaysExecute",
  code: `

$setChannelVar[mapcount;0]
$setChannelVar[Sandstone;0]
$setChannelVar[Rust;0]
$setChannelVar[Sakura;0]
$setChannelVar[Province;0]
$setChannelVar[Zone;0]
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
$setChannelVar[sum;0]
$setChannelVar[teamct;]
$setChannelVar[teamt;]
$setChannelVar[pickid;0]
$setChannelVar[pickcount;1]
$setChannelVar[pp1;no]
$setChannelVar[pp2;no]
$setChannelVar[pp3;no]
$setChannelVar[pp4;no]
$setChannelVar[pp5;no]
$setChannelVar[pp6;no]
$setChannelVar[pp7;no]
$setChannelVar[pp8;no]
$setChannelVar[rhstart;0]
$setUserVar[rhcheck;0]
$setChannelVar[rhtab;0]


$setUserVar[userj;0;$findUser[$getChannelVar[p10]]]
$setUserVar[userj;0;$findUser[$getChannelVar[p9]]]
$setUserVar[userj;0;$findUser[$getChannelVar[p8]]]
$setUserVar[userj;0;$findUser[$getChannelVar[p7]]]
$setUserVar[userj;0;$findUser[$getChannelVar[p6]]]
$setUserVar[userj;0;$findUser[$getChannelVar[p5]]]
$setUserVar[userj;0;$findUser[$getChannelVar[p4]]]
$setUserVar[userj;0;$findUser[$getChannelVar[p3]]]
$setUserVar[userj;0;$findUser[$getChannelVar[p2]]]
$setUserVar[userj;0;$findUser[$getChannelVar[p1]]]


$setChannelVar[pick1;]
$setChannelVar[pick2;]
$setCHannelVar[pT;]
$setChannelVar[pCT;]
$setChannelVar[pickplayer1;no]
$setChannelVar[pickplayer2;no]
$setChannelVar[pickplayer3;no]
$setChannelVar[pickplayer4;no]
$setChannelVar[pickplayer5;no]
$setChannelVar[pickplayer6;no]
$setChannelVar[pickplayer7;no]
$setChannelVar[pickplayer8;no]

$setChannelVar[button1;]
$setChannelVar[button2;]
$setChannelVar[button3;]
$setChannelVar[button4;]
$setChannelVar[button5;]
$setChannelVar[button6;]
$setChannelVar[button7;]
$setChannelVar[button8;]

$setChannelVar[sumRH;0]

$setChannelVar[pickmap1;]
$setChannelVar[pickmap2;]
$setChannelVar[pickmap3;]
$setChannelVar[pickmap4;]
$setChannelVar[pickmap5;]
$setChannelVar[sumGame;0]



$description[Очередь была успешно очищена!]

$onlyIf[$message[1]==#EQUAL#clearq;]

$onlyForChannels[916408087466889235;916408087689195554;916408087689195559;916408087840194584;]
$onlyIf[$getUserVar[Admin]!=false;Недостаточно прав!]

`
}