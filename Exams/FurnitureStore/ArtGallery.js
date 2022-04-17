class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle( articleModel, articleName, quantity ){
        articleModel = articleModel.toLowerCase();
        const article = Object.keys(this.possibleArticles);
        
            if(!article.includes(articleModel)){
                return `This article model is not included in this gallery!`;
            }
        
        for(const item of this.listOfArticles){
            if(item.articleName == articleName && item.articleModel==articleModel){
                item.quantity += quantity;
                return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
            }
        }

        this.listOfArticles.push({articleModel, articleName, quantity });

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest ( guestName, personality){
        for(const item of this.guests){
            if(item.guestName == guestName){
                return `${guestName} has already been invited.`;
            }
        }

        if(personality == 'Vip'){
        this.guests.push({guestName, points: 500, purchaseArticle: 0})
        }else if(personality == 'Middle'){
            this.guests.push({guestName, points: 250, purchaseArticle: 0})
        }else{
            this.guests.push({guestName, points: 50, purchaseArticle: 0})
        }

        return `You have successfully invited ${guestName}!`;
    }
    buyArticle ( articleModel, articleName, guestName){
        const item = this.listOfArticles.filter(a => a.articleModel == articleModel || a.articleName == articleName);

        if(item.length == 0){
            throw new Error (`This article is not found.`);
        }

        if(item[0].articleModel != articleModel || item[0].articleName != articleName){
            throw new Error (`This article is not found.`);
        }

        if(item[0].quantity == 0){
            return `The ${articleName} is not available.`;
        }
        
        const guest = this.guests.filter(g=> g.guestName==guestName);

        if(guest.length==0){
            return `This guest is not invited.`;
        }
         if(guest[0].points < this.possibleArticles[articleModel])  {
            return `You need to more points to purchase the article.`;
         }        
                       
          guest[0].points -= this.possibleArticles[articleModel];
         item[0].quantity -= 1;
         guest[0].purchaseArticle += 1;
         return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo (criteria){
        const result = [];
        if(criteria == 'article'){
            result.push(`Articles information:`);
            for( const item of this.listOfArticles){
                result.push(`${item.articleModel} - ${item.articleName} - ${item.quantity}`);
            }
        }else if(criteria == 'guest'){
            result.push(`Guests information:`);
            for(const item of this.guests){
                result.push(`${item.guestName} - ${item.purchaseArticle}`);
            }
        }
        return result.join('\n');
    }
}


let art = new ArtGallery("Curtis Mayfield");

art.addArticle('picture', 'Mona Liza', 3);
art.addArticle('Item', 'Ancient vase', 2);
art.addArticle('picture', 'Mona Liza', 1);

art.inviteGuest('John', 'Vip');
art.inviteGuest('Peter', 'Middle');

console.log(art.buyArticle('picture', 'Mona Liza', 'John'));
console.log(art.buyArticle('item', 'Ancient vase', 'Peter'))
console.log(art.buyArticle('item', 'Mona Liza', 'John'))