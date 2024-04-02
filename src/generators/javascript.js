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

forBlock['owner'] = function(block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE);

  const code = `${unit}.owner\n`;
  return [code, generator.ORDER_NONE];
}

forBlock['triggeringplayer'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `triggeringPlayer`;
  return [code, generator.ORDER_NONE];
};

forBlock['triggeringunit'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `triggeringUnit`;
  return [code, generator.ORDER_NONE];
};

forBlock['selectedunit'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `selectedUnit`;
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

forBlock['unitStartsUsingAnItem'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `@unitStartsUsingAnItem\n`;
  return code;
};

forBlock['unitAttributeBecomesFull'] = function (block, generator) {
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
  const unitType = generator.valueToCode(block, 'unittype', Order.NONE) || "";
  const pos = generator.valueToCode(block, 'pos', Order.NONE) || "";
  const angle = generator.valueToCode(block, 'angle', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `createUnitAtPosition(${unitType}, ${player}, ${pos}, ${angle})\n`;
  return code;
};

forBlock['getvariable'] = function (block, generator) {
  const varName = this.getField("VAR").variable.name;

  // Generate the function call for this block.
  const code = `getVariable('${varName}')`;
  return [code, generator.ORDER_NONE];
};

forBlock['getplayername'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `getPlayerName(${player})`;
  return [code, generator.ORDER_NONE];
};

forBlock['num2str'] = function (block, generator) {
  const num = generator.valueToCode(block, 'num', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `num2str(${num})`;
  return [code, generator.ORDER_NONE];
};

forBlock['str2num'] = function (block, generator) {
  const str1 = generator.valueToCode(block, 'str1', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `str2num(${str1})`;
  return [code, generator.ORDER_NONE];
};

forBlock['sendchatmessagetoplayer'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const message = generator.valueToCode(block, 'message', Order.NONE) || "''";

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
  const varName = this.getField("VAR").variable.name;
  const number = generator.valueToCode(block, 'num', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `increaseVariableByNumber('${varName}', ${number})\n`;
  return code;
};

forBlock['decreasevariablebynumber'] = function (block, generator) {
  const varName = this.getField("VAR").variable.name;
  const number = generator.valueToCode(block, 'num', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `decreaseVariableByNumber('${varName}', ${number})\n`;
  return code;
};

forBlock['setvariable'] = function (block, generator) {
  const varName = this.getField("VAR").variable.name;
  const value = generator.valueToCode(block, 'VALUE', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `setVariable('${varName}', ${value})\n`;
  return code;
};

forBlock['triggeringregion'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `triggeringRegion`;
  return [code, generator.ORDER_NONE];
};

forBlock['triggeringitem'] = function (block, generator) {
  const code = `triggeringItem`;
  return [code, generator.ORDER_NONE];
};

forBlock['triggeringprojectile'] = function (block, generator) {
  const code = "triggeringProj";
  return [code, generator.ORDER_NONE];
};

forBlock['repeat'] = function (block, generator) {
  const times = generator.valueToCode(block, 'times', Order.NONE) || "";
  const code1 = generator.statementToCode(block, 'code') || "";
  
  // Generate the function call for this block.
  let code;

  if (code1) {
    code = `repeat (${times}) {\n${code1}}\n`;
  } else {
    code = `repeat (${times}) {\n\n}\n`;
  }

  return code;
};

forBlock['repeatwithdelay'] = function (block, generator) {
  const times = generator.valueToCode(block, 'times', Order.NONE) || "";
  const delay = generator.valueToCode(block, 'delay', Order.NONE) || "";
  const code1 = generator.statementToCode(block, 'code') || "";
  
  // Generate the function call for this block.
  let code;

  if (code1) {
    code = `repeatWithDelay (${times}, ${delay}) {\n${code1}}\n`;
  } else {
    code = `repeatWithDelay (${times}, ${delay}) {\n\n}\n`;
  }

  return code;
};

forBlock['while'] = function (block, generator) {
  const bool = generator.valueToCode(block, 'bool', Order.NONE) || "";
  const code1 = generator.statementToCode(block, 'code') || "";
  
  // Generate the function call for this block.
  let code;

  if (code1) {
    code = `while (${bool}) {\n${code1}}\n`;
  } else {
    code = `while (${bool}) {\n\n}\n`;
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
  const code = `// ${text}\ncomment()\n\n`;
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
  const projectile = generator.valueToCode(block, 'projectile', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `getProjectileTypeOfProjectile(${projectile})`;
  return [code, generator.ORDER_NONE];
};

forBlock['itemtypeofitem'] = function (block, generator) {
  const item = generator.valueToCode(block, 'item', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `${item}.type`;
  return [code, generator.ORDER_NONE];
};

forBlock['unittypeofunit'] = function (block, generator) {
  const unit = generator.valueToCode(block, 'unit', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `${unit}.type`;
  return [code, generator.ORDER_NONE];
};

forBlock['playertypeofplayer'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `${player}.type`;
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

forBlock['string'] = function (block, generator) {
  const text1 = block.getFieldValue('text') || "";

  // Generate the function call for this block.
  const code = `'${text1}'`;
  return [code, generator.ORDER_NONE];
};

forBlock['bool'] = function (block, generator) {
  const value = block.getFieldValue('value');

  // Generate the function call for this block.
  let code;

  if (value == 'true1') {
    code = `true`;
  } else {
    code = `false`;
  }
  return [code, generator.ORDER_NONE];
};

forBlock['comparison'] = function (block, generator) {
  const value = block.getFieldValue('value');
  const val1 = generator.valueToCode(block, 'val1', Order.NONE) || "";
  const val2 = generator.valueToCode(block, 'val2', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `${val1} ${value} ${val2}`;
  return [code, generator.ORDER_NONE];
};

forBlock['number_comparison'] = function (block, generator) {
  const value = block.getFieldValue('value');
  const val1 = generator.valueToCode(block, 'val1', Order.NONE) || "";
  const val2 = generator.valueToCode(block, 'val2', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `${val1} ${value} ${val2}`;
  return [code, generator.ORDER_NONE];
};

forBlock['lastchatmessagesent'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `lastchatmessagesent(${player})`;
  return [code, generator.ORDER_NONE];
};

forBlock['forallunits'] = function (block, generator) {
  const group = generator.valueToCode(block, 'group', Order.NONE) || "";
  const code1 = generator.statementToCode(block, 'code') || "";
  
  // Generate the function call for this block.
  const code = `forAllUnits (${group}) {\n${code1}}\n`;
  return code;
};

forBlock['allunits'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `allUnits()`;
  return [code, generator.ORDER_NONE];
};

forBlock['allunitsinregion'] = function (block, generator) {
  const region = generator.valueToCode(block, 'region', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `allUnitsInRegion(${region})`;
  return [code, generator.ORDER_NONE];
};

forBlock['allunitsownedbyplayer'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";

  // Generate the function call for this block.
  const code = `allUnitsOwnedByPlayer(${player})`;
  return [code, generator.ORDER_NONE];
};

forBlock['forallplayers'] = function (block, generator) {
  const group = generator.valueToCode(block, 'group', Order.NONE) || "";
  const code1 = generator.statementToCode(block, 'code') || "";
  
  // Generate the function call for this block.
  const code = `forAllPlayers (${group}) {\n${code1}}\n`;
  return code;
};

forBlock['humanplayers'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `humanPlayers()`;
  return [code, generator.ORDER_NONE];
};

forBlock['botplayers'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `botPlayers()`;
  return [code, generator.ORDER_NONE];
};

forBlock['selectedplayer'] = function (block, generator) {
  // Generate the function call for this block.
  const code = `selectedPlayer()`;
  return [code, generator.ORDER_NONE];
};

forBlock['getvariable'] = function (block, generator) {
  const varName = this.getField("VAR").variable.name;

  // Generate the function call for this block.
  const code = `getVariable('${varName}')`;
  return [code, generator.ORDER_NONE];
};

forBlock['angle'] = function (block, generator) {
  const angle = block.getField("angle").value_ || "0";

  // Generate the function call for this block.
  const code = `${angle}`;
  return [code, generator.ORDER_NONE];
};

forBlock['colour_hsv_sliders'] = function (block, generator) {
  const color = block.getFieldValue("COLOUR");

  // Generate the function call for this block.
  const code = `'${color}'`;
  return [code, generator.ORDER_NONE];
};

forBlock['player_type'] = function (block, generator) {
  const playerType = this.getField("VAR").variable.name;
  let playerTypeID;

  if (typeof window.playerTypeNames !== 'undefined') {
    const searchValue = this.getField("VAR").variable.name;

    for (let i = 0; i < window.playerTypeNames.length; i++) {
      if (window.playerTypeNames[i][0] === searchValue) {
        playerTypeID = (window.playerTypeNames[i][1]);
        break;
      }
    }
  }

  // Generate the function call for this block.
  const code = `'${playerTypeID}'`;
  return [code, generator.ORDER_NONE];
};

forBlock['unit_type'] = function (block, generator) {
  const unitType = this.getField("VAR").variable.name;
  let unitTypeID;

  if (typeof window.unitTypeNames !== 'undefined') {
    const searchValue = this.getField("VAR").variable.name;

    for (let i = 0; i < window.unitTypeNames.length; i++) {
      if (window.unitTypeNames[i][0] === searchValue) {
        unitTypeID = (window.unitTypeNames[i][1]);
        break;
      }
    }
  }

  // Generate the function call for this block.
  const code = `'${unitTypeID}'`;
  return [code, generator.ORDER_NONE];
};

forBlock['dialogue'] = function (block, generator) {
  const dialogue = this.getField("VAR").variable.name;

  // Generate the function call for this block.
  const code = `'${dialogue}'`;
  return [code, generator.ORDER_NONE];
};

forBlock['shop'] = function (block, generator) {
  const shop = this.getField("VAR").variable.name;

  // Generate the function call for this block.
  const code = `'${shop}'`;
  return [code, generator.ORDER_NONE];
};

forBlock['projectile_type'] = function (block, generator) {
  const projectileType = this.getField("VAR").variable.name;
  let projectileTypeID;

  if (typeof window.projectileTypeNames !== 'undefined') {
    const searchValue = this.getField("VAR").variable.name;

    for (let i = 0; i < window.projectileTypeNames.length; i++) {
      if (window.projectileTypeNames[i][0] === searchValue) {
        projectileTypeID = (window.projectileTypeNames[i][1]);
        break;
      }
    }
  }

  // Generate the function call for this block.
  const code = `'${projectileTypeID}'`;
  return [code, generator.ORDER_NONE];
};

forBlock['particle'] = function (block, generator) {
  const particle = this.getField("VAR").variable.name;

  // Generate the function call for this block.
  const code = `'${particle}'`;
  return [code, generator.ORDER_NONE];
};

forBlock['item_type'] = function (block, generator) {
  const itemType = this.getField("VAR").variable.name;
  let itemTypeID;

  if (typeof window.itemTypeNames !== 'undefined') {
    const searchValue = this.getField("VAR").variable.name;

    for (let i = 0; i < window.itemTypeNames.length; i++) {
      if (window.itemTypeNames[i][0] === searchValue) {
        itemTypeID = (window.itemTypeNames[i][1]);
        break;
      }
    }
  }

  // Generate the function call for this block.
  const code = `'${itemTypeID}'`;
  return [code, generator.ORDER_NONE];
};

forBlock['sound'] = function (block, generator) {
  const sound = this.getField("VAR").variable.name;

  // Generate the function call for this block.
  const code = `'${sound}'`;
  return [code, generator.ORDER_NONE];
};

forBlock['music'] = function (block, generator) {
  const music = this.getField("VAR").variable.name;

  // Generate the function call for this block.
  const code = `'${music}'`;
  return [code, generator.ORDER_NONE];
};

forBlock['player_variable'] = function (block, generator) {
  const playerVar = this.getField("VAR").variable.name;

  // Generate the function call for this block.
  const code = `'${playerVar}'`;
  return [code, generator.ORDER_NONE];
};

forBlock['region'] = function (block, generator) {
  const region = this.getField("VAR").variable.name;

  // Generate the function call for this block.
  const code = `'${region}'`;
  return [code, generator.ORDER_NONE];
};

forBlock['opendialogue'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  let dialogueID;

  if (typeof window.dialogueNames !== 'undefined') {
    const searchValue = this.getField("VAR").variable.name;

    for (let i = 0; i < window.dialogueNames.length; i++) {
      if (window.dialogueNames[i][0] === searchValue) {
        dialogueID = (window.dialogueNames[i][1]);
        break;
      }
    }
  }

  // Generate the function call for this block.
  const code = `openDialogueForPlayer('${dialogueID}', ${player})\n`;
  return code;
};

forBlock['openshop'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  let shopID;

  if (typeof window.shopNames !== 'undefined') {
    const searchValue = this.getField("VAR").variable.name;

    for (let i = 0; i < window.shopNames.length; i++) {
      if (window.shopNames[i][0] === searchValue) {
        shopID = (window.shopNames[i][1]);
        break;
      }
    }
  }

  // Generate the function call for this block.
  const code = `openShopForPlayer('${shopID}', ${player})\n`;
  return code;
};

forBlock['playsoundforplayer'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const sound = this.getField("VAR").variable.name;

  // Generate the function call for this block.
  const code = `playSoundForPlayer('${sound}', ${player})\n`;
  return code;
};

forBlock['playmusicforplayer'] = function (block, generator) {
  const player = generator.valueToCode(block, 'player', Order.NONE) || "";
  const music = this.getField("VAR").variable.name;

  // Generate the function call for this block.
  const code = `playMusicForPlayer('${music}', ${player})\n`;
  return code;
};