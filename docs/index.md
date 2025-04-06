<style>
    /* 图片容器样式 */
    .image-container {
        display: flex;
        flex-wrap: wrap;
        /* 假设每行 5 个元素，减去元素之间的间距后计算总宽度 */
        width: calc(5 * (150px + 20px)); 
    }

    /* 单个图片项样式 */
    .image-item {
        text-align: center;
        margin: 10px;
    }

    /* 图片样式 */
    .image-item img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border: none;
        outline: none;
    }

    /* 图片说明样式 */
    .image-caption {
        margin-top: 5px;
        display: flex;
        justify-content: center;
    }

    /* 说明文字和链接样式 */
    .image-caption a {
        margin: 0 5px;
    }
</style>

<div class="image-container">
    <!-- 第 1 行 5 个产品 -->
    <div class="image-item">
        <img src="images/chrome.png" alt="谷歌浏览器">
        <div class="image-caption">
            <a href="https://www.google.cn/chrome/" target="_blank">谷歌浏览器</a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/office.png" alt="office">
        <div class="image-caption">
            <a href="https://c2rsetup.officeapps.live.com/c2r/download.aspx?productReleaseID=HomeStudent2019Retail&platform=Def&language=zh-CN&TaxRegion=sg&correlationId=3ccbaffc-036a-4d82-933a-b757202148f1&token=0450398c-bd26-40da-a647-902d4edc25e0&version=O16GA&source=AMC&StoreId=CFQ7TTC0K7C8" target="_blank">2019个人版</a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/office.png" alt="office">
        <div class="image-caption">
            <a href="http://officecdn.microsoft.com/pr/492350F6-3A01-4F97-B9C0-C7C6DDF67D60/media/zh-cn/HomeStudent2021Retail.img" target="_blank">2021版(R9000P)</a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/Everything.png" alt="Everything">
        <div class="image-caption">
            <a href="https://everything.en.softonic.com/" target="_blank">Everything</a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/7zip.png" alt="7zip">
        <div class="image-caption">
             <a href="https://www.7-zip.org/" target="_blank">7-zip</a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/剪映.png" alt="剪映">
        <div class="image-caption">
            <a href="https://pan.baidu.com/s/1v96347AF-abFFubQIF29pg?pwd=qae9" target="_blank">剪映5.5.0</a>            
        </div>
    </div>
    <div class="image-item">
        <img src="images/adobe.png" alt="adobe全家桶">
        <div class="image-caption">
            <a href="https://pan.baidu.com/s/1Kk4nIM-EekHz2ZIQQdYPRA?pwd=79jj" target="_blank">adobe 2023</a>
             </div>
    </div>
    <!-- 第 2 行 5 个产品 -->
    <div class="image-item">
        <img src="images/blender.png" alt="blender">
        <div class="image-caption">
            <a href="https://download.blender.org/release/Blender2.79/" target="_blank">blender 2.79b</a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/vscord.png" alt="vscord">
        <div class="image-caption">
            <a href="https://code.visualstudio.com" target="_blank">vscord</a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/pycharm.png" alt="pycharm">
        <div class="image-caption">
            <a href="https://www.jetbrains.com.cn/en-us/pycharm/download/other.html" target="_blank">pycharm 社区版</a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/python.png" alt="python">
        <div class="image-caption">
            <a href="https://www.python.org/downloads/windows/" target="_blank">python 3.10.2</a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/WattToolkit.png" alt="Watt Toolkit">
        <div class="image-caption">
            <a href="https://github.com/BeyondDimension/SteamTools" target="_blank">github</a>
            <a href="https://steampp.net/" target="_blank">steam++</a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/steam.png" alt="steam">
        <div class="image-caption">
            <a href="https://s.team" target="_blank">steam</a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/千千静听.png" alt="千千静听">
        <div class="image-caption">
            <a href="https://pan.baidu.com/s/1Wm891YeCIEiuBS622mknFg?pwd=ckrr" target="_blank">千千静听 5.0.1 </a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/PotPlayer.png" alt="PotPlayer">
        <div class="image-caption">
            <a href="https://potplayer.tv/" target="_blank">PotPlayer播放器 </a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/QQ影音.png" alt="QQ影音">
        <div class="image-caption">
            <a href="https://pan.baidu.com/s/1vqgHqIeKV4UNifJYb_JvtA?pwd=gd9n" target="_blank">QQ影音3.7 </a>
            <a href="https://sw.pcmgr.qq.com/7cd2993d29fef05f084d33fbbeec4df2/67f1f844/spcmgr/download/QQPlayerSetup4.6.3.1104.exe" target="_blank">4.6.3</a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/leishen.png" alt="雷神加速器">
        <div class="image-caption">
            <a href="https://www.leigod.com/" target="_blank">雷神加速器 </a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/xunlei.png" alt="迅雷">
        <div class="image-caption">
            <a href="https://www.xunlei.com/" target="_blank">迅雷 </a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/tuba.png" alt="图吧工具箱">
        <div class="image-caption">
            <a href="https://pan.baidu.com/s/1QgtuoBF19eK5BhTXuJQOww?pwd=6d6r" target="_blank">图吧工具箱 </a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/notepad.png" alt="notepad">
        <div class="image-caption">
            <a href="https://notepad-plus.en.softonic.com/" target="_blank">notepad ++  </a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/itunes.png" alt="itunes">
        <div class="image-caption">
            <a href="https://www.apple.com.cn/itunes/" target="_blank">Itunes </a>
        </div>
    </div>
    <div class="image-item">
        <img src="images/i4.png" alt="i4">
        <div class="image-caption">
            <a href="https://www.i4.cn/" target="_blank">爱思助手 </a>
        </div>
    </div>
</div>
