
module.exports = [{
    name: "remove-timeout",
    aliases: ["untimeout"],
    code: `


$timeoutMember[$guildID;$findMember[$message[1];false];0;true;$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;No reason provided];false;$messageSlice[2]]]


$title[Member Untimeouted..!]
$description[
> <@$findMember[$message[1];false]>'s timeout has been **removed** by <@$authorID>.
> Reason: \` $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1]]\`]
$color[$getvar[color]]
$footer[Requested by $username;$userAvatar[$authorID]]
$addTimestamp


$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];false]]];<a:error:1171148997918982155> The user has higher role than me.{extraOptions:{delete:5s}}]
$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];false]]];<a:error:1171148997918982155> The user has higher role than me.{extraOptions:{delete:5s}}]
$onlyPerms[moderatemembers;<a:error:1171148997918982155> You do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]
$onlyIf[$hasPerms[$guildID;$clientID;moderatemembers]==true;<a:error:1171148997918982155> I do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]
$onlyIf[$memberExists[$findMember[$message[1];false]]==true;<a:error:1171148997918982155> The user is not in server.{extraOptions:{delete:5s}}]
$onlyIf[$findMember[$message[1];false]!=$authorID;<:Huh:1171150436355539047> Do not try to do awkward things like untimeouting yourselves.{extraOptions:{delete:5s}}]
$onlyIf[$message[1]!=;<a:error:1171148997918982155> Correct usage is \`remove-timeout [mention/user id] (reason)\`{extraOptions:{delete:5s}}]
$onlyIf[$isTimeout[$guildID;$findMember[$message[1];false]]==true;{newEmbed:{description: **Process cancelled!**\n\n**Reason:** The user isn't in the timeout list.}{timestamp}{footer:Moderator#COLON# $username:$userAvatar[$authorID]}}]
`
}]
