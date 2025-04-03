## 主机配置 1
| 配置 1 |                                                | 数量 |
|------|------------------------------------------------|----|
| `CPU` | i5-12400 六核 12线程 Golden Cove                              |    |
| `主板` | 华硕PRIE主板/B660M-K D4                            |    |
| `内存` | 金士顿FC内存/KST 8G 3200                            | 2  |
| `硬盘` | 三星固态硬盘/FM9A1 1TI.2 FCI-E4.0]                   |    |
|  `硬盘`    | 机械 西数 WDC WD10EZEX-08M2NA0 ( 1 TB / 7200 转/分 ) |    |
| `电源` | 先马电源/坦克735盒[额定600w 主动版]                        |    |
| `机箱` | 先马机箱/商英[黑]                                     |    |
| `风扇` | 逾辉机箱风扇/黑框白叶                                    | 1  |


## 主机配置 2
| 配置 2  |                                                | 数量 |
|:------|:-----------------------------------------------|:---|
| `CPU` | i5-4590 @ 3.30GHz 四核  Haswell                         |    |
| `主板`  | 华硕 B85M-G ( Lynx Point )                       |    |
| `内存`  | 金士顿 DDR3 1600MHz                               | 1  |
| `硬盘`  | 机械 西数 WDC WD10EZEX-08M2NA0 ( 1 TB / 7200 转/分 ) |    |
| `显卡`  |          Nvidia GeForce GTX 750 Ti ( 2 GB / 七彩虹 )                                      |    |
|    `显示器`   |         飞利浦 PHLC0CF PHL 223V5 ( 21.7 英寸  )                                                                               |    |
|    `光驱`   |                  索尼-NEC Optiarc DVD-ROM DDU1681S DVD光驱                                                                      |    |
|     `声卡`      |                瑞昱 ALC887 @ 英特尔 Lynx Point  高保真音频                                                                                                             |    |
|     `声卡`      |                          瑞昱 ALC887 @ 英特尔 Lynx Point HD Audio Controller    0887                                                                                                   |    |
|      `网卡`     |                        瑞昱 RTL8168/8111/8112 Gigabit Ethernet Controller / 华硕                                                                                                     |    |


## 共享提示密码

win7和win10共享出现了需要用户名和密码  ^^[解决办法](https://jingyan.baidu.com/article/48206aead5a952216ad6b3f4.html)^^.

## 哈希值对照

用系统自带PowerShell命令

    在你想查看的某个文件路径下，空白处，按着键盘Shift +鼠标右键，就可以在当前路径下(此处)打开PowerShell窗口，打开后直接就是指定到了当下路径。

* `SHA1` - Get-FileHash -Path "路径" -Algorithm SHA1

* `SHA5` - Get-FileHash -Path "路径" -Algorithm MD5
