
module.exports = [{
    name: "unban",
    aliases: ["UNBAN", "Unban"],
    code: `
    $unban[$guildID;$findUser[$message[1];false];$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1]]]
    

$title[Member Unbaned...!]
$description[>>>
<@$findUser[$message[1];false]> has been **unbanned** by <@$authorID>.
**Reason:** \` $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1] \`]]
$color[$getvar[color]]
$addTimesTamp
    $onlyIf[$isBanned[$guildID;$findMember[$message[1];false;$guildID]]==true;{newEmbed:{description:Process cancelled.\n**Reason:** User not on the banlist. Please cross check the ID.}{footer:Moderator#COLON# $username:$userAvatar[$authorID]}{timestamp}}]
    $onlyPerms[banmembers;<a:error:1171148997918982155> You do not have \`BAN_MEMBERS\` permission.{extraOptions:{delete:5s}}]
    $onlyIf[$hasPerms[$guildID;$clientID;banmembers]==true;<a:error:1171148997918982155> I do not have \`BAN_MEMBERS\` permission.{extraOptions:{delete:5s}}]
    $onlyIf[$findMember[$message[1];false]!=$authorID;<:Huh:1171150436355539047> Do not try to do awkward things like unbanning yourself.{extraOptions:{delete:5s}}]
    $onlyIf[$message[1]!=;<a:error:1171148997918982155> Correct usage is \`unban [user id] (reason)\`.{extraOptions:{delete:5s}}]
    `
}]
