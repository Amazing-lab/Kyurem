module.exports = [{
    name:"set-leavemsg",
    usage: "set-leavemsg your welcome message",
	description: "set leave message",
  aliases: ['leavecmessage','leave-msg'],
   code: `
   
   $setGuildVar[leavemsg;$message]
$title[Leave Message]
$description[<a:sucessCheck:1172559094213775381> Leave Message successfully updated by **$username**:
$message
]
$footer[Requested by $username;$useravatar[$authorID]]
$addTimestamp
$color[$getVar[color]]

$onlyIf[$message!=;<a:error:1171148997918982155> **Invaild usages ! ( \`$getguildvar[prefix]$commandname < message >\` )**]
$onlyIf[$hasPerms[$guildid;$authorid;managechannels]==true;<a:error:1171148997918982155> **You are missing the \`managechannels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannels]==true;<a:error:1171148997918982155> **I am missing the \`manage channels\` permission**]`

}]
