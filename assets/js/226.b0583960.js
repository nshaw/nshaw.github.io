(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{885:function(e,t,a){"use strict";a.r(t);var i=a(31),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"running-a-blueprint-generated-microservices-and-micro-frontend-in-local-dev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-a-blueprint-generated-microservices-and-micro-frontend-in-local-dev"}},[e._v("#")]),e._v(" Running a Blueprint Generated Microservices and Micro Frontend in Local Dev")]),e._v(" "),a("p",[e._v("This tutorial will take you through running an Entando microservice and micro frontend in a local development environment. If you haven't generated your Entando Plugin yet start with the "),a("RouterLink",{attrs:{to:"/v6.2/tutorials/backend-developers/generate-microservices-and-micro-frontends.html"}},[e._v("Generate Microservice and Micro Frontend")]),e._v(" tutorial and then run these steps.")],1),e._v(" "),a("p",[e._v("All of the steps below assume you are in the directory where you generated your Entando Plugin")]),e._v(" "),a("h2",{attrs:{id:"start-keycloak-using-docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-keycloak-using-docker-compose"}},[e._v("#")]),e._v(" Start Keycloak using docker-compose")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Startup the Keycloak server:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("docker-compose -f src/main/docker/keycloak.yml up\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes:")]),e._v(" "),a("p",[e._v("if you have to install docker compose you can follow this guide:\n"),a("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/compose/install/"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"start-the-microservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-the-microservice"}},[e._v("#")]),e._v(" Start the microservice")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Start the generated Microservice executing the command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("./mvnw\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"notes-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes-2"}},[e._v("#")]),e._v(" Notes:")]),e._v(" "),a("p",[e._v('If you want to reset the widget data (as example if you deleted all rows from the table widget) if during the generation of the microservice you selected "H2 with disk-based persistence" you can delete the target folder, restart the microservice and the data will be regenerated.')]),e._v(" "),a("h2",{attrs:{id:"start-the-table-widget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-the-table-widget"}},[e._v("#")]),e._v(" Start the table widget")]),e._v(" "),a("p",[e._v("Now you can start your generated table widget:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Go to the table widget folder in your project:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cd ui/widgets/<your-entity-name>/tableWidget\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Then install and start your widget executing the command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("npm install && npm start\n")])])])]),e._v(" "),a("li",[a("p",[e._v("When the widget is started a browser window is opened and the widget URL is loaded")])]),e._v(" "),a("li",[a("p",[e._v("If you’re not logged in you’re redirected to the login page.")])]),e._v(" "),a("li",[a("p",[e._v("Log in using:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Username: user\nPassword: user\n")])])])]),e._v(" "),a("li",[a("p",[e._v("After the login process you’ll be redirected to the widget page and you can see the table widget with some generated data.")])])]),e._v(" "),a("h2",{attrs:{id:"start-the-form-widget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-the-form-widget"}},[e._v("#")]),e._v(" Start the form widget")]),e._v(" "),a("p",[e._v("Now you can start your generated form widget:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("If you are running another widget, stop it clicking "),a("code",[e._v("Ctrl+C")]),e._v(" in your widget command line window")])]),e._v(" "),a("li",[a("p",[e._v("Go to the form widget folder in your project:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cd ui/widgets/<your-entity-name>/formWidget\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Then install and start your widget executing the command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("npm install && npm start\n")])])])]),e._v(" "),a("li",[a("p",[e._v("When the widget is started a browser window is opened with and the widget URL is loaded")])]),e._v(" "),a("li",[a("p",[e._v("If you’re not logged in you’re redirected to the login page.")])]),e._v(" "),a("li",[a("p",[e._v("Log in using:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Username: user\nPassword: user\n")])])])]),e._v(" "),a("li",[a("p",[e._v("You’ll be redirected to the widget page and you can see the widget form with the ID 1 loaded.")])])]),e._v(" "),a("h3",{attrs:{id:"form-widget-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#form-widget-notes"}},[e._v("#")]),e._v(" Form widget notes:")]),e._v(" "),a("p",[e._v("If you want to load other data you have to change the index.html file in the folder:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cd ui/widgets/<your-entity-name>/formWidget/public\n")])])]),a("p",[e._v("and change the id attribute in this line:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<my-entity-form service-url="%REACT_APP_SERVICE_URL%" id="1" />\n')])])]),a("h2",{attrs:{id:"start-the-details-widget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-the-details-widget"}},[e._v("#")]),e._v(" Start the details widget")]),e._v(" "),a("p",[e._v("You can also start your generated details widget:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("If you are running another widget, stop it clicking "),a("code",[e._v("Ctrl+C")]),e._v(" in your widget command line window")])]),e._v(" "),a("li",[a("p",[e._v("Go to the details widget folder in your project:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cd ui/widgets/<your-entity-name>/detailsWidget\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Then install and start your widget executing the command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("npm install && npm start\n")])])])]),e._v(" "),a("li",[a("p",[e._v("When the widget is started a browser window is opened with and the widget URL is loaded")])]),e._v(" "),a("li",[a("p",[e._v("If you’re not logged in you’re redirected to the login page.")])]),e._v(" "),a("li",[a("p",[e._v("Log in using:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Username: user\nPassword: user\n")])])])]),e._v(" "),a("li",[a("p",[e._v("You’ll be redirected to the widget page and you can see the widget form with the ID 1 loaded.")])])]),e._v(" "),a("h3",{attrs:{id:"widget-details-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widget-details-notes"}},[e._v("#")]),e._v(" Widget Details notes:")]),e._v(" "),a("p",[e._v("If you want to load other data you have to change the index.html file in the public folder:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cd ui/widgets/<your-entity-name>/detailsWidget/public\n")])])]),a("p",[e._v('and change the "id" attribute in this line:')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<my-entity-details service-url="%REACT_APP_SERVICE_URL%" id="1" />\n')])])]),a("h2",{attrs:{id:"notes-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes-3"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),a("h3",{attrs:{id:"change-keycloak-dev-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-keycloak-dev-settings"}},[e._v("#")]),e._v(" Change keycloak dev settings")]),e._v(" "),a("p",[e._v("If you want to change your keycloak settings to use another keycloak installation (not the docker compose pre configured one) or if you want to change the service-url of your widget you can change the parameters set in the .env.local file that was generated by the entando-blueprint in the root folder of your react widgets:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cd ui/widgets/<your-entity-name>/tableWidget\n")])])]),a("p",[e._v("then edit the file "),a("code",[e._v(".env.local")])]),e._v(" "),a("p",[e._v("By default this variables are set to:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("REACT_APP_SERVICE_URL=http://localhost:8081/services/<your-application-name>/api\nREACT_APP_KEYCLOAK_URL=http://localhost:9080/auth\nREACT_APP_KEYCLOAK_REALM=jhipster\nREACT_APP_KEYCLOAK_CLIENT_ID=web_app\n")])])]),a("h3",{attrs:{id:"the-service-url-variable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-service-url-variable"}},[e._v("#")]),e._v(" The service-url Variable")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("service-url")]),e._v(" variable is the api Microservice API URL.")]),e._v(" "),a("h3",{attrs:{id:"user-is-not-authenticated-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-is-not-authenticated-message"}},[e._v("#")]),e._v(" User is not authenticated message")]),e._v(" "),a("p",[e._v("When you run the widgets if you see the message: "),a("code",[e._v("User is not authenticated")]),e._v(". This means that probably your keycloak application is not running so please check if the docker-compose command is still in execution.")]),e._v(" "),a("h2",{attrs:{id:"open-the-project-in-an-ide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-the-project-in-an-ide"}},[e._v("#")]),e._v(" Open the project in an IDE")]),e._v(" "),a("p",[e._v("This section just walks through the anatomy of the project and the micro frontends.\nYou can skip this or review later as desired. The top level project is a normal Spring Boot application.\nYou can look through the code and configuration in src/main/java to get a view of the server side.\nThe micro frontends are in the ui folder. Each entity gets an MFE for details, table, and form.")])])}),[],!1,null,null,null);t.default=r.exports}}]);