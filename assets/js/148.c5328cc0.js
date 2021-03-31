(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{770:function(e,t,n){"use strict";n.r(t);var o=n(31),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"use-blueprint-generated-plugin-and-micro-frontends-without-a-bundle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-blueprint-generated-plugin-and-micro-frontends-without-a-bundle"}},[e._v("#")]),e._v(" Use Blueprint Generated Plugin and Micro Frontends Without a Bundle")]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("In this tutorial you will learn how to use the plugin and microfrontend generated using the Entando Blueprint in a running cluster without the need to include the components in a bundle.")]),e._v(" "),n("p",[n("strong",[e._v("If you haven't already generated a plugin and micro frontends with the Component Generator go here first "),n("RouterLink",{attrs:{to:"/next/tutorials/backend-developers/generate-microservices-and-micro-frontends.html"}},[e._v("Generate a Plugin")])],1)]),e._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("An Entando Plugin built with the Entando Component Generator and populated with micro frontends")])]),e._v(" "),n("li",[n("p",[e._v("Node and NPM are installed on your machine (use LTS version)")])]),e._v(" "),n("li",[n("p",[e._v("Docker is installed on your machine and you are able to upload images to docker-hub or an image repository of your choice")])]),e._v(" "),n("li",[n("p",[e._v("An installed instance of the Entando platform running Kubernetes. See "),n("RouterLink",{attrs:{to:"/next/docs/getting-started/"}},[e._v("Getting Started")])],1)])]),e._v(" "),n("h2",{attrs:{id:"steps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),n("h2",{attrs:{id:"_1-generate-a-docker-image-for-your-microservice"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-generate-a-docker-image-for-your-microservice"}},[e._v("#")]),e._v(" 1. Generate a docker image for your microservice")]),e._v(" "),n("p",[e._v("JHipster uses the JIB Maven plugin to generate a docker image for your\nmicroservice.")]),e._v(" "),n("p",[e._v("The name of the output image generated with JIB will be composed by:")]),e._v(" "),n("ul",[n("li",[e._v("The organization you chose during the setup wizard (by default that's set to "),n("code",[e._v("entando")]),e._v(")")]),e._v(" "),n("li",[e._v("The name of the application")]),e._v(" "),n("li",[e._v("Version "),n("code",[e._v("0.0.1-SNAPSHOT")])])]),e._v(" "),n("p",[e._v("You can build the docker image with this command")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("./mvnw -Pprod clean package jib:dockerBuild\n")])])]),n("p",[e._v("If for example during setup wizard you chose a custom organization "),n("code",[e._v("myorg")]),e._v(" and the set the application name to "),n("code",[e._v("jhipster")]),e._v(" the resulting docker image is going to be "),n("code",[e._v("myorg/jhipster:0.0.1-SNAPSHOT")])]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Note")])]),e._v(" "),n("p",[e._v("The output image name can be changed in the "),n("code",[e._v("pom.xml")]),e._v(" file by configuring\nthe "),n("code",[e._v("plugins.plugin.jib-maven-plugin.configuration.to.image")]),e._v(" tag")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" <plugin>\n   <groupId>com.google.cloud.tools</groupId>\n   <artifactId>jib-maven-plugin</artifactId>\n   <configuration>\n     \x3c!-- ... --\x3e\n     <to>\n       <image>\x3c!-- use a custom value here --\x3e</image>\n     </to>\n     \x3c!-- ... --\x3e\n   </configuration>\n </plugin>\n")])])]),n("blockquote",[n("p",[n("strong",[e._v("Note")])]),e._v(" "),n("p",[e._v("Output image name can also be set by customizing the "),n("code",[e._v("./mvnw")]),e._v(" command using the "),n("code",[e._v("-Djib.to.image")]),e._v("\nparameter. For example, if you want to build an image with organization "),n("code",[e._v("myneworg")]),e._v(", name "),n("code",[e._v("myapp")]),e._v(" and version "),n("code",[e._v("latest")]),e._v(" you can do")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" ./mvnw -Pprod clean package jib:dockerBuild -Djib.to.image=myneworg/myapp:latest\n")])])]),n("blockquote",[n("p",[n("strong",[e._v("Warning")])]),e._v(" "),n("p",[e._v("If you change the target image of the docker build, remember to update\nthe plugin metadata in the bundle accordingly.")])]),e._v(" "),n("h2",{attrs:{id:"_2-publish-the-docker-image-to-docker-registry-dockerhub-or-equivalent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-publish-the-docker-image-to-docker-registry-dockerhub-or-equivalent"}},[e._v("#")]),e._v(" 2. Publish the Docker image to Docker registry (DockerHub or equivalent)")]),e._v(" "),n("p",[e._v("Let’s now publish the docker image for the microservice to make it\navailable later during bundle installation in the cluster.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("docker push <name-of-the-image:tag>\n")])])]),n("h2",{attrs:{id:"_3-deploy-the-plugin-into-your-entando-cluster"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-deploy-the-plugin-into-your-entando-cluster"}},[e._v("#")]),e._v(" 3. Deploy the plugin into your Entando cluster")]),e._v(" "),n("p",[e._v("You can now deploy the plugin custom resource generated by the Entando Blueprint in the "),n("code",[e._v("bundle/plugins")]),e._v(" folder.")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Warning")])]),e._v(" "),n("p",[e._v("As stated in step 1, if you changed the target image of your docker build, the plugin custom resource\nin the "),n("code",[e._v("bundle/plugins")]),e._v(" folder needs to be updated to point to the correct image")])]),e._v(" "),n("p",[e._v("From the JHipster project directory:")]),e._v(" "),n("div",{staticClass:"language-$bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cd bundle/plugins\n\nkubectl create -f <plugin-file.yaml> -n entando\n")])])]),n("h2",{attrs:{id:"_4-wait-for-your-plugin-to-be-in-running-state-and-link-the-plugin-with-the-app-using-an-entandoapppluginlink-custom-resource"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-wait-for-your-plugin-to-be-in-running-state-and-link-the-plugin-with-the-app-using-an-entandoapppluginlink-custom-resource"}},[e._v("#")]),e._v(" 4. Wait for your plugin to be in "),n("code",[e._v("Running")]),e._v(" state and link the plugin with the app using an "),n("code",[e._v("EntandoAppPluginLink")]),e._v(" custom resource")]),e._v(" "),n("p",[e._v("Once the plugin server deployment is up and running, you can create an "),n("RouterLink",{attrs:{to:"/next/docs/concepts/custom-resources.html"}},[e._v("EntandoAppPluginLink custom resource")]),e._v("\nto make the plugin API available from the EntandoApp domain.")],1),e._v(" "),n("p",[e._v("Here an example of a EntandoAppPluginLink custom resource. Some assumptions with this custom resource:")]),e._v(" "),n("ul",[n("li",[e._v("The EntandoPlugin generated with the blueprint is "),n("code",[e._v("my-demo-plugin")])]),e._v(" "),n("li",[e._v("The EntandoApp exposing the "),n("code",[e._v("my-demo-plugin")]),e._v(" APIs is "),n("code",[e._v("quickstart")]),e._v(". This is the app name in an environment built using the Getting Started instructions.")]),e._v(" "),n("li",[e._v("Both are deployed on the "),n("code",[e._v("entando")]),e._v(" namespace.")]),e._v(" "),n("li",[e._v("The link itself is named "),n("code",[e._v("quickstart-to-my-demo-plugin-link")])]),e._v(" "),n("li",[e._v("The name of the link yaml is "),n("code",[e._v("my-link.yaml")])])]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Warning")])]),e._v(" "),n("p",[e._v("Remember to change the fields to match your setup.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("apiVersion: entando.org/v1\nkind: EntandoAppPluginLink\nmetadata:\n  name: quickstart-to-my-demo-plugin-link\n  namespace: entando\nspec:\n  entandoAppName: quickstart\n  entandoAppNamespace: entando\n  entandoPluginName: my-demo-plugin\n  entandoPluginNamespace: entando\n")])])]),n("p",[e._v("Now add this link to your environment")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("kubectl create -f my-link.yaml -n entando\n")])])]),n("p",[e._v("A new link deployer will start and will work behind the scenes to add your plugin "),n("code",[e._v("ingressPath")]),e._v(" (this is part of the\nplugin "),n("code",[e._v("spec")]),e._v(") to the EntandoApp ingress.")]),e._v(" "),n("h2",{attrs:{id:"_5-upload-the-micro-frontends-to-your-entando-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-upload-the-micro-frontends-to-your-entando-app"}},[e._v("#")]),e._v(" 5. Upload the micro frontends to your Entando App")]),e._v(" "),n("p",[e._v("Now that the plugin and the app are linked together, you can proceed to generate the Micro Frontend from the App Builder\nand upload the static resources like "),n("code",[e._v("js")]),e._v(" and "),n("code",[e._v("css")]),e._v(" files.")]),e._v(" "),n("ol",[n("li",[e._v("From AppBuilder go to "),n("code",[e._v("Configuration -> File Browser")]),e._v(" and create a new folder inside the "),n("code",[e._v("public")]),e._v(" folder and make the name of the folder the same as the name of the bundle (the value is in the "),n("code",[e._v("code")]),e._v(" field available in the "),n("code",[e._v("/bundle/descriptor.yaml")]),e._v(" file of the blueprint project) or using a custom name, e.g. "),n("code",[e._v("demo-widget")])])]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Warning")])]),e._v(" "),n("p",[e._v("If you choose to use a custom folder, remember to update the references in the customUI of the widget later")])]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Upload all the resources available in the "),n("code",[e._v("/bundle/resources")]),e._v(" folder\nof the blueprint project into the folder you created above in the App Builder file browser.")])]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Warning")])]),e._v(" "),n("p",[e._v("You can decide to recreate the folder structure to be the same as the one in "),n("code",[e._v("/bundle/resources")]),e._v(" or not, but you need to update the\nreferences in the customUI / configUI of the widget later if you choose a different folder structure.")])]),e._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[n("p",[e._v("Create the widget. In the App Builder go to "),n("code",[e._v("Components → Micro frontends & Widgets")]),e._v(".")])]),e._v(" "),n("li",[n("p",[e._v("Select "),n("code",[e._v("Add")])])]),e._v(" "),n("li",[n("p",[e._v("Set whatever title you want")])]),e._v(" "),n("li",[n("p",[e._v("For the customUI copy the one created in one of the widgets you generated from the blueprint.\nAs an example, the customUI for the "),n("code",[e._v("detailWidget")]),e._v(" of the conference entity is available in\n"),n("code",[e._v("/bundle/ui/widgets/conference/detailsWidget/conference-details-widget.ftl")])])])]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Warning")])]),e._v(" "),n("p",[e._v("Remember to update all the references in the customUI to use the custom folder structure you defined")])]),e._v(" "),n("ol",{attrs:{start:"7"}},[n("li",[e._v("Update the service url to match the location where you deployed the ingress for your microservice if you used a path different than the default. For example,")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('Update the service-url value with the relative path of your service if you\'re deploying a bundle\n\t\tEx. <car-table service-url="/newBp/api"  />\n\tOr use the full path if you\'re deploying the BE and FE individually\n\t\tEx. <car-table service-url="http://newbp-plugin-entando.192.168.64.7.nip.io/newBp/api"/>\n')])])]),n("blockquote",[n("p",[n("strong",[e._v("Note")])]),e._v(" "),n("p",[e._v("Your Entando application includes a keycloak_auth fragment that will inject the token\nand connection to Keycloak that your microfrontends need to invoke protected APIs. You can see this token at "),n("code",[e._v("Components → UX Fragments")]),e._v(" in the\nApp Builder and search for keycloak_auth.")])]),e._v(" "),n("ol",{attrs:{start:"8"}},[n("li",[e._v("If you're creating a new page from scratch or your page is missing the Keycloak fragment you can add it with this freemarker snippet")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<@wp.fragment code="keycloak_auth" escapeXml=false />\n')])])]),n("h2",{attrs:{id:"_6-use-the-microfrontend-and-microservice"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-use-the-microfrontend-and-microservice"}},[e._v("#")]),e._v(" 6. Use the microfrontend and microservice")]),e._v(" "),n("p",[e._v("You can now use your micro frontends and your microservice in your Entando App.")])])}),[],!1,null,null,null);t.default=a.exports}}]);