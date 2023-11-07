
module.exports = [{
    name: "kick",
    aliases: ["KICK", "Kick"],
    code: `
  $kick[$guildID;$findMember[$message[1];false];$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided.];false;$messageSlice[1]]]
  

$title[Member Kicke...!]
$description[
<@$findMember[$message[1];false]> has been **kicked.** Reason: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1]
]
$color[$getVar[color]]
$addtimestamp

  $onlyPerms[kickmembers;{newEmbed{description:<a:error:1171148997918982155>  You do not have \`KICK_MEMBERS\` permission.}}{extraOptions:{delete:5s}}]

  $onlyIf[$hasPerms[$guildID;$clientID;kickmembers]==true;<a:error:1171148997918982155>  I do not have \`KICK_MEMBERS\` permission.{extraOptions:{delete:5s}}]

  $onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];<a:error:1171148997918982155>  The user has higher role than me.{extraOptions:{delete:5s}}]

  $onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];<a:error:1171148997918982155>  You can't kick the person that has higher role position than you.{extraOptions:{delete:5s}}]
  $onlyIf[$findUser[$message[1];true]!=$authorID;<:Huh:1171150436355539047> Do not try to do awkward things like kicking yourself.{extraOptions:{delete:5s}}]
  $onlyIf[$memberExists[$findUser[$message[1];false]]==true;The user is not in the server.{extraOptions:{delete:5s}}]
  $onlyIf[$message[1]!=;<a:error:1171148997918982155>  The correct usage is \`kick [mention/user id] (reason)\`]
`
}]