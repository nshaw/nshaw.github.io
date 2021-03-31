(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{406:function(t,s,e){t.exports=e.p+"assets/img/new-widget-screen.cd5a1175.png"},515:function(t,s,e){t.exports=e.p+"assets/img/react-micro-frontend.468a6796.png"},781:function(t,s,e){"use strict";e.r(s);var a=e(31),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"create-a-react-micro-frontend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-react-micro-frontend"}},[t._v("#")]),t._v(" Create a React Micro Frontend")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Prerequisites")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"../../docs/getting-started"}},[t._v("A working instance of Entando.")])]),t._v(" "),a("li",[t._v("Use the Entando CLI to verify you have the command line prerequisites in place for this tutorial (e.g. npm).")])])]),t._v(" "),a("h2",{attrs:{id:"create-react-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-react-app"}},[t._v("#")]),t._v(" Create React App")]),t._v(" "),a("p",[t._v("We'll use "),a("a",{attrs:{href:"https://create-react-app.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create React App"),a("OutboundLink")],1),t._v(" to create a simple app in seconds.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("npx create-react-app my-widget --use-npm\n")])])]),a("p",[t._v("This is the expected output:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("my-widget\n├── README.md\n├── node_modules\n├── package.json\n├── .gitignore\n├── public\n│   ├── favicon.ico\n│   ├── index.html\n│   ├── logo192.png\n│   ├── logo512.png\n│   ├── manifest.json\n│   └── robots.txt\n└── src\n    ├── App.css\n    ├── App.js\n    ├── App.test.js\n    ├── index.css\n    ├── index.js\n    ├── logo.svg\n    ├── serviceWorker.js\n    └── setupTests.js\n")])])]),a("p",[t._v("Start the app.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" my-widget\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" start\n")])])]),a("h3",{attrs:{id:"wrap-with-custom-element"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wrap-with-custom-element"}},[t._v("#")]),t._v(" Wrap with Custom Element")]),t._v(" "),a("p",[t._v("Add a new file "),a("code",[t._v("src/WidgetElement.js")]),t._v(" with the custom element that will wrap the entire React app.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ReactDOM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-dom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WidgetElement")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HTMLElement")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connectedCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mountPoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mountPoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ReactDOM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("App "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mountPoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ncustomElements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-widget'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" WidgetElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" WidgetElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("connectedCallback")]),t._v(" is a lifecycle hook that "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks",target:"_blank",rel:"noopener noreferrer"}},[t._v("runs each time the element is added to the DOM."),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("The React "),a("code",[t._v("root")]),t._v(" node is programatically generated in the "),a("code",[t._v("connectedCallback")]),t._v(" method when our custom element is added to the DOM.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Custom Elements")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/22545621/do-custom-elements-require-a-dash-in-their-name",target:"_blank",rel:"noopener noreferrer"}},[t._v("Must contain a hyphen "),a("code",[t._v("-")]),t._v(" in the name."),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("li",[t._v("Cannot be a single word.")]),t._v(" "),a("li",[t._v("Should follow "),a("code",[t._v("kebab-case")]),t._v(" for naming convention.")])])]),t._v(" "),a("h3",{attrs:{id:"import-custom-element"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-custom-element"}},[t._v("#")]),t._v(" Import Custom Element")]),t._v(" "),a("p",[t._v("Open "),a("code",[t._v("src/index.js")]),t._v(". Here's what the initial file looks like:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ReactDOM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-dom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./index.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" serviceWorker "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./serviceWorker'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nReactDOM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("App "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If you want your app to work offline and load faster, you can change")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// unregister() to register() below. Note this comes with some pitfalls.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Learn more about service workers: https://bit.ly/CRA-PWA")]),t._v("\nserviceWorker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unregister")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Replace the entire file with these two lines.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./index.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./WidgetElement'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"test-micro-frontend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-micro-frontend"}},[t._v("#")]),t._v(" Test Micro Frontend")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Open "),a("code",[t._v("public/index.html")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Replace "),a("code",[t._v('<div id="root"></div>')]),t._v(" with the custom element "),a("code",[t._v("<my-widget />")]),t._v(".")])])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("noscript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("You need to enable JavaScript to run this app."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("noscript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("my-widget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    ...\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Congratulations!")]),t._v(" "),a("p",[t._v("You’re now running "),a("code",[t._v("React")]),t._v(" in a containerized micro frontend.")])]),t._v(" "),a("h2",{attrs:{id:"get-resource-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-resource-url"}},[t._v("#")]),t._v(" Get Resource URL")]),t._v(" "),a("p",[t._v("Let's add our micro frontend to Entando by adding our JavaScript and CSS files to the "),a("code",[t._v("public")]),t._v(" folder.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Entando makes files publicly available through the "),a("code",[t._v("public")]),t._v(" folder.")])]),t._v(" "),a("h4",{attrs:{id:"add-widget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-widget"}},[t._v("#")]),t._v(" Add Widget")]),t._v(" "),a("p",[t._v("Initially, we'll add a widget to get the resource URL for the "),a("code",[t._v("public")]),t._v(" folder. Later on, we'll use the same widget to add our micro frontend to Entando.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Go to "),a("code",[t._v("Components > Micro frontends & Widgets")]),t._v(" in the Entando App Builder.")])]),t._v(" "),a("li",[a("p",[t._v("Click "),a("code",[t._v("Add")]),t._v(" at the lower right.")])])]),t._v(" "),a("p",[a("img",{attrs:{src:e(406),alt:"New widget screen"}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Enter the following:")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Code: my_widget")]),t._v(" → note: dashes are not allowed")]),t._v(" "),a("li",[a("code",[t._v("Title: My Widget")]),t._v(" → for both English and Italian languages")]),t._v(" "),a("li",[a("code",[t._v("Group: Free Access")])]),t._v(" "),a("li",[a("code",[t._v("Custom UI:")])])]),t._v(" "),a("div",{staticClass:"language-ftl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ftl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token ftl language-ftl"}},[a("span",{pre:!0,attrs:{class:"token ftl-directive"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("#assign")]),a("span",{pre:!0,attrs:{class:"token content ftl"}},[t._v(" wp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("JspTaglibs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/aps-core"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token ftl language-ftl"}},[a("span",{pre:!0,attrs:{class:"token ftl-directive"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("@wp")]),a("span",{pre:!0,attrs:{class:"token content ftl"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resourceURL ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])])]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v('<#assign wp=JspTaglibs[ "/aps-core"]>')]),t._v(" gives you access to the "),a("code",[t._v("@wp")]),t._v(" object where you can use environment variables like "),a("code",[t._v("resourceURL")]),t._v(".")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Click "),a("code",[t._v("Save")]),t._v(".")])]),t._v(" "),a("h4",{attrs:{id:"add-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-page"}},[t._v("#")]),t._v(" Add Page")]),t._v(" "),a("p",[t._v("Next, let's add our widget to a page so we can view the "),a("code",[t._v("Resource URL")]),t._v(".")]),t._v(" "),a("p",[t._v("If you're getting started with a new install of Entando, let's add our widget to the "),a("code",[t._v("Home")]),t._v(" page:")]),t._v(" "),a("hr"),t._v(" "),a("blockquote",[a("p",[t._v("For Experienced Entando users:")]),t._v(" "),a("p",[t._v("Add a new page → Add your widget to the page")])]),t._v(" "),a("hr"),t._v(" "),a("ol",[a("li",[a("p",[t._v("Go to "),a("code",[t._v("Pages")]),t._v(" → "),a("code",[t._v("Management")])])]),t._v(" "),a("li",[a("p",[t._v("Next to the "),a("code",[t._v("Home")]),t._v(" folder, under "),a("code",[t._v("Actions")]),t._v(", click "),a("code",[t._v("Edit")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Next to "),a("code",[t._v("Page Template")]),t._v(" select "),a("code",[t._v("Service Page")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Click "),a("code",[t._v("Save and Configure")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("In the Search field in right-hand sidebar, enter "),a("code",[t._v("My Widget")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Drag and drop "),a("code",[t._v("My Widget")]),t._v(" into the "),a("code",[t._v("Sample Frame")]),t._v(" in the main body of the page.")])]),t._v(" "),a("li",[a("p",[t._v("Click "),a("code",[t._v("Publish")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("At the upper right, click "),a("code",[t._v("Go to Homepage")]),t._v(".")])])]),t._v(" "),a("ul",[a("li",[t._v("This will take you to a blank home page with your widget.")])]),t._v(" "),a("ol",{attrs:{start:"10"}},[a("li",[t._v("Copy the "),a("code",[t._v("Resource URL")]),t._v(". For example, this is the URL in a quickstart environment set up via the Getting Started guide:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/entando-de-app/cmsresources/\n")])])]),a("h2",{attrs:{id:"build-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-it"}},[t._v("#")]),t._v(" Build It")]),t._v(" "),a("p",[t._v("Now that we have the Resource URL where we'll host our "),a("code",[t._v("Create React App")]),t._v(", we're ready to build.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Create an "),a("code",[t._v(".env.production")]),t._v(" file in the project root of your "),a("code",[t._v("Create React App")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Add the "),a("code",[t._v("PUBLIC_URL")]),t._v(" where we'll be hosting our files.")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("PUBLIC_URL=/entando-de-app/cmsresources/my-widget\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Notes")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("/entando-de-app/cmsresources/")]),t._v(" is the Resource URL for your Entando application")]),t._v(" "),a("li",[a("code",[t._v("/my-widget")]),t._v(" is the public folder we'll create to host our files")])])]),t._v(" "),a("h3",{attrs:{id:"npm-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-build"}},[t._v("#")]),t._v(" npm build")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Open a command line, and navigate to the project root of your "),a("code",[t._v("Create React App")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Run the command:")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Rename the following generated files in the "),a("code",[t._v("build")]),t._v(" directory.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Example of Generated Build File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Rename to")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Function")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("build/static/js/2.f14073bd.chunk.js")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("static/js/vendor.js")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Third-party libraries")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("build/static/js/runtime-main.8a835b7b.js")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("static/js/runtime.js")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Bootstrapping logic")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("build/static/js/main.4a514a6d.chunk.js")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("static/js/main.js")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("App")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("build/static/css/main.5f361e03.chunk.css")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("static/css/main.css")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Stylesheet")])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Generated Build Files")]),t._v(" "),a("p",[t._v("We rename the JavaScript and CSS files so we can deploy new versions of the micro frontend without having to update the "),a("code",[t._v("Custom UI")]),t._v(" field of our widget to reference the new files.")])]),t._v(" "),a("p",[t._v("If you want to use the original "),a("a",{attrs:{href:"https://create-react-app.dev/docs/using-the-public-folder/#adding-assets-outside-of-the-module-system",target:"_blank",rel:"noopener noreferrer"}},[t._v("file names with the content hashes to avoid potential caching issues in your browser"),a("OutboundLink")],1),t._v(", update the "),a("code",[t._v("Custom UI")]),t._v(" field of your widget when deploying new versions of your micro frontend. The "),a("code",[t._v("Custom UI")]),t._v(" settings will be covered in the next section.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Additional Deployment Options")]),t._v(" "),a("ol",[a("li",[t._v("Install the micro frontend from a bundle in the "),a("code",[t._v("Entando Component Repository")]),t._v(".")]),t._v(" "),a("li",[t._v("Add the micro frontend to "),a("code",[t._v("Entando App Builder")]),t._v(".")]),t._v(" "),a("li",[t._v("Load the micro frontend from an API.")])])]),t._v(" "),a("h2",{attrs:{id:"host-micro-frontend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host-micro-frontend"}},[t._v("#")]),t._v(" Host Micro Frontend")]),t._v(" "),a("p",[t._v("Now we're ready to host our micro frontend in Entando.")]),t._v(" "),a("h3",{attrs:{id:"create-public-folder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-public-folder"}},[t._v("#")]),t._v(" Create Public Folder")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Navigate to "),a("code",[t._v("Entando App Builder")]),t._v(" in your browser.")])]),t._v(" "),a("li",[a("p",[t._v("Click "),a("code",[t._v("Administration")]),t._v(" at the lower left hand side of the screen.")])]),t._v(" "),a("li",[a("p",[t._v("Click the "),a("code",[t._v("File Browser")]),t._v(" tab.")])]),t._v(" "),a("li",[a("p",[t._v("Click the "),a("code",[t._v("public")]),t._v(" folder.")])]),t._v(" "),a("li",[a("p",[t._v("Click "),a("code",[t._v("Create Folder")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Enter "),a("code",[t._v("my-widget")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Click "),a("code",[t._v("Save")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Click "),a("code",[t._v("public")]),t._v(" → "),a("code",[t._v("my-widget")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Create the same folder structure as your generated build directory")])])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("my-widget/static/css")])]),t._v(" "),a("li",[a("code",[t._v("my-widget/static/js")])])]),t._v(" "),a("ol",{attrs:{start:"10"}},[a("li",[t._v("Upload the files we renamed in the corresponding "),a("code",[t._v("js")]),t._v(" and "),a("code",[t._v("css")]),t._v(" folders.")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("my-widget/static/css/main.css")])]),t._v(" "),a("li",[a("code",[t._v("my-widget/static/js/main.js")])]),t._v(" "),a("li",[a("code",[t._v("my-widget/static/js/runtime.js")])]),t._v(" "),a("li",[a("code",[t._v("my-widget/static/js/vendor.js")])])]),t._v(" "),a("p",[t._v("Note: You can drag and drop the files in your browser.")]),t._v(" "),a("ol",{attrs:{start:"11"}},[a("li",[t._v("Upload the "),a("code",[t._v("React")]),t._v(" logo.")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("my-widget/static/media/logo.5d5d9eef.svg")]),t._v(" → You don't need to rename this file.")])]),t._v(" "),a("h3",{attrs:{id:"update-custom-ui-field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-custom-ui-field"}},[t._v("#")]),t._v(" Update Custom UI Field")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Go to "),a("code",[t._v("Components")]),t._v(" → "),a("code",[t._v("Micro frontends & Widgets")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Under the "),a("code",[t._v("My Widgets")]),t._v(" category → next to "),a("code",[t._v("My Widget")]),t._v(" → under "),a("code",[t._v("Action")]),t._v(" → select "),a("code",[t._v("Edit")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Update "),a("code",[t._v("Custom UI")]),t._v(" field:")])])]),t._v(" "),a("div",{staticClass:"language-ftl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ftl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token ftl language-ftl"}},[a("span",{pre:!0,attrs:{class:"token ftl-directive"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("#assign")]),a("span",{pre:!0,attrs:{class:"token content ftl"}},[t._v(" wp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("JspTaglibs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/aps-core"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token ftl language-ftl"}},[a("span",{pre:!0,attrs:{class:"token ftl-directive"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("@wp")]),a("span",{pre:!0,attrs:{class:"token content ftl"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resourceURL ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])])]),t._v("my-widget/static/css/main.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token ftl language-ftl"}},[a("span",{pre:!0,attrs:{class:"token ftl-directive"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("@wp")]),a("span",{pre:!0,attrs:{class:"token content ftl"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resourceURL ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])])]),t._v("my-widget/static/js/runtime.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token ftl language-ftl"}},[a("span",{pre:!0,attrs:{class:"token ftl-directive"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("@wp")]),a("span",{pre:!0,attrs:{class:"token content ftl"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resourceURL ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])])]),t._v("my-widget/static/js/vendor.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token ftl language-ftl"}},[a("span",{pre:!0,attrs:{class:"token ftl-directive"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("@wp")]),a("span",{pre:!0,attrs:{class:"token content ftl"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resourceURL ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])])]),t._v("my-widget/static/js/main.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("my-widget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Click "),a("code",[t._v("Save")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"view-in-homepage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-in-homepage"}},[t._v("#")]),t._v(" View in Homepage")]),t._v(" "),a("p",[t._v("Let's see the React micro frontend in action on our page.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("In the "),a("code",[t._v("Entando App Builder")]),t._v(" dashboard, click "),a("code",[t._v("Go to Homepage")]),t._v(" at the upper right.")])]),t._v(" "),a("li",[a("p",[t._v("Go to the page that you created, and click refresh.")])])]),t._v(" "),a("p",[a("img",{attrs:{src:e(515),alt:"React Micro Frontend"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Congratulations!")]),t._v(" "),a("p",[t._v("You now have a React micro frontend running in Entando.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);