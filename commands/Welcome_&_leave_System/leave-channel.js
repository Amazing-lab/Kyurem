module.exports = [{
    name:"set-leave",
    usage: "set-leave #mention a channel",
	description: "set leave channel",
  aliases: ['leavechannel','leave'],
   code: `$title[Leave Channel]
$description[<a:sucessCheck:1172559094213775381> Successfully set the Leave channel to <#$mentionedChannels[1]>]
$footer[Requested by $username;$userAvatar[$authorID]]
$addTimesTamp
$color[$getVar[color]]
$setguildVar[leavechannel;$mentionedChannels[1]]

$onlyif[$channelExists[$findChannel[$message[1];false]]==true;<a:error:1171148997918982155> **$username** You didn't use the command the right 
way ( \`$getguildvar[prefix]$commandname < #channel >\` )]

$onlyIf[$hasPerms[$guildid;$authorid;managechannels]==true;<a:error:1171148997918982155> **You are missing the \`managechannels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannels]==true;<a:error:1171148997918982155> **I am missing the \`managechannels\` permission**]
`
}]


