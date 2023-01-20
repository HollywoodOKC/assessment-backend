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
    }
}
