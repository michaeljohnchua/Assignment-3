module objects{
    export class Laser extends objects.GameObject {

        private _speed : number = 7;
        
        public addToContainer : boolean = false;
        constructor() {
            super("laserGreen", "");
            //console.log("constructor");
            
        }


        public update() : void {
            super.update();
            this.position.y -= this._speed;
        }

        public setPosition(newPosition:Vector2) : void {

            console.log(newPosition.x +" "+ newPosition.y +" "+this.position.x)
            this.position.x = newPosition.x;
            this.position.y = newPosition.y;
        }
    }
}