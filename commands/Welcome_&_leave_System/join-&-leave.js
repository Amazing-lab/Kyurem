module.exports = [{
  type: "join",
  $if: "old",
  channel: "$getGuildVar[welchannel]",
  code: `
  <@$authorID>
$description[1;<@$authorID> $getguildVar[welmsg]
***User Information***
_Account Created :-_ <t:$truncate[$divide[$creationDate[$authorID;ms];1000]]:F> 
]
$if[$getGuildVar[welimage]!=]
$image[1;$getguildVar[welimage]]
$endif
$color[$getVar[color]]`
},{
type: "leave",
$if: "old",
channel: "$getGuildrVar[leavechannel]",
code: `$description[1;<@$authorID> , $getguildVar[leavemsg]]
$if[$getguildvar[leaveimage]!=]
$image[1;$getgildVar[leaveimage]]
$color[$getVar[color]]

`}]
  

