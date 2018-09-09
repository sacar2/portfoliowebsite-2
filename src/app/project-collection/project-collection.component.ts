import { Component, OnInit } from '@angular/core';
// const firebase = require("firebase");
    // require("firebase/firestore");


var config = {
  apiKey: "AIzaSyCiQzeyg935-ZKjtwvsK6eDZDLAsPAiGf4",
  authDomain: "selinsportfolio-54ab8.firebaseapp.com",
  databaseURL: "https://selinsportfolio-54ab8.firebaseio.com",
  projectId: "selinsportfolio-54ab8",
  storageBucket: "selinsportfolio-54ab8.appspot.com",
  messagingSenderId: "354499606071"
};


@Component({
  selector: 'app-project-collection',
  templateUrl: './project-collection.component.html',
  styleUrls: ['./project-collection.component.scss']
})
export class ProjectCollectionComponent implements OnInit {

  projects=[]
  constructor() { }

  ngOnInit() {
  //   this.initializeFirestore();
  }

  // initializeFirestore(){
  //   firebase.initializeApp(config);
  //   console.log(firebase.name);  // "[DEFAULT]"

  //   const firestore = firebase.firestore();
  //   const settings = {timestampsInSnapshots: true};
  //   firestore.settings(settings);
  //   // With this change, timestamps stored in Cloud Firestore will be read back as
  //   // Firebase Timestamp objects instead of as system Date objects. So you will also
  //   // need to update code expecting a Date to instead expect a Timestamp. For example:
  //     // // Old:
  //     // const date = snapshot.get('created_at');
  //     // // New:
  //     // const timestamp = snapshot.get('created_at');
  //     // const date = timestamp.toDate();

  //   // firestore.collection("projects").get().then((querySnapshot) => {
  //   //   querySnapshot.forEach((doc) => {
  //   //       console.log(`${doc.id} => ${doc.data()}.val()`);
  //   //   });
  //   // });
    
  //   firestore.collection("projects").get()
  //   .then(function(querySnapshot) {
  //       querySnapshot.forEach(function(doc) {
  //           // doc.data() is never undefined for query doc snapshots

  //           var short = ""
  //           doc.data().tags.forEach(tag => {
  //             short += "<small>" + tag +"</small>"
  //           });
  //           var newelement = document.createElement('div');
  //           newelement.innerHTML = "<div class='panel project'><div><h3>"+
  //           doc.data().name+"</h3><p>"+ doc.data().short +"</p>" + short +"</div></div>";

  //           document.getElementById('projects-container').appendChild(newelement.firstChild);
  //           console.log(doc.id, " => ", doc.data());
  //       });
  //   })
  //   .catch(function(error) {
  //       console.log("Error getting documents: ", error);
  //   });

  // }

}
