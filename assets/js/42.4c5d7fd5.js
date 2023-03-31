(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{511:function(_,v,t){"use strict";t.r(v);var a=t(19),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"_1-搜索引擎分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-搜索引擎分类"}},[_._v("#")]),_._v(" 1. 搜索引擎分类")]),_._v(" "),t("p",[_._v("当前的搜索引擎的分类主要分为：")]),_._v(" "),t("ol",[t("li",[t("code",[_._v("全网搜索")]),_._v("引擎。比如：“百度”、“谷歌”对互联网的各种数据进行搜索。")]),_._v(" "),t("li",[t("code",[_._v("垂直搜索")]),_._v("引擎。垂直搜索引擎的数据限定于垂直领域，垂直领域是针对某一个行业或者细分领域的，这些垂直领域是全网搜索引擎的子集。典型的垂直搜索有“电商搜索”。")]),_._v(" "),t("li",[t("code",[_._v("元搜索")]),_._v("引擎。用户在输入搜索词之后，根据其他多个搜索引擎合理组织出新的数据，从而返回组织后的结果，元搜索引擎没有自己的爬虫。")])]),_._v(" "),t("h2",{attrs:{id:"_2-搜索优化的目标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-搜索优化的目标"}},[_._v("#")]),_._v(" 2. 搜索优化的目标")]),_._v(" "),t("p",[_._v("关于搜索优化的目标，这里引用了电商系统中的使命：“多、快、好、省”：")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("多")]),_._v(" 搜出符合的商品更多")]),_._v(" "),t("li",[t("strong",[_._v("快")]),_._v(" 搜索接口的响应尽可能的快")]),_._v(" "),t("li",[t("strong",[_._v("好")]),_._v(" 搜出的商品符合用户的需求越靠前，让用户觉得好用")]),_._v(" "),t("li",[t("strong",[_._v("省")]),_._v(" 只搜出用户想要的商品")])]),_._v(" "),t("h2",{attrs:{id:"_3-搜索结果综合排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-搜索结果综合排序"}},[_._v("#")]),_._v(" 3. 搜索结果综合排序")]),_._v(" "),t("p",[_._v("搜索排序的依据：利用搜索词、文档质量、搜索行为日志反馈以及用户信息等方面对搜索结果的文档集合机型综合排序。")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("利用搜索词进行排序。\n该过程有称为"),t("strong",[_._v("相关性排序")]),_._v("，是根据用户的搜索词与文档本身的相关程度进行排序，整个过程只考虑文档与用户搜索词的匹配程度。")])]),_._v(" "),t("li",[t("p",[_._v("利用文档质量进行排序。\n文档的质量是一个多方面的评价标准，它包括对文档链接权值、文档链接质量的分析，对文档内容真实性、文档内容权威等各方面等情况计算一个合理参考值，给与文档基于质量上的评分。")])]),_._v(" "),t("li",[t("p",[_._v("利用搜索行为日志反馈进行排序。\n用户的搜索行为日志，包括：用户点击了某个商品、在某个商品上的停留时间、加购了某些商品，这些行为可以通过相关日志或者客户端埋点获取，结合搜索行为日志来对排序进行干预。")])]),_._v(" "),t("li",[t("p",[_._v("利用用户信息进行排序。\n该过程又称为"),t("strong",[_._v("个性化排序")]),_._v("，是根据用户搜索的历史记录、个性喜好、身份特征等方面为用户定制的搜索结果，即可能导致不同用户使用相同搜索词看到的搜索结果不一致。")])])]),_._v(" "),t("blockquote",[t("p",[_._v("说明：文档质量、行为日志反馈等在数据分析过程中已经完成（并不需要用户在搜索过程中进行文档质量评分），利用搜索词和用户信息的排序方式采用分布式实时计算。")])]),_._v(" "),t("p",[_._v("换个角度看搜索排序，除对搜索结果排序结果有很高的要求之外，对排序完成的时间也具有很高的要求，在极短的时间内完成排序也是搜索体验的重要影响因素之一。")]),_._v(" "),t("h2",{attrs:{id:"_4-搜索的关键词抽取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-搜索的关键词抽取"}},[_._v("#")]),_._v(" 4. 搜索的关键词抽取")]),_._v(" "),t("p",[_._v("搜索的关键词抽取技术主要如下：")]),_._v(" "),t("ol",[t("li",[t("p",[_._v('手动标注文档的额关键词。\nkeywords = "青年，可持续发展，发展"')])]),_._v(" "),t("li",[t("p",[_._v("手动标注文档的标签。\n标签：政府债券 俄罗斯联邦 Anton")])]),_._v(" "),t("li",[t("p",[_._v("系统自动抽取。\n常见的自动化抽取方法是利用TF-IDF算法。大致思想如果一个关键词在某网页中出现频率很高，在其他网页中很少出现，则认为它是该网页的关键词。")])])]),_._v(" "),t("h2",{attrs:{id:"_5-索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-索引"}},[_._v("#")]),_._v(" 5. 索引")]),_._v(" "),t("p",[_._v("索引可以分为两类：")]),_._v(" "),t("ol",[t("li",[_._v("字索引")]),_._v(" "),t("li",[_._v("词索引")])]),_._v(" "),t("p",[_._v("词索引又涉及到中文分词，中文分词分为以下两种：")]),_._v(" "),t("ol",[t("li",[_._v("基于词库分词（比如：ik分词、jieba分词）")]),_._v(" "),t("li",[_._v("基于机器学习的方式")])]),_._v(" "),t("blockquote",[t("p",[_._v("利用机器学习的方式，采用基于上下文信息的分词技术，目前公认的机器学习方式能够达到的较好效果是基于条件随机场模型（Conditional Random Fields）的中文分词技术")])]),_._v(" "),t("h2",{attrs:{id:"_5-技术难点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-技术难点"}},[_._v("#")]),_._v(" 5. 技术难点")]),_._v(" "),t("h3",{attrs:{id:"_1-单字-较难解决的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-单字-较难解决的问题"}},[_._v("#")]),_._v(" 1.  "),t("strong",[_._v("单字")]),_._v(" 较难解决的问题")]),_._v(" "),t("p",[t("strong",[_._v("存在问题：")])]),_._v(" "),t("ul",[t("li",[_._v("搜索“花”时，出现“花生”")]),_._v(" "),t("li",[_._v("搜索“瓜”时，出现“瓜子”")]),_._v(" "),t("li",[_._v("搜索“水”时，出现“水壶”")]),_._v(" "),t("li",[_._v("......")])]),_._v(" "),t("p",[_._v("常见的原子词有如下：")]),_._v(" "),t("blockquote",[t("p",[_._v("虾、葱、鱼、水、米、面、油、肉、鸡、姜、盐、梨、花、蟹、蒜、菇等等")])]),_._v(" "),t("p",[t("strong",[_._v("解决方式：")]),_._v("\n将原子词放在原子表atomwords.txt中，保护原子词的filter，即维护各个原子词对应的类目code。\n比如：我们的商品相关的索引中每个商品都会维护对应的类目code，因此，搜索单字的时候只要带上单字对应的code进行filter过滤掉不相关的商品。")]),_._v(" "),t("h3",{attrs:{id:"_2-停用词的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-停用词的问题"}},[_._v("#")]),_._v(" 2. 停用词的问题")]),_._v(" "),t("p",[_._v("在电商商品中经常出现如下词：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("袋、g、L、片、/、支、盒\n")])])]),t("p",[_._v("另外有以下几个词注意不能被用作停用词：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("米、被\n")])])]),t("p",[_._v("IK默认自带的停用词有（30个）：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("也、了、仍、从、以、使、则、却、又、及、对、就、并、很、或、把、是、的、着、给、而、被、让、在、还、\n比、等、当、与、于、但\n")])])]),t("h3",{attrs:{id:"_3-组合词问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-组合词问题"}},[_._v("#")]),_._v(" 3. 组合词问题")]),_._v(" "),t("p",[_._v("在上面的索引的分类中，我们除了分出"),t("strong",[_._v("词索引")]),_._v("，为什么还需要"),t("strong",[_._v("字索引")]),_._v("，看下下面这个例子：")]),_._v(" "),t("blockquote",[t("p",[_._v("假如：现在词库中有词“大学生”、“活动”、“中心”，因此，当文档中包括“大学生互动中心”，根据词切分\n为“大学生/活动/中心”。此时，如果我们用“大学”去搜索文本，将无法查找到该条记录\n当加上字索引“大/学/生/活/动/中/心”，用户输入大学用如下语句“（大AND学）OR 大学”,即可把组合词的问题解决了（即查询的时候使用字词混合查询），当然做的更细一点，可以在匹配的时候加上约束，单字“大”必须在单字“学”前面。")])]),_._v(" "),t("h3",{attrs:{id:"_4-输入错词的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-输入错词的问题"}},[_._v("#")]),_._v(" 4. 输入错词的问题")]),_._v(" "),t("p",[_._v("关于输入错词的问题，对应的业内有专门的技术"),t("strong",[_._v("文本纠错")]),_._v("\n对于搜索框搜索的词的纠错。")]),_._v(" "),t("p",[_._v("主要有以下两种情况：")]),_._v(" "),t("ol",[t("li",[_._v("拼音纠错。这种一般是针对拼音输入法的用户输入的错误的词进行纠正。比如：用户输入“皇上皇”，系统会自动纠为“煌上煌”")]),_._v(" "),t("li",[_._v("字形纠错。这种一般针对五笔或者手写的用户输入的错误词进行纠正。比如：用户输入“囗罩”，系统纠成正确的“口罩”等。")])]),_._v(" "),t("h3",{attrs:{id:"_5-命名实体识别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-命名实体识别"}},[_._v("#")]),_._v(" 5. 命名实体识别")]),_._v(" "),t("p",[_._v("待补充")]),_._v(" "),t("h3",{attrs:{id:"_6-用户意图识别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-用户意图识别"}},[_._v("#")]),_._v(" 6. 用户意图识别")]),_._v(" "),t("p",[_._v("待补充")]),_._v(" "),t("h3",{attrs:{id:"_6-冷启动数据问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-冷启动数据问题"}},[_._v("#")]),_._v(" 6. 冷启动数据问题")]),_._v(" "),t("p",[_._v("在搜索引擎系统中，通过用户行为日志或者用户信息来对搜索的商品权重进行加权，从而提升用户体验。\n但是，对于新用户或者新开的城市门店来说，是没有这方面的数据。因此，这里提出了一种权重加权的方法：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("最终权重 = 0.3 * 系统平均权重 + 0.7 * 用户行为权重\n")])])]),t("p",[_._v("这种方式，在一开始用户行为权重值较小的时候，让系统的平均权重较大，从而避免了冷数据的问题。")]),_._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),t("p",[_._v("垂直电商搜索涉及的技术领域较多，其本质是自然语言处理的实际应用。")])])}),[],!1,null,null,null);v.default=s.exports}}]);