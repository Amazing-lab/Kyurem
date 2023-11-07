module.exports = [{
name:"set-leaveimage",
    usage: "set-leaveimage image url",
	description: "set leave image",
  aliases: ['leaveimage','leave-image'],
   code: `
   $setGuildVar[leaveimage;$message]
$title[LOGS]
$description[Leave image updated by **$username**:
$message
]
$footer[Logging Commands]
$color[$getVar[color]]

$onlyIf[$isValidLink[$message]==true;$getguildVar[error] **$username Invalid image link provided**]
$onlyIf[$getguildVar[leavechannel]!=undefined;$getguildVar[error] **$username The join channel has not been setup yet**]
$onlyIf[$hasPerms[$guildid;$authorid;managechannels]==true;$getguildVar[error] **You are missing the \`managechannels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannels]==true;$getguildVar[error] **I am missing the \`manage channels\` permission**]`
}]
  