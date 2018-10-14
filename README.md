easymobile_js
---
#### Introduction:
Easymobile is a js plugin uses for mobile gestures, support advanced setting and has express way to get changed value.

---
<br/>

#### Key Feature:
+ Easy and quick to setup and use
+ Can add many event to on element
+ Can remove event
+ Quickly get changed position value
+ Custom Setting

---
<br/>

#### Instruction:
1. Add new gesture to element, **this** already bind to element by default `$e(element).tap(fn(e)[, this])`
2. Optional, Init Plugins
```javascript
$e.mobileEventInit({
        isActive: true,    //active plugin
        delayTime:200,     //waiting time for second tap
        areaDetect:10,     //tolerate value for finger slightly shift on screen
        timeOut: 700,      //listen time for long press
    })
```
---
<br/>

#### Init Options:
+ **isActive**: true (default)
+ **delayTime**: 200 (defalut,ms)
+ **areaDetect**: 10 (default, px)
+ **timeOut**: 700 (default, ms)

---
<br/>

#### Gesture Support
+ $e(element).<br>
    + **tap**(fn(e),this)
    + **doubleTap**(fn(e),this)
    + **longTap**(fn(e),this)
    + **swipe**(fn(e),this)
    + **swipeUp** / Down / Left / Right(fn(e),this)
    + **pinchIn** / Out(fn(e),this)
    + **move**(fn(e),this)
    
---
<br/>

#### Add Event
```javascript
$e(element).tap(fn)
```
+ Element can be real **element** or **string**, such as `'.box1' '#box1'`
+ Can add more than one event to element
+ When gesture is detected, all event will call follow by the order added
+ **'this'** is ready bind to element
+ No repeat event
+ Event object will automatically pass into the function

---
<br/>

#### Remove Event
```javascript
$e(element).tapRemove(fn)
$e(element).tapRemove()
```
+ Remove specific event by pass fn
+ Remove all events by pass nothing

---
<br/>

#### Additional Attributes
For different gestures, some extra attributes already injected in **'event'** object, all 'px' based
> **swipe / swipeLeft / swipeRight / swipeUp / swipeDown**
>+ e.**x**: end X
>+ e.**y**: end Y
>+ e.**touchStartX**: start X
>+ e.**touchStartY**: start Y
>+ e.**touchChangeX**: changed X
>+ e.**touchChangeY**: changed Y
---
> **pinchIn / pinchOut**
>+ e.**touchChange**: distance from start to end
---
> **move**
>+ e.**x**: end X
>+ e.**y**: end Y
>+ e.**moveStartX**: start X
>+ e.**moveStartY**: start Y
>+ e.**moveChangeX**: changed X
>+ e.**moveChangeY**: changed Y
>+ e.**movePrevX**: previous tick X
>+ e.**movePrevY**: previous tick Y


---
<br/>

#### Notice
+ When set swipe and swipeLeft/Right/Up/Down or move, both of them will be listened


---
<br/>
Feel free to let me know if there are any functions or parts need to be fixed :)
<br>By Jiawei Zhou 2018