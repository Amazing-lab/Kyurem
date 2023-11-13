module.exports = [{
  name: "help",
  code: `
  $title[$username Needs help..!]
  $description[
  A customized bot fot $guildname made by <a:1hearts:1172805289523810307> with **shone321**
\` All of the categories given below \`
>>> <a:Blue_Dot:1172803704005607485> **MODERATION**
<a:Blue_Dot:1172803704005607485> **GREETING**
<a:Blue_Dot:1172803704005607485> **GIVEAWAY**
<a:Blue_Dot:1172803704005607485> **UTILITY**

  
  ]
  $footer[Requested by $username;$useravatar[$authorid]]
  $color[$getvar[color]]

   $addSelectMenu[1;help;Click for help!;1;1;false; Moderation:Moderation commands! :mod:false:<a:moderation:1173603459061264487>;Greeting: Greeting commands:gret:false:<a:welcome:1173604566575632539>;
Giveaway:Giveaway commands:gw:false:<a:giveaway_box:1172714418107318333>;Utility:Utility commands:util:false:<a:utility:1173606166186709072>]
   `},
{
    name: "help",
    type: "interaction", // clarifying that this command is an Interaction
    prototype: "selectMenu",
    code: `
     $interactionReply[;{newEmbed:{title: Moderation commands!!}{description:\`\`\`js
[ ] => must be add!
< > => Optional! \`\`\`
>>> $get[dot] **__BAN__**
usage:- \` $getguildvar[prefix]ban [mention/user ID] <reason> \`

$get[dot] **__UNBAN__**
usage:- \` $getGuildvar[prefix]unban [user ID] <reason> \`

$get[dot] **__KICK__**
usage:- \` $getGuildvar[prefix]kick [mention/user ID] <reason> \`

$get[dot] **__TIMEOUT__**
usage:- \`$getGuildVar[prefix]timeout [mention/user ID] [time] <reason> \`

$get[dot] **__UNTIMEOUT__**
usage:- \` $getguildvar[prefix]untimeout [mention/user ID] <reason> \`}{color:$getvar[color]}{footer: Requested by $username:$useravatar[$authorid]}{timestamp};;;everyone;true]
$let[dot;<a:Blue_Dot:1172803704005607485>]
     $onlyIf[$interactionData[values[0]]==mod;]`
},
{
  name: "help",
  type: "interaction", // clarifying that this command is an Interaction
   prototype: "selectMenu",
   code: `
$interactionReply[;{newEmbed:{title: Moderation commands!!}{description:\`\`\`js
[ ] => must be add!
< > => Optional! \`\`\`
$get[dot] **__WELCOME CHANNEL__**
usage:- \` $getguildvar[prefix]set-welcome [mention/channel ID] \`

$get[dot] **__WELCOME MESSAGE__**
usage:- \` $getGuildvar[prefix]set-welcomemsg [message] \`

$get[dot] **__WELCOME IMAGE__**
usage:- \` $getguildvar[prefix]set-welcomeimage [image url] \`

$get[dot] **__LEAVE CHANNEL__**
usage:- \` $getGuildVar[prefix]set-leave [mention/channel ID] \`

$get[dot] **__LEAVE MESSAGE__**
usage:- \` $getguildvar[prefix]set-leavemsg [message] \`

$get[dot] **__LEAVE IMAGE__**
usage:- \` $getGuildvar[prefix]set-leaveimage [image url] \`
}{color:$getvar[color]}{footer: Requested by $username:$useravatar[$authorid]}{timestamp};;;everyone;true]
$let[dot;<a:Blue_Dot:1172803704005607485>]         $onlyIf[$interactionData[values[0]]==gret;]`},
      
{
  name: "help",
  type: "interaction", // clarifying that this command is an Interaction
  prototype: "selectMenu",
  code: `
$interactionReply[;{newEmbed:{title: Moderation commands!!}{description:\`\`\`js
[ ] => must be add!
< > => Optional! \`\`\`
$get[dot] **__GIVEAWAY START__**
usage:- \` $getGuildvar[prefix]gstart [time (like 1m/1h/1d)] [winner] [prize] \`

$get[dot] **__GIVEAWAY END__**
usage:- \` $getguildvar[prefix]gend [message ID] \`

$get[dot] **__GIVEAWAY REROLL__**
usage:- \` $getguildvar[prefix]greroll [message ID] \`

$get[dot] **__GIVEAWAY CANCEL__**
usage:- \` $getguildvar[prefix]gcancel [message ID] [reason] \`

$get[dot] **__GIVEAWAY LIST__**
usage:- \` $getguildvar[prefix]glist \`
}{color:$getvar[color]}{footer: Requested by $username:$useravatar[$authorid]}{timestamp};;;everyone;true]

$let[dot;<a:Blue_Dot:1172803704005607485>]  $onlyIf[$interactionData[values[0]]==gw;]
`},
        
{
    name: "help",
    type: "interaction", // clarifying that this command is an Interaction
    prototype: "selectMenu",
    code: `
     $interactionReply[;{newEmbed:{title: Moderation commands!!}{description:\`\`\`js
[ ] => must be add!
< > => Optional! \`\`\`
$get[dot] **__BOT'S PING__**
usage:- \` $getguildvar[prefix]ping \`
}{color:$getvar[color]}{footer: Requested by $username:$useravatar[$authorid]}{timestamp};;;everyone;true]

$let[dot;<a:Blue_Dot:1172803704005607485>]
     $onlyIf[$interactionData[values[0]]==util;]
     `}]