import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent {

  name=""
  title=""
  dateofissue=""
  membershipnumber=""

  readValues=()=>
  {
    let data:any={"name":this.name,"title":this.title,"dateofissue":this.dateofissue,"membershipnumber":this.membershipnumber}
    console.log(data)
  }

}
