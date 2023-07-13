var images = ["https://observer.com/wp-content/uploads/sites/2/2017/12/screen-shot-2017-12-11-at-8-41-01-am.png?quality=80&strip", "https://static.demilked.com/wp-content/uploads/2016/08/stylish-badass-grandma-instagram-baddie-winkle-thumb640.jpg", "https://imageio.forbes.com/specials-images/imageserve/62bf4a76be9035384b5bfc2e/The-Dad-Gang-Founder-and-Author-Sean-Williams/960x0.jpg?format=jpg&width=960", "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-02/mother-quotes-2x1-aw-220202-da4941.jpg", "https://live.staticflickr.com/2281/2176742840_a613677102_b.jpg", "https://sheymarinphotography.com/website/wp-content/uploads/2013/10/cayden2_0013.jpg"]

var names = ["family album", "Benito Carlito - grandpa", "Maria Veneto - grandma", "Mohamaad Bin Kuwaiti - father", "Carmen San Diego - mother", "Karen Smith - sister", "Juan Hernandez - brother"];

var age = [85, 78, 50, 36, 16, 3];

age.sort();

age.reverse();

var i = 0;

function update() {

    i++;

    var numbersOfFamilyMembersInArray = 6
    if (i > numbersOfFamilyMembersInArray) {
        i = 0
    }

    var updatedImage = images[i];

    var updatedName = names[i];
     
    var updatedAge = ages[i];

    document.getElementById("familyMemberImage").src = updatedImage; 

    document.getElementById("familyMemberName").innerHTML = updatedName;

    document.getElementById("familyMemberAge").innerHTML = updatedAge;
}