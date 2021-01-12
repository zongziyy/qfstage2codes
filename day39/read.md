

1. 安装  git --version

2. 配置用户名和邮箱  
   git config --global user.name "Your Name"
   git config --global user.email "email@example.com"

3. 初始化本地仓库  项目的根目录   
    git init

4. 工作区 提交  暂存区   git add .

    git status  查看提交状态   (红色 本地已经更改但是没有提交暂存区   绿色 已经在暂存区中)

5. 暂存区  提交 版本区  (形成一个版本)
    git commit -m "xxx";

6. 查看提交日志    (初始化版本 到 当前版本的所有提交日志)
    git log
    git log --oneline   精简版  (不显示 提交用户和事件)  

7.  版本回退 ((版本库->工作区))
    <!--  git reset --hard HEAD^   回退1个 -->
    <!--  git reset --hard HEAD~n   回退n个 -->

    初始化提交  -> 新增swiper.html  -> swiper.html 新增导航
       ↑(HEAD)                                       

     git reflog     从初始化版本 到现在的 所有的操作日志                                                 