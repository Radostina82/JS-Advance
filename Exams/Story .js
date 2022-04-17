class Story{
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this._likes = [];
    }

    get likes(){
        if(this._likes.length == 0){
            return `${this.title} has 0 likes`;
        }
        if(this._likes.length == 1){
            return `${this._likes[0]} likes this story!`;
        }else{
            return `${this._likes[0]} and ${this._likes.length -1} others like this story!`
        }
    }

    like(username){
        if(this._likes.includes(username)){
            throw new Error(`You can't like the same story twice!`);
        }
        if(username == this.creator){
            throw new Error (`You can't like your own story!`);
        }
        this._likes.push(username);

        return `${username} liked ${this.title}!`; 
    }

    dislike (username){
            if(!this._likes.includes(username)){
                throw new Error(`You can't dislike this story!`);
            }

           const index = this._likes.indexOf(username);
           this._likes.splice(index,1);

           return `${username} disliked ${this.title}`;
    }

    comment (username, content, id){
        const obj = {
            Id: id,
            Username: username,
            Content: content,
        Replies:[]
        }
       // this.comments = [];
       const commentWithId = this.comments.find(o=> o.Id == id);

       if(commentWithId ){
        const replyId = Number(commentWithId.Id + '.' + Number(commentWithId.Replies.length +1));
        const replay = {
            Id: replyId,
            Username: username,
            Content: content,
        };
        commentWithId.Replies.push(replay);
        return `You replied successfully`;
       }else{
           if(id == undefined){
               obj.Id = this.comments.length+1;
           }
            this.comments.push(obj);//da proverq ako ima problem
            return `${obj.Username} commented on ${this.title}` ;    
       }

    }

    toString(sortingType){
        const result = [];

        if(sortingType == 'asc'){
            this.comments.sort((e1, e2) => e1.Id - e2.Id).forEach(e=>{
                e.Replies.sort((r1,r2)=> r1.Id - r2.Id);
            });
        }else if(sortingType == 'desc'){
            this.comments.sort((e1,e2) => e2.Id - e1.Id).forEach(e=>{
                e.Replies.sort((r1,r2)=> r2.Id - r1.Id);
            });
        }else if(sortingType == 'username'){
            this.comments.sort((e1, e2)=> e1.Username.localeCompare(e2.Username)).forEach(e=>{
                e.Replies.sort((r1,r2)=> r1.Username.localeCompare(r2.Username))});
        }
             
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push(`Comments:`);
        this.comments.forEach(e=> {
            result.push(`-- ${e.Id}. ${e.Username}: ${e.Content}`);
            if(e.Replies!=0){
                e.Replies.forEach(r => result.push(`--- ${r.Id}. ${r.Username}: ${r.Content} `));
            }
        });
        return result.join('\n');
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
