/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
import {blocks} from './blocks/text';
import {forBlock} from './generators/javascript';
import {javascriptGenerator} from 'blockly/javascript';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';
import '@blockly/toolbox-search';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);
Object.assign(javascriptGenerator.forBlock, forBlock);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');

let ws = Blockly.inject(
  blocklyDiv,
  {
    toolbox: toolbox,
    grid: {
      spacing: 35,
      length: 3,
      colour: '#ccc',
      snap: false
    },
    trashcan: true,
    move: {
      scrollbars: {
        horizontal: true,
        vertical: true
      },
      drag: true,
      wheel: false,
    },
    renderer: 'zelos',
    disable: false,
    collapse: false,
    comments: false,
    theme: {
      "categoryStyles" : {
         "units_category": {
          "colour": "#9fa55b"
         },
         "triggers_category": {
          "colour": "#5ba55b"
         },
         "text_category": {
          "colour": "#5ba58c"
         },
         "logic_category": {
          "colour": "#5b67a5"
         },
         "players_category": {
          "colour": "#745ba5"
         },
         "entities_category": {
          "colour": "#995ba5"
         },
         "others_category": {
          "colour": "#a55b80"
         },
      },
    }
  }
);

// This function resets the code and output divs, shows the
// generated code from the workspace, and evals the code.
// In a real application, you probably shouldn't use `eval`.
const runCode = () => {
  const code = javascriptGenerator.workspaceToCode(ws).replace(/;\s*$/gm, '\n');
  
  codeDiv.innerText = code;

  outputDiv.innerHTML = '';

  // eval(code);
};

// Load the initial state from storage and run the code.
load(ws);
runCode();

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
  // UI events are things like scrolling, zooming, etc.
  // No need to save after one of these.
  if (e.isUiEvent) return;
  save(ws);
});

// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
  // Don't run the code when the workspace finishes loading; we're
  // already running it once when the application starts.
  // Don't run the code during drags; we might have invalid state.
  if (e.isUiEvent || e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()) {
    return;
  }
  runCode();
});

saveButton.addEventListener("click", () => {
  const state = Blockly.serialization.workspaces.save(ws);
  const stateString = JSON.stringify(state);

  var filename = "moddBlockly.txt";
  var element = document.createElement('a');

  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(stateString));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
});

loadButton.addEventListener("click", () => {
  const input = document.createElement('input');
  let fileContent;
  input.type = 'file';
  input.accept = '.txt'; // Specify the file types you want to accept
  input.onchange = function(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function(event) {
        fileContent = JSON.parse(event.target.result); // Parse directly without decoding
        Blockly.serialization.workspaces.load(fileContent, ws);
      };
      reader.readAsText(file);
  };
  input.click();
});

moddScriptButton.addEventListener("click", () => {
  const output = document.getElementById('generatedCode').innerHTML
            .replace(/<code>/g, "")
            .replace(/<\/code>/g, "")
            .replace(/<br>/g, "\n")
            .trim();

  var filename = "moddScript.txt";
  var element = document.createElement('a');

  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(output));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
});

document.addEventListener("DOMContentLoaded", function() {
  const dropdownButtons = document.querySelectorAll(".dropbtn");

  dropdownButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          // Close all dropdowns
          closeAllDropdowns();

          const dropdownContent = this.nextElementSibling;
          dropdownContent.style.display = "block";
      });
  });

  // Close all dropdowns when clicking outside of them
  document.addEventListener("click", function(event) {
      if (!event.target.matches(".dropbtn")) {
          closeAllDropdowns();
      }
  });

  function closeAllDropdowns() {
      const dropdownContents = document.querySelectorAll(".dropdown-content");
      dropdownContents.forEach(function(content) {
          content.style.display = "none";
      });
  }
});

playerJoinsGame.addEventListener("click", () => {
  let fileContent = JSON.parse(`{\"blocks\":{\"languageVersion\":0,\"blocks\":[{\"type\":\"triggers\",\"id\":\"sLORV*}FPc=_GBvkxM5H\",\"x\":0,\"y\":0,\"next\":{\"block\":{\"type\":\"playerjoinsgame\",\"id\":\"IO:82aWq^oxNcP|z,$dO\"}}},{\"type\":\"script\",\"id\":\"42xFuxvg#uGKrcUxH0IM\",\"x\":0,\"y\":152,\"next\":{\"block\":{\"type\":\"sendchatmessage\",\"id\":\"zy~MRC2MtAF,q20UgS9\`\",\"inputs\":{\"message\":{\"shadow\":{\"type\":\"text\",\"id\":\"m)Bvl917,+vgB+M)(@N+\",\"fields\":{\"TEXT\":\"Hello world!\"}},\"block\":{\"type\":\"join\",\"id\":\"XFOIha[*)/F=o=m:MpXT\",\"inputs\":{\"text1\":{\"block\":{\"type\":\"getplayername\",\"id\":\"Yq-{2sAkXkxbM+9Xh/Xh\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"4f.V4f*UT/WGh}UB9Un)\"}}}}},\"text2\":{\"block\":{\"type\":\"string\",\"id\":\"|?t/fo\`Y)TMYfk~*:;@u\",\"fields\":{\"text\":\" has joined the game!\"}}}}}}},\"next\":{\"block\":{\"type\":\"createunitatposition\",\"id\":\"]U-*%vl,@Cdy@9z,ZG?_\",\"inputs\":{\"unittype\":{\"block\":{\"type\":\"string\",\"id\":\"/e[Ne5ZB10uU9D^bqX=D\",\"fields\":{\"text\":\"Homie\"}}},\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"tU#UJBE+x@T_5W3aB]4G\"}},\"pos\":{\"block\":{\"type\":\"pos\",\"id\":\",1-R9PH[Tq8d0Eb=X8Bj\",\"inputs\":{\"x\":{\"shadow\":{\"type\":\"math_number\",\"id\":\"W4piXAZk_!_k/6!joD)+\",\"fields\":{\"NUM\":64}}},\"y\":{\"shadow\":{\"type\":\"math_number\",\"id\":\"O=t2^6)Zs-G+#Ji{6~hE\",\"fields\":{\"NUM\":64}}}}}},\"angle\":{\"block\":{\"type\":\"math_number\",\"id\":\"Z)qg%J@^O5M2VJ$ICcP9\",\"fields\":{\"NUM\":123}}}},\"next\":{\"block\":{\"type\":\"playercameratrackunit\",\"id\":\"Y0;pnV7cfstg#^n.2jqC\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"aW+(KcI9E3y8j:555vJl\"}},\"unit\":{\"block\":{\"type\":\"lastcreatedunit\",\"id\":\"ls~XiX4^Sm+DLr:szB}$\"}}}}}}}}}}]}}  `);
  Blockly.serialization.workspaces.load(fileContent, ws);
});

playerLeavesGame.addEventListener("click", () => {
  let fileContent = JSON.parse(`{\"blocks\":{\"languageVersion\":0,\"blocks\":[{\"type\":\"triggers\",\"id\":\"sLORV*}FPc=_GBvkxM5H\",\"x\":0,\"y\":0,\"next\":{\"block\":{\"type\":\"playerleavesgame\",\"id\":\"O=8-[GL:n:[8j8eE1IqO\"}}},{\"type\":\"script\",\"id\":\"42xFuxvg#uGKrcUxH0IM\",\"x\":0,\"y\":152,\"next\":{\"block\":{\"type\":\"sendchatmessage\",\"id\":\"zy~MRC2MtAF,q20UgS9\`\",\"inputs\":{\"message\":{\"shadow\":{\"type\":\"text\",\"id\":\"m)Bvl917,+vgB+M)(@N+\",\"fields\":{\"TEXT\":\"Hello world!\"}},\"block\":{\"type\":\"join\",\"id\":\"XFOIha[*)/F=o=m:MpXT\",\"inputs\":{\"text1\":{\"block\":{\"type\":\"getplayername\",\"id\":\"Yq-{2sAkXkxbM+9Xh/Xh\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"4f.V4f*UT/WGh}UB9Un)\"}}}}},\"text2\":{\"block\":{\"type\":\"string\",\"id\":\"N,#M$RlSnsB2?C54ltsS\",\"fields\":{\"text\":\" has left the game!\"}}}}}}},\"next\":{\"block\":{\"type\":\"destroyentity\",\"id\":\"#nXn8nDT|7e.Tr8TnK|c\",\"inputs\":{\"entity\":{\"block\":{\"type\":\"getplayerselectedunit\",\"id\":\"luoDlH!VDZ9|)^\`t|{f4\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"zasKE$B,Ie/_PWL{}}1#\"}}}}}}}}}}}]}}  `);
  Blockly.serialization.workspaces.load(fileContent, ws);
});

slashCommand.addEventListener("click", () => {
  let fileContent = JSON.parse(`{\"blocks\":{\"languageVersion\":0,\"blocks\":[{\"type\":\"triggers\",\"id\":\"sLORV*}FPc=_GBvkxM5H\",\"x\":0,\"y\":0,\"next\":{\"block\":{\"type\":\"playerSendsChatMessage\",\"id\":\"uZNZ#T4^aW34mU}-iGSH\"}}},{\"type\":\"script\",\"id\":\"42xFuxvg#uGKrcUxH0IM\",\"x\":0,\"y\":152,\"next\":{\"block\":{\"type\":\"ifelse\",\"id\":\"h89PVVMcOV7;3~mbt\`$B\",\"inputs\":{\"check\":{\"block\":{\"type\":\"comparison\",\"id\":\"z%#q1PkVt[ooF{$iw@X{\",\"fields\":{\"value\":\"==\"},\"inputs\":{\"val1\":{\"block\":{\"type\":\"lastchatmessagesent\",\"id\":\"pc257H{HOnY2_yy$*S6;\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"\`p:?8JT51O|_.-E86tjt\"}}}}},\"val2\":{\"block\":{\"type\":\"string\",\"id\":\"^}.!c#)g%n:a$Q]G:k%E\",\"fields\":{\"text\":\"/spawn\"}}}}}},\"do1\":{\"block\":{\"type\":\"moveentity\",\"id\":\"w{]ey%tWg|9_~;7ff56r\",\"inputs\":{\"entity\":{\"block\":{\"type\":\"getplayerselectedunit\",\"id\":\"luoDlH!VDZ9|)^\`t|{f4\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"zasKE$B,Ie/_PWL{}}1#\"}}}}},\"pos\":{\"block\":{\"type\":\"pos\",\"id\":\"%-~X(mc#QF+z+[liadI6\",\"inputs\":{\"x\":{\"shadow\":{\"type\":\"math_number\",\"id\":\"tVZ[J?wO\`]#k{/LPL;w^\",\"fields\":{\"NUM\":64}}},\"y\":{\"shadow\":{\"type\":\"math_number\",\"id\":\"8;0$asP~l*2E*!X^GDqq\",\"fields\":{\"NUM\":64}}}}}}}}}}}}}]}}  `);
  Blockly.serialization.workspaces.load(fileContent, ws);
});

undoButton.addEventListener("click", () => {
  ws.undo(false);
});

redoButton.addEventListener("click", () => {
  ws.undo(true);
});

cleanWorkspace.addEventListener("click", () => {
  ws.cleanUp();
});

clearWorkspace.addEventListener("click", () => {
  ws.clear();
});

const settingsButton = document.querySelector('.gear-btn');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('#closePopup');

settingsButton.addEventListener("click", () => {
    popup.classList.add("show");
});

closeButton.addEventListener("click", () => {
    popup.classList.remove("show");
});

window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.classList.remove("show");
    }
});

copyText.addEventListener("click", () => {
  const text = document.getElementById('generatedCode').innerHTML
    .replace(/<code>/g, "")
    .replace(/<\/code>/g, "")
    .replace(/<br>/g, "\n")
    .trim();

  navigator.clipboard.writeText(text)
});