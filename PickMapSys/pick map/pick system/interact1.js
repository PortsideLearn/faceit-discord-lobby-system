module.exports = {
    name:"11",
    $if:"v4",
    type: "interaction", 
    prototype: "button",
    code: `
    $setChannelVar[Sandstone;$sum[$getChannelVar[Sandstone];1]]


`}