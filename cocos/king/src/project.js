require=function n(t,e,o){function c(r,s){if(!e[r]){if(!t[r]){var u="function"==typeof require&&require;if(!s&&u)return u(r,!0);if(i)return i(r,!0);var a=new Error("Cannot find module '"+r+"'");throw a.code="MODULE_NOT_FOUND",a}var p=e[r]={exports:{}};t[r][0].call(p.exports,function(n){var e=t[r][1][n];return c(e?e:n)},p,p.exports,n,t,e,o)}return e[r].exports}for(var i="function"==typeof require&&require,r=0;r<o.length;r++)c(o[r]);return c}({Bomb:[function(n,t,e){"use strict";cc._RFpush(t,"fe3d8HtCjhBjYRFb32JZz4k","Bomb"),cc.Class({"extends":cc.Component,properties:{king:{"default":null,type:cc.Node}},judgeDown:function(){"down"==this.king.getComponent("King").state?console.log("down---------------------"):cc.director.loadScene("Over")},judgeJump:function(){"jump"==this.king.getComponent("King").state?console.log("jump---------------------"):cc.director.loadScene("Over")},onLoad:function(){this.schedule(function(){Math.random()>.5?this.getComponent(cc.Animation).play("bomb_high"):this.getComponent(cc.Animation).play("bomb_low")},3)}}),cc._RFpop()},{}],Game:[function(n,t,e){"use strict";cc._RFpush(t,"57b63oxRKpOzaFsEKG9a4Ih","Game"),cc.Class({"extends":cc.Component,properties:{king:{"default":null,type:cc.Node}},onLoad:function(){var n=this;this.node.on("touchstart",function(t){var e=cc.director.getVisibleSize();t.getLocationX()<e.width/2?n.king.getComponent("King").down():n.king.getComponent("King").jump()}),this.node.on("touchend",function(t){var e=cc.director.getVisibleSize();t.getLocationX()<e.width/2&&n.king.getComponent("King").downRelease()})}}),cc._RFpop()},{}],King:[function(n,t,e){"use strict";cc._RFpush(t,"ca1d6bWm45GtIdirbPF9SC7","King"),cc.Class({"extends":cc.Component,properties:{jumpHeight:0,jumpDuration:0,state:"run"},run:function(){this.getComponent(cc.Animation).play("king_run"),this.state="run"},jump:function(){"run"==this.state&&(this.state="jump",this.getComponent(cc.Animation).stop(),this.node.runAction(cc.sequence(cc.jumpBy(this.jumpDuration,cc.p(0,0),this.jumpHeight,1),cc.callFunc(function(){this.run()},this))))},down:function(){"run"==this.state&&(this.state="down",this.node.runAction(cc.scaleTo(.05,1,.5)))},downRelease:function(){"down"==this.state&&this.node.runAction(cc.sequence(cc.scaleTo(.05,1,1),cc.callFunc(function(){this.run()},this)))}}),cc._RFpop()},{}],Over:[function(n,t,e){"use strict";cc._RFpush(t,"9857dKTII1GRa46LZJ99Dh5","Over"),cc.Class({"extends":cc.Component,properties:{},reTry:function(){cc.director.loadScene("Game")},onLoad:function(){}}),cc._RFpop()},{}]},{},["Bomb","Game","King","Over"]);