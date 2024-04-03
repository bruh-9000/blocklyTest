/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/*
This toolbox contains nearly every single built-in block that Blockly offers,
in addition to the custom block 'add_text' this sample app adds.
You probably don't need every single block, and should consider either rewriting
your toolbox from scratch, or carefully choosing whether you need each block
listed here.
*/

export const toolbox = {
  'kind': 'categoryToolbox',
  'contents': [
    {
      'kind': 'search',
      'name': 'Search',
      'contents': [],
    },
    {
      'kind': 'sep',
    },
    {
      'kind': 'category',
      'name': 'Triggers',
      'categorystyle': 'triggers_category',
      'contents': [
        {
          "kind": "label",
          "text": "Core Blocks",
        },
        {
          'kind': 'block',
          'type': 'triggers',
        },
        {
          'kind': 'block',
          'type': 'script',
        },
        {
          "kind": "label",
          "text": "Triggers",
        },
        {
          'kind': 'block',
          'type': 'secondtick',
        },
        {
          'kind': 'block',
          'type': 'frametick',
        },
        {
          'kind': 'block',
          'type': 'gamestart',
        },
        {
          'kind': 'block',
          'type': 'servershuttingdown',
        },
        {
          'kind': 'block',
          'type': 'playerjoinsgame',
        },
        {
          'kind': 'block',
          'type': 'playerleavesgame',
        },
        {
          'kind': 'block',
          'type': 'playerSendsChatMessage',
        },
        {
          'kind': 'block',
          'type': 'onpostresponse',
        },
        {
          'kind': 'block',
          'type': 'unitTouchesWall',
        },
        {
          'kind': 'block',
          'type': 'unitUsesItem',
        },
        {
          'kind': 'block',
          'type': 'unitAttributeBecomesZero',
        },
        {
          'kind': 'block',
          'type': 'unitStartsUsingAnItem',
        },
        {
          'kind': 'block',
          'type': 'unitAttributeBecomesFull',
        },
        {
          'kind': 'block',
          'type': 'unitEntersRegion',
        },
        {
          'kind': 'block',
          'type': 'unitDroppedAnItem',
        },
        {
          'kind': 'block',
          'type': 'unitLeavesRegion',
        },
        {
          'kind': 'block',
          'type': 'unitSelectsItem',
        },
        {
          'kind': 'block',
          'type': 'unitAttacksUnit',
        },
        {
          'kind': 'block',
          'type': 'unitStopsUsingAnItem',
        },
        {
          'kind': 'block',
          'type': 'unitTouchesProjectile',
        },
        {
          'kind': 'block',
          'type': 'unitPickedAnItem',
        },
        {
          'kind': 'block',
          'type': 'unitTouchesItem',
        },
      ]
    },
    {
      'kind': 'sep',
    },
    {
      'kind': 'category',
      'name': 'System',
      'categorystyle': 'system_category',
      'contents': [
        {
          "kind": "label",
          "text": "Comparison",
        },
        {
          'kind': 'block',
          'type': 'ifelse',
        },
        {
          'kind': 'block',
          'type': 'comparison',
        }, 
        {
          'kind': 'block',
          'type': 'and',
        }, 
        {
          'kind': 'block',
          'type': 'or',
        },  
        {
          "kind": "label",
          "text": "Other",
        },  
        {
          'kind': 'block',
          'type': 'runscript',
          'inputs': {
            'VAR': {
              'shadow': {
                'type': 'script1',
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'comment',
        },
        {
          'kind': 'block',
          'type': 'colour_hsv_sliders',
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Loops',
      'categorystyle': 'system_category',
      'contents': [
        {
          "kind": "label",
          "text": "General",
        },
        {
          'kind': 'block',
          'type': 'repeat',
          'inputs': {
            'times': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 10,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'repeatwithdelay',
          'inputs': {
            'times': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 10,
                },
              },
            },
            'delay': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1000,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'while',
        },
        {
          'kind': 'block',
          'type': 'break',
        }, 
        {
          'kind': 'block',
          'type': 'continue',
        },   
        {
          "kind": "label",
          "text": "Unit Groups",
        },
        {
          'kind': 'block',
          'type': 'forallunits',
        },
        {
          'kind': 'block',
          'type': 'allunits',
        },
        {
          'kind': 'block',
          'type': 'allunitsinregion',
        },
        {
          'kind': 'block',
          'type': 'allunitsownedbyplayer',
        },
        {
          "kind": "label",
          "text": "Player Groups",
        },
        {
          'kind': 'block',
          'type': 'forallplayers',
        },
        {
          'kind': 'block',
          'type': 'humanplayers',
        },
        {
          'kind': 'block',
          'type': 'botplayers',
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Math',
      'categorystyle': 'logic_category',
      'contents': [
        {
          "kind": "label",
          "text": "Basic",
        },
        {
          'kind': 'block',
          'type': 'math_number',
          'fields': {
            'NUM': 123,
          },
        },
        {
          'kind': 'block',
          'type': 'math_arithmetic',
          'inputs': {
            'A': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1,
                },
              },
            },
            'B': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1,
                },
              },
            },
          },
        },
        {
          "kind": "label",
          "text": "Comparison",
        },
        {
          'kind': 'block',
          'type': 'number_comparison',
        },   
        {
          "kind": "label",
          "text": "Angles",
        },   
        {
          'kind': 'block',
          'type': 'angle'
        },
        {
          "kind": "label",
          "text": "Other",
        },
        {
          'kind': 'block',
          'type': 'str2num',
          'inputs': {
            'str1': {
              'shadow': {
                'type': 'string',
                'fields': {
                  'text': "123",
                },
              },
            },
          },
        },  
      ]
    },
    {
      'kind': 'category',
      'name': 'Text',
      'categorystyle': 'logic_category',
      'contents': [
        {
          "kind": "label",
          "text": "Basic",
        },
        {
          'kind': 'block',
          'type': 'string',
        },
        {
          'kind': 'block',
          'type': 'join',
        },
        {
          'kind': 'block',
          'type': 'lastchatmessagesent',
        },
        {
          'kind': 'block',
          'type': 'getplayername',
        },
        {
          'kind': 'block',
          'type': 'num2str',
          'inputs': {
            'num': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 123,
                },
              },
            },
          },
        },  
      ]
    },
    {
      'kind': 'category',
      'name': 'Boolean',
      'categorystyle': 'logic_category',
      'contents': [
        {
          "kind": "label",
          "text": "Basic",
        },
        {
          'kind': 'block',
          'type': 'bool',
        },    
      ]
    },
    {
      'kind': 'category',
      'name': 'Positions',
      'categorystyle': 'logic_category',
      'contents': [
        {
          "kind": "label",
          "text": "Positions",
        },
        {
          'kind': 'block',
          'type': 'pos',
          'inputs': {
            'x': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 64,
                },
              },
            },
            'y': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 64,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'getentityposition',
        },
        {
          'kind': 'block',
          'type': 'centerofregion',
        },
      ]
    },
    {
      'kind': 'sep',
    },
    {
      'kind': 'category',
      'name': 'Entities',
      'categorystyle': 'entities_category',
      'contents': [
        {
          "kind": "label",
          "text": "Actions",
        },
        {
          'kind': 'block',
          'type': 'moveentity',
        },
        {
          'kind': 'block',
          'type': 'destroyentity',
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Item',
      'categorystyle': 'entities_category',
      'contents': [
        {
          "kind": "label",
          "text": "Actions",
        },
        {
          'kind': 'block',
          'type': 'givenewitemtounit',
          'inputs': {
            'VAR': {
              'shadow': {
                'type': 'item_type',
              },
            },
          },
        },
        {
          "kind": "label",
          "text": "Items",
        },
        {
          'kind': 'block',
          'type': 'triggeringitem',
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Projectile',
      'categorystyle': 'entities_category',
      'contents': [
        {
          "kind": "label",
          "text": "Actions",
        },
        {
          'kind': 'block',
          'type': 'createprojectileatposition',
          'inputs': {
            'VAR': {
              'shadow': {
                'type': 'projectile_type',
              },
            },
            'velocity': {
              'shadow': {
                'type': 'math_number',
              },
            },
            'radians': {
              'shadow': {
                'type': 'math_number',
              },
            },
          },
        },
        {
          "kind": "label",
          "text": "Projectiles",
        },
        {
          'kind': 'block',
          'type': 'triggeringprojectile',
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Region',
      'categorystyle': 'entities_category',
      'contents': [
        {
          "kind": "label",
          "text": "Regions",
        },
        {
          'kind': 'block',
          'type': 'getentiremapregion',
        },
        {
          'kind': 'block',
          'type': 'triggeringregion',
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Player',
      'categorystyle': 'players_category',
      'contents': [
        {
          "kind": "label",
          "text": "Actions",
        },
        {
          'kind': 'block',
          'type': 'playercameratrackunit',
        },
        {
          'kind': 'block',
          'type': 'kickplayer',
          'inputs': {
            'message': {
              'shadow': {
                'type': 'string',
                'fields': {
                  'text': "",
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'setplayername',
          'inputs': {
            'name': {
              'shadow': {
                'type': 'string',
                'fields': {
                  'text': "",
                },
              },
            },
          },
        },
        {
          "kind": "label",
          "text": "Players",
        },
        {
          'kind': 'block',
          'type': 'owner',
        },
        {
          'kind': 'block',
          'type': 'triggeringplayer',
        },
        {
          'kind': 'block',
          'type': 'selectedplayer',
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Unit',
      'categorystyle': 'units_category',
      'contents': [
        {
          "kind": "label",
          "text": "Actions",
        },
        {
          'kind': 'block',
          'type': 'createunitatposition',
          'inputs': {
            'unittype': {
              'shadow': {
                'type': 'unit_type',
              },
            },
            'angle': {
              'shadow': {
                'type': 'angle',
                'fields': {
                  'angle': 90,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'setunitnamelabel',
          'inputs': {
            'name': {
              'shadow': {
                'type': 'string',
                'fields': {
                  'text': "",
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'dropallitems',
        },
        {
          "kind": "label",
          "text": "Units",
        },
        {
          'kind': 'block',
          'type': 'triggeringunit',
        },
        {
          'kind': 'block',
          'type': 'selectedunit',
        },
        {
          'kind': 'block',
          'type': 'lastcreatedunit',
        },
        {
          'kind': 'block',
          'type': 'getplayerselectedunit',
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Types',
      'categorystyle': 'others_category',
      'contents': [
        {
          "kind": "label",
          "text": "Item Type",
        },
        {
          'kind': 'block',
          'type': 'item_type',
        },
        {
          'kind': 'block',
          'type': 'itemtypeofitem',
        }, 
        {
          "kind": "label",
          "text": "Projectile Type",
        },
        {
          'kind': 'block',
          'type': 'projectile_type',
        },
        {
          'kind': 'block',
          'type': 'projectiletypeofprojectile',
        }, 
        {
          "kind": "label",
          "text": "Region",
        },
        {
          'kind': 'block',
          'type': 'region',
        },
        {
          "kind": "label",
          "text": "Player Type",
        },
        {
          'kind': 'block',
          'type': 'player_type',
        },
        {
          'kind': 'block',
          'type': 'playertypeofplayer',
        },
        {
          "kind": "label",
          "text": "Unit Type",
        },
        {
          'kind': 'block',
          'type': 'unit_type',
        },
        {
          'kind': 'block',
          'type': 'unittypeofunit',
        },
      ]
    },
    {
      'kind': 'sep',
    },
    {
      'kind': 'category',
      'name': 'UI',
      'categorystyle': 'others_category',
      'contents': [
        {
          "kind": "label",
          "text": "Dialogues",
        },
        {
          'kind': 'block',
          'type': 'opendialogue',
          'inputs': {
            'VAR': {
              'shadow': {
                'type': 'dialogue',
              },
            },
          },
        },
        {
          "kind": "label",
          "text": "Shops",
        },
        {
          'kind': 'block',
          'type': 'openshop',
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Chat',
      'categorystyle': 'others_category',
      'contents': [
        {
          'kind': 'block',
          'type': 'sendchatmessage',
          'inputs': {
            'message': {
              'shadow': {
                'type': 'string',
                'fields': {
                  'text': "Hello world!",
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'sendchatmessagetoplayer',
          'inputs': {
            'message': {
              'shadow': {
                'type': 'string',
                'fields': {
                  'text': "Hello world!",
                },
              },
            },
          },
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'AI',
      'categorystyle': 'others_category',
      'contents': [

      ]
    },
    {
      'kind': 'category',
      'name': 'Sound & Music',
      'categorystyle': 'others_category',
      'contents': [
        {
          "kind": "label",
          "text": "Sound",
        },
        {
          'kind': 'block',
          'type': 'playsoundforplayer',
        },
        {
          "kind": "label",
          "text": "Music",
        },
        {
          'kind': 'block',
          'type': 'playmusicforplayer',
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Variables',
      'categorystyle': 'variables_category',
      'contents': [
        /*
        {
          "kind": "button",
          "text": "New Variable",
          "callbackKey": "newVar"
        },
        */
        {
          'kind': 'block',
          'type': 'setvariable'
        },
        {
          'kind': 'block',
          'type': 'getvariable'
        },
        {
          'kind': 'block',
          'type': 'increasevariablebynumber',
          'inputs': {
            'num': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 0,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'decreasevariablebynumber',
          'inputs': {
            'num': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 0,
                },
              },
            },
          },
        },
      ]
    },
  ],
};