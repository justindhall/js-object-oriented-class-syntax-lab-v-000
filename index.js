class BoardMember{
    constructor(name, homestate, training){
      this.name = name;
      this.homestate = homestate;
      this.training = training;
    }
    
    veto(){
      return 'No, I must disagree';
    }
    
    
}