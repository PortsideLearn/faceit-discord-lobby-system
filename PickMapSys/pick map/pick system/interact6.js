module.exports = {
    name:"16",
    $if:"v4",
    type: "interaction",
    prototype: "button",
    code: `
    $setChannelVar[Sakura;$sum[$getChannelVar[Sakura];1]]


`}