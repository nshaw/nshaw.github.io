(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{906:function(e,t,a){"use strict";a.r(t);var o=a(31),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"backing-up-and-restoring-an-entando-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backing-up-and-restoring-an-entando-application"}},[e._v("#")]),e._v(" Backing Up and Restoring an Entando Application")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Java 8")])]),e._v(" "),a("li",[a("p",[e._v("Docker installed locally\n("),a("a",{attrs:{href:"https://docs.docker.com/docker-for-windows/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/docker-for-windows/install/"),a("OutboundLink")],1),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("maven")])]),e._v(" "),a("li",[a("p",[e._v("Access to a docker repository (docker.io or other)")])])]),e._v(" "),a("p",[e._v("This tutorial will show you how you can use an Entando application that\nyou have built as a launching point for creating new applications.")]),e._v(" "),a("h2",{attrs:{id:"create-a-backup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-backup"}},[e._v("#")]),e._v(" Create a Backup")]),e._v(" "),a("p",[e._v("This step requires using a running Entando environment to take an application backup.\nThe output of this step is a local directory with the files (database and static assets) you can use to restore the application later.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Log into "),a("em",[e._v("App Builder")])])]),e._v(" "),a("li",[a("p",[e._v("Go to "),a("em",[e._v("Configuration -> Database")])])]),e._v(" "),a("li",[a("p",[e._v("Click on "),a("em",[e._v("Create A Backup")]),e._v(" and wait for the process to complete. All of the static assets and database backups are persisted to a PVC in /entando-data on the server pod.")])]),e._v(" "),a("li",[a("p",[e._v("Transfer the files from the server-container. The details will vary depending on your kubernetes environment.")])])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("kubectl")]),e._v(" "),a("th",[e._v("OpenShift")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("kubectl cp <pod>:<path> <local-path>")])]),e._v(" "),a("td",[a("code",[e._v("oc rsync <pod>:<path> <localPath>")])])]),e._v(" "),a("tr",[a("td",[e._v("e.g."),a("code",[e._v("kubectl cp quickstart-server-deployment-7b8c699599-f84zq:/entando-data backup")])]),e._v(" "),a("td",[e._v("e.g."),a("code",[e._v("oc rsync app-entando-server-deployment-67fd5b9954-s72mb:/entando-data")])])])])]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("You should see 3 directories - "),a("em",[e._v("databases")]),e._v(", "),a("em",[e._v("protected")]),e._v(", and "),a("em",[e._v("resources")]),e._v(".\nThe "),a("em",[e._v("protected")]),e._v(" directory contains the timestamped backup you triggered from the "),a("em",[e._v("App Builder")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"restore-a-backup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restore-a-backup"}},[e._v("#")]),e._v(" Restore a Backup")]),e._v(" "),a("p",[e._v("In this lab you’ll take a previously built demo application, install the\nbackup files, build a Docker image from the updated app, and deploy it as a new application.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Clone the application at:\n"),a("a",{attrs:{href:"https://github.com/entando-k8s/entando-de-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-de-app"),a("OutboundLink")],1),e._v(" using")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("git clone https://github.com/entando-k8s/entando-de-app\n")])])])]),e._v(" "),a("li",[a("p",[e._v("On a command line, cd into the "),a("em",[e._v("entando-de-app")]),e._v(" you just cloned:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cd entando-de-app\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Take the backup file and unzip it in a location of your choice.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("This zip contains all of the assets, content, and metadata\nneeded to launch an Entando application. We are going to package\nthe static assets and database backup into a Docker image.")])]),e._v(" "),a("li",[a("p",[e._v("Entando will automatically instantiate and populate the app from\nthe most recent backup")])])])]),e._v(" "),a("li",[a("p",[e._v("Move the resources and protected folders from your Entando backup into your\n"),a("code",[e._v("entando-de-app")]),e._v(" application under "),a("code",[e._v("src/main/webapp")]),e._v(" replacing any content that is\nalready there.")])]),e._v(" "),a("li",[a("p",[e._v("Build a docker image from the app")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("mvn clean package -Pwildfly -Pderby docker:build\n")])])]),a("ul",[a("li",[e._v('Note that the "derby" option here is only for the initialization\nphase of the DB when deploying. It isn’t the final database\nchoice')])])]),e._v(" "),a("li",[a("p",[e._v("View the images installed on your local docker instance")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("docker images\n")])])]),a("p",[e._v("Look for the following:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("entando/entando-de-app:latest\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Create a repository on your docker account to house your new\napplication")])]),e._v(" "),a("li",[a("p",[e._v("Re-tag the image you just built with your repo")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" docker tag entando/entando-de-app:latest <YOUR-USER>/<YOUR-REPO-NAME>:latest\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Push the Image to your Repository")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("docker push <YOUR-USER>/<YOUR-REPO-NAME>:latest\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Now we need to generate a new application for deployment to\nKubernetes using the helm chart")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("If you have an output from helm from before you can re-use it\nand just apply the changes to the config map. In this case skip to step 12.")])]),e._v(" "),a("li",[a("p",[e._v("Or you can re-run helm and change the output")])])])]),e._v(" "),a("li",[a("p",[e._v("Re-run the helm command for your environment")])]),e._v(" "),a("li",[a("p",[e._v("Open the output yaml file from the helm command in the text editor\nof your choice")]),e._v(" "),a("ul",[a("li",[e._v("For example: "),a("code",[e._v("vi training-alpha.yaml")])])])]),e._v(" "),a("li",[a("p",[e._v("In that file look for the "),a("code",[e._v("ConfigMap")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The config map defines all of the images that are available as\npart of the deployment. They aren’t all used concurrently.")])]),e._v(" "),a("li",[a("p",[e._v("You can also view this config map in "),a("code",[e._v("kubernetes/OpenShift")])])])])]),e._v(" "),a("li",[a("p",[e._v("Now you need to update the deployment to use your customized Wildfly\nimage. Find "),a("code",[e._v("entando-de-app-wildfly")]),e._v(" in the config map")]),e._v(" "),a("ul",[a("li",[e._v("Note that we are changing the de-app but you could create a\ncustom version of any of the included images")])])]),e._v(" "),a("li",[a("p",[e._v("Change the version to match the version you used for your image")])]),e._v(" "),a("li",[a("p",[e._v('Change the "organization" to the name of your main image repository\norganization and if you aren’t using docker.io (DockerHub) then\nchange the registry as well.')])]),e._v(" "),a("li",[a("p",[e._v("Save the file")])]),e._v(" "),a("li",[a("p",[e._v("Follow the deployment steps you went through when you originally\ndeployed your Entando application to your Kubernetes instance")])]),e._v(" "),a("li",[a("p",[e._v("Once deployed go to the "),a("em",[e._v("App Builder")]),e._v(" in your app")])]),e._v(" "),a("li",[a("p",[e._v("Click "),a("em",[e._v("Go To Homepage")]),e._v(" and you should see your restored application.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);