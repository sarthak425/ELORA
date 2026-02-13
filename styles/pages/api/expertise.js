const expertise = [
    {
        id: 0,
        title: 'Business Overview',
        desc: 'ELORA is a premium herbal skincare brand focused on tan removal and skin repair, crafted using natural, time-tested Indian ingredients and presented in a modern, luxury format. Our products are designed to address everyday skin concerns caused by sun exposure, pollution, oily skin, acne, and uneven tone, without the use of harsh chemicals. ELORA combines traditional herbal wisdom with contemporary formulation standards, making our soaps safe, effective, and suitable for daily use across all age groups. The brand positions itself between mass-market soaps and expensive cosmetic brands, offering premium quality at an affordable price point.',
    },
    {
        id: 1,
        title: 'Problem We Solve',
        desc: "Indian skin faces multiple challenges: Heavy sun exposure leading to tanning Pollution-induced dullness Rising cases of oily & acne-prone skin Sensitivity caused by chemical-based soaps Most commercial soaps either: Focus only on fragrance, or Use strong chemicals that damage skin over time ELORA fills this gap by offering herbal, skin-beneficial soaps that cleanse, repair, and protect the skin naturally.",
    },
    {
        id: 2,
        title: 'Our Product Range',
        desc: 'ELORA offers a focused yet scalable product line of herbal tan-removal soaps, each designed for specific skin needs: Neem – Acne control & oily skin care Aloe Vera – Hydration & soothing Haldi & Besan – Tan removal & brightening Rose – Skin calming & freshness Rice Milk – Whitening & smooth texture Charcoal – Deep cleansing & pollution defense Tulsi – Anti-bacterial protection Sandalwood – Even tone & luxury care Multani Mitti – Oil control & detox Pudina & Lemon – Cooling & refreshing Shea Butter – Nourishment for dry skin Ubtan – Traditional glow & exfoliation Each soap is 100% herbal-inspired, free from harsh chemicals, and suitable for daily use.',
    },
    {
        id: 3,
        title: 'Target Customers',
        desc: "Our primary customer segments include: Urban & semi-urban consumers Age group 18–45 People with: Oily skin Acne-prone skin Dull & tanned skin Sensitive or dry skin Customers looking for: Herbal alternatives Premium packaging Affordable luxury skincare ELORA is designed for both men and women, making it a unisex daily-use brand.",
    },
    {
        id: 4,
        title: 'Unique Selling Proposition (USP)',
        desc: "Herbal + modern skincare approach Focused on tan removal & skin repair Premium packaging that builds trust Easy-to-remember brand name Strong visual identity (logo + embossed soaps) Affordable pricing compared to cosmetic brands",
    },  {
        id: 5,
        title: 'Branding & Packaging Strategy',
        desc: "ELORA uses minimal, elegant, premium packaging inspired by luxury skincare brands. Key highlights: Soft neutral colors Ingredient-based color coding Embossed logo on soap bars Eco-friendly packaging approach This positioning helps ELORA: Look premium on shelves Gain trust from financers & distributors Appeal to modern and traditional customers alike",
    },  {
        id: 6,
        title: 'Sales & Market Potential',
        desc: "India’s herbal skincare market is growing rapidly due to: Rising awareness of natural products Increase in skin problems due to pollution Shift from chemical to herbal solutions ELORA targets: Retail stores Medical & cosmetic shops Online platforms (future expansion) Salons & wellness centers With scalable production and strong branding, ELORA has high repeat-purchase potential.",
    }, {
        id: 7,
        title: 'Future Growth Plan',
        desc: "Expansion into: Face washes Body washes Face packs Launch of combo kits & gift packs Strong online presence Distribution partnerships Export-ready packaging (long-term vision)",
    }, {
        id: 8,
        title: 'Why Invest in ELORA',
        desc: "High-demand product category Strong branding foundation Affordable production & good margins Scalable business model Growing herbal skincare market",
    }, {
        id: 6,
        title: 'Vision & Mission',
        desc: "Vision: To become a trusted Indian herbal skincare brand delivering visible results through natural care. Mission: To provide safe, effective, and premium herbal skincare solutions that improve everyday skin health.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
