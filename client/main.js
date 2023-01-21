const complimentBtn = document.getElementById("complimentButton");
const fortune = document.getElementById("fortune");
const color = document.getElementById("pickColor");
const picture = document.getElementById("pic-button");
const pic = document.getElementById("pic");

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment);

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            document.getElementById("fortune-here").innerText = data;
        });
};

fortune.addEventListener('click', getFortune);

const getColor = () => {
    axios.get("http://localhost:4000/api/color/")
        .then(res => {
            const data = res.data;
            document.body.style.backgroundColor = data;
            document.getElementById("color").innerText = data;
        });
};

color.addEventListener('click', getColor);

const getPicture = () => {
    axios.get("http://localhost:4000/api/picture")
        .then(res => {
            const data = res.data;
            pic.innerHTML = data;
        });
};

picture.addEventListener('click', getPicture);
