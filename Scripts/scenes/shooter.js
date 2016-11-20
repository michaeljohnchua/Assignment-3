var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Shooter = (function (_super) {
        __extends(Shooter, _super);
        function Shooter() {
            _super.call(this);
            this._scrollTrigger = 300;
            this.start();
        }
        Shooter.prototype.start = function () {
            this._bg1 = new createjs.Bitmap(assets.getResult("Space_BG"));
            this._bg1.regY = 2560;
            this._bg1.y = 600;
            this._bg2 = new createjs.Bitmap(assets.getResult("Space_BG"));
            this._bg2.regY = 2560;
            this._bg2.y = -1220;
            this._scrollableObjContainer = new createjs.Container();
            this._scrollableObjContainer.regY = 600;
            this._scrollableObjContainer.name = "scrollContainer";
            this._ship = new objects.Player("player");
            this._scrollableObjContainer.addChild(this._bg1);
            this._scrollableObjContainer.addChild(this._bg2);
            this._scrollableObjContainer.addChild(this._ship);
            this.addChild(this._scrollableObjContainer);
            stage.addChild(this);
        };
        Shooter.prototype.update = function () {
            this._ship.update();
            _super.prototype.update.call(this);
            //console.log(this._ship.position.y +" "+ this._ship.scrollDistance);
            if (this._ship.position.y < this._ship.scrollDistance) {
                this._ship.scrollDistance = this._ship.position.y;
            }
            //console.log(this._ship.position +""+this._ship.x+""+this._ship.y);
            //console.log(this._containerBG.getBounds());
            //console.log(this._scrollableObjContainer.getTransformedBounds().toString());
            if (this.checkScroll()) {
                this._scrollBGUp(this._ship.position.y);
            }
            for (var _i = 0, _a = this._ship.getShots; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.addToContainer == false) {
                    this._scrollableObjContainer.addChild(i);
                    i.addToContainer = true;
                }
            }
        };
        Object.defineProperty(Shooter.prototype, "getContainer", {
            get: function () {
                return this._scrollableObjContainer;
            },
            enumerable: true,
            configurable: true
        });
        Shooter.prototype._scrollBGUp = function (speed) {
            if (this._scrollableObjContainer.regY < 5000)
                this._scrollableObjContainer.regY = speed - this._scrollTrigger;
        };
        Shooter.prototype.checkScroll = function () {
            if (this._ship.y <= this._scrollTrigger && this._ship.scrollDistance >= this._ship.position.y) {
                return true;
            }
            else {
                return false;
            }
        };
        return Shooter;
    }(objects.Scene));
    scenes.Shooter = Shooter;
})(scenes || (scenes = {}));
//# sourceMappingURL=shooter.js.map