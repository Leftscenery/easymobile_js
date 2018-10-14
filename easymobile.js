/*
 * VERSION: 1.0.0
 * DATE: 2018-08
 *
 * @ author: Jiawei Zhou, leftscenery@gmail.com
 * @ github: https://github.com/Leftscenery
 */

~function () {
    var EasyMobile = function (ele) {
        return new EasyMobile.init(ele)
    };

    //-------------------------------------------------->constructor fn
    EasyMobile.init = function (ele, context) {
        if (typeof ele == 'string') {
            this.ele =  window.document.querySelector(ele);
        } else {
            this.ele =  ele;
        }
    };

    //-------------------------------------------------->instance fn
    EasyMobile.init.prototype = EasyMobile.prototype = {
        constructor: EasyMobile,
        copyright: 'JiaweiZhou',
        time: 'create 2018-08',
        //Array like to Array
        toArray: function () {
            var result = [];
            var curEle = this.ele;
            for (var i = 0; i < curEle.length; i++) {
                result.push(curEle[i])
            }
            return result;
        },

        //------------------------------------------------> mobile event, already support HTML5
        tap: function (fn, that) {
            var curEle = this.ele;
            this.mobileEventPrepare(curEle);

            if (!curEle.hasOwnProperty('tapPool')) {
                curEle.tapPool = EasyMobile.makePlan();
            }
            curEle.tapPool.add(fn, (that || curEle));
        },

        tapRemove:function(fn){
            var curEle = this.ele;
            if(curEle.hasOwnProperty('tapPool')){
                curEle.tapPool.remove(fn);
                curEle.tapPool.length == 0 ? delete curEle.tapPool : null;
            }
        },

        doubleTap: function (fn, that) {
            var curEle = this.ele;
            this.mobileEventPrepare(curEle);

            if (!curEle.hasOwnProperty('doubleTapPool')) {
                curEle.doubleTapPool = EasyMobile.makePlan();
            }
            curEle.doubleTapPool.add(fn, (that || curEle));
        },

        doubleTapRemove:function(fn){
            var curEle = this.ele;
            if(curEle.hasOwnProperty('doubleTapPool')){
                curEle.doubleTapPool.remove(fn);
                curEle.doubleTapPool.length == 0 ? delete curEle.doubleTapPool : null;
            }
        },

        longTap: function (fn, that) {
            var curEle = this.ele;
            this.mobileEventPrepare(curEle);

            if (!curEle.hasOwnProperty('longTapPool')) {
                curEle.longTapPool = EasyMobile.makePlan();
            }
            curEle.longTapPool.add(fn, (that || curEle));
        },

        longTapRemove:function(fn){
            var curEle = this.ele;
            if(curEle.hasOwnProperty('longTapPool')){
                curEle.longTapPool.remove(fn);
                curEle.longTapPool.length == 0 ? delete curEle.longTapPool : null;
            }
        },

        swipe: function (fn, that) {
            var curEle = this.ele;
            this.mobileEventPrepare(curEle);

            if (!curEle.hasOwnProperty('swipePool')) {
                curEle.swipePool = EasyMobile.makePlan();
            }
            curEle.swipePool.add(fn, (that || curEle));
        },

        swipeRemove:function(fn){
            var curEle = this.ele;
            if(curEle.hasOwnProperty('swipePool')){
                curEle.swipePool.remove(fn);
                curEle.swipePool.length == 0 ? delete curEle.swipePool : null;
            }
        },

        swipeUp: function (fn, that) {
            var curEle = this.ele;
            this.mobileEventPrepare(curEle);

            if (!curEle.hasOwnProperty('swipeUpPool')) {
                curEle.swipeUpPool = EasyMobile.makePlan();
            }
            curEle.swipeUpPool.add(fn, (that || curEle));
        },

        swipeUpPoolRemove:function(fn){
            var curEle = this.ele;
            if(curEle.hasOwnProperty('swipeUpPool')){
                curEle.swipeUpPool.remove(fn);
                curEle.swipeUpPool.length == 0 ? delete curEle.swipeUpPool : null;
            }
        },

        swipeDown: function (fn, that) {
            var curEle = this.ele;
            this.mobileEventPrepare(curEle);

            if (!curEle.hasOwnProperty('swipeDownPool')) {
                curEle.swipeDownPool = EasyMobile.makePlan();
            }
            curEle.swipeDownPool.add(fn, (that || curEle));
        },

        swipeDownRemove:function(fn){
            var curEle = this.ele;
            if(curEle.hasOwnProperty('swipeDown')){
                curEle.swipeDown.remove(fn);
                curEle.swipeDown.length == 0 ? delete curEle.swipeDown : null;
            }
        },

        swipeLeft: function (fn, that) {
            var curEle = this.ele;
            this.mobileEventPrepare(curEle);

            if (!curEle.hasOwnProperty('swipeLeftPool')) {
                curEle.swipeLeftPool = EasyMobile.makePlan();
            }
            curEle.swipeLeftPool.add(fn, (that || curEle));
        },

        swipeLeftRemove:function(fn){
            var curEle = this.ele;
            if(curEle.hasOwnProperty('swipeLeft')){
                curEle.swipeLeft.remove(fn);
                curEle.swipeLeft.length == 0 ? delete curEle.swipeLeft : null;
            }
        },

        swipeRight: function (fn, that) {
            var curEle = this.ele;
            this.mobileEventPrepare(curEle);

            if (!curEle.hasOwnProperty('swipeRightPool')) {
                curEle.swipeRightPool = EasyMobile.makePlan();
            }
            curEle.swipeRightPool.add(fn, (that || curEle));
        },

        swipeRightRemove:function(fn){
            var curEle = this.ele;
            if(curEle.hasOwnProperty('swipeRight')){
                curEle.swipeRight.remove(fn);
                curEle.swipeRight.length == 0 ? delete curEle.swipeRight : null;
            }
        },

        move: function (fn, that) {
            var curEle = this.ele;
            this.mobileEventPrepare(curEle);

            if (!curEle.hasOwnProperty('movePool')) {
                curEle.movePool = EasyMobile.makePlan();
            }
            curEle.movePool.add(fn, (that || curEle));
        },

        moveRemove:function(fn){
            var curEle = this.ele;
            if(curEle.hasOwnProperty('movePool')){
                curEle.movePool.remove(fn);
                curEle.movePool.length == 0 ? delete curEle.movePool : null;
            }
        },

        pinchIn: function (fn, that) {
            var curEle = this.ele;
            this.mobileEventPrepare(curEle);

            if (!curEle.hasOwnProperty('pinchInPool')) {
                curEle.pinchInPool = EasyMobile.makePlan();
            }
            curEle.pinchInPool.add(fn, (that || curEle));
        },

        pinchInRemove:function(fn){
            var curEle = this.ele;
            if(curEle.hasOwnProperty('pinchInPool')){
                curEle.pinchInPool.remove(fn);
                curEle.pinchInPool.length == 0 ? delete curEle.pinchInPool : null;
            }
        },

        pinchOut: function (fn, that) {
            var curEle = this.ele;
            this.mobileEventPrepare(curEle);

            if (!curEle.hasOwnProperty('pinchOutPool')) {
                curEle.pinchOutPool = EasyMobile.makePlan();
            }
            curEle.pinchOutPool.add(fn, (that || curEle));
        },

        pinchOutRemove:function(fn){
            var curEle = this.ele;
            if(curEle.hasOwnProperty('pinchOutPool')){
                curEle.pinchOutPool.remove(fn);
                curEle.pinchOutPool.length == 0 ? delete curEle.pinchOutPool : null;
            }
        },

        //屏蔽默认的click事件和dblclick事件
        mobileEventPrepare: function (ele) {
            ele.onclick = function (e) {
                e.preventDefault();
                e.stopPropagation();
            };
            ele.onmousemove = function (e) {
                e.preventDefault();
                e.stopPropagation();
            };
            ele.ondblclick = function (e) {
                e.preventDefault();
                e.stopPropagation();
            };
        }
    }




    //-------------------------------------------------->subscribe tool
    EasyMobile.Plan = function () {
        this.planList = [];
        this.thisList = [];
    };
    EasyMobile.Plan.each = function (ary, callback) {
        for (var i = 0; i < ary.length; i++) {
            var result = callback && callback(ary[i], i);
            //if return false, means end current loop
            if (result === false) {
                break
            }
            if (result === 'DEL') {
                i--
            }
        }
    };
    EasyMobile.Plan.prototype = {
        constructor: EasyMobile.Plan,
        add: function add(fn, that) {
            var flag = true;
            EasyMobile.Plan.each(this.planList, function (item, index) {
                if (item === fn) flag = false;
                return flag;
            });
            flag ? (this.planList.push(fn), this.thisList.push(that)) : null;
        },
        remove: function remove(fn) {
            var that = this;
            if(fn){
                EasyMobile.Plan.each(that.planList, function (item, index) {
                    if (fn === item) {
                        //prevent array collapse
                        that.planList[index] = null;
                        that.thisList[index] = null;
                        return false
                    }
                })
            }else{
                that.planList = [];
            }
        },
        check: function check() {
            var that = this;
            EasyMobile.Plan.each(that.planList, function (a, b) {
                console.log(that.planList[b]);
            })
        },
        fire: function fire() {
            var that = this;
            var arg = EasyMobile(arguments).toArray();
            EasyMobile.Plan.each(that.planList, function (item, index) {
                if (item === null) {
                    that.planList.splice(index, 1);
                    that.thisList.splice(index, 1);
                    return 'DEL';
                }
                item.apply(!!that.thisList[index] ? that.thisList[index] : null, arg)
            })
        }
    };
    EasyMobile.Plan.makePlan = function () {
        return new EasyMobile.Plan();
    };
    EasyMobile.makePlan = EasyMobile.Plan.makePlan;

    //-------------------------------------------------->mobile event setting
    //inject default setting
    EasyMobile.mobileEventPrams = {
        isActive:false,
        delayTime: 200,
        areaDetect: 10,
        timeOut: 700,
        touchPrevEndTime: 0,
        touchEndTime: 0,
        touchStartTime: 0,
        target: null
    };
    //event for detect
    EasyMobile.touchStartEvent = function(e){
        EasyMobile.mobileEventPrams.touchStartTime = e.timeStamp;
        EasyMobile.mobileEventPrams.touchStart = true;
        EasyMobile.mobileEventPrams.touchStartX = EasyMobile.mobileEventPrams.movePrevX = e.changedTouches[0].pageX;
        EasyMobile.mobileEventPrams.touchStartY = EasyMobile.mobileEventPrams.movePrevY = e.changedTouches[0].pageY;
        EasyMobile.mobileEventPrams.target = e.target;
        EasyMobile.mobileEventPrams.timeOut = EasyMobile.mobileEventPrams.timeOutBackup;
        //multiple touch
        if (e.changedTouches.length >= 2) {
            EasyMobile.mobileEventPrams.touchStartXX = e.changedTouches[1].pageX;
            EasyMobile.mobileEventPrams.touchStartYY = e.changedTouches[1].pageY;
        }
    };
    EasyMobile.touchMoveEvent = function(e){
        let target = e.target;
        if (e.changedTouches.length <= 1) {
            e.moveStartX = EasyMobile.mobileEventPrams.touchStartX;
            e.moveStartY = EasyMobile.mobileEventPrams.touchStartY;
            e.movePrevX = EasyMobile.mobileEventPrams.movePrevX;
            e.movePrevY = EasyMobile.mobileEventPrams.movePrevY;
            e.moveChangeX = e.changedTouches[0].pageX - EasyMobile.mobileEventPrams.movePrevX;
            e.moveChangeY = e.changedTouches[0].pageY - EasyMobile.mobileEventPrams.movePrevY;
            e.x = e.changedTouches[0].pageX;
            e.y = e.changedTouches[0].pageY;
            EasyMobile.mobileEventPrams.movePrevX = e.changedTouches[0].pageX;
            EasyMobile.mobileEventPrams.movePrevY = e.changedTouches[0].pageY;
            if (!!target.movePool) {
                target.movePool.fire(e);
            }
        }
    };
    EasyMobile.touchEndEvent = function(e){
        let target = e.target;
        let moveX = e.changedTouches[0].pageX - EasyMobile.mobileEventPrams.touchStartX;
        let moveY = e.changedTouches[0].pageY - EasyMobile.mobileEventPrams.touchStartY;
        let moveDistance = Math.sqrt(Math.pow(moveX, 2) + Math.pow(moveY, 2));

        //multiple touch
        if (e.changedTouches.length >= 2) {
            if (e.timeStamp - EasyMobile.mobileEventPrams.touchStartTime > EasyMobile.mobileEventPrams.timeOut) {
                //timeout
            }else{
                if((Math.abs(EasyMobile.mobileEventPrams.touchStartX-EasyMobile.mobileEventPrams.touchStartXX)-Math.abs(e.changedTouches[0].pageX-e.changedTouches[1].pageX)>0)&&(Math.abs(EasyMobile.mobileEventPrams.touchStartY-EasyMobile.mobileEventPrams.touchStartYY)-Math.abs(e.changedTouches[0].pageY-e.changedTouches[1].pageY)>0)){
                    //pinch in
                    e.touchChange = Math.sqrt(Math.pow((Math.abs(EasyMobile.mobileEventPrams.touchStartX-EasyMobile.mobileEventPrams.touchStartXX)-Math.abs(e.changedTouches[0].pageX-e.changedTouches[1].pageX)),2)+Math.pow((Math.abs(EasyMobile.mobileEventPrams.touchStartY-EasyMobile.mobileEventPrams.touchStartYY)-Math.abs(e.changedTouches[0].pageY-e.changedTouches[1].pageY)),2));
                    if (!!target.pinchInPool) {
                        target.pinchInPool.fire(e);
                    }
                }else{
                    //pinch out
                    if (!!target.pinchOutPool) {
                        target.pinchOutPool.fire(e);
                    }
                }
            }
        } else {
            if (e.timeStamp - EasyMobile.mobileEventPrams.touchStartTime > EasyMobile.mobileEventPrams.timeOut) {
                //timeout
            } else {
                if (e.timeStamp - EasyMobile.mobileEventPrams.touchStartTime < EasyMobile.mobileEventPrams.delayTime) {
                    if (e.timeStamp - EasyMobile.mobileEventPrams.touchPrevEndTime < EasyMobile.mobileEventPrams.delayTime) {
                        //double tap
                        if (!!target.doubleTapPool) {
                            target.doubleTapPool.fire(e);
                        }
                        EasyMobile.mobileEventPrams.touchPrevEndTime = 0;
                    } else {
                        if (moveDistance <= EasyMobile.mobileEventPrams.areaDetect) {
                            //single tap
                            if (!!target.tapPool) {
                                target.tapPool.fire(e);
                            }
                            EasyMobile.mobileEventPrams.touchPrevEndTime = e.timeStamp;
                        } else {
                            //move
                            e.touchStartX = EasyMobile.mobileEventPrams.touchStartX;
                            e.touchStartY = EasyMobile.mobileEventPrams.touchStartY;
                            e.touchChangeX = e.changedTouches[0].pageX - EasyMobile.mobileEventPrams.touchStartX;
                            e.touchChangeY = e.changedTouches[0].pageY - EasyMobile.mobileEventPrams.touchStartY;
                            e.x = e.changedTouches[0].pageX;
                            e.y = e.changedTouches[0].pageY;
                            if (Math.abs(moveX) > Math.abs(moveY)) {
                                //X move
                                if (moveX >= 0) {
                                    //swipe right
                                    (!!target.swipeRightPool) ? target.swipeRightPool.fire(e) : (!!target.swipePool) ? target.swipePool.fire(e) : null;
                                } else {
                                    //swipe left
                                    (!!target.swipeLeftPool) ? target.swipeLeftPool.fire(e) : (!!target.swipePool) ? target.swipePool.fire(e) : null;
                                }
                            } else {
                                //Y move
                                if (moveY >= 0) {
                                    //swipe down
                                    (!!target.swipeDownPool) ? target.swipeDownPool.fire(e) : (!!target.swipePool) ? target.swipePool.fire(e) : null;
                                } else {
                                    //swipe up
                                    (!!target.swipeUpPool) ? target.swipeUpPool.fire(e) : (!!target.swipePool) ? target.swipePool.fire(e) : null;
                                }
                            }
                            EasyMobile.mobileEventPrams.touchPrevEndTime = 0;
                        }
                    }
                } else {
                    if (moveDistance <= EasyMobile.mobileEventPrams.areaDetect) {
                        //long press
                        if (!!target.longTapPool) {
                            target.longTapPool.fire(e);
                        }
                        EasyMobile.mobileEventPrams.touchPrevEndTime = e.timeStamp;
                    } else {
                        //移动
                        e.touchStartX = EasyMobile.mobileEventPrams.touchStartX;
                        e.touchStartY = EasyMobile.mobileEventPrams.touchStartY;
                        e.touchChangeX = e.changedTouches[0].pageX - EasyMobile.mobileEventPrams.touchStartX;
                        e.touchChangeY = e.changedTouches[0].pageY - EasyMobile.mobileEventPrams.touchStartY;
                        e.x = e.changedTouches[0].pageX;
                        e.y = e.changedTouches[0].pageY;
                        if (Math.abs(moveX) > Math.abs(moveY)) {
                            //X movement
                            if (moveX >= 0) {
                                //swipe right
                                (!!target.swipeRightPool) ? target.swipeRightPool.fire(e) : (!!target.swipePool) ? target.swipePool.fire(e) : null;
                            } else {
                                //swipe left
                                (!!target.swipeLeftPool) ? target.swipeLeftPool.fire(e) : (!!target.swipePool) ? target.swipePool.fire(e) : null;
                            }
                        } else {
                            //Y movement
                            if (moveY >= 0) {
                                //swipe down
                                (!!target.swipeDownPool) ? target.swipeDownPool.fire(e) : (!!target.swipePool) ? target.swipePool.fire(e) : null;
                            } else {
                                //swipe up
                                (!!target.swipeUpPool) ? target.swipeUpPool.fire(e) : (!!target.swipePool) ? target.swipePool.fire(e) : null;
                            }
                        }
                        EasyMobile.mobileEventPrams.touchPrevEndTime = 0;
                    }
                }
            }
        }
    };
    //active all listeners
    EasyMobile.mobileEventInit = function (options={}) {
        EasyMobile.mobileEventPrams = {
            isActive:(options.isActive || true),
            delayTime: (options.delayTime || 200),
            areaDetect: (options.areaDetect || 10),
            timeOut: (options.timeOut || 700),
            touchPrevEndTime: 0,
            touchEndTime: 0,
            touchStartTime: 0,
            target: null,
            isMove:false
        };
        //backup inactive event
        EasyMobile.mobileEventPrams.timeOutBackup = EasyMobile.mobileEventPrams.timeOut;
        if(EasyMobile.mobileEventPrams.isActive){
            window.addEventListener('touchstart',EasyMobile.touchStartEvent);
            window.addEventListener('touchmove',EasyMobile.touchMoveEvent);
            window.addEventListener('touchend',EasyMobile.touchEndEvent);
        }else{
            window.removeEventListener('touchstart',EasyMobile.touchStartEvent);
            window.removeEventListener('touchmove',EasyMobile.touchMoveEvent);
            window.removeEventListener('touchend',EasyMobile.touchEndEvent);
        }
    };

    EasyMobile.mobileEventInit();

    //export
    window.$e = EasyMobile;
}();
