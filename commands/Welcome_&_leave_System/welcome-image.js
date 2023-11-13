module.exports = [{
    name:"set-welcomeimage",
    usage: "set-welcomeimage image url",
	description: "set welcome image",
  aliases: ['set-welimage','welcome-image'],
   code: `$setGuildVar[welimage;$message]
$title[Welcome Channel]
$description[<a:sucessCheck:1172559094213775381> Welcome image updated by **$username**:
$message
]
$footer[Requested by $userName;$useravatar[$authorID]]
$color[$getVar[color]]
$onlyIf[$isValidLink[$message]==true;<a:error:1171148997918982155>**$username Invalid image link provided**]
$onlyIf[$getguildVar[leavechannel]!=undefined;<a:error:1171148997918982155> **$username The join channel has not been setup yet**]
$onlyIf[$hasPerms[$guildid;$authorid;managechannels]==true;<a:error:1171148997918982155> **You are missing the \`managechannels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannels]==true;<a:error:1171148997918982155> **I am missing the \`manage channels\` permission**]`}]
   `
}]
