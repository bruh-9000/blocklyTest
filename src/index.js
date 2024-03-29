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
import DarkTheme from '@blockly/theme-dark';

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
};

// Load the initial state from storage and run the code.
load(ws);
runCode();

let saved = true;
let newCreated;
let originalStatus = Blockly.serialization.workspaces.save(ws);
let replacingWith;

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

ws.addChangeListener((e) => {
  if (e.isUiEvent || e.type == Blockly.Events.FINISHED_LOADING) return;

  if (newCreated) {
    newCreated = false;
  } else {
    if (e.type == "move") {
      document.getElementById('saveStatus').innerText = "↺";
      saved = false;
    }
  }

  if (originalStatus.blocks == Blockly.serialization.workspaces.save(ws).blocks) {
    document.getElementById('saveStatus').innerText = "🖫";
    saved = true;
  }
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

  document.getElementById('saveStatus').innerText = "🖫";
  saved = true;
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
  const length = Blockly.serialization.workspaces.save(ws).blocks == undefined;
  
  replacingWith = "clear"

  if (!length || saved == false) {
    popup2.classList.add("show");
  } else {
    ws.clear();
    saved = false;
    document.getElementById('saveStatus').innerText = "↺";
  }
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

const newButton = document.querySelector('#newButton');
const popup2 = document.querySelector('.popup2');
const cancelButton = document.querySelector('#cancelPopup');
const confirmButton = document.querySelector('#confirmPopup');

newButton.addEventListener("click", () => {
  const length = Blockly.serialization.workspaces.save(ws).blocks == undefined;

  replacingWith = "new";

  if (!length || saved == false) {
    popup2.classList.add("show");
  } else {
    saved = true;
    document.getElementById('saveStatus').innerText = "🖫";
    newCreated = true;
    ws.clear()
  }
});

cancelButton.addEventListener("click", () => {
  popup2.classList.remove("show");
});

confirmButton.addEventListener("click", () => {
  popup2.classList.remove("show");

  let fileContent;

  if (replacingWith == "new") {
    saved = true;
    document.getElementById('saveStatus').innerText = "🖫";
    newCreated = true;
    fileContent = JSON.parse(`{\"blocks\":{\"languageVersion\":0,\"blocks\":[{\"type\":\"triggers\",\"id\":\"J$H)K[jsL^dVHR|m39.u\",\"x\":0,\"y\":0},{\"type\":\"script\",\"id\":\"H{)R(5,O)hstiO4w|K=T\",\"x\":0,\"y\":104}]}}`);
  } else if (replacingWith == "playerJoinsGame") {
    fileContent = JSON.parse(`{\"blocks\":{\"languageVersion\":0,\"blocks\":[{\"type\":\"triggers\",\"id\":\"sLORV*}FPc=_GBvkxM5H\",\"x\":0,\"y\":0,\"next\":{\"block\":{\"type\":\"playerjoinsgame\",\"id\":\"IO:82aWq^oxNcP|z,$dO\"}}},{\"type\":\"script\",\"id\":\"42xFuxvg#uGKrcUxH0IM\",\"x\":0,\"y\":152,\"next\":{\"block\":{\"type\":\"sendchatmessage\",\"id\":\"zy~MRC2MtAF,q20UgS9\`\",\"inputs\":{\"message\":{\"shadow\":{\"type\":\"text\",\"id\":\"m)Bvl917,+vgB+M)(@N+\",\"fields\":{\"TEXT\":\"Hello world!\"}},\"block\":{\"type\":\"join\",\"id\":\"XFOIha[*)/F=o=m:MpXT\",\"inputs\":{\"text1\":{\"block\":{\"type\":\"getplayername\",\"id\":\"Yq-{2sAkXkxbM+9Xh/Xh\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"4f.V4f*UT/WGh}UB9Un)\"}}}}},\"text2\":{\"block\":{\"type\":\"string\",\"id\":\"|?t/fo\`Y)TMYfk~*:;@u\",\"fields\":{\"text\":\" has joined the game!\"}}}}}}},\"next\":{\"block\":{\"type\":\"createunitatposition\",\"id\":\"]U-*%vl,@Cdy@9z,ZG?_\",\"inputs\":{\"unittype\":{\"block\":{\"type\":\"string\",\"id\":\"/e[Ne5ZB10uU9D^bqX=D\",\"fields\":{\"text\":\"Homie\"}}},\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"tU#UJBE+x@T_5W3aB]4G\"}},\"pos\":{\"block\":{\"type\":\"pos\",\"id\":\",1-R9PH[Tq8d0Eb=X8Bj\",\"inputs\":{\"x\":{\"shadow\":{\"type\":\"math_number\",\"id\":\"W4piXAZk_!_k/6!joD)+\",\"fields\":{\"NUM\":64}}},\"y\":{\"shadow\":{\"type\":\"math_number\",\"id\":\"O=t2^6)Zs-G+#Ji{6~hE\",\"fields\":{\"NUM\":64}}}}}},\"angle\":{\"block\":{\"type\":\"math_number\",\"id\":\"Z)qg%J@^O5M2VJ$ICcP9\",\"fields\":{\"NUM\":123}}}},\"next\":{\"block\":{\"type\":\"playercameratrackunit\",\"id\":\"Y0;pnV7cfstg#^n.2jqC\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"aW+(KcI9E3y8j:555vJl\"}},\"unit\":{\"block\":{\"type\":\"lastcreatedunit\",\"id\":\"ls~XiX4^Sm+DLr:szB}$\"}}}}}}}}}}]}}  `);
  } else if (replacingWith == "playerLeavesGame") {
    fileContent = JSON.parse(`{\"blocks\":{\"languageVersion\":0,\"blocks\":[{\"type\":\"triggers\",\"id\":\"sLORV*}FPc=_GBvkxM5H\",\"x\":0,\"y\":0,\"next\":{\"block\":{\"type\":\"playerleavesgame\",\"id\":\"O=8-[GL:n:[8j8eE1IqO\"}}},{\"type\":\"script\",\"id\":\"42xFuxvg#uGKrcUxH0IM\",\"x\":0,\"y\":152,\"next\":{\"block\":{\"type\":\"sendchatmessage\",\"id\":\"zy~MRC2MtAF,q20UgS9\`\",\"inputs\":{\"message\":{\"shadow\":{\"type\":\"text\",\"id\":\"m)Bvl917,+vgB+M)(@N+\",\"fields\":{\"TEXT\":\"Hello world!\"}},\"block\":{\"type\":\"join\",\"id\":\"XFOIha[*)/F=o=m:MpXT\",\"inputs\":{\"text1\":{\"block\":{\"type\":\"getplayername\",\"id\":\"Yq-{2sAkXkxbM+9Xh/Xh\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"4f.V4f*UT/WGh}UB9Un)\"}}}}},\"text2\":{\"block\":{\"type\":\"string\",\"id\":\"N,#M$RlSnsB2?C54ltsS\",\"fields\":{\"text\":\" has left the game!\"}}}}}}},\"next\":{\"block\":{\"type\":\"destroyentity\",\"id\":\"#nXn8nDT|7e.Tr8TnK|c\",\"inputs\":{\"entity\":{\"block\":{\"type\":\"getplayerselectedunit\",\"id\":\"luoDlH!VDZ9|)^\`t|{f4\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"zasKE$B,Ie/_PWL{}}1#\"}}}}}}}}}}}]}}  `);
  } else if (replacingWith == "slashCommand") {
    fileContent = JSON.parse(`{\"blocks\":{\"languageVersion\":0,\"blocks\":[{\"type\":\"triggers\",\"id\":\"sLORV*}FPc=_GBvkxM5H\",\"x\":0,\"y\":0,\"next\":{\"block\":{\"type\":\"playerSendsChatMessage\",\"id\":\"uZNZ#T4^aW34mU}-iGSH\"}}},{\"type\":\"script\",\"id\":\"42xFuxvg#uGKrcUxH0IM\",\"x\":0,\"y\":152,\"next\":{\"block\":{\"type\":\"ifelse\",\"id\":\"h89PVVMcOV7;3~mbt\`$B\",\"inputs\":{\"check\":{\"block\":{\"type\":\"comparison\",\"id\":\"z%#q1PkVt[ooF{$iw@X{\",\"fields\":{\"value\":\"==\"},\"inputs\":{\"val1\":{\"block\":{\"type\":\"lastchatmessagesent\",\"id\":\"pc257H{HOnY2_yy$*S6;\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"\`p:?8JT51O|_.-E86tjt\"}}}}},\"val2\":{\"block\":{\"type\":\"string\",\"id\":\"^}.!c#)g%n:a$Q]G:k%E\",\"fields\":{\"text\":\"/spawn\"}}}}}},\"do1\":{\"block\":{\"type\":\"moveentity\",\"id\":\"w{]ey%tWg|9_~;7ff56r\",\"inputs\":{\"entity\":{\"block\":{\"type\":\"getplayerselectedunit\",\"id\":\"luoDlH!VDZ9|)^\`t|{f4\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"zasKE$B,Ie/_PWL{}}1#\"}}}}},\"pos\":{\"block\":{\"type\":\"pos\",\"id\":\"%-~X(mc#QF+z+[liadI6\",\"inputs\":{\"x\":{\"shadow\":{\"type\":\"math_number\",\"id\":\"tVZ[J?wO\`]#k{/LPL;w^\",\"fields\":{\"NUM\":64}}},\"y\":{\"shadow\":{\"type\":\"math_number\",\"id\":\"8;0$asP~l*2E*!X^GDqq\",\"fields\":{\"NUM\":64}}}}}}}}}}}}}]}}  `);
  } else if (replacingWith == "gameTimer") {
    fileContent = JSON.parse('{"blocks":{"languageVersion":0,"blocks":[{"type":"script","id":"wvj9vUS95,Rla$iSoJm-","x":55,"y":43,"next":{"block":{"type":"decreasevariablebynumber","id":"1jRfIB](%yiDKQu]1b(R","inputs":{"var":{"shadow":{"type":"string","id":"zHsI/8u5Kaq[LYPeZo`p","fields":{"text":"Timer"}}},"num":{"shadow":{"type":"math_number","id":"vf%bVUkw@k0m9XW:Z,Q.","fields":{"NUM":1}}}},"next":{"block":{"type":"ifelse","id":"RtD}iVINxo/Q+t{}ozGr","inputs":{"check":{"block":{"type":"number_comparison","id":"g$P+/8h:`AHFUwx#3pF7","fields":{"value":"=="},"inputs":{"val1":{"block":{"type":"string","id":"AS9J;O9+vUm9n,e7bHj*","fields":{"text":"Timer"}}},"val2":{"block":{"type":"math_number","id":"]L1J+A{)-7v*#~UOC@x^","fields":{"NUM":0}}}}}},"do1":{"block":{"type":"ifelse","id":"Q)dV%a=6s_L.fLJ(~Gj^","inputs":{"check":{"block":{"type":"comparison","id":"l3/46CRp1zd=kTWGMf$/","fields":{"value":"=="},"inputs":{"val1":{"block":{"type":"string","id":"kIqU.Vfl*7t[-e+NiBd)","fields":{"text":"State"}}},"val2":{"block":{"type":"string","id":"}PDarK_$^oZVUfWn#$.o","fields":{"text":"Playing"}}}}}},"do1":{"block":{"type":"setvariable","id":"jjG]:W^!=8?ziT^PDM[@","inputs":{"var":{"shadow":{"type":"string","id":"2O(eaU?jP*?Z//V?:)ni","fields":{"text":"State"}}},"value":{"block":{"type":"string","id":"_6WkWyIL]DF~~VEWgPNS","fields":{"text":"Starting"}}}},"next":{"block":{"type":"setvariable","id":";a@MdtA]+({Eq2|@sIm+","inputs":{"var":{"shadow":{"type":"string","id":"TkJh1*S}V;l);JSFZhy-","fields":{"text":"Timer"}}},"value":{"block":{"type":"math_number","id":"MoCeIe/#(xx:9+ds~/A*","fields":{"NUM":15}}}},"next":{"block":{"type":"sendchatmessage","id":"6zUvTbi$`)e41QQ!d}l}","inputs":{"message":{"shadow":{"type":"string","id":"jX1Gu{-wxYghF--LC)ev","fields":{"text":"Game is starting soon!"}}}}}}}}}},"else1":{"block":{"type":"setvariable","id":"uWNvQ)XYhT*u/;Y|F_ha","inputs":{"var":{"shadow":{"type":"string","id":"5Zuh_ce})_6=[*U2xG0U","fields":{"text":"State"}}},"value":{"block":{"type":"string","id":"zru==Z.,ZzG,Xh0Bo1jv","fields":{"text":"Playing"}}}},"next":{"block":{"type":"setvariable","id":"@|7%kb_C4Rvge9JGphVd","inputs":{"var":{"shadow":{"type":"string","id":"mz79F/b#npj)L`;Cug+B","fields":{"text":"Timer"}}},"value":{"block":{"type":"math_number","id":"{(^(4Wi,8CG9XEEk!=`X","fields":{"NUM":60}}}},"next":{"block":{"type":"sendchatmessage","id":"1XeERfU7+d5m]M5PBSff","inputs":{"message":{"shadow":{"type":"string","id":"k@W8|L;CB,2jw9UrOeEL","fields":{"text":"Game has started!"}}}}}}}}}}}}}}}}}}},{"type":"triggers","id":"X[0eLTMR4.CNO;U!4[ea","x":55,"y":-126,"next":{"block":{"type":"secondtick","id":",-MFx.Ut6FamRKc-XM2w"}}}]}}');
  } else if (replacingWith == "clear") {
    ws.clear()
  }

  if (replacingWith != "clear") {
    Blockly.serialization.workspaces.load(fileContent, ws);
  }
});

window.addEventListener("click", (event) => {
    if (event.target === popup2) {
        popup2.classList.remove("show");
    }
});

document.getElementById('saveStatus').addEventListener('mouseover', function() {
  var tooltipText = "";

  if (saved) {
    tooltipText = "Project has no new changes";
  } else {
    tooltipText = "Project is unsaved";
  }

  var tooltip = document.getElementById('statusTooltip');
  tooltip.innerText = tooltipText;
  tooltip.style.display = 'block';
});

document.getElementById('saveStatus').addEventListener('mouseout', function() {
  document.getElementById('statusTooltip').style.display = 'none';
});

playerJoinsGame.addEventListener("click", () => {
  const length = Blockly.serialization.workspaces.save(ws).blocks == undefined;
  
  replacingWith = "playerJoinsGame"

  if (!length || saved == false) {
    popup2.classList.add("show");
  } else {
    saved = false;
    document.getElementById('saveStatus').innerText = "↺";
  }
});

playerLeavesGame.addEventListener("click", () => {
  const length = Blockly.serialization.workspaces.save(ws).blocks == undefined;
  
  replacingWith = "playerLeavesGame"

  if (!length || saved == false) {
    popup2.classList.add("show");
  } else {
    saved = false;
    document.getElementById('saveStatus').innerText = "↺";
  }
});

slashCommand.addEventListener("click", () => {
  const length = Blockly.serialization.workspaces.save(ws).blocks == undefined;
  
  replacingWith = "slashCommand"

  if (!length || saved == false) {
    popup2.classList.add("show");
  } else {
    saved = false;
    document.getElementById('saveStatus').innerText = "↺";
  }
});

gameTimer.addEventListener("click", () => {
  const length = Blockly.serialization.workspaces.save(ws).blocks == undefined;
  
  replacingWith = "gameTimer"

  if (!length || saved == false) {
    popup2.classList.add("show");
  } else {
    saved = false;
    document.getElementById('saveStatus').innerText = "↺";
  }
});

document.getElementById('darkModeCheckbox').addEventListener('change', function(event) {
  if (event.target.checked) {
    ws.setTheme(DarkTheme);
    generatedCode.style.backgroundColor = "#42474f";
    generatedCode.style.color = "white";
    pageContainer.style.backgroundColor = "#1d1d1f";
  } else {
    ws.setTheme(Blockly.Themes.Classic);
    generatedCode.style.backgroundColor = "#c3c8db";
    generatedCode.style.color = "black";
    pageContainer.style.backgroundColor = "#edf0f2";
  }
});

document.addEventListener("DOMContentLoaded", function() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    ws.setTheme(DarkTheme);
    darkModeCheckbox.checked = true;
    generatedCode.style.backgroundColor = "#42474f";
    generatedCode.style.color = "white";
    pageContainer.style.backgroundColor = "#1d1d1f";
  } else {
    ws.setTheme(Blockly.Themes.Classic);
    generatedCode.style.backgroundColor = "#c3c8db";
    generatedCode.style.color = "black";
    pageContainer.style.backgroundColor = "#edf0f2";
  }
});

document.getElementById('outputCheckbox').addEventListener('change', function(event) {
  if (event.target.checked) {
    outputPane.style.display = "flex";
    Blockly.svgResize(ws);
  } else {
    outputPane.style.display = "none";
    Blockly.svgResize(ws);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  outputPane.style.display = "none";
  Blockly.svgResize(ws);
});

copyButton.addEventListener("click", () => {
  const text = document.getElementById('generatedCode').innerHTML
    .replace(/<code>/g, "")
    .replace(/<\/code>/g, "")
    .replace(/<br>/g, "\n")
    .trim();


  navigator.clipboard.writeText(text)
});