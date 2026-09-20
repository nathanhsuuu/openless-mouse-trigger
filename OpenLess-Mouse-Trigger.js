ObjC.import('CoreGraphics');
ObjC.import('ApplicationServices');

function run() {
    if (!$.AXIsProcessTrusted()) {
        var app = Application.currentApplication();
        app.includeStandardAdditions = true;
        app.displayDialog('请在“系统设置 → 隐私与安全性 → 辅助功能”中添加并启用 OpenLess Mouse Trigger，然后再次运行。\n\nOpenLess 请保持“Mac 听写键”，录音方式使用“切换式”。', {
            buttons: ['好'], defaultButton: '好'
        });
        return;
    }
    var down = $.CGEventCreateKeyboardEvent(null, 176, true);
    var up = $.CGEventCreateKeyboardEvent(null, 176, false);
    $.CGEventSetFlags(down, 0);
    $.CGEventSetFlags(up, 0);
    $.CGEventPost(0, down);
    delay(0.08);
    $.CGEventPost(0, up);
}
