module.exports = [{
    name:"set-welcomemsg",
    usage: "set-welcomemsg your welcome message",
	description: "set welcome message",
  aliases: ['welcomemessage','welcome-msg'],
   code: `
   $setGuildVar[welmsg;$message]
$title[LOGS]
$description[Welcome Message updated by **$username**:
$message
]
$footer[Logging Commands]
$color[$getVar[color]]
$onlyPerms[manageguild; :x: You need manage server permission to use this command]
   
`
}]

