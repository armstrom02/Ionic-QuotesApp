export class SettingsService{
private altBackground = false;

setBackground(isAlt: boolean){
    this.altBackground = isAlt;
}

isBackground(){
   return this.altBackground;
}

}