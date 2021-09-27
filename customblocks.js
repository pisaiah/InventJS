Blockly.Blocks['js_elm_by_id'] = {
  init: function() {
    this.appendValueInput('VALUE')
      .appendField('getElementById')
    this.setOutput(true, 'Number');
    this.setColour(160);
    this.setTooltip('Block form of Javascript\'s "getElementById(id)"');
  }
};

Blockly.JavaScript['js_elm_by_id'] = function(block) {
  var arg0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return ['document.getElementById(' + arg0 + ')', document.getElementById(arg0)];
};

Blockly.Blocks['js_elm_inner'] = {
  init: function() {
    this.appendValueInput('VALUE')
      .appendField('getElementById(')
    this.appendDummyInput('TXT')
      .appendField(').innerHTML');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(160);
    this.setTooltip('Block form of Javascript\'s "getElementById(id)"');
  }
};

Blockly.JavaScript['js_elm_inner'] = function(block) {
  var arg0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return ['document.getElementById(' + arg0 + ').innerHTML', document.getElementById(arg0)];
};

Blockly.Blocks['js_create_elm'] = {
  init: function() {
    this.appendValueInput('VALUE')
      .appendField('createButton')
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setOutput(0, 'Dummy');
    this.setColour(160);
    this.setTooltip('Add a new Element to the output box');
  }
};

Blockly.JavaScript['js_create_elm'] = function(block) {
  var arg0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return 'helper_createElement(\'button\', ' + arg0 + ');\n';
};

Blockly.Blocks['js_raw'] = {
  init: function() {
    this.appendDummyInput('VALUE')
      .appendField('raw_js')
      .appendField(new Blockly.FieldTextInput("myid"), "TEXT")
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setOutput(0, 'Dummy');
    this.setColour(160);
    this.setTooltip('Add a new Element to the output box');
  }
};

Blockly.JavaScript['js_raw'] = function(block) {
  var arg0 = block.getFieldValue('TEXT') || '\'\'';
  return arg0 + '\n';
};


Blockly.Blocks['js_2'] = {
  init: function() {
    this.appendValueInput('VAL1')
      .appendField('getElementById(');
    this.appendValueInput('VAL2')
      .appendField(').innerHTML =');
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setOutput(0, 'Dummy');
    this.setColour(160);
    this.setTooltip('Set the content of an element');
  }
};
Blockly.JavaScript['js_2'] = function(block) {
  var arg0 = Blockly.JavaScript.valueToCode(block, 'VAL1', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var arg1 = Blockly.JavaScript.valueToCode(block, 'VAL2', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return 'document.getElementById(' + arg0 + ').innerHTML = ' + arg1 + ";";
};


Blockly.Blocks['js_elm_x'] = {
  init: function() {
    this.appendValueInput('VALUE')
      .appendField('getElementById(')
    this.appendDummyInput('TXT')
      .appendField(').getBoundingClientRect().x');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(160);
    this.setTooltip('Get the X position of the element');
  }
};

Blockly.JavaScript['js_elm_x'] = function(block) {
  var arg0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return ['document.getElementById(' + arg0 + ').getBoundingClientRect().x', -2];
};

Blockly.Blocks['js_elm_y'] = {
  init: function() {
    this.appendValueInput('VALUE')
      .appendField('getElementById(')
    this.appendDummyInput('TXT')
      .appendField(').getBoundingClientRect().y');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(160);
    this.setTooltip('Get the Y position of the element');
  }
};

Blockly.JavaScript['js_elm_y'] = function(block) {
  var arg0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return ['document.getElementById(' + arg0 + ').getBoundingClientRect().y', -2];
};


Blockly.Blocks['js_onclick'] = {
  init: function() {
    this.appendValueInput('VAL1')
      .appendField('getElementById(');
    this.appendValueInput('VAL2')
      .appendField(').onClick =');
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setOutput(0, 'Dummy');
    this.setColour(160);
    this.setTooltip('Set the content of an element');
  }
};
Blockly.JavaScript['js_onclick'] = function(block) {
  var arg0 = Blockly.JavaScript.valueToCode(block, 'VAL1', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var arg1 = Blockly.JavaScript.valueToCode(block, 'VAL2', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return 'document.getElementById(' + arg0 + ').onclick = function() {' + arg1.replaceAll("'", "") + '}' + ";";
};


Blockly.Blocks['js_top'] = {
  init: function() {
    this.appendValueInput('VAL1')
      .appendField('getElementById(');
    this.appendValueInput('VAL2')
      .appendField(').style.top =');
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setOutput(0, 'Dummy');
    this.setColour(160);
    this.setTooltip('Set the content of an element');
  }
};
Blockly.JavaScript['js_top'] = function(block) {
  var arg0 = Blockly.JavaScript.valueToCode(block, 'VAL1', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var arg1 = Blockly.JavaScript.valueToCode(block, 'VAL2', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return 'document.getElementById(' + arg0 + ').style.top = ' + arg1 + ";";
};

Blockly.Blocks['js_left'] = {
  init: function() {
    this.appendValueInput('VAL1')
      .appendField('getElementById(');
    this.appendValueInput('VAL2')
      .appendField(').style.left =');
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setOutput(0, 'Dummy');
    this.setColour(160);
    this.setTooltip('Set the content of an element');
  }
};
Blockly.JavaScript['js_left'] = function(block) {
  var arg0 = Blockly.JavaScript.valueToCode(block, 'VAL1', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var arg1 = Blockly.JavaScript.valueToCode(block, 'VAL2', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  if (arg1.indexOf('px') == -1 && arg1.indexOf('em') == -1){ arg1 = "'" + arg1.replaceAll("'","") + "px'"; }
  return 'document.getElementById(' + arg0 + ').style.left = ' + arg1 + ";";
};

Blockly.Blocks['js_bg'] = {
  init: function() {
    this.appendValueInput('VAL1')
      .appendField('getElementById(');
    this.appendValueInput('VAL2')
      .appendField(').style.background =');
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setOutput(0, 'Dummy');
    this.setColour(160);
    this.setTooltip('Set the content of an element');
  }
};
Blockly.JavaScript['js_bg'] = function(block) {
  var arg0 = Blockly.JavaScript.valueToCode(block, 'VAL1', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var arg1 = Blockly.JavaScript.valueToCode(block, 'VAL2', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return 'document.getElementById(' + arg0 + ').style.background = ' + arg1 + ";";
};

Blockly.Blocks['js_keydown'] = {
  init: function() {
    this.appendValueInput('VAL2')
      .appendField('addEventListener keydown ');
    this.setInputsInline(false);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setOutput(0, 'Dummy');
    this.setColour(160);
    this.setTooltip('Set the content of an element');
  }
};
Blockly.JavaScript['js_keydown'] = function(block) {
  var arg0 = Blockly.JavaScript.valueToCode(block, 'VAL1', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var arg1 = Blockly.JavaScript.valueToCode(block, 'VAL2', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return "document.addEventListener('keydown', " + arg1 + ");";
};

Blockly.Blocks['js_display'] = {
  init: function() {
    var input = this.appendValueInput('VAL1')
          .appendField('getElementById(');
      this.appendDummyInput('VAL1')
        .appendField(').style.display = ').appendField(new Blockly.FieldDropdown(this.generateOptions), 'VAL2');
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setOutput(0, 'Dummy');
        this.setColour(160);
        this.setInputsInline(true);
  },
  generateOptions: function() {
    var options = [['none','none'], ['block','block'], ['inline-block','inline-block']];
    return options;
  }
};

Blockly.JavaScript['js_display'] = function(block) {
  var arg0 = Blockly.JavaScript.valueToCode(block, 'VAL1', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var arg1 = block.getFieldValue('VAL2');
  return "document.getElementById(" + arg0 + ").style.display = '" + arg1 + "';";
};

Blockly.Blocks['js_pos'] = {
  init: function() {
    var input = this.appendValueInput('VAL1')
          .appendField('getElementById(');
      this.appendDummyInput('VAL1')
        .appendField(').style.display = ').appendField(new Blockly.FieldDropdown(this.generateOptions), 'VAL2');
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setOutput(0, 'Dummy');
        this.setColour(160);
        this.setInputsInline(true);
  },
  generateOptions: function() {
    var options = [['static','static'], ['absolute','absolute'], ['relative','relative']];
    return options;
  }
};

Blockly.JavaScript['js_pos'] = function(block) {
  var arg0 = Blockly.JavaScript.valueToCode(block, 'VAL1', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var arg1 = block.getFieldValue('VAL2');
  return "document.getElementById(" + arg0 + ").style.position = '" + arg1 + "';";
};
