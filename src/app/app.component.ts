import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Define the initial state
  newMemberName = '';
  numOfTeams: number | '' = ''; // A number or a comletly empty string
  members: string[] = []
  teams: string[][] = [];
  errorMessage = '';

  // Functions
  add(){
    if(!this.newMemberName){
      this.errorMessage = "Name can't be empty!";
    }
    this.members.push(this.newMemberName)
    this.newMemberName = "";
  }

  onInput(member: string){
    this.newMemberName = member;
    console.log(this.newMemberName);
  }

  onNumOfTeamsInput(num: string){
    this.numOfTeams = Number(num);
  }

  // Team logic
  generateTeams(){

    if(!this.numOfTeams || this.numOfTeams <= 0){
      this.errorMessage = "Invalid number of teams"
      return;
    }

    // Remove error message
    this.errorMessage = '';
    // Create a reference to members array
    const allMembers = [...this.members];

    while(allMembers.length){
      for (let i = 0; i < this.numOfTeams; i++){
        // Create random inex
        const randomIndex = Math.floor(Math.random() * allMembers.length);
  
        // Remove emember at the random index
        const member = allMembers.splice(randomIndex, 1)[0];
  
        if (!member) {
          break;
        }

        // Add members to array
        if(this.teams[i]){
          this.teams[i].push(member)
        } else {
          this.teams[i] = [member];
        }       
      }
    }
    console.log(this.teams);
    this.members = [];
    this.numOfTeams = '';
  }
}
