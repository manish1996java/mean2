import { Post } from './post-list/post.model';


export class PostService{
    private posts:Post[] = [];

    getPosts(){
        return [...this.posts];
    }
    setPosts(title:String,description:String,content:String){
        const post:Post = {title: title,description: description,content:content};
        this.posts.push(post); 
    }
}