module.exports = [{
    name:"set-leavemsg",
    usage: "set-leavemsg your welcome message",
	description: "set leave message",
  aliases: ['leavecmessage','leave-msg'],
   code: `
   
   $setGuildVar[leavemsg;$message]
$title[Leave Message]
$description[Leave Message updated by **$username**:
$message
]
$footer[Logging Commands]
$color[$getVar[color]]

$onlyIf[$message!=;<a:error:1171148997918982155> **Invaild usages ! ( \`$getguildvar[prefix]$commandname < message >\` )**]
$onlyIf[$hasPerms[$guildid;$authorid;managechannels]==true;$getguildVar[error] **You are missing the \`managechannels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannels]==true;$getguildVar[error] **I am missing the \`manage channels\` permission**]`

}]
