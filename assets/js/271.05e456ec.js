(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{944:function(e,t,a){"use strict";a.r(t);var n=a(31),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"troubleshooting-ecr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-ecr"}},[e._v("#")]),e._v(" Troubleshooting ECR")]),e._v(" "),a("h2",{attrs:{id:"a-bundle-installation-removal-has-failed-how-to-access-the-logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-bundle-installation-removal-has-failed-how-to-access-the-logs"}},[e._v("#")]),e._v(" A bundle installation/removal has failed, how to access the logs?")]),e._v(" "),a("h3",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Currently the Entando component manager logs are available in kubernetes via dashboard (openshift) or cli tools (k9s or kubectl).\nIf in you Entando cluster you have more than one Entando App custom resource, you will need to know what's the correct component-manager to check using the corresponding Entando App name and namespace where the app has been deployed.")]),e._v(" "),a("h3",{attrs:{id:"solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[e._v("#")]),e._v(" Solution")]),e._v(" "),a("p",[e._v("Using "),a("code",[e._v("kubectl")]),e._v(" and assuming for simplicity that you have only one Entando App named "),a("code",[e._v("quickstart")]),e._v(" and your Entando cluster is only composed of one namespace, also named "),a("code",[e._v("quickstart")]),e._v(",\nyou can get the component-manager logs using the command")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl logs -f deployment/quickstart-server-deployment --namespace quickstart -c de-container\n")])])]),a("p",[a("strong",[e._v("Note")]),e._v(": the "),a("code",[e._v("-f")]),e._v(" flag is optional and could be used to follow the logs for debugging purposes")]),e._v(" "),a("h2",{attrs:{id:"my-bundle-has-an-issue-how-should-i-publish-a-new-version-of-the-bundle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#my-bundle-has-an-issue-how-should-i-publish-a-new-version-of-the-bundle"}},[e._v("#")]),e._v(" My bundle has an issue, how should I publish a new version of the bundle?")]),e._v(" "),a("h3",{attrs:{id:"overview-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview-2"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Sometimes a bundle could have some issues: typos in the "),a("code",[e._v("descriptor.yaml")]),e._v(" file, wrong references of components or to not available docker images are just a few of the possible errors.")]),e._v(" "),a("h3",{attrs:{id:"solution-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution-2"}},[e._v("#")]),e._v(" Solution")]),e._v(" "),a("ol",[a("li",[e._v("If the bundle is shared using a git repository, you can make the required changes to your project and publish the new version to git and generate a new tag for it.")]),e._v(" "),a("li",[e._v("Once the new tag is published, update the bundle costum-resource avaialble in you Entando Cluster by adding the new tag to the "),a("code",[e._v("tags")]),e._v(" objects  and replacing the latest "),a("code",[e._v("dist-tags")]),e._v(" to point to this new version.")]),e._v(" "),a("li",[e._v("Proceed with the new installation")])]),e._v(" "),a("p",[e._v("If you're actively working on your bundle and you simply want to verify things are working correctly, instead of generating a new tag for each release of the bundle you can try to keep overriding a specific tag using the git command "),a("code",[e._v("git tag -f")]),e._v(". We suggest you to follow this practice only during development and not in production.")]),e._v(" "),a("h2",{attrs:{id:"bundle-installation-fails-because-a-file-has-not-been-found-in-the-bundle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bundle-installation-fails-because-a-file-has-not-been-found-in-the-bundle"}},[e._v("#")]),e._v(" Bundle installation fails because a file has not been found in the bundle")]),e._v(" "),a("h3",{attrs:{id:"overview-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview-3"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("When a component that is referenced in the "),a("code",[e._v("descriptor.yaml")]),e._v(" is missing in the bundle or not correctly referenced, the bundle installation fails and in the logs is reported which file has not been found.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ERROR - File with name {filename} not found in the bundle\n")])])]),a("h3",{attrs:{id:"solution-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution-3"}},[e._v("#")]),e._v(" Solution")]),e._v(" "),a("p",[e._v("When such a problem happens, verify that the component referenced in the descriptor file are actually present in the bundle and that the reference is properly typed.")]),e._v(" "),a("p",[e._v("Publish a new version of your bundle as described in the\n"),a("a",{attrs:{href:"#my-bundle-has-an-issue-how-should-i-publish-a-new-version-of-the-bundle"}},[e._v('"My bundle has an issue"')]),e._v(" section")]),e._v(" "),a("h2",{attrs:{id:"bundle-installation-failed-due-to-plugin-s-images-not-reachable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bundle-installation-failed-due-to-plugin-s-images-not-reachable"}},[e._v("#")]),e._v(" Bundle installation failed due to plugin(s) images not reachable")]),e._v(" "),a("h3",{attrs:{id:"overview-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview-4"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Plugin included in a bundle are referenced using their docker image. Sometime the image is not available - maybe has not yet be published or is in a private docker registry - and plugin installation can't happen and the entire bundle installation process can't finish successfully")]),e._v(" "),a("h3",{attrs:{id:"solution-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution-4"}},[e._v("#")]),e._v(" Solution")]),e._v(" "),a("p",[e._v("Verify that the docker image you are referencing is correct and publicly available.")]),e._v(" "),a("p",[a("a",{attrs:{href:"#my-bundle-has-an-issue-how-should-i-publish-a-new-version-of-the-bundle"}},[e._v('"My bundle has an issue"')]),e._v(" section")]),e._v(" "),a("h2",{attrs:{id:"i-can-t-uninstall-a-bundle-because-some-components-are-in-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-can-t-uninstall-a-bundle-because-some-components-are-in-use"}},[e._v("#")]),e._v(" I can't uninstall a bundle because some components are in use")]),e._v(" "),a("h3",{attrs:{id:"overview-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview-5"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("When removing an installed bundle, the Entando component manager verfies that the bundle components\nare not in use by any other component. Removing such components would cause an error during removal\nas in certain case the deleting a component in use is not permitted.")]),e._v(" "),a("h3",{attrs:{id:"solution-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution-5"}},[e._v("#")]),e._v(" Solution")]),e._v(" "),a("p",[e._v("In order to prevent such errors, the user is alerted and required to manually decouple the bundle\ncomponents before beign able to completely remove the bundle from the system.")])])}),[],!1,null,null,null);t.default=s.exports}}]);