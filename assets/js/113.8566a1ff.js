(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{582:function(t,a,s){"use strict";s.r(a);var d=s(19),_=Object(d.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",{attrs:{"data-nodeid":"1057"}},[t._v("在上两讲里分别介绍了使用数据库和纯缓存实现的扣减方案。在需求层面上，上述两者都能实现业务需求。但均存在一些缺陷：")]),t._v(" "),s("ul",{attrs:{"data-nodeid":"1058"}},[s("li",{attrs:{"data-nodeid":"1059"}},[s("p",{attrs:{"data-nodeid":"1060"}},[t._v("数据库方案的性能较差；")])]),t._v(" "),s("li",{attrs:{"data-nodeid":"1061"}},[s("p",{attrs:{"data-nodeid":"1062"}},[t._v("纯缓存方案虽不会导致超卖，但因缓存不具备事务特性，极端情况下会存在缓存里的数据无法回滚，导致出现少卖的情况。且因“"),s("a",{attrs:{href:"https://kaiwu.lagou.com/course/courseInfo.htm?courseId=595#/detail/pc?id=6138","data-nodeid":"1137"}},[t._v("第 13 讲")]),t._v("”是异步写库，也可能发生异步写库失败，导致多扣的数据再也无法找回的情况。")])])]),t._v(" "),s("p",{attrs:{"data-nodeid":"1063"}},[t._v("因此，本讲将向你介绍一种新的实现方案——使用数据库+缓存的方式规避上述存在的潜在问题。")]),t._v(" "),s("h3",{attrs:{"data-nodeid":"1842"}},[t._v("顺序写的性能更好")]),t._v(" "),s("p",{attrs:{"data-nodeid":"2368"}},[t._v("本讲的方案是借助了“"),s("strong",{attrs:{"data-nodeid":"2374"}},[t._v("顺序写要比随机更新性能好")]),t._v("”这个特性进行设计的。")]),t._v(" "),s("p",{attrs:{"data-nodeid":"3441"}},[s("strong",{attrs:{"data-nodeid":"3446"}},[t._v("在向磁盘进行数据操作时，向文件末尾不断追加写入的性能要远大于随机修改的性能")]),t._v("。因为对于传统的机械硬盘来说，每一次的随机更新都需要机械键盘的磁头在硬盘的盘面上进行寻址，再去更新目标数据，这种方式十分消耗性能。而向文件末尾追加写入，每一次的写入只需要磁头一次寻址，将磁头定位到文件末尾即可，后续的顺序写入不断追加即可。")]),t._v(" "),s("p",{attrs:{"data-nodeid":"2907"}},[t._v("对于固态硬盘来说，虽然避免了磁头移动，但依然存在一定的寻址过程。此外，对文件内容的随机更新和数据库的表更新比较类似，都存在加锁带来的性能消耗。")]),t._v(" "),s("p",{attrs:{"data-nodeid":"1067"}},[s("strong",{attrs:{"data-nodeid":"1151"}},[t._v("数据库同样是插入要比更新的性能好")]),t._v("。对于数据库的更新，为了保证对同一条数据并发更新的一致性，会在更新时增加锁，但加锁是十分消耗性能的。此外，对于没有索引的更新条件，要想找到需要更新的那条数据，需要遍历整张表，时间复杂度为 O(N)。而插入只在末尾进行追加，性能非常好。")]),t._v(" "),s("h3",{attrs:{"data-nodeid":"1068"}},[t._v("借力顺序写的架构")]),t._v(" "),s("p",{attrs:{"data-nodeid":"1069"}},[t._v("有了上述的理论基础后，只要对上一讲的架构稍做变更，就可以得到兼具性能和高可靠的扣减架构了，整体架构如下图 1 所示：")]),t._v(" "),s("p",{attrs:{"data-nodeid":"1070"}},[s("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M01/05/79/CioPOWAwyQ6AWdJwAACfPtIGbZQ225.png",alt:"Drawing 0.png","data-nodeid":"1156"}})]),t._v(" "),s("div",{attrs:{"data-nodeid":"1071"}},[s("p",{staticStyle:{"text-align":"center"}},[t._v("图 1：兼具性能和更加高可靠的扣减架构")])]),t._v(" "),s("p",{attrs:{"data-nodeid":"1072"}},[t._v("上述的架构和纯缓存的架构区别在于，"),s("strong",{attrs:{"data-nodeid":"1162"}},[t._v("写入数据库不是异步写入，而是在扣减的时候同步写入")]),t._v("。")]),t._v(" "),s("p",{attrs:{"data-nodeid":"1073"}},[t._v("这里你可能会有些疑问：同步的写入数据库是不是和“"),s("a",{attrs:{href:"https://kaiwu.lagou.com/course/courseInfo.htm?courseId=595#/detail/pc?id=6137","data-nodeid":"1166"}},[t._v("第 12 讲")]),t._v("”讲述的内容类似？且数据库扣减的性能对于海量并发是扛不住的，这个方案是不是在倒退？")]),t._v(" "),s("p",{attrs:{"data-nodeid":"1074"}},[t._v("如果你仔细看架构图，会发现并非如此。同步写入数据库使用是 insert 操作，也就是顺序写，而不是 update 做数据库数量的扣减。因此，它的性能较好。")]),t._v(" "),s("p",{attrs:{"data-nodeid":"5057"}},[t._v("insert 的数据库称为"),s("strong",{attrs:{"data-nodeid":"5063"}},[t._v("任务库")]),t._v("，它只存储每次扣减的原始数据，而不做真实扣减（即不进行 update）。它的表结构大致如下：")]),t._v(" "),s("pre",{staticClass:"lang-java",attrs:{"data-nodeid":"1076"}},[s("code",{attrs:{"data-language":"java"}},[t._v("create table task{\n  id bigint not "),s("span",{staticClass:"hljs-keyword"},[t._v("null")]),t._v(" comment "),s("span",{staticClass:"hljs-string"},[t._v('"任务顺序编号"')]),t._v(",\n  task_id bigint not "),s("span",{staticClass:"hljs-keyword"},[t._v("null")]),t._v(" \n}\n")])]),t._v(" "),s("p",{attrs:{"data-nodeid":"1077"}},[t._v("任务表里存储的内容格式可以为 JSON、XML 等结构化的数据。以 JSON 为例，数据内容大致可以如下：")]),t._v(" "),s("pre",{staticClass:"lang-java",attrs:{"data-nodeid":"1078"}},[s("code",{attrs:{"data-language":"java"}},[t._v("{\n  "),s("span",{staticClass:"hljs-string"},[t._v('"扣减号"')]),t._v(":uuid,\n  "),s("span",{staticClass:"hljs-string"},[t._v('"skuid1"')]),t._v(":"),s("span",{staticClass:"hljs-string"},[t._v('"数量"')]),t._v(",\n  "),s("span",{staticClass:"hljs-string"},[t._v('"skuid2"')]),t._v(":"),s("span",{staticClass:"hljs-string"},[t._v('"数量"')]),t._v(",\n  "),s("span",{staticClass:"hljs-string"},[t._v('"xxxx"')]),t._v(":"),s("span",{staticClass:"hljs-string"},[t._v('"xxxx"')]),t._v("\n}\n")])]),t._v(" "),s("p",{attrs:{"data-nodeid":"6664"}},[t._v("在上述架构里，还有一个**正式业务库，这里面存储的才是真正的扣减明细和 SKU 的汇总数据。对于正式库里的数据，通过任务表的任务进行同步即可，此种方式保证了数据的最终一致性。")]),t._v(" "),s("h3",{attrs:{"data-nodeid":"1080"}},[t._v("扣减流程")]),t._v(" "),s("p",{attrs:{"data-nodeid":"1081"}},[t._v("在引入了任务表之后，整体的扣减流程如下图 2 所示：")]),t._v(" "),s("p",{attrs:{"data-nodeid":"1082"}},[s("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/05/7C/Cgp9HWAwySGAOrtLAADfkL8uxjA721.png",alt:"Drawing 2.png","data-nodeid":"1187"}})]),t._v(" "),s("div",{attrs:{"data-nodeid":"1083"}},[s("p",{staticStyle:{"text-align":"center"}},[t._v("图 2：基于任务的扣减流程")])]),t._v(" "),s("p",{attrs:{"data-nodeid":"1084"}},[t._v("上述的流程"),s("strong",{attrs:{"data-nodeid":"1193"}},[t._v("和纯缓存的区别在于增加了事务开启与回滚的步骤，以及同步的数据库写入流程")]),t._v("，详细分析如下。")]),t._v(" "),s("ol",{attrs:{"data-nodeid":"11850"}},[s("li",{attrs:{"data-nodeid":"11851"}},[s("p",{attrs:{"data-nodeid":"11852"}},[t._v("首先是前置业务参数检验（包含基础参数、数量检验等），此步骤在本讲和前两讲的方案里都有。可以说，任何对外接口此功能都是不可或缺的，是完成业务验证性的必要一环。")])]),t._v(" "),s("li",{attrs:{"data-nodeid":"11853"}},[s("p",{attrs:{"data-nodeid":"11854"}},[t._v("然后在图中编号 2 处，开始数据事务。")])]),t._v(" "),s("li",{attrs:{"data-nodeid":"11855"}},[s("p",{attrs:{"data-nodeid":"11856"}},[t._v("当开始事务后，首先将此次序列化后的扣减明细写入到扣减数据库中的任务表里。")])]),t._v(" "),s("li",{attrs:{"data-nodeid":"11857"}},[s("p",{attrs:{"data-nodeid":"11858"}},[t._v("假设数据库插入扣减明细失败，则事务回滚，任务表中无新增数据，数据一致，无任何影响。")])]),t._v(" "),s("li",{attrs:{"data-nodeid":"11859"}},[s("p",{attrs:{"data-nodeid":"11860"}},[t._v("当数据库插入扣减明细成功后，便针对缓存进行扣减。和上一讲保持一致，使用 lua 等功能进行扣减即可。")])]),t._v(" "),s("li",{attrs:{"data-nodeid":"11861"}},[s("p",{attrs:{"data-nodeid":"11862"}},[t._v("如果缓存扣减成功，也就是流程正常结束，提交数据库事务，给客户返回扣减成功。")])]),t._v(" "),s("li",{attrs:{"data-nodeid":"11863"}},[s("p",{attrs:{"data-nodeid":"11864"}},[t._v("如果缓存扣减失败，有可能有两大类原因。")]),t._v(" "),s("ol",{attrs:{"data-nodeid":"11865"}},[s("li",{attrs:{"data-nodeid":"11866"}},[s("p",{attrs:{"data-nodeid":"11867"}},[t._v("一类原因是此次"),s("strong",{attrs:{"data-nodeid":"11883"}},[t._v("扣减的数量不够")]),t._v("，比如缓存里有 5 个数量，而实际此次扣减需要 10 个。当判断数量不够后，便调用缓存的归还并将数据库进行回滚即可。")])]),t._v(" "),s("li",{attrs:{"data-nodeid":"11868"}},[s("p",{attrs:{"data-nodeid":"11869"}},[t._v("第二类原因是缓"),s("strong",{attrs:{"data-nodeid":"11893"}},[t._v("存出现故障，导致扣减失败")]),t._v("。缓存失败的可能性有很多，比如网络不通、调用缓存扣减超时、在扣减到一半时缓存突然宕机（故障 failover）了，以及在上述返回的过程中产生异常等。"),s("strong",{attrs:{"data-nodeid":"11894"}},[t._v("针对上述请求，都有相应的异常抛出，根据异常进行数据库回滚即可，最终任务库里的数据都是准的")]),t._v("。")])])])])]),t._v(" "),s("p",{attrs:{"data-nodeid":"12430"}},[t._v("完成上述步骤之后，便可以进行任务库里的数据处理了。任务库里存储的是纯文本的 JSON 数据，无法被直接使用。需要将其中的数据转储至实际的业务库里。业务库里会存储两类数据，一类是每次扣减的流水数据，它与任务表里的数据区别在于它是结构化，而不是 JSON 文本的大字段内容。另外一类是汇总数据，即每一个 SKU 当前总共有多少量，当前还剩余多少量（即从任务库同步时需要进行扣减的），表结构大致如下：")]),t._v(" "),s("pre",{staticClass:"lang-sql",attrs:{"data-nodeid":"1107"}},[s("code",{attrs:{"data-language":"sql"}},[s("span",{staticClass:"hljs-keyword"},[t._v("create")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("table")]),t._v(" 流水表{\n  "),s("span",{staticClass:"hljs-keyword"},[t._v("id")]),t._v(" "),s("span",{staticClass:"hljs-built_in"},[t._v("bigint")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("not")]),t._v(" "),s("span",{staticClass:"hljs-literal"},[t._v("null")]),t._v(",\n  "),s("span",{staticClass:"hljs-keyword"},[t._v("uuid")]),t._v(" "),s("span",{staticClass:"hljs-built_in"},[t._v("bigint")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("not")]),t._v(" "),s("span",{staticClass:"hljs-literal"},[t._v("null")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("comment")]),t._v(" "),s("span",{staticClass:"hljs-string"},[t._v("'扣减编号'")]),t._v(",\n  sku_id "),s("span",{staticClass:"hljs-built_in"},[t._v("bigint")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("not")]),t._v(" "),s("span",{staticClass:"hljs-literal"},[t._v("null")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("comment")]),t._v(" "),s("span",{staticClass:"hljs-string"},[t._v("'商品编号'")]),t._v(",\n  "),s("span",{staticClass:"hljs-keyword"},[t._v("num")]),t._v(" "),s("span",{staticClass:"hljs-built_in"},[t._v("int")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("not")]),t._v(" "),s("span",{staticClass:"hljs-literal"},[t._v("null")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("comment")]),t._v(" "),s("span",{staticClass:"hljs-string"},[t._v("'当次扣减的数量'")]),t._v(" \n}"),s("span",{staticClass:"hljs-keyword"},[t._v("comment")]),t._v(" "),s("span",{staticClass:"hljs-string"},[t._v("'扣减流水表'")]),t._v("\n")])]),t._v(" "),s("p",{attrs:{"data-nodeid":"23164"}},[t._v("商品的实时数据汇总表，结构如下：")]),t._v(" "),s("pre",{staticClass:"lang-sql",attrs:{"data-nodeid":"27710"}},[s("code",{attrs:{"data-language":"sql"}},[s("span",{staticClass:"hljs-keyword"},[t._v("create")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("table")]),t._v(" 汇总表{\n  "),s("span",{staticClass:"hljs-keyword"},[t._v("id")]),t._v(" bitint "),s("span",{staticClass:"hljs-keyword"},[t._v("not")]),t._v(" "),s("span",{staticClass:"hljs-literal"},[t._v("null")]),t._v(",\n  sku_id "),s("span",{staticClass:"hljs-keyword"},[t._v("unsigned")]),t._v(" "),s("span",{staticClass:"hljs-built_in"},[t._v("bigint")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("not")]),t._v(" "),s("span",{staticClass:"hljs-literal"},[t._v("null")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("comment")]),t._v(" "),s("span",{staticClass:"hljs-string"},[t._v("'商品编号'")]),t._v(",\n  total_num "),s("span",{staticClass:"hljs-keyword"},[t._v("unsigned")]),t._v(" "),s("span",{staticClass:"hljs-built_in"},[t._v("int")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("not")]),t._v(" "),s("span",{staticClass:"hljs-literal"},[t._v("null")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("comment")]),t._v(" "),s("span",{staticClass:"hljs-string"},[t._v("'总数量'")]),t._v(",\n  leaved_num "),s("span",{staticClass:"hljs-keyword"},[t._v("unsigned")]),t._v(" "),s("span",{staticClass:"hljs-built_in"},[t._v("int")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("not")]),t._v(" "),s("span",{staticClass:"hljs-literal"},[t._v("null")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("comment")]),t._v(" "),s("span",{staticClass:"hljs-string"},[t._v("'当前剩余的商品数量'")]),t._v("\n}"),s("span",{staticClass:"hljs-keyword"},[t._v("comment")]),t._v(" "),s("span",{staticClass:"hljs-string"},[t._v("'记录表'")]),t._v("\n")])]),t._v(" "),s("h4",{attrs:{"data-nodeid":"1110"}},[t._v("原理分析")]),t._v(" "),s("p",{attrs:{"data-nodeid":"1111"}},[t._v("本讲介绍的数据库+缓存的架构主要利用了"),s("strong",{attrs:{"data-nodeid":"1240"}},[t._v("数据库顺序写入要比更新性能快")]),t._v("的这一特性。此外，在写入的基础之上，又利用了"),s("strong",{attrs:{"data-nodeid":"1241"}},[t._v("数据库的事务特性来保证数据的最终一致性")]),t._v("。当异常出现后，通过事务进行回滚，来保证数据库里的数据不会丢失。")]),t._v(" "),s("p",{attrs:{"data-nodeid":"1112"}},[t._v("在整体的流程上，还是复用了上一讲纯缓存的架构流程。当新加入一个商品，或者对已有商品进行补货时，对应的新增商品数量都会通过 Binlog 同步至缓存里。在扣减时，依然以缓存中的数量为准。补货或新增商品的数据同步架构如下图 3 所示：")]),t._v(" "),s("p",{attrs:{"data-nodeid":"1113"}},[s("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/05/79/CioPOWAwyUCAcJrrAAC-K44fcVU378.png",alt:"Drawing 4.png","data-nodeid":"1245"}})]),t._v(" "),s("div",{attrs:{"data-nodeid":"1114"}},[s("p",{staticStyle:{"text-align":"center"}},[t._v("图 3：补货或新增商品的数据同步架构图")])]),t._v(" "),s("p",{attrs:{"data-nodeid":"18601"}},[t._v("这里你可能会产生疑问：通过任务库同步至正式业务库里那份数据岂不是没用了？当然不是。"),s("strong",{attrs:{"data-nodeid":"18611"}},[t._v("正式业务库异构的那份扣减明细和 SKU 当前实时剩余数量的数据，是最为准确的一份数据，我们以它作为数据对比的基准")]),t._v("。如果发现缓存中的数据不一致，就可以及时进行修复。对于数据校准，你可以参考“"),s("a",{attrs:{href:"https://kaiwu.lagou.com/course/courseInfo.htm?courseId=595#/detail/pc?id=6130","data-nodeid":"18609"}},[t._v("第 05 讲")]),t._v("”里介绍的方案。")]),t._v(" "),s("p",{attrs:{"data-nodeid":"1116"}},[t._v("比如，当缓存扣减完成后，我们的应用客户端重启了，此时外部调用方的连接会断开，外部调用方判断此次调用失败。但因突然重启，当次完成的扣减在缓存里是没有完成返还的。但数据库采用的是事务，客户端重启时，事务就自动回滚了。此时，数据库的数据是正确的，但缓存的数据是少的。")]),t._v(" "),s("p",{attrs:{"data-nodeid":"28215"}},[t._v("在纯缓存的方案里，如果当时的异步刷库也失败了，则缓存数据一直都是少卖的。而数据库+缓存的方案，只会在一定时间出现少卖的情况，最终的数据一定是一致的。此方案会保证任务数据库和正式业务数据库里的数据准确性，出现故障后基于正式数据库进行异步对比修复即可。这便是两种方案的差异所在。")]),t._v(" "),s("h4",{attrs:{"data-nodeid":"1118"}},[t._v("性能提升")]),t._v(" "),s("p",{attrs:{"data-nodeid":"28721"}},[t._v("进行方案升级后，我们便完成了一个更加可靠的扣减架构，且使用任务数据库的顺序插入也保证了一定的性能。但总的来说，即使是基于数据库的顺序插入，缓存操作的性能和数据库的顺序插入也不是一个量级，那么如何提升顺序插入任务数据库的性能和吞吐量呢？")]),t._v(" "),s("p",{attrs:{"data-nodeid":"1120"}},[t._v("这里我们回顾一下在“"),s("a",{attrs:{href:"https://kaiwu.lagou.com/course/courseInfo.htm?courseId=595#/detail/pc?id=6134","data-nodeid":"1263"}},[t._v("第 9 讲")]),t._v("”（无状态存储）里介绍的内容和理念——"),s("strong",{attrs:{"data-nodeid":"1277"}},[t._v("通过无状态的存储提升可用性")]),t._v("。同样的逻辑，"),s("strong",{attrs:{"data-nodeid":"1278"}},[t._v("任务库主要提供两个作用，一个是事务支持，其次是随机的扣减流水任务的存取")]),t._v("。这两个功能均不依赖具体的路由规则，也是随机的、无状态的。因此，可以借鉴“"),s("a",{attrs:{href:"https://kaiwu.lagou.com/course/courseInfo.htm?courseId=595#/detail/pc?id=6134","data-nodeid":"1275"}},[t._v("第 9 讲")]),t._v("”的架构对本讲的内容进行升级，升级后的架构如下图 4 所示：")]),t._v(" "),s("p",{attrs:{"data-nodeid":"1121"}},[s("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/05/7D/Cgp9HWAwyUuAYlA9AAECkv_ImAo470.png",alt:"Drawing 6.png","data-nodeid":"1281"}})]),t._v(" "),s("div",{attrs:{"data-nodeid":"1122"}},[s("p",{staticStyle:{"text-align":"center"}},[t._v("图 4：无状态存储的架构图")])]),t._v(" "),s("p",{staticClass:"te-preview-highlight",attrs:{"data-nodeid":"29733"}},[t._v("采用无状态存储后，任务库便可以进行水平扩展了，在性能和高可用上得到进一步的加强。具体的细节原理和落地步骤，你可以参考“"),s("a",{attrs:{href:"https://kaiwu.lagou.com/course/courseInfo.htm?courseId=595#/detail/pc?id=6134","data-nodeid":"29737"}},[t._v("第 9 讲")]),t._v("”，这里不再赘述。")]),t._v(" "),s("h4",{attrs:{"data-nodeid":"1124"}},[t._v("数据同步")]),t._v(" "),s("p",{attrs:{"data-nodeid":"1125"}},[t._v("任务库和业务正式库之间的数据同步和“"),s("a",{attrs:{href:"https://kaiwu.lagou.com/course/courseInfo.htm?courseId=595#/detail/pc?id=6134","data-nodeid":"1287"}},[t._v("第 9 讲")]),t._v("”里介绍的无状态的存储基本类似，但整体实现上会更加简单。因为在业务上，扣"),s("strong",{attrs:{"data-nodeid":"1293"}},[t._v("减前置依赖的均是缓存里的数据，业务正式库里的数据只用来做兜底使用")]),t._v("。因此最终只要使用 Worker 将数据从任务库同步至业务正式库即可，架构如下图 5 所示：")]),t._v(" "),s("p",{attrs:{"data-nodeid":"1126"}},[s("img",{attrs:{src:"https://s0.lgstatic.com/i/image6/M00/05/7D/Cgp9HWAwyVWADsz1AACynQcYQUU915.png",alt:"Drawing 8.png","data-nodeid":"1296"}})]),t._v(" "),s("div",{attrs:{"data-nodeid":"1127"}},[s("p",{staticStyle:{"text-align":"center"}},[t._v("图 5：Worker 架构图")])]),t._v(" "),s("h3",{attrs:{"data-nodeid":"1128"}},[t._v("总结")]),t._v(" "),s("p",{attrs:{"data-nodeid":"1129"}},[t._v("在本讲里，我们介绍了通过"),s("strong",{attrs:{"data-nodeid":"1307"}},[t._v("缓存和数据库结合")]),t._v("的方式，实现了一个更加可靠的扣减方案。相比纯缓存方案，即使使用了无状态的分库存储，它的性能也会有一定的损耗。但此方案的好处在于"),s("strong",{attrs:{"data-nodeid":"1308"}},[t._v("数据更精准、更可靠")]),t._v("。对于类似额度扣减、实物库存扣减等场景，此方案均适用。而对于一些虚拟的次数限制，同时业务上能够容忍在一定概率下数据不准确的场景，也可以选择纯缓存的扣减方案。")]),t._v(" "),s("p",{attrs:{"data-nodeid":"1130"}},[t._v("此外，“"),s("strong",{attrs:{"data-nodeid":"1314"}},[t._v("顺序追加写要比随机修改的性能好")]),t._v("”这个技巧，其实在很多场景里都有应用，是一个值得你深入学习和理解的技能。比如数据库的 Redo log、Undo log；Elasticsearch 里的 Translog 都是先将数据按非结构化的方式顺序写入日志文件里，再进行正常的变更。当出现宕机后，采用日志进行数据恢复。")]),t._v(" "),s("p",{attrs:{"data-nodeid":"1131"}},[t._v("经过“12、13、14”这三讲的学习，我想你对“扣减”相关的内容已经掌握得如鱼得水了，欢迎你动一动手指，在留言区写一写思考、做一做总结。如果你对哪里有疑问，也可以在留言区提问，咱们一起讨论。")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"精选评论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#精选评论"}},[t._v("#")]),t._v(" 精选评论")]),t._v(" "),s("h5",{attrs:{id:"杰"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#杰"}},[t._v("#")]),t._v(" **杰：")]),t._v(" "),s("blockquote",[s("p",[t._v("先开启数据库事务了，在事务里面又操作Redis，这不是违反了在事务里操作网络、RPC等原则吗？")])]),t._v(" "),s("h6",{attrs:{id:"讲师回复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),s("blockquote",[s("p",[t._v("    是的，掌握的很到位。这个算是为了满足特定业务场景，一种降级的方案。但并不提倡，如果需要这样用，一定要做好异常的分析。")])]),t._v(" "),s("h5",{attrs:{id:"西"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#西"}},[t._v("#")]),t._v(" *西：")]),t._v(" "),s("blockquote",[s("p",[t._v("老师，你好。这个方案里面，如果不追加写任务表，而是把上一讲中的异步线程更新数据库换成写mq是不是也可以？用rocketmq的事务消息机制来保证消息一定发送成功，然后消费方消费mq消息去异步更新数据库的库存不就好了？")])]),t._v(" "),s("h6",{attrs:{id:"讲师回复-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-2"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),s("blockquote",[s("p",[t._v("    用事务消息机制，和用数据库的事务是异曲同工的。都是可以的。")])]),t._v(" "),s("h5",{attrs:{id:"烽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#烽"}},[t._v("#")]),t._v(" **烽：")]),t._v(" "),s("blockquote",[s("p",[t._v("老师，基于从事的场景架构比较简单，看了文章发现还有个疑问：（数据库+缓存的方案，只会在一定时间出现少卖的情况，最终的数据一定是一致的）， 这个缓存和数据库数据一致性的保障 是源于 有 数据对比程序 的存在，会 更新缓存中的 数量 的原因吗？")])]),t._v(" "),s("h6",{attrs:{id:"讲师回复-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-3"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),s("blockquote",[s("p",[t._v("    对的")])]),t._v(" "),s("h5",{attrs:{id:"烽-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#烽-2"}},[t._v("#")]),t._v(" **烽：")]),t._v(" "),s("blockquote",[s("p",[t._v("老师，有个问题请教下。我看了文章多遍，总有个疑问。 针对 任务库 和 正式库的关系问题， 正式库中的 汇总表 是 应该 先初始化 商品的 总量信息吧？ 然后 在 从 任务库中的 扣减信息 同步到 正式库中的 汇总表，进行 数量的更新是吗？")])]),t._v(" "),s("h6",{attrs:{id:"讲师回复-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-4"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),s("blockquote",[s("p",[t._v("    是的哈")])]),t._v(" "),s("h5",{attrs:{id:"_2868"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2868"}},[t._v("#")]),t._v(" **2868：")]),t._v(" "),s("blockquote",[s("p",[t._v("Binlog同步有个问题，就是收到这个消息后，反查不一定能查到。两个可能原因，一是反查的时候查的从库，但是数据还没有同步过去，二是查的主库，但是commit的时间太长（机器io问题等），导致查的时候还没提交完，一般重试可解决")])]),t._v(" "),s("h5",{attrs:{id:"_1442"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1442"}},[t._v("#")]),t._v(" **1442：")]),t._v(" "),s("blockquote",[s("p",[t._v("图3感觉有问题，先在redis里面扣减了库存，binlog又扣减一次（除非加个字段把运营的和程序扣减的区分开）")])]),t._v(" "),s("h6",{attrs:{id:"讲师回复-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-5"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),s("blockquote",[s("p",[t._v("    图没有错哈，就是需要加个字段把运营的和程序扣减的区分开")])]),t._v(" "),s("h5",{attrs:{id:"中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中"}},[t._v("#")]),t._v(" *中：")]),t._v(" "),s("blockquote",[s("p",[t._v("在扣减过程，1和2在同一个事物，若1，2均成功在提交事物宕机过异常，缓存中的数据不能恢复")])]),t._v(" "),s("h5",{attrs:{id:"龙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#龙"}},[t._v("#")]),t._v(" **龙：")]),t._v(" "),s("blockquote",[s("p",[t._v("库存没有锁定状态吗")])]),t._v(" "),s("h6",{attrs:{id:"讲师回复-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-6"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),s("blockquote",[s("p",[t._v("    没有锁定状态，增加这个状态复杂度会很大，同时这个状态并不是必须的")])]),t._v(" "),s("h5",{attrs:{id:"风"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#风"}},[t._v("#")]),t._v(" 风：")]),t._v(" "),s("blockquote",[s("p",[t._v("图5中的第一步insert和第二步缓存请求是同时进行的吗，刚开始客户端请求的时候要先在缓存中判断下sku的数量吧，如果缓存中的sku数量大于购买的数量才insert到任务库中，对吧")])]),t._v(" "),s("h6",{attrs:{id:"讲师回复-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-7"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),s("blockquote",[s("p",[t._v("    是的，这个12、13讲里都有，前置拦截是通用都需要的。")])]),t._v(" "),s("h5",{attrs:{id:"风-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#风-2"}},[t._v("#")]),t._v(" 风：")]),t._v(" "),s("blockquote",[s("p",[t._v("那前置的redis是用来客户端查询和扣减返回的，正式库只是用来兜底的吗，这样做的比上一节课redis用来扣减的好处就是防止redis异常导致数据问题，任务库中的数据肯定是准确的，那最终任务库中同步到正式库中的数据也一定是准确的，只不过任务库和正式库的数据有一定的时间差")])]),t._v(" "),s("h6",{attrs:{id:"讲师回复-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-8"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),s("blockquote",[s("p",[t._v("    是的。此方案的好处是一定会存在一份准确的数据，只是会有延迟")])]),t._v(" "),s("h5",{attrs:{id:"ghh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ghh"}},[t._v("#")]),t._v(" ghh：")]),t._v(" "),s("blockquote",[s("p",[t._v("没太明白，这里为啥不是先扣减缓存在顺序写入数据库？不然如果存在库存不足也会一直开启事务后写数据库然后回滚")])]),t._v(" "),s("h6",{attrs:{id:"讲师回复-9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-9"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),s("blockquote",[s("p",[t._v("    是的，前置查询一次缓存是通用的、默认需要的，在12、13讲里都有涉及。这里没有再提及了")])]),t._v(" "),s("h5",{attrs:{id:"泉"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#泉"}},[t._v("#")]),t._v(" **泉：")]),t._v(" "),s("blockquote",[s("p",[t._v("老师好，有几个地方不太明确，请教下，1.扣减号uuid一般是指用户ID吗，还是按其他规则生成的？2.任务列表在电商场景中可以理解为订单列表吗？若是的话，用户提交订单完成的查看读取，是否也是采用无状态写入架构需要把订单信息同步到缓存中读取，感谢老师")])]),t._v(" "),s("h6",{attrs:{id:"讲师回复-10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-10"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),s("blockquote",[s("p",[t._v("    1. 扣减号每一次请求生成的唯一编号。在库存扣减的例子里，它可以是订单号")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("任务列表的任务，是一次扣减里的商品详细信息（比如：订单号、商品编号、对应的数量）")]),t._v(" "),s("li",[t._v("可以基于无状态架构来实现数据同步")])]),t._v(" "),s("h5",{attrs:{id:"西-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#西-2"}},[t._v("#")]),t._v(" *西：")]),t._v(" "),s("blockquote",[s("p",[t._v("这个架构的实现思路就好比mysql更新的时候，更新的数据是在内存中的，但是会磁盘顺序追加写redo log的思想一样。实在是高😀")])]),t._v(" "),s("h5",{attrs:{id:"_2932"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2932"}},[t._v("#")]),t._v(" **2932：")]),t._v(" "),s("blockquote",[s("p",[t._v("汇总表怎么算的呢？")])]),t._v(" "),s("h6",{attrs:{id:"讲师回复-11"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复-11"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),s("blockquote",[s("p",[t._v("    在任务库里的任务同步到正式库时，会根据任务库里的数据（用户购买的商品和数量），实时的去更新（扣减）正式库里的汇总数据")])])])}),[],!1,null,null,null);a.default=_.exports}}]);