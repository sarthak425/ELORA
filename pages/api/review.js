const review = [
    {
        id: 0,
        clientName: 'Neem Purifying Soap',
        clientLocation: 'Best For: Oily & acne-prone skin',
        clientReview: 'Benefits Removes tan and excess oil Antibacterial & antifungal Prevents pimples and breakouts Deeply cleanses skin pores Helps With (Causes) Acne & pimples Skin infections Excess oil & pollution damage Uneven skin tone'
    },
    {
        id: 2,
        clientName: 'Aloe Vera Soothing Soap',
        clientLocation: 'Best For: Sensitive & dry skin',
        clientReview: 'Benefits Deep hydration & skin repair Reduces tanning and sun damage Calms irritated skin Improves natural glow Helps With (Causes) Sunburn Dry & itchy skin Skin irritation & redness Dehydration.'
    },
    {
        id: 3,
        clientName: 'Haldi Besan Brightening Soap',
        clientLocation: 'Best For: Dull & tanned skin ',
        clientReview: "Benefits Natural skin brightening Removes dead skin cells Improves complexion Controls excess oil Helps With (Causes) Tanning & pigmentation Dullness Uneven skin tone Excess oil buildup ."
    },
    {
        id: 4,
        clientName: 'Rose Refreshing Soap',
        clientLocation: 'Best For: Normal to dry skin ',
        clientReview: 'Best For: Normal to dry skin Benefits Maintains skin moisture Refreshes tired skin Improves skin texture Adds natural fragrance Helps With (Causes) Dryness Dull-looking skin Loss of skin freshness Mild irritation'
    },
    {
        id: 5,
        clientName: 'Curry Leaves Strengthening Soap',
        clientLocation: 'Best For: Weak & uneven skin ',
        clientReview: 'Benefits Strengthens skin cells Improves skin clarity Enhances natural complexion Rich in antioxidants Helps With (Causes) Premature aging Uneven skin tone Weak skin barrier Environmental damage'
    },
     {
        id: 6,
        clientName: 'Rice Milk Nourishing Soap',
        clientLocation: 'Best For: All skin types',
        clientReview: ' Benefits Improves skin fairness naturally Smoothens skin texture Boosts skin elasticity Gives soft & glowing skin Helps With (Causes) Pigmentation Rough skin Uneven texture Early signs of aging.'
    }, {
        id: 7,
        clientName: 'Charcoal Detox Soap',
        clientLocation: 'Best For: Oily & polluted skin',
        clientReview: 'Benefits Removes deep-seated dirt Detoxifies skin Controls oil production Clears clogged pores Helps With (Causes) Pollution damage Blackheads & whiteheads Excess oil Urban skin stress '
    }, {
        id: 8,
        clientName: 'Tulsi Healing Soap',
        clientLocation: 'Best For: Problematic & acne-prone skin ',
        clientReview: 'Benefits Natural antibacterial protection Purifies blood & skin Improves immunity of skin Promotes clear skin Helps With (Causes) Acne & pimples Skin infections Bacterial buildup Inflammation.'
    }, {
        id: 9,
        clientName: 'Sandalwood Cooling Soap',
        clientLocation: 'Best For: Sensitive & heated skin ',
        clientReview: 'Benefits Cooling effect on skin Reduces tanning Improves complexion Gives calming fragrance Helps With (Causes) Heat rashes Sun exposure Pigmentation Skin irritation. '
    }, {
        id: 10,
        clientName: 'Multani Mitti Cleansing Soap',
        clientLocation: 'Best For: Oily skin ',
        clientReview: 'Benefits Absorbs excess oil Deep pore cleansing Brightens skin tone Refreshes skin Helps With (Causes) Oily skin Acne Blocked pores Tanning '
    },
  {
        id: 11,
        clientName: 'Pudina (Mint) Cooling Soap',
        clientLocation: 'Best For: Summer skincare',
        clientReview: 'Benefits Cooling & refreshing Controls excess oil Revitalizes tired skin Improves blood circulation Helps With (Causes) Heat stress Sweating-related skin issues Dull skin Fatigue of skin. '
    }, {
        id: 12,
        clientName: 'Lemon Brightening Soap',
        clientLocation: 'Best For: Tanned & oily skin',
        clientReview: 'Benefits Natural bleaching effect Reduces dark spots Controls oil Refreshes skin Helps With (Causes) Sun tan Dark spots Oily skin Pigmentation '
    },{
        id: 13,
        clientName: 'Shea Butter Moisturizing Soap',
        clientLocation: 'Best For: Very dry & sensitive skin ',
        clientReview: 'Benefits Deep moisturization Repairs damaged skin Improves skin elasticity Prevents dryness Helps With (Causes) Extreme dryness Cracked skin Skin irritation Loss of moisture. '
    },{
        id: 14,
        clientName: 'Ubtan (Utane) Traditional Soap',
        clientLocation: 'Best For: All skin types ',
        clientReview: 'Benefits Traditional tan removal Improves glow Removes dead skin Enhances natural complexion Helps With (Causes) Tanning Dull skin Dead skin buildup Uneven skin tone. '
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
