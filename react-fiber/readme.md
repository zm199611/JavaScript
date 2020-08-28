JSX -> createElement -> 虚拟DOM (react element) -> 对应平台的渲染器 reactDOM/react-native  渲染

setState  ->  生成另外一棵虚拟DOM  -> DOM diff(reconcilers) -> 找出那些地方需要更新
-> 应用更新

## stack reconciler


## fiber reconciler

之前 DOM diff 递归的过程，我们遍历所有的节点，如果这个js'执行时间是很长的，而且js计算和页面渲染，绘制，互斥的

浏览器的一次event-loop：

- task
- microtask
- requestAnimationFrame
- render
- requestIDleCallback 当这一帧有空闲时间的时候

之前js是老大，想执行多久就执行多久
现在js主动让位，放在requestIdleCallback里面，js第一次和浏览器统一站在用户体验角度

协程 纤程

- 能够把可中断的任务切片处理
- 能够调整优先级，重复并使用任务 

fiber: 是一个数据结构
这个数据结构支持我们写出可终止暂停重新启动的代码
```js
    fiber；{
        child:第一个子节点
        sibling:下一个子节点
        return 父节点
    }
```
可以终止一项长任务
generate yield


## 生命周期

Render阶段: 算出哪些需要更新
Commit阶段: 之前Render 阶段已经花费很多时间，为了让用户尽快看到页面，所以这个会一气呵成，更新页面