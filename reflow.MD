What forces layout / reflow

All of the below properties or methods, when requested/called in JavaScript, will trigger the browser to synchronously calculate the style and layout*. This is also called reflow or layout thrashing, and is common performance bottleneck.

Element

Box metrics

elem.offsetLeft, elem.offsetTop, elem.offsetWidth, elem.offsetHeight, elem.offsetParent
elem.clientLeft, elem.clientTop, elem.clientWidth, elem.clientHeight
elem.getClientRects(), elem.getBoundingClientRect()
Scroll stuff

elem.scrollBy(), elem.scrollTo()
elem.scrollIntoView(), elem.scrollIntoViewIfNeeded()
elem.scrollWidth, elem.scrollHeight
elem.scrollLeft, elem.scrollTop also, setting them
Focus

elem.focus() can trigger a double forced layout (source)
Also…

elem.computedRole, elem.computedName
elem.innerText (source)
getComputedStyle

window.getComputedStyle() will typically force style recalc (source)

window.getComputedStyle() will force layout, as well, if any of the following is true:

The element is in a shadow tree
There are media queries (viewport-related ones). Specifically, one of the following: (source)
min-width, min-height, max-width, max-height, width, height
aspect-ratio, min-aspect-ratio, max-aspect-ratio
device-pixel-ratio, resolution, orientation
The property requested is one of the following: (source)
height, width
top, right, bottom, left
margin [-top, -right, -bottom, -left, or shorthand] only if the margin is fixed.
padding [-top, -right, -bottom, -left, or shorthand] only if the padding is fixed.
transform, transform-origin, perspective-origin
translate, rotate, scale
webkit-filter, backdrop-filter
motion-path, motion-offset, motion-rotation
x, y, rx, ry
window

window.scrollX, window.scrollY
window.innerHeight, window.innerWidth
window.getMatchedCSSRules() only forces style
Forms

inputElem.focus()
inputElem.select(), textareaElem.select() (source)
Mouse events

mouseEvt.layerX, mouseEvt.layerY, mouseEvt.offsetX, mouseEvt.offsetY (source)
document

doc.scrollingElement only forces style
Range

range.getClientRects(), range.getBoundingClientRect()
SVG

Quite a lot; haven't made an exhaustive list , but Tony Gentilcore's 2011 Layout Triggering List pointed to a few.
contenteditable

Lots & lots of stuff, …including copying an image to clipboard (source)
*Appendix

Reflow only has a cost if the document has changed and invalidated the style or layout. Typically, this is because the DOM was changed (classes modified, nodes added/removed, even adding a psuedo-class like :focus).
If layout is forced, style must be recalculated first. So forced layout triggers both operations. Their costs are very dependent on the content/situation, but typically both operations are similar in cost.
What should you do about all this? Well, the More on forced layout section below covers everything in more detail, but the short version is:
for loops that force layout & change the DOM are the worst, avoid them.
Use DevTools Timeline to see where this happens. You may be surprised to see how often your app code and library code hits this.
Batch your writes & reads to the DOM (via FastDOM or a virtual DOM implementation). Read your metrics at the begininng of the frame (very very start of rAF, scroll handler, etc), when the numbers are still identical to the last time layout was done.
![image](https://cloud.githubusercontent.com/assets/39191/10144107/9fae0b48-65d0-11e5-8e87-c9a8e999b064.png) _Timeline trace of The Guardian. Outbrain is forcing layout repeatedly, probably in a loop._
Cross-browser

The above data was built by reading the Blink source, so it's true for Chrome, Opera, and most android browsers.
Tony Gentilcore's Layout Triggering List was for 2011 WebKit and generally aligns with the above.
Modern WebKit's instances of forced layout are mostly consistent: updateLayoutIgnorePendingStylesheets - GitHub search - WebKit/WebKit
Gecko's reflow appears to be requested via FrameNeedsReflow. Results: FrameNeedsReflow - mozilla-central search
No concrete data on Edge/IE, but it should fall roughly in line, as the return values for these properties are spec'd. What would differ is the amount of clever optimization.
Browsing the Chromium source:

forced layout (and style recalc): updateLayoutIgnorePendingStylesheets - Chromium Code Search
forced style recalc: updateLayoutTree - Chromium Code Search
CSS Triggers

CSS Triggers is a related resource and all about what operations are required to happen in the browser lifecycle as a result of setting/changing a given CSS value. It's a great resource. The above list, however, are all about what forces the purple/green/darkgreen circles synchronously from JavaScript.

More on forced layout

Avoiding layout thrashing — Web Fundamentals
Fixing Layout thrashing in the real world | Matt Andrews
Timeline demo: Diagnosing forced synchronous layouts - Google Chrome
Preventing 'layout thrashing' | Wilson Page
wilsonpage/fastdom
Rendering: repaint, reflow/relayout, restyle / Stoyan
We spent a week making Trello boards load extremely fast. Here’s how we did it. - Fog Creek Blog
Minimizing browser reflow  |  PageSpeed Insights  |  Google Developers
Optimizing Web Content in UIWebViews and Websites on iOS
Accelerated Rendering in Chrome
web performance for the curious
Jank Free
