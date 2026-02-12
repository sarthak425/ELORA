const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Future Analytics Plan',
                degree: `1️⃣ Sales Analytics
2️⃣ Marketing Analytics
3️⃣ Customer Analytics
4️⃣ Financial Analytics
5️⃣ Expansion Analytics`,
                },
            {
                id: 1,
                title: '1️⃣ Sales Analytics Plan',
                detail: `Total units sold Revenue Cost per unit Gross profit margin Best-selling variant Channel-wise sales (Amazon, Website, Retail) Example Target: Year 1 Goal: 50,000 soaps sold ₹60–70 lakh revenue 50%+ gross margin Year 2: 2 lakh soaps ₹2–3 crore revenue Year 3: Add new products ₹5–7 crore target Investors want growth curve.`,
                year: '2015-2017'
            },
            {
                id: 2,
                title: '2️⃣ Marketing Analytics Plan',
                detail: "You must track: Customer Acquisition Cost (CAC) Return on Ad Spend (ROAS) Conversion rate (website visitors → buyers) Social media engagement rate Influencer performance 🎯 Ideal Targets: CAC below ₹40–50 ROAS above 3x Conversion rate above 2–3% If ads spend ₹1 lakh and you generate ₹3 lakh revenue → very strong.",
                year: '2013-2015'
            },
             {
                id: 3,
                title: '3️⃣ Customer Analytics Plan',
                detail: "This is very powerful. Track: Repeat purchase rate Customer lifetime value (LTV) Product return rate Customer reviews rating 🎯 Ideal Numbers: Repeat purchase rate: 30%+ Average rating: 4+ stars Subscription growth month by month Soap is repeat product — use that advantage.",
                year: '2013-2015'
            },
             {
                id: 4,
                title: '4️⃣ Financial Analytics Plan',
                detail: "Track monthly: Net profit Burn rate Inventory turnover Working capital cycle If inventory sells in 30–45 days → healthy business. If stock sits for 6 months → problem..",
                year: '2013-2015'
            },
             {
                id: 5,
                title: '5️⃣ Expansion Analytics (3-Year Plan)',
                detail: "Year 1: Build brand Sell 3 hero soaps Break-even Year 2: Add face wash + body wash Expand to Amazon + Flipkart Increase production Year 3: PAN India distribution Enter modern retail Consider export Investors want scalability plan. 📈 Important KPIs You Must Show Investors 50%+ gross margin Growing monthly sales Decreasing customer acquisition cost Increasing repeat buyers Clear product-market fit 🧠 Tools You Should Use Google Analytics (website tracking) Meta Ads Manager (ad performance) Amazon Seller Dashboard Simple Excel profit sheet Data-driven founder = investor confidence.",
                year: '2013-2015'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Marketing ',
                desc: `1️⃣ Organic Instagram + Reels Marketing (Free but powerful)
                2️⃣ WhatsApp & Local Network Marketing
                3️⃣ Micro Influencer Strategy (Low Budget Killer Move)
                4️⃣ Amazon + Flipkart Listing
                5️⃣ Local Retail Entry
                6️⃣ 7-Day Skin Challenge Campaign`,
            },
            {
                id: 2,
                title: '1️⃣ Organic Instagram + Reels Marketing (Free but powerful)',
                desc: 'Post 4 times per week: Skincare tips Ingredient benefits (Neem, Haldi, Rice, etc.) Farm harvesting clips Soap making process Before/after results Customer reviews 👉 Use simple clean background. 👉 Good lighting. 👉 Consistency > perfection. Big brands look corporate. You look authentic.',
            },
            {
                id: 3,
                title: '2️⃣ WhatsApp & Local Network Marketing',
                desc: "Start with: Friends College groups Family network Local gym groups Beauty parlours Give: Intro discount + feedback form. Early customers = future ambassadors.",
            }, {
                id: 4,
                title: '3️⃣ Micro Influencer Strategy (Low Budget Killer Move)',
                desc: 'Work with: 5k–20k follower creators Local skincare creators College influencers Send free products. Ask for honest review. Better than paying ₹50k to one big influencer.',
            }, {
                id: 5,
                title: '4️⃣ Amazon + Flipkart Listing',
                desc: 'Even if you sell from website: List on Amazon. Why? People trust Amazon reviews. It builds credibility.',
            }, {
                id: 6,
                title: '5️⃣ Local Retail Entry',
                desc: 'Start with: Medical stores Kirana stores Beauty shops Salons Offer: 20–30% margin to retailer. Even if 20 stores sell 20 soaps per month: 20 × 20 = 400 soaps monthly steady income.',
            },{
                id: 7,
                title: '5️⃣ 7-Day Skin Challenge Campaign',
                desc: 'Run campaign: “7 Days with Elora” Encourage: Before/after photos Tag your page Win free combo Creates: Social proof + trust + free marketing.',
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
