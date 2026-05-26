import * as cheerio from 'cheerio';

export function extractSections(html: string) {

  const $ = cheerio.load(html);

  const sections: any[] = [];

  $('section, .elementor-section').each((_, el) => {

    const section = {

      heading:
        $(el)
          .find('h1,h2,h3')
          .first()
          .text()
          .trim(),

      images:
        $(el).find('img').length,

      buttons:
        $(el).find('button,a').length,

      forms:
        $(el).find('form').length,

      accordions:
        $(el).find('.accordion,.elementor-accordion').length,

      tabs:
        $(el).find('.tabs,.elementor-tabs').length,

      textLength:
        $(el).text().trim().length,
    };

    sections.push(section);
  });

  return sections;
}