/*! Last update: Sat Aug 27 2016 14:38:58 GMT+0800 (CST) */
webpackJsonp([13],{387:function(t,e,n){"use strict";function d(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),l=d(a),r=n(254),o=n(338),c=d(o),u=n(335),i={basic:'const title = (\n    <h3>Panel title</h3>\n);\n\nconst panelsInstance = (\n    <div>\n        <Panel header={title} shape="default">\n            Panel content\n        </Panel>\n\n        <Panel header={title} shape="primary">\n            Panel content\n        </Panel>\n\n        <Panel header={title} shape="success">\n            Panel content\n        </Panel>\n\n        <Panel header={title} shape="info">\n            Panel content\n        </Panel>\n\n        <Panel header={title} shape="warning">\n            Panel content\n        </Panel>\n\n        <Panel header={title} shape="danger">\n            Panel content\n        </Panel>\n    </div>\n);\n\nReactDOM.render(panelsInstance, mountNode);\n',panelGroup:'const panelGroupInstance = (\n    <PanelGroup defaultActiveKey="2" accordion>\n        <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>\n        <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>\n        <Panel header="Panel 3" eventKey="3">Panel 3 content</Panel>\n    </PanelGroup>\n);\n\nReactDOM.render(panelGroupInstance, mountNode);\n',controlledPanelGroup:'const ControlledPanelGroup = React.createClass({\n    getInitialState() {\n        return {\n            activeKey: \'1\'\n        };\n    },\n    handleSelect(activeKey) {\n        this.setState({ activeKey });\n    },\n    render() {\n        return (\n            <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>\n                <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>\n                <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>\n                <Panel header="Panel 3" eventKey="3">Panel 3 content</Panel>\n            </PanelGroup>\n        );\n    }\n});\n\nReactDOM.render(<ControlledPanelGroup />, mountNode);\n'};e["default"]=l["default"].createClass({displayName:"panels",render:function(){return l["default"].createElement(r.Col,{md:9,sm:12},l["default"].createElement("h1",{className:"page-header"},"Panels",l["default"].createElement("span",{className:"page-header-en"},l["default"].createElement("code",null,"Panel"),"、",l["default"].createElement("code",null,"PanelGroup"))),l["default"].createElement("h3",null,"默认样式"),l["default"].createElement(c["default"],{code:i.basic}),l["default"].createElement("h3",null,"面板组"),l["default"].createElement(c["default"],{code:i.panelGroup}),l["default"].createElement("h3",null,"受控面板组"),l["default"].createElement(c["default"],{code:i.controlledPanelGroup}),l["default"].createElement("h3",null,"组件属性"),l["default"].createElement(u.Markdown,null,n(388)))}})},388:function(t,e){t.exports="<h1 id=panel>Panel</h1> <table> <thead> <tr> <th>属性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>collapsible</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>classPrefix</td> <td>string</td> <td><code>panel</code></td> <td></td> </tr> <tr> <td>defaultExpanded</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>expanded</td> <td>boolean</td> <td></td> <td></td> </tr> <tr> <td>eventKey</td> <td>any</td> <td></td> <td></td> </tr> <tr> <td>header</td> <td>node</td> <td></td> <td></td> </tr> <tr> <td>id</td> <td>string 或者 number</td> <td></td> <td></td> </tr> <tr> <td>shape</td> <td>one of: <code>default</code>, <code>primary</code>, <code>link</code>, <code>success</code>, <code>warning</code>, <code>danger</code>, <code>info</code></td> <td></td> <td></td> </tr> <tr> <td>onSelect</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onEnter</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onEntering</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onEntered</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onExit</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onExiting</td> <td>function</td> <td></td> <td></td> </tr> <tr> <td>onExited</td> <td>function</td> <td></td> <td></td> </tr> </tbody> </table> <h1 id=panelgroup>PanelGroup</h1> <table> <thead> <tr> <th>属性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>accordion</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>classPrefix</td> <td>string</td> <td></td> <td></td> </tr> <tr> <td>children</td> <td>node</td> <td></td> <td></td> </tr> <tr> <td>activeKey</td> <td>any</td> <td></td> <td></td> </tr> <tr> <td>defaultActiveKey</td> <td>any</td> <td></td> <td></td> </tr> <tr> <td>onSelect</td> <td>function</td> <td></td> <td></td> </tr> </tbody> </table>"}});