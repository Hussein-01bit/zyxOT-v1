if (localStorage.getItem("zyxOT-v1-username") != null) {
	document.write('<div class="mt-4 alert alert-warning">\n				<h4>说明</h4>\n				<p>众所周知，加密是保护隐私安全地唯一方式，随着隐私信息泄密的事故越来越多，加密也变得非常重要，遗憾的是，懂得加密的人一直较为稀缺。</p>\n<p>为了让人类更好地学习加密，本站特别推出随机数码加密系统，帮助人类学习加密。</p>\n<p>随机数码加密系统博大精深，虽然只有0~65536这65537个数码，但是内涵十分丰富，根据研究，同一个字符能够被表示成4295098369种不同地数码组合。</p>\n<p>并且推出加密投食系统，通过以下方式提交新的加密方法：</p>\n<ul><li>第一行一个字符串表示加密语法的名称，然后通过<pre><code>```cpp\n/*C++源代码，写入加密代码*/\n```</code></pre></li><li>最后通过<pre><code>```cpp\n/*C++源代码，写入解密代码*/\n```</code></pre></li></ul>\n</p>\n			</div>			<!-- <div class="mt-4 alert alert-danger">\n				<h4>投食代码规则</h4>\n				<p>只允许通过读写计算机的输入/输出端口以及对指定库函数的调用等方式与外部环境通信。在程序中严禁下列操作：</p>\n<ul>\n<li>试图访问网络</li>\n<li>使用fork、exec、system或其它线程/进程生成函数</li>\n<li>打开任何文件和目录</li>\n<li>运行其它程序</li>\n<li>改变文件系统的访问权限</li>\n<li>读写文件系统的管理信息</li>\n<li>使用除读写规定的输入/输出文件之外的其它系统调用</li>\n<li>捕获和处理鼠标和键盘的输入消息</li>\n<li>试图无限递归创建子进程</li>\n<li>除程序调用abort的异常终止外，程序返回值必须是0</li>\n</ul>\n<p>如果违规，本加密系统将会拒绝投食，如果是网页版则账号将会被永久封禁，如果是本地版将立即启动自毁程序。</p>\n			</div> -->');
}
else {
	document.write('<div class="mt-4 card card-default">\n				<div class="card-body text-center">\n					请 <a role="button" class="btn btn-outline-primary" href="ot.zyx.top/login.html">登录</a> 以查看更多内容。\n				</div>\n			</div>');
}

if (localStorage.getItem("zyxOT-v1-username") == null && localStorage.getItem("zyxOT-v1-guest-tification") == "false") {
	document.querySelector("#tification").remove();
}
else if (localStorage.getItem("zyxOT-v1-username") != null && localStorage.getItem("zyxOT-v1-user=" + localStorage.getItem("zyxOT-v1-username") + "?manage") != 1 && localStorage.getItem("zyxOT-v1-default-tification") == "false") {
	document.querySelector("#tification").remove();
}
