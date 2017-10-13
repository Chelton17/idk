Bridge.assembly("BabylonJsDemo", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = [System,BabylonJsDemo.SceneProviders,BabylonJsDemo];
    $m($n[2].App, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetSceneProvider","is":true,"t":8,"pi":[{"n":"number","pt":$n[0].Int32,"ps":0}],"sn":"GetSceneProvider","rt":$n[1].AbstractSceneProvider,"p":[$n[0].Int32]},{"a":1,"n":"InitEventHandlers","is":true,"t":8,"sn":"InitEventHandlers","rt":$n[0].Void},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void},{"a":2,"n":"SwitchSceneTo","is":true,"t":8,"pi":[{"n":"number","pt":$n[0].Int32,"ps":0}],"sn":"SwitchSceneTo","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"_canvas","is":true,"t":4,"rt":HTMLCanvasElement,"sn":"_canvas"},{"a":1,"n":"_engine","is":true,"t":4,"rt":BABYLON.Engine,"sn":"_engine"},{"a":1,"n":"_isRun","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_isRun","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_scene","is":true,"t":4,"rt":BABYLON.Scene,"sn":"_scene"}]}; });
    $m($n[1].AbstractSceneProvider, function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ab":true,"a":2,"n":"CreateScene","t":8,"pi":[{"n":"canvas","pt":HTMLCanvasElement,"ps":0},{"n":"engine","pt":BABYLON.Engine,"ps":1}],"sn":"CreateScene","rt":BABYLON.Scene,"p":[HTMLCanvasElement,BABYLON.Engine]}]}; });
    $m($n[1].Scene1Provider, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"CreateScene","t":8,"pi":[{"n":"canvas","pt":HTMLCanvasElement,"ps":0},{"n":"engine","pt":BABYLON.Engine,"ps":1}],"sn":"CreateScene","rt":BABYLON.Scene,"p":[HTMLCanvasElement,BABYLON.Engine]}]}; });
    $m($n[1].Scene2Provider, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"CreateScene","t":8,"pi":[{"n":"canvas","pt":HTMLCanvasElement,"ps":0},{"n":"engine","pt":BABYLON.Engine,"ps":1}],"sn":"CreateScene","rt":BABYLON.Scene,"p":[HTMLCanvasElement,BABYLON.Engine]}]}; });
    $m($n[1].Scene3Provider, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"CreateScene","t":8,"pi":[{"n":"canvas","pt":HTMLCanvasElement,"ps":0},{"n":"engine","pt":BABYLON.Engine,"ps":1}],"sn":"CreateScene","rt":BABYLON.Scene,"p":[HTMLCanvasElement,BABYLON.Engine]}]}; });
});