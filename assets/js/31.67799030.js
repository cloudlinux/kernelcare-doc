(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{395:function(e,t,a){"use strict";a.r(t);var r=a(32),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installation-of-kernelcare"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-of-kernelcare","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation of KernelCare")]),e._v(" "),a("p",[e._v("KernelCare is compatible with 64-bit versions of CloudLinuxOS/CentOS/RHEL 6,7 and 8, Oracle Linux 6 and 7, Amazon Linux 1 and 2, Virtuozzo/PCS/OpenVZ 2.6.32, Debian 8,9 and 10, Proxmox VE 5 and 6, Virt-SIG/Xen4CentOS 6 and 7, Ubuntu 14.04, 15.04 and 16.04 kernels. The list of compatible kernels can be found on the following link: "),a("a",{attrs:{href:"https://patches.kernelcare.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://patches.kernelcare.com/"),a("OutboundLink")],1),e._v(" .")]),e._v(" "),a("p",[e._v("To install KernelCare run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -s -L https://kernelcare.com/installer | bash\n")])])]),a("p",[e._v("or:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wget -qq -O - https://kernelcare.com/installer | bash\n")])])]),a("p",[e._v("If you are using IP-based license, nothing else required to be done.")]),e._v(" "),a("p",[e._v("If you are using key-based license, run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ /usr/bin/kcarectl --register KEY\n")])])]),a("p",[a("code",[e._v("KEY")]),e._v(" is the registration key code string provided when you sign up for purchase or trial of the product.")]),e._v(" "),a("p",[e._v("If you are experiencing "),a("strong",[a("em",[e._v("Key limit reached")])]),e._v(" error after the end of the trial period you should first unregister the server by running:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kcarectl --unregister\n")])])]),a("p",[e._v("To check if patches applied run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ /usr/bin/kcarectl --info\n")])])]),a("p",[e._v("The software will automatically check for new patches every 4 hours.")]),e._v(" "),a("p",[e._v("If you would like to run update manually:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ /usr/bin/kcarectl --update\n")])])]),a("p",[e._v("To check current kernel compatibility with KernelCare, use the following "),a("a",{attrs:{href:"https://raw.githubusercontent.com/iseletsk/kernelchecker/master/py/kc-compat.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("script"),a("OutboundLink")],1),e._v(" by running:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -s -L https://kernelcare.com/checker | python\n")])])]),a("p",[e._v("or:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wget -qq -O - https://kernelcare.com/checker | python\n")])])]),a("p",[e._v("More information can be found on the link: "),a("a",{attrs:{href:"https://www.kernelcare.com/faq/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.kernelcare.com/faq/"),a("OutboundLink")],1)]),e._v(" "),a("h4",{attrs:{id:"update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update","aria-hidden":"true"}},[e._v("#")]),e._v(" Update")]),e._v(" "),a("p",[e._v("To update kernelcare agent package to the latest version use:")]),e._v(" "),a("ul",[a("li",[e._v("For rpm-based distributives (CentOS, RedHat, etc):")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yum install -y kernelcare\n")])])]),a("ul",[a("li",[e._v("For apt-based distributives (Debian, Ubuntu, etc):")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apt-get install kernelcare\n")])])]),a("h2",{attrs:{id:"switching-from-ksplice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switching-from-ksplice","aria-hidden":"true"}},[e._v("#")]),e._v(" Switching from Ksplice")]),e._v(" "),a("p",[e._v("To switch from Ksplice to KernelCare,  use the following script, which uninstalls Ksplice and installs KernelCare itself instead.")]),e._v(" "),a("p",[e._v("It will automatically detect and abort if the system is not 64-bit (as KernelCare doesn't support that).")]),e._v(" "),a("p",[e._v("It will also detects when Ksplice module cannot be uninstalled, and retries multiple times.")]),e._v(" "),a("p",[e._v("Download the script here: "),a("a",{attrs:{href:"https://patches.kernelcare.com/ksplice2kcare",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://patches.kernelcare.com/ksplice2kcare"),a("OutboundLink")],1),e._v(" .")]),e._v(" "),a("p",[e._v("Run the command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ bash ksplice2kcare $KERNELCARE_KEY$\n")])])]),a("p",[e._v("The key can be created/retrieved in KernelCare Keys section of CLN.")]),e._v(" "),a("p",[e._v("If you want to use IP based licenses, run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ bash ksplice2kcare IP\n")])])]),a("p",[e._v("You have to add IP license for that server, and it is just two letters: IP, not the actual IP.")]),e._v(" "),a("p",[e._v("By default the script will attempt 3 times to uninstall ksplice, waiting 60 seconds in between. You can run it using "),a("code",[e._v("nohup")]),e._v(" if you don't want to wait.")]),e._v(" "),a("p",[e._v("You can change that by editing the script and changing "),a("code",[e._v("RETRY")]),e._v(" and "),a("code",[e._v("SLEEP")]),e._v(" values.")]),e._v(" "),a("p",[e._v("The script will exit with exit code "),a("code",[e._v("0")]),e._v(" and message "),a("em",[e._v("Done")]),e._v(" on success. Otherwise, it will produce exit code "),a("code",[e._v("-1")]),e._v(".")]),e._v(" "),a("p",[e._v("Complete log file can be found at "),a("code",[e._v("/var/log/ksplice2kcare.log")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"canonical-livepatch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canonical-livepatch","aria-hidden":"true"}},[e._v("#")]),e._v(" Canonical Livepatch")]),e._v(" "),a("p",[e._v("KernelCare is not compatible with Canonical Livepatch and should not be used on the same system.")])])},[],!1,null,null,null);t.default=s.exports}}]);