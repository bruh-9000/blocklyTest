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
  "colour": 120,
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
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const script = {
  "type": "script",
  "message0": "Script:",
  "inputsInline": true,
  "nextStatement": null,
  "colour": 120,
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
  "colour": 230,
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
  "colour": 290,
  "tooltip": "",
  "helpUrl": ""
};

const triggeringPlayer = {
  "type": "triggeringplayer",
  "message0": "triggering player",
  "output": "Player",
  "colour": 260,
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
  "colour": 260,
  "output": "Player",
  "tooltip": "",
  "helpUrl": ""
};

const triggeringUnit = {
  "type": "triggeringunit",
  "message0": "triggering unit",
  "output": "Unit",
  "colour": 65,
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
  "colour": 65,
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
  "colour": 65,
  "tooltip": "",
  "helpUrl": ""
};

const frameTick = {
  "type": "frametick",
  "message0": "every frame",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const serverShuttingDown = {
  "type": "servershuttingdown",
  "message0": "server shutting down",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const gameStart = {
  "type": "gamestart",
  "message0": "game start",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const onPostResponse = {
  "type": "onpostresponse",
  "message0": "on post response",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const playerSendsChatMessage = {
  "type": "playerSendsChatMessage",
  "message0": "player sends chat message",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitTouchesWall = {
  "type": "unitTouchesWall",
  "message0": "unit touches wall",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitUsesItem = {
  "type": "unitUsesItem",
  "message0": "unit uses item",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitAttributeBecomesZero = {
  "type": "unitAttributeBecomesZero",
  "message0": "unit attribute becomes zero",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitStartsUsingAnItem = {
  "type": "unitStartsUsingAnItem",
  "message0": "unit starts using an item",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitAttributeBecomesFull = {
  "type": "unitAttributeBecomesFull",
  "message0": "unit attribute becomes full",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitEntersRegion = {
  "type": "unitEntersRegion",
  "message0": "unit enters region",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitDroppedAnItem = {
  "type": "unitDroppedAnItem",
  "message0": "unit drops an item",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitSelectsItem = {
  "type": "unitSelectsItem",
  "message0": "unit selects an item",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitLeavesRegion = {
  "type": "unitLeavesRegion",
  "message0": "unit leaves region",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitAttacksUnit = {
  "type": "unitAttacksUnit",
  "message0": "unit attacks unit",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitStopsUsingAnItem = {
  "type": "unitStopsUsingAnItem",
  "message0": "unit stops using an item",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitTouchesProjectile = {
  "type": "unitTouchesProjectile",
  "message0": "unit touches projectile",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitPickedAnItem = {
  "type": "unitPickedAnItem",
  "message0": "unit picks up an item",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const unitTouchesItem = {
  "type": "unitTouchesItem",
  "message0": "unit touches item",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const playerJoinsGame = {
  "type": "playerjoinsgame",
  "message0": "player joins game",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

const playerLeavesGame = {
  "type": "playerleavesgame",
  "message0": "player leaves game",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
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
  "colour": 290,
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
  "colour": 260,
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
      "name": "unittype"
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
  "colour": 65,
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
  "colour": 160,
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
  "colour": 160,
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const continue1 = {
  "type": "continue",
  "message0": "continue",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const decreaseVariableByNumber = {
  "type": "decreasevariablebynumber",
  "message0": "decrease variable %1 %2 by %3",
  "args0": [
    {
      "type": "input_value",
      "name": "var",
      "check": "String"
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
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
};

const increaseVariableByNumber = {
  "type": "increasevariablebynumber",
  "message0": "increase variable %1 %2 by %3",
  "args0": [
    {
      "type": "input_value",
      "name": "var",
      "check": "String"
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
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
};

const setVariable = {
  "type": "setvariable",
  "message0": "set variable %1 %2 to value %3",
  "args0": [
    {
      "type": "input_value",
      "name": "var"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "value"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
};

const triggeringProjectile = {
  "type": "triggeringprojectile",
  "message0": "triggering projectile",
  "output": "Projectile",
  "colour": 290,
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
  "colour": 290,
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
  "colour": 290,
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
  "colour": 230,
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
  "colour": 230,
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
  "colour": 230,
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
  "colour": 260,
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
  "colour": 230,
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
  "colour": 65,
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
  "colour": 290,
  "tooltip": "",
  "helpUrl": ""
};

const itemTypeOfItem = {
  "type": "itemtypeofitem",
  "message0": "item type of item %1",
  "args0": [
    {
      "type": "input_value",
      "name": "item"
    }
  ],
  "colour": 290,
  "output": "Item Type",
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
  "colour": 290,
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
  "colour": 260,
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
  "colour": 65,
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
  "colour": 65,
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
  "colour": 160,
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
  "colour": 160,
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
  "colour": 230,
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
  "colour": 160,
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
  "colour": 230,
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "",
  "helpUrl": ""
};

const allUnits = {
  "type": "allunits",
  "message0": "all units in game",
  "output": "Unit Group",
  "colour": 230,
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
      "check": "Region"
    }
  ],
  "output": "Unit Group",
  "colour": 230,
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
  "colour": 230,
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
  "colour": 230,
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "",
  "helpUrl": ""
};

const humanPlayers = {
  "type": "humanplayers",
  "message0": "all human players",
  "output": "Player Group",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const botPlayers = {
  "type": "botplayers",
  "message0": "all bot players",
  "output": "Player Group",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const selectedPlayer = {
  "type": "selectedplayer",
  "message0": "selected player",
  "output": "Player",
  "colour": 260,
  "tooltip": "",
  "helpUrl": "",
  'extensions': [
    'player_loop',
  ],
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
        : `No triggers present provide a triggering item`);
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
        : `No triggers present provide a triggering player`);
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
        : `No triggers present provide a triggering unit`);
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
        : `No triggers present provide a triggering region`);
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
        : `No triggers present provide a triggering projectile`);
    }
  });
});

Blockly.Extensions.register('comparison_type', function() {
  this.setOnChange(function(event) {
    let valid = false;

    if (this.getInputTargetBlock('val1') != undefined && this.getInputTargetBlock('val2') != undefined ) {
      valid = this.getInputTargetBlock('val1').type == this.getInputTargetBlock('val2').type;
    } else {
      valid = true;
    }

    // this.setWarningText(valid
    //  ? null
    //  : `Comparison types must be the same.`);
  });
});

// Colors per category
// 65 for unit
// 120 for trigger
// 160 for text
// 230 for logic
// 260 for player
// 290 for entity
// 330 for other

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
  forAllPlayers, humanPlayers, botPlayers, selectedPlayer, repeatWithDelay]);