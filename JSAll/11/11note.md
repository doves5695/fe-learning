                                                命名空间
                

                根本目的：
                        管理变量，防止污染全局，适用于模块开发
                为了防止命名冲突，就定义一个对象，在对象里面设置对象，然后就可以调用对象了
                例如：
                     var obj = {
                        department1 : {
                            yuangong1 : {

                            },
                            yuangong2 : {

                            }
                        },
                        department2 : {
                            jingrui : {
                                name : 'abc',
                                age : 15
                            },
                            wangwu : {
                                name : 'bcd',
                                age : 20
                            }
                        }
                     }

                     为了避免命名冲突就可以这样
                                             ： var jingrui = obj.department2.jingrui;
                                                var wangwu = obj.department2.wangwu;
                                            最后就是
                                                    jingrui.name;
                                                    wangwu.name;



                                          this

                
                1.函数预编译过程 this --> window
                2.全局作用域里 this --> window
                3.call/apply 可以改变函数运行时this指向
                4.obj.func();  func() 里面的this指向obj （谁调用的方法this指向就是谁，没有人调用就是window）




                例1讲解： 
                        代码当中第一个执行fun（）；
                        相当于把a.say的函数体付给了fun，var fun = function () {
                            conole.log(this.name);
                        }
                        当fun执行的时候，因为没有人调用fun，也就正常去走预编译的流程结果也就是this.name = 222.
                        第二个执行的a.say();这里面是a调用了say方法所以this.name = 111.
                        接下来是第三个执行b.say(a.say);这里面是把b.say里面的方法function(fun) {
                            fun();
                        }
                        把a.say赋给了fun
                        当fun执行的时候，也是因为没有人调用fun所以结果就是window也就是this.name = 222
                        最后一个执行是b.say();
                        是b调用了say方法，this.name也就是等于333


                例2讲解:
                    代码当中调用了obj.child.getName(),
                    当打印出来obj.child.getName()时因为是child调用的getName方法所以打印出来的this.name值是child
                    当定义了一个getName去接收obj.child.getName()，
                    然后空执行getName,也就是没有人调用结果也就是window


                例3讲解：
                    因为首先我们没有定义o的值，想要打印出o的值，最后只能是undefined，当我们运行到x = fun(0)时这个0也就被赋值给了n,fun(0,o),当运行到x.fun(1)也就是运行return里面的函数结构，m就被赋值成为了1也就变成了（1,0）打印o的值也就变成了0.
                    当执行到var y这里的时候，还是因为o没有被定义打印出来的是undefined，当运行fun（0）的时候，也就是n就被赋值成为了0，到了fun（1）的时候，m就被赋值了1，打印结构也就变成了0，当运行到fun（2）的时候，因为被返回出去所以n就变成了1，m为赋值的2，打印结构也就变成了1





                                          属性表示方法


                    obj.name = obj.['name']
                    在系统当中会自动转化成obj['name']
                    例如： 
                         obj.name ---> obj['name']



                                           对象的枚举


                    var obj = {
                        name : 'jing',
                        age : 12,
                        sex : 'male'
                               }
                    for(var prop in obj) {
                            console.log(obj[prop]);
                                        }
                    
                     
                    这个for循环有多少属性就执行多少圈，in就相当于在obj里面拿出来一个属性，每拿出来一个就赋值给prop
                    for in 循环只专注于遍历对象里面的属性
                    for in 循环会把你设置的原型也打印出来，但是初始的原型不会打印出来


                    hasOwnProperty
                                  用来过滤你自己原型上的属性
                    
                    in操作符
                            判断前的属性是不是后面的对象里面的如果是返回布尔值,切记前面要用字符例如： console.log('name' in obj);
                            它也会把原型链上的拿出来比较，它只能判断这个对象能不能访问到这个属性，但是不能判断你到底是不是这对象的


                    instanceof
                             (答题的时候要写上，愿景是判断a是不是B构造出来的，但是其实是判断a的原型链上有没有B的原型)
                             a instanceof B；
                             判断a的原型链上，有没有B的原型
                    

                    constructor和instancof可以区分object和Array




                    Array/Number/Boolean/String,他们上边都有toString方法
                    toString就是为了方便打印各种类型的，所以在各种类型当中都有toString方法
                                                        