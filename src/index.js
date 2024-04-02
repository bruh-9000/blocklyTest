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
import '@blockly/field-colour-hsv-sliders';
import {FieldSlider} from '@blockly/field-slider';

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
    zoom:
         {controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
          pinch: true},
    theme: {
      "categoryStyles" : {
        "triggers_category": {
          "colour": "#0DA57A"
         },
         "system_category": {
          "colour": "#60B560"
         },
         "logic_category": {
          "colour": "#59C059"
         },
         "entities_category": {
          "colour": "#47A8D1"
         },
         "players_category": {
          "colour": "#855CD6"
         },
         "units_category": {
          "colour": "#CF63CF"
         },
         "others_category": {
          "colour": "#FF6680"
         },
         "variables_category": {
          "colour": "#ED953E"
         },
      },
    }
  }
);

// Colors per category
// Triggers - #0DA57A
// System-Loops - #60B560
// Math-Positions - #59C059
// Entities-Region - #47A8D1
// Player - #855CD6
// Unit - #CF63CF
// Other - #FF6680
// Variables - #ED953E

window.ws = ws;

Blockly.FieldAngle.OFFSET = 90;
Blockly.FieldAngle.CLOCKWISE = true;

// This function resets the code and output divs, shows the
// generated code from the workspace, and evals the code.
// In a real application, you probably shouldn't use `eval`.
const runCode = () => {
  const code = (javascriptGenerator.workspaceToCode(ws).replace(/;\s*$/gm, '\n')).split('\n').filter(line => !line.trim().startsWith('var')).join('\n').trim();

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
let dialogueNames = [];
let shopNames = [];

window.shopNames = shopNames;
window.dialogueNames = dialogueNames;

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
    fileContent = JSON.parse(`{\"blocks\":{\"languageVersion\":0,\"blocks\":[{\"type\":\"triggers\",\"id\":\"}eJyMU1Z|E:SsnWYt4OR\",\"x\":0,\"y\":0,\"next\":{\"block\":{\"type\":\"playerjoinsgame\",\"id\":\"NB|7rN_tc@G$o{G{}+3j\"}}},{\"type\":\"script\",\"id\":\"u:Ow}9P8iAidd^1gd=Zu\",\"x\":0,\"y\":152,\"next\":{\"block\":{\"type\":\"sendchatmessage\",\"id\":\".JOm8?0h_5z;g(Ah*OPB\",\"inputs\":{\"message\":{\"shadow\":{\"type\":\"string\",\"id\":\"%[Jup{w==d6W;.gDApR;\",\"fields\":{\"text\":\"Hello world!\"}},\"block\":{\"type\":\"join\",\"id\":\"rkzj=qP+[ZEemE#ZW@I_\",\"inputs\":{\"text1\":{\"block\":{\"type\":\"getplayername\",\"id\":\"A)I3rFBs)@}jrHCe64i)\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"\/f)rm79vJ2_]~?0*P?Q{\"}}}}},\"text2\":{\"block\":{\"type\":\"string\",\"id\":\"dwd*TqV;4iGKk+zW2mM7\",\"fields\":{\"text\":\" has joined the game!\"}}}}}}},\"next\":{\"block\":{\"type\":\"createunitatposition\",\"id\":\"SVe=$uKDs.m^.f5)61u~\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"g:NMK;5s\`(Q|ev.-Z.\/J\"}},\"pos\":{\"block\":{\"type\":\"pos\",\"id\":\"S:eZNGwLp*M5*8O*2RVN\",\"inputs\":{\"x\":{\"shadow\":{\"type\":\"math_number\",\"id\":\"t(tEK\`;Ou(a:Ubk+e^%1\",\"fields\":{\"NUM\":64}}},\"y\":{\"shadow\":{\"type\":\"math_number\",\"id\":\"BMDNz$]m6XyizmDnmA+z\",\"fields\":{\"NUM\":64}}}}}},\"angle\":{\"block\":{\"type\":\"math_number\",\"id\":\"00Mqw%-^CoeUZ}[nMg_k\",\"fields\":{\"NUM\":123}}}},\"next\":{\"block\":{\"type\":\"playercameratrackunit\",\"id\":\"j8rs1\`DQhd9NFwvfb#_S\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"@BK.g\`WAp|@A6\`h@(INx\"}},\"unit\":{\"block\":{\"type\":\"lastcreatedunit\",\"id\":\"^c66U^lA+O!t5}(oL7vJ\"}}}}}}}}}}]}}   `);
  } else if (replacingWith == "playerLeavesGame") {
    fileContent = JSON.parse(`{\"blocks\":{\"languageVersion\":0,\"blocks\":[{\"type\":\"triggers\",\"id\":\"sLORV*}FPc=_GBvkxM5H\",\"x\":0,\"y\":0,\"next\":{\"block\":{\"type\":\"playerleavesgame\",\"id\":\"O=8-[GL:n:[8j8eE1IqO\"}}},{\"type\":\"script\",\"id\":\"42xFuxvg#uGKrcUxH0IM\",\"x\":0,\"y\":152,\"next\":{\"block\":{\"type\":\"sendchatmessage\",\"id\":\"zy~MRC2MtAF,q20UgS9\`\",\"inputs\":{\"message\":{\"shadow\":{\"type\":\"text\",\"id\":\"m)Bvl917,+vgB+M)(@N+\",\"fields\":{\"TEXT\":\"Hello world!\"}},\"block\":{\"type\":\"join\",\"id\":\"XFOIha[*)/F=o=m:MpXT\",\"inputs\":{\"text1\":{\"block\":{\"type\":\"getplayername\",\"id\":\"Yq-{2sAkXkxbM+9Xh/Xh\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"4f.V4f*UT/WGh}UB9Un)\"}}}}},\"text2\":{\"block\":{\"type\":\"string\",\"id\":\"N,#M$RlSnsB2?C54ltsS\",\"fields\":{\"text\":\" has left the game!\"}}}}}}},\"next\":{\"block\":{\"type\":\"destroyentity\",\"id\":\"#nXn8nDT|7e.Tr8TnK|c\",\"inputs\":{\"entity\":{\"block\":{\"type\":\"getplayerselectedunit\",\"id\":\"luoDlH!VDZ9|)^\`t|{f4\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"zasKE$B,Ie/_PWL{}}1#\"}}}}}}}}}}}]}}  `);
  } else if (replacingWith == "slashCommand") {
    fileContent = JSON.parse(`{\"blocks\":{\"languageVersion\":0,\"blocks\":[{\"type\":\"triggers\",\"id\":\"sLORV*}FPc=_GBvkxM5H\",\"x\":0,\"y\":0,\"next\":{\"block\":{\"type\":\"playerSendsChatMessage\",\"id\":\"uZNZ#T4^aW34mU}-iGSH\"}}},{\"type\":\"script\",\"id\":\"42xFuxvg#uGKrcUxH0IM\",\"x\":0,\"y\":152,\"next\":{\"block\":{\"type\":\"ifelse\",\"id\":\"h89PVVMcOV7;3~mbt\`$B\",\"inputs\":{\"check\":{\"block\":{\"type\":\"comparison\",\"id\":\"z%#q1PkVt[ooF{$iw@X{\",\"fields\":{\"value\":\"==\"},\"inputs\":{\"val1\":{\"block\":{\"type\":\"lastchatmessagesent\",\"id\":\"pc257H{HOnY2_yy$*S6;\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"\`p:?8JT51O|_.-E86tjt\"}}}}},\"val2\":{\"block\":{\"type\":\"string\",\"id\":\"^}.!c#)g%n:a$Q]G:k%E\",\"fields\":{\"text\":\"/spawn\"}}}}}},\"do1\":{\"block\":{\"type\":\"moveentity\",\"id\":\"w{]ey%tWg|9_~;7ff56r\",\"inputs\":{\"entity\":{\"block\":{\"type\":\"getplayerselectedunit\",\"id\":\"luoDlH!VDZ9|)^\`t|{f4\",\"inputs\":{\"player\":{\"block\":{\"type\":\"triggeringplayer\",\"id\":\"zasKE$B,Ie/_PWL{}}1#\"}}}}},\"pos\":{\"block\":{\"type\":\"pos\",\"id\":\"%-~X(mc#QF+z+[liadI6\",\"inputs\":{\"x\":{\"shadow\":{\"type\":\"math_number\",\"id\":\"tVZ[J?wO\`]#k{/LPL;w^\",\"fields\":{\"NUM\":64}}},\"y\":{\"shadow\":{\"type\":\"math_number\",\"id\":\"8;0$asP~l*2E*!X^GDqq\",\"fields\":{\"NUM\":64}}}}}}}}}}}}}]}}  `);
  } else if (replacingWith == "gameTimer") {
    fileContent = JSON.parse(`{\"blocks\":{\"languageVersion\":0,\"blocks\":[{\"type\":\"triggers\",\"id\":\"J$H)K[jsL^dVHR|m39.u\",\"x\":0,\"y\":0,\"next\":{\"block\":{\"type\":\"secondtick\",\"id\":\"O~t%s7\/^*;gR_03WqfN8\"}}},{\"type\":\"script\",\"id\":\"H{)R(5,O)hstiO4w|K=T\",\"x\":0,\"y\":152,\"next\":{\"block\":{\"type\":\"decreasevariablebynumber\",\"id\":\"Ec$$[8?YqtZIgO+KbA(o\",\"fields\":{\"VAR\":{\"id\":\"|,2RbgG4:vfKE$pi|Uk,\"}},\"inputs\":{\"num\":{\"shadow\":{\"type\":\"math_number\",\"id\":\"^0Gce1vd.xUS0[CSuN-o\",\"fields\":{\"NUM\":1}}}},\"next\":{\"block\":{\"type\":\"ifelse\",\"id\":\"%?jX8m#=raonIDHxdRxV\",\"inputs\":{\"check\":{\"block\":{\"type\":\"number_comparison\",\"id\":\"WrR@U}N6Gjtx$\`1O+pde\",\"fields\":{\"value\":\"==\"},\"inputs\":{\"val1\":{\"block\":{\"type\":\"getvariable\",\"id\":\"TZ|gpkqOG*+vxD%B,D\/K\",\"fields\":{\"VAR\":{\"id\":\"|,2RbgG4:vfKE$pi|Uk,\"}}}},\"val2\":{\"block\":{\"type\":\"math_number\",\"id\":\"L8*7xK_%z~g5~3?PuuVB\",\"fields\":{\"NUM\":0}}}}}},\"do1\":{\"block\":{\"type\":\"ifelse\",\"id\":\"J+K1h,HDO+eD7g@Ft%o_\",\"inputs\":{\"check\":{\"block\":{\"type\":\"comparison\",\"id\":\"yl%_B8I=pXcK[z%T5,}(\",\"fields\":{\"value\":\"==\"},\"inputs\":{\"val1\":{\"block\":{\"type\":\"getvariable\",\"id\":\"*35HCdo9IMi#.0km|C!+\",\"fields\":{\"VAR\":{\"id\":\".0[1XD5e:0inern3*GvI\"}}}},\"val2\":{\"block\":{\"type\":\"string\",\"id\":\"\`nAyqc8hv~oFV*43}\`=O\",\"fields\":{\"text\":\"Playing\"}}}}}},\"do1\":{\"block\":{\"type\":\"setvariable\",\"id\":\"tNx#QgZaIPwW}_QrSfc*\",\"fields\":{\"VAR\":{\"id\":\".0[1XD5e:0inern3*GvI\"}},\"inputs\":{\"VALUE\":{\"block\":{\"type\":\"string\",\"id\":\"E!t9E6\/Un2gmHhwFuq+P\",\"fields\":{\"text\":\"Starting\"}}}},\"next\":{\"block\":{\"type\":\"setvariable\",\"id\":\"@qlPQ#*\/gp\`yOi=e\/{~Z\",\"fields\":{\"VAR\":{\"id\":\"|,2RbgG4:vfKE$pi|Uk,\"}},\"inputs\":{\"VALUE\":{\"block\":{\"type\":\"math_number\",\"id\":\"}S:??g?GOR{*0EbD*N8m\",\"fields\":{\"NUM\":15}}}},\"next\":{\"block\":{\"type\":\"sendchatmessage\",\"id\":\"[[5ZjuP:F3[jGtVy{mC+\",\"inputs\":{\"message\":{\"shadow\":{\"type\":\"string\",\"id\":\"jVibf5B||Vdur#Nk[pgN\",\"fields\":{\"text\":\"Game is starting soon!\"}}}}}}}}}},\"else1\":{\"block\":{\"type\":\"setvariable\",\"id\":\"\`n]mC;dcky!PFa3L^kyo\",\"fields\":{\"VAR\":{\"id\":\".0[1XD5e:0inern3*GvI\"}},\"inputs\":{\"VALUE\":{\"block\":{\"type\":\"string\",\"id\":\";%Ip0s5e*spn44Vf|$10\",\"fields\":{\"text\":\"Playing\"}}}},\"next\":{\"block\":{\"type\":\"setvariable\",\"id\":\"!$}e)U]W1U2P8mSZ79F#\",\"fields\":{\"VAR\":{\"id\":\"|,2RbgG4:vfKE$pi|Uk,\"}},\"inputs\":{\"VALUE\":{\"block\":{\"type\":\"math_number\",\"id\":\"x|M~MMTcA!pdqW;tCvOY\",\"fields\":{\"NUM\":60}}}},\"next\":{\"block\":{\"type\":\"sendchatmessage\",\"id\":\"aDG|rd[02u\/=%=+@LA?y\",\"inputs\":{\"message\":{\"shadow\":{\"type\":\"string\",\"id\":\"G]w0fC1ze8r-0oXlW\/t%\",\"fields\":{\"text\":\"Game has started!\"}}}}}}}}}}}}}}}}}}}]},\"variables\":[{\"name\":\"Timer\",\"id\":\"|,2RbgG4:vfKE$pi|Uk,\"},{\"name\":\"State\",\"id\":\".0[1XD5e:0inern3*GvI\"},{\"name\":\"item\",\"id\":\"J8%gjT_r}GkY[Q^VE*k$\"}]}`);
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

ws.registerButtonCallback("newVar", newVar);

function newVar() {
  Blockly.Variables.createVariableButtonHandler(ws);
}

loadVariables.addEventListener("click", () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.JSON'; // Specify the file types you want to accept
  input.onchange = function(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function(event) {
        const fileContent = JSON.parse((event.target.result));

        for (let i = 0; i < ws.getAllVariables().length; i++) {
          ws.deleteVariableById(ws.getAllVariables()[i].id_);
        }

        for (let variableName in fileContent.data.playerTypes) {
          if (fileContent.data.playerTypes.hasOwnProperty(variableName)) {
            ws.createVariable(variableName, "g Player Type");
          }
        }
        for (let variableName in fileContent.data.unitTypes) {
          if (fileContent.data.unitTypes.hasOwnProperty(variableName)) {
            ws.createVariable(variableName, "g Unit Type");
          }
        }
        for (let variableName in fileContent.data.dialogues) {
          if (fileContent.data.dialogues.hasOwnProperty(variableName)) {
            ws.createVariable(fileContent.data.dialogues[variableName].name, "g Dialogue");
            let innerList = [fileContent.data.dialogues[variableName].name, variableName];
            dialogueNames.push(innerList);
          }
        }
        for (let variableName in fileContent.data.shops) {
          if (fileContent.data.shops.hasOwnProperty(variableName)) {
            ws.createVariable(fileContent.data.shops[variableName].name, "g Shop");
            let innerList = [fileContent.data.shops[variableName].name, variableName];
            shopNames.push(innerList);
          }
        }
        for (let variableName in fileContent.data.projectileTypes) {
          if (fileContent.data.projectileTypes.hasOwnProperty(variableName)) {
            ws.createVariable(variableName, "g Projectile Type");
          }
        }
        for (let variableName in fileContent.data.particles) {
          if (fileContent.data.particles.hasOwnProperty(variableName)) {
            ws.createVariable(variableName, "g Particle");
          }
        }
        for (let variableName in fileContent.data.itemTypes) {
          if (fileContent.data.itemTypes.hasOwnProperty(variableName)) {
            ws.createVariable(variableName, "g Item Type");
          }
        }
        for (let variableName in fileContent.data.sound) {
          if (fileContent.data.sound.hasOwnProperty(variableName)) {
            ws.createVariable(variableName, "g Sound");
          }
        }
        for (let variableName in fileContent.data.music) {
          if (fileContent.data.music.hasOwnProperty(variableName)) {
            ws.createVariable(variableName, "g Music");
          }
        }
        for (let variableName in fileContent.data.playerTypeVariables) {
          if (fileContent.data.playerTypeVariables.hasOwnProperty(variableName)) {
            ws.createVariable(variableName, "g Player Variable");
          }
        }
        for (let variableName in fileContent.data.scripts) {
          if (fileContent.data.scripts.hasOwnProperty(variableName)) {
            ws.createVariable(variableName, "g Script");
          }
        }

        const conversionList = {
          "number": "Number",
          "boolean": "Boolean",
          "string": "String",
          "position": "Pos",
          "unit": "Unit",
          "item": "Item",
          "projectile": "Projectile",
          "player": "Player",
          "itemType": "Item Type",
          "unitType": "Unit Type",
          "projectileType": "Projectile Type",
          "playerType": "Player Type",
          "unitGroup": "Unit Group",
          "itemGroup": "Item Group",
          "playerGroup": "Player Group",
          "itemTypeGroup": "Item Type Group",
          "unitTypeGroup": "Unit Type Group",
          "region": "Region",
          "dialogue": "Dialogue"
        };

        for (let variableName in fileContent.data.variables) {
          if (fileContent.data.variables.hasOwnProperty(variableName)) {
            let dataType = fileContent.data.variables[variableName].dataType;
            ws.createVariable(variableName, conversionList[dataType]);
          }
        }
      };
      reader.readAsText(file);
  };
  input.click();
});

// Returns an array of objects.
var varDynamic = function(workspace) {
  // Returns an array of hex colours, e.g. ['#4286f4', '#ef0447']
  var blockList = [];

  blockList.push({
    'kind': 'block',
    'type': 'setvariable',
  });
  blockList.push({
    'kind': 'block',
    'type': 'getvariable',
  });
  blockList.push({
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
  });
  blockList.push({
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
  });

  return blockList;
};

// Associates the function with the string 'COLOUR_PALETTE'
ws.registerToolboxCategoryCallback(
    'Var Dynamic', varDynamic);

for (let i = 0; i < ws.getAllVariables().length; i++) {
  if (ws.getAllVariables()[i].name == "item") {
    ws.deleteVariableById(ws.getAllVariables()[i].id_)
  }
}