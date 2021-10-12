(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{389:function(_,a,t){"use strict";t.r(a);var r=t(42),s=Object(r.a)({},(function(){var _=this,a=_.$createElement,t=_._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"task01-概述西瓜书-第1、2章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#task01-概述西瓜书-第1、2章"}},[_._v("#")]),_._v(" Task01 概述西瓜书 第1、2章")]),_._v(" "),t("h2",{attrs:{id:"_1-术语梳理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-术语梳理"}},[_._v("#")]),_._v(" 1 术语梳理")]),_._v(" "),t("ul",[t("li",[_._v("数据集：记录的集合")]),_._v(" "),t("li",[_._v("样本：其中每条记录是关于一个事件或对象的描述")]),_._v(" "),t("li",[_._v("属性/特征：反映事件或对象在某方面的表现或性质的事项")]),_._v(" "),t("li",[_._v("独立同分布：假设样本空间中，全体样本服从一个未知“分布”，获得的每个样本都是独立地从这个分布上采样获得")])]),_._v(" "),t("h2",{attrs:{id:"_2-经验误差和过拟合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-经验误差和过拟合"}},[_._v("#")]),_._v(" 2 经验误差和过拟合")]),_._v(" "),t("ul",[t("li",[_._v("误差：学习器的实际预测输出与样本的真实输出之间的差异")]),_._v(" "),t("li",[_._v("训练误差/经验误差：学习器在训练集上的误差")]),_._v(" "),t("li",[_._v("泛化误差：学习器在新样本上的误差")])]),_._v(" "),t("h2",{attrs:{id:"_3-评估方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-评估方法"}},[_._v("#")]),_._v(" 3 评估方法")]),_._v(" "),t("h3",{attrs:{id:"_3-1交叉验证法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1交叉验证法"}},[_._v("#")]),_._v(" 3.1交叉验证法")]),_._v(" "),t("ul",[t("li",[_._v("概念：将数据集D划分为$k$个大小不同的互斥子集，满足$D={D_1}\\cup{D_2}\\cup{...}{D_k},{D_i}\\cap{D_j}\\eqcirc\\varnothing(i\\neq{j})$\n同样地尽可能保持数据分布的一致性，即采用分层抽样的方法获得这些子集。交叉验证法的思想是：每次用$k-1$子集的并集为训练集，余下的子集作为测试集，这样就有$K$中划分情况，最终返回$k$次测试的结果。")]),_._v(" "),t("li",[_._v("$k$常用的取值为10.")])]),_._v(" "),t("h2",{attrs:{id:"_4-性能度量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-性能度量"}},[_._v("#")]),_._v(" 4 性能度量")]),_._v(" "),t("h3",{attrs:{id:"_4-1-错误率和精度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-错误率和精度"}},[_._v("#")]),_._v(" 4.1 错误率和精度")]),_._v(" "),t("ul",[t("li",[_._v("错误率的的定义为：\n$$E(f,D)=\\frac{1}{m}\\sum_{i=0}^mI(f(x_i)\\neq{y_i})$$")]),_._v(" "),t("li",[_._v("精度的定义则为：\n$$acc(f,D)=\\frac{1}{m}\\sum_{i=0}^mI(f(x_i)\\eqcirc{y_i})=1-E(f,D)$$")])]),_._v(" "),t("h3",{attrs:{id:"_4-2-查准率和查全率-f1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-查准率和查全率-f1"}},[_._v("#")]),_._v(" 4.2 查准率和查全率 F1")]),_._v(" "),t("ul",[t("li",[_._v("查准率P：\n$$P=\\frac{TP}{TP+FP}$$")]),_._v(" "),t("li",[_._v("查全率R：\n$$R=\\frac{TP}{TP+FN}$$")]),_._v(" "),t("li",[_._v("“P-R曲线”：描述查准/查全率变化的曲线。根据学习器的预测结果（一般为一个实值或概率）对测试样本进行排序，将最可能是“正例”的样本排在前面，最不可能是“正例”的排在后面，按此顺序逐个把样本作为“正例”进行预测，每次计算出当前的P值和R值")]),_._v(" "),t("li",[_._v("F1值：计算查准率与查全率的调和平均值")])])])}),[],!1,null,null,null);a.default=s.exports}}]);