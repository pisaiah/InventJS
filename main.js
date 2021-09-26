 var w = 0.99;

var blocklyArea = document.getElementById('blocklyArea');
  var blocklyDiv = document.getElementById('blocklyDiv');
  var workspace = Blockly.inject(blocklyDiv, {toolbox: document.getElementById('toolbox')});
  var onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width =  (blocklyArea.offsetWidth*(w)) + 'px';
    blocklyDiv.style.height = (blocklyArea.offsetHeight*(w)) + 'px';
    Blockly.svgResize(workspace);
  };
  window.addEventListener('resize', onresize, false);
  onresize();
  Blockly.svgResize(workspace);

      function myUpdateFunction(event) {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
 
  var spli = code.replaceAll("  ","&nbsp;&nbsp;&nbsp;").split("\n");
  var ta = document.getElementById('textarea');
  document.getElementById('textarea').innerHTML = "";
  for (var i =0; i < spli.length; i++) {
    if (spli[i].length > 0)
        document.getElementById('textarea').innerHTML += spli[i].replaceAll('[;]', ';<br>') + "<br>";
  }

  var demo = "<br>// Auto-generated helper function.<br>" + 
            "function helper_createElement(type, id) {<br>" +
             "&nbsp;&nbsp;&nbsp&nbsp;var btn = document.createElement(type);<br>" + 
             "&nbsp;&nbsp;&nbsp;&nbsp;btn.setAttribute('id', id);<br>" + 
             "&nbsp;&nbsp;&nbsp;&nbsp;document.body.appendChild(btn);<br>}";
  if (ta.innerHTML.toString().includes("helper_createElement") && !(ta.innerHTML.toString().includes("function helper_createElement"))){ ta.innerHTML += demo; }
  
  try {
      var py = Blockly.Python.workspaceToCode(workspace);
      var spli = py.replaceAll("  ","&nbsp;&nbsp;&nbsp;").split("\n");
      document.getElementById('textpy').innerHTML = "";
      for (var i =0; i < spli.length; i++) document.getElementById('textpy').innerHTML += spli[i] + "<br>";
  } catch (error) {
    if (error.toString().indexOf('does not know how to generate code for block type "js_') != -1)
        error = '<b>Error:</b><br>Language "Python" does not know how to generate code for <b>JS-only blocks.</b>';
    document.getElementById('textpy').innerHTML = error;
  } 
  w3CodeColor();
}
workspace.addChangeListener(myUpdateFunction);

var helper_createElm = " function helper_createElement(type, id){ var btn = document.createElement(type); btn.setAttribute('id', id);document.getElementById('output').appendChild(btn);} ";

var code;
function runC() {
   removeAllChildNodes(document.getElementById('output'));
   code = Blockly.JavaScript.workspaceToCode(workspace) + helper_createElm;

   var text = decodeURIComponent("%3Chtml%3E%3Cdiv%20id%3D'output'%3E%3C%2Fdiv%3E%3Cscript%3Eeval(parent.code);%3C%2Fscript%3E%3C%2Fhtml%3E");
   text = text.replace("CODE_HERE", encodeURIComponent(code));

   var ifr = document.createElement("iframe");
   ifr.setAttribute("frameborder", "0");  
   ifr.setAttribute("allowfullscreen", "true");  
   ifr.className = "outputFrame";
   var myb = document.getElementById("output");

   myb.innerHTML = "";
   myb.appendChild(ifr);
   var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
   ifrw.document.open();
   ifrw.document.write(text);  
   ifrw.document.close();
}

function packageHTML() {
   var code = Blockly.JavaScript.workspaceToCode(workspace);
   var text = decodeURIComponent("%3Chtml%3E%3Cdiv%20id%3D'output'%3E%3C%2Fdiv%3E%3Cscript%3E " + helper_createElm + " CODE_HERE;%3C%2Fscript%3E%3C%2Fhtml%3E");
   text = text.replace("CODE_HERE", code);
   download(pId + ".html", text);
}


function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++){ x[i].style.display="none"; }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++){ tablinks[i].className = tablinks[i].className.replace(" w3-gblack", "");}
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-gblack";
}

function downloadP(name) {
  download(name + ".xml", Blockly.Xml.domToPrettyText( Blockly.Xml.workspaceToDom(workspace)) );
}
var pId;
function saveB() {
  if (undefined == pId){ saveBlocks(); return; }
  var xmlText = Blockly.Xml.domToPrettyText( Blockly.Xml.workspaceToDom(workspace) );  
  localStorage.setItem(pId, xmlText);
  window.alert('Saved project with ID: ' + pId);
}

function saveBlocks(name) {
  var xmlText = Blockly.Xml.domToPrettyText( Blockly.Xml.workspaceToDom(workspace) );  
  if (name != null){ localStorage.setItem(name, xmlText); return; }
  var person = prompt("Enter ID to Save As.", pId);
  if (person != null) {
    localStorage.setItem(person, xmlText);
    console.log(localStorage.getItem(person));
  }
}

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
if (queryString.indexOf("projectId") != -1) {
    pId = urlParams.get("projectId")
    loadBlock(localStorage.getItem(pId));
    console.log(pId);
}

function loadBlock(xml) {
  if (typeof xml != "string" || xml.length < 5) return false;
  try {
    var dom = Blockly.Xml.textToDom(xml);
    workspace.clear();
    Blockly.Xml.domToWorkspace(dom, workspace);
    return true;
  } catch (e){return false;}
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
document.getElementById('files').addEventListener('change', getFile);

function getFile(event) {
  const input = event.target;
  if ('files' in input && input.files.length > 0) {
	placeFileContent(document.getElementById('content-target'),
    input.files[0])
  }
}

function placeFileContent(target, file) {
	readFileContent(file).then(content =>{loadBlock(content);}).catch(error => console.log(error))
}

function readFileContent(file) {
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) parent.removeChild(parent.firstChild);
}