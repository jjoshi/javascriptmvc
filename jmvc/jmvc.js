steal
.plugins('steal/generate','steal/get','steal/build','steal/coffee','steal/less','steal/clean')

.plugins('funcunit').
then('pages/init').plugins('jquery',
'jquery/controller',
	'jquery/controller/subscribe',
	'jquery/controller/history',
'jquery/view',
	'jquery/view/ejs',
	'jquery/view/jaml',
	'jquery/view/micro',
	'jquery/view/tmpl',
'jquery/model',
	'jquery/model/list',
		'jquery/model/list/cookie',
		'jquery/model/list/local',
	'jquery/model/associations',
	'jquery/model/backup',
	'jquery/model/validations',

'jquery/event/default',
'jquery/event/destroyed',
'jquery/event/drag',
	'jquery/event/drag/limit',
	'jquery/event/drag/scroll',
	'jquery/event/drag/step',
'jquery/event/drop',
'jquery/event/hover',
'jquery/event/key',
'jquery/event/pause',
'jquery/event/resize',
'jquery/event/swipe',
'jquery/event/selection',

'jquery/dom/compare',
'jquery/dom/closest',
'jquery/dom/within',
'jquery/dom/form_params',
'jquery/dom/dimensions',
'jquery/dom/fixture',
'jquery/dom/cookie',
'jquery/dom/selection',

'documentjs'
)
.then(
"//jquery/model/pages/encapsulate",
"//jquery/model/pages/typeconversion",
"//jquery/model/pages/events",
"//jquery/controller/pages/listening",
"//jquery/controller/pages/plugin",
"//jquery/controller/pages/document",
"//funcunit/pages/setup.js",
"//funcunit/pages/writing.js",
"//funcunit/pages/selenium.js",
"//funcunit/pages/mastering.js",
"//funcunit/pages/standalone.js",
"//funcunit/pages/example.js")


