import { Component } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  title=""
  author=""
  description=""
  image=""
  publisher=""
  language=""
  distributor=""
  releasedYear=""
  price=""

  readValues=()=>
  {
    let data:any = {"title":this.title,"author":this.author,"description":this.description,"image":this.image,"publisher":this.publisher,
  "language":this.language,"distributor":this.distributor,"releasedYear":this.releasedYear,"price":this.price}
  console.log(data)
  }

}
