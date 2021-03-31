(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{480:function(e,t,n){e.exports=n.p+"assets/img/init-containers-screenshot.d39576a8.png"},733:function(e,t,n){"use strict";n.r(t);var o=n(31),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"entando-deployment-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#entando-deployment-structure"}},[e._v("#")]),e._v(" Entando Deployment Structure")]),e._v(" "),o("p",[e._v("This page provides a high level overview of the key Entando GitHub repositories along with a brief description\nof how those repositories are realized in a running Entando deployment. The descriptions provided here are meant\nas a guide for identifying opportunities to dig deeper into the architecture and how things are structured\nrather than a panacea for understanding the architecture.")]),e._v(" "),o("h2",{attrs:{id:"entando-operator"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#entando-operator"}},[e._v("#")]),e._v(" entando-operator")]),e._v(" "),o("p",[e._v("The Entando operator coordinates the installation and configuration of all of the components of an Entando\nCluster. The operator can be installed once per Entando Cluster and used to coordinate the plugin lifecycle for\nmultiple Entando applications across many namespaces.")]),e._v(" "),o("ul",[o("li",[e._v("GitHub: "),o("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-controller-coordinator/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-k8s-controller-coordinator/"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("DockerHub: "),o("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-k8s-controller-coordinator",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-k8s-controller-coordinator"),o("OutboundLink")],1)])]),e._v(" "),o("h4",{attrs:{id:"customization"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#customization"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),o("p",[e._v("It is unlikely that the operator will be customized as part of an Entando implementation. It is not built to\nbe extended inside the codebase. The most common pattern will be to use the existing custom resources that the\noperator knows how to deploy to extend the Entando platform.")]),e._v(" "),o("h2",{attrs:{id:"database-init-containers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#database-init-containers"}},[e._v("#")]),e._v(" database init containers")]),e._v(" "),o("p",[e._v("During installation an Entando application needs to create several databases and also to initialize those\ndatabases with information when deploying from a backup in your images. At initialization the "),o("em",[e._v("entando-k8s-dbjob")]),e._v("\nwill be run 5 times in total. Once for keycloak, twice for the entando application (port and serv dbs), once to\npopulate the Entando application database, and once to create the Component Repository database.")]),e._v(" "),o("ul",[o("li",[e._v("GitHub: "),o("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-dbjob",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-k8s-dbjob"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("DockerHub: "),o("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-k8s-dbjob",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-k8s-dbjob"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("The screenshot below highlights the init containers for the Entando application schema creation, db\ninitialization, and component repository database.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(480),alt:"Init Containers Screenshot"}})]),e._v(" "),o("p",[e._v("Many managed kubernetes instances like OpenShift won’t show init containers in their dashboards. So if you’re\ntroubleshooting you may need to look deeper. When fetching logs for an init container using kubectl you must\npass the container name as an argument to the call. For example,")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("    kubectl logs <pod> -c <container> -n <namespace>        \n    kubectl logs quickstart-kc-db-preparation-job-ddbdbddb-a  -c quickstart-kc-db-schema-creation-job -n sprint1-rc\n")])])]),o("h4",{attrs:{id:"customization-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#customization-2"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),o("p",[e._v("It is unlikely that the init containers will be customized as part of an Entando project. The init containers\nwill automatically restore a backup included in your application so that you can create custom images that\ninclude your application setup.\nSee "),o("a",{attrs:{href:"../../tutorials/devops/backing-up-and-restoring-your-environment"}},[e._v("Backing Up and Restoring Your Environment")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"entando-de-app"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#entando-de-app"}},[e._v("#")]),e._v(" entando-de-app")]),e._v(" "),o("p",[e._v("The "),o("em",[e._v("entando-de-app")]),e._v(" is a J2EE application and is an instance of the "),o("em",[e._v("entando-core")]),e._v(" (see a description of the\n"),o("em",[e._v("entando-core")]),e._v(" repo below). Reviewing the dependencies of this application in the pom.xml will reveal the\ndependencies on the "),o("em",[e._v("entando-core")]),e._v(", "),o("em",[e._v("entando-engine")]),e._v(", and "),o("em",[e._v("admin-console")]),e._v(" which encompass the core\nfunctionality in versions of Entando prior to Entando 6. In a quickstart deployment the "),o("em",[e._v("entando-de-app")]),e._v(" is deployed as part of the "),o("em",[e._v("entando-composite-app")]),e._v(" multi\ncontainer pod.")]),e._v(" "),o("ul",[o("li",[e._v("GitHub: "),o("a",{attrs:{href:"https://github.com/entando-k8s/entando-de-app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-de-app/"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("DockerHub: "),o("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-de-app-eap",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-de-app-eap"),o("OutboundLink")],1),e._v(","),o("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-de-app-wildfly",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-de-app-wildfly"),o("OutboundLink")],1)])]),e._v(" "),o("h4",{attrs:{id:"customization-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#customization-3"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),o("p",[e._v("The "),o("em",[e._v("entando-de-app")]),e._v(" is very likely to be customized as part of an Entando implementation. This image can be\ncustomized with new APIs, legacy Entando plugins, new database tables, or other extensions to the "),o("em",[e._v("entando-core")]),e._v(".\nIt is highly recommended that most extensions to the platform in Entando 6 occur in microservices. However, legacy\nintegrations, extensions to the CMS, and migrations from earlier Entando versions may require changes to the "),o("em",[e._v("entando-de-app")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"app-builder"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#app-builder"}},[e._v("#")]),e._v(" app-builder")]),e._v(" "),o("p",[e._v("The "),o("em",[e._v("app-builder")]),e._v(" is the front end of the "),o("em",[e._v("entando-de-app")]),e._v(". It communicates with the "),o("em",[e._v("entando-de-app")]),e._v(" via "),o("RouterLink",{attrs:{to:"/next/docs/reference/entando-apis.html"}},[e._v("REST\nAPIs")]),e._v(". The "),o("em",[e._v("app-builder")]),e._v(" is a React JS application and is served via node in the default\ndeployment. In a quickstart deployment the "),o("em",[e._v("app-builder")]),e._v(" container is deployed in the "),o("em",[e._v("entando-composite-app")]),e._v("\nmultiple container pod. The "),o("em",[e._v("app-builder")]),e._v(" also communicates with the Component Manager via REST API to fetch\ninformation about Entando bundles deployed to the Entando Component Repository (ECR).")],1),e._v(" "),o("ul",[o("li",[e._v("GitHub: "),o("a",{attrs:{href:"https://github.com/entando/app-builder/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/app-builder/"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("DockerHub: "),o("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/app-builder/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/app-builder/"),o("OutboundLink")],1)])]),e._v(" "),o("h4",{attrs:{id:"customization-4"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#customization-4"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),o("p",[e._v("The "),o("em",[e._v("app-builder")]),e._v(" is built to be customized and will be customized as part of many Entando implementations.\nThe "),o("em",[e._v("app-builder")]),e._v(" can be customized at runtime via micro frontends\n"),o("RouterLink",{attrs:{to:"/next/tutorials/micro-frontends/widget-configuration.html"}},[e._v("widget configuration")]),e._v(". The "),o("em",[e._v("app-builder")]),e._v(" can also be\ncustomized via the integration of custom modules that are added at\n"),o("RouterLink",{attrs:{to:"/next/tutorials/customize-the-platform/extend-app-builder.html"}},[e._v("build time")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"component-manager"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-manager"}},[e._v("#")]),e._v(" component-manager")]),e._v(" "),o("p",[e._v("The "),o("em",[e._v("component-manager")]),e._v(" provides the link between the entando-de-app (or your custom core instance) and the\nEntando Component Repository (ECR). The "),o("em",[e._v("component-manager")]),e._v(" queries the entando-k8s service to fetch available\nbundles that have been deployed as custom resources inside of an Entando cluster.\nThe "),o("em",[e._v("component-manager")]),e._v(" also manages the relationships between an Entando application and the\ninstalled plugins. This can be seen in the plugin link custom resources in Kubernetes.")]),e._v(" "),o("ul",[o("li",[e._v("GitHub: "),o("a",{attrs:{href:"https://github.com/entando-k8s/entando-component-manager/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-component-manager/"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("DockerHub: "),o("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-component-manager/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-component-manager/"),o("OutboundLink")],1)])]),e._v(" "),o("h4",{attrs:{id:"customization-5"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#customization-5"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),o("p",[e._v("It is unlikely that the "),o("em",[e._v("component-manager")]),e._v(" will be customized as part of an Entando implementation.")]),e._v(" "),o("h2",{attrs:{id:"entando-k8s-service"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#entando-k8s-service"}},[e._v("#")]),e._v(" entando-k8s-service")]),e._v(" "),o("p",[e._v("The "),o("em",[e._v("entando-k8s-service")]),e._v(" acts as an abstraction layer to fetch data from kubernetes APIs. The primary\nfunctionality is in discovering and making available for installation Entando plugins. The\n"),o("em",[e._v("entando-k8s-service")]),e._v(" is invoked by the "),o("em",[e._v("component-manager")]),e._v(".")]),e._v(" "),o("ul",[o("li",[e._v("GitHub: "),o("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-service/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-k8s-service/"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("DockerHub: "),o("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-k8s-service/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-k8s-service/"),o("OutboundLink")],1)])]),e._v(" "),o("h4",{attrs:{id:"customization-6"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#customization-6"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),o("p",[e._v("It is very unlikely that the "),o("em",[e._v("entando-k8s-service")]),e._v(" will be customized as part of an Entando implementation.")]),e._v(" "),o("h2",{attrs:{id:"keycloak"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#keycloak"}},[e._v("#")]),e._v(" keycloak")]),e._v(" "),o("p",[e._v("The "),o("em",[e._v("entando-keycloak")]),e._v(" project is an extension of the base Keycloak images. The extension provides the default\nthemes for Entando, a customized realm and clients, and adds the Oracle ojdbc jars for connection to Oracle\ndatabases.")]),e._v(" "),o("ul",[o("li",[e._v("GitHub: "),o("a",{attrs:{href:"https://github.com/entando/entando-keycloak/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-keycloak/"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("DockerHub: "),o("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-keycloak/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-keycloak/"),o("OutboundLink")],1)])]),e._v(" "),o("h4",{attrs:{id:"customization-7"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#customization-7"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),o("p",[e._v("The keycloak image will often be customized as part of an Entando implementation. Common extensions will\ninclude changing the theme, adding default connections, adding default social logins, adding default clients,\nor other changes.")]),e._v(" "),o("h2",{attrs:{id:"other-key-repositories"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-key-repositories"}},[e._v("#")]),e._v(" Other Key Repositories")]),e._v(" "),o("h3",{attrs:{id:"entando-core"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#entando-core"}},[e._v("#")]),e._v(" entando-core")]),e._v(" "),o("p",[e._v("The entando-core project is a J2EE application that exposes APIs for the Entando CMS, includes the legacy\nadmin console, and includes the portal-ui project that performs the server side composition for pages\nrendered via an Entando application. Note that only the composition is performed server side.\nJavascript code is rendered on the client. The entando-core is realized via an instance that includes the\nWAR files generated from a core build as dependencies. In a default deployment this is the "),o("em",[e._v("entando-de-app")]),e._v(".")]),e._v(" "),o("ul",[o("li",[e._v("GitHub: "),o("a",{attrs:{href:"https://github.com/entando/entando-core/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-core/"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("DockerHub: None (deployed to maven central)")])]),e._v(" "),o("h4",{attrs:{id:"customization-8"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#customization-8"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),o("p",[e._v("For users familiar with versions prior to Entando 6 there will be cases where the "),o("em",[e._v("entando-core")]),e._v(" is customized.\nIn most cases these customizations will be delivered via WAR overlay in the instance project.\nUsing WAR overlay is a functional approach for users already  familiar with the process but it is highly\nrecommended to extend the platform using microservices for new projects.")]),e._v(" "),o("h3",{attrs:{id:"entando-cms"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#entando-cms"}},[e._v("#")]),e._v(" entando-cms")]),e._v(" "),o("p",[e._v("The "),o("em",[e._v("entando-cms")]),e._v(" project is the "),o("em",[e._v("app-builder")]),e._v(" (React JS) side of the Entando WCMS. It is bundled into the\n"),o("em",[e._v("app-builder")]),e._v(" at build time and will be included in the default deployment of the "),o("em",[e._v("app-builder")]),e._v(" in almost all cases.")]),e._v(" "),o("ul",[o("li",[e._v("GitHub: "),o("a",{attrs:{href:"https://github.com/entando/entando-cms/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-cms/"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("DockerHub: None (deployed to npm)")])]),e._v(" "),o("h4",{attrs:{id:"customization-9"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#customization-9"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),o("p",[e._v("In some cases the "),o("em",[e._v("entando-cms")]),e._v(" may be customized if new custom features are added to CMS specific\nfunctionality. However, most cases will use the more general "),o("em",[e._v("app-builder")]),e._v(" extension points noted above.\nThe "),o("em",[e._v("entando-cms")]),e._v(" does not expose any dedicated extension interfaces outside of those already provided by the\n"),o("em",[e._v("app-builder")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"entando-components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#entando-components"}},[e._v("#")]),e._v(" entando-components")]),e._v(" "),o("p",[e._v("The entando-components project is a collection of legacy plugins for Entando 5 and earlier. These plugins are deployed as WAR dependencies in an entando-core instance.")]),e._v(" "),o("ul",[o("li",[e._v("GitHub: "),o("a",{attrs:{href:"https://github.com/entando/entando-components/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-components/"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("DockerHub: None (deployed to maven central)")])]),e._v(" "),o("h3",{attrs:{id:"entando-kubernetes-controllers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#entando-kubernetes-controllers"}},[e._v("#")]),e._v(" Entando Kubernetes Controllers")]),e._v(" "),o("p",[e._v("There are a number of controllers that are available to the Entando operator to manage installations and\ncomponents in an Entando Cluster. Those controllers are small and lightweight images that are executed as\nrun to completion pods to manage the installation flow for different parts of the infrastructure. The\ncontrollers are implemented using Quarkus. For more information on the controllers, the Entando custom\nresources, and configuring your Entando deployment see also:\n"),o("a",{attrs:{href:"../concepts/custom-resources"}},[e._v("Custom Resources")]),e._v(".")]),e._v(" "),o("p",[e._v("GitHub:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-composite-app-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-k8s-composite-app-controller/"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-plugin-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-k8s-plugin-controller/"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-cluster-infrastructure-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-k8s-cluster-infrastructure-controller/"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-app-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-k8s-app-controller/"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/entando-k8s/entando-k8s-app-plugin-link-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-k8s-app-plugin-link-controller/"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("DockerHub:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-k8s-composite-app-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-k8s-composite-app-controller/"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-k8s-plugin-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-k8s-plugin-controller/"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-k8s-cluster-infrastructure-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-k8s-cluster-infrastructure-controller/"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-k8s-app-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-k8s-app-controller/"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://hub.docker.com/repository/docker/entando/entando-k8s-app-plugin-link-controller/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/repository/docker/entando/entando-k8s-app-plugin-link-controller/"),o("OutboundLink")],1)])]),e._v(" "),o("h4",{attrs:{id:"customization-10"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#customization-10"}},[e._v("#")]),e._v(" Customization")]),e._v(" "),o("p",[e._v("It is unlikely that the controllers will be customized as part of an Entando implementation.")])])}),[],!1,null,null,null);t.default=a.exports}}]);