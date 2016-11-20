module objects {
    export class Stars extends objects.GameObject {

        private _move : objects.Vector2;
        
        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString:string) {
            super(imageString, "");

            this.name = "BGStar";
            this.position = new objects.Vector2(config.Screen.WIDTH, config.Screen.CENTER_Y);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
           

        }

        public update() : void {
            super.update();
           
        }
    }
}