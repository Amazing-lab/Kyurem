module.exports = [{
    name:"set-welcomeimage",
    usage: "set-welcomeimage image url",
	description: "set welcome image",
  aliases: ['set-welcomeimage','welcome-image'],
   code: `$setGuildVar[welimage;$message]
$title[LOGS]
$description[Welcome image updated by **$username**:
$message
]
$footer[Logging Commands]
$color[$getVar[color]]
$onlyPerms[manageguild; :x: You need manage server permission to use this command]
   `
}]
