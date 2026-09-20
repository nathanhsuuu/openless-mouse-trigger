# OpenLess Mouse Trigger

让罗技鼠标按钮触发 [OpenLess](https://github.com/Open-Less/openless) 的「Mac 听写键」，同时保留妙控键盘麦克风键的原有用法。

## 使用

1. [下载应用 ZIP](https://github.com/nathanhsuuu/openless-mouse-trigger/raw/refs/heads/main/OpenLess-Mouse-Trigger-macOS.zip)，解压后将 `OpenLess Mouse Trigger.app` 移到「应用程序」。
2. 在 macOS「系统设置 → 隐私与安全性 → 辅助功能」中添加并启用该应用。
3. OpenLess 的录音快捷键选择「Mac 听写键」，录音方式选择「切换式」。
4. Logi Options+ 中，将鼠标按钮设为「打开应用程序」，选择 `OpenLess Mouse Trigger.app`。

按一下开始录音，再按一下结束并转写；妙控键盘麦克风键仍可直接使用。请保持辅助应用位置固定。

## 原理与限制

每次启动通过 macOS CoreGraphics 发送键码 `176` 的按下和松开事件，间隔 80 毫秒，然后退出。不会自行录音或联网。源码见 [OpenLess-Mouse-Trigger.js](OpenLess-Mouse-Trigger.js)。

- 已在 MX Master 3S for Business + OpenLess 的实际使用中验证可触发；其他组合未验证。
- 支持点击切换，不支持鼠标长按说话。请先启动 OpenLess。
- 应用采用本地临时签名，未经过 Apple 公证；macOS 下载后可能提示安全限制。
- 独立辅助工具，与 OpenLess、Logitech 无官方关联。
