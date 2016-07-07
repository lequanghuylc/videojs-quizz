# videojs-quizz
Popup quizz at the chosen time, inside videojs player

## Introduction
A plugin for Video.js that helps you create popup quizz inside player at the time you choose.

This plugin have the feature to popup __HTML content__ inside player. Quizz just happens to be the suitable one to demonstrate this feature. An quizzes can be used for __E-learning purpose__. 

(You can use it with some modifications to popup ads as well but with video ads, there's another option like _videojs-contrib-ads_)

_This plugin were made and tested with Video.js version 5 (5.8), which is included in this repo._

## Feature
- All videojs (ver5) features (Change video speed, show subtitles with some modification)
- Multiple choices quizz format. One quizz per video, multiple questions.
- Youtube and Direct link Support
- Addition hotkeys _(`Space`: Play | `Enter`: Toggle Fullscreen | `M`: Mute| `Arrow keys`: Jump & Volume | `Q`: Open quizz)_


Note: This plugin requires Jquery to run.

## Setup

Clone or download this repo. 

> git clone https://github.com/lequanghuylc/videojs-quizz.git


The file __index.html__ is an example, the rest will be used for setting up. Just copy them for implementation.
_(Other methods are on the way)_

## Usage

Just insert iframe tag into your document.

With direct link:
```html
<iframe src="direct.html?poster=http://lesterbanks.com/lxb_metal/wp-content/uploads/2014/07/After-Effects-Ocean-Fractal-Noise.jpg&t=1&link=http://vjs.zencdn.net/v/oceans.mp4&q=quizz1.html" allowfullscreen width="720px" height="405px" style="border:none;"></iframe>
```
- Use __direct.html__ file, so point the `src` to the this file. _(you can change to any name you want and insert to iframe)_
- The structure of iframe src is _direct.html?link=__MP4_LINK__&poster=__IMG_LINK__&t=__TIME_POPUP_QUIZZ__&quizz=__LINK_HTML_TO_QUIZZ___ (not specific to this order, can be flexible). You can use this plugin right away with editting __direct.html__ file, just need to put information in iframe url.
- If you don't put poster image link into iframe url, no poster image will be displayed.

With Youtube Id:
```html
<iframe src="ytb.html?v=up5CSxJwpWQ&t=5&q=quizz2.html" allowfullscreen width="720px" height="405px" style="border:none;"></iframe>
```

- Use __ytb.html__ file, so point the `src` to the this file. _(you can change to any name you want and insert to iframe)_
- The structure of iframe src is _ytb.html?v=__YOUTUBE_ID__&t=__TIME_POPUP_QUIZZ__&quizz=__LINK_HTML_TO_QUIZZ___ (not specific to this order, can be flexible). You can use this plugin right away with editting __ytb.html__ file, just need to put information in iframe url.

With both direct link and Youtube ID:
- If you don't provide popup time, the default value is 999999, which means popup won't show up for many case. (Still can be show by press `Q`)
- Quizz file is __html file__, with similar fomart to __quizz1.html__ or __quizz2.html__. If no quizz link is provided, the default value is __noquizz.html__

## Live demo

(Comming soon)