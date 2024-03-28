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
  "helpUrl": ""
};

const owner = {
  "type": "owner",
  "message0": "owner",
  "output": "Player",
  "colour": 260,
  "tooltip": "",
  "helpUrl": ""
};

const triggeringUnit = {
  "type": "triggeringunit",
  "message0": "triggering unit %1",
  "args0": [
    {
      "type": "input_value",
      "name": "sub",
      "check": "Player"
    }
  ],
  "output": "Unit",
  "colour": 65,
  "tooltip": "",
  "helpUrl": ""
};

const selectedUnit = {
  "type": "selectedunit",
  "message0": "selected unit %1",
  "args0": [
    {
      "type": "input_value",
      "name": "sub",
      "check": "Player"
    }
  ],
  "output": "Unit",
  "colour": 65,
  "tooltip": "",
  "helpUrl": ""
};

const lastCreatedUnit = {
  "type": "lastcreatedunit",
  "message0": "last created unit %1",
  "args0": [
    {
      "type": "input_value",
      "name": "sub",
      "check": "Player"
    }
  ],
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
  "message0": "triggering projectile %1",
  "args0": [
    {
      "type": "input_value",
      "name": "sub",
      "check": "Projectile Type"
    }
  ],
  "output": "Projectile",
  "colour": 290,
  "tooltip": "",
  "helpUrl": ""
};

const triggeringItem = {
  "type": "triggeringitem",
  "message0": "triggering item %1",
  "args0": [
    {
      "type": "input_value",
      "name": "sub",
      "check": "Item Type"
    }
  ],
  "output": "Item",
  "colour": 290,
  "tooltip": "",
  "helpUrl": ""
};

const triggeringRegion = {
  "type": "triggeringregion",
  "message0": "triggering region",
  "output": "Region",
  "colour": 290,
  "tooltip": "",
  "helpUrl": ""
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
  "message0": "type",
  "output": "Item Type",
  "colour": 290,
  "tooltip": "",
  "helpUrl": ""
};

const projectileTypeOfProjectile = {
  "type": "projectiletypeofprojectile",
  "message0": "type",
  "output": "Projectile Type",
  "colour": 290,
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
  "output": null,
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
  "helpUrl": ""
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
  setPlayerName, setUnitNameLabel, getPlayerSelectedUnit, join, string, bool, number_comparison, comparison, lastChatMessageSent]);