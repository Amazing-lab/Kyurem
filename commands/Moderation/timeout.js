
module.exports = [{
    name: "timeout",
    aliases: ["tt", "tiout"],
    code: `



$sendMessage[{newEmbed:{title:Member Timeouted....!}{description:> <@$findMember[$message[1];false]> has been **timeouted** by <@$authorID>. 
> Reason: \` $replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;No reason provided];false;$messageSlice[2]] \`}{footer: Requested by $username | Ends at:$userAvatar[$authorID]}{timestamp:$get[end]}}]




$let[end;$timeoutMember[$guildID;$findMember[$message[1];false];$message[2];true;$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;No reason provided];false;$messageSlice[2]]]] 

$onlyPerms[moderatemembers;<a:error:1171148997918982155> You do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]

$onlyIf[$hasPerms[$guildID;$clientID;moderatemembers]==true;<a:error:1171148997918982155> I do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];<a:error:1171148997918982155> The user's role is higher than me.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];<a:error:1171148997918982155> You cannot timeout a person who has higher than you.{extraOptions:{delete:5s}}]
$onlyIf[$parseTime[$message[2]]!=-1;<a:error:1171148997918982155> Invalid time. The time must be like \`1m / 1h / 1d\`{extraOptions:{delete:5s}}]
$onlyIf[$findUser[$message[1];true]!=$authorID;<:Huh:1171150436355539047> Do not try to do awkward things like timeouting yourself. {extraOptions:{delete:5s}}]
$onlyIf[$message[1]!=;<a:error:1171148997918982155> The correct usage is \`timeout [mention/user id] [time] (reason)\` {extraOptions:{delete:5s}}]
$onlyIf[$memberExists[$findUser[$message[1];false]]==true;<a:error:1171148997918982155> The user is not in the server.{extraOptions:{delete:5s}}]
$onlyIf[$message[2]!=;<a:error:1171148997918982155> The correct usage is \`timeout [mention/user id] [time] (reason)\` {extraOptions:{delete:5s}}]`
}]