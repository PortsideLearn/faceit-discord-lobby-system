module.exports = {
    name:"3",
    $if:"v4",
    type: "interaction", 
    prototype: "button",
    code:`

    $wait[10s]

    $if[$getChannelVar[Sandstone]>$math[($getChannelVar[Rust]+$getChannelVar[Zone]+$getChannelVar[Province]+$getChannelVar[Breeze]+$getChannelVar[Sakura])/3]]
    $interactionUpdate[;{newEmbed:{color:00FFC1}{description:В голосовании победила карта Sandstone}};;;;yes]
    $else
    $endif
    
    $if[$getChannelVar[Rust]>$math[($getChannelVar[Sandstone]+$getChannelVar[Zone]+$getChannelVar[Province]+$getChannelVar[Breeze]+$getChannelVar[Sakura])/3]]
    $interactionUpdate[;{newEmbed:{color:00FFC1}{description:В голосовании победила карта Rust}};;;;yes]
    $else
    $endif
    
    $if[$getChannelVar[Zone]>$math[($getChannelVar[Sandstone]+$getChannelVar[Rust]+$getChannelVar[Province]+$getChannelVar[Breeze]+$getChannelVar[Sakura])/3]]
    $interactionUpdate[;{newEmbed:{color:00FFC1}{description:В голосовании победила карта Zone 9}};;;;yes]
    $else
    $endif 
    
    $if[$getChannelVar[Province]>$math[($getChannelVar[Sandstone]+$getChannelVar[Rust]+$getChannelVar[Zone]+$getChannelVar[Breeze]+$getChannelVar[Sakura])/3]]
    $interactionUpdate[;{newEmbed:{color:00FFC1}{description:В голосовании победила карта Province}};;;;yes]
    $else
    $endif
    
    $if[$getChannelVar[Breeze]>$math[($getChannelVar[Sandstone]+$getChannelVar[Rust]+$getChannelVar[Zone]+$getChannelVar[Sakura])/3]]
    $interactionUpdate[;{newEmbed:{color:00FFC1}{description:В голосовании победила карта Breeze}};;;;yes]
    $else
    $endif
    
    $if[$getChannelVar[Sakura]>$math[($getChannelVar[Sandstone]+$getChannelVar[Rust]+$getChannelVar[Zone]+$getChannelVar[Breeze])/3]]
    $interactionUpdate[;{newEmbed:{color:00FFC1}{description:В голосовании победила карта Sakura}};;;;yes]
    $else
    $endif
`
}