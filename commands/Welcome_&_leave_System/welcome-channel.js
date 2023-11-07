module.exports = [{
    name:"set-welcome",
    usage: "set-welcome #mention a channel",
	description: "set welcome channel",
  aliases: ['welcomechannel','welcome'],
   code: `
   $title[New Welcome Channel]
$description[Set the Welcome channel to <#$mentionedChannels[1]>.]
$footer[Logging Commands]
$color[$getVar[color]]
$setguildVar[welchannel;$mentionedChannels[1]]
$onlyPerms[manageguild; :x: You need manage server permission to use this command]
`
}]   