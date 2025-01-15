import Image from 'next/image';

type PortfolioItem = {
  name: string;
  imageUrl: string;
  description: string;
  link: string;
};

const portFolioItems: PortfolioItem[] = [
  {
    name: 'SignalSynth',
    imageUrl:
      'https://www.mathworks.com/help/examples/matlab/win64/FourierTransformsExample_04.png',
    description:
      'A tool for visualizing fourier series and synthesize signals made in ReactJs and d3.',
    link: 'https://www.google.com',
  },
  {
    name: 'SomeProject',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Tabby_cat_with_visible_nictitating_membrane.jpg/1024px-Tabby_cat_with_visible_nictitating_membrane.jpg',
    description:
      'A tool for visualizing fourier series and synthesize signals made in ReactJs and d3',
    link: 'https://www.google.com',
  },
];

export default function PortfolioPage() {
  return (
    <>
      <h1>Portfolio</h1>
      {portFolioItems.map((item, idx) => (
        <section
          className={`portfolio-section ${idx % 2 ? 'reverse' : ''}`}
          key={item.name}
        >
          <div className="portfolio-image-container">
            <Image src={item.imageUrl} alt={item.name} fill sizes="20rem" />
          </div>
          <h3 className="portfolio-name">{item.name}</h3>
          <p className="portfolio-description">{item.description}</p>
          <p className="portfolio-link">
            Try it out <a href={item.link}>here</a>
          </p>
        </section>
      ))}
    </>
  );
}
