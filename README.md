easymobile_js
---

<br/>

Easymobile is a js plugin uses for mobile gestures, support advanced setting and has express way to get changed value.

---

#### Key Feature:
+ Easy and quick to setup and use
+ Can add many event to on element
+ Can remove event
+ Quickly get changed position value
+ Custom Setting

<br/>

---

#### Instruction:
+ Optional, Init Plugins
```javascript
$e.mobileEventInit({
        isActive: true,    //active plugin
        delayTime:200,     //waiting time for second tap
        areaDetect:10,     //tolerate value for finger slightly shift on screen
        timeOut: 700,      //listen time for long press
    })
```
+  Add new gesture to element, **this** already bind to element by default `$e(element).tap(fn(e)[, this])`

<br/>

---

#### Init Options:
+ **isActive**: active plugin
    + true (default)
+ **delayTime**: waiting time for second tap
    + 200 (defalut,ms)
+ **areaDetect**: tolerate value for finger slightly shift on screen
    + 10 (default, px)
+ **timeOut**: listen time for long press
    + 700 (default, ms)

<br/>

---

#### Gesture Support
+ $e(element).<br>
    + **tap**(fn(e),this)
    + **doubleTap**(fn(e),this)
    + **longTap**(fn(e),this)
    + **swipe**(fn(e),this)
    + **swipeUp** / Down / Left / Right(fn(e),this)
    + **pinchIn** / Out(fn(e),this)
    + **move**(fn(e),this)
   
<br/>

---

#### Add Event
```javascript
$e(element).tap(fn)
```
+ Element can be real **element** or **string**, such as `'.box1' '#box1'`
+ Can add more than one event to element
+ When gesture is detected, all event will call follow by the order added
+ **'this'** is ready bind to element, but you can still bind to other element by using `$e(element).tap(fn, this)`
+ No repeat event
+ Event object will automatically pass into the function

<br/>

---

#### Remove Event
```javascript
$e(element).tapRemove(fn)
$e(element).tapRemove()
```
+ Remove specific event by pass fn
+ Remove all events by pass nothing

<br/>

---

#### Additional Attributes
For different gestures, some extra attributes already injected in **'event'** object, all 'px' based
> **swipe / swipeLeft / swipeRight / swipeUp / swipeDown**
>+ e.**x**: end X
>+ e.**y**: end Y
>+ e.**touchStartX**: start X
>+ e.**touchStartY**: start Y
>+ e.**touchChangeX**: changed X
>+ e.**touchChangeY**: changed Y

> **pinchIn / pinchOut**
>+ e.**touchChange**: distance from start to end

> **move**
>+ e.**x**: end X
>+ e.**y**: end Y
>+ e.**moveStartX**: start X
>+ e.**moveStartY**: start Y
>+ e.**moveChangeX**: changed X
>+ e.**moveChangeY**: changed Y
>+ e.**movePrevX**: previous tick X
>+ e.**movePrevY**: previous tick Y

<br/>

---

#### Notice
+ When set swipe and swipeLeft/Right/Up/Down or move, both of them will be listened
+ When swipeLeft/Right/Up/Down exist, swipe will not work

<br/>

---

Feel free to let me know if there are any functions or parts need to be fixed :)
<br>By Jiawei Zhou 2018
