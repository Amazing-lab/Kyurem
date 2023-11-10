const { AoiClient, LoadCommands } = require("aoi.js");

const aoicanvas = require("aoi.canvas");

const bot = new AoiClient({

    token: process.env.Token,

    prefix: "$getGuildVar[prefix]",

    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildPresences", "GuildMembers"],

    events: ["onMessage", "onInteractionCreate", "onJoin", "onLeave"],

    database: {

        type: "aoi.db",

        db: require("@akarui/aoi.db"),

        tables: ["main"],

        path: "./database/",

        extraOptions: {

            dbType: "KeyValue"

        }

    }

});


const { Util } = require('aoi.js');

const { parse, createAst, parseChatInputOptions } = require('aoi.parser');

const {

    parseComponents,

    parseFiles,

    parseExtraOptions

} = require('aoi.parser/components');

 

Util.parsers.ErrorHandler = parse;

 

Util.parsers.ComponentParser = (data) => {

    return createAst(data).children.map(parseComponents);

}

 

Util.parsers.FileParser = (data) => {

    return createAst(data).children.map(parseFiles);

}

 

Util.parsers.OptionsParser = (data) => {

    return createAst(data).children.map(parseExtraOptions);

}

 

Util.parsers.SlashOptionsParser = parseChatInputOptions;



const loader = new LoadCommands(bot);

loader.load(bot.cmd, "./commands/")

require('./handler/variables.js')(bot);






  