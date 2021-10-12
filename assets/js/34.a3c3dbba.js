(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{403:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"libsvm学习笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#libsvm学习笔记"}},[t._v("#")]),t._v(" libsvm学习笔记")]),t._v(" "),a("h2",{attrs:{id:"_1-libsvm安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-libsvm安装"}},[t._v("#")]),t._v(" 1. libsvm安装")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("下载安装包，根据自己的系统和Python版本选择"),a("a",{attrs:{href:"https://www.lfd.uci.edu/~gohlke/pythonlibs/#libsvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载链接"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("安装包")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" 安装包名\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("测试")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" svmutil "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" svm "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\ny"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nprob "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" svm_problem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nparam "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" svm_parameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-t 0 -c 4 -b 1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" svm_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" param"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nyt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nxt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\np_label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p_acc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p_val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" svm_predict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" xt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p_label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("能正常运行不报错就是安装成功")])])]),t._v(" "),a("h2",{attrs:{id:"_2-libsvm训练结果参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-libsvm训练结果参数"}},[t._v("#")]),t._v(" 2. libsvm训练结果参数")]),t._v(" "),a("ul",[a("li",[t._v("#iter 迭代次数")]),t._v(" "),a("li",[t._v("nu 核函数类型的参数")]),t._v(" "),a("li",[t._v("obj SVM文件转换为的二次规划求解得到的最小值")]),t._v(" "),a("li",[t._v("rho 判决函数的偏置项b")]),t._v(" "),a("li",[t._v("nsv 标准支持向量个数(0<a[i]<c)")]),t._v(" "),a("li",[t._v("nbsv 边界上的支持向量个数(a[i]=c)")]),t._v(" "),a("li",[t._v("total nsv 支持向量总个数")]),t._v(" "),a("li",[t._v("accuracy 预测正确率")])]),t._v(" "),a("h2",{attrs:{id:"_3-libsvm模型参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-libsvm模型参数"}},[t._v("#")]),t._v(" 3. libsvm模型参数")]),t._v(" "),a("ul",[a("li",[t._v("svm_type svm模式")]),t._v(" "),a("li",[t._v("kernel_type 核函数")]),t._v(" "),a("li",[t._v("gamma RBF核函数的参数")]),t._v(" "),a("li",[t._v("nr_class 类别数")]),t._v(" "),a("li",[t._v("total_sv 支持向量总个数")]),t._v(" "),a("li",[t._v("rho 判决函数的偏置项b")]),t._v(" "),a("li",[t._v("label 原始文件中的类别标识")]),t._v(" "),a("li",[t._v("nr_sv 每个类的数据个数")])]),t._v(" "),a("h2",{attrs:{id:"_4-参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考资料"}},[t._v("#")]),t._v(" 4. 参考资料")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/he99774/article/details/80388612",target:"_blank",rel:"noopener noreferrer"}},[t._v("libsvm for python 安装"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);