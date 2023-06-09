import { Post } from "./interfaces";

export class User {
    constructor(
        private readonly imgUrl: string,
        private readonly name: string,
        private readonly password: string,
        private readonly userName: string,
        private posts: Post[] = []
    ) {}

    getName() {
        return this.name;
    }

    getUserName() {
        return this.userName;
    }

    getPassword() {
        return this.password;
    }

    getImgUrl() {
        return this.imgUrl;
    }

    getPosts() {
        return this.posts;
    }

    setPosts(posts: Post[]){
        this.posts = posts;
    }

    addPost(post: Post) {
        this.posts.push(post);
    }

    removePost(post: Post) {
        //TODO
    }
}
