## Login
1. UI
2. 手机号校验
3. 密码星号显示隐藏处理
4. entrance(state)
5. loginReducer event
6. route跳转

## main
1. nav导航(router)
2. blog展示组件(state)
3. add content框
4. 评论修改框
5. add blog event
6. edit/read blog event

## TASK1:build the framework
    1.build up loginReducer page -- 2 entrance
    2.build up main page
        (1).nav routers -- 3
        (2).list modal
        (3).add button
    3.add an edit component
    4.add read component

## TASK2:interact
    1. loginReducer state connect
    2. add article part
    3. add edit function
    4. add delete function

## 变更想法：
1.登陆界面：
分为游客登陆与作者登陆，用于区别权限
2.主页：
主页的主体是展示内容，扩大list部分在整体的所占比例可以让主页内容更清晰。
做法：(1).缩小content框比例，将其放置在list内容上部。
(2).将content部分变成一个组件，在list下方设置添加按钮，点击打开content页面进行添加。
## 登陆页面

登陆
添加两个入口

游客：
1. 登陆
2. 进入主页无法添加编辑删除
3. 主页可以打开文章进行添加评论
4. 可以删除评论

作者：
1. 登陆
2. 进入主页面可以添加删除
3. 点击edit按钮可以进行修改
4. 可以打开文章评论以及删除评论