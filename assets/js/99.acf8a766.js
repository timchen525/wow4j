(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{567:function(t,a,d){"use strict";d.r(a);var _=d(19),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,d=t._self._c||a;return d("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[d("p",{attrs:{"data-nodeid":"2"}},[t._v("你好，我是潘新宇，你也可以叫我 Jessen。目前我在京东集团担任团队架构负责人，常年深耕于业务一线从事业务后台的架构工作。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3"}},[t._v("其间，我成功带领团队完成架构转型，将多个电商模块从烟囱式升级到平台化，最终演升到中台化；将懒加载模式的技术架构升级为能够支撑并发百万的读服务，落地了能够随机切库实现高可用的写服务，以及将并发扣减从单机几十的 TPS 优化至单机万级左右。")]),t._v(" "),d("h3",{attrs:{"data-nodeid":"4"}},[t._v("跳出单点知识去思考架构模式")]),t._v(" "),d("p",{attrs:{"data-nodeid":"5"}},[t._v("在经历了多个平台化项目的实战后，我发现虽然业务场景不同，但很多平台的底层技术架构都是类似的。比如在构建一个外卖平台时，需要查询用户信息、商品信息、价格信息及外卖订单信息等业务功能，底层的技术都是要实现一个高性能、高可用的读服务。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"6"}},[t._v("如果能够掌握上述各个不同业务形态下的底层技术套路，我相信你在做架构设计时一定能够无往不利、事半功倍。"),d("strong",{attrs:{"data-nodeid":"76"}},[t._v("因为不管业务形态如何变化，只要掌握底层技术套路，你就可以直接进行架构移植")]),t._v("。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"7"}},[t._v("总体而言，架构是一项需要经过各种不同场景项目的磨炼才能够真正掌握的技能。而刚工作几年的初、中级工程师，更多的是参与日常业务需求的开发，接触的业务场景和难点问题都比较受限。我相信很多同学都有过这样的经历：")]),t._v(" "),d("ul",{attrs:{"data-nodeid":"8"}},[d("li",{attrs:{"data-nodeid":"9"}},[d("p",{attrs:{"data-nodeid":"10"}},[t._v("换工作跨行业后（比如从新闻资讯类公司跳到了电商公司），无法施展自己之前的架构经验，或者不知道如何复用；")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"11"}},[d("p",{attrs:{"data-nodeid":"12"}},[t._v("在学习了一些技术点后，比如 Redis，明白了它性能快的原因，但仍然不知道如何通过它架构一套支持百万并发的读服务；")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"13"}},[d("p",{attrs:{"data-nodeid":"14"}},[t._v("又比如在学习了多线程编程的技巧及数据库的 ACID 相关特性后，实际面对一个类似库存扣减的业务时，仍不知如何去设计一个能够支持高并发且不出现超卖的架构方案。")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"15"}},[d("p",{attrs:{"data-nodeid":"16"}},[t._v("很多时候，你知道怎么做架构设计，但不能真正理解这样设计的原因，情况稍有点变动，马上就栽跟头。")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"17"}},[d("strong",{attrs:{"data-nodeid":"86"}},[t._v("出现以上种种情况的根本原因，是你没有将架构技能模式化、抽象化，而是从某一个技术点去学习，并长期在固定的“环境”中去应用，导致这些技能无法复用，做到一通百通")]),t._v("。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"18"}},[t._v("如果你有仔细研究各大互联网公司的后台开发和架构岗位的招聘要求，也能发现一些价值信息。虽然各公司业务各异，但对技术知识的要求其实是非常相似的，除了要求你掌握某种开发语言和相关框架外，还要掌握分布式、多线程、缓存、数据库等。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"1112"}},[d("img",{attrs:{src:"https://s0.lgstatic.com/i/image2/M01/04/7B/CgpVE1_yfQuAPztPAANC63flFVE240.png",alt:"Drawing 0.png","data-nodeid":"1116"}})]),t._v(" "),d("div",{attrs:{"data-nodeid":"1113"}},[d("p",{staticStyle:{"text-align":"center"}},[t._v("（以上职位信息来源拉勾网）")])]),t._v(" "),d("p",{attrs:{"data-nodeid":"21"}},[t._v("看到这里，你可能会说：“招聘描述上明明要求学习这些共性的技术点，而不是某个架构模式。”但其实恰恰相反，"),d("strong",{attrs:{"data-nodeid":"97"}},[t._v("技术点都隶属于共性的架构模式，正因为架构模式需要技术点，它们才会被写进招聘要求里")]),t._v("。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"22"}},[t._v("也许你还会继续追问：“为什么不直接写要求你具备设计支撑百万并发的架构能力、掌握构建 7*24 不挂的高可用系统的能力呢？”因为太抽象了！如果你看到这样的招聘要求，是否清楚该如何准备面试呢？")]),t._v(" "),d("p",{attrs:{"data-nodeid":"23"}},[t._v("往往这些抽象的、可复用的模式才是隐藏在招聘信息背后最重要的内容。比如，为什么各大后台开发岗位都需要你掌握隶属于 NoSQL 的 Redis 呢？就是因为 Redis 在后台架构里可以极大地提升读写的性能。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"24"}},[t._v("在微博的爆点吃瓜事件、电商的大促秒杀、分布式的并发防重、高并发的库存及支付扣减等场景里，Redis 都在架构方案里占据重要的角色，这才是它变得火爆的真正原因。因为 Redis 被架构验证，所以才被写进招聘要求里，并不是因为这个技术现在很“热”，才导致各大架构需要用到它。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"25"}},[d("strong",{attrs:{"data-nodeid":"107"}},[t._v("希望你能够抓住事物的本质弄清逻辑关系")]),t._v("。")]),t._v(" "),d("h3",{attrs:{"data-nodeid":"26"}},[t._v("业务场景的缺失，是你架构能力难以进阶的“原罪”")]),t._v(" "),d("p",{attrs:{"data-nodeid":"27"}},[t._v("那么，说到学习架构模式或者构建架构体系，很多同学有这样的意识，也付出过努力，但是不少人在学习过种种资料后仍然困惑不得要领：“"),d("strong",{attrs:{"data-nodeid":"114"}},[t._v("学习这么多高度抽象的模式，面对具体场景时依然无从下手，还不如踏踏实实地去学习具体的技术点呢。")]),t._v("”")]),t._v(" "),d("p",{attrs:{"data-nodeid":"28"}},[t._v("在我看来，虽然经久不衰的架构模式存在必有它的道理，但经过高度抽象、验证过的架构模式和准则太模式化了，导致很难准确地理解和应用在工作中。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"29"}},[t._v("比如常见的架构准则都会提到“架构应该是简洁的、职责单一的”，但对此，我想不少同学会困惑，到底什么算简洁？所有代码都写在一个单体模块是简洁的，毕竟架构上，它就只有一个模块，没有分层和垂直拆分，非常简单吧。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"30"}},[t._v("但我们知道事实并非如此。随着业务发展、客户增加，系统复杂度和耦合度也会越来越高，此时就会出现单体应用与业务扩展、客户体量、测试难度之间的矛盾。这会给整个部门乃至协作部门带来非常大的挑战，因此单体应用并不简洁。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"31"}},[d("strong",{attrs:{"data-nodeid":"121"}},[t._v("究其原因，你没有经历过这些模式被推导出来的过程，因此代入感很低。")])]),t._v(" "),d("p",{attrs:{"data-nodeid":"32"}},[t._v("我相信你一定有这样的感受，对于亲身经历过的、事故频发、历经千难万苦的系统架构演化，从中获得的经验和道理一定能够让你刻骨铭记，并很容易在其他项目上复用。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"33"}},[t._v("但在"),d("strong",{attrs:{"data-nodeid":"128"}},[t._v("现实中，并不是每个人都有机会参与到此类项目的研发和架构设计，很多时候大厂的一些系统架构在早期已经固化了，后续介入的人只是参与日常需求开发，实际参与过互联网一线大厂日均上亿次调用的系统架构设计的人毕竟是少数")]),t._v("。你很难有时间和机会去亲身经历后台系统的架构设计演化。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"34"}},[t._v("以上种种困惑，我将在这个专栏中为你解答。")]),t._v(" "),d("h3",{attrs:{"data-nodeid":"35"}},[t._v("跳出被动灌输，理解架构设计")]),t._v(" "),d("p",{attrs:{"data-nodeid":"36"}},[t._v("秉承可直接复用的原则，我尽可能把关键步骤全部展示给你，同时争取将一个技术点和方案的优缺点、适应场景、能够解决的问题通盘告诉你。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"37"}},[t._v("在这个专栏中，我们会一起学习各种架构模式，但并不是直接灌输给你，而是"),d("strong",{attrs:{"data-nodeid":"137"}},[t._v("基于实际案例的演化过程")]),t._v("，带你搞懂什么是高性能读业务、高并发扣减业务和高可用的写业务的架构模式，以及为什么要这样设计，让你知其然并知其所以然。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"38"}},[t._v("具体来讲，我按总-分-总的思路，将专栏分为 5 个模块。")]),t._v(" "),d("ul",{attrs:{"data-nodeid":"39"}},[d("li",{attrs:{"data-nodeid":"40"}},[d("p",{attrs:{"data-nodeid":"41"}},[t._v("模块一：后台业务系统的架构模式")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"42"}},[t._v("我将对业务后台系统进行一个边界定义，对不同边界的后台系统分门别类，并分别介绍其实现上需要满足的架构要求。这个模块，我希望帮助你建立对后台系统的全局业务视角，打造对各类系统按业务（垂直拆分）及技术特点（水平拆分）进行架构设计的能力。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"43"}},[t._v("模块二~模块四，将对后台系统架构设计的三大问题——高性能、高可用、高并发——进行深入探讨，并通过实际案例告诉你在解决问题时如何科学拆解、在选择实现方案时如何进行取舍。")]),t._v(" "),d("ul",{attrs:{"data-nodeid":"44"}},[d("li",{attrs:{"data-nodeid":"45"}},[d("p",{attrs:{"data-nodeid":"46"}},[t._v("模块二：构建高性能的读服务")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"47"}},[t._v("读业务最重要的是提升性能。首先，我会介绍一个基本满足性能要求使用缓存懒加载模式的读业务实现方案；然后针对此方案存在的问题，手把手带你实现一个简单能规避缓存过期、穿透雪崩等问题的升级方案，以及读数据热点的应对方案。此外，我还会选取实际工作中的高频问题，教你如何大幅度降低读服务的测试回归时间，从而提升线上质量。")]),t._v(" "),d("ul",{attrs:{"data-nodeid":"48"}},[d("li",{attrs:{"data-nodeid":"49"}},[d("p",{attrs:{"data-nodeid":"50"}},[t._v("模块三：构建高可用的数据写入服务")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"51"}},[t._v("写类型的业务最重要的是满足高可用。我将介绍如何使用分库分表完成一个基本的、高可用的写入方案；然后随着需求的增加，介绍如何构建一个无状态的写入存储，实现随时随地可以切库的高可用方案；最后介绍在分库分表后，如何满足跨分库路由的多维度查询。")]),t._v(" "),d("ul",{attrs:{"data-nodeid":"52"}},[d("li",{attrs:{"data-nodeid":"53"}},[d("p",{attrs:{"data-nodeid":"54"}},[t._v("模块四：构建高并发的扣减服务")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"55"}},[t._v("扣减类业务最关键的是保障高并发的应对能力。首先，我会介绍扣减类服务在实现上需要满足哪些功能性诉求；然后，介绍 3 种递进式的实现方案及它们的适用场景（从纯数据库到纯缓存，再到数据库 + 缓存）；最后针对秒杀场景，讲解如何实现千万级并发均命中相同数据。")]),t._v(" "),d("ul",{attrs:{"data-nodeid":"56"}},[d("li",{attrs:{"data-nodeid":"57"}},[d("p",{attrs:{"data-nodeid":"58"}},[t._v("模块五：通用架构模式")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"59"}},[t._v("将会对一些共性的问题进行深入讨论，带你掌握在上述架构方案之外的、构建一个微服务必不可少的架构技能，包含对外 SDK 设计、部署策略、服务解耦和分布式事务、立体化监控，以及如何应对系统重构等内容，进而帮助你构建一个更加完整的架构体系。")]),t._v(" "),d("p",{staticClass:"te-preview-highlight",attrs:{"data-nodeid":"1429"}},[d("img",{attrs:{src:"https://s0.lgstatic.com/i/image2/M01/04/7B/CgpVE1_yfSSAYob7AAMv_k53EPE229.png",alt:"Drawing 1.png","data-nodeid":"1432"}})]),t._v(" "),d("h3",{attrs:{"data-nodeid":"61"}},[t._v("讲师寄语")]),t._v(" "),d("p",{attrs:{"data-nodeid":"62"}},[t._v("学完本专栏后，我希望你能够掌握实现“三高”系统架构的通用方法论，并能够在自己所负责的系统中落地应用。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"63"}},[t._v("我还希望你去面试或者入职一家新公司后，能够看穿披在业务面纱后的技术实现共同点，可以直接复用本专栏向你介绍的或者你沉淀消化后的架构模式。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"64"}},[t._v("通过模式化的架构思维去分析和思考，这是我希望这个专栏可以传递给你的一个长期理念，相信你在成为后台系统架构师之路上会如虎添翼，一路乘风破浪，从技术骨干逐步成长为能够独立支撑一个技术方向的架构师。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"65"}},[t._v("三人行必有我师，让我们一起在讨论中碰撞出意想不到的知识火花。")]),t._v(" "),d("hr"),t._v(" "),d("h3",{attrs:{id:"精选评论"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#精选评论"}},[t._v("#")]),t._v(" 精选评论")]),t._v(" "),d("h5",{attrs:{id:"felixwon"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#felixwon"}},[t._v("#")]),t._v(" felixwon：")]),t._v(" "),d("blockquote",[d("p",[t._v("想问问电商的产品id，店铺id，订单id的编码规则是什么样的。如果不方便说，可以透露一下思想，多谢！")])]),t._v(" "),d("h6",{attrs:{id:"讲师回复"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),d("blockquote",[d("p",[t._v("    在第八讲的分库分表里会有讲解，两种方式可选。第一是使用算法生成唯一字符串或数值型的id，但太长。如果需要存储的数据太大，不建议使用，好处是简单。其次，是使用基于数据库的id生成器的服务来生成相对顺序且长度较短的id。")])]),t._v(" "),d("h5",{attrs:{id:"霖"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#霖"}},[t._v("#")]),t._v(" **霖：")]),t._v(" "),d("blockquote",[d("p",[t._v("我java 4年，c#2年，12月初到新公司，突然由我担任架构了，还没容得我学习了解公司的业务，就把一个新业务的架构交给我了。我这个没什么经验的架构师，突然有点慌。5个以上子系统，还是比较复杂的电商场景，我在上手前，可以自己做些什么呢？求指导")])]),t._v(" "),d("h6",{attrs:{id:"讲师回复-2"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-2"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),d("blockquote",[d("p",[t._v("    经验是一个相对的事情，有些人工作的十多年依然成为不了架构师。对于现在情况，首先可以和之前维护这个系统的人进行一次复盘，总结出各自业务的模式。其次，就可以参考本专栏学习啦。最后，虽然技术是有套路的，如果现在负责的业务和以前的经验完全无关，建议多花时间学习业务知识，毕竟技术是服务于业务的。")])]),t._v(" "),d("h5",{attrs:{id:"放"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#放"}},[t._v("#")]),t._v(" *放：")]),t._v(" "),d("blockquote",[d("p",[t._v("就像潘老师说的，一个公司里能够真正参与到项目的研发和架构设计中的人太少了，除了工作中的积累，如果想融会贯通，业余时间也应好好利用起来。")])]),t._v(" "),d("h5",{attrs:{id:"河"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#河"}},[t._v("#")]),t._v(" **河：")]),t._v(" "),d("blockquote",[d("p",[t._v("老师的这门课很赞，站在一个新角度看待技术架构，突然有种豁然开朗的既视感，工作已经有几年了，但是对架构还是模模糊糊，你列的那几点问题都有，技术和业务不能很好的结合，希望通过该课程打通一下脉络，有些提高")])]),t._v(" "),d("h5",{attrs:{id:"_7680"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_7680"}},[t._v("#")]),t._v(" **7680：")]),t._v(" "),d("blockquote",[d("p",[t._v("结合大佬的分享，准备好好梳理下自己这几年的积累")])]),t._v(" "),d("h5",{attrs:{id:"奥特曼17793265053"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#奥特曼17793265053"}},[t._v("#")]),t._v(" **奥特曼17793265053：")]),t._v(" "),d("blockquote",[d("p",[t._v("跟着大佬 希望少走很多路～～～")])]),t._v(" "),d("h5",{attrs:{id:"南磊"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#南磊"}},[t._v("#")]),t._v(" **南磊：")]),t._v(" "),d("blockquote",[d("p",[t._v("刚工作3年，我看这个内容会不会经验浅了")])]),t._v(" "),d("h6",{attrs:{id:"讲师回复-3"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-3"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),d("blockquote",[d("p",[t._v("    循序渐进的架构方案演进，帮你一步一步获取架构知识，而不是上来就讲最复杂的应对方案。要相信自己，没问题！")])]),t._v(" "),d("h5",{attrs:{id:"贵"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#贵"}},[t._v("#")]),t._v(" *贵：")]),t._v(" "),d("blockquote",[d("p",[t._v("老师好，我目前维护一个医疗项目，目前平台业务是：发票创建是基于送货单创建的，创建一单就会生成一张对应的发票。现在和医院对接发现一个问题：医院可能存在重复的发票号，导致发票号重复的数据就推不上来。联系了之前负责这个项目的人员：给的答复是给不出解决方案。")])]),t._v(" "),d("h6",{attrs:{id:"讲师回复-4"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-4"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),d("blockquote",[d("p",[t._v("    题目信息比较少，我试着回答下。我理解的意思是可能多张送货单对应一张发票？如果是这样话，可以在生成的时候，将送货单和发票号进行组合，生成唯一的编号。不知是否可以解答你的疑问？")])]),t._v(" "),d("h5",{attrs:{id:"jy"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#jy"}},[t._v("#")]),t._v(" JY：")]),t._v(" "),d("blockquote",[d("p",[t._v("是不是提升更新速度，学完找工作，1月底公司裁员我踊跃报名了！工作求介绍啊")])]),t._v(" "),d("h6",{attrs:{id:"编辑回复"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#编辑回复"}},[t._v("#")]),t._v("     编辑回复：")]),t._v(" "),d("blockquote",[d("p",[t._v("    咱们课程过年期间保持更新，小伙伴正好可以利用新年长假丰富自己的知识储备：）")])]),t._v(" "),d("h5",{attrs:{id:"liang"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#liang"}},[t._v("#")]),t._v(" **liang：")]),t._v(" "),d("blockquote",[d("p",[t._v("2月底入职新公司，面试的时候说会给我让我参与一个新项目的研发，也会涉及架构设计。趁现在赶紧补补课，老师带我飞～")])]),t._v(" "),d("h5",{attrs:{id:"_0831"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_0831"}},[t._v("#")]),t._v(" **0831：")]),t._v(" "),d("blockquote",[d("p",[t._v("冲着国内各大互联网公司的业务场景来的 从我个人的工作经历来看，架构能力的提升是非常依赖于工作环境，但是如果工作环境不能给予我提升的空间。。。只能自己可劲儿学了")])]),t._v(" "),d("h5",{attrs:{id:"岩"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#岩"}},[t._v("#")]),t._v(" **岩：")]),t._v(" "),d("blockquote",[d("p",[t._v("商品ID不能随便的OK，他是税务部门对特定的商品ID有要求的OK")])]),t._v(" "),d("h5",{attrs:{id:"傲"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#傲"}},[t._v("#")]),t._v(" **傲：")]),t._v(" "),d("blockquote",[d("p",[t._v("跟着专栏一起学习，努力提升自己的架构设计能力，希望老师能多讲点实际案例和使用场景")])]),t._v(" "),d("h5",{attrs:{id:"_3961"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_3961"}},[t._v("#")]),t._v(" **3961：")]),t._v(" "),d("blockquote",[d("p",[t._v("多多学习😀")])]),t._v(" "),d("h5",{attrs:{id:"_8956"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_8956"}},[t._v("#")]),t._v(" **8956：")]),t._v(" "),d("blockquote",[d("p",[t._v("希望能坚持下去，都觉得自己现在止步不前了")])]),t._v(" "),d("h6",{attrs:{id:"编辑回复-2"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#编辑回复-2"}},[t._v("#")]),t._v("     编辑回复：")]),t._v(" "),d("blockquote",[d("p",[t._v("    小编给你打气！！小伙伴加油哦～")])]),t._v(" "),d("h5",{attrs:{id:"雷"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#雷"}},[t._v("#")]),t._v(" **雷：")]),t._v(" "),d("blockquote",[d("p",[t._v("很期待老师的课程，希望自己能从课程中学到东西，并加以实践。这样才能学以致用。")])])])}),[],!1,null,null,null);a.default=s.exports}}]);