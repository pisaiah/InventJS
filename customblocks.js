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
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return ['document.getElementById(' + argument0 + ')', document.getElementById(argument0)];
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
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return ['document.getElementById(' + argument0 + ').innerHTML', document.getElementById(argument0)];
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
  //var argument0 = block.getFieldValue('TEXT') || '\'\'';
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return 'helper_createElement(\'button\', ' + argument0 + ');\n';
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
  var argument0 = block.getFieldValue('TEXT') || '\'\'';
  return argument0 + '\n';
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
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VAL1', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'VAL2', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return 'document.getElementById(' + argument0 + ').innerHTML = ' + argument1 + ";";
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
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return ['document.getElementById(' + argument0 + ').getBoundingClientRect().x', -2];
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
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return ['document.getElementById(' + argument0 + ').getBoundingClientRect().y', -2];
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
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VAL1', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'VAL2', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return 'document.getElementById(' + argument0 + ').onclick = function() {' + argument1.replaceAll("'", "") + '}' + ";";
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
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VAL1', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'VAL2', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return 'document.getElementById(' + argument0 + ').style.top = ' + argument1 + ";";
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
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VAL1', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'VAL2', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return 'document.getElementById(' + argument0 + ').style.left = ' + argument1 + ";";
};

Blockly.Blocks['js_pos'] = {
  init: function() {
    this.appendValueInput('VAL1')
      .appendField('getElementById(');
    this.appendValueInput('VAL2')
      .appendField(').style.position =');
    this.setInputsInline(true);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setOutput(0, 'Dummy');
    this.setColour(160);
    this.setTooltip('Set the content of an element');
  }
};
Blockly.JavaScript['js_pos'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VAL1', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'VAL2', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return 'document.getElementById(' + argument0 + ').style.position = ' + argument1 + ";";
};




