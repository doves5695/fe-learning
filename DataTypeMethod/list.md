# 链表
# 链表跟数组有很大区别
# 链表和数组都是有序的元素集合，但是不同意数组的是，链表当中的元素并不是按顺序存储的
# 数组因为索引位的存在我们可以方便的用[]这种方式来访问数组当中的元素
# 链表就不一样,链表由一个存储元素本身的节点和一个指向下一个元素的指针组成。


# 每个链表中最少有两个元素,一个元素表示该节点的值,用val来表示，另外一个就是指向下一个节点的指针,用next表示


# 数组有一个致命的缺点,是因为在一个固定的数组当中在其中间或起点插入元素成本很高，因为需要移动元素

# 在链表当中删除元素就非常方便,只需要找到值位三的节点，然后将2指向节点4,节点三没有引用关系，就会被垃圾回收机制当作垃圾回收，就算节点非常多,依然只需要改变元素的指针就可以了。

# 链表 插入元素就更加简单,把要插入的位置的两边的指针断开,然后把上一个元素指针指向插入元素的指针,把插入元素的指针指向下一个元素的节点


# 链表的缺点就是，在访问元素的时候需要从链表头部节点开始迭代链表直到找到所需的元素

##
1. 单向链表
#  单向链表每个元素由一个存储元素本身的节点和一个指向下一个元素的指针构成
#  要实现链表这种数据结构,最重要的是保存head元素(既链表的头元素)，以及每个元素的next指针
#####
# 我们可以把链表想象成一条铁路，铁路的每一段都是相互连接的,我们只要找到铁路的头，就可以找到整个铁路
#####


```js
//   向链表中追加节点
LinkedList.prototype.append = function(val) {}

//   在链表的指定位置插入节点
LinkedList.prototype.insert = function (next,val) {}

//   删除链表中指定位置的元素,并返回这个元素的值
LinkedList.prototype.removeAt = function (index)

// 删除链表中对应的元素
LinkedList.prototype.remove = function (val) { }

// 获取链表中给定元素的索引
LinkedList.prototype.indexOf = function (val) { }

// 获取链表中某个节点
LinkedList.prototype.find = function (val) { }

// 获取链表中索引所对应的元素
LinkedList.prototype.getElementAt = function (index) { }

// 判断链表是否为空
LinkedList.prototype.isEmpty = function () { }

// 获取链表的长度
LinkedList.prototype.size = function () { }

// 获取链表的头元素
LinkedList.prototype.getHead = function () { }

// 清空链表
LinkedList.prototype.clear = function () { }

// 序列化链表
LinkedList.prototype.join = function (string) { }

```


```js
//  getElementAt(index);
LinkedList.prototype.getElementAt = function (index) {
    if(index < 0 || index >= this.length) {return null}
    let cur = this.head;
    while(index--) {
        cur = cur.next;
    }
    return cur
}
//  find(val)
// find 方法和 getElementAt 方法类似，一个通过索引找元素，一个通过节点值找元素
LinkedList.prototype.find = function (val) {
    let cur = this.head;
    while(cur) {
        if(cur.val == val) {return cur}
        cur = cur.next;
    }
    return null;
}
// append(val)
// 在链末尾追加元素
LinkedList.prototype.append = function (val) {
    let node = new ListNode(val);
    if(!this.head) {
        this.head = node;
    } else {
        let cur = this.getElementAt(this.length-1);
        cur.next = node;
    }
    this.length++;
}
// insert(index,val)
// 在链表的任意位置添加元素
LinkedList.prototype.insert = function (index,val) {
    if(index < 0 || index > this.length) {return false}
    let node = new ListNode(val);
    if(index === 0) {
        node.next = this.head;
        this.head = node;
    } else {
        let prev = this.getElementAt(index - 1);
        //原来prev指向的是下一个元素节点,但是你进来了就要你这个node来指了
        node.next = prev.next;
        prev.next = node;
    }
    this.length ++;
    return true;
}
```