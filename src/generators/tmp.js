/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { FieldTextInput } from 'blockly';
import {Order} from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock['script'] = function (block, generator) {
  // Generate the function call for this block.
  const code = ``;
  return code;
};

forBlock['triggers'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `\n`;
  return code;
};

forBlock['ifelse'] = function (block, generator) {
  const check = generator.valueToCode(block, 'check', Order.NONE) || "";
  const do1 = generator.statementToCode(block, 'do1') || "";
  const else1 = generator.statementToCode(block, 'else1') || "";
  
  // Generate the function call for this block.
  let code;

  if (else1) {
    if (do1) {
      code = `if (${check}) {\n${do1}} else {\n${else1}}\n`;
    } else {
      code = `if (${check}) {\n\n${do1}} else {\n${else1}}\n`;
    }
  } else {
    if (do1) {
      code = `if (${check}) {\n${do1}}\n`;
    } else {
      code = `if (${check}) {\n\n}\n`;
    }
  }

  return code;
};

forBlock['secondtick'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@secondTick\n`;
  return code;
};

forBlock['sendchatmessage'] = function (block, generator) {
  const text = generator.valueToCode(block, 'message', Order.NONE) || "''";

  // Generate the function call for this block.
  const code = `sendChatMessage(${text})\n`;
  return code;
};

forBlock['pos'] = function (block, generator) {
  const x = generator.valueToCode(block, 'x', Order.NONE) || "";
  const y = generator.valueToCode(block, 'y', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `pos(${x}, ${y})`;
  return [code, generator.ORDER_NONE];
};

forBlock['moveentity'] = function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";
  const pos = generator.valueToCode(block, 'pos', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `moveEntity(${entity}, ${pos})\n`;
  return code;
};

forBlock['owner'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `.owner`;
  return [code, generator.ORDER_NONE];
};

forBlock['triggeringplayer'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `triggeringPlayer`;
  return [code, generator.ORDER_NONE];
};

forBlock['triggeringunit'] = function (block, generator) {
  const sub = generator.valueToCode(block, 'sub', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `triggeringUnit${sub}`;
  return [code, generator.ORDER_NONE];
};

forBlock['selectedunit'] = function (block, generator) {
  const sub = generator.valueToCode(block, 'sub', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `selectedUnit${sub}`;
  return [code, generator.ORDER_NONE];
};

forBlock['lastcreatedunit'] = function (block, generator) {
  const sub = generator.valueToCode(block, 'sub', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `lastCreatedUnit${sub}`;
  return [code, generator.ORDER_NONE];
};

forBlock['frametick'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@frameTick\n`;
  return code;
};

forBlock['servershuttingdown'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@serverShuttingDown\n`;
  return code;
};

forBlock['gamestart'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@gameStart\n`;
  return code;
};

forBlock['onPostResponse'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@onPostResponse\n`;
  return code;
};

forBlock['playerSendsChatMessage'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@playerSendsChatMessage\n`;
  return code;
};

forBlock['unitTouchesWall'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitTouchesWall\n`;
  return code;
};

forBlock['unitUsesItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitUsesItem\n`;
  return code;
};

forBlock['unitAttributeBecomesZero'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitAttributeBecomesZero\n`;
  return code;
};

forBlock['unitStartUsingAnItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitStartsUsingAnItem\n`;
  return code;
};

forBlock['unitattributebecomesfull'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitAttributeBecomesFull\n`;
  return code;
};

forBlock['unitEntersRegion'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitEntersRegion\n`;
  return code;
};

forBlock['unitDroppedAnItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitDroppedAnItem\n`;
  return code;
};

forBlock['unitLeavesRegion'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitLeavesRegion\n`;
  return code;
};

forBlock['unitSelectsItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitSelectsItem\n`;
  return code;
};

forBlock['unitAttacksUnit'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitAttacksUnit\n`;
  return code;
};

forBlock['unitStopsUsingAnItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitStopsUsingAnItem\n`;
  return code;
};

forBlock['unitTouchesProjectile'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitTouchesProjectile\n`;
  return code;
};

forBlock['unitPickedAnItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitPickedAnItem\n`;
  return code;
};

forBlock['unitTouchesItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitTouchesItem\n`;
  return code;
};

forBlock['playerjoinsgame'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@playerJoinsGame\n`;
  return code;
};

forBlock['playerleavesgame'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@playerLeavesGame\n`;
  return code;
};

forBlock['destroyentity'] = function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `destroyEntity(${entity})\n`;
  return code;
};

forBlock['playercameratrackunit'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `playerCameraTrackUnit(${player}, ${unit})\n`;
  return code;
};

forBlock['createunitatposition'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const unittype = generator.valueToCode(block, 'unittype', Order.NONE) || "''";
  const pos = generator.valueToCode(block, 'pos', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'angle', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `createUnitAtPosition(${unittype}, ${player}, ${pos}, ${angle})\n`;
  return code;
};

forBlock['getplayername'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";

  console.log(player);

  // Generate the function call for this block.
  const code = `getPlayerName(${player})`;
  return [code, generator.ORDER_NONE];
};

forBlock['num2str'] = function (block, generator) {
  const num = generator.valueToCode(block, 'num', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `num2str(${num})\n`;
  return code;
};

forBlock['str2num'] = function (block, generator) {
  const str1 = generator.valueToCode(block, 'str1', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `str2num(${str1})\n`;
  return code;
};

forBlock['sendchatmessagetoplayer'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const message = generator.valueToCode(block, 'unittype', Order.NONE) || "''";

  // Generate the function call for this block.
  const code = `sendChatMessageToPlayer(${message}, ${player})\n`;
  return code;
};

forBlock['break'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `break()\n`;
  return code;
};

forBlock['continue'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `continue()\n`;
  return code;
};

forBlock['increasevariablebynumber'] = function (block, generator) {
  const var1 = generator.valueToCode(block, 'var', Order.NONE) || "";
  const number = generator.valueToCode(block, 'num', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `increaseVariableByNumber(${var1}, ${number})\n`;
  return code;
};

forBlock['decreasevariablebynumber'] = function (block, generator) {
  const var1 = generator.valueToCode(block, 'var', Order.NONE) || "";
  const number = generator.valueToCode(block, 'num', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `decreaseVariableByNumber(${var1}, ${number})\n`;
  return code;
};

forBlock['setvariable'] = function (block, generator) {
  const var1 = generator.valueToCode(block, 'var', Order.NONE) || "";
  const number = generator.valueToCode(block, 'value', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `setVariable(${var1}, ${number})\n`;
  return code;
};

forBlock['triggeringregion'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `triggeringRegion`;
  return [code, generator.ORDER_NONE];
};

forBlock['triggeringitem'] = function (block, generator) {
  const sub = generator.valueToCode(block, 'sub', Order.NONE) || "";
  
  // Generate the function call for this block.
  let code;

  if (sub) {
    code = `triggeringItem.type`;
  } else {
    code = `triggeringItem`;
  }
  return [code, generator.ORDER_NONE];
};

forBlock['triggeringprojectile'] = function (block, generator) {
  const sub = generator.valueToCode(block, 'sub', Order.NONE) || "";

  // Generate the function call for this block.
  let code;

  if (sub) {
    code = `getProjectileTypeOfProjectile(triggeringProj)`;
  } else {
    code = `triggeringProj`;
  }
  return [code, generator.ORDER_NONE];
};

forBlock['repeat'] = function (block, generator) {
  const times = generator.valueToCode(block, 'times', Order.NONE) || "";
  const code1 = generator.statementToCode(block, 'code') || "";
  
  // Generate the function call for this block.
  let code;

  if (code1) {
    code = `repeat (${times})\n${code1}{\n`;
  } else {
    code = `repeat (${times})\n\n{\n`;
  }

  return code;
};

forBlock['while'] = function (block, generator) {
  const bool = generator.valueToCode(block, 'bool', Order.NONE) || "";
  const code1 = generator.statementToCode(block, 'code') || "";
  
  // Generate the function call for this block.
  let code;

  if (code1) {
    code = `while (${bool})\n${code1}{\n`;
  } else {
    code = `while (${bool})\n\n{\n`;
  }

  return code;
};

forBlock['kickplayer'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const message = generator.valueToCode(block, 'message', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `kickPlayer(${player}, ${message})\n`;
  return code;
};

forBlock['comment'] = function (block, generator) {
  const text = block.getFieldValue('text') || "";

  // Generate the function call for this block.
  const code = `// ${text}\ncomment()\n`;
  return code;
};

forBlock['dropallitems'] = function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `dropAllItems(${unit})\n`;
  return code;
};

forBlock['centerofregion'] = function (block, generator) {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `centerOfRegion(${region})`;
  return [code, generator.ORDER_NONE];
};

forBlock['getentityposition'] = function (block, generator) {
  const entity = generator.valueToCode(block, 'entity', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `getEntityPosition(${entity})`;
  return [code, generator.ORDER_NONE];
};

forBlock['getentiremapregion'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `getEntireMapRegion()`;
  return [code, generator.ORDER_NONE];
};

forBlock['projectiletypeofprojectile'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `getProjectileTypeOfProjectile()`;
  return [code, generator.ORDER_NONE];
};

forBlock['itemtypeofitem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `.type`;
  return [code, generator.ORDER_NONE];
};

forBlock['setplayername'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const name = generator.valueToCode(block, 'name', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `setPlayerName(${player}, ${name})\n`;
  return code;
};

forBlock['setunitnamelabel'] = function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";
  const name = generator.valueToCode(block, 'name', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `setUnitNameLabel(${unit}, ${name})\n`;
  return code;
};

forBlock['getplayerselectedunit'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `getPlayerSelectedUnit(${player})`;
  return [code, generator.ORDER_NONE];
};

forBlock['join'] = function (block, generator) {
  const text1 = generator.valueToCode(block, 'text1', Order.NONE) || "''";
  const text2 = generator.valueToCode(block, 'text2', Order.NONE) || "''";

  // Generate the function call for this block.
  const code = `${text1} + ${text2}`;
  return [code, generator.ORDER_NONE];
};