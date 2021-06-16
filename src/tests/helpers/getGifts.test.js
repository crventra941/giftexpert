import { getGifts } from '../../helpers/getGifts';

describe('Pruebas con getGifts Fetch', () => {
  test('debe regresar un array de 10 elementos', async () => {
    const gifts = await getGifts('One Punch');
    // console.log(gifts);

    expect(gifts.length).toBe(10);
  });

  test('debe regresar un array de 0 elementos si no hay argumento', async () => {

    const gifts = await getGifts('');
    expect(gifts.length).toBe(0);
  });

});

