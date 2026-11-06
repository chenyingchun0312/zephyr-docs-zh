# Zephyr 项目文档（中文翻译）

Zephyr RTOS 官方文档的社区中文翻译站点，基于 Zephyr `v4.5.0` 生成。

- 在线访问：<https://chenyingchun0312.github.io/zephyr-docs-zh/>
- 英文原文：<https://docs.zephyrproject.org/4.5.0/>

## 说明

本站是**非官方**中文翻译，与 Zephyr 项目及 Linux 基金会没有隶属关系。译文可能滞后于
上游、也可能存在错误；涉及行为与接口的准确信息，请以
[英文官方文档](https://docs.zephyrproject.org/latest/) 为准。

## 内容

站点包含三部分：

| 部分 | 来源 | 说明 |
|---|---|---|
| 文档正文 | `doc/**/*.rst` 的 Sphinx gettext 目录 | 指南、开发板、示例、发布说明等 |
| Kconfig 选项参考 | Kconfig 树导出的 `kconfig.json` | 选项提示与帮助文本按翻译记忆库替换 |
| API 参考 | C 头文件中的 Doxygen 注释 | 由 Doxygen 生成，界面文字为中文 |

代码标识符、`CONFIG_` 符号、路径、URL、芯片型号等保持原文。

## 版权与许可

原文版权归 Zephyr 项目贡献者所有，以 Apache-2.0 许可证发布；译文同样以
Apache-2.0 发布。详见 [NOTICE](NOTICE) 与 [LICENSE](LICENSE)。

站点由社区维护，欢迎通过 issue 指出错误译法。
