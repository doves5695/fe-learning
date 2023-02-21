绝对路径：file:///D:/%E6%9C%89%E7%94%A8%E7%9A%84/fe-learning/1210/css/%E5%A5%A5%E8%BF%90%E4%BA%94%E7%8E%AF.css

这种就是绝对路径，用我的话说就说精确到门牌号了
D:（亚洲）
%E6%9C%89%E7%94%A8%E7%9A%84（中国）
fe-learning（黑龙江省）
1210（黑河市）
css(爱辉区)
%E5%A5%A5%E8%BF%90%E4%BA%94%E7%8E%AF.css（我家）

相对路径：就比如我这个列表：html
                               1210.html
                               奥运五环.html
                          css 
                               1210.css
                              奥运五环.css
我的这个奥运五环.html 要是想引入 奥运五环.css文件就需要用../来表示上一级目录
也就是跟css文件同一个级别，然后再引入css/奥运五环.css
