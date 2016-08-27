/*! Last update: Sat Aug 27 2016 14:38:58 GMT+0800 (CST) */
webpackJsonp([17],{399:function(e,n,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var t=o(3),r=a(t),l=o(254),i=o(338),d=a(i),s=o(335),c={basic:"\nconst MyModel = SchemaModel({\n    username: StringType().isOneOf(['admin', 'root'], '只能输入admin,root这两个用户').isRequired('该字段必填'),\n    email: StringType().isEmail('邮件格式错误'),\n    lables: ArrayType().minLength(2, '至少输入两项，用换行分割').shape(StringType().isOneOf(['数码', '体育', '游戏', '旅途', '其他']), '只能输入：数码,体育,游戏,旅途,其他').unrepeatable('不能重复'),\n    radioList: StringType().isRequired('该字段必填'),\n    radio: StringType().isRequired('该字段必填'),\n    checkboxList: ArrayType().minLength(2, '至少选择2项').isRequired('该字段必填'),\n    checkbox: StringType().isRequired('该字段必填')\n});\n\nconst FormDemo = React.createClass({\n    PropTypes: {\n        errors: React.PropTypes.obejct,\n        message: React.PropTypes.string,\n        data: React.PropTypes.data\n    },\n    getInitialState() {\n        return {\n            data: {}\n        };\n    },\n    handleSubmit() {\n        const { formData, isValid } = this.refs.myForm.get();\n        console.log(formData, isValid);\n    },\n    render() {\n\n        return (\n            <div className=\"container\">\n                <h1 className=\"page-title\">表单验证</h1>\n                <RSuiteForm ref=\"myForm\"\n                    model={MyModel}\n                    errors = {this.props.errors}\n                    formData={this.state.data}\n                    >\n                    <Field name=\"username\" >\n                        <FormGroup>\n                            <ControlLabel>Text</ControlLabel>\n                            <FormControl  type='text'  />\n                            <HelpBlock>Required</HelpBlock>\n                        </FormGroup>\n                    </Field>\n\n                    <Field name=\"email\" >\n                        <FormGroup>\n                            <ControlLabel>Email</ControlLabel>\n                            <FormControl  type='text'  />\n                            <HelpBlock>邮件地址</HelpBlock>\n                        </FormGroup>\n                    </Field>\n\n                    <Field name=\"lables\" >\n                        <FormGroup>\n                            <ControlLabel>Lables</ControlLabel>\n                            <TextList />\n                            <HelpBlock></HelpBlock>\n                        </FormGroup>\n                    </Field>\n\n                    <Field name=\"radioList\" >\n                        <FormGroup>\n                            <ControlLabel>radioList</ControlLabel>\n                            <RadioList name=\"radioList\">\n                                <Radio value=\"A\">Item A</Radio>\n                                <Radio value=\"B\">Item B</Radio>\n                                <Radio value=\"C\">Item C</Radio>\n                            </RadioList>\n                            <HelpBlock></HelpBlock>\n                        </FormGroup>\n                    </Field>\n\n\n\n                    <Field name=\"checkboxList\" >\n                        <FormGroup>\n                            <ControlLabel>CheckboxList</ControlLabel>\n                            <CheckboxList name=\"radioList\">\n                                <Checkbox value=\"A\">Item A</Checkbox>\n                                <Checkbox value=\"B\">Item B</Checkbox>\n                                <Checkbox value=\"C\">Item C</Checkbox>\n                            </CheckboxList>\n                            <HelpBlock></HelpBlock>\n                        </FormGroup>\n                    </Field>\n\n\n                    <Button shape=\"primary\" onClick={this.handleSubmit}>提交</Button>\n                </RSuiteForm>\n            </div>\n        );\n    }\n});\n\nReactDOM.render(<FormDemo />, mountNode);\n"};n["default"]=r["default"].createClass({displayName:"validate",render:function(){return r["default"].createElement(l.Col,{md:9,sm:12},r["default"].createElement("h1",{className:"page-header"},"表单验证",r["default"].createElement("span",{className:"page-header-en"},r["default"].createElement("code",null,"Form"),"、",r["default"].createElement("code",null,"Field"))),r["default"].createElement(s.Markdown,null,o(400)),r["default"].createElement("h3",null,"基础验证"),r["default"].createElement(d["default"],{code:c.basic}))}})},400:function(e,n){e.exports="<p>表单验证需要进入两个单独的的资源:</p> <div class=doc-highlight><pre><code class=javascript>npm install rsuite-form --save\nnpm install rsuite-schema --save</code></pre></div><p><code>rsuite-form</code> 提供了 <code>Form</code> 与 <code>Field</code> 两个组件，用于定义表单结构； <code>rsuite-schema</code> 提供了些函数用于快速构建与表单绑定的SchemaModel;</p>"}});