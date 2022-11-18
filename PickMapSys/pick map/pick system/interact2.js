module.exports = {
    name:"12",
    $if:"v4",
    type: "interaction", 
    prototype: "button",
    code: `
    $setChannelVar[Rust;$sum[$getChannelVar[Rust];1]]


`}