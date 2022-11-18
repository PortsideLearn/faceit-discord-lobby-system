module.exports = {
    name:"3",
    $if:"v4",
    type: "interaction", 
    prototype: "button",
    code: `

    $setChannelVar[Zone;$sum[$getChannelVar[Zone];1]]


`}