(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{512:function(e,t,n){e.exports=n.p+"assets/img/multiple-deployment.a02059a1.png"},513:function(e,t,n){e.exports=n.p+"assets/img/clustered-logs.56f7b97d.png"},762:function(e,t,n){"use strict";n.r(t);var a=n(31),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"caching-and-clustering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caching-and-clustering"}},[e._v("#")]),e._v(" Caching and Clustering")]),e._v(" "),a("p",[e._v("The tutorials below cover the basic steps to setup and validate a clustered instance of the Entando App Engine.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("NOTE")])]),e._v(" "),a("p",[e._v("When building your deployment architecture it is important to review your goals, hardware, networking, and application specific setup and to optimize your App Engine deployment for your environment. None of the configurations or deployments below will address every type of application or every type of deployment. The configuration and testing examples below can be used as building blocks to create a deployment architecture that works for your application.")])]),e._v(" "),a("h2",{attrs:{id:"clustering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clustering"}},[e._v("#")]),e._v(" Clustering")]),e._v(" "),a("p",[e._v("This tutorial reviews setting up a clustered Entando App Engine using the default Infinispan Library Mode deployment that ships with the quickstart App Engine in the "),a("code",[e._v("entando-de-app")]),e._v(". The goal of the tutorial is to deploy a clustered instance of the App Engine and verify that we have a high availability and scalable deployment of the application.")]),e._v(" "),a("h3",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("An existing deployment of an Entando App or the ability to create a new one\n"),a("ul",[a("li",[e._v("If you haven't created a deployment yet or don't have a yaml file for an Entando deployment follow the quickstart "),a("RouterLink",{attrs:{to:"/next/docs/getting-started/"}},[e._v("here")]),e._v(".")],1)])]),e._v(" "),a("li",[e._v("The Entando deployment must use an RDBMS. Clustered instances will not work correctly with in memory databases and a "),a("code",[e._v("dbms: none")]),e._v(" configuration.")])]),e._v(" "),a("h3",{attrs:{id:"creating-a-clustered-app-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-clustered-app-instance"}},[e._v("#")]),e._v(" Creating a Clustered App Instance")]),e._v(" "),a("ol",[a("li",[e._v("Create an Entando deployment via the helm template or edit an existing deployment yaml file.")]),e._v(" "),a("li",[e._v("Edit the deployment and find the "),a("code",[e._v("EntandoApp")]),e._v(" in the yaml file (towards the bottom).\n"),a("ul",[a("li",[e._v("If you're editing an existing deployment you can use "),a("code",[e._v("kubectl edit <deployment>")]),e._v(" or you can edit the deployment prior to kicking off the installation.")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('- kind: "EntandoApp"\n      metadata:\n        annotations: {}\n        labels: {}\n        name: "quickstart"\n      spec:\n        dbms: postgresql\n        replicas: 1\n        standardServerImage: wildfly\n        ingressPath: /entando-de-app\n')])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("In the "),a("code",[e._v("EntandoApp")]),e._v(" change the number of replicas to 2 (or more as desired)")]),e._v(" "),a("li",[e._v("Save the file")]),e._v(" "),a("li",[e._v("Deploy the application or wait for the application to update if editing an existing deployment")]),e._v(" "),a("li",[e._v("Run "),a("code",[e._v("kubectl get pods -n <your namespace>")]),e._v(" to view the pods in your deployment")]),e._v(" "),a("li",[e._v("You should have two "),a("code",[e._v("server-deployment")]),e._v(" pods in your namespace with three containers each. See the screenshot below:")])]),e._v(" "),a("p",[a("img",{attrs:{src:n(512),alt:"Deployment"}})]),e._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[e._v("Finally, you can look in the logs of the "),a("code",[e._v("server-container")]),e._v(" in either pod and you will see logging related to different instance joining the cluster and balancing the data between the instances. See the screenshot for an example. Your actual logs will vary:")])]),e._v(" "),a("p",[a("img",{attrs:{src:n(513),alt:"Clustered Logs"}})]),e._v(" "),a("p",[e._v("The tutorials below will take you through validating and testing the clustered and cached instances.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("NOTE")])]),e._v(" "),a("p",[e._v("If you are on OpenShift you can use the Scale Up arrows and other settings available in the OpenShift console if you prefer")])]),e._v(" "),a("h3",{attrs:{id:"validating-the-clustered-instances"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validating-the-clustered-instances"}},[e._v("#")]),e._v(" Validating the Clustered Instances")]),e._v(" "),a("p",[e._v("This is an advanced tutorial and is not required or recommended for most deployment scenarios or users.")]),e._v(" "),a("p",[e._v("This tutorial will walk you through steps to validate that the clustered instances are working in your environment and that you have created a high availability deployment. There are many ways to validate your clustering.")]),e._v(" "),a("ol",[a("li",[e._v("Complete the "),a("a",{attrs:{href:"#creating-a-clustered-app-instance"}},[e._v("creating a clustered instance tutorial")]),e._v(" above or have an existing clustered Entando App instance available for testing")]),e._v(" "),a("li",[e._v("Get the URL for your "),a("code",[e._v("entando-de-app")]),e._v(" with "),a("code",[e._v("kubectl get ingress -n <your namespace>")])]),e._v(" "),a("li",[e._v("Open the URL in a browser of your choice and ensure that the application is working")]),e._v(" "),a("li",[e._v("Open a new browser window in an incognito or private browsing mode.  do not navigate to the app\n"),a("ul",[a("li",[e._v("The only reason for private mode is to ensure that no data is cached and you're receiving a copy of the running application")])])]),e._v(" "),a("li",[e._v("In the next steps you'll delete a pod in your cluster and verify that your application is still getting served. Kubernetes will automatically restore the desired number of replicas so you'll need to perform the validation test before the new replica is launched. In most environments this will be around one minute but it will vary.")]),e._v(" "),a("li",[e._v("Delete one of the server deployment pods in your clustered instances with "),a("code",[e._v("kubectl delete <pod-name> -n <your namespace>")]),e._v(" "),a("ul",[a("li",[e._v("There are other ways to do this. You could also shell into the server-container and manually kill the running app process with "),a("code",[e._v("kill -9 357")]),e._v(".")]),e._v(" "),a("li",[e._v("If you wanted to test at the hardware level you could manually terminate a node in your cluster (ensuring that the pods are scheduled to different nodes)")])])]),e._v(" "),a("li",[e._v("In your private/incognito browser window open the URL to your "),a("code",[e._v("entando-de-app")])]),e._v(" "),a("li",[e._v("See that the application continues to render while the pod you deleted is no longer present")]),e._v(" "),a("li",[e._v("Wait for Kubernetes to restore your deleted pod")]),e._v(" "),a("li",[e._v("Check that the application continues to render after the pods are restored")])]),e._v(" "),a("h3",{attrs:{id:"caching-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caching-validation"}},[e._v("#")]),e._v(" Caching Validation")]),e._v(" "),a("p",[e._v("Validating the shared cache can be done in a similar fashion to the clustered instance validation. The high level steps are:")]),e._v(" "),a("ol",[a("li",[e._v("Deploy a clustered instance (see "),a("a",{attrs:{href:"#creating-a-clustered-app-instance"}},[e._v("creating a clustered instance tutorial")]),e._v(")")]),e._v(" "),a("li",[e._v("Create data using the app builder (pages, page templates, content etc.) using the external route for the application")]),e._v(" "),a("li",[e._v("Take note in the logs of which instance processed the request")]),e._v(" "),a("li",[e._v("Terminate that instance")]),e._v(" "),a("li",[e._v("Fetch the data created and ensure that the recently created data is returned")])]),e._v(" "),a("p",[e._v("Another option for validating the shared cache involves creating a custom deployment with two distinct Entando App instances. In this scenario you would not use the "),a("code",[e._v("replicas")]),e._v(" option in the deployment. This has the benefit of keeping all of the instances running and validating the configuration by creating distinct pods for the Entando App Engine so that each instance can be exposed on endpoints separately.")]),e._v(" "),a("p",[e._v("The high level steps for this setup are reviewed in "),a("a",{attrs:{href:"#appendix-a-creating-separately-deployed-app-engine-instances"}},[e._v("Appendix A")])]),e._v(" "),a("h2",{attrs:{id:"configuring-and-deploying-with-redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-and-deploying-with-redis"}},[e._v("#")]),e._v(" Configuring and Deploying with Redis")]),e._v(" "),a("p",[e._v("This tutorial covers deploying an Entando App Engine instance using Redis as a cache for data served by the app engine. For more information on the cache\nconfiguration for the App Engine checkout the "),a("RouterLink",{attrs:{to:"/next/docs/reference/caching-and-clustering.html"}},[e._v("reference documentation")])],1),e._v(" "),a("h3",{attrs:{id:"deploy-redis-to-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-redis-to-kubernetes"}},[e._v("#")]),e._v(" Deploy Redis to Kubernetes")]),e._v(" "),a("ol",[a("li",[e._v("Create the redis deployment and expose the endpoints")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl create deployment redis –-image"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("redis:6\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl expose replicaset.apps/redis-687488bdd4 --port"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6379")]),e._v(" --target-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6379")]),e._v(" -n "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your namespace"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Install the Redis CLI for your environment per "),a("a",{attrs:{href:"https://redis.io/topics/rediscli",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://redis.io/topics/rediscli"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Get the IP for your Redis deployment")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl get "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" -n "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your namespace"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Validate your deployment")])]),e._v(" "),a("p",[e._v("Should respond PONG")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("redis-cli -h "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.43")]),e._v(".99.198 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6379")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ping")]),e._v("\n")])])]),a("p",[e._v("Should increment each time")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("redis-cli -h "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.43")]),e._v(".99.198 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6379")]),e._v(" incr mycounter\n")])])]),a("h3",{attrs:{id:"configure-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-implementation"}},[e._v("#")]),e._v(" Configure implementation")]),e._v(" "),a("ol",[a("li",[e._v("Use git to clone the "),a("code",[e._v("entando-de-app")]),e._v(" repository")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/entando-k8s/entando-de-app\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Fetch the tags and checkout the release tag and create a branch for your customization")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch --tags\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout tags/v6.3.22 -b "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6.3")]),e._v("-redis\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Open the pom.xml file of the "),a("code",[e._v("entando-de-app")])]),e._v(" "),a("li",[e._v("Remove the Infinispan dependencies from the pom")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\x3c!-- infinispan --\x3e\n <dependency>\n     <groupId>org.infinispan</groupId>\n     <artifactId>infinispan-core</artifactId>\n     <version>9.4.8.Final</version>\n </dependency>\n <dependency>\n     <groupId>org.infinispan</groupId>\n     <artifactId>infinispan-commons</artifactId>\n     <version>9.4.8.Final</version>\n </dependency>\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Add the Redis caching plugin to the pom")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<dependency>\n    <groupId>org.entando.entando.plugins</groupId>\n    <artifactId>entando-plugin-jpredis</artifactId>\n    <type>war</type>\n</dependency>\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Save the pom")]),e._v(" "),a("li",[e._v("Build and push a custom image for the "),a("code",[e._v("entando-de-app")]),e._v(" following "),a("a",{attrs:{href:"https://entando.github.io/entando-docs/next/tutorials/devops/build-core-image.html#introduction",target:"_blank",rel:"noopener noreferrer"}},[e._v("these steps"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Create or download a deployment file. For example, use the "),a("code",[e._v("entando.yaml")])])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -L -C - -O https://raw.githubusercontent.com/entando/entando-releases/v6.3.0/dist/qs/entando.yaml\n")])])]),a("ol",{attrs:{start:"9"}},[a("li",[e._v("Update the image in the deployment yaml file to point to your custom "),a("code",[e._v("entando-de-app")]),e._v(" image with Redis. The line to change is in the "),a("code",[e._v("ConfigMap")]),e._v(" and is noted below")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('entando-de-app-wildfly: >-\n    {"version":"6.3.10","executable-type":"jvm","registry":"docker.io","organization":"entando"}\n')])])]),a("ol",{attrs:{start:"10"}},[a("li",[e._v("Add environment variables to the "),a("code",[e._v("EntandoApp")]),e._v(" in the deployment yaml file for the Redis address and Redis password for your deployed Redis instance. The variables to create are:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("REDIS_ADDRESS\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("REDIS_PASSWORD\n")])])]),a("p",[e._v("For example,")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("NOTE")])]),e._v(" "),a("p",[e._v("This example uses a secret for the "),a("code",[e._v("REDIS_PASSWORD")]),e._v(" which is recommended. You can also hardcode the password in the yaml for testing, however, creating passwords in clear text in your deployment files is not recommended. Create and use a secret for the password as a best practice.")])]),e._v(" "),a("p",[a("strong",[e._v("This is a reference example for the EntandoCompositeApp and is not a complete deployment. Utilize this as an example to create your configuration in a complete deployment.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('kind: "EntandoCompositeApp"\napiVersion: "entando.org/v1"\nmetadata:\n  name: "quickstart-apps"\n  namespace: test\nentandoStatus:\n  serverStatuses: {}\n  entandoDeploymentPhase: "requested"\nspec:\n  components:\n    - kind: "EntandoApp"\n      metadata:\n        annotations: {}\n        labels: {}\n        name: "quickstart1"\n      spec:\n        dbms: none\n        replicas: 2\n        standardServerImage: wildfly\n        ingressPath: /entando-de-app\n        ingressHostName: quickstart1.test.dynu.net\n        environmentVariables:\n          - name: REDIS_ADDRESS\n            value: <your redis URI. For example redis://localhost:6379)\n          - name: REDIS_PASSWORD\n            valueFrom:\n              secretKeyRef:\n                key: password\n                name: quickstart1-redis-secret\n                optional: false\n        ....\n')])])]),a("h2",{attrs:{id:"appendix-a-creating-separately-deployed-app-engine-instances"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix-a-creating-separately-deployed-app-engine-instances"}},[e._v("#")]),e._v(" Appendix A - Creating Separately Deployed App Engine Instances")]),e._v(" "),a("p",[e._v("This appendix provides a high level example of creating a deployment with two distinct Entando App Engine instances. This type of deployment can be used to create pods that can be separately accessed and managed. It is "),a("strong",[e._v("not recommended")]),e._v(" to use this type of deployment for typical development or production environments. Utilize the ability of Kubernetes and the Entando infrastructure to manage your replicas automatically.")]),e._v(" "),a("ol",[a("li",[e._v("Create two different instances of the "),a("code",[e._v("EntandoApp")]),e._v(" component inside of the "),a("code",[e._v("EntandoCompositeApp")]),e._v(" in your deployment yaml")]),e._v(" "),a("li",[e._v("Configure both EntandoApp instances to use the same database and JGroups configuration if using Infinispan. If using Redis configure both instances to point to the same Redis instance")]),e._v(" "),a("li",[e._v("Deploy the application")]),e._v(" "),a("li",[e._v("Expose the separately deployed "),a("code",[e._v("EntandoApp")]),e._v(" instances with distinct endpoints")]),e._v(" "),a("li",[e._v("Create data in one instance via the App Builder or via API")]),e._v(" "),a("li",[e._v("Validate that the App Builder returns the same data in the other instance")])]),e._v(" "),a("p",[e._v("A partial example of that deployment:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('kind: "EntandoCompositeApp"\napiVersion: "entando.org/v1"\nmetadata:\n  name: "quickstart-apps"\n  namespace: test\nentandoStatus:\n  serverStatuses: {}\n  entandoDeploymentPhase: "requested"\nspec:\n  components:\n    - kind: "EntandoApp"\n      metadata:\n        annotations: {}\n        labels: {}\n        name: "quickstart1"\n      spec:\n        dbms: none\n        replicas: 1\n        standardServerImage: wildfly\n        ingressPath: /entando-de-app\n        ingressHostName: quickstart1.test.dynu.net\n        environmentVariables:\n          - name: PORTDB_URL\n            value: jdbc:postgresql://quickstart-postgresql-db-service.test.svc.cluster.local:5432/quickstart_postgresql_db\n          - name: PORTDB_USERNAME\n            valueFrom:\n              secretKeyRef:\n                key: username\n                name: quickstart1-portdb-secret\n                optional: false\n          - name: PORTDB_PASSWORD\n            valueFrom:\n              secretKeyRef:\n                key: password\n                name: quickstart1-portdb-secret\n                optional: false\n          - name: PORTDB_CONNECTION_CHECKER\n            value: org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLValidConnectionChecker\n          - name: PORTDB_EXCEPTION_SORTER\n            value: org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLExceptionSorter\n          - name: SERVDB_URL\n            value: jdbc:postgresql://quickstart-postgresql-db-service.test.svc.cluster.local:5432/quickstart_postgresql_db\n          - name: SERVDB_USERNAME\n            valueFrom:\n              secretKeyRef:\n                key: username\n                name: quickstart1-servdb-secret\n                optional: false\n          - name: SERVDB_PASSWORD\n            valueFrom:\n              secretKeyRef:\n                key: password\n                name: quickstart1-servdb-secret\n                optional: false\n          - name: SERVDB_CONNECTION_CHECKER\n            value: org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLValidConnectionChecker\n          - name: SERVDB_EXCEPTION_SORTER\n            value: org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLExceptionSorter\n          - name: JGROUPS_CLUSTER_PASSWORD\n            value: xxxxxxxx\n          - name: OPENSHIFT_KUBE_PING_LABELS\n            value: EntandoResourceKind=EntandoApp\n          - name: KUBERNETES_LABELS\n            value: EntandoResourceKind=EntandoApp\n          - name: POD_IP\n            valueFrom:\n              fieldRef:\n                fieldPath: status.podIP\n    - kind: "EntandoApp"\n      metadata:\n        annotations: {}\n        labels: {}\n        name: "quickstart2"\n      spec:\n        dbms: none\n        replicas: 1\n        standardServerImage: wildfly\n        ingressPath: /entando-de-app\n        ingressHostName: my.host.name\n        environmentVariables:\n          - name: SPRING_PROFILES_ACTIVE\n            value: "default,swagger"\n          - name: PORTDB_URL\n            value: jdbc:postgresql://quickstart-postgresql-db-service.test.svc.cluster.local:5432/quickstart_postgresql_db\n          - name: PORTDB_USERNAME\n            valueFrom:\n              secretKeyRef:\n                key: username\n                name: quickstart1-portdb-secret\n                optional: false\n          - name: PORTDB_PASSWORD\n            valueFrom:\n              secretKeyRef:\n                key: password\n                name: quickstart1-portdb-secret\n                optional: false\n          - name: PORTDB_CONNECTION_CHECKER\n            value: org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLValidConnectionChecker\n          - name: PORTDB_EXCEPTION_SORTER\n            value: org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLExceptionSorter\n          - name: SERVDB_URL\n            value: jdbc:postgresql://quickstart-postgresql-db-service.test.svc.cluster.local:5432/quickstart_postgresql_db\n          - name: SERVDB_USERNAME\n            valueFrom:\n              secretKeyRef:\n                key: username\n                name: quickstart1-servdb-secret\n                optional: false\n          - name: SERVDB_PASSWORD\n            valueFrom:\n              secretKeyRef:\n                key: password\n                name: quickstart1-servdb-secret\n                optional: false\n          - name: SERVDB_CONNECTION_CHECKER\n            value: org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLValidConnectionChecker\n          - name: SERVDB_EXCEPTION_SORTER\n            value: org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLExceptionSorter\n          - name: JGROUPS_CLUSTER_PASSWORD\n            value: xxxxxxxx\n          - name: OPENSHIFT_KUBE_PING_LABELS\n            value: EntandoResourceKind=EntandoApp\n          - name: POD_IP\n            valueFrom:\n              fieldRef:\n                fieldPath: status.podIP\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);