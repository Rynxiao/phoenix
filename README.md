# phoenix
<details>
    <summary>写一个 LRU 缓存(Least Recently Used) cache函数</summary>
    
    LRU（Least recently used，最近最少使用）算法根据数据的历史访问记录来进行淘汰数据，其核心思想是“如果数据最近被访问过，那么将来被访问的几率也更高”。

    ![LRU]('./images/LRU.png')

    1. 新数据插入到链表头部；
    2. 每当缓存命中（即缓存数据被访问），则将数据移到链表头部；
    3. 当链表满的时候，将链表尾部的数据丢弃。

    > [缓存淘汰算法--LRU算法](https://zhuanlan.zhihu.com/p/34989978)
</details>
