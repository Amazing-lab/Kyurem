module.exports = [{
  name: "ping",
  code: `
  $title[📌 Pinging...!]
  $description[>>> - ping:- \` $pingMS \`
- Database Ping:- \` $databasePingMS \`
- Response Ping:- \` $messagePingMS \`]
$color[$getvar[color]]
$footer[Requested by $username;$useravatar[$authorid]]
$addtimestamp`
}]