module scenes {
    export class Shooter extends objects.Scene {

        private _bg1 : createjs.Bitmap;
        private _bg2 : createjs.Bitmap;
        private _ship : objects.Player;
        private _enemy : objects.Enemy;
        
        private _scrollableObjContainer : createjs.Container;

        private _scrollTrigger : number = 300;

        private _g : createjs.Graphics;
        private _containerBG :createjs.Shape;
        

        constructor() {
            super();
            this.start();
        }

        public start() : void {
           
            this._bg1 = new createjs.Bitmap(assets.getResult("Space_BG"));
            this._bg1.regY = 2560;
            this._bg1.y =600; 

            this._bg2 = new createjs.Bitmap(assets.getResult("Space_BG"));
            this._bg2.regY = 2560;
            this._bg2.y =-1220;   
            
            this._scrollableObjContainer = new createjs.Container();
            this._scrollableObjContainer.regY=600;
            this._scrollableObjContainer.name ="scrollContainer";       
            this._ship = new objects.Player("player");

            this._scrollableObjContainer.addChild(this._bg1);
            this._scrollableObjContainer.addChild(this._bg2);
            this._scrollableObjContainer.addChild(this._ship);
           
            this.addChild(this._scrollableObjContainer);
            stage.addChild(this);
        }

        public update() : void {
            this._ship.update();
            super.update();
            //console.log(this._ship.position.y +" "+ this._ship.scrollDistance);
            if(this._ship.position.y < this._ship.scrollDistance)
            {
                this._ship.scrollDistance = this._ship.position.y;
            }
            
            //console.log(this._ship.position +""+this._ship.x+""+this._ship.y);
            //console.log(this._containerBG.getBounds());
            //console.log(this._scrollableObjContainer.getTransformedBounds().toString());
            if(this.checkScroll()) {
                this._scrollBGUp(this._ship.position.y);
            }
            
            for(let i of this._ship.getShots) {
                if (i.addToContainer==false){
                this._scrollableObjContainer.addChild(i);
                i.addToContainer = true;
                }
            }
        }

        get getContainer() : createjs.Container {
            return this._scrollableObjContainer;
        }
        private _scrollBGUp(speed : number) : void{
            if(this._scrollableObjContainer.regY < 5000)
                this._scrollableObjContainer.regY = speed - this._scrollTrigger;
        }

        private checkScroll() : boolean {
            if(this._ship.y <= this._scrollTrigger && this._ship.scrollDistance >= this._ship.position.y) {
                return true;
            }
            else {
                return false;
            }
        }


    }
}