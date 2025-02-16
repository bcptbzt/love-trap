let rejectionCount = 0;
let messages = [
    "💔 宝贝，别拒绝我好不好？🥺",
    "😭 真的不行吗？再考虑一下好吗？",
    "😢 你忍心拒绝我这么多次吗？",
    "🥺 我会洗衣做饭暖床，你再考虑考虑？",
    "😭 真的要这么狠心吗？",
    "😡 你就这么讨厌我？",
    "🤬 你再拒绝一次试试看？",
    "🥺 别这样……真的不行吗？",
    "😭 你到底什么时候才愿意？",
    "😈 好吧，你既然这么坚持，那就……答题吧！"
];

let mathQuestions = [
    { question: "2 + 2 =", answer: "4" },
    { question: "45 × 32 =", answer: "1440" },
    { question: "如果x+y=10, x²+y²=58, 求x*y =", answer: "21" }, 
    { question: "10001 ÷ 7 =", answer: "1428.71" },
    { question: "8888 × 9999 =", answer: "88871112" },
    { question: "√144 + 8 =", answer: "20" },
    { question: "(√289 + √361) × 5 =", answer: "110" },
    { question: "1+2+3+...+100 =", answer: "5050" }, 
    { question: "∫(3x^2)dx, 0到3 =", answer: "27" },
    { question: "log₂(1024) =", answer: "10" },
    { question: "n=5, 求Σ(n^2), 1≤n≤5", answer: "55" },
    { question: "∫(2x)dx, 0到5 =", answer: "25" },
    { question: "斐波那契数列第10项是多少？", answer: "55" },
    { question: "黄金比例近似值是多少？", answer: "1.618" }, 
    { question: "P=NP? 这个数学问题解决了吗？(是/否)", answer: "否" }
];

let responses = [
    "🥱 开胃小菜罢了~看看下一题吧！",
    "🧐 这也太简单了吧，来点难的！",
    "😏 秒了？那再来！",
    "🤨 还能答对？好吧，继续提高难度！",
    "😈 看来你很喜欢答题，那就继续！",
    "🤯 还在坚持？那下一题继续哦~！",
    "🔥 不是，你真来我这写题了？",
    "🚀 还在硬撑？行，我接着出！",
    "🌪 不是，你真会啊？",
    "💀 你居然真的做对了？这次换个更有难度的！",
    "🃏 摊牌了，其实我是来给你出数学题的！",
    "💡 这么犟？",
    "🔢 呜呜你宁愿做数学题也要拒绝我……",
    "🎓 真的不愿意点击认输嘛~",
    "🛑 到此为止！你真的不考虑直接答应我吗？！"
];

let currentQuestionIndex = 0;

function acceptLove() {
    document.body.innerHTML = `
        <h1>💖 太好了！我就知道你一定会愿意！💖</h1>
        <p>我们的幸福从今天开始！🥰</p >
        <button onclick="startHeartRain()">💞 撒一波爱心雨！💞</button>
        <audio autoplay loop src="your-music.mp3"></audio>
    `;
}

function rejectLove() {
    let messageContainer = document.getElementById("messageContainer");

    if (rejectionCount < messages.length) {
        let newMessage = document.createElement("p");
        newMessage.innerText = messages[rejectionCount];
        messageContainer.appendChild(newMessage);
        rejectionCount++;
    } else {
        startMathChallenge();
    }
}

function startMathChallenge() {
    let container = document.getElementById("container");
    container.innerHTML = `
        <h1>📚 既然你不愿意，那就来挑战数学题吧！📚</h1>
        <p id="mathQuestion">${mathQuestions[currentQuestionIndex].question}</p >
        <input type="text" id="answerInput" placeholder="请输入答案">
        <button onclick="checkAnswer()">提交答案</button>
        <button onclick="acceptLove()">我认输！我答应你！</button>
        <div id="responseContainer"></div>
    `;
}

function checkAnswer() {
    let input = document.getElementById("answerInput").value;
    let responseContainer = document.getElementById("responseContainer");

    if (input === mathQuestions[currentQuestionIndex].answer) {
        let newResponse = document.createElement("p");
        newResponse.innerText = responses[currentQuestionIndex];
        responseContainer.appendChild(newResponse);

        currentQuestionIndex++;
        if (currentQuestionIndex < mathQuestions.length) {
            document.getElementById("mathQuestion").innerText = mathQuestions[currentQuestionIndex].question;
            document.getElementById("answerInput").value = "";
        } else {
            declareVictory();
        }
    } else {
        alert("答错了哦，再试一次吧！");
    }
}

function declareVictory() {
    document.body.innerHTML = `
        <h1>🎉 天哪！你竟然全都答对了！高智商啊！🎉</h1>
        <p>不行，我更爱了！我要耍赖了哈哈哈~ 我宣布你就是我的对象啦啦啦~ 💗💗💗</p >
        <button onclick="startHeartRain()">💞 撒一波爱心雨！💞</button>
    `;
}

function startHeartRain() {
    let heartContainer = document.createElement("div");
    heartContainer.classList.add("heart-rain");
    document.body.appendChild(heartContainer);

    for (let i = 0; i < 100; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        heartContainer.appendChild(heart);
    }
}
