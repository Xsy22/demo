window.addEventListener('load', function () {
    // 1、获取元素
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    // 获取focus的宽度
    var w = focus.offsetWidth;
    var ol = focus.children[1];
    // 2、利用定时器自动轮播图片
    var index = 0;
    var timer = setInterval(function () {
        index++;
        var translatex = -index * w;
        ul.style.transition = 'all .3s';//添加过渡效果
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);

    // 等着我们过渡完成之后，再去判断 监听过渡完成之后的事件 transitionend
    ul.addEventListener('transitionend', function () {
        //无缝滚动
        if (index >= 3) {
            index = 0;
            //去掉过渡效果  让我们的ul快速的跳到目标位置
            ul.style.transition = 'none';
            // 利用最新的索引号 乘以宽度回到第一张
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            //去掉过渡效果  让我们的ul快速的跳到目标位置
            ul.style.transition = 'none';
            index = 2;
            // 利用最新的索引号 乘以宽度回到第一张
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }
        // 3、小圆点跟随变化
        // 把ol里面li带有current类名的选出来去掉类名  remove
        ol.querySelector('.current').classList.remove('current');
        // 让当前索引号 的小li 加上 current add
        ol.children[index].classList.add('current');
    });

    // 4、手指滑动轮播图
    // 触摸元素 touchstart： 获取手指初始坐标
    var startX = 0;
    var moveX = 0;//后面会使用这个手指移动距离所以要定义一个全局变量
    var flag = false;
    ul.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        // sho手指触摸的时候停止定时器
        clearInterval(timer);
    })

    // 移动手指 touchmove：计算手指的滑动距离，并且移动盒子
    ul.addEventListener('touchmove', function (e) {
        // 计算移动距离
        moveX = e.targetTouches[0].pageX - startX;
        // 移动盒子：盒子原来的位置+手指移动的距离
        var translatex = -index * w + moveX;
        //手指拖动的时候不需要动画效果
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true;//如果手指移动过，则进行判断
        e.preventDefault(); //阻止滚动屏幕的行为
    })

    // 手指离开  根据移动距离去判断是回弹还是播放上一张下一张
    ul.addEventListener('touchend', function (e) {
        // 判断手指是否移动，如果没有移动则不进行判断
        if (flag) {
            // 1、 如果移动距离大于50像素，我们就播放上一张或者下一张
            if (Math.abs(moveX) > 50) {
                //如果是右滑  就是播放上一张  moveX是正值
                if (moveX > 0) {
                    index--;
                } else {
                    //如果是右滑  就是播放下一张  moveX是负值
                    index++;
                }
                var translatex = -index * w;
                ul.style.transition = 'all .3s';//添加过渡效果
                ul.style.transform = 'translateX(' + translatex + 'px)';
            } else {
                // 2、如果是移动距离小于50像素，则回弹
                var translatex = -index * w;
                ul.style.transition = 'all .3s';//添加过渡效果
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }
        //手指离开的时候重新开启定时器
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            var translatex = -index * w;
            ul.style.transition = 'all .3s';//添加过渡效果
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000);
    })
    var goBack = this.document.querySelector('.goBack');
    var nav = this.document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    });
    goBack.addEventListener('click', function () {
        window.scroll(0, 0);
    });

});