module.exports = {
    name:"15",
    $if:"v4",
    type: "interaction", 
    prototype: "button",
    code: `
    $setChannelVar[Breeze;$sum[$getChannelVar[Breeze];1]]


`}