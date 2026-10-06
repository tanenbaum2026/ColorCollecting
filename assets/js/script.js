const cards = document.querySelector(".cards");

function getTextColor(color) {
    // #RRGGBB を RGB に変換
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    // 明るさを計算
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness < 128 ? "#fff" : "#000";
}

// Jsonをよみこむ
fetch('assets/json/color_code.json')
    .then(response => response.json())
    .then(colors => {
        console.log(colors);

        colors.forEach(color => {
            cards.insertAdjacentHTML("beforeend", `<div class="card">
                <ul>
                    <li style="background-color: ${color.first}; color: ${getTextColor(color.first)};">
                        <span>${color.first}</span>
                        <button type="button" aria-label="カラーコードをコピー">
                            <img src="assets/images/copy.svg" alt="copy" class="${getTextColor(color.first) === "#fff" ? "copy-white" : ""}">
                        </button>
                    </li>
                    <li style="background-color: ${color.second}; color: ${getTextColor(color.second)};">
                        <span>${color.second}</span>
                        <button type="button" aria-label="カラーコードをコピー">
                            <img src="assets/images/copy.svg" alt="copy" class="${getTextColor(color.second) === "#fff" ? "copy-white" : ""}">
                        </button>
                    </li>
                    <li style="background-color: ${color.third}; color: ${getTextColor(color.third)};">
                        <span>${color.third}</span>
                        <button type="button" aria-label="カラーコードをコピー">
                            <img src="assets/images/copy.svg" alt="copy" class="${getTextColor(color.third) === "#fff" ? "copy-white" : ""}">
                        </button>
                    </li>
                    <li style="background-color: ${color.fourth}; color: ${getTextColor(color.fourth)};">
                        <span>${color.fourth}</span>
                        <button type="button" aria-label="カラーコードをコピー">
                            <img src="assets/images/copy.svg" alt="copy" class="${getTextColor(color.fourth) === "#fff" ? "copy-white" : ""}">
                        </button>
                    </li>
                    <li style="background-color: ${color.fifth}; color: ${getTextColor(color.fifth)};">
                        <span>${color.fifth}</span>
                        <button type="button" aria-label="カラーコードをコピー" >
                            <img src="assets/images/copy.svg" alt="copy" class="${getTextColor(color.fifth) === "#fff" ? "copy-white" : ""}">
                        </button>
                    </li>
                </ul>
                <div class="title">
                    <h2>${color.title}</h2>
                </div>
            </div>`);
        });

        const copyButtons = document.querySelectorAll(".card button");

        copyButtons.forEach(button => {
            button.addEventListener("click", () => {
                const colorCode = button.parentElement.querySelector("span").textContent;

                navigator.clipboard.writeText(colorCode);
                // クリップボードにコピーしましたとかcopiedとか出したい
            });
        });
    });