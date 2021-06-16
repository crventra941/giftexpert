import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import '@testing-library/jest-dom';

describe('Pruebas en componente <GifGridItem /> ', () => {
  const imgTest = {
    title: "prueba.png",
    url: "Prueba.png"
  }

  const wrapper = shallow(<GifGridItem img={imgTest} />);

  test('debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener un parrafo con el title', () => {
    const p = wrapper.find('p');

    expect(p.text().trim()).toBe(imgTest.title);
  });

  test('debe de tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');
    // console.log(img.props())
    expect(img.prop('src')).toBe(imgTest.url);
    expect(img.prop('alt')).toBe(imgTest.title);

  });

  test('debe tener la clase animate__fadeIn', () => {
    const div = wrapper.find('div');
    // Otra solucion
    /*
     * const className = div.prop('className');
     * expect(className.includes('animate__fadeIn')).toBe(true);
     *
     * */
    const hasClass = div.find('.card').hasClass('animate__fadeIn');
    expect(hasClass).toBe(true);

  });

});

