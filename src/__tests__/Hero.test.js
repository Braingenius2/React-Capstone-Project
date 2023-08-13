import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';
import continentMaps from '../components/continentsMaps';

describe('The Hero component', () => {
  test('should render correctly into the DOM', () => {
    const { container } = render(
      <Hero
        srcImg={continentMaps.Asia}
        name="Asia"
        information={[{ stats: '224,317', text: 'cases' }]}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test('should render the text: Europe with an empty array in the information prop and no image', () => {
    const props = {
      srcImg: 'no-image',
      name: 'Europe',
      information: [],
    };
    render(<Hero srcImg={props.srcImg} name={props.name} information={props.information} />);
    const hero = screen.getByText('Europe');
    expect(hero).toBeInTheDocument();
  });

  test('should render the text: South America with 3 elements in the information prop array', () => {
    render(
      <Hero
        srcImg={continentMaps['South America']}
        name="South America"
        information={[
          { stats: '68,905,921', text: 'total cases' },
          { stats: '1,359,165', text: 'deaths' },
          { stats: '66,504,727', text: 'recovered' },
        ]}
      />,
    );
    const hero = screen.getByText('South America');
    expect(hero).toBeInTheDocument();
  });
});
