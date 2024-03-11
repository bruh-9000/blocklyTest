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
  "message0": "secondTick",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const sendChatMessage = {
  "type": "sendchatmessage",
  "message0": "sendChatMessage %1",
  "args0": [
    {
      "type": "input_value",
      "name": "message",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const triggers = {
  "type": "triggers",
  "message0": "Triggers:",
  "inputsInline": true,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const script = {
  "type": "script",
  "message0": "Script:",
  "inputsInline": true,
  "nextStatement": null,
  "colour": 230,
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
  "tooltip": "",
  "helpUrl": ""
};

const pos = {
  "type": "pos",
  "message0": "pos %1 %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "x"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "y"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const moveEntity = {
  "type": "moveentity",
  "message0": "moveEntity %1 %2 to pos %3",
  "args0": [
    {
      "type": "input_value",
      "name": "entity"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "pos"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const triggeringPlayer = {
  "type": "triggeringplayer",
  "message0": "triggeringPlayer",
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const owner = {
  "type": "owner",
  "message0": "owner",
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const triggeringUnit = {
  "type": "triggeringunit",
  "message0": "triggeringUnit %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const selectedUnit = {
  "type": "selectedunit",
  "message0": "selectedUnit %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const frameTick = {
  "type": "frametick",
  "message0": "frameTick",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const serverShuttingDown = {
  "type": "servershuttingdown",
  "message0": "serverShuttingDown",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const gameStart = {
  "type": "gamestart",
  "message0": "gameStart",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const onPostResponse = {
  "type": "onpostresponse",
  "message0": "onPostResponse",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
  [script, secondTick, sendChatMessage, triggers, ifelse, pos, moveEntity, triggeringPlayer, owner, triggeringUnit, selectedUnit, onPostResponse, gameStart, serverShuttingDown, frameTick]);