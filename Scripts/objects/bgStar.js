var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Stars = (function (_super) {
        __extends(Stars, _super);
        function Stars(imageString) {
            _super.call(this, imageString, "");
            this.name = "BGStar";
            this.position = new objects.Vector2(config.Screen.WIDTH, config.Screen.CENTER_Y);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
        }
        Stars.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        return Stars;
    }(objects.GameObject));
    objects.Stars = Stars;
})(objects || (objects = {}));
//# sourceMappingURL=bgStar.js.map