import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post-list/post.model';
import { NgForm} from '@angular/forms'

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['post-create.component.css'],
})
export class PostCreateComponent {
    enteredtitle = "";
    enterDiscription = "";
    enteredContent = "";

    @Output() postCreated = new EventEmitter<Post>();

    onAddPost(form: NgForm) {
        console.dir(form);
        if(form.invalid){  
            return; 
        }
        const post:Post = {
            // title: this.enteredtitle,
            // description: this.enterDiscription,
            // content: this.enteredContent
            title: form.value.title,
            description: form.value.description,
            content: form.value.content,
        }
        this.postCreated.emit(post);
        
    }
}