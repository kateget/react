# 创建项目

npx create-react-app 项目名称 --template typescript

# 设置忽略文件

ctrl+shift+p / Add gitignore

# 配置淘宝镜像

.npmrc npm config set registry https://registry.npm.taobao.org

# 规范代码与提交

### 配置编辑器格式

EditorConfig ctrl+shift+p / Generate .editorcofig

### 配置 prettier 格式化

npm install prettier -D
新建.prettierrc 文件

# 配置 ESlint

npm install eslint -D | npx eslint --init

### 安装 eslint 插件

npm install eslint-plugin-promise eslint-plugin-unicorn -D

# 安装 airbnb

npx install-peerdeps --dev eslint-config-airbnb

# StyleLint 配置

npm install stylelint stylelint-config-standard -D
npm install stylelint stylelint-config-standard stylelint-config-prettier -D

# 无法通过 bash 读取 npm 时

npm config set script-shell "D:\install\Git\bin\bash.exe"

#
