export function compareSections(
  stagingSections: any[],
  liveSections: any[]
) {

  const missingSections = [];

  for (const stagingSection of stagingSections) {

    const found = liveSections.find((liveSection) => {

      const sameHeading =
        liveSection.heading === stagingSection.heading;

      const similarImages =
        liveSection.images >= stagingSection.images * 0.5;

      const similarButtons =
        liveSection.buttons >= stagingSection.buttons * 0.5;

      return (
        sameHeading &&
        similarImages &&
        similarButtons
      );
    });

    if (!found) {

      missingSections.push({
        missingHeading: stagingSection.heading,
      });

    }
  }

  return missingSections;
}