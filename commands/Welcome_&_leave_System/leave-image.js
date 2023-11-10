module.exports = [{
name:"set-leaveimage",
    usage: "set-leaveimage image url",
	description: "set leave image",
  aliases: ['leaveimage','leave-image'],
   code: `
   $setGuildVar[leaveimage;$message]
$title[Leave Image]
$description[<a:sucessCheck:1172559094213775381> Successfully set the Leave image  by **$username**:
$message
]
$footer[Requested by $username;$useravatar[$authorid]]
$addTimesTamp
$color[$getVar[color]]

$onlyIf[$isValidLink[$message]==true;$getguildVar[error] **$username Invalid image link provided**]
$onlyIf[$getguildVar[leavechannel]!=undefined;$getguildVar[error] **$username The join channel has not been setup yet**]
$onlyIf[$hasPerms[$guildid;$authorid;managechannels]==true;$getguildVar[error] **You are missing the \`managechannels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannels]==true;$getguildVar[error] **I am missing the \`manage channels\` permission**]`
}]
  