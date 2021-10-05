// w3codecolor ver 1.32 by w3schools
function w3CodeColor() {
  var x,i,j, modes = ["js","py"];
  if (!document.getElementsByClassName) return;
  for (j=0; j<modes.length; j++) {
    x=document.getElementsByClassName(modes[j]+"High");
    for (i=0; i<x.length; i++){ x[i].innerHTML = w3CodeColorize(x[i].innerHTML, modes[j]);}
  }
}
function w3CodeColorize(x, lang) {
  var tagcolor="mediumblue";var tagnamecolor="brown";
  var attrcolor="red";var attrvaluecolor="mediumblue";var commentcolor = "green";
  var jscolor="black";var jskeywordcolor="mediumblue";var jsstringcolor="brown";var jsnumbercolor="red";var jspropertycolor="black";
  var pycolor="black";var pykeywordcolor="mediumblue";var pystringcolor="brown";var pyNumC="red";

  if (!lang){lang="js";}
  if (lang=="js"){return jsMode(x);}
  if (lang=="py"){return pyMode(x);}
  return x;
  function extract(str, start, end, func, repl) {
    var s, e, d = "", a = [];
    while (str.search(start) > -1) {
      s = str.search(start);
      e = str.indexOf(end,s);
      if (e == -1) {e = str.length;}
      if (repl) {
        a.push(func(str.substring(s, e+(end.length))));      
        str = str.substring(0,s) + repl + str.substr(e + end.length);
      } else {
        d += str.substring(0,s);
        d += func(str.substring(s,e+(end.length)));
        str = str.substr(e+(end.length));
      }
    }
    this.rest = d + str;
    this.arr = a;
  }
  function commentMode(txt){ return "<span class='commentcolor' style=color:" + commentcolor + ">"+txt+"</span>";}
  function jsMode(txt) {
    var rest =txt, done="", esc=[], i, cc, tt="", sfnuttpos,dfnuttpos,compos,comlinepos,keywordpos,numpos,mypos,dotpos,y;
    for (i=0; i<rest.length; i++){ cc = rest.substr(i,1); if (cc=="\\"){esc.push(rest.substr(i,2)); cc="W3JSESCAPE";i++;} tt += cc; }
    rest = tt;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", jsStringMode);
      dfnuttpos = getPos(rest, '"', '"', jsStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);      
      numpos = getNumPos(rest, jsNumberMode);
      keywordpos = getKeywordPos("js", rest, jsKeywordMode);
      dotpos = getDotPos(rest, jsPropertyMode);
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, dotpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    for (i=0; i<esc.length; i++) { rest = rest.replace("W3JSESCAPE", esc[i]); }
    return "<span class='jscolor' style=color:" + jscolor + ">" + rest + "</span>";
  }
  function jsStringMode(txt)  {return "<span class='jsstringcolor' style=color:" + jsstringcolor + ">"+txt+"</span>";}
  function jsKeywordMode(txt) {return "<span class='jskeywordcolor' style=color:"+ jskeywordcolor + ">"+txt+"</span>";}
  function jsNumberMode(txt)  {return "<span class='jsnumbercolor' style=color:" + jsnumbercolor + ">"+txt+"</span>";}
  function jsPropertyMode(txt){return "<span class='jspropertycolor' style=color:"+ jspropertycolor + ">"+txt+"</span>";}
  function getDotPos(txt, func) {
    var x, i, j, s, e, arr=[".","<"," ",";","(","+",")","[","]",",","&",":","{","}","/","-","*","|","%"];
    s = txt.indexOf(".");
    if (s > -1) {
      x = txt.substr(s + 1);
      for (j=0; j<x.length; j++){ cc = x[j]; for (i = 0; i < arr.length; i++){ if (cc.indexOf(arr[i]) > -1){ e = j; return [s + 1, e + s + 1, func]; }}}
    }
    return [-1, -1, func];
  }
  function getMinPos() {
    var i, arr = [];
    for (i = 0; i < arguments.length; i++){ if (arguments[i][0] > -1){ if (arr.length == 0 || arguments[i][0] < arr[0]) {arr = arguments[i];}}}
    if (arr.length == 0) {arr = arguments[i];}
    return arr;
  }
  function pyMode(txt) {
    var rest = txt, done = "", sfnuttpos, dfnuttpos, compos, comlinepos, comhashpos, keywordpos, mypos, y;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", pyStringMode);
      dfnuttpos = getPos(rest, '"', '"', pyStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comhashpos = getPos(rest, "#", "<br>", commentMode);
      numpos = getNumPos(rest, pyNumberMode);
      keywordpos = getKeywordPos("py", rest, pyKeywordMode);      
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comhashpos[0], keywordpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comhashpos, keywordpos);
      if (mypos[0]== -1){break;}
      if (mypos[0] > -1){ done += rest.substring(0,mypos[0]); done += mypos[2](rest.substring(mypos[0], mypos[1])); rest=rest.substr(mypos[1]); }
    }
    rest = done + rest;
    return "<span class='pycolor' style=color:" + pycolor + ">" + rest + "</span>";
  }
  function pyStringMode(txt) { return "<span class='pystringcolor' style=color:" + pystringcolor + ">" + txt + "</span>"; }
  function pyNumberMode(txt) { return "<span class='pyNumC' style=color:" + pyNumC + ">" + txt + "</span>"; }
  function pyKeywordMode(txt){ return "<span class='pykeywordcolor' style=color:"+ pykeywordcolor + ">" + txt + "</span>";}
  function getKeywordPos(typ, txt, func) {
    var words, i, pos, rpos = -1, rpos2 = -1, patt;
    if (typ == "js") {
      words = ["abstract","arguments","boolean","break","byte","case","catch","char","class","const","continue","default","delete","do","double","else","enum","eval","event",
      "export","extends","false","final","finally","float","for","function","goto","if","implements","import","in","instanceof","int","interface","let","long","NaN","native","new",
      "null","package","private","protected","public","return","short","static","super","switch","this","throw","throws","transient","true","try","typeof","var","void","volatile",
      "while","with","yield"];
    } else if (typ == "py") {
      words = ["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global", "if", "import","lambda","pass","raise","return",
      "try","while","with","yield","in","abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate",
      "eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals",
      "map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted",
      "staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];
    }
    for (i = 0; i < words.length; i++) {
      pos = txt.indexOf(words[i]);
      if (pos > -1) {
        patt = /\W/g;
        if (txt.substr(pos+words[i].length,1).match(patt) && txt.substr(pos-1,1).match(patt)) {
          if (pos > -1 &&(rpos== -1 || pos<rpos)){ rpos=pos; rpos2=rpos+words[i].length; }
        }
      } 
    }
    return [rpos, rpos2, func];
  }
  function getPos(txt, start, end, func) {
    var s = txt.search(start); var e = txt.indexOf(end, s+(end.length));
    if (e== -1){e=txt.length;}
    return [s,e+(end.length),func];
  }
  function getNumPos(txt, func) {
    var arr = ["<br>"," ",";","(","+",")","[","]",",","&",":","{","}","/","-","*","|","%","="], i,j,c, startpos=0, endpos,word;
    for (i=0;i<txt.length; i++){ for (j=0;j<arr.length; j++){c=txt.substr(i,arr[j].length);
     if (c==arr[j]) {
      if (c=="-"&&(txt.substr(i-1, 1)=="e" || txt.substr(i-1, 1) == "E")){continue;}
       endpos = i;
       if (startpos<endpos){word=txt.substring(startpos,endpos); if (!isNaN(word)){return [startpos,endpos,func];}}
       i += arr[j].length; startpos=i; i -= 1;
       break;
     }
    }}  
    return [-1,-1,func];
  }  
}