module.exports = {
    name:"2",
    $if:"v4",
    type: "interaction", 
    prototype: "button",
    code: `
    $setChannelVar[Rust;$sum[$getChannelVar[Rust];1]]


`}