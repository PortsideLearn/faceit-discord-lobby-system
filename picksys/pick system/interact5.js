module.exports = {
    name:"5",
    $if:"v4",
    type: "interaction", 
    prototype: "button",
    code: `

    $setChannelVar[Breeze;$sum[$getChannelVar[Breeze];1]]


`}