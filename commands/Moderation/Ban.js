module.exports = [{
    name: "ban",
    aliases: ["BAN", "Ban"],
    code: `

$ban[$guildID;$findMember[$message[1];false];7;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1]]]


$title[Member Banded...!]
$description[>>>
<@$replaceText[$replaceText[$findMember[$message[1];false];<@;];>;]> has been **banned** by <@$authorID>
**Reason:** \` $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1]
 \`] 
 $color[$getVar[color]]
$addTimestamp

$onlyPerms[banmembers;Uh oh...You do not have \`BAN_MEMBERS\` permission to use this command.{extraOptions:{delete:5s}}]
$onlyIf[$hasPerms[$guildID;$clientID;banmembers]==true;I do not have \`BAN_MEMBERS\` permission.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$clientID]]!=$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];<a:error:1171148997918982155> I can't ban someone same highest role as mine.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];<a:error:1171148997918982155> The user has higher role than me.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];<a:error:1171148997918982155> The user has higher role than you.{extraOptions:{delete:5s}}]
$onlyIf[$findUser[$message[1];true]!=$authorID;<:Huh:1171150436355539047> Do not try to do awkward things like banning yourself.{extraOptions:{delete:5s}}]



$onlyIf[$memberExists[$findUser[$message[1];false]]==true;The user is not in the server.{extraOptions:{delete:5s}}]
$onlyIf[$message[1]!=;<a:error:1171148997918982155> Correct usage is \`ban [mention/user ID] (reason)\`]

$onlyIf[$isBanned[$guildID;$findUser[$message[1];yes]]!=true;<:vulpix_huh:1171150898093887539> This user is already banned]

`
}]
