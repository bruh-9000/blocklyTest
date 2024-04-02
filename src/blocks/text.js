/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.

const triggeringItems = ["unitTouchesItem", "unitPickedAnItem", "unitStopsUsingAnItem", "unitAttacksUnit", "unitSelectsItem", "unitDroppedAnItem", "unitStartsUsingAnItem",
  "unitUsesItem"];

const triggeringPlayers = ["playerSendsChatMessage", "playerLeavesGame", "playerJoinsGame"];

const triggeringUnits = ["unitTouchesItem", "unitPickedAnItem", "unitTouchesProjectile", "unitStopsUsingAnItem", "unitAttacksUnit", "unitSelectsItem", "unitLeavesRegion",
  "unitDroppedAnItem", "unitEntersRegion", "unitAttributeBecomesFull", "unitStartsUsingAnItem", "unitUsesItem", "unitAttributeBecomesZero", "unitTouchesWall"];

const triggeringRegions = ["unitLeavesRegion", "unitEntersRegion"];

const triggeringProjectiles = ["unitTouchesProjectile"];

const secondTick = {
  "type": "secondtick",
  "message0": "every second",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const sendChatMessage = {
  "type": "sendchatmessage",
  "message0": "send chat message %1",
  "args0": [
    {
      "type": "input_value",
      "name": "message",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
};

const triggers = {
  "type": "triggers",
  "message0": "Triggers:",
  "inputsInline": true,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const script = {
  "type": "script",
  "message0": "Script:",
  "inputsInline": true,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const ifelse = {
  "type": "ifelse",
  "message0": "if %1 do %2 else %3",
  "args0": [
    {
      "type": "input_value",
      "name": "check",
      "check": "Boolean"
    },
    {
      "type": "input_statement",
      "name": "do1"
    },
    {
      "type": "input_statement",
      "name": "else1"
    }
  ],
  "colour": "#60B560",
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "",
  "helpUrl": ""
};

const pos = {
  "type": "pos",
  "message0": "pos %1 %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    }
  ],
  "output": "Pos",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const moveEntity = {
  "type": "moveentity",
  "message0": "move entity %1 %2 to pos %3",
  "args0": [
    {
      "type": "input_value",
      "name": "entity",
      "check": ["Unit", "Projectile", "Item"]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "pos",
      "check": "Pos"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#47A8D1",
  "tooltip": "",
  "helpUrl": ""
};

const triggeringPlayer = {
  "type": "triggeringplayer",
  "message0": "triggering player",
  "output": "Player",
  "colour": "#855CD6",
  "tooltip": "",
  "helpUrl": "",
  'extensions': [
    'triggering_player',
  ],
};

const owner = {
  "type": "owner",
  "message0": "player owner of unit %1",
  "args0": [
    {
      "type": "input_value",
      "name": "unit",
      "check": "Unit"
    }
  ],
  "colour": "#855CD6",
  "output": "Player",
  "tooltip": "",
  "helpUrl": ""
};

const triggeringUnit = {
  "type": "triggeringunit",
  "message0": "triggering unit",
  "output": "Unit",
  "colour": "#CF63CF",
  "tooltip": "",
  "helpUrl": "",
  'extensions': [
    'triggering_unit',
  ],
};

const selectedUnit = {
  "type": "selectedunit",
  "message0": "selected unit",
  "output": "Unit",
  "colour": "#CF63CF",
  "tooltip": "",
  "helpUrl": "",
  'extensions': [
    'unit_loop',
  ],
};

const lastCreatedUnit = {
  "type": "lastcreatedunit",
  "message0": "last created unit",
  "output": "Unit",
  "colour": "#CF63CF",
  "tooltip": "",
  "helpUrl": ""
};

const frameTick = {
  "type": "frametick",
  "message0": "every frame",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const serverShuttingDown = {
  "type": "servershuttingdown",
  "message0": "server shutting down",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const gameStart = {
  "type": "gamestart",
  "message0": "game start",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const onPostResponse = {
  "type": "onpostresponse",
  "message0": "on post response",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const playerSendsChatMessage = {
  "type": "playerSendsChatMessage",
  "message0": "player sends chat message",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const unitTouchesWall = {
  "type": "unitTouchesWall",
  "message0": "unit touches wall",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const unitUsesItem = {
  "type": "unitUsesItem",
  "message0": "unit uses item",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const unitAttributeBecomesZero = {
  "type": "unitAttributeBecomesZero",
  "message0": "unit attribute becomes zero",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const unitStartsUsingAnItem = {
  "type": "unitStartsUsingAnItem",
  "message0": "unit starts using an item",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const unitAttributeBecomesFull = {
  "type": "unitAttributeBecomesFull",
  "message0": "unit attribute becomes full",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const unitEntersRegion = {
  "type": "unitEntersRegion",
  "message0": "unit enters region",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const unitDroppedAnItem = {
  "type": "unitDroppedAnItem",
  "message0": "unit drops an item",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const unitSelectsItem = {
  "type": "unitSelectsItem",
  "message0": "unit selects an item",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const unitLeavesRegion = {
  "type": "unitLeavesRegion",
  "message0": "unit leaves region",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const unitAttacksUnit = {
  "type": "unitAttacksUnit",
  "message0": "unit attacks unit",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const unitStopsUsingAnItem = {
  "type": "unitStopsUsingAnItem",
  "message0": "unit stops using an item",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const unitTouchesProjectile = {
  "type": "unitTouchesProjectile",
  "message0": "unit touches projectile",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const unitPickedAnItem = {
  "type": "unitPickedAnItem",
  "message0": "unit picks up an item",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const unitTouchesItem = {
  "type": "unitTouchesItem",
  "message0": "unit touches item",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const playerJoinsGame = {
  "type": "playerjoinsgame",
  "message0": "player joins game",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const playerLeavesGame = {
  "type": "playerleavesgame",
  "message0": "player leaves game",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0DA57A",
  "tooltip": "",
  "helpUrl": ""
};

const destroyEntity = {
  "type": "destroyentity",
  "message0": "destroy %1",
  "previousStatement": null,
  "nextStatement": null,
  "args0": [
    {
      "type": "input_value",
      "name": "entity",
      "check": ["Unit", "Projectile", "Item"]
    }
  ],
  "colour": "#47A8D1",
  "tooltip": "",
  "helpUrl": ""
};

const playerCameraTrackUnit = {
  "type": "playercameratrackunit",
  "message0": "make %1 %2 track unit %3",
  "args0": [
    {
      "type": "input_value",
      "name": "player",
      "check": "Player"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "unit",
      "check": "Unit"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#855CD6",
  "tooltip": "",
  "helpUrl": ""
};

const createUnitAtPosition = {
  "type": "createunitatposition",
  "message0": "create %1 %2 for player %3 %4 at pos %5 %6 and angle %7",
  "previousStatement": null,
  "nextStatement": null,
  "args0": [
    {
      "type": "input_value",
      "name": "unittype",
      "check": "g Unit Type"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "player",
      "check": "Player"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "pos",
      "check": "Pos"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "angle",
      "check": "Number"
    }
  ],
  "colour": "#CF63CF",
  "tooltip": "",
  "helpUrl": ""
};

const playerType = {
  "type": "player_type",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["g Player Type"],
      "defaultType": "g Player Type"
    },
  ],
  "colour": "#855CD6",
  "output": "g Player Type",
  "tooltip": "",
  "helpUrl": ""
};

const unitType = {
  "type": "unit_type",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["g Unit Type"],
      "defaultType": "g Unit Type"
    },
  ],
  "colour": "#CF63CF",
  "output": "g Unit Type",
  "tooltip": "",
  "helpUrl": ""
};

const region = {
  "type": "region",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["g Region"],
      "defaultType": "g Region"
    },
  ],
  "colour": "#47A8D1",
  "output": "g Region",
  "tooltip": "",
  "helpUrl": ""
};

const dialogue = {
  "type": "dialogue",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["g Dialogue"],
      "defaultType": "g Dialogue"
    },
  ],
  "colour": 230,
  "output": "g Dialogue",
  "tooltip": "",
  "helpUrl": ""
};

const shop = {
  "type": "shop",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["g Shop"],
      "defaultType": "g Shop"
    },
  ],
  "colour": 230,
  "output": "g Shop",
  "tooltip": "",
  "helpUrl": ""
};

const projectileType = {
  "type": "projectile_type",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["g Projectile Type"],
      "defaultType": "g Projectile Type"
    },
  ],
  "colour": "#47A8D1",
  "output": "g Projectile Type",
  "tooltip": "",
  "helpUrl": ""
};

const particle = {
  "type": "particle",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["g Particle"],
      "defaultType": "g Particle"
    },
  ],
  "colour": 230,
  "output": "g Particle",
  "tooltip": "",
  "helpUrl": ""
};

const itemType = {
  "type": "item_type",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["g Item Type"],
      "defaultType": "g Item Type"
    },
  ],
  "colour": "#47A8D1",
  "output": "g Item Type",
  "tooltip": "",
  "helpUrl": ""
};

const sound = {
  "type": "sound",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["g Sound"],
      "defaultType": "g Sound"
    },
  ],
  "colour": 230,
  "output": "g Sound",
  "tooltip": "",
  "helpUrl": ""
};

const music = {
  "type": "music",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["g Music"],
      "defaultType": "g Music"
    },
  ],
  "colour": 230,
  "output": "g Music",
  "tooltip": "",
  "helpUrl": ""
};

const playerVariable = {
  "type": "player_variable",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["g Player Variable"],
      "defaultType": "g Player Variable"
    },
  ],
  "colour": 230,
  "output": "g Player Variable",
  "tooltip": "",
  "helpUrl": ""
};

const script1 = {
  "type": "script1",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["g Script"],
      "defaultType": "g Script"
    },
  ],
  "colour": 230,
  "output": "g Script",
  "tooltip": "",
  "helpUrl": ""
};

const getPlayerName = {
  "type": "getplayername",
  "message0": "get name of %1",
  "args0": [
    {
      "type": "input_value",
      "name": "player",
      "check": "Player"
    }
  ],
  "colour": 230,
  "output": "String",
  "tooltip": "",
  "helpUrl": ""
};

const num2str = {
  "type": "num2str",
  "message0": "convert %1 to string",
  "args0": [
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "colour": 230,
  "output": "String",
  "tooltip": "",
  "helpUrl": ""
};

const str2num = {
  "type": "str2num",
  "message0": "convert %1 to num",
  "args0": [
    {
      "type": "input_value",
      "name": "str1",
      "check": "String"
    }
  ],
  "colour": 230,
  "output": "Number",
  "tooltip": "",
  "helpUrl": ""
};

const sendChatMessageToPlayer = {
  "type": "sendchatmessagetoplayer",
  "message0": "send chat message %1 %2 to player %3",
  "args0": [
    {
      "type": "input_value",
      "name": "message",
      "check": "String"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "player",
      "check": "Player"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
};

const break1 = {
  "type": "break",
  "message0": "break",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#60B560",
  "tooltip": "",
  "helpUrl": "",
  'extensions': [
    'any_loop',
  ],
};

const continue1 = {
  "type": "continue",
  "message0": "continue",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#60B560",
  "tooltip": "",
  "helpUrl": "",
  'extensions': [
    'any_loop',
  ],
};

const decreaseVariableByNumber = {
  "type": "decreasevariablebynumber",
  "message0": "decrease variable %1 %2 by %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["Number"],
      "defaultType": "Number"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "inputsInline": true,
  "colour": "#ED953E",
  "tooltip": "",
  "helpUrl": ""
};

const increaseVariableByNumber = {
  "type": "increasevariablebynumber",
  "message0": "increase variable %1 %2 by %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["Number"],
      "defaultType": "Number"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "inputsInline": true,
  "colour": "#ED953E",
  "tooltip": "",
  "helpUrl": ""
};

const setVariable = {
  "type": "setvariable",
  "message0": "%{BKY_VARIABLES_SET}",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["Number", "String", "Boolean", "Pos", "Unit", "Item", "Projectile", "Player", "Item Type", "Unit Type", "Projectile Type", "Player Type", "Unit Group",
      "Item Group", "Player Group", "Item Type Group", "Unit Type Group", "Dialogue"],
      "defaultType": "Number"
    },
    {
      "type": "input_value",
      "name": "VALUE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#ED953E"
};

const triggeringProjectile = {
  "type": "triggeringprojectile",
  "message0": "triggering projectile",
  "output": "Projectile",
  "colour": "#47A8D1",
  "tooltip": "",
  "helpUrl": "",
  'extensions': [
    'triggering_projectile',
  ],
};

const triggeringItem = {
  "type": "triggeringitem",
  "message0": "triggering item",
  "output": "Item",
  "colour": "#47A8D1",
  "tooltip": "",
  "helpUrl": "",
  'extensions': [
    'triggering_item',
  ],
};

const triggeringRegion = {
  "type": "triggeringregion",
  "message0": "triggering region",
  "output": "Region",
  "colour": "#47A8D1",
  "tooltip": "",
  "helpUrl": "",
  'extensions': [
    'triggering_region',
  ],
};

const repeat = {
  "type": "repeat",
  "message0": "repeat %1 times %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "times",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "code"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#60B560",
  "tooltip": "",
  "helpUrl": ""
};

const repeatWithDelay = {
  "type": "repeatwithdelay",
  "message0": "repeat %1 times with delay %2 %3 in ms %4 %5",
  "args0": [
    {
      "type": "input_value",
      "name": "times",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "delay",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "code"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#60B560",
  "tooltip": "",
  "helpUrl": ""
};

const while1 = {
  "type": "while",
  "message0": "while %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "bool",
      "check": "Boolean"
    },
    {
      "type": "input_statement",
      "name": "code"
    }
  ],
  "colour": "#60B560",
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "",
  "helpUrl": ""
};

const kickPlayer = {
  "type": "kickplayer",
  "message0": "kick player %1 %2 with message %3",
  "args0": [
    {
      "type": "input_value",
      "name": "player",
      "check": "Player"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "message",
      "check": "String"
    }
  ],
  "colour": "#855CD6",
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "",
  "helpUrl": ""
};

const comment = {
  "type": "comment",
  "message0": "comment %1",
  "args0": [
    {
      "type": "field_input",
      "name": "text",
      "text": " "
    }
  ],
  "colour": "#60B560",
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "",
  "helpUrl": ""
};

const dropAllItems = {
  "type": "dropallitems",
  "message0": "make unit %1 drop all items",
  "args0": [
    {
      "type": "input_value",
      "name": "unit",
      "check": "Unit"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CF63CF",
  "tooltip": "",
  "helpUrl": ""
};

const centerOfRegion = {
  "type": "centerofregion",
  "message0": "center of region %1",
  "args0": [
    {
      "type": "input_value",
      "name": "region",
      "check": "Region"
    }
  ],
  "colour": 230,
  "output": "Pos",
  "tooltip": "",
  "helpUrl": ""
};

const getEntityPosition = {
  "type": "getentityposition",
  "message0": "position of %1",
  "args0": [
    {
      "type": "input_value",
      "name": "entity",
      "check": ["Unit", "Projectile", "Item"]
    }
  ],
  "colour": 230,
  "output": "Pos",
  "tooltip": "",
  "helpUrl": ""
};

const getEntireMapRegion = {
  "type": "getentiremapregion",
  "message0": "entire map region",
  "output": "Region",
  "colour": "#47A8D1",
  "tooltip": "",
  "helpUrl": ""
};

const itemTypeOfItem = {
  "type": "itemtypeofitem",
  "message0": "item type of item %1",
  "args0": [
    {
      "type": "input_value",
      "name": "item",
      "check": "Item"
    }
  ],
  "colour": "#47A8D1",
  "output": "Item Type",
  "tooltip": "",
  "helpUrl": ""
};

const unitTypeOfUnit = {
  "type": "unittypeofunit",
  "message0": "unit type of unit %1",
  "args0": [
    {
      "type": "input_value",
      "name": "unit",
      "check": "Unit"
    }
  ],
  "colour": "#CF63CF",
  "output": "Unit Type",
  "tooltip": "",
  "helpUrl": ""
};

const playerTypeOfPlayer = {
  "type": "playertypeofplayer",
  "message0": "player type of player %1",
  "args0": [
    {
      "type": "input_value",
      "name": "player",
      "check": "Player"
    }
  ],
  "colour": "#855CD6",
  "output": "Player Type",
  "tooltip": "",
  "helpUrl": ""
};

const projectileTypeOfProjectile = {
  "type": "projectiletypeofprojectile",
  "message0": "projectile type of projectile %1",
  "args0": [
    {
      "type": "input_value",
      "name": "projectile",
      "check": "Projectile",
    }
  ],
  "colour": "#47A8D1",
  "output": "Projectile Type",
  "tooltip": "",
  "helpUrl": ""
}

const setPlayerName = {
  "type": "setplayername",
  "message0": "set name of player %1 as %2",
  "args0": [
    {
      "type": "input_value",
      "name": "player",
      "check": "Player"
    },
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#855CD6",
  "tooltip": "",
  "helpUrl": ""
};

const setUnitNameLabel = {
  "type": "setunitnamelabel",
  "message0": "set name of unit %1 as %2",
  "args0": [
    {
      "type": "input_value",
      "name": "unit",
      "check": "Unit"
    },
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CF63CF",
  "tooltip": "",
  "helpUrl": ""
};

const getPlayerSelectedUnit = {
  "type": "getplayerselectedunit",
  "message0": "selected unit of player %1",
  "args0": [
    {
      "type": "input_value",
      "name": "player",
      "check": "Player"
    }
  ],
  "colour": "#CF63CF",
  "output": "Unit",
  "tooltip": "",
  "helpUrl": ""
};

const join = {
  "type": "join",
  "message0": "join %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "text1"
    },
    {
      "type": "input_value",
      "name": "text2"
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const string = {
  "type": "string",
  "message0": "\" %1 \"",
  "args0": [
    {
      "type": "field_input",
      "name": "text",
      "text": ""
    }
  ],
  "inputsInline": true,
  "colour": 230,
  "tooltip": "",
  "output": "String",
  "helpUrl": ""
};

const bool = {
  "type": "bool",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "value",
      "options": [
        [
          "true",
          "true1"
        ],
        [
          "false",
          "false1"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const number_comparison = {
  "type": "number_comparison",
  "message0": "%1 %2 %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "val1",
      "check": ["Number", "String"]
    },
    {
      "type": "field_dropdown",
      "name": "value",
      "options": [
        [
          "==",
          "=="
        ],
        [
          "!=",
          "!="
        ],
        [
          "<",
          "<"
        ],
        [
          "<=",
          "<="
        ],
        [
          ">",
          ">"
        ],
        [
          ">=",
          ">="
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "val2",
      "check": ["Number", "String"]
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const comparison = {
  "type": "comparison",
  "message0": "%1 %2 %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "val1"
    },
    {
      "type": "field_dropdown",
      "name": "value",
      "options": [
        [
          "==",
          "=="
        ],
        [
          "!=",
          "!="
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "val2"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": "#60B560",
  "tooltip": "",
  "helpUrl": "",
  'extensions': [
    'comparison_type',
  ],
};

const lastChatMessageSent = {
  "type": "lastchatmessagesent",
  "message0": "last chat message sent by player %1",
  "args0": [
    {
      "type": "input_value",
      "name": "player",
      "check": "Player"
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const forAllUnits = {
  "type": "forallunits",
  "message0": "for all units in unit group %1 do %2",
  "args0": [
    {
      "type": "input_value",
      "name": "group",
      "check": "Unit Group"
    },
    {
      "type": "input_statement",
      "name": "code"
    }
  ],
  "inputsInline": true,
  "colour": "#60B560",
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "",
  "helpUrl": ""
};

const allUnits = {
  "type": "allunits",
  "message0": "all units in game",
  "output": "Unit Group",
  "colour": "#60B560",
  "tooltip": "",
  "helpUrl": ""
};

const allUnitsInRegion = {
  "type": "allunitsinregion",
  "message0": "all units in region %1",
  "args0": [
    {
      "type": "input_value",
      "name": "region",
      "check": "g Region"
    }
  ],
  "output": "Unit Group",
  "colour": "#60B560",
  "tooltip": "",
  "helpUrl": ""
};

const allUnitsOwnedByPlayer = {
  "type": "allunitsownedbyplayer",
  "message0": "all units owned by player %1",
  "args0": [
    {
      "type": "input_value",
      "name": "player",
      "check": "Player"
    }
  ],
  "output": "Unit Group",
  "colour": "#60B560",
  "tooltip": "",
  "helpUrl": ""
};

const forAllPlayers = {
  "type": "forallplayers",
  "message0": "for all players in player group %1 do %2",
  "args0": [
    {
      "type": "input_value",
      "name": "group",
      "check": "Player Group"
    },
    {
      "type": "input_statement",
      "name": "code"
    }
  ],
  "inputsInline": true,
  "colour": "#60B560",
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "",
  "helpUrl": ""
};

const humanPlayers = {
  "type": "humanplayers",
  "message0": "all human players",
  "output": "Player Group",
  "colour": "#60B560",
  "tooltip": "",
  "helpUrl": ""
};

const botPlayers = {
  "type": "botplayers",
  "message0": "all bot players",
  "output": "Player Group",
  "colour": "#60B560",
  "tooltip": "",
  "helpUrl": ""
};

const selectedPlayer = {
  "type": "selectedplayer",
  "message0": "selected player",
  "output": "Player",
  "colour": "#855CD6",
  "tooltip": "",
  "helpUrl": "",
  'extensions': [
    'player_loop',
  ],
};

const getVariable = {
  "type": "getvariable",
  "message0": "%1",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["Number", "String", "Boolean", "Pos", "Unit", "Item", "Projectile", "Player", "Item Type", "Unit Type", "Projectile Type", "Player Type", "Unit Group",
      "Item Group", "Player Group", "Item Type Group", "Unit Type Group", "Dialogue"],
      "defaultType": "Number"
    }
  ],
  "output": null,
  "colour": "#ED953E"
};

const angle = {
  "type": "angle",
  "message0": "angle: %1",
  "args0": [
    {
      "type": "field_angle",
      "name": "angle",
      "angle": 90
    }
  ],
  "output": "Number",
  "colour": 230
};

const colorPicker = {
  "type": "colour_hsv_sliders",
  "message0": "hsv %1",
  "args0": [
    {
      "type": "field_colour_hsv_sliders",
      "name": "COLOUR",
      "colour": "#4a8a4a",
    },
  ],
  "output": "String",
  "colour": "#60B560",
};

const openDialogue = {
  "type": "opendialogue",
  "message0": "open dialogue %1 for player %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["g Dialogue"],
      "defaultType": "g Dialogue"
    },
    {
      "type": "input_value",
      "name": "player",
      "check": "Player"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
};

const openShop = {
  "type": "openshop",
  "message0": "open shop %1 for player %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["g Shop"],
      "defaultType": "g Shop"
    },
    {
      "type": "input_value",
      "name": "player",
      "check": "Player"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
};

const playSoundForPlayer = {
  "type": "playsoundforplayer",
  "message0": "play sound %1 for player %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["g Sound"],
      "defaultType": "g Sound"
    },
    {
      "type": "input_value",
      "name": "player",
      "check": "Player"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
};

const playMusicForPlayer = {
  "type": "playmusicforplayer",
  "message0": "play music %1 for player %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
      "variableTypes": ["g Music"],
      "defaultType": "g Music"
    },
    {
      "type": "input_value",
      "name": "player",
      "check": "Player"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Extensions.register('player_loop', function() {
  this.setOnChange(function(event) {
    let block = this;
    let valid = false;

    do {
      if (block.type == "forallplayers") {
        valid = true;
      }
      block = block.getSurroundParent();
    } while (block);

    this.setWarningText(valid
      ? null
      : `Selected player must be inside a player loop.`);
  });
});

Blockly.Extensions.register('unit_loop', function() {
  this.setOnChange(function(event) {
    let block = this;
    let valid = false;

    do {
      if (block.type == "forallunits") {
        valid = true;
      }
      block = block.getSurroundParent();
    } while (block);

    this.setWarningText(valid
      ? null
      : `Selected unit must be inside a unit loop.`);
  });
});

Blockly.Extensions.register('any_loop', function() {
  this.setOnChange(function(event) {
    let block = this;
    let valid = false;

    do {
      if (["repeat", "repeatwithdelay", "while", "forallunits", "forallplayers"].includes(block.type)) {
        valid = true;
      }
      block = block.getSurroundParent();
    } while (block);

    this.setWarningText(valid
      ? null
      : `Block must be inside of a loop.`);
  });
});

Blockly.Extensions.register('triggering_item', function() {
  this.setOnChange(function(event) {
    let valid = false;

    var jsonArray = Blockly.serialization.workspaces.save(window.ws);

    if (jsonArray.blocks != undefined) {
      jsonArray = jsonArray.blocks.blocks;
      var jsonString = JSON.stringify(jsonArray);

      for (var i = 0; i < triggeringItems.length; i++) {
        if (jsonString.toLowerCase().includes(triggeringItems[i].toLowerCase())) {
            valid = true;
            break;
        }
      }

      this.setWarningText(valid
        ? null
        : `No triggers present provide a triggering item.`);
    }
  });
});

Blockly.Extensions.register('triggering_player', function() {
  this.setOnChange(function(event) {
    let valid = false;

    var jsonArray = Blockly.serialization.workspaces.save(window.ws);

    if (jsonArray.blocks != undefined) {
      jsonArray = jsonArray.blocks.blocks;
      var jsonString = JSON.stringify(jsonArray);

      for (var i = 0; i < triggeringPlayers.length; i++) {
        if (jsonString.toLowerCase().includes(triggeringPlayers[i].toLowerCase())) {
            valid = true;
            break;
        }
      }

      this.setWarningText(valid
        ? null
        : `No triggers present provide a triggering player.`);
    }
  });
});

Blockly.Extensions.register('triggering_unit', function() {
  this.setOnChange(function(event) {
    let valid = false;

    var jsonArray = Blockly.serialization.workspaces.save(window.ws);

    if (jsonArray.blocks != undefined) {
      jsonArray = jsonArray.blocks.blocks;
      var jsonString = JSON.stringify(jsonArray);

      for (var i = 0; i < triggeringUnits.length; i++) {
        if (jsonString.toLowerCase().includes(triggeringUnits[i].toLowerCase())) {
            valid = true;
            break;
        }
      }

      this.setWarningText(valid
        ? null
        : `No triggers present provide a triggering unit.`);
    }
  });
});

Blockly.Extensions.register('triggering_region', function() {
  this.setOnChange(function(event) {
    let valid = false;

    var jsonArray = Blockly.serialization.workspaces.save(window.ws);

    if (jsonArray.blocks != undefined) {
      jsonArray = jsonArray.blocks.blocks;
      var jsonString = JSON.stringify(jsonArray);

      for (var i = 0; i < triggeringRegions.length; i++) {
        if (jsonString.toLowerCase().includes(triggeringRegions[i].toLowerCase())) {
            valid = true;
            break;
        }
      }

      this.setWarningText(valid
        ? null
        : `No triggers present provide a triggering region.`);
    }
  });
});

Blockly.Extensions.register('triggering_projectile', function() {
  this.setOnChange(function(event) {
    let valid = false;

    var jsonArray = Blockly.serialization.workspaces.save(window.ws);

    if (jsonArray.blocks != undefined) {
      jsonArray = jsonArray.blocks.blocks;
      var jsonString = JSON.stringify(jsonArray);

      for (var i = 0; i < triggeringProjectiles.length; i++) {
        if (jsonString.toLowerCase().includes(triggeringProjectiles[i].toLowerCase())) {
            valid = true;
            break;
        }
      }

      this.setWarningText(valid
        ? null
        : `No triggers present provide a triggering projectile.`);
    }
  });
});

Blockly.Extensions.register('comparison_type', function() {
  this.setOnChange(function(event) {
    let valid = false;

    let firstCheck = this.getInput('val1')?.connection.targetConnection?.getCheck() ?? [];
    let secondCheck = this.getInput('val2')?.connection.targetConnection?.getCheck() ?? [];

    let var1Name = this.getInput('val1')?.connection.targetBlock()?.getField("VAR")?.variable?.name || undefined;
    let var2Name = this.getInput('val2')?.connection.targetBlock()?.getField("VAR")?.variable?.name || undefined;

    if (firstCheck[0] != undefined && secondCheck[0] != undefined) {
      if (firstCheck[0].substring(0, 2) == "g ") {
        firstCheck = [firstCheck[0].substring(2, firstCheck[0].length)];
      }

      if (secondCheck[0].substring(0, 2) == "g ") {
        secondCheck = secondCheck[0].substring(2, secondCheck[0].length);
      }
    }

    if (this.getInput('val1')?.connection.targetBlock()?.type == getVariable) {
      if (var1Name != undefined) {
        for (let var1 in ws.getAllVariables()) {
          if (ws.getAllVariables()[var1].name == var1Name) {
            firstCheck = ws.getAllVariables()[var1].type
          }
        }
      }
      if (var2Name != undefined) {
        for (let var2 in ws.getAllVariables()) {
          if (ws.getAllVariables()[var2].name == var2Name) {
            secondCheck = ws.getAllVariables()[var2].type
          }
        }
      }
    }

    if (firstCheck[0] != undefined && secondCheck[0] != undefined) {
      valid = firstCheck[0] == secondCheck[0];
    } else {
      valid = true;
    }

    this.setWarningText(valid
     ? null
     : `Comparison types must be the same.`);
  });
});

// Colors per category
// Triggers - #0DA57A
// System-Loops - #60B560
// Math-Positions - #59C059
// Entities-Region - #47A8D1
// Player - #855CD6
// Unit - #CF63CF
// Other - 330
// Variables - #ED953E

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
  [script, frameTick, secondTick, sendChatMessage, triggers, ifelse, pos, moveEntity, triggeringPlayer, owner, triggeringUnit, selectedUnit, onPostResponse, gameStart, serverShuttingDown,
  unitTouchesItem, unitPickedAnItem, unitTouchesProjectile, unitStopsUsingAnItem, unitAttacksUnit, unitSelectsItem, unitLeavesRegion, unitDroppedAnItem, unitEntersRegion, unitAttributeBecomesFull,
  unitStartsUsingAnItem, unitAttributeBecomesZero, unitUsesItem, unitTouchesWall, playerSendsChatMessage, destroyEntity, lastCreatedUnit, playerCameraTrackUnit, createUnitAtPosition,
  playerJoinsGame, playerLeavesGame, getPlayerName, str2num, num2str, sendChatMessageToPlayer, break1, continue1, decreaseVariableByNumber, increaseVariableByNumber, setVariable, triggeringItem,
  triggeringRegion, triggeringProjectile, repeat, while1, kickPlayer, comment, dropAllItems, centerOfRegion, getEntireMapRegion, getEntityPosition, itemTypeOfItem, projectileTypeOfProjectile,
  setPlayerName, setUnitNameLabel, getPlayerSelectedUnit, join, string, bool, number_comparison, comparison, lastChatMessageSent, forAllUnits, allUnits, allUnitsInRegion, allUnitsOwnedByPlayer,
  forAllPlayers, humanPlayers, botPlayers, selectedPlayer, repeatWithDelay, getVariable, angle, colorPicker, unitType, openDialogue, openShop, playSoundForPlayer, playMusicForPlayer,
  playerType, unitType, dialogue, shop, projectileType, particle, itemType, sound, music, playerVariable, script1, region, unitTypeOfUnit, playerTypeOfPlayer]);