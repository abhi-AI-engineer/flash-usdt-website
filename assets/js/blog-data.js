// assets/js/blog-data.js

const blogPosts = [
    {
        id: 1,
        title: "Is Bitcoin in a Dangerous Bubble?",
        image: "assets/images/blog/blog1.jpg", // Yahan apni image ka path daalein
        date: "20 Aug",
        excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        content: `
            <h2>Is Bitcoin Really in a Bubble? Let's Dive Deep.</h2>
            <p>The cryptocurrency market, particularly Bitcoin, has seen unprecedented growth over the past few years. This has led many financial experts to draw parallels with historical economic bubbles, like the dot-com boom of the late 90s. But is it really a bubble waiting to pop?</p>
            <p>Unlike traditional assets, Bitcoin's value is driven by a unique combination of factors: scarcity (only 21 million will ever exist), decentralization, and growing adoption by both retail and institutional investors. While volatility is high, many argue that this is a sign of a maturing asset class, not an irrational bubble.</p>
            <img src="assets/images/blog/blog-1-content.jpg" class="img-fluid rounded my-3" alt="Bitcoin Analysis">
            <p>Ultimately, whether Bitcoin is in a bubble is a matter of perspective. It's crucial for investors to do their own research and understand the risks involved before investing.</p>
        `
    },
    {
        id: 2,
        title: "The Future of Finance by Tech?",
        image: "assets/images/blog/blog-2.jpg",
        date: "22 Aug",
        excerpt: "Fintech is revolutionizing the way we handle money. From digital payments to decentralized finance (DeFi), technology is reshaping the financial landscape.",
        content: `
            <h2>How Technology is Reshaping Finance</h2>
            <p>Fintech, or financial technology, is no longer a niche industry. It's at the forefront of a global transformation. The rise of digital wallets, peer-to-peer lending platforms, and robo-advisors has made financial services more accessible and efficient than ever before.</p>
            <p>The most exciting development is Decentralized Finance (DeFi). Built on blockchain technology, DeFi aims to create an open-source, permissionless, and transparent financial service ecosystem. This could potentially eliminate the need for traditional financial intermediaries like banks.</p>
        `
    },
    {
        id: 3,
        title: "What is cryptocurrency mining?",
        image: "assets/images/blog/blog-3.jpg",
        date: "24 Aug",
        excerpt: "Cryptocurrency mining is the process by which new cryptocurrencies are created and new transactions are verified and added to the blockchain.",
        content: `
            <h2>The A-Z of Cryptocurrency Mining</h2>
            <p>Cryptocurrency mining is the backbone of many cryptocurrencies like Bitcoin. Miners use powerful computers to solve complex mathematical problems. The first miner to solve the problem gets to add the next block to the blockchain and is rewarded with a certain amount of cryptocurrency.</p>
            <p>This process, known as Proof-of-Work (PoW), serves two main purposes: it confirms transactions in a trustless manner and it creates new coins in a predictable way. However, it is a very energy-intensive process, leading to the development of alternative consensus mechanisms like Proof-of-Stake (PoS).</p>
        `
    },
    // Aap yahan aur bhi posts add kar sakte hain...
    // Example ke liye 3 posts kaafi hain.
];