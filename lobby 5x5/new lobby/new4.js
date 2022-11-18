module.exports = {
  name:"pick4",
  $if:"v4",
  type: "interaction", 
  prototype: "button",
    code: `
  
    $if[$getChannelVar[sumRH]>7]



    $setChannelVar[mapcount;0]
    
    $setChannelVar[sandstone;0]
    $setChannelVar[rust;0]
    $setChannelVar[sakura;0]
    $setChannelVar[province;0]
    $setChannelVar[zone;0]
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
    $setCHannelVar[rhtab;0]
    
    $setChannelVar[userj;0;$findUser[$getChannelVar[p10]]]
    $setChannelVar[userj;0;$findUser[$getChannelVar[p9]]]
    $setChannelVar[userj;0;$findUser[$getChannelVar[p8]]]
    $setChannelVar[userj;0;$findUser[$getChannelVar[p7]]]
    $setChannelVar[userj;0;$findUser[$getChannelVar[p6]]]
    $setChannelVar[userj;0;$findUser[$getChannelVar[p5]]]
    $setChannelVar[userj;0;$findUser[$getChannelVar[p4]]]
    $setChannelVar[userj;0;$findUser[$getChannelVar[p3]]]
    $setChannelVar[userj;0;$findUser[$getChannelVar[p2]]]
    $setChannelVar[userj;0;$findUser[$getChannelVar[p1]]]
    
    $setUserVar[rhcheck;0;$findUser[$getChannelVar[p5]]]
    $setUserVar[rhcheck;0;$findUser[$getChannelVar[p4]]]
    $setUserVar[rhcheck;0;$findUser[$getChannelVar[p3]]]
    $setUserVar[rhcheck;0;$findUser[$getChannelVar[p2]]]
    $setUserVar[rhcheck;0;$findUser[$getChannelVar[p1]]]
    $setUserVar[rhcheck;0;$findUser[$getChannelVar[p6]]]
    $setUserVar[rhcheck;0;$findUser[$getChannelVar[p7]]]
    $setUserVar[rhcheck;0;$findUser[$getChannelVar[p8]]]
    $setUserVar[rhcheck;0;$findUser[$getChannelVar[p9]]]
    $setUserVar[rhcheck;0;$findUser[$getChannelVar[p10]]]
    
    $setChannelVar[pick1; ]
    $setChannelVar[pick2; ]
    $setChannelVar[pick3; ]
    $setChannelVar[pick4; ]
    $setChannelVar[pick5; ]
    $setChannelVar[pick6; ]
    $setChannelVar[pick7; ]
    $setChannelVar[pick8; ]
    $setChannelVar[pick9; ]
    $setChannelVar[pick10; ]
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
    
    
    $setChannelVar[pickmap1;]
    $setChannelVar[pickmap2;]
    $setChannelVar[pickmap3;]
    $setChannelVar[pickmap4;]
    $setChannelVar[pickmap5;]
    $setChannelVar[sumGame;0]
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
    $setChannelVar[sumRH;0]
  $endif

  
  `
  
  }