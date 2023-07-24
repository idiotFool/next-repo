## 2023/7/24

> 1 app router 可以与 pages router 一起使用

> 2 app 目录中组件默认是 React Sever components（性能优化）

> 3 文件夹用于定义 routes； 文件用于创建 UI

> 4 pages 默认是 server components， 也可以设置为 client components

> 5 Passing data between a parent layout and its children is not possible. However, you can fetch the same data in a route more than once, and React will automatically dedupe the requests without affecting performance.

> 6 layout: A layout is UI that is shared between multiple pages. On navigation, layouts preserve state, remain interactive, and do not re-render. Layouts can also be nested

> 7 template: Unlike layouts that persist across routes and maintain state, templates create a new instance for each of their children on navigation. This means that when a user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, state is not preserved, and effects are re-synchronized.

> 8 We recommend using Layouts unless you have a specific reason to use Template.

> 9 