                                              数据类型也就分为原始值和引用值
                                
                        
                原始值:
                       number string boolean undefined null
                    
                引用值:
                       object array function Number() Boolean() String();
                                            包装类Number  包装类Boolean  包装类String



                                            克隆

                
                arguements.callee  指代自己本身的函数体


                正常小数点后可以计算15位


                function.caller    打印出执行我的那个函数,caller指向的是当前函数被调用的那个环境的函数，当前函数被谁调用就打印出来谁的函数

                浅层拷贝的时候会影响引用值，因为在拷贝的时候是把引用值的地址拷贝出来了，在obj1里面改变引用值，obj里面也会发生改变由此出现了弊端

                深层拷贝，如果要拷贝的是引用值，那么就新建一个如果是对象就新建一个对象，如果是数组那就新建一个数组，原始值则直接拷贝过来



                数组可以随便被砍断，arr.length = 几   那么数组就会被砍成多少，如果是增加那么剩下的就是undefined


                                           

                                           数组


              当你在new Array()里面填的数字，如果只填写一位那么你写的就是数组的length


              数组常用的方法：
                           改变原数组
                           push,pop,shift,unshift,sort,reverse,splice

                           不改变原数组
                           concat,join -->spilt,toString,slice


       可改变原数组的：       
                     push在数组的最后一位加东西加多少位都可以


                     pop在数组最后一位剪切一个数据，pop只能一位一位的剪切，传参数没有用，它并不是说给你删掉就用不了了，而是把他放在了外面


                     shift在数组的最前面那位剪切下来一位,也是只能剪切一位


                     unshift在数组的最前面加上一位,可以一起加好几个


                     reverse把数组逆转过来


                     splice(从第几位开始,剪切多少个长度，在切口处把该值添加进去)   从哪块开始切，如果没切，那鼠标位置就没动


                     sort排序，按照数字大小升序来排序

                     一旦返回值为负值,那么前面的参数代表的数据就在前面
                     一旦返回值为正值,那么前面的参数代表的数据就在后面
              
                     arr.sort(function (a,b) {
                                 //...
                              return 1;
                            });
                    a和b是从数组里随便抽两个数字，这两个数字一定是按顺序的，a一定在b的前面
                    sort在比较的时候，如果数字是两位，那么就会比较ASCII码


              
                    Math.random()是返回 -- (0,1)的开区间数


       不可改变原数组的：
                       concat把两个数组相连，但是不改变原数组


                       toString调用他自己，例如var arr = [1,2,3];   arr.toString = '1,2,3'


                       slice(从第几位开始,剪切到第几位为止)
                       slice(-2)也就是从倒数第二位开始截