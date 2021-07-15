(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{365:function(e,a,t){"use strict";t.r(a);var r=t(32),s=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"スキャナーインターフェース"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#スキャナーインターフェース","aria-hidden":"true"}},[e._v("#")]),e._v(" スキャナーインターフェース")]),e._v(" "),t("h2",{attrs:{id:"本件について"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本件について","aria-hidden":"true"}},[e._v("#")]),e._v(" 本件について")]),e._v(" "),t("p",[e._v("よく使用されるセキュリティスキャナーは、KernelCareによってパッチが適用されている場合でもいくつかのCVEを表示します。 CVE表示に関するこれらのすべての決定は、以下に基づいていることがわかります。")]),e._v(" "),t("ul",[t("li",[e._v("現在インストールされている（またはされていない）カーネルパッケージ")]),e._v(" "),t("li",[e._v("uname情報")])]),e._v(" "),t("h2",{attrs:{id:"どのような仕組か"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#どのような仕組か","aria-hidden":"true"}},[e._v("#")]),e._v(" どのような仕組か")]),e._v(" "),t("p",[e._v("それらを正しくさせるために、その情報と "),t("code",[e._v("uname -r")]),e._v(" 出力に依存するDEBおよびRPMディストリビューションの共通部分を操作することができます。")]),e._v(" "),t("p",[e._v("RPMディストリビューションのスキャナーは "),t("code",[e._v("rpm -q")]),e._v(" 出力に依存しているため、"),t("code",[e._v("LD_PRELOAD")]),e._v(" を介して、そこの一部の関数を上書きし、必要なバージョンをスクリプトに出力させることができます。")]),e._v(" "),t("p",[e._v("それに対処するために、"),t("code",[e._v("showQueryPackage")]),e._v(" をリロードして、その場でバージョン情報を修正します。 下記のようにrpmクエリの結果に表示される情報が変更されます。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[centos@ip-172-31-6-166 ~]$ rpm -q kernel-headers\nkernel-headers-3.10.0-693.17.1.el7.x86_64\n[centos@ip-172-31-6-166 ~]$ LD_PRELOAD=/usr/libexec/kcare/kpatch_package.so rpm -q\nkernel-headers-3.10.0-957.21.3.el7.x86_64\n")])])]),t("p",[e._v("リロードされた関数は "),t("code",[e._v("kcarectl --uname")]),e._v(" に依存し、実際のカーネルバージョンを「有効なバージョン」に置き換えます。 この動作は1人のユーザに対してのみ有効であり、他のユーザに干渉しません。 そのユーザを使用して、SSH経由で資格情報スキャンを実行する必要があります。")]),e._v(" "),t("h2",{attrs:{id:"インストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#インストール","aria-hidden":"true"}},[e._v("#")]),e._v(" インストール")]),e._v(" "),t("p",[e._v("ターゲットシステムで行う必要があるのは、提供されたパッケージでKernelCareエージェントをインストール/更新することだけです。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("KCARE_SCANNER_USER=username yum -y localinstall ./kernelcare-package.rpm\n")])])]),t("p",[e._v("または、既存のパッケージを更新します。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("KCARE_SCANNER_USER=username yum update kernelcare\n")])])]),t("p",[e._v("またはインストール：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("curl -s -L https://kernelcare.com/installer | KCARE_SCANNER_USER=username bash\n")])])]),t("p",[t("code",[e._v("username")]),e._v(" は、サーバでスキャナーを実行するために使用されるユーザです。 KernelCareパッチ（"),t("code",[e._v("kcarectl --update")]),e._v(") を適用すると、パッチが提供されているカーネルに応じたrpmクエリの結果が表示されます。")]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("注記")]),t("p",[e._v("結果を確認するには、上記で定義した "),t("code",[e._v("KCARE_SCANNER_USER")]),e._v(" を使用してサーバに再ログインする必要があります。")])]),t("h2",{attrs:{id:"どのように使うか"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#どのように使うか","aria-hidden":"true"}},[e._v("#")]),e._v(" どのように使うか")]),e._v(" "),t("p",[e._v("かなり簡単です。 パッケージをインストールしてパッチセットを適用した後の新しいスキャン結果には、KernelCareによって処理されたカーネルのCVEは、表示されません。")]),e._v(" "),t("p",[e._v("たとえば、古いカーネルに対するNessusは、非常に多くのCVEが検出されています。")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/scanner-manipulation-before.png",alt:""}})]),e._v(" "),t("p",[e._v("パッチが適用された後、カーネル関連のCVEはありません。")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/scanner-manipulation-after.png",alt:""}})])])},[],!1,null,null,null);a.default=s.exports}}]);