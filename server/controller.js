module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life", "A golden egg of opportunity falls into your lap this month", "A person is never to (sic) old to learn.", "A short pencil is usually better than a long memory any day.", "A soft voice may be awfully persuasive."];
        let randoInd = Math.floor(Math.random() * fortunes.length);
        let randoFortune = fortunes[randoInd];

        res.status(200).send(randoFortune);
    },

    getColor: (req, res) => {
        let val = 0xFFFFFF;
        let randoNum = Math.floor(Math.random() * val);
        randoNum = randoNum.toString(16);
        let randColor = randoNum.padStart(6, 0);
        res.status(200).send(`#${randColor.toUpperCase()}`);
    },

    getPicture: (req, res) => {
        const pictures = new Array();
        pictures[0] = "https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960";
        pictures[1] = "https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg";
        pictures[2] = "https://i.insider.com/60144316a7c0c4001991dde6?width=1000&format=jpeg&auto=webp";
        pictures[3] = "https://cms-assets.themuse.com/media/lead/_1200x630_crop_center-center_82_none/01212022-1047259374-coding-classes_scanrail.jpg?mtime=1642798879";

        let picPick = Math.floor(Math.random() * pictures.length);
        let img = pictures[picPick];
        res.status(200).send(img);
    }
}
