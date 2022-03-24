const fortuneCookies = [
    "Conquer your fears or the will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "you will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortuneCookies.length);
    return fortuneCookies[idx];
}