module.exports = [{
    name:"set-welcome",
    usage: "set-welcome #mention a channel",
	description: "set welcome channel",
  aliases: ['welcomechannel','welcome'],
   code: `
   $title[Welcome Channel]
$description[<a:sucessCheck:1172559094213775381> Successfully the set Welcome channel to <#$mentionedChannels[1]>.]
$footer[Requested by $userName;$userAvatar[$authorID]]
$addTimesTamp
$color[#303136]
$color[$getVar[color]]
$setguildVar[welchannel;$mentionedChannels[1]]

$onlyif[$channelExists[$findChannel[$message[1];false]]==true;<a:error:1171148997918982155> **$username** You didn't use the command the right 
way ( \`$getguildvar[prefix]$commandname < #channel >\` )]

$onlyIf[$hasPerms[$guildid;$authorid;managechannels]==true;<a:error:1171148997918982155> **You are missing the \`managechannels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannels]==true;<a:error:1171148997918982155> **I am missing the \`managechannels\` permission**]

`
}]   