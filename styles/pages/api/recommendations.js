// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'ELORA',
    image: 'images/logo.jpeg',
    designation: 'Naturally Better Skin',
    view: `⇾ ELORA is a premium herbal skincare brand focused on tan removal and skin restoration using nature-powered ingredients. Our brand was born from a simple idea — to create skincare products that are effective, safe, and beautiful to use.
We combine traditional Indian herbal knowledge with modern formulation standards to deliver soaps that work gently yet effectively on everyday skin problems.

⇾ Our Philosophy
We believe:
Skincare should be honest and safe
Nature provides the best solutions
Luxury should be accessible
Consistent care brings lasting results
ELORA products are free from harsh chemicals and suitable for regular use by all age groups.

⇾ Our Mission
To provide premium-quality herbal skincare products that improve skin health naturally while maintaining affordability and trust.

⇾ Our Vision
To build ELORA into a trusted Indian herbal skincare brand with a strong national and global presence.`,
  },
];

export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
