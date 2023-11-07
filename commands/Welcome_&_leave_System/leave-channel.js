module.exports = [{
    name:"set-leave",
    usage: "set-leave #mention a channel",
	description: "set leave channel",
  aliases: ['leavechannel','leave'],
   code: `$title[New Leave Channel]
$description[Set the Leave channel to <#$mentionedChannels[1]>]
$footer[Logging Commands]
$color[$getVar[color]]
$setguildVar[leavechannel;$mentionedChannels[1]]

$onlyif[$channelExists[$findChannel[$message[1];false]]==true;$getguildVar[error] **$username** You didn't use the command the right 
way ( \`$getguildvar[prefix]$commandname < #channel >\` )]

$onlyIf[$hasPerms[$guildid;$authorid;managechannels]==true;$getguildVar[error] **You are missing the \`managechannels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannels]==true;$getguildVar[error] **I am missing the \`managechannels\` permission**]
`
}]


