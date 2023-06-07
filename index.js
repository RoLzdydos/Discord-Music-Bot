/*
Made By Wild Life Studio | ! ᜴💍|𝓹𝓸𝓸𝓻𝓲𝔂𝓪.𝔂𝓽𖧞༆❦#3333

discord.gg/tehran | discord.gg/8R8EUhBbyt

*/
const { LoadCommands, AoiClient } = require("aoi.js");
const { Manager } = require("@akarui/aoi.music");
const keepAlive = require(`./server`);
const { Util } = require('aoi.js');
require('./variables/variables')(bot);
const {
    AoiVoice,
    PlayerEvents,
    PluginName,
    Cacher,
    Filter,
  } = require(`@akarui/aoi.music`);
  

  const bot = new AoiClient({
    token: "Your Token Here",
    prefix: "w!",
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
      type: "aoi.db",
      db: require("aoi.db"),
      tables: ["main"],
      path: "./database/",
      extraOptions: {
        dbType: "KeyValue"
      }
  
    },

    suppressAllErrors: true
  
  })
  const loader = new LoadCommands(bot);
  loader.load(bot.cmd, "./commands/")
  
  const voice = new AoiVoice(bot, {
    requestOptions: {
      offsetTimeout: 0,
      soundcloudLikeTrackLimit: 200,
    },
  
  });
  loader.load(voice.cmds, "./voice/")
  voice.bindExecutor(bot.functionManager.interpreter);
  voice.addEvent(PlayerEvents.TRACK_START);
  voice.addEvent(PlayerEvents.TRACK_END);
  voice.addEvent(PlayerEvents.QUEUE_END);
  voice.addEvent(PlayerEvents.QUEUE_START);
  voice.addEvent(PlayerEvents.AUDIO_ERROR);
  voice.addEvent(PlayerEvents.TRACK_PAUSE);
  voice.addEvent(PlayerEvents.TRACK_RESUME);
  voice.addPlugin(PluginName.Cacher, new Cacher("disk" /* or "memory" */));
  voice.addPlugin(PluginName.Filter, new Filter({
    filterFromStart: false,
  }));
  