FDE 全行业调研报告 — 完整离线网站
========================================

【怎么用】
双击 index.html，用任意现代浏览器（Chrome / Edge / Firefox）打开即可。
14 个页面全部离线自包含——无需联网、无需安装任何软件、无需 Python。
拷到任何电脑，双击 index.html 就能完整浏览所有内容与图表。

【14 个页面】
  index.html         总览（入口，从这里开始）
  companies-us.html  美国 / 硅谷公司库 113 家（支持搜索 + 赛道/可信度筛选）
  companies-cn.html  中国公司库 62 家
  cases.html         硅谷成熟案例 52 个 + ROI/成本
  industries.html    100 个行业 AI 落地适用性（可筛选）
  fde-guide.html     FDE 端到端工作 SOP + 技能树
  academy.html       FDE 养成 · 能力电路教学（串联主干/并联支路/接地线）
  landscape.html     市场格局 + 5 张框架图
  charts.html        数据图表看板（14 张真实数据 ECharts：薪酬/市场/漏斗/雷达…）
  knowledge.html     学术知识结构（4 支柱 16 领域 150 篇文献）
  mindset.html       认知升级（15 个思维框架剖析 FDE + 75 个自检问题）
  future.html        未来趋势与社会生产关系（30 个思辨主题）
  comments.html      B 站评论分析
  mindmap.html       全站知识体系思维导图

【数据可信度（重要）】
所有数据来自公开来源（Gartner / IDC / McKinsey / MIT / 官方财报 / 媒体报道），
由 AI agent 检索整理，每条标注：已证实 / 有报道 / 推断。
- 公司存在性与产品方向相对可靠；
- 具体 ROI、薪酬、估值、客户数多为报道或合理估算，重要数据请点开「来源」自行核验；
- FDE 是 2025 年才爆火的新概念，公司口径已放宽到广义「企业 AI 落地 / forward-deployed 模式」；
- 未来趋势页是「思辨衍生」（给多方对立立场），不是事实结论。

【目录结构】
  *.html            14 个网页（双击 index.html 开始浏览）
  assets/           共享资源（全部本地，离线可用）
    style.css         设计系统（暖白 Apple 风 + 多彩分类）
    anim.js           滚动揭入 / 数字计数 / 搜索动效
    echarts.min.js    图表库（数据图表页用）
    marked.min.js     Markdown 渲染（指南/认知/未来页用）
    mermaid.min.js    框架图/思维导图渲染
  data/*.json       调研数据源（公司/案例/行业/数据/知识/认知/养成等）
  gen_*.py          网站生成器源码（可选，见下）

【重新生成（可选，面向开发者）】
需 Python 3.8+。各 gen_*.py 从 data/*.json 重新生成对应 html。
注意：脚本顶部的 OUT 路径当前是作者本机绝对路径，换机器需改成本机的本目录路径。
纯浏览不需要这一步——html 已是成品。

------------------------------------------------------------
生成时间：2026-06 | 由 Claude Code 多 agent 调研生成
内容为原创整合，数据来源已逐条标注，引用前请按可信度自行核验。
