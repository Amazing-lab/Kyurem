module.exports = [{
    name:"set-welcomemsg",
    usage: "set-welcomemsg your welcome message",
	description: "set welcome message",
  aliases: ['welcomemessage','welcome-msg'],
   code: `
   $setGuildVar[welmsg;$message]
$title[Welcome Message]
$description[<a:sucessCheck:1172559094213775381> Welcome Message successfully updated by **$username**:
$message
]
$footer[Requested by $username;$useravatar[$authorID]]
$addtimestamp
$color[$getVar[color]]
$onlyIf[$message!=;<a:error:1171148997918982155> **Invaild usages ! ( \`$getguildvar[prefix]$commandname < message >\` )**]
$onlyIf[$hasPerms[$guildid;$authorid;managechannels]==true;$getguildVar[error] **You are missing the \`managechannels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannels]==true;$getguildVar[error] **I am missing the \`manage channels\` permission**]
   
`
}]

