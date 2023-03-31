(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{597:function(t,a,d){"use strict";d.r(a);var s=d(19),i=Object(s.a)({},(function(){var t=this,a=t.$createElement,d=t._self._c||a;return d("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[d("p",{attrs:{"data-nodeid":"3261"}},[t._v("今天咱们来聊一下资损事故的防控。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3262"}},[t._v("我想你一定很熟悉近几年“百亿补贴”“天降红包”“签到抽奖”这些电商、外卖、打车花样百出的营销活动和用户补贴。而且它们的营销逐渐从特有的大促场景中（比如双 11、618）常态化，红包、返现、抽奖、X 元套餐等活动玩法层出不穷，随之而来的还有各类资损事件，比如：")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3263"}},[t._v("2020 年 1 月，京东被爆出可以领取 200 元无门槛小家电优惠券，微波炉、电烤箱等小家电甚至可以 0 元购，网传损失 7000W，研发团队整体被裁掉，虽然后来京东官方辟谣，但根据按订单发货和砍单补偿红包的处理措施来看，最终的资损肯定是个天文数字。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3264"}},[d("img",{attrs:{alt:"图片1.png",src:"https://s0.lgstatic.com/i/image2/M01/0A/9D/CgpVE2ASYxmAdMThAAL4ZkXzgqc824.png","data-nodeid":"3387"}})]),t._v(" "),d("div",{attrs:{"data-nodeid":"3620"}},[d("p",{staticStyle:{"text-align":"center"}},[d("span",{staticStyle:{color:"#b8b8b8"}},[t._v("6 元的美的电烤箱")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"3266"}},[t._v("除了这个案例，还有商户配错价格、秒杀商品大量超卖等资损类事件，它们主要有这样几个共性的特点：")]),t._v(" "),d("ul",{attrs:{"data-nodeid":"3267"}},[d("li",{attrs:{"data-nodeid":"3268"}},[d("p",{attrs:{"data-nodeid":"3269"}},[t._v("平台感知能力弱，技术指标不敏感，大部分是舆论爆发后人工反馈；")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"3270"}},[d("p",{attrs:{"data-nodeid":"3271"}},[t._v("因为感知困难，往往持续时间长，最终资金损失大；")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"3272"}},[d("p",{attrs:{"data-nodeid":"3273"}},[t._v("问题难以第一时间立刻恢复，并且止损后容易引起舆论关注和公关事件。")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"3274"}},[d("strong",{attrs:{"data-nodeid":"3395"}},[t._v("简单来讲就是感知难、修复慢、影响大。")])]),t._v(" "),d("p",{attrs:{"data-nodeid":"3275"}},[t._v("而我观察后发现，大部分研发同学对资损类事故的了解相对缺乏，因为它比可用性事故更隐蔽，并且很多同学会将其简单归为“线上Bug”，忽略背后的资金损失，也没有量化具体的业务影响。所以，如果一个团队要想在资损上不栽跟头，能结合具体的业务场景在系统上做好防控建设，"),d("strong",{attrs:{"data-nodeid":"3400"}},[t._v("技术 Leader 的认识和引导就起到关键作用。")])]),t._v(" "),d("p",{attrs:{"data-nodeid":"3276"}},[t._v("这一讲我会从“如何理解资损事故”和“如何预防、应对资损事故”两个角度出发，围绕红包这个常见的场景分享一下我对资损防控的理解（上一讲已经涵盖了管理部分，所以本节不会重点强调管理动作）。")]),t._v(" "),d("h3",{attrs:{"data-nodeid":"3277"}},[t._v("建立资损概念的宏观认知")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3278"}},[d("strong",{attrs:{"data-nodeid":"3407"}},[t._v("很多 Leader 有这样一个认知误区：")]),t._v(" 平台有资金外流或者因为平台的系统故障导致某一方客户有资金外流，这才是资损事故。这种只关注真实流失的资金，是狭义的。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3279"}},[d("strong",{attrs:{"data-nodeid":"3412"}},[t._v("从广义上来看，存在理论损失也应该算资损，")]),t._v(" 比如因为搜索推荐系统出问题（不论什么原因）导致这一阶段广告的收入减少，或者因系统 Bug 导致用户取消订单的申请被默认同意（虽然原本商户可能也会做同意处理，但是申诉的话平台依然要赔付），类似预计收益减少或者因系统问题产生赔付的场景都应算为资损。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3280"}},[t._v("我列举了常见的定义与分类，因为资损场景与业务是息息相关的，所以我又简单地举了几个例子，方便你理解。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3281"}},[d("img",{attrs:{alt:"图片2.png",src:"https://s0.lgstatic.com/i/image2/M01/0A/9D/CgpVE2ASYyyAAp99AAHQPeoXQkg893.png","data-nodeid":"3416"}})]),t._v(" "),d("div",{attrs:{"data-nodeid":"4339"}},[d("p",{staticStyle:{"text-align":"center"}},[d("span",{staticStyle:{color:"#b8b8b8"}},[t._v("资损定义与分类")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"3283"}},[d("strong",{attrs:{"data-nodeid":"3421"}},[t._v("在这里，我想提醒你注意资损分类的“已知资损”。")]),t._v(" 听起来有点儿怪，怎么还能允许已知资损存在呢？其实这种情况很常见，主要还是因为业务规则与用户体验之间的平衡，比如电商平台有跨店铺满减优惠券，如果你凑单后，退掉不需要的商品就可以跨过“本不满足的优惠券使用条件”。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3284"}},[t._v("虽然这种“钻空子”是业务规则允许的，但是也会存在风险，有可能形成超出预期的问题，比如家居这类大客单价的场景，如果忽略“已知资损风险”，发出了 3000-500 的优惠券，和 300-30 带来的风险肯定天上地下了。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3285"}},[t._v("讲到这儿，你可能感觉跟自己的关联不大，因为自己负责的不是交易或者营销这类与资金关联很强的系统。可我认为，只要你公司的业务存在资金流，那么体系中的任何一个系统都很难完全规避资损风险，只是概率高低而已。很多时候，"),d("strong",{attrs:{"data-nodeid":"3427"}},[t._v("你一松懈，也许问题就会发生。")])]),t._v(" "),d("p",{attrs:{"data-nodeid":"3286"}},[t._v("2014 年，我刚加入公司参与开发的是内部运营系统，既没有大流量也没有高并发，订单、支付、红包这些只涉及查询，看着蛮“安全”，但当时在迭代一个菜单编辑功能的时候，因为我的疏忽导致一个前端 Bug：某种情况下菜品的价格传到后端是 0，后端接口也没有完整的校验，上线后第二天大量用户喜提 0 元午餐…… 直到现在，我印象依旧很深刻。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3287"}},[t._v("那说了这么多，资损防控的关键是什么呢？")]),t._v(" "),d("h3",{attrs:{"data-nodeid":"3288"}},[t._v("资损防控的三个关键")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3289"}},[t._v("资损事故感知难、修复慢、影响大，所以更应该把精力投入到预防上，这样才能从根本上解决问题。修复慢是因为缺少预案，只能临时 Fix，时间上紧迫还容易引入新的风险。而想要更早发现问题，就要有监控，这样才能在事发第一时间响应处理，缩短事故持续时间。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3290"}},[t._v("所以你要争取做到事前梳理出风险点做好预防、事发可以及时感知响应、事中可以快速止损恢复（简单来讲三个字：防、监、控）。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3291"}},[t._v("从阶段上来讲，资损防控的落地动作与可用性治理的有所类似，"),d("strong",{attrs:{"data-nodeid":"3437"}},[t._v("但是每一部分的关键点和可用性治理又不相同，这些是 Leader 要格外注意的。")])]),t._v(" "),d("h4",{attrs:{"data-nodeid":"3292"}},[t._v("1.防：资金视角做风险点识别")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3293"}},[t._v("核心是引导团队将精力放在风险点的识别与修复上，从我过去经历过的资损事故来看，虽然大部分事故都和技术 Bug、产品逻辑设计、人为配置错误这三部分有关，但是具体的原因非常离散。比如围绕红包可能出现的资损风险点，从红包的生命周期切入，就有很多可能。")]),t._v(" "),d("ul",{attrs:{"data-nodeid":"3294"}},[d("li",{attrs:{"data-nodeid":"3295"}},[d("p",{attrs:{"data-nodeid":"3296"}},[d("strong",{attrs:{"data-nodeid":"3444"}},[t._v("配置阶段：")]),t._v(" 金额、数量、使用条件、补贴结构等信息是否配置正确？")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"3297"}},[d("p",{attrs:{"data-nodeid":"3298"}},[d("strong",{attrs:{"data-nodeid":"3449"}},[t._v("发放阶段：")]),t._v(" 红包发放人群是否有超出？")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"3299"}},[d("p",{attrs:{"data-nodeid":"3300"}},[d("strong",{attrs:{"data-nodeid":"3454"}},[t._v("核销阶段：")]),t._v(" 优惠互斥关系是否满足（比如满减和新用户红包不可同享）？单笔订单可使用红包数量是否超出？")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"3301"}},[d("p",{attrs:{"data-nodeid":"3302"}},[d("strong",{attrs:{"data-nodeid":"3459"}},[t._v("退回阶段：")]),t._v(" 订单取消后，红包是否退回？如果用在 B 订单上的红包是来自 A 订单的奖励，那么 A 订单取消后，B 订单使用的红包是否受影响？")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"3303"}},[t._v("你可以看到，抛开技术问题仅从业务逻辑的角度去假设，在红包的各个阶段都可能出现资损风险，并且问题非常多样。这一方面说明资损风险点与业务场景联系紧密，另一方面也说明穷举风险点有很强的不确定性，"),d("strong",{attrs:{"data-nodeid":"3464"}},[t._v("我们需要一些可迭代的“套路”去分析和发现问题。")])]),t._v(" "),d("p",{attrs:{"data-nodeid":"3304"}},[t._v("如果说我们通常以 DB 设计、API 契约、架构图作为切入点，梳理可用性的风险点，关注的是流量请求、调用链路以及数据变化（这是一个信息流的视角）。那么与之对应的，在资损方面我们关注的是业务逻辑中隐含的资金逻辑，也就是资金流的视角。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3305"}},[t._v("因为不管是技术问题还是业务逻辑问题，资损风险最终的都会反映到资金层面上，而资金的变化是受业务逻辑影响的，"),d("strong",{attrs:{"data-nodeid":"3471"}},[t._v("二者结合就有了一个很好的切入点。")]),t._v(" 一般系统中资金的变化主要体现在 4个 方面，分别是资金流、资金账户、资金计算和资金凭据。")]),t._v(" "),d("ul",{attrs:{"data-nodeid":"3306"}},[d("li",{attrs:{"data-nodeid":"3307"}},[d("p",{attrs:{"data-nodeid":"3308"}},[d("strong",{attrs:{"data-nodeid":"3476"}},[t._v("资金流")]),t._v("：通过梳理资金的流向，来确认资金转移的链路是否有错误。比如用户领取了满 15-5 的红包，其中 3 元平台补贴，2 元商户补贴。用户下单购买了 15 元的商品，那么从红包补贴到用户支付再到商户收款，就形成了一个简单的资金流，这个流向可以形成很多个“等式”，通过梳理和验证这些等式的正确性检查资金流中是否存在错误，比如最简单的：")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"3309"}},[t._v("用户应付/实付（10）= 商品价格（15）- 红包优惠（5）")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3310"}},[t._v("商户应收/实收（13）=商品价格（15）-商户补贴（2）=用户实付（10）+红包内平台补贴（3）")]),t._v(" "),d("ul",{attrs:{"data-nodeid":"3311"}},[d("li",{attrs:{"data-nodeid":"3312"}},[d("p",{attrs:{"data-nodeid":"3313"}},[d("strong",{attrs:{"data-nodeid":"3483"}},[t._v("资金账户")]),t._v("，通过流水和记录核对资金账户数据的正确性，比如用户账户、商户收款账户……同样也包含一些虚拟资产的核对，比如积分、优惠券……")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"3314"}},[d("p",{attrs:{"data-nodeid":"3315"}},[d("strong",{attrs:{"data-nodeid":"3488"}},[t._v("资金计算")]),t._v("：涉及资金计算的部分需要单独 Review，并通过数据对比进行正确性核算。比如优惠金额的计算、订单金额的计算、商户抽佣的计算……")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"3316"}},[d("p",{attrs:{"data-nodeid":"3317"}},[d("strong",{attrs:{"data-nodeid":"3493"}},[t._v("资金凭据")]),t._v("：资金在各系统扭转的过程中一定会落有大量的凭据，比如订单上会存有使用优惠的信息、对一笔订单进行支付理论上在支付系统会存在一笔支付单，这些凭据的数据准确性以及彼此关联的数据正确性都需要验证。")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"3318"}},[t._v("除了从这 4 个资金的角度梳理风险点之外，还要考虑到一些技术实现引入的问题，比如接口契约、计价单位等，这些技术实现所导致的数据不一致和不正确的问题都会引发资损事故，所以你要额外注意并且参考 02 讲提过的方案，不断完善 Checklist 和设计原则，整体的梳理思路可以参考下方的脑图：")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3319"}},[d("img",{attrs:{alt:"图片3.png",src:"https://s0.lgstatic.com/i/image2/M01/0A/9D/CgpVE2ASY0OAILA7AAE89CbKGfA505.png","data-nodeid":"3497"}})]),t._v(" "),d("div",{attrs:{"data-nodeid":"5058"}},[d("p",{staticStyle:{"text-align":"center"}},[d("span",{staticStyle:{color:"#b8b8b8"}},[t._v("资损风险点识别")])])]),t._v(" "),d("h4",{attrs:{"data-nodeid":"3321"}},[t._v("2. 监：一致性与正确性双核对")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3322"}},[t._v("虽然资损类事故有点儿“润物无声”的味道，但是无声胜有声。比如一定规模的电商平台，如果红包补贴金额有问题，哪怕一个红包平台只损失 0.01 元，但是在庞大体量和长时间的作用下，最终的损失也会是一个天文数字。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3323"}},[t._v("所以在 02 讲我提到过，除了技术指标外，更敏锐的是业务监控。然而它对于短时间资损严重的场景会有比较好的感知能力，但是对于某些细小的资损的场景则无能为力，这就需要我们建立更加敏感、完善的监控体系。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3324"}},[t._v("在我看来，针对资损感知的核心思想是："),d("strong",{attrs:{"data-nodeid":"3507"}},[t._v("基于线上业务结果收拢进行监控，基于线下业务场景扩散进行核对。")])]),t._v(" "),d("p",{attrs:{"data-nodeid":"3325"}},[d("img",{attrs:{alt:"3.png",src:"https://s0.lgstatic.com/i/image6/M00/00/62/CioPOWAaD8WAcw6iAAUQ0fQ1eho886.png","data-nodeid":"3510"}})]),t._v(" "),d("p",{attrs:{"data-nodeid":"3326"}},[d("strong",{attrs:{"data-nodeid":"3515"}},[t._v("基于线上结果收拢进行监控")]),t._v("，是忽略“因”聚焦“果”的一种假设方法，通过观察结果的变化来反推因子是否发生变化。我们可以这样思考，假设系统存在资损漏洞或Bug，那么哪些关键的业务指标会发生变化？这样你会发现：")]),t._v(" "),d("ul",{attrs:{"data-nodeid":"3327"}},[d("li",{attrs:{"data-nodeid":"3328"}},[d("p",{attrs:{"data-nodeid":"3329"}},[t._v("原本满 10-5 的红包，因红包模版Bug，实际生成的红包使用门槛为满 5-5；")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"3330"}},[d("p",{attrs:{"data-nodeid":"3331"}},[t._v("原本仅能在星巴克使用的 15 元专享红包，因为配置错误，变成可以在任意门店使用的平台通用红包。")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"3332"}},[t._v("不同原因导致的问题，最终都会促使交易GMV、用户单均实付金额等宏观业务指标与日常的同比环比出现差异，不同原因的业务影响会逐渐往关键的业务指标上汇集。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3333"}},[t._v("因此可以结合这样的规律，通过组合观察关键业务指标，形成一个基本的资损监控大盘，这样的大盘对来势汹涌、单位时间内流血量大的资损问题是比较敏感的。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3334"}},[d("strong",{attrs:{"data-nodeid":"3528"}},[t._v("而基于线下业务扩散进行核对")]),t._v("，则聚焦到我们在资损预防阶段梳理出的业务场景和业务链路。通过建立实时核对的机制确保每一个红包涉及的资金流动与计算都准确无误。"),d("strong",{attrs:{"data-nodeid":"3529"}},[t._v("这里实时核对的思想是一种 DoubleCheck 的做法，")]),t._v(" 比如我们认为虽然系统会将记录中的 A 数据变更为 B 数据，但是我怎么知道它实际操作中是否所有的变都正确呢？那么我就每次变更完都看一下，A 有没有变为 B，只要检验时发现没有变为 B 我就告警出来。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3335"}},[t._v("在实际业务中，首先根据不同的业务场景、逻辑规则和资金、资产的变化，梳理出一个个核对公式，这部分其实在风险点梳理时就应该有整理。然后通过系统实时判断等式左右两边本应该相等数据是否一致，一旦不一致则告警出来。举几个简单的例子。")]),t._v(" "),d("ul",{attrs:{"data-nodeid":"3336"}},[d("li",{attrs:{"data-nodeid":"3337"}},[d("p",{attrs:{"data-nodeid":"3338"}},[d("strong",{attrs:{"data-nodeid":"3535"}},[t._v("积分发放：")]),t._v(" 积分系统发放 100 积分给用户 A = A 用户账户中新增 100 积分")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"3339"}},[d("p",{attrs:{"data-nodeid":"3340"}},[d("strong",{attrs:{"data-nodeid":"3540"}},[t._v("库存扣减：")]),t._v(" 订单系统生成包含 2 件 A 商品的订单 = 商品系统中 A 商品库存减 2")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"3341"}},[d("p",{attrs:{"data-nodeid":"3342"}},[d("strong",{attrs:{"data-nodeid":"3547"}},[t._v("下单返红包：")]),t._v(" 用户支付金额 * 返还比例 = 用户账户新增红包金额")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"3343"}},[t._v("其中，资产的转移发放是比较清晰简单的，涉及资金组成（比如订单金额计算）的公式就会更复杂一些，但是核对的原理是类似的，都是基于业务场景顺着资金或资产流向建立一个个核对公式，在每一次资金或资产变动时，都会通过核对公式左右是否一致判断是否有资损发生。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3344"}},[d("strong",{attrs:{"data-nodeid":"3553"}},[t._v("这里需要技术 Leader 注意，")]),t._v(" 与可用性监控围绕接口的技术指标不同，资损更关注的是数据核对，监控的并不是运行状态而是运行结果，并且资损监控的粒度要求非常高，精细到每一笔交易、每一次金额计算、每一个红包发放。所以资损监控的有效性很依赖于场景的覆盖率，仅覆盖几个关键场景是不足以规避资损风险的，除了要定期梳理外，每次系统有变更或者新功能时，都需检查是否有新的核对点，以及旧有核对公式是否需要调整。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3345"}},[d("img",{attrs:{alt:"图片4.png",src:"https://s0.lgstatic.com/i/image2/M01/0A/9D/CgpVE2ASY1aARH-TAAHJrR1s-W0317.png","data-nodeid":"3556"}})]),t._v(" "),d("div",{attrs:{"data-nodeid":"5777"}},[d("p",{staticStyle:{"text-align":"center"}},[d("span",{staticStyle:{color:"#b8b8b8"}},[t._v("资损监控核对")])])]),t._v(" "),d("h4",{attrs:{"data-nodeid":"3347"}},[t._v("3. 控：资金拦截 + 资产控制")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3348"}},[t._v("除了防和监，资损防控的关键主要在“控”字上，我们希望在问题发生后第一时间止损，"),d("strong",{attrs:{"data-nodeid":"3567"}},[t._v("这就需要技术在系统层面对资金和资产有很强的控制能力。这种能力的表现就是：")]),t._v(" 不仅可以通过预案将某些场景与链路降级，还可以拦截资金的流出和资产的使用，同时具备快速订正错误数据的能力。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3349"}},[t._v("在我们开始处理资损事故时，会有三个共性的需求。")]),t._v(" "),d("ul",{attrs:{"data-nodeid":"3350"}},[d("li",{attrs:{"data-nodeid":"3351"}},[d("p",{attrs:{"data-nodeid":"3352"}},[d("strong",{attrs:{"data-nodeid":"3573"}},[t._v("问题止血不新增")]),t._v("：核心是关闭问题产生源头，往往通过业务场景降级来实现，比如对错误红包或者满减活动进行下线。")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"3353"}},[d("p",{attrs:{"data-nodeid":"3354"}},[d("strong",{attrs:{"data-nodeid":"3578"}},[t._v("控制资金流出")]),t._v("：核心是对资金和资产进行拦截与冻结，避免外流后损失无法修正，比如禁止用户下单时勾选使用有问题的红包。")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"3355"}},[d("p",{attrs:{"data-nodeid":"3356"}},[d("strong",{attrs:{"data-nodeid":"3583"}},[t._v("存量数据订正")]),t._v("：核心是捞取问题数据后可以快速地批量处理，比如批量更改红包的金额、甚至直接将红包无效。")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"3357"}},[t._v("虽然其中一些操作对用户体验是有损的，"),d("strong",{attrs:{"data-nodeid":"3588"}},[t._v("但有而不用是一回事儿，无能为力则是另外一回事儿，其中：")])]),t._v(" "),d("ul",{attrs:{"data-nodeid":"3358"}},[d("li",{attrs:{"data-nodeid":"3359"}},[d("p",{attrs:{"data-nodeid":"3360"}},[d("strong",{attrs:{"data-nodeid":"3593"}},[t._v("资金拦截")]),t._v("的能力主要从资金的流入和流出这两端进行把控。以红包而言就是管控其创建与核销。在红包创建时，有预算系统进行管控，避免无限制地生成红包进而超发。在红包核销时，由交易和营销系统进行验证，确保订单上下文以及红包合法，避免问题红包被核销进而造成无法挽回的资损。")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"3361"}},[d("p",{attrs:{"data-nodeid":"3362"}},[d("strong",{attrs:{"data-nodeid":"3598"}},[t._v("资产管控")]),t._v("的能力则是资产的快速锁定和数据订正展开，以红包而言，如果不同模版不同活动的红包都有一个统一的批次号，就可以通过这个标记快速捞取某一批有问题的数据。同时如果提前准备批量订正的脚本，或者有订正数据的平台，就可以快速修改红包金额、使用时间、使用门槛等关键信息，甚至批量无效所有问题红包。")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"3363"}},[t._v("你需要注意，这些能力的实现更多依赖于技术 Leader 在日常需求迭代和架构设计时，是否有意识引导团队加强这方面的建设。大部分的预案思路来源于过去已经发生的问题，或者对未来可能发生问题的假设，将预案常态化是你重点关注并推进落地的。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3364"}},[t._v("除了建设预案，还要有预案演练，以此保证预案的有效性。技术 Leader 更应该鼓励测试和开发的同学主动做攻防演练，寻找漏洞、验证止损方案、及时发现并修复问题。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3365"}},[d("img",{attrs:{alt:"图片6.png",src:"https://s0.lgstatic.com/i/image2/M01/0A/9B/Cip5yGASY2aAan_KAAHwX7CkMbQ394.png","data-nodeid":"3603"}})]),t._v(" "),d("div",{staticClass:"te-preview-highlight",attrs:{"data-nodeid":"6496"}},[d("p",{staticStyle:{"text-align":"center"}},[d("span",{staticStyle:{color:"#b8b8b8"}},[t._v("资损预案止损")])])]),t._v(" "),d("h3",{attrs:{"data-nodeid":"3367"}},[t._v("小结")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3368"}},[t._v("资损事故很特殊，除非之前有过金融行业的从业经验或者在这方面吃过大亏，否则很容易忽视其在系统中的风险。今天这一讲，我强调这样几个关键点：")]),t._v(" "),d("ul",{attrs:{"data-nodeid":"3369"}},[d("li",{attrs:{"data-nodeid":"3370"}},[d("p",{attrs:{"data-nodeid":"3371"}},[t._v("技术 Leader 应该加深对资损概念的理解，并引导团队加强这方面的认识；")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"3372"}},[d("p",{attrs:{"data-nodeid":"3373"}},[t._v("围绕你负责的业务，构建风险梳理的“套路”，排查隐患；")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"3374"}},[d("p",{attrs:{"data-nodeid":"3375"}},[t._v("重点围绕业务场景打造高覆盖度的监控核对，早发现、早治疗、少损失；")])]),t._v(" "),d("li",{attrs:{"data-nodeid":"3376"}},[d("p",{attrs:{"data-nodeid":"3377"}},[t._v("尊重墨菲定律，围绕可能发生的问题做好预案和演练。")])])]),t._v(" "),d("p",{attrs:{"data-nodeid":"3378"}},[t._v("在稳定性这个领域，不论是可用性还是资损，都是将系统中大量不确定性的风险识别出来，通过各种手段降低风险的过程。想要改变一件事，先要对其有足够的认识和理解，技术 Leader 在这个过程中应该起主导作用，看到别人看不到的，想到别人没想到的，引领团队往正确的方向走。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3379"}},[d("img",{attrs:{alt:"图片5.png",src:"https://s0.lgstatic.com/i/image2/M01/0A/9E/CgpVE2ASY3WAF33QAAE50Zm97VM138.png","data-nodeid":"3613"}})]),t._v(" "),d("p",{attrs:{"data-nodeid":"3380"}},[d("strong",{attrs:{"data-nodeid":"3618"}},[t._v("留个作业：")]),t._v(" 尝试从资金风险的角度去梳理一下你负责的系统，看看都存在哪些资损风险点，以及如何治理这些问题。")]),t._v(" "),d("p",{attrs:{"data-nodeid":"3381"}},[t._v("最后，感谢你的阅读，如果这节课让你有收获，欢迎你将它分享给其他的朋友，我们下一讲见。")]),t._v(" "),d("hr"),t._v(" "),d("h3",{attrs:{id:"精选评论"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#精选评论"}},[t._v("#")]),t._v(" 精选评论")]),t._v(" "),d("h5",{attrs:{id:"叔叔"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#叔叔"}},[t._v("#")]),t._v(" **叔叔：")]),t._v(" "),d("blockquote",[d("p",[t._v("如若上升到资金类事故，无论大小，事故等级均会上升很高。技术防控是一部分，比较难抓的是业务链路，技术leader对业务链路也要全盘了解，业务漏洞会导致整体的设计方案出现缺陷，从而造成资金损失")])]),t._v(" "),d("h6",{attrs:{id:"讲师回复"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),d("blockquote",[d("p",[t._v("    很多时候资损产生和系统故障并不是同时发生的，也没有绝对的关联关系")])])])}),[],!1,null,null,null);a.default=i.exports}}]);