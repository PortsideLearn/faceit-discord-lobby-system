module.exports = {
    name:"4",
    $if:"v4",
    type: "interaction", 
    prototype: "button",
    code: `

    $setServerVar[Province;$sum[$getChannelVar[Province];1]]


`}